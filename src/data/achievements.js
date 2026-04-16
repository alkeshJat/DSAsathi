export const achievements = [
  { id: 'first-problem', title: 'First Steps', description: 'Solve your first problem', icon: '🎯', xp: 50, condition: (stats) => stats.problemsSolved >= 1 },
  { id: 'five-problems', title: 'Getting Warmed Up', description: 'Solve 5 problems', icon: '🔥', xp: 100, condition: (stats) => stats.problemsSolved >= 5 },
  { id: 'ten-problems', title: 'Problem Crusher', description: 'Solve 10 problems', icon: '💪', xp: 200, condition: (stats) => stats.problemsSolved >= 10 },
  { id: 'streak-3', title: 'On a Roll', description: 'Maintain a 3-day streak', icon: '⚡', xp: 75, condition: (stats) => stats.streak >= 3 },
  { id: 'streak-7', title: 'Week Warrior', description: 'Maintain a 7-day streak', icon: '🏆', xp: 200, condition: (stats) => stats.streak >= 7 },
  { id: 'streak-30', title: 'Monthly Master', description: 'Maintain a 30-day streak', icon: '👑', xp: 1000, condition: (stats) => stats.streak >= 30 },
  { id: 'first-pattern', title: 'Pattern Spotter', description: 'Complete all problems in a pattern', icon: '🧩', xp: 150, condition: (stats) => stats.patternsCompleted >= 1 },
  { id: 'all-easy', title: 'Easy Sweep', description: 'Solve all easy problems', icon: '🌱', xp: 300, condition: (stats) => stats.easySolved >= 5 },
  { id: 'first-hard', title: 'Fearless', description: 'Solve your first hard problem', icon: '🦁', xp: 250, condition: (stats) => stats.hardSolved >= 1 },
  { id: 'first-lesson', title: 'Knowledge Seeker', description: 'Complete your first lesson', icon: '📚', xp: 30, condition: (stats) => stats.lessonsCompleted >= 1 },
  { id: 'five-lessons', title: 'Studious', description: 'Complete 5 lessons', icon: '🎓', xp: 150, condition: (stats) => stats.lessonsCompleted >= 5 },
  { id: 'ai-helper', title: 'AI Explorer', description: 'Ask the AI tutor 10 questions', icon: '🤖', xp: 50, condition: (stats) => stats.aiQuestions >= 10 },
];

export const levels = [
  { name: 'Beginner', minXP: 0, color: '#6b7280' },
  { name: 'Intermediate', minXP: 500, color: '#3b82f6' },
  { name: 'Advanced', minXP: 2000, color: '#8b5cf6' },
  { name: 'Expert', minXP: 5000, color: '#f59e0b' },
  { name: 'Master', minXP: 10000, color: '#ef4444' },
];

export const getLevel = (xp) => {
  let current = levels[0];
  for (const level of levels) {
    if (xp >= level.minXP) current = level;
  }
  return current;
};

export const getNextLevel = (xp) => {
  for (const level of levels) {
    if (xp < level.minXP) return level;
  }
  return null;
};

export const xpValues = {
  problemSolved: { easy: 30, medium: 60, hard: 100 },
  lessonCompleted: 20,
  dailyChallenge: 50,
  streakBonus: 10,
  hintUsed: -5,
};

export default achievements;
