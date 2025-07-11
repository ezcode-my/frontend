'use client';
import { ProblemId } from '@/shared';
import Discussion from './Discussion';
import { useDiscussionsQuery } from '@/query/discussions';
import { Spinner } from '@/shared/ui/loading-indicators';
import CreateDiscussionInput from './CreateDiscussionInput';

interface IDiscussionProps {
  problemId: ProblemId;
}

export default function Discussions({ problemId }: IDiscussionProps) {
  const { data, isPending } = useDiscussionsQuery(problemId);
  const discussions = data?.result.content;

  if (isPending) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col gap-[10px]">
      <CreateDiscussionInput problemId={problemId} />
      <div>
        {!discussions ? (
          <div>토론 목록을 불러오는데 실패했습니다.</div>
        ) : (
          <>
            {discussions.length < 1 ? (
              <div>아직 토론이 없습니다.</div>
            ) : (
              discussions.map((content) => {
                return <Discussion discussionContent={content} key={content.discussionId} />;
              })
            )}
          </>
        )}
      </div>
    </div>
  );
}
