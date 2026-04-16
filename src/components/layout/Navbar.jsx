import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '../../hooks/useProgress';
import { getLevel } from '../../data/achievements';
import { useAuth } from '../../hooks/useAuth';
import AuthModal from './AuthModal';

/* Primary links — always visible */
const primaryLinks = [
  { path: '/roadmap',     label: 'Roadmap' },
  { path: '/learn',       label: 'Learn' },
  { path: '/ds-problems', label: 'Problems' },
  { path: '/visualizer',  label: 'Visualizer' },
  { path: '/ai-tutor',    label: 'AI Tutor' },
];

/* Secondary links — hidden in "More" dropdown */
const moreLinks = [
  { path: '/patterns',   label: 'Patterns',    icon: '🧩' },
  { path: '/cheatsheet', label: 'Cheat Sheet', icon: '📋' },
  { path: '/schedule',   label: 'Schedule',    icon: '📅' },
  { path: '/dashboard',  label: 'Dashboard',   icon: '📊' },
];

const glassStyle = (extra = {}) => ({
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  ...extra,
});

export default function Navbar() {
  const [isScrolled, setIsScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [showMore, setShowMore]         = useState(false);
  const [showAuth, setShowAuth]         = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location   = useLocation();
  const moreRef    = useRef(null);
  const userRef    = useRef(null);
  const { progress } = useProgress();
  const level      = getLevel(progress.xp);
  const { user, logout } = useAuth();

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close dropdowns on route change */
  useEffect(() => { setMobileOpen(false); setShowMore(false); setShowUserMenu(false); }, [location]);

  /* Close dropdowns on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setShowMore(false);
      if (userRef.current  && !userRef.current.contains(e.target))  setShowUserMenu(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = (path) =>
    location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  const anyMoreActive = moreLinks.some(l => isActive(l.path));

  return (
    <>
      {/* ═══════════════ NAVBAR ═══════════════ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: isScrolled ? 'rgba(6,6,14,0.85)' : 'rgba(6,6,14,0.5)',
          backdropFilter: 'blur(28px) saturate(180%)',
          WebkitBackdropFilter: 'blur(28px) saturate(180%)',
          borderBottom: `1px solid ${isScrolled ? 'rgba(212,175,55,0.18)' : 'rgba(255,255,255,0.07)'}`,
          boxShadow: isScrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Gold shimmer top line */}
        <div style={{
          height: '1.5px',
          background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5) 40%, rgba(212,175,55,0.9) 50%, rgba(212,175,55,0.5) 60%, transparent)',
        }} />

        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-[66px] gap-4">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm text-black"
                style={{
                  background: 'linear-gradient(135deg, #F0D060, #D4AF37, #B89B2A)',
                  boxShadow: '0 3px 14px rgba(212,175,55,0.4)',
                }}
              >D</div>
              <span className="font-black text-base tracking-tight hidden sm:block">
                <span className="gradient-text">DSA</span><span className="text-white">sathi</span>
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-1">

              {/* Primary links */}
              {primaryLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{ color: isActive(link.path) ? '#E8C54A' : '#9CA3AF' }}
                >
                  {isActive(link.path) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: 'rgba(212,175,55,0.1)',
                        border: '1px solid rgba(212,175,55,0.3)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className="relative z-10 transition-colors duration-200"
                    style={{ color: isActive(link.path) ? '#E8C54A' : undefined }}
                    onMouseEnter={e => { if (!isActive(link.path)) e.target.style.color = '#e5e7eb'; }}
                    onMouseLeave={e => { if (!isActive(link.path)) e.target.style.color = '#9CA3AF'; }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}

              {/* ── More dropdown ── */}
              <div className="relative" ref={moreRef}>
                <button
                  onClick={() => setShowMore(v => !v)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{ color: anyMoreActive ? '#E8C54A' : '#9CA3AF' }}
                >
                  {anyMoreActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: 'rgba(212,175,55,0.1)',
                        border: '1px solid rgba(212,175,55,0.3)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">More</span>
                  <motion.span
                    animate={{ rotate: showMore ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 text-xs opacity-60"
                  >▾</motion.span>
                </button>

                <AnimatePresence>
                  {showMore && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 top-full mt-2 w-48 rounded-2xl overflow-hidden z-50"
                      style={{
                        background: 'rgba(8,8,20,0.82)',
                        backdropFilter: 'blur(28px) saturate(160%)',
                        WebkitBackdropFilter: 'blur(28px) saturate(160%)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 20px 48px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(212,175,55,0.05)',
                      }}
                    >
                      {/* Shimmer top */}
                      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)' }} />
                      <div className="p-1.5">
                        {moreLinks.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-all duration-150"
                            style={{
                              color: isActive(link.path) ? '#E8C54A' : '#9CA3AF',
                              background: isActive(link.path) ? 'rgba(212,175,55,0.08)' : 'transparent',
                            }}
                            onMouseEnter={e => { if (!isActive(link.path)) { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#e5e7eb'; }}}
                            onMouseLeave={e => { if (!isActive(link.path)) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#9CA3AF'; }}}
                          >
                            <span className="text-base leading-none">{link.icon}</span>
                            <span className="font-medium">{link.label}</span>
                            {isActive(link.path) && (
                              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold-400" />
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ── Right side ── */}
            <div className="flex items-center gap-2 flex-shrink-0">

              {/* XP pill */}
              <div
                className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full text-sm"
                style={{
                  background: 'rgba(212,175,55,0.08)',
                  border: '1px solid rgba(212,175,55,0.2)',
                }}
              >
                <span className="text-gold-400">⚡</span>
                <span className="font-mono font-bold text-gold-300 text-sm">{progress.xp}</span>
                <span className="text-gold-600/60 text-xs hidden lg:block">{level.name}</span>
              </div>

              {/* Streak */}
              {progress.streak > 0 && (
                <div
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full"
                  style={{
                    background: 'rgba(249,115,22,0.1)',
                    border: '1px solid rgba(249,115,22,0.22)',
                  }}
                >
                  <span>🔥</span>
                  <span className="font-mono font-bold text-orange-400 text-sm">{progress.streak}</span>
                </div>
              )}

              {/* User menu / Sign In */}
              {user ? (
                <div className="relative" ref={userRef}>
                  <button
                    onClick={() => setShowUserMenu(v => !v)}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-xl transition-all duration-200"
                    style={glassStyle()}
                  >
                    {user.avatar?.startsWith('http') ? (
                      <img 
                        src={user.avatar} 
                        alt="Profile" 
                        className="w-6 h-6 rounded-full object-cover border border-white/20" 
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-black"
                        style={{ background: 'linear-gradient(135deg, #E8C54A, #B89B2A)' }}
                      >{user.avatar?.[0]?.toUpperCase() || 'U'}</div>
                    )}
                    <span className="text-sm font-medium text-gold-300 hidden sm:block max-w-[80px] truncate">{user.name}</span>
                    <motion.span animate={{ rotate: showUserMenu ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-gray-500 text-xs">▾</motion.span>
                  </button>

                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        className="absolute right-0 top-full mt-2 w-52 rounded-2xl overflow-hidden z-50"
                        style={{
                          background: 'rgba(8,8,20,0.82)',
                          backdropFilter: 'blur(28px)',
                          WebkitBackdropFilter: 'blur(28px)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          boxShadow: '0 20px 48px rgba(0,0,0,0.5)',
                        }}
                      >
                        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)' }} />
                        <div className="p-3 border-b border-white/[0.06]">
                          <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                          <p className="text-xs text-gray-500 truncate mt-0.5">{user.email}</p>
                        </div>
                        <div className="p-1.5">
                          <Link to="/dashboard" onClick={() => setShowUserMenu(false)}
                            className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors">
                            📊 Dashboard
                          </Link>
                          <button onClick={() => { logout(); setShowUserMenu(false); }}
                            className="w-full text-left flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-colors">
                            🚪 Sign out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuth(true)}
                  className="px-5 py-2.5 rounded-xl text-sm font-bold text-black transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #F0D060, #D4AF37, #B89B2A)',
                    boxShadow: '0 4px 18px rgba(212,175,55,0.35)',
                  }}
                >Sign In</button>
              )}

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl transition-colors"
                style={glassStyle()}
                aria-label="Menu"
              >
                <div className="w-5 h-3.5 flex flex-col justify-between">
                  <span className={`block w-full h-0.5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
                  <span className={`block w-full h-0.5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                  <span className={`block w-full h-0.5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ═══════════════ MOBILE MENU ═══════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[67px] z-40 lg:hidden overflow-hidden"
            style={{
              background: 'rgba(6,6,14,0.92)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              borderBottom: '1px solid rgba(212,175,55,0.12)',
            }}
          >
            <div className="px-4 py-4 space-y-1">
              {[{ path: '/', label: 'Home', icon: '🏠' }, ...primaryLinks.map(l => ({ ...l, icon: '→' })), ...moreLinks].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    color: isActive(link.path) ? '#E8C54A' : '#9CA3AF',
                    background: isActive(link.path) ? 'rgba(212,175,55,0.08)' : 'transparent',
                  }}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                  {isActive(link.path) && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold-400" />}
                </Link>
              ))}
              <div className="flex items-center gap-2 px-4 py-3 border-t border-white/[0.05] mt-1">
                <span className="text-xs font-mono text-gray-600">⚡ {progress.xp} XP · {level.name}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
}
