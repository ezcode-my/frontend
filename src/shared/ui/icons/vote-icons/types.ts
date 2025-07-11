import { TVoteStatus } from '@/features/discussions/types/discussion.response.data.type';

export interface IVoteIconProps {
  status: TVoteStatus;
  onClick: () => void;
}
