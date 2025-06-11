import * as React from 'react';
import { Trophy, Flame, Target, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useProgress } from '@/hooks/useProgress';

export function QuickStats() {
  const { progress } = useProgress();

  const getTodayLessons = () => {
    const today = new Date().toDateString();
    // This would need to be tracked in progress state
    return 0; // Placeholder
  };

  const stats = [
    {
      icon: Target,
      value: progress.completedLessons.length,
      label: 'Lektionen',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Trophy,
      value: progress.totalPoints,
      label: 'Punkte',
      color: 'text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: Flame,
      value: progress.streak,
      label: 'Tage Streak',
      color: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: Calendar,
      value: getTodayLessons(),
      label: 'Heute',
      color: 'text-green-600 dark:text-green-400'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur">
            <CardContent className="p-3">
              <div className="flex items-center gap-2">
                <IconComponent className={`w-4 h-4 ${stat.color}`} />
                <div>
                  <div className="text-lg font-bold">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
