import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProgress } from '../hooks/useProgress';
import problems from '../data/problems';

const dsCategories = ['All', 'Arrays', 'Strings', 'Linked List', 'Stack', 'Queue', 'Binary Tree', 'Graph', 'Hash Map', 'Heap'];
const difficulties = ['All', 'Easy', 'Medium', 'Hard'];
const statuses = ['All', 'Solved', 'Unsolved'];

export default function DSProblems() {
  const [dsFilter, setDsFilter] = useState('All');
  const [diffFilter, setDiffFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [search, setSearch] = useState('');
  const { progress, toggleProblem } = useProgress();

  const filtered = useMemo(() => {
    return problems.filter(p => {
      if (dsFilter !== 'All' && p.ds !== dsFilter) return false;
      if (diffFilter !== 'All' && p.difficulty !== diffFilter) return false;
      if (statusFilter === 'Solved' && !progress.solvedProblems.includes(p.id)) return false;
      if (statusFilter === 'Unsolved' && progress.solvedProblems.includes(p.id)) return false;
      if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [dsFilter, diffFilter, statusFilter, search, progress.solvedProblems]);

  return (
    <div className="min-h-screen pt-20 px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold mb-2">💡 Practice Problems</h1>
          <p className="text-gray-400">Solve problems organized by data structure and difficulty.</p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="glass-card p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="🔍 Search problems..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field flex-1"
            />
            <select value={dsFilter} onChange={e => setDsFilter(e.target.value)} className="input-field md:w-48">
              {dsCategories.map(d => <option key={d} value={d}>{d === 'All' ? '📦 All DS' : d}</option>)}
            </select>
            <select value={diffFilter} onChange={e => setDiffFilter(e.target.value)} className="input-field md:w-40">
              {difficulties.map(d => <option key={d} value={d}>{d === 'All' ? '🎯 All Levels' : d}</option>)}
            </select>
            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="input-field md:w-40">
              {statuses.map(s => <option key={s} value={s}>{s === 'All' ? '📊 All Status' : s}</option>)}
            </select>
          </div>
        </motion.div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-4">{filtered.length} problem{filtered.length !== 1 ? 's' : ''} found</p>

        {/* Problem Grid */}
        <div className="space-y-3">
          {filtered.map((problem, i) => {
            const isSolved = progress.solvedProblems.includes(problem.id);
            return (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <div className={`glass-card-hover p-4 flex flex-col sm:flex-row sm:items-center justify-between group ${isSolved ? 'border-emerald-500/20 bg-emerald-500/[0.02]' : ''}`}>
                  <div className="flex items-center space-x-4 flex-1 min-w-0 mb-3 sm:mb-0">
                    <button 
                      onClick={(e) => { 
                        e.preventDefault(); 
                        e.stopPropagation(); 
                        toggleProblem(problem.id, problem.difficulty); 
                      }}
                      className="text-xl flex-shrink-0 hover:scale-110 transition-transform focus:outline-none w-6 h-6 flex items-center justify-center"
                      title={isSolved ? "Mark as unsolved" : "Mark as solved"}
                    >
                      {isSolved ? '✅' : '○'}
                    </button>
                    <Link to={`/solve/${problem.id}`} className="min-w-0 flex-1 py-1 block">
                      <h3 className="font-medium text-sm group-hover:text-gold-400 transition-colors truncate">{problem.title}</h3>
                      <div className="flex items-center space-x-2 mt-1 flex-wrap">
                        {problem.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] text-gray-500">{tag}</span>
                        ))}
                      </div>
                    </Link>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0 sm:ml-4 self-end sm:self-auto">
                    <span className="text-xs text-gray-500 hidden sm:inline">Acc: {problem.acceptance}%</span>
                    <span className={problem.difficulty === 'Easy' ? 'badge-easy' : problem.difficulty === 'Medium' ? 'badge-medium' : 'badge-hard'}>
                      {problem.difficulty}
                    </span>
                    {problem.leetcodeLink && (
                      <a 
                        href={problem.leetcodeLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-primary text-xs px-3 py-1.5 flex items-center space-x-1 hover:scale-105 transition-transform"
                      >
                        <span>LeetCode</span>
                        <span>🔗</span>
                      </a>
                    )}
                    <Link to={`/solve/${problem.id}`} className="text-gray-600 group-hover:text-gold-400 transition-colors px-2 py-1">
                      IDE →
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-4xl mb-4">🔍</p>
            <p>No problems match your filters. Try adjusting them!</p>
          </div>
        )}
      </div>
    </div>
  );
}
