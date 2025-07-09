import ApiHelper from '@/api/client/api';
import { useQuery } from '@tanstack/react-query';
import { ProblemList } from './problem.interface';

// ✅ 검색어까지 포함된 훅
export const useProblemListQuery = (
  page: number,
  size: number,
  sort: string,
  categoryCode?: string,
  difficulty?: string,
  keyword?: string // 검색어 추가
) => {
  const isSearching = Boolean(keyword && keyword.trim() !== '');
  console.log('isesearch', isSearching);
  const queryParams: Record<string, string> = {};
  if (difficulty && difficulty !== '전체') queryParams.difficulty = difficulty;
  if (categoryCode && categoryCode !== '전체') queryParams.categoryCode = categoryCode;
  if (isSearching && keyword) queryParams.keyword = keyword;

  const endpoint = isSearching ? '/problems/search' : '/problems';

  return useQuery({
    queryKey: ['problemList', endpoint, page, size, sort, categoryCode, difficulty, keyword],
    queryFn: async () => {
      const response = await ApiHelper.get<ProblemList>(
        `${endpoint}?page=${page}&size=${size}&sort=${sort}`,
        { params: queryParams }
      );
      return response;
    },
    enabled: isSearching ? !!keyword?.trim() : true, // 검색 중이면 keyword가 있어야 요청
    staleTime: 1000 * 60 * 5,
  });
};
