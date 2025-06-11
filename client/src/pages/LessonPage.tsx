import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { subjects } from '@/data/subjects';
import { getLessonContent } from '@/data/lessonContent';

export const LessonPage: React.FC = () => {
  const { subjectId, lessonId } = useParams();
  const navigate = useNavigate();
  
  const subject = subjects.find(s => s.id === subjectId);
  const lesson = subject?.sections
    .flatMap(section => section.lessons)
    .find(l => l.id === lessonId);
  
  const content = getLessonContent(lessonId || '');

  if (!subject || !lesson) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Lektion nicht gefunden
          </h1>
          <Button onClick={() => navigate('/')}>Zurück zur Übersicht</Button>
        </div>
      </div>
    );
  }

  const handleStartQuiz = () => {
    navigate(`/subject/${subjectId}/lesson/${lessonId}/quiz`);
  };

  const getLessonTypeColor = (type: string) => {
    switch (type) {
      case 'theory': return 'bg-blue-500';
      case 'practice': return 'bg-green-500';
      case 'quiz': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getLessonTypeLabel = (type: string) => {
    switch (type) {
      case 'theory': return 'Theorie';
      case 'practice': return 'Übung';
      case 'quiz': return 'Quiz';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate(`/subject/${subjectId}`)}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu {subject.title}
          </Button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-xl ${subject.color} text-white text-2xl`}>
              {subject.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {lesson.title}
              </h1>
              <Badge 
                className={`${getLessonTypeColor(lesson.type)} text-white mt-2`}
              >
                {getLessonTypeLabel(lesson.type)}
              </Badge>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Lektionsinhalt
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {content ? (
                  <>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="whitespace-pre-line text-gray-700 dark:text-gray-300">
                        {content.content}
                      </div>
                    </div>

                    {content.examples && content.examples.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Beispiele:</h3>
                        <div className="space-y-2">
                          {content.examples.map((example, index) => (
                            <div 
                              key={index}
                              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg font-mono text-sm"
                            >
                              {example}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {content.keyPoints && content.keyPoints.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Wichtige Punkte:</h3>
                        <ul className="space-y-2">
                          {content.keyPoints.map((point, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-gray-700 dark:text-gray-300">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {content.practiceExercise && (
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Übungsaufgabe:</h3>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                          <p className="text-gray-700 dark:text-gray-300">
                            {content.practiceExercise}
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">
                      Lektionsinhalt wird geladen...
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Lektion abschließen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Bereit für das Quiz? Teste dein Wissen zu dieser Lektion!
                </p>
                <Button 
                  onClick={handleStartQuiz}
                  className="w-full"
                  size="lg"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Quiz starten
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lernziele</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>Nach dieser Lektion kannst du:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Die Grundlagen verstehen</li>
                    <li>• Praktische Anwendungen erkennen</li>
                    <li>• Das Wissen in Übungen anwenden</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
