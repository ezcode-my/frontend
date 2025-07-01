'use client';
import { useEffect, useState } from 'react';
import { IStompFinalResultMessage, IStompResultMessage } from '../types/problem.response.data.type';
import { Spinner } from '@/shared/ui/loading-indicators';

export default function TerminalOutput({ isSubmitted = false }: { isSubmitted?: boolean }) {
  const [result, setResult] = useState<IStompResultMessage>({} as IStompResultMessage);
  const [final, setFinal] = useState<IStompFinalResultMessage | null>(null);

  useEffect(() => {
    const storedResults = localStorage.getItem('results');
    const storedFinal = localStorage.getItem('final');

    setResult(storedResults ? JSON.parse(storedResults) : ({} as IStompResultMessage));
    setFinal(storedFinal ? JSON.parse(storedFinal) : ({} as IStompFinalResultMessage));
  }, [isSubmitted]);

  return (
    <section className="flex flex-col w-full px-[14px] py-[22px]">
      {isSubmitted ? (
        <div className="flex flex-col justify-between h-full">
          <table>
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
              <tr>
                <td>{result.seqId}</td>
                <td>입력값</td>
                <td>기댓값</td>
                <td>{result.actualOutput}</td>
                <td>{result.executionTime}ms</td>
                <td>{result.memoryUsage}KB</td>
              </tr>
            </tbody>
          </table>

          {final ? (
            <div className="bg-[#363636] w-full h-[70px] rounded-[10px] flex  items-center justify-center">
              <p className="text-[22px]">
                최종: {final.passedCount}/{final.totalCount} 정답 ({final.isCorrect}) | 정답률
                00.00%, ({final.passedCount}개 정답/{final.totalCount}개 문제중)
              </p>
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      ) : (
        <p>'코드제출'을 먼저 실행 해주세요</p>
      )}
    </section>
  );
}
