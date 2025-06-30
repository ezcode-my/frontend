import { Button } from '@/components/ui/button';
import { getProblem, ProblemSection, ProblemWorksSection } from '@/features/problem';

interface IProblemPageProps {
  params: Promise<{ problemId: string }>;
}
export default async function ProblemPage({ params }: IProblemPageProps) {
  const problemId = (await params).problemId;

  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwiZW1haWwiOiJnYnRteGxmQG5hdmVyLmNvbSIsInVzZXJuYW1lIjoi7Jyg7ISg7ZalIiwibmlja25hbWUiOiLjhYfjhYXjhY4iLCJ1c2VyUm9sZSI6IkFETUlOIiwidGllciI6Ik5FV0JJRSIsImV4cCI6MTc1MTg4MDIyMiwiaWF0IjoxNzUxMjc1NDIyfQ.Ud6bxBDvnGpOQeg48A86sBhvjqIUBvwGuL7HQJNII8s';

  const result = await getProblem(problemId, token);
  // const testCase = await getTestCase(problemId, token);

  if (!result) {
    console.error('문제를 불러오는 데 실패했습니다.');
    return <div>문제를 불러오는 데 실패했습니다.</div>;
  }

  return (
    <main className="flex pt-20 h-full">
      <div className="flex-1 flex flex-col gap-[29px]">
        <div className="flex gap-4">
          <Button>문제</Button>
          <Button>토론</Button>
        </div>
        <ProblemSection problem={result} />
      </div>
      <div className="h-full w-[1px] bg-white" />
      <ProblemWorksSection problemId={problemId} token={token} />
    </main>
  );
}
