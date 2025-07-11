import { IDiscussionContentResponse } from '@/features/discussions/types/discussion.response.data.type';

export interface IDiscussionContentMutationRequest {
  languageId: number;
  content: string;
}

export type TDiscussionContentMutationResponse = IDiscussionContentResponse;
