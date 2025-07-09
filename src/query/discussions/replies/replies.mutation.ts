import ApiHelper from '@/api/client/api';
import { getProblemIdPath } from '@/api/constants/api.constants';
import { ProblemId } from '@/shared';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  ICreateReplyMutationRequest,
  ICreateReplyMutationResponse,
} from './replies.mutation.types';

/** 댓글 생성 뮤테이션  */
export const useCreateReplyMutation = (problemId: ProblemId, discussionId: number) => {
  const path = getProblemIdPath(problemId, 'discussions');
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: ICreateReplyMutationRequest) => {
      const response = await ApiHelper.post<ICreateReplyMutationResponse>(
        `${path}/${discussionId}/replies`,
        params
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['replies', problemId, discussionId],
      });
    },
  });
};
