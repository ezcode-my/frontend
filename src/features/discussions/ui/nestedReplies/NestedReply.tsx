import { Button } from '@/components/ui/button';

import { ProblemId } from '@/shared';
import { BouncingDots } from '@/shared/ui/loading-indicators';
import { ChangeEvent, useState } from 'react';
import Vote from '../vote/Vote';
import { IReply, useDeleteReplyMutation, useEditReplyMutation } from '@/entities/discussionReplies';

interface INestedReplyProps {
  nestedReply: IReply;
  problemId: ProblemId;
}
export default function NestedReply({ nestedReply, problemId }: INestedReplyProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [currentValue, setCurrentValue] = useState(nestedReply.content);

  const { mutateAsync: editNestedReplyMutation } = useEditReplyMutation(
    problemId,
    nestedReply.discussionId,
    nestedReply.replyId
  );

  const { mutateAsync: deleteNestedReplyMutation, isPending: isDeletePending } =
    useDeleteReplyMutation(problemId, nestedReply.discussionId, nestedReply.replyId, [
      'nestedReplies',
      problemId,
      nestedReply.discussionId,
    ]);

  const handleClickEditButton = () => {
    if (isEdit) {
      editNestedReplyMutation({ content: currentValue });
    }
    setIsEdit((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <div>
        {!isEdit ? (
          <div>
            <h3>닉네임: {nestedReply.userInfo.nickname}</h3>
            <p>{currentValue}</p>
            <div className="flex items-center">
              <Vote problemId={problemId} content={nestedReply} replyId={nestedReply.replyId} />
            </div>
          </div>
        ) : (
          <input
            value={currentValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setCurrentValue(e.target.value);
            }}
          />
        )}
        <Button className="bg-gray-400" onClick={handleClickEditButton}>
          {isEdit ? '완료' : '수정'}
        </Button>
        <Button className="bg-gray-400" onClick={() => deleteNestedReplyMutation()}>
          {isDeletePending ? <BouncingDots /> : '삭제'}
        </Button>
      </div>
    </div>
  );
}
