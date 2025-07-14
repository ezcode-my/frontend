import ApiHelper from '@/api/client/api';
import { getProblemIdPath } from '@/api/constants/api.constants';
import { ProblemId } from '@/shared';
import { useQuery } from '@tanstack/react-query';
import { IUseSubmitQueryResponse } from './sessionKey.query.type';

/**코드 제출시 필요한 세션키, initcaseIds */
export const useSubmitQuery = (problemId: ProblemId) => {
  const path = getProblemIdPath(problemId, 'submit-prepare');

  return useQuery({
    queryKey: ['submit-prepare', problemId],
    queryFn: async () => {
      const res = await ApiHelper.post<IUseSubmitQueryResponse>(path);
      return res.data.result;
    },
  });
};
