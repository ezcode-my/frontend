import { IReply } from '@/query/discussions/replies/replies.query.types';
import Vote from './Vote';
import { Button } from '@/components/ui/button';
import { ProblemId } from '@/shared';
import { ChangeEvent, useState } from 'react';
import { useEditReplyMutation } from '@/query/discussions/replies/replies.mutation';

interface IReplyProps {
  reply: IReply;
  problemId: ProblemId;
}
export default function Reply({ reply, problemId }: IReplyProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [currentValue, setCurrentValue] = useState(reply.content);

  const { mutateAsync } = useEditReplyMutation(problemId, reply.discussionId, reply.replyId);

  const handleClickEditButton = () => {
    if (isEdit) {
      mutateAsync({ content: currentValue });
    }
    setIsEdit((prev) => !prev);
  };

  return (
    <div className="flex">
      {!isEdit ? (
        <div>
          <h3>닉네임: {reply.userInfo.nickname}</h3>
          <p>{currentValue}</p>
          <div className="flex items-center">
            <Vote problemId={problemId} content={reply} />
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
      <Button className="bg-gray-400">삭제</Button>
    </div>
  );
}
