import { useLocalStorage } from './useLocalStorage';
import { achievements, getLevel, getNextLevel, xpValues } from '../data/achievements';

export function useProgress() {
  const [progress, setProgress] = useLocalStorage('dsa-progress', {
    xp: 0,
    streak: 0,
    streakHistory: [],
    lastActiveDate: null,
    solvedProblems: [],
    completedLessons: [],
    completedPatterns: [],
    unlockedAchievements: [],
    hintsUsed: 0,
    aiQuestions: 0,
    notes: {},
    revisionDates: {},
  });

  const addXP = (amount) => {
    setProgress(prev => ({ ...prev, xp: prev.xp + amount }));
  };

  const solveProblem = (problemId, difficulty = 'easy') => {
    if (progress.solvedProblems.includes(problemId)) return;
    const xp = xpValues.problemSolved[difficulty.toLowerCase()] || 30;
    setProgress(prev => ({
      ...prev,
      xp: prev.xp + xp,
      solvedProblems: [...prev.solvedProblems, problemId],
    }));
    checkAchievements();
  };

  const toggleProblem = (problemId, difficulty = 'easy') => {
    setProgress(prev => {
      const isSolved = prev.solvedProblems.includes(problemId);
      const xp = xpValues.problemSolved[difficulty.toLowerCase()] || 30;
      
      if (isSolved) {
        return {
          ...prev,
          xp: Math.max(0, prev.xp - xp),
          solvedProblems: prev.solvedProblems.filter(id => id !== problemId),
        };
      } else {
        return {
          ...prev,
          xp: prev.xp + xp,
          solvedProblems: [...prev.solvedProblems, problemId],
        };
      }
    });
    // Check achievements again async or let user trigger it
    setTimeout(checkAchievements, 0);
  };

  const completeLesson = (lessonId) => {
    if (progress.completedLessons.includes(lessonId)) return;
    setProgress(prev => ({
      ...prev,
      xp: prev.xp + xpValues.lessonCompleted,
      completedLessons: [...prev.completedLessons, lessonId],
      revisionDates: { ...prev.revisionDates, [lessonId]: Date.now() },
    }));
    checkAchievements();
  };

  const updateStreak = () => {
    const today = new Date().toDateString();
    if (progress.lastActiveDate === today) return;
    
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const newStreak = progress.lastActiveDate === yesterday ? progress.streak + 1 : 1;
    
    // Manage streak history (keep last 30 days)
    const newHistory = [...(progress.streakHistory || []), today].slice(-30);
    
    setProgress(prev => ({
      ...prev,
      streak: newStreak,
      streakHistory: newHistory,
      lastActiveDate: today,
      xp: prev.xp + xpValues.streakBonus,
    }));
  };

  const useHint = () => {
    setProgress(prev => ({
      ...prev,
      hintsUsed: prev.hintsUsed + 1,
      xp: Math.max(0, prev.xp + xpValues.hintUsed),
    }));
  };

  const incrementAIQuestions = () => {
    setProgress(prev => ({
      ...prev,
      aiQuestions: prev.aiQuestions + 1,
    }));
  };

  const saveNote = (topicId, note) => {
    setProgress(prev => ({
      ...prev,
      notes: { ...prev.notes, [topicId]: note },
    }));
  };

  const checkAchievements = () => {
    const stats = {
      problemsSolved: progress.solvedProblems.length,
      lessonsCompleted: progress.completedLessons.length,
      patternsCompleted: progress.completedPatterns.length,
      streak: progress.streak,
      easySolved: progress.solvedProblems.length,
      hardSolved: 0,
      aiQuestions: progress.aiQuestions,
    };
    const newAchievements = achievements.filter(
      a => !progress.unlockedAchievements.includes(a.id) && a.condition(stats)
    );
    if (newAchievements.length > 0) {
      setProgress(prev => ({
        ...prev,
        unlockedAchievements: [...prev.unlockedAchievements, ...newAchievements.map(a => a.id)],
        xp: prev.xp + newAchievements.reduce((sum, a) => sum + a.xp, 0),
      }));
    }
    return newAchievements;
  };

  const level = getLevel(progress.xp);
  const nextLevel = getNextLevel(progress.xp);

  return {
    progress,
    level,
    nextLevel,
    addXP,
    solveProblem,
    toggleProblem,
    completeLesson,
    updateStreak,
    useHint,
    incrementAIQuestions,
    saveNote,
    checkAchievements,
  };
}

export default useProgress;
