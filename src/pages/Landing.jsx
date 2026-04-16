import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const TICKER_ITEMS = [
  'Arrays', 'Binary Search', 'Linked Lists', 'Stacks', 'Queues',
  'Trees', 'Graphs', 'Dynamic Programming', 'Backtracking', 'Greedy',
  'Heaps', 'Tries', 'Sorting', 'Two Pointers', 'Sliding Window',
  'BFS', 'DFS', 'Recursion', 'Union Find', 'Segment Trees',
];

const FEATURES = [
  { num: '01', title: 'Pattern-Based\nLearning', desc: '14 algorithmic patterns that cover 90% of interview questions. Learn the template, not just the answer.', link: '/patterns' },
  { num: '02', title: 'Beginner to\nAdvanced Roadmap', desc: 'A structured 12-phase journey from "what is an array?" to advanced DP and graph algorithms.', link: '/roadmap' },
  { num: '03', title: 'Algorithm\nVisualizer', desc: 'Watch Merge Sort, BFS, DFS, and Bubble Sort animate step by step. See it, understand it.', link: '/visualizer' },
  { num: '04', title: 'AI Tutor\n24/7', desc: 'Ask anything. Get clear, patient explanations with code examples. Powered by Claude AI.', link: '/ai-tutor' },
  { num: '05', title: 'Complexity\nCheat Sheet', desc: 'Big-O reference, sorting comparisons, data structure operations — all in one place.', link: '/cheatsheet' },
  { num: '06', title: '90-Day\nSchedule', desc: 'A curated day-by-day plan. Show up consistently and you\'ll be interview-ready in 90 days.', link: '/schedule' },
];

const STATS = [
  { value: '12', label: 'Learning Phases' },
  { value: '90', label: 'Day Schedule' },
  { value: '14', label: 'Core Patterns' },
  { value: '∞', label: 'Free Forever' },
];

