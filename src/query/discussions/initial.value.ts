import { INITIAL_LANG } from '@/shared';
import { ICreateDiscussionMutationRequest } from './discussions.types';
import { LANGUAGE_ID } from '@/shared/types/problem.type';

export const DISCUSSION_CREATE_VALUE: ICreateDiscussionMutationRequest = {
  languageId: LANGUAGE_ID[INITIAL_LANG],
  content: '',
};
