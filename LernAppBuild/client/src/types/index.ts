export interface Topic {
  id: string;
  title: string;
  description: string;
  category: 'BTI' | 'BTS' | 'BWL';
  subcategory: string;
  content: string;
  questions: Question[];
  exercises: Exercise[];
  resources: Resource[];
  order: number;
}

export type QuestionType =
  | 'multiple-choice'
  | 'free-text'
  | 'true-false'
  | 'drag-drop'
  | 'matching'
  | 'fill-in-the-blank'
  | 'flashcard'
  | 'sorting'
  | 'code-input';

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  hint?: string;
  pairs?: { left: string; right: string }[];
  blanks?: string[];
  codeTemplate?: string;
  flashcardFront?: string;
  flashcardBack?: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  type: 'practice' | 'quiz' | 'project' | 'flashcard';
  content: string;
  solution?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  hint?: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'document' | 'video' | 'link' | 'diagram';
  url: string;
  description: string;
}

export interface GlossaryEntry {
  id: string;
  term: string;
  definition: string;
  example?: string;
}

export interface UserProgress {
  userId: string;
  completedTopics: string[];
  quizScores: {
    [quizId: string]: number;
  };
  exerciseProgress: {
    [exerciseId: string]: {
      status: 'not-started' | 'in-progress' | 'completed';
      score?: number;
      lastAttempt?: Date;
    };
  };
  flashcardProgress: {
    [flashcardId: string]: {
      status: 'not-started' | 'learning' | 'mastered';
      lastReviewed?: Date;
    };
  };
  studyTime: number;
  lastStudied: Date;
  streak?: number;
  badges?: string[];
}

export interface StudyPlan {
  id: string;
  userId: string;
  title: string;
  description: string;
  topics: string[];
  startDate: Date;
  endDate: Date;
  progress: number;
  status: 'active' | 'completed' | 'archived';
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher' | 'admin';
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
    studyReminders: boolean;
  };
  progress: UserProgress;
  studyPlans: StudyPlan[];
} 