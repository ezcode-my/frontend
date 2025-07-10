import { IReply } from '@/query/discussions/replies/replies.query.types';
import Vote from './Vote';
import { Button } from '@/components/ui/button';
import { ProblemId } from '@/shared';
import { ChangeEvent, useState } from 'react';
import {
  useDeleteReplyMutation,
  useEditReplyMutation,
} from '@/query/discussions/replies/replies.mutation';
import { BouncingDots } from '@/shared/ui/loading-indicators';
import { QueryClient } from '@tanstack/react-query';

interface IReplyProps {
  reply: IReply;
  problemId: ProblemId;
}
export default function Reply({ reply, problemId }: IReplyProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [currentValue, setCurrentValue] = useState(reply.content);

  const { mutateAsync: editReplyMutation } = useEditReplyMutation(
    problemId,
    reply.discussionId,
    reply.replyId
  );
  const { mutateAsync: deleteReplyMutation, isPending: isDeletePending } = useDeleteReplyMutation(
    problemId,
    reply.discussionId,
    reply.replyId
  );

  const handleClickEditButton = () => {
    if (isEdit) {
      editReplyMutation({ content: currentValue });
    }
    setIsEdit((prev) => !prev);
  };

  const optimisticVote = (queryClient: QueryClient) => {
    queryClient.invalidateQueries({ queryKey: ['replies', problemId, reply.discussionId] });
  };

  return (
    <div className="flex">
      {!isEdit ? (
        <div>
          <h3>닉네임: {reply.userInfo.nickname}</h3>
          <p>{currentValue}</p>
          <div className="flex items-center">
            <Vote
              problemId={problemId}
              content={reply}
              replyId={reply.replyId}
              onSuccess={optimisticVote}
            />
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
      <Button className="bg-gray-400" onClick={() => deleteReplyMutation()}>
        {isDeletePending ? <BouncingDots /> : '삭제'}
      </Button>
    </div>
  );
}
