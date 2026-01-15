
export enum AppMode {
  HOME = 'HOME',
  TRAINING = 'TRAINING',
  RESULT = 'RESULT'
}

export interface TrainingStats {
  wpm: number;
  accuracy: number;
  timeSpent: number;
  errors: number;
  rank: 'S' | 'A' | 'B' | 'C';
}

export interface JLPTItem {
  kanji: string;
  kana: string;
  romaji: string;
  mean: string;
  category: string; // e.g., '动词', '名词', '名句'
  level: 'N5' | 'N2' | 'KANA' | 'ANIME';
}

export interface PracticeState {
  currentIndex: number;
  userInput: string;
  correctChars: number;
  errorChars: number;
  startTime: number | null;
  isComplete: boolean;
  history: { char: string; isError: boolean }[];
}
