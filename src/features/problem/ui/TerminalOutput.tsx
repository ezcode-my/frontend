'use client';
import { Spinner } from '@/shared/ui/loading-indicators';
import useProblemWebSocketStore from '@/features/problem/model/submitProblemStore';

export default function TerminalOutput() {
  const { status, initCase, results, finalResult } = useProblemWebSocketStore((state) => state);
  console.log('init', initCase);

  const accuracy = finalResult
    ? ((finalResult.passedCount / finalResult.totalCount) * 100).toFixed(2)
    : '00.00';
  return (
    <section className="flex flex-col w-full px-[14px] py-[22px]">
      {status ? (
        <div className="flex flex-col justify-between h-full">
          <table className="text-left">
            <thead>
              <tr>
                <th>번호</th>
                <th>입력값</th>
                <th>기댓값</th>
                <th>실제 출력값</th>
                <th>실행시간</th>
                <th>메모리 사용량</th>
              </tr>
            </thead>
            <tbody>
              {results &&
                results.map((res) => (
                  <tr key={res.seqId}>
                    <td>{res.seqId || ''}</td>
                    <td>{initCase ? initCase.input : ''}</td>
                    <td>{initCase ? initCase.output : ''}</td>
                    <td>{res.actualOutput || ''}</td>
                    <td>{res.executionTime || ''}ms</td>
                    <td>{res.memoryUsage || ''}KB</td>
                  </tr>
                ))}
            </tbody>
          </table>

          {finalResult ? (
            <div className="bg-[#363636] w-full h-[70px] rounded-[10px] flex  items-center justify-center">
              <p className="text-[22px]">
                최종: {finalResult.passedCount}/{finalResult.totalCount} 정답 (
                {finalResult.isCorrect ? '통과' : '실패'}) | 정답률 {accuracy}%, (
                {finalResult.passedCount}개 정답/
                {finalResult.totalCount}개 문제중)
              </p>
            </div>
          ) : (
            <>
              <Spinner className="size-8 text-green-900" /> 채점중 입니다
            </>
          )}
        </div>
      ) : (
        <p>'코드제출'을 먼저 실행 해주세요</p>
      )}
    </section>
  );
}
