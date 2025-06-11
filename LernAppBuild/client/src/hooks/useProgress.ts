import { useState, useEffect } from 'react';
import { subjects } from '@/data/subjects';

interface UserProgress {
  completedLessons: string[];
  scores: Record<string, number>;
  streak: number;
  totalPoints: number;
  achievements: string[];
  lastStudyDate: string;
}

const STORAGE_KEY = 'lern-app-progress';

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return {
      completedLessons: [],
      scores: {},
      streak: 0,
      totalPoints: 0,
      achievements: [],
      lastStudyDate: ''
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeLesson = (lessonId: string, score: number = 0) => {
    setProgress(prev => {
      const newCompletedLessons = [...prev.completedLessons];
      if (!newCompletedLessons.includes(lessonId)) {
        newCompletedLessons.push(lessonId);
      }

      const today = new Date().toDateString();
      const newStreak = prev.lastStudyDate === today ? prev.streak : 
                       new Date(prev.lastStudyDate).getTime() === new Date(today).getTime() - 86400000 ? 
                       prev.streak + 1 : 1;

      const newAchievements = [...prev.achievements];
      
      // Achievement logic
      if (newStreak === 7 && !newAchievements.includes('week-streak')) {
        newAchievements.push('week-streak');
      }
      if (newCompletedLessons.length === 10 && !newAchievements.includes('first-ten')) {
        newAchievements.push('first-ten');
      }
      if (prev.totalPoints + score >= 1000 && !newAchievements.includes('thousand-points')) {
        newAchievements.push('thousand-points');
      }

      return {
        completedLessons: newCompletedLessons,
        scores: { ...prev.scores, [lessonId]: score },
        streak: newStreak,
        totalPoints: prev.totalPoints + score,
        achievements: newAchievements,
        lastStudyDate: today
      };
    });
  };

  const getSubjectProgress = (subjectId: string) => {
    const subject = subjects.find(s => s.id === subjectId);
    if (!subject) return 0;

    const totalLessons = subject.sections.reduce((total, section) => 
      total + section.lessons.length, 0);
    const completedLessons = subject.sections.reduce((total, section) => 
      total + section.lessons.filter(lesson => 
        progress.completedLessons.includes(lesson.id)).length, 0);
    
    return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  };

  const isLessonCompleted = (lessonId: string) => {
    return progress.completedLessons.includes(lessonId);
  };

  const getLessonScore = (lessonId: string) => {
    return progress.scores[lessonId] || 0;
  };

  const resetProgress = () => {
    setProgress({
      completedLessons: [],
      scores: {},
      streak: 0,
      totalPoints: 0,
      achievements: [],
      lastStudyDate: ''
    });
  };

  return {
    progress,
    completeLesson,
    getSubjectProgress,
    isLessonCompleted,
    getLessonScore,
    resetProgress
  };
}
