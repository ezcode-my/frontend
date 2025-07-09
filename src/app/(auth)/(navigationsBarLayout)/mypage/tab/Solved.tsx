export const Solved = () => {
  return (
    <div className="w-full flex flex-col">
      <table>
        <thead>
          <tr className="border-b border-gray-700">
            <th className="py-3 px-2 text-center">문제 이름</th>
            <th className="py-3 px-2 text-center">푼 날짜</th>
            <th className="py-3 px-2 text-center">성공 여부</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-800 hover:bg-gray-900 cursor-pointer">
            <td className="text-center py-3 px-2">1</td>
            <td className="text-center py-3 px-2">{1}</td>
            <td className="text-center py-3 px-2">1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
