import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Topic, Question, Exercise } from '../types';
import { 
  BookOpen, 
  CheckCircle, 
  ChevronRight, 
  FileText, 
  PlayCircle,
  HelpCircle
} from 'lucide-react';

export function TopicPage() {
  const { topicId } = useParams();
  const [activeTab, setActiveTab] = useState<'content' | 'exercises' | 'quiz'>('content');
  const [showAnswer, setShowAnswer] = useState(false);

  // TODO: Replace with actual data fetching
  const topic: Topic = {
    id: topicId || '',
    title: 'Netzwerktechnik Grundlagen',
    description: 'Lerne die Grundlagen der Netzwerktechnik',
    category: 'BTI',
    subcategory: 'Netzwerktechnik',
    content: 'Hier kommt der Inhalt...',
    questions: [],
    exercises: [],
    resources: [],
    order: 1
  };

  const tabs = [
    { id: 'content', label: 'Inhalt', icon: BookOpen },
    { id: 'exercises', label: 'Übungen', icon: FileText },
    { id: 'quiz', label: 'Quiz', icon: HelpCircle },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-5 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{topic.title}</h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{topic.description}</p>
      </div>

      {/* Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium ${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300'
              }`}
            >
              <tab.icon className="mr-2 h-5 w-5" />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="prose prose-indigo max-w-none dark:prose-invert">
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Lerninhalt</h2>
              <div className="mt-4 text-gray-500 dark:text-gray-400">{topic.content}</div>
            </div>

            {/* Resources */}
            <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Zusätzliche Ressourcen</h2>
              <div className="mt-4 space-y-4">
                {topic.resources.map((resource) => (
                  <a
                    key={resource.id}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    <FileText className="h-5 w-5" />
                    <span>{resource.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'exercises' && (
          <div className="space-y-6">
            {topic.exercises.map((exercise) => (
              <div key={exercise.id} className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{exercise.title}</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{exercise.description}</p>
                <div className="mt-4">
                  <button className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Übung starten
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            {topic.questions.map((question) => (
              <div key={question.id} className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question.question}</h3>
                {question.type === 'multiple-choice' && question.options && (
                  <div className="mt-4 space-y-2">
                    {question.options.map((option, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-3 rounded-md border border-gray-300 p-3 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300">{option}</span>
                      </label>
                    ))}
                  </div>
                )}
                <div className="mt-4">
                  <button
                    onClick={() => setShowAnswer(!showAnswer)}
                    className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    {showAnswer ? 'Antwort ausblenden' : 'Antwort anzeigen'}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                  {showAnswer && (
                    <div className="mt-2 rounded-md bg-green-50 p-4 dark:bg-green-900">
                      <div className="flex">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-green-800 dark:text-green-200">
                            Richtige Antwort
                          </h3>
                          <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                            {question.explanation}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 