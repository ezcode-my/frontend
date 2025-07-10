import { useSubmissionList } from '@/query/mypage/mypage';

export const Solved = () => {
  const { data } = useSubmissionList();
  console.log(data?.result);
  console.log(data?.result.length);
  return (
    <div className="w-full flex flex-col">
      <table>
        <thead>
          <tr className="border-b border-gray-700">
            <th className="py-3 px-2 text-center">문제 번호</th>
            <th className="py-3 px-2 text-center">문제 이름</th>
            <th className="py-3 px-2 text-center">정답 제출 수 </th>
            <th className="py-3 px-2 text-center">총 제출 수 </th>
          </tr>
        </thead>
        {(data?.result.length || 0) > 0 && (
          <tbody>
            {data?.result.map((item) => {
              return (
                <tr
                  key={item.problemId}
                  className="border-b border-gray-800 hover:bg-gray-900 cursor-pointer"
                >
                  <td className="text-center py-3 px-2">{item.problemId}</td>
                  <td className="text-center py-3 px-2">{item.problemDescription}</td>
                  <td className="text-center py-3 px-2">
                    {item.submissions.filter((submission) => submission.isCorrect).length}
                  </td>{' '}
                  <td className="text-center py-3 px-2">{item.submissions.length}</td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};
