/**채점 */
export { useSubmissionForResultMutation } from './submission/model/mutation/submitCode.mutation';
export type { ISourceCode } from './submission/model/mutation/submitCode.mutation.type';
export type { ISubmitCodeRequest } from './submission/model/mutation/submitCode.mutation.type';

/**코드리뷰 */
export { useISubmissionForReviewMutation } from './submission/model/mutation/submitCode.mutation';
export type { ISubmissionReviewRequest } from './submission/model/mutation/submitCode.mutation.type';
export type { ISubmissionReviewResponse } from './submission/model/mutation/submitCode.mutation.type';
