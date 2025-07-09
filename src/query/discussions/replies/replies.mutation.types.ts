import { IReply } from './replies.query.types';

export interface ICreateReplyMutationRequest {
  parentReplyId: number | null;
  content: string;
}

export type ICreateReplyMutationResponse = IReply;
