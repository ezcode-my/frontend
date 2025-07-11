import { TVoteStatus } from '@/features/discussions/types/discussion.response.data.type';

export interface IVoteMutationRequest {
  voteType: TVoteStatus;
}

export interface IVoteMutationResponse {
  voteType: TVoteStatus;
  upvoteCount: number;
  downvoteCount: number;
}
