'use client';

import React, { useState } from 'react';

const data = [
  {
    id: 1,
    title: 'A+B',
    score: 10,
    level: 1,
    correctSubmits: 39,
    totalSubmits: 100,
    accuracy: 100,
  },
  { id: 2, title: 'A+B', score: 10, level: 7, correctSubmits: 39, totalSubmits: 100, accuracy: 5 },
  { id: 3, title: 'A+B', score: 10, level: 4, correctSubmits: 39, totalSubmits: 100, accuracy: 45 },
  { id: 4, title: 'A+B', score: 10, level: 2, correctSubmits: 39, totalSubmits: 100, accuracy: 85 },
  { id: 5, title: 'A+B', score: 10, level: 1, correctSubmits: 39, totalSubmits: 100, accuracy: 95 },
];

const levelColors: Record<number, string> = {
  1: 'text-orange-400 font-semibold',
  2: 'text-yellow-400 font-semibold',
  3: 'text-yellow-500 font-semibold',
  4: 'text-orange-500 font-semibold',
  5: 'text-red-500 font-semibold',
  6: 'text-red-600 font-semibold',
  7: 'text-red-700 font-semibold',
};

export default function ProblemTable() {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <div className="flex flex-col w-full  text-white font-sans bg-black rounded-md p-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="py-3 px-2 text-center">문제번호</th>
            <th className="py-3 px-2 text-center">제목</th>
            <th className="py-3 px-2 text-center">점수</th>
            <th className="py-3 px-2 text-center">난이도</th>
            <th className="py-3 px-2 text-center">정답 제출 수</th>
            <th className="py-3 px-2 text-center">총 제출 횟수</th>
            <th className="py-3 px-2 text-center">정답률</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, title, score, level, correctSubmits, totalSubmits, accuracy }) => (
            <tr key={id} className="border-b border-gray-800 hover:bg-gray-900 cursor-pointer">
              <td className="text-center py-3 px-2">{id}</td>
              <td className="text-center py-3 px-2">{title}</td>
              <td className="text-center py-3 px-2">{score}</td>
              <td className={`text-center py-3 px-2 ${levelColors[level]}`}>Lv {level}</td>
              <td className="text-center py-3 px-2">{correctSubmits}건</td>
              <td className="text-center py-3 px-2">{totalSubmits}건</td>
              <td className="text-center py-3 px-2">{accuracy}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div className="flex justify-center items-center gap-2 mt-4 text-gray-400">
        <button className="text-xl hover:text-white">&laquo;</button>
        <button className="text-xl hover:text-white">&lsaquo;</button>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button
            key={num}
            className={`w-8 h-8 rounded-md flex items-center justify-center hover:bg-blue-600 transition ${
              currentPage === num ? 'bg-blue-600 text-white' : ''
            }`}
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </button>
        ))}

        <button className="text-xl hover:text-white">&rsaquo;</button>
        <button className="text-xl hover:text-white">&raquo;</button>
      </div>
    </div>
  );
}
