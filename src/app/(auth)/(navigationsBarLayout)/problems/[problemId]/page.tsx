import { getProblem, ProblemSection, ProblemWorksSection } from '@/features/problem';

interface IProblemPageProps {
  params: Promise<{ problemId: string }>;
}
export default async function ProblemPage({ params }: IProblemPageProps) {
  const problemId = (await params).problemId;

  const result = await getProblem(problemId);

  if (!result) {
    console.error('문제를 불러오는 데 실패했습니다.');
    return <div>문제를 불러오는 데 실패했습니다.</div>;
  }

  return (
    <main className="flex pt-20 h-full">
      <ProblemSection problem={result} />
      <div className="h-full w-[1px] bg-white" />
      <ProblemWorksSection problemId={problemId} />
    </main>
  );
}
