import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import { isConfigured } from '../../firebase';

// ── Google SVG ────────────────────────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
  );
}

// ── Eye icon ──────────────────────────────────────────────────────────────
function EyeIcon({ open }) {
  return open ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

// ── Input field component ─────────────────────────────────────────────────
function Field({ label, id, type = 'text', value, onChange, placeholder, error, children, autoFocus }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-gray-400 mb-1.5 tracking-wide">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={`w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200
            ${error
              ? 'border border-red-500/60 bg-red-500/5 focus:border-red-400'
              : 'border border-white/10 bg-white/[0.04] focus:border-amber-500/50 focus:bg-white/[0.06]'
            }`}
        />
        {children}
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-xs mt-1 flex items-center gap-1"
        >
          <span>⚠</span> {error}
        </motion.p>
      )}
    </div>
  );
}

// ── Main Modal ────────────────────────────────────────────────────────────
export default function AuthModal({ onClose }) {
  const [tab,        setTab]        = useState('login');     // 'login' | 'signup'
  const [name,       setName]       = useState('');
  const [email,      setEmail]      = useState('');
  const [password,   setPassword]   = useState('');
  const [confirmPw,  setConfirmPw]  = useState('');
  const [showPw,     setShowPw]     = useState(false);
  const [showCPw,    setShowCPw]    = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [googleBusy, setGoogleBusy] = useState(false);

  // Per-field errors
  const [fieldErrors, setFieldErrors]  = useState({});
  const { login, signup, loginWithGoogle, authError, clearError } = useAuth();

  // ── Switch tab ──────────────────────────────────────────────────────────
  const switchTab = (t) => {
    clearError();
    setFieldErrors({});
    setTab(t);
    setName(''); setEmail(''); setPassword(''); setConfirmPw('');
  };

  // ── Validate ────────────────────────────────────────────────────────────
  function validate() {
    const errs = {};
    if (tab === 'signup' && !name.trim()) errs.name = 'Name is required.';
    if (!email.trim())                    errs.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = 'Enter a valid email.';
    if (!password)                         errs.password = 'Password is required.';
    else if (password.length < 6)          errs.password = 'At least 6 characters.';
    if (tab === 'signup' && password !== confirmPw) errs.confirmPw = 'Passwords do not match.';
    return errs;
  }

  // ── Submit ──────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    const errs = validate();
    if (Object.keys(errs).length) { setFieldErrors(errs); return; }
    setFieldErrors({});
    setSubmitting(true);
    let ok;
    if (tab === 'login')  ok = await login(email, password);
    else                   ok = await signup(name, email, password);
    setSubmitting(false);
    if (ok) onClose();
  };

  // ── Google ──────────────────────────────────────────────────────────────
  const handleGoogle = async () => {
    clearError();
    setGoogleBusy(true);
    const ok = await loginWithGoogle();
    setGoogleBusy(false);
    if (ok) onClose();
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center px-4"
        style={{ background: 'rgba(0,0,0,0.80)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      >
        {/* Card */}
        <motion.div
          key="card"
          initial={{ scale: 0.92, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 16 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[420px] relative rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(10, 10, 20, 0.92)',
            backdropFilter: 'blur(40px) saturate(200%)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(212,175,55,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Top shimmer */}
          <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.8) 40%, rgba(212,175,55,1) 50%, rgba(212,175,55,0.8) 60%, transparent)' }} />

          {/* Gold glow orbs */}
          <div className="absolute -top-16 -right-16 w-48 h-48 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)' }} />

          <div className="relative z-10 p-7">

            {/* Header row */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center font-black text-xs text-black"
                    style={{ background: 'linear-gradient(135deg,#E8C54A,#B89B2A)' }}>D</div>
                  <span className="font-black text-sm">
                    <span className="gradient-text">DSA</span><span className="text-white">sathi</span>
                  </span>
                </div>
                <p className="text-gray-500 text-xs">
                  {tab === 'login' ? 'Welcome back! Sign in to continue.' : 'Create your free account today.'}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-white hover:bg-white/10 transition-all text-base"
              >✕</button>
            </div>

            {/* ── Tabs ── */}
            <div className="flex rounded-xl p-1 mb-6 relative" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {['login', 'signup'].map(t => (
                <button
                  key={t}
                  onClick={() => switchTab(t)}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 relative z-10
                    ${tab === t ? 'text-black' : 'text-gray-500 hover:text-gray-300'}`}
                  style={tab === t ? {
                    background: 'linear-gradient(135deg,#E8C54A,#D4AF37)',
                    boxShadow: '0 2px 12px rgba(212,175,55,0.3)',
                  } : {}}
                >
                  {t === 'login' ? 'Sign In' : 'Register'}
                </button>
              ))}
            </div>

            {/* ── Google Button ── */}
            <button
              id="btn-google-auth"
              onClick={handleGoogle}
              disabled={googleBusy}
              className="w-full flex items-center justify-center gap-3 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] mb-4 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.14)',
                color: '#e5e7eb',
              }}
            >
              {googleBusy ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 rounded-full border-2 border-gray-500 border-t-white"
                />
              ) : <GoogleIcon />}
              <span>{googleBusy ? 'Connecting…' : 'Continue with Google'}</span>
              {!isConfigured && <span className="ml-auto text-[10px] text-gray-700 font-mono">(demo)</span>}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
              <span className="text-[11px] font-mono text-gray-600 uppercase tracking-wider">or continue with email</span>
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
            </div>

            {/* ── Form ── */}
            <form onSubmit={handleSubmit} noValidate>
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, x: tab === 'login' ? -12 : 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: tab === 'login' ? 12 : -12 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-4"
                >
                  {/* Name — signup only */}
                  {tab === 'signup' && (
                    <Field
                      id="auth-name"
                      label="Full Name"
                      value={name}
                      onChange={e => { setName(e.target.value); setFieldErrors(p => ({ ...p, name: '' })); }}
                      placeholder="John Doe"
                      error={fieldErrors.name}
                      autoFocus
                    />
                  )}

                  {/* Email */}
                  <Field
                    id="auth-email"
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setFieldErrors(p => ({ ...p, email: '' })); }}
                    placeholder="you@example.com"
                    error={fieldErrors.email}
                    autoFocus={tab === 'login'}
                  />

                  {/* Password */}
                  <Field
                    id="auth-password"
                    label="Password"
                    type={showPw ? 'text' : 'password'}
                    value={password}
                    onChange={e => { setPassword(e.target.value); setFieldErrors(p => ({ ...p, password: '' })); }}
                    placeholder={tab === 'signup' ? 'Min. 6 characters' : '••••••••'}
                    error={fieldErrors.password}
                  >
                    <button
                      type="button"
                      onClick={() => setShowPw(v => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-amber-400 transition-colors"
                    >
                      <EyeIcon open={showPw} />
                    </button>
                  </Field>

                  {/* Confirm password — signup only */}
                  {tab === 'signup' && (
                    <Field
                      id="auth-confirm-pw"
                      label="Confirm Password"
                      type={showCPw ? 'text' : 'password'}
                      value={confirmPw}
                      onChange={e => { setConfirmPw(e.target.value); setFieldErrors(p => ({ ...p, confirmPw: '' })); }}
                      placeholder="Re-enter your password"
                      error={fieldErrors.confirmPw}
                    >
                      <button
                        type="button"
                        onClick={() => setShowCPw(v => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-amber-400 transition-colors"
                      >
                        <EyeIcon open={showCPw} />
                      </button>
                    </Field>
                  )}

                  {/* Firebase / global error banner */}
                  {authError && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2.5 px-4 py-3 rounded-xl text-sm text-red-300"
                      style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}
                    >
                      <span className="mt-0.5 flex-shrink-0">⚠</span>
                      <span>{authError}</span>
                    </motion.div>
                  )}

                  {/* Firebase not configured notice */}
                  {!isConfigured && (
                    <div className="flex items-start gap-2 text-[11px] text-amber-600/70 font-mono px-1">
                      <span>ℹ</span>
                      <span>Firebase not configured — using local storage mode. Add Firebase keys to .env to enable real auth.</span>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    id={tab === 'login' ? 'btn-signin' : 'btn-register'}
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl text-sm font-bold text-black transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                    style={{
                      background: 'linear-gradient(135deg,#F0D060 0%,#D4AF37 60%,#B89B2A 100%)',
                      boxShadow: '0 6px 24px rgba(212,175,55,0.3)',
                    }}
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 rounded-full border-2 border-yellow-900/40 border-t-yellow-900"
                        />
                        {tab === 'login' ? 'Signing in…' : 'Creating account…'}
                      </span>
                    ) : (
                      tab === 'login' ? 'Sign In →' : 'Create Account →'
                    )}
                  </button>
                </motion.div>
              </AnimatePresence>
            </form>

            {/* Switch mode */}
            <p className="text-center text-xs text-gray-600 mt-5">
              {tab === 'login' ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => switchTab(tab === 'login' ? 'signup' : 'login')}
                className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
              >
                {tab === 'login' ? 'Register free' : 'Sign in'}
              </button>
            </p>

            {/* Footer note */}
            <p className="text-center text-[10px] font-mono text-gray-800 mt-3 uppercase tracking-wider">
              {isConfigured ? 'Secured by Firebase Authentication' : 'Stored locally · No backend'}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
