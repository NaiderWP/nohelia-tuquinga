export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface SuggestedReading {
  title: string;
  author?: string;
  description: string;
  url: string;
}

export interface NetworkItem {
  platform: string;
  bestFor: string;
  learningUse: string;
  iconName: string;
}
