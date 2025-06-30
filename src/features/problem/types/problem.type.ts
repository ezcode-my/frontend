import { ProblemLevelType } from '@/types/problem.type';

/**@todo categories 타입 수정필요  */
export interface IProblemIdResponse {
  success: boolean;
  status: number;
  message: string;
  result: IProblemResult;
}

export interface IProblemResult {
  id: number;
  creator: string;
  categories: string[];
  title: string;
  description: string;
  score: number;
  difficulty: ProblemLevelType;
  memoryLimit: number;
  timeLimit: number;
  reference: string;
  createdAt: string;
  modifiedAt: string;
}
export type ProblemId = string;

export type CodeEditorLanguageType = 'Python' | 'Java' | 'C' | 'Cpp';
