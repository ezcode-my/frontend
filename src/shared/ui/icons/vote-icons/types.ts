import { TVoteStatus } from '@/entities/discussions/model/query/discussion.query.type';

export interface IVoteIconProps {
  status: TVoteStatus;
  onClick: () => void;
}
