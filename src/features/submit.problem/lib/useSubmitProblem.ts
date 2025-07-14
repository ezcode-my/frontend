import { ProblemId } from '@/shared';
import { useState } from 'react';

export default function useSubmitProblem(problemId: ProblemId) {
  const [sourceCode, setSourceCode] = useState('');

  const handleChangeSourceCodeData = () => {};

  const submitForResult = () => {};

  return { handleChangeSourceCodeData, sourceCode, submitForResult };
}
