import * as React from 'react';
import { useEffect } from 'react';
import { Flame } from 'lucide-react';
import { useProgress } from '@/hooks/useProgress';

export function NotificationManager() {
  const { progress } = useProgress();

  useEffect(() => {
    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    // Check for streak notifications
    const checkStreakNotification = () => {
      const lastNotificationDate = localStorage.getItem('last-streak-notification');
      const today = new Date().toDateString();
      
      if (lastNotificationDate !== today && progress.streak > 0) {
        // Check if it's been 24 hours since last study
        const lastStudy = new Date(progress.lastStudyDate);
        const now = new Date();
        const hoursSinceLastStudy = (now.getTime() - lastStudy.getTime()) / (1000 * 60 * 60);
        
        if (hoursSinceLastStudy >= 23 && hoursSinceLastStudy <= 25) {
          sendStreakReminder();
          localStorage.setItem('last-streak-notification', today);
        }
      }
    };

    const sendStreakReminder = () => {
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('🔥 Lernstreak beibehalten!', {
          body: `Du hast einen ${progress.streak}-Tage Streak! Lerne heute weiter, um ihn zu behalten.`,
          icon: '/icon-192x192.png',
          badge: '/icon-192x192.png',
          tag: 'streak-reminder',
          requireInteraction: false
        });
      }
    };

    // Check every hour
    const interval = setInterval(checkStreakNotification, 60 * 60 * 1000);
    
    // Check immediately
    checkStreakNotification();

    return () => clearInterval(interval);
  }, [progress.streak, progress.lastStudyDate]);

  // Achievement notifications
  useEffect(() => {
    const lastAchievementCount = parseInt(localStorage.getItem('last-achievement-count') || '0');
    
    if (progress.achievements.length > lastAchievementCount) {
      const newAchievements = progress.achievements.slice(lastAchievementCount);
      
      newAchievements.forEach(achievementId => {
        const achievementNames = {
          'first-ten': '🎯 Erste 10 Lektionen abgeschlossen!',
          'week-streak': '🔥 Wochenstreak erreicht!',
          'thousand-points': '⭐ 1000 Punkte gesammelt!'
        };
        
        const achievementName = achievementNames[achievementId as keyof typeof achievementNames];
        
        if (achievementName && 'Notification' in window && Notification.permission === 'granted') {
          new Notification('🏆 Neuer Erfolg!', {
            body: achievementName,
            icon: '/icon-192x192.png',
            badge: '/icon-192x192.png',
            tag: `achievement-${achievementId}`,
            requireInteraction: true
          });
        }
      });
      
      localStorage.setItem('last-achievement-count', progress.achievements.length.toString());
    }
  }, [progress.achievements]);

  return null; // This component doesn't render anything visible
}
