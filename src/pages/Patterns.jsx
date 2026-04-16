import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import patterns from '../data/patterns';
import problems from '../data/problems';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Patterns() {
  const [selectedPattern, setSelectedPattern] = useState(null);
  const { progress, toggleProblem } = useProgress();

  return (
    <div className="min-h-screen pt-20 px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold mb-2">🧩 Algorithmic Patterns</h1>
          <p className="text-gray-400">Master 14 proven patterns that cover 90% of coding interview questions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {patterns.map((pattern, i) => {
            const patternProblems = problems.filter(p => p.pattern === pattern.id);
            const solved = patternProblems.filter(p => progress.solvedProblems.includes(p.id)).length;

            return (
              <motion.div
                key={pattern.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                onClick={() => setSelectedPattern(selectedPattern === pattern.id ? null : pattern.id)}
                className="glass-card-hover p-5 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{pattern.icon}</span>
                  <span className="text-xs text-gray-500">{solved}/{patternProblems.length} solved</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{pattern.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">{pattern.description}</p>
                
                {/* Progress bar */}
                <div className="w-full bg-white/5 rounded-full h-1.5">
                  <div className={`h-1.5 rounded-full bg-gradient-to-r ${pattern.color}`}
                    style={{ width: `${patternProblems.length > 0 ? (solved / patternProblems.length) * 100 : 0}%` }} />
                </div>

                {/* Expanded content */}
                {selectedPattern === pattern.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="mt-4">
                    <div className="border-t border-white/10 pt-4">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">Template Code</h4>
                      <SyntaxHighlighter language="javascript" style={oneDark}
                        customStyle={{ borderRadius: '12px', fontSize: '11px', padding: '12px' }}>
                        {pattern.template}
                      </SyntaxHighlighter>
                      
                      {patternProblems.length > 0 && (
                        <div className="mt-3">
                          <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">Practice Problems</h4>
                          {patternProblems.map(p => {
                            const isSolved = progress.solvedProblems.includes(p.id);
                            return (
                              <div key={p.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors text-sm group">
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                  <button onClick={(e) => { 
                                      e.preventDefault(); 
                                      e.stopPropagation(); 
                                      toggleProblem(p.id, p.difficulty); 
                                    }}
                                    className={`text-base flex-shrink-0 hover:scale-110 transition-transform focus:outline-none ${isSolved ? 'text-emerald-400' : 'text-gray-300'}`}
                                    title={isSolved ? "Mark as unsolved" : "Mark as solved"}
                                  >
                                    {isSolved ? '✅' : '○'}
                                  </button>
                                  <Link to={`/solve/${p.id}`} className="min-w-0 flex-1 truncate group-hover:text-gold-400 transition-colors block py-1">
                                    {p.title}
                                  </Link>
                                </div>
                                <span className={p.difficulty === 'Easy' ? 'badge-easy ml-3' : p.difficulty === 'Medium' ? 'badge-medium ml-3' : 'badge-hard ml-3 flex-shrink-0'}>
                                  {p.difficulty}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
