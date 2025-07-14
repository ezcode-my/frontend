import { ProblemWorksSection } from '@/features/problem';
import { getSessionKey } from '@/features/problem/api/server/getSessionKey';

interface IProblemPageProps {
  params: Promise<{ problemId: string }>;
}
export default async function ProblemPage({ params }: IProblemPageProps) {
  const problemId = (await params).problemId;
  const sessionKey = await getSessionKey(problemId);

  return <ProblemWorksSection problemId={problemId} githubUrl={''} sessionKey={sessionKey} />;
}
