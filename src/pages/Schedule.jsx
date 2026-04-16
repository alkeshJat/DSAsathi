import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import problems from '../data/problems';

export default function Schedule() {
  const [openDay, setOpenDay] = useState(1);
  const [activeView, setActiveView] = useState('list'); // 'list' or 'grid'

  // Generate 90 days schedule dynamically based on the total number of problems
  const totalDays = 90;
  const problemsPerDay = Math.ceil(problems.length / totalDays);
  
  const schedule = Array.from({ length: totalDays }, (_, i) => {
    const dayProblems = problems.slice(i * problemsPerDay, (i + 1) * problemsPerDay);
    // Determine the main topic for the day based on the most common 'ds' or 'pattern'
    const topics = dayProblems.reduce((acc, curr) => {
      acc[curr.ds] = (acc[curr.ds] || 0) + 1;
      return acc;
    }, {});
    const mainTopic = Object.keys(topics).sort((a,b) => topics[b] - topics[a])[0] || 'Mixed Topics';

    return {
      day: i + 1,
      title: `Day ${i + 1}: ${mainTopic}`,
      problems: dayProblems
    };
  }).filter(day => day.problems.length > 0); // Remove any empty days if problems < 60

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          <span className="gradient-text">90 Days</span> DSA Schedule
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          Master Data Structures and Algorithms with our curated day-by-day plan.
          Stay consistent and track your progress through the next 90 days.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <button 
            onClick={() => setActiveView('list')}
            className={`px-6 py-2 rounded-xl transition-colors ${activeView === 'list' ? 'bg-indigo-500 text-white shadow-lg' : 'bg-gray-200 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/10'}`}
          >
            List View
          </button>
          <button 
            onClick={() => setActiveView('grid')}
            className={`px-6 py-2 rounded-xl transition-colors ${activeView === 'grid' ? 'bg-indigo-500 text-white shadow-lg' : 'bg-gray-200 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/10'}`}
          >
            Grid View
          </button>
        </div>
      </motion.div>

      {activeView === 'list' ? (
        <div className="max-w-4xl mx-auto space-y-4">
          {schedule.map((dayPlan) => (
            <motion.div
              key={dayPlan.day}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(dayPlan.day * 0.05, 0.5) }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenDay(openDay === dayPlan.day ? null : dayPlan.day)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center border border-indigo-500/30">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">{dayPlan.day}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{dayPlan.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{dayPlan.problems.length} Problems</p>
                  </div>
                </div>
                <div className={`transform transition-transform text-gray-400 ${openDay === dayPlan.day ? 'rotate-180' : ''}`}>
                  ▼
                </div>
              </button>

              <AnimatePresence>
                {openDay === dayPlan.day && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-gray-200 dark:border-white/10"
                  >
                    <div className="p-6 bg-gray-50/50 dark:bg-black/20 space-y-3">
                      {dayPlan.problems.map((problem, idx) => (
                        <Link
                          key={problem.id}
                          to={`/solve/${problem.id}`}
                          className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-navy-800 border border-gray-200 dark:border-white/10 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-md transition-all group"
                        >
                          <div className="flex items-center space-x-4">
                            <span className="text-gray-400 font-mono text-sm">{idx + 1}.</span>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {problem.title}
                              </h4>
                              <div className="flex items-center space-x-2 mt-1">
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                                  problem.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                                  problem.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400' :
                                  'bg-red-500/10 text-red-600 dark:text-red-400'
                                }`}>
                                  {problem.difficulty}
                                </span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300">
                                  {problem.ds}
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                            Solve →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {schedule.map((dayPlan) => (
            <motion.div
              key={dayPlan.day}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: Math.min(dayPlan.day * 0.02, 0.4) }}
              className="glass-card-hover p-6 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  Day {dayPlan.day}
                </span>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                  {dayPlan.problems.length} Qs
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 line-clamp-2 flex-grow">
                {dayPlan.title.split(': ')[1]}
              </h3>
              
              <div className="space-y-2 mb-6 text-sm">
                {dayPlan.problems.slice(0, 3).map(p => (
                  <div key={p.id} className="text-gray-600 dark:text-gray-400 truncate flex items-center space-x-2">
                    <span className={`w-2 h-2 rounded-full ${
                      p.difficulty === 'Easy' ? 'bg-emerald-500' :
                      p.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                    }`} />
                    <span className="truncate">{p.title}</span>
                  </div>
                ))}
                {dayPlan.problems.length > 3 && (
                  <div className="text-indigo-500 text-xs font-semibold mt-2">
                    +{dayPlan.problems.length - 3} more...
                  </div>
                )}
              </div>

              <button 
                onClick={() => {
                  setActiveView('list');
                  setOpenDay(dayPlan.day);
                  window.scrollTo({ top: 300 + (dayPlan.day * 20), behavior: 'smooth' });
                }}
                className="w-full py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors font-medium mt-auto"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
