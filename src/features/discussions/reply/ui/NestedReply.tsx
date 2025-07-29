import { Button } from '@/components/ui/button';
import { ProblemId } from '@/shared';
import { BouncingDots } from '@/shared/ui/loading-indicators';
import { useState } from 'react';
import Vote from '../../vote/ui/Vote';
import ReplyForm from './ReplyForm';
import { IReply, useDeleteReplyMutation } from '@/entities/discussions';
import UserImage from '@/shared/ui/user/UserImage';
import KebabIcons from '@/shared/ui/icons/kebab-icons';
import DiscussionFooter from '../../DiscussionFooter';

interface INestedReplyProps {
  nestedReply: IReply;
  problemId: ProblemId;
}
export default function NestedReply({ nestedReply, problemId }: INestedReplyProps) {
  const [isEdit, setIsEdit] = useState(false);
  const { discussionId, replyId, parentReplyId } = nestedReply;

  const { mutateAsync: remove, isPending } = useDeleteReplyMutation(
    problemId,
    discussionId,
    replyId,
    ['nestedReplies', problemId, discussionId]
  );

  return (
    <div className="flex flex-col">
      <div>
        {!isEdit ? (
          <div className="bg-background rounded-[14px] p-3">
            <div className="flex items-center gap-2 mb-2">
              <UserImage profileImageUrl={nestedReply.userInfo.profileImageUrl} />
              <span className="font-medium text-secondary text-xs">
                {nestedReply.userInfo.nickname}
              </span>
            </div>

            <p className="text-[#ccc] text-xs mb-2">{nestedReply.content}</p>
            <DiscussionFooter
              content={nestedReply}
              problemId={problemId}
              replyId={nestedReply.replyId}
            />
            <Button className="bg-gray-400" onClick={() => setIsEdit(true)}>
              수정
            </Button>
            <Button className="bg-gray-400" onClick={() => remove()}>
              {isPending ? <BouncingDots /> : '삭제'}
            </Button>
          </div>
        ) : (
          <ReplyForm
            problemId={problemId}
            discussionId={discussionId}
            mode="create"
            parentReplyId={parentReplyId}
            initialValue={nestedReply.content}
            onClick={() => setIsEdit(true)}
          />
        )}
      </div>
    </div>
  );
}
