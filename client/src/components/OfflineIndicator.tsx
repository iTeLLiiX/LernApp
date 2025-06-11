import * as React from 'react';
import { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (showOfflineMessage) {
      const timer = setTimeout(() => {
        setShowOfflineMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showOfflineMessage]);

  if (!showOfflineMessage && isOnline) {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-80">
      <Card className={`shadow-lg ${
        isOnline 
          ? 'border-green-200 bg-green-50 dark:bg-green-900/20' 
          : 'border-orange-200 bg-orange-50 dark:bg-orange-900/20'
      }`}>
        <CardContent className="p-3">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${
              isOnline ? 'bg-green-500' : 'bg-orange-500'
            }`}>
              {isOnline ? (
                <Wifi className="w-4 h-4 text-white" />
              ) : (
                <WifiOff className="w-4 h-4 text-white" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm">
                {isOnline ? 'Verbindung wiederhergestellt' : 'Offline-Modus'}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {isOnline 
                  ? 'Du bist wieder online!'
                  : 'Du lernst im Offline-Modus. Fortschritte werden synchronisiert, sobald du wieder online bist.'
                }
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
