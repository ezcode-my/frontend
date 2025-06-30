'use client';

import { useState } from 'react';
import { submitAnswer } from '../lib/submitAnswer';
import ResolvingResult from './ResolvingResult';

interface TerminalOutputProps {
  problemId: string;
  token: string;
}

export default function TerminalOutput({ problemId, token }: TerminalOutputProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const testData = {
    languageId: 2, //파이썬
    sourceCode: 'print("Hello World");',
  };

  const handleSubmit = async () => {
    try {
      await submitAnswer(problemId, token, testData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('제출 실패:', error);
    }
  };

  return (
    <section className="flex-1 h-full">
      <div>
        <button onClick={handleSubmit}>제출</button>
      </div>
      <div>
        <div>결과창</div>
        {<pre>실행 결과가 여기에 표시됩니다.</pre>}
        <ResolvingResult isSubmitted={isSubmitted} />
      </div>
    </section>
  );
}
