import ShowChildReplies from './reply/ui/ShowChildReplies';
import KebabIcons from '@/shared/ui/icons/kebab-icons';
import { ProblemId } from '@/shared';
import { Vote } from './vote';
import { IDiscussionContentResponse } from '@/entities/discussions/discussions/model/query/discussion.query.type';
import { IReply } from '@/entities/discussions';

interface IDiscussionFooterProps {
  problemId: ProblemId;
  content: IDiscussionContentResponse | IReply;
  replyCount?: number;
  setChildRepliesOpen?: () => void;
  replyId?: number;
}

export default function DiscussionFooter({ ...props }: IDiscussionFooterProps) {
  const { problemId, replyId, replyCount, content, setChildRepliesOpen } = props;
  return (
    <div className="flex items-center gap-2 ">
      <Vote problemId={problemId} content={content} replyId={replyId} />
      {replyCount && (
        <ShowChildReplies onClick={() => setChildRepliesOpen?.()} replyCount={replyCount} />
      )}
      <KebabIcons className="text-white" />
    </div>
  );
}
