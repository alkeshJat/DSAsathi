import { createContext, useContext, useState, useEffect } from 'react';
import {
  auth,
  googleProvider,
  isConfigured,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from '../firebase';

// ── Local (non-Firebase) fallback storage ─────────────────────────────────
const LOCAL_USERS_KEY   = 'dsasathi-local-users';
const LOCAL_SESSION_KEY = 'dsasathi-session';

function getLocalUsers() {
  try { return JSON.parse(localStorage.getItem(LOCAL_USERS_KEY) || '[]'); }
  catch { return []; }
}
function saveLocalUsers(u) { localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(u)); }
function getLocalSession() {
  try { return JSON.parse(localStorage.getItem(LOCAL_SESSION_KEY) || 'null'); }
  catch { return null; }
}

// Normalise any user object (Firebase or local) into a consistent shape
function normaliseUser(raw) {
  if (!raw) return null;
  return {
    id:       raw.uid || raw.id,
    name:     raw.displayName || raw.name || 'Anonymous',
    email:    raw.email || '',
    avatar:   raw.photoURL || raw.avatar || (raw.displayName || raw.name || 'A')[0].toUpperCase(),
    photoURL: raw.photoURL || null,
    provider: raw.provider || (raw.providerData?.[0]?.providerId ?? 'local'),
  };
}

// ── Context ────────────────────────────────────────────────────────────────
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user,      setUser]      = useState(null);
  const [loading,   setLoading]   = useState(true);
  const [authError, setAuthError] = useState('');

  // ── Initialise: Firebase listener OR local session ─────────────────────
  useEffect(() => {
    if (isConfigured && auth) {
      const unsub = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser ? normaliseUser(firebaseUser) : null);
        setLoading(false);
      });
      return unsub;
    } else {
      // Fallback: load local session
      setUser(getLocalSession());
      setLoading(false);
    }
  }, []);

  // ─── Helpers ──────────────────────────────────────────────────────────
  const clearError = () => setAuthError('');

  // Save normalised user to state (and localStorage for local mode)
  function applyUser(u) {
    const norm = normaliseUser(u);
    if (!isConfigured) localStorage.setItem(LOCAL_SESSION_KEY, JSON.stringify(norm));
    setUser(norm);
  }

  // ─── Firebase: Email/Password Register ───────────────────────────────
  const signup = async (name, email, password) => {
    setAuthError('');
    if (!name.trim())            { setAuthError('Name is required.');                   return false; }
    if (!email.trim())           { setAuthError('Email is required.');                  return false; }
    if (password.length < 6)     { setAuthError('Password must be at least 6 chars.'); return false; }

    if (isConfigured) {
      try {
        const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
        await updateProfile(cred.user, { displayName: name.trim() });
        // onAuthStateChanged will fire and update user
        return true;
      } catch (err) {
        setAuthError(friendlyError(err.code));
        return false;
      }
    } else {
      // ── Local fallback ──
      const users = getLocalUsers();
      if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
        setAuthError('An account with this email already exists.'); return false;
      }
      const newUser = {
        id: `user_${Date.now()}`, name: name.trim(),
        email: email.trim().toLowerCase(), password,
        avatar: name.trim()[0].toUpperCase(), provider: 'local',
        createdAt: new Date().toISOString(),
      };
      saveLocalUsers([...users, newUser]);
      applyUser(newUser);
      return true;
    }
  };

  // ─── Firebase: Email/Password Login ──────────────────────────────────
  const login = async (email, password) => {
    setAuthError('');
    if (!email.trim() || !password)  { setAuthError('Email and password are required.'); return false; }

    if (isConfigured) {
      try {
        await signInWithEmailAndPassword(auth, email.trim(), password);
        return true;
      } catch (err) {
        setAuthError(friendlyError(err.code));
        return false;
      }
    } else {
      // ── Local fallback ──
      const found = getLocalUsers().find(
        u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );
      if (!found) { setAuthError('Invalid email or password.'); return false; }
      applyUser(found);
      return true;
    }
  };

  // ─── Firebase: Google Sign-in ─────────────────────────────────────────
  const loginWithGoogle = async () => {
    setAuthError('');
    if (isConfigured) {
      try {
        await signInWithPopup(auth, googleProvider);
        return true;
      } catch (err) {
        if (err.code !== 'auth/popup-closed-by-user') {
          setAuthError(friendlyError(err.code));
        }
        return false;
      }
    } else {
      // ── Simulated Google in local mode ──
      const googleUser = {
        id: `google_${Date.now()}`,
        name: 'Google User',
        email: `google.user.${Date.now()}@gmail.com`,
        avatar: 'G',
        photoURL: null,
        provider: 'google.com',
      };
      applyUser(googleUser);
      return true;
    }
  };

  // ─── Logout ───────────────────────────────────────────────────────────
  const logout = async () => {
    if (isConfigured && auth) await signOut(auth);
    localStorage.removeItem(LOCAL_SESSION_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, authError, signup, login, loginWithGoogle, logout, clearError }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() { return useContext(AuthContext); }

// ── Map Firebase error codes → friendly messages ───────────────────────────
function friendlyError(code) {
  const map = {
    'auth/email-already-in-use':    'An account with this email already exists.',
    'auth/invalid-email':           'Please enter a valid email address.',
    'auth/weak-password':           'Password must be at least 6 characters.',
    'auth/user-not-found':          'No account found with this email.',
    'auth/wrong-password':          'Incorrect password. Please try again.',
    'auth/invalid-credential':      'Invalid email or password.',
    'auth/too-many-requests':       'Too many attempts. Please wait a moment.',
    'auth/network-request-failed':  'Network error. Check your connection.',
    'auth/popup-blocked':           'Popup was blocked. Allow popups for this site.',
    'auth/cancelled-popup-request': '',
  };
  return map[code] || 'Something went wrong. Please try again.';
}
