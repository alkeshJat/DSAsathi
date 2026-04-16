import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.05] mt-20">
      {/* Top gold line */}
      <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-sm flex items-center justify-center font-black text-sm text-black"
                style={{ background: 'linear-gradient(135deg, #E8C54A, #B89B2A)' }}>D</div>
              <span className="font-black text-base">
                <span className="gradient-text">DSA</span>
                <span className="text-white">sathi</span>
              </span>
            </Link>
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed mb-5">
              Structured DSA learning for developers who want to get hired. Free. No account required.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Free Forever', 'AI-Powered', 'Beginner Friendly'].map((tag, i) => (
                <span key={i} className="text-[10px] font-mono px-2.5 py-1 border border-white/[0.08] text-gray-600 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-4">Learn</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/roadmap', label: 'Roadmap' },
                { to: '/learn', label: 'Curriculum' },
                { to: '/patterns', label: 'Patterns' },
                { to: '/cheatsheet', label: 'Cheat Sheet' },
              ].map((l, i) => (
                <li key={i}><Link to={l.to} className="text-gray-500 hover:text-gold-400 text-sm transition-colors duration-200">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Practice */}
          <div>
            <h3 className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-4">Practice</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/ds-problems', label: 'Problems' },
                { to: '/schedule', label: '90-Day Plan' },
                { to: '/visualizer', label: 'Visualizer' },
                { to: '/dashboard', label: 'Dashboard' },
              ].map((l, i) => (
                <li key={i}><Link to={l.to} className="text-gray-500 hover:text-gold-400 text-sm transition-colors duration-200">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-4">Tools</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/ai-tutor', label: 'AI Tutor' },
                { to: '/patterns', label: 'Pattern Library' },
              ].map((l, i) => (
                <li key={i}><Link to={l.to} className="text-gray-500 hover:text-gold-400 text-sm transition-colors duration-200">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.04] mt-12 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-[10px] text-gray-700 uppercase tracking-widest">
            © 2025 DSAsathi — Built for the developer community.
          </p>
          <p className="font-mono text-[10px] text-gray-800 uppercase tracking-widest">
            Free · No signup · No tracking.
          </p>
        </div>
      </div>
    </footer>
  );
}