function CountUp({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || isNaN(parseInt(target))) return;
    const t = parseInt(target);
    let s = 0;
    const step = t / (duration / 16);
    const timer = setInterval(() => {
      s += step;
      if (s >= t) { setCount(t); clearInterval(timer); }
      else setCount(Math.floor(s));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  if (isNaN(parseInt(target))) return <span ref={ref}>{target}</span>;
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-navy-900">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex flex-col justify-center pt-16 px-4 overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Gold glow behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse, #D4AF37 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Label */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-label">DSA LEARNING PLATFORM</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.92] tracking-tight mb-8"
          >
            <span className="text-white">CRACK THE</span>
            <br />
            <span className="gradient-text">CODE.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            A structured path from zero to interview-ready. Learn every data structure,
            master the 14 core patterns, and practice with an AI tutor — all for free.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Link to="/roadmap" className="btn-primary text-base px-8 py-4">
              Start From Scratch →
            </Link>
            <Link to="/cheatsheet" className="btn-secondary text-base px-8 py-4">
              View Cheat Sheet
            </Link>
          </motion.div>

          {/* Inline stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/5"
          >
            {STATS.map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-black text-gold-400 font-mono">
                  <CountUp target={s.value} />
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold-500/40" />
          <span className="text-[10px] text-gray-600 uppercase tracking-widest">scroll</span>
        </motion.div>
      </section>

      {/* ═══ TICKER ═══ */}
      <div className="border-y border-gold-500/15 py-3 overflow-hidden bg-black/30">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="text-xs font-mono text-gray-600 uppercase tracking-widest mx-6">
              {item} <span className="text-gold-700 mx-4">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══ FEATURES GRID ═══ */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="section-label">WHAT YOU GET</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Every tool you need.<br />
                <span className="gradient-text">Nothing you don't.</span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm md:text-right">
              No fluff. No filler. Just the precise curriculum and tools that top engineers used to get hired.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-navy-900 p-8 hover:bg-navy-800 transition-colors duration-300 cursor-default relative overflow-hidden"
              >
                {/* Hover gold border top */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <span className="font-mono text-xs text-gold-600/40 font-bold mb-4 block tracking-widest">{f.num}</span>
                <h3 className="text-xl font-black text-white mb-3 leading-tight whitespace-pre-line">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{f.desc}</p>
                <Link to={f.link} className="text-gold-500 text-xs font-mono uppercase tracking-wider hover:text-gold-300 transition-colors inline-flex items-center gap-2">
                  Explore <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ROADMAP PREVIEW ═══ */}
      <section className="py-28 px-4 bg-black/30 border-y border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <span className="section-label">THE PATH</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Zero to <span className="gradient-text">Interview-Ready.</span>
            </h2>
            <p className="text-gray-500 max-w-xl">12 curated phases. Beginner → Intermediate → Advanced. Built so no one gets left behind.</p>
          </motion.div>

          <div className="space-y-px">
            {[
              { phase: '01', level: 'BEGINNER', title: 'Foundations & Big-O', weeks: '2 weeks' },
              { phase: '02', level: 'BEGINNER', title: 'Arrays & Strings', weeks: '2 weeks' },
              { phase: '03', level: 'BEGINNER', title: 'Linked Lists', weeks: '1 week' },
              { phase: '04', level: 'BEGINNER', title: 'Stacks & Queues', weeks: '1 week' },
              { phase: '05', level: 'INTERMEDIATE', title: 'Trees & BST', weeks: '2–3 weeks' },
              { phase: '06', level: 'INTERMEDIATE', title: 'Heaps & Priority Queues', weeks: '1 week' },
              { phase: '...', level: '', title: 'Graphs, DP, Backtracking, Advanced DS...', weeks: '' },
            ].map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center justify-between px-6 py-4 bg-navy-900 border border-white/[0.05] hover:border-gold-500/20 hover:bg-navy-800 transition-all group"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-gold-600/40 w-6 flex-shrink-0">{row.phase}</span>
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-sm hidden sm:block ${
                    row.level === 'BEGINNER' ? 'bg-emerald-500/10 text-emerald-500' :
                    row.level === 'INTERMEDIATE' ? 'bg-gold-500/10 text-gold-500' :
                    row.level === 'ADVANCED' ? 'bg-red-500/10 text-red-400' :
                    'bg-transparent text-gray-600'
                  }`}>{row.level || '···'}</span>
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">{row.title}</span>
                </div>
                {row.weeks && <span className="text-xs text-gray-600 font-mono hidden md:block">{row.weeks}</span>}
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/roadmap" className="btn-primary px-8 py-4 inline-block">
              View Full Roadmap →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <span className="section-label">IN THEIR WORDS</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              People who <span className="gradient-text">got hired.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: 'The roadmap structure is what made the difference. I always knew exactly what to study next and why it mattered.', name: 'Priya S.', company: 'Google, L4 SWE' },
              { q: 'The visualizer clicked something in my brain. I\'d been stuck on tree traversals for weeks — one session here fixed that.', name: 'Marcus R.', company: 'Meta, SWE' },
              { q: 'I came in knowing basically nothing. The beginner roadmap is genuinely built for beginners. No assumptions made.', name: 'Ananya K.', company: 'Recent CS Graduate' },
              { q: 'The AI tutor is patient in a way that Google search and Stack Overflow just aren\'t. I could ask stupid questions freely.', name: 'Jake T.', company: 'Amazon, SDE II' },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-white/[0.06] p-7 hover:border-gold-500/20 transition-colors"
              >
                <p className="text-gray-300 text-base leading-relaxed mb-6">"{t.q}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-px h-8 bg-gold-500/40" />
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-4 border-t border-white/[0.05]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl font-black tracking-tight">
              Ready to start?<br />
              <span className="gradient-text">Begin Phase 01.</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-md">No account required. No credit card. Just open the roadmap and go.</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <Link to="/roadmap" className="btn-primary text-base px-10 py-4">
              Start Learning Free →
            </Link>
            <Link to="/dashboard" className="btn-secondary text-base px-10 py-4 text-center">
              View My Dashboard
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
