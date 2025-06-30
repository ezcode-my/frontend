export interface IProblemResponseData {
  success: boolean;
  status: number;
  message: string;
  result: string[];
}

// export interface ITestCase {
//   id: number;
//   problemId: number;
//   input: string;
//   output: string;
// }

export interface IStompResultMessage {
  actualOutput: string;
  executionTime: number;
  isPassed: boolean;
  memoryUsage: number;
  message: string;
  seqId: number;
}

export interface IStompFinalResultMessage {
  totalCount: number;
  passedCount: number;
  isCorrect: boolean;
  message: string;
}
