import { getProblemIdPath } from '@/api/constants/api.constants';
import { ProblemId } from '@/shared';
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import { IVoteMutationRequest, IVoteMutationResponse } from './vote.type';
import ApiHelper from '@/api/client/api';

/** 투표 뮤테이션 */
export const useVoteStatusMutation = (
  problemId: ProblemId,
  discussionId: number,
  onSuccess: (queryClient: QueryClient) => void,
  replyId?: number
) => {
  const queryClient = useQueryClient();

  const defaultPath = getProblemIdPath(problemId, 'discussions') + `/${discussionId}`;
  const path = replyId ? defaultPath + `/replies/${replyId}` : defaultPath;

  return useMutation({
    mutationFn: async (params: IVoteMutationRequest) => {
      const response = await ApiHelper.post<IVoteMutationResponse>(`${path}/votes`, params);
      return response.data;
    },
    onSuccess: () => {
      onSuccess(queryClient);
    },
  });
};
