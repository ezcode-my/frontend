'use client';

import { SkeletonBox } from '@/components/Skeleton';
import { useProblemListQuery } from '@/query/problem/problems';

import React, { useEffect, useState } from 'react';

const getLevelColorClass = (levelStr: string): string => {
  const level = parseInt(levelStr.replace(/[^0-9]/g, ''), 10);
  if (level <= 2) return 'text-orange-300 font-semibold';
  if (level <= 4) return 'text-yellow-500 font-semibold';
  if (level <= 6) return 'text-red-500 font-semibold';
  return 'text-red-700 font-semibold';
};

export default function ProblemTable() {
  const [currentPage, setCurrentPage] = useState('0');
  const { data, isLoading } = useProblemListQuery(currentPage, '10', '');
  useEffect(() => {
    console.log('isloading', isLoading);
  }, [isLoading]);
  return (
    <div className="flex flex-col w-full  text-white font-sans bg-black rounded-md p-4">
      {isLoading ? (
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
            {Array.from({ length: 10 }).map((_, rowIndex) => (
              <tr key={rowIndex} className="border-b border-gray-800 ">
                <td className="text-center py-3 px-2">
                  <SkeletonBox width={60} height={16} />
                </td>
                <td className="text-center py-3 px-2">
                  <SkeletonBox width={60} height={16} />
                </td>
                <td className="text-center py-3 px-2">
                  <SkeletonBox width={60} height={16} />
                </td>
                <td className="text-center py-3 px-2">
                  <SkeletonBox width={60} height={16} />
                </td>
                <td className="text-center py-3 px-2">
                  <SkeletonBox width={60} height={16} />
                </td>
                <td className="text-center py-3 px-2">
                  <SkeletonBox width={60} height={16} />
                </td>
                <td className="text-center py-3 px-2">
                  <SkeletonBox width={60} height={16} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
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
            {data &&
              data.data.result.content.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-800 hover:bg-gray-900 cursor-pointer"
                >
                  <td className=" text-center py-3 px-2">{item.id}</td>
                  <td className="text-center py-3 px-2">{item.title}</td>
                  <td className="text-center py-3 px-2 ">{item.score}</td>
                  <td className={`text-center py-3 px-2  ${getLevelColorClass(item.difficulty)}`}>
                    {item.difficulty}
                  </td>
                  <td className=" text-center py-3 px-2 ">{item.correctSubmissions}건</td>
                  <td className=" text-center py-3 px-2 ">{item.totalSubmissions}건</td>
                  <td className=" text-center py-3 px-2 ">
                    {item.totalSubmissions === 0
                      ? '0'
                      : Math.round((item.correctSubmissions / item.totalSubmissions) * 10) / 10}
                    %
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}

      {/* 페이지네이션 */}
      <div className="flex justify-center items-center gap-2 mt-4 text-gray-400">
        <button className="text-xl hover:text-white">&laquo;</button>
        <button className="text-xl hover:text-white">&lsaquo;</button>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button
            key={num}
            className={`w-8 h-8 rounded-md flex items-center justify-center hover:bg-blue-600 transition ${
              Number(currentPage) === num ? 'bg-blue-600 text-white' : ''
            }`}
            onClick={() => !isLoading && setCurrentPage(String(num))}
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
