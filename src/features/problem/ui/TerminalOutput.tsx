'use client';

import { useState } from 'react';
import { submitSourceCodeData } from '../lib/submitSourceCodeData';
import ResolvingResult from './ResolvingResult';
import { ICodeEditorSourceCodeData } from '@/shared/lib/codemirror/codeMirror.Docs';

interface TerminalOutputProps {
  problemId: string;
  token: string;
  sourceCodeData: ICodeEditorSourceCodeData;
}

export default function TerminalOutput({ problemId, token, sourceCodeData }: TerminalOutputProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitSourceCodeData = async () => {
    try {
      await submitSourceCodeData(problemId, token, sourceCodeData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('제출 실패:', error);
    }
  };

  return (
    <section className="flex-1 h-full">
      <div>
        <button onClick={handleSubmitSourceCodeData}>제출</button>
      </div>
      <div>
        <div>결과창</div>
        {<pre>실행 결과가 여기에 표시됩니다.</pre>}
        <ResolvingResult isSubmitted={isSubmitted} />
      </div>
    </section>
  );
}
