import { CodeEditor, IProblemIdResponse, ProblemSection, TerminalOutput } from '@/features/problem';

const MOCK_DATA: IProblemIdResponse = {
  success: true,
  status: 200,
  message: '정상적으로 수행되었습니다.',
  result: {
    id: 303,
    creator: 'ㅇ1 희망자',
    categories: ['조건문'],
    title: '문제 300',
    description:
      '예외 처리를 꼼꼼히 해야 정답을 받을 수 있습니다. 입력값의 범위를 정확히 분석해야 합니다. 효율적인 알고리즘이 필요한 문제입니다. 자료구조의 이해가 필요한 문제입니다. 수학적 사고가 필요한 문제입니다. 시간 복잡도와 공간 복잡도 모두 중요합니다.',
    score: 10,
    difficulty: 'LV1',
    memoryLimit: 256,
    timeLimit: 2,
    reference: 'DOVELET',
    createdAt: '2025-06-26T21:54:17.569809',
    modifiedAt: '2025-06-26T21:54:17.569809',
  },
};
export default function ProblemPage() {
  return (
    <main className="flex h-full">
      <ProblemSection problem={MOCK_DATA.result} />
      <div className="h-full w-[1px] bg-white" />
      <section className="flex flex-col flex-1">
        <CodeEditor />
        <div className="h-[1px] w-full bg-white" />
        <TerminalOutput />
      </section>
    </main>
  );
}
