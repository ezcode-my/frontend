import { useEffect, useState } from 'react';
import { IStompFinalResultMessage, IStompResultMessage } from '../types/problem.response.data.type';

export default function ResolvingResult({ isSubmitted }: { isSubmitted: boolean }) {
  const [result, setResult] = useState<IStompResultMessage>({} as IStompResultMessage);
  const [final, setFinal] = useState<IStompFinalResultMessage | null>(null);

  useEffect(() => {
    const storedResults = localStorage.getItem('results');
    const storedFinal = localStorage.getItem('final');

    setResult(storedResults ? JSON.parse(storedResults) : ({} as IStompResultMessage));
    setFinal(storedFinal ? JSON.parse(storedFinal) : ({} as IStompFinalResultMessage));
  }, [isSubmitted]);

  return (
    <>
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

      <div>최종결과</div>
      {final && (
        <>
          <div>결과:{final.isCorrect}</div>
          <div>총 테스트 케이스 수: {final.totalCount}</div>
          <div>통과한 테스트 케이스 수: {final.passedCount}</div>
        </>
      )}
    </>
  );
}
