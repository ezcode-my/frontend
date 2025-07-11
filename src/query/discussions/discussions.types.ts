import { IDiscussionContentResponse } from '@/features/discussions/types/discussion.response.data.type';

export interface ICreateDiscussionMutationRequest {
  languageId: number;
  content: string;
}

export type TDiscussionContentMutationResponse = IDiscussionContentResponse;
