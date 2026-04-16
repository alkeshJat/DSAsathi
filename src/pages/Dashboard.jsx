import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProgress } from '../hooks/useProgress';
import { getLevel, getNextLevel, achievements } from '../data/achievements';
import curriculum from '../data/curriculum';
import problems from '../data/problems';

// Problem of the day is selected dynamically below

function ProgressRing({ progress, size = 80, strokeWidth = 6, color = '#6366f1' }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={strokeWidth} />
      <motion.circle
        cx={size/2} cy={size/2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth}
        strokeDasharray={circumference} strokeDashoffset={circumference}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Dashboard() {
  const { progress, level, nextLevel } = useProgress();
  const totalProblems = problems.length;
  const solvedPercent = Math.round((progress.solvedProblems.length / totalProblems) * 100);
  const totalLessons = curriculum.reduce((sum, s) => sum + s.topics.length, 0);
  const lessonPercent = Math.round((progress.completedLessons.length / totalLessons) * 100);
  const xpToNext = nextLevel ? nextLevel.minXP - progress.xp : 0;
  const xpProgress = nextLevel ? ((progress.xp - level.minXP) / (nextLevel.minXP - level.minXP)) * 100 : 100;

  const recentTopics = curriculum.flatMap(s => s.topics).filter(t => progress.completedLessons.includes(t.id)).slice(-3);

  // Dynamic Daily Challenge
  const todayIndex = Math.floor(Date.now() / 86400000) % problems.length;
  const dailyProblem = problems[todayIndex];
  const dailyChallenge = {
    id: dailyProblem.id,
    title: dailyProblem.title,
    difficulty: dailyProblem.difficulty,
    description: dailyProblem.description,
    bonusXP: 50,
  };

  // 7-Day Streak Logic
  const last7Days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toDateString();
  });

  return (
    <div className="min-h-screen pt-20 px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
          <p className="text-gray-400">Keep up the momentum. Here's your progress overview.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* XP & Level Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Level</p>
                <p className="text-2xl font-bold" style={{ color: level.color }}>{level.name}</p>
                <p className="text-xs text-gray-500 mt-1">{progress.xp} XP total</p>
              </div>
              <div className="relative">
                <ProgressRing progress={xpProgress} color={level.color} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold">{Math.round(xpProgress)}%</span>
                </div>
              </div>
            </div>
            {nextLevel && <p className="text-xs text-gray-500 mt-3">{xpToNext} XP to {nextLevel.name}</p>}
          </motion.div>

          {/* Streak Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="glass-card p-6 flex flex-col justify-between">
            <div>
              <p className="text-gray-400 text-sm">Streak</p>
              <div className="flex items-center space-x-3 mt-2 mb-4">
                <span className="text-4xl animate-fire">🔥</span>
                <div>
                  <p className="text-3xl font-bold text-orange-400">{progress.streak}</p>
                  <p className="text-xs text-gray-500">days in a row</p>
                </div>
              </div>
            </div>
            
            {/* 7-Day Visual */}
            <div className="flex items-center justify-between mt-auto">
              {last7Days.map((dateStr, i) => {
                const isCompleted = (progress.streakHistory || []).includes(dateStr);
                const isToday = dateStr === new Date().toDateString();
                const dayName = ['S', 'M', 'T', 'W', 'T', 'F', 'S'][new Date(dateStr).getDay()];
                
                return (
                  <div key={i} className="flex flex-col items-center space-y-1">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                      isCompleted 
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-500/40' 
                        : isToday 
                          ? 'border border-orange-500/50 bg-orange-500/10 text-orange-400' 
                          : 'bg-white/5 text-gray-600'
                    }`}>
                      {isCompleted ? '✓' : dayName}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Problems Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Problems Solved</p>
                <p className="text-3xl font-bold text-emerald-400">{progress.solvedProblems.length}<span className="text-lg text-gray-500">/{totalProblems}</span></p>
              </div>
              <div className="relative">
                <ProgressRing progress={solvedPercent} color="#10b981" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold">{solvedPercent}%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lessons Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Lessons Done</p>
                <p className="text-3xl font-bold text-violet-400">{progress.completedLessons.length}<span className="text-lg text-gray-500">/{totalLessons}</span></p>
              </div>
              <div className="relative">
                <ProgressRing progress={lessonPercent} color="#8b5cf6" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold">{lessonPercent}%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Daily Challenge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="glass-card p-6 border-indigo-500/30 bg-gradient-to-br from-indigo-500/5 to-violet-500/5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-indigo-400">⚡ Daily Challenge</h3>
              <span className="badge-medium">{dailyChallenge.difficulty}</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">{dailyChallenge.title}</h4>
            <p className="text-gray-400 text-sm mb-4">{dailyChallenge.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-emerald-400">+{dailyChallenge.bonusXP} bonus XP</span>
              <Link to={`/solve/${dailyChallenge.id}`} className="btn-primary text-sm px-4 py-2">Solve Now</Link>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="glass-card p-6">
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link to="/learn" className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-2xl">📖</span><div><p className="text-sm font-medium">Continue Learning</p><p className="text-xs text-gray-500">Pick up where you left off</p></div>
              </Link>
              <Link to="/ds-problems" className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-2xl">💡</span><div><p className="text-sm font-medium">Practice Problems</p><p className="text-xs text-gray-500">Solve coding challenges</p></div>
              </Link>
              <Link to="/ai-tutor" className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-2xl">🤖</span><div><p className="text-sm font-medium">Ask AI Tutor</p><p className="text-xs text-gray-500">Get help from Claude AI</p></div>
              </Link>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="glass-card p-6">
            <h3 className="font-semibold mb-4">Achievements</h3>
            <div className="grid grid-cols-4 gap-3">
              {achievements.slice(0, 8).map(a => (
                <div key={a.id} className={`flex flex-col items-center p-2 rounded-xl transition-all ${
                  progress.unlockedAchievements.includes(a.id) 
                    ? 'bg-indigo-500/10 border border-indigo-500/30' 
                    : 'bg-white/5 opacity-40'
                }`} title={a.title + ': ' + a.description}>
                  <span className="text-2xl">{a.icon}</span>
                  <span className="text-[9px] text-gray-400 mt-1 text-center leading-tight">{a.title}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              {progress.unlockedAchievements.length} / {achievements.length} unlocked
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
