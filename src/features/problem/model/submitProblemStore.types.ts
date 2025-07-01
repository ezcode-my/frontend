//웹소켓 메시지로 받는 init type - destination(/init)

export interface IProblemStompInitCase {
  id: number;
  problemId: number;
  input: string;
  output: string;
}

//웹소켓 메시지로 받는 result type - destination(/testcase)
export interface IProblemStompResult {
  actualOutput: string;
  executionTime: number;
  isPassed: boolean;
  memoryUsage: number;
  message: string;
  seqId: number;
}

//웹소켓 메시지로 받는 finalResult type - destination(/final)
export interface IProblemStompFinalResult {
  totalCount: number;
  passedCount: number;
  isCorrect: boolean;
  message: string;
}
