import ApiHelper from '@/api/client/api';
import { useQuery } from '@tanstack/react-query';
import { ProblemList } from './problem.interface';

export const useProblemListQuery = (page: number, size: number, sort: string) => {
  return useQuery({
    queryKey: ['problemList', page, size, sort], // 쿼리 키는 파라미터별로 다르게
    queryFn: async () => {
      const response = await ApiHelper.get<ProblemList>(
        `/problems?page=${page}&size=${size}sort=${sort}`
      );
      return response;
    },

    staleTime: 1000 * 60 * 5, // 5분간 캐시 유지
  });
};
