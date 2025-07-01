import { getProblem, ProblemSection, ProblemWorksSection } from '@/features/problem';

interface IProblemPageProps {
  params: Promise<{ problemId: string }>;
}
export default async function ProblemPage({ params }: IProblemPageProps) {
  const problemId = (await params).problemId;

  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwiZW1haWwiOiJnYnRteGxmQG5hdmVyLmNvbSIsInVzZXJuYW1lIjoi7Jyg7ISg7ZalIiwibmlja25hbWUiOiLsnKDriqXtlZzruYTrsoQ2OTEiLCJ1c2VyUm9sZSI6IkFETUlOIiwidGllciI6Ik5FV0JJRSIsImV4cCI6MTc1MTk2MzY3MywiaWF0IjoxNzUxMzU4ODczfQ.nk8v7r_eqNol8yk-uHqvKjx4IQjY5w2NpnLxWm4aWLQ';
  const result = await getProblem(problemId, token);
  // const testCase = await getTestCase(problemId, token);

  if (!result) {
    console.error('문제를 불러오는 데 실패했습니다.');
    return <div>문제를 불러오는 데 실패했습니다.</div>;
  }

  return (
    <main className="flex pt-20 h-full">
      <ProblemSection problem={result} />
      <div className="h-full w-[1px] bg-white" />
      <ProblemWorksSection problemId={problemId} token={token} />
    </main>
  );
}
