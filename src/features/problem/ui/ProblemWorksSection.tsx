'use client';
import { useState } from 'react';
import CodeEditor from './CodeEditor';
import TerminalOutput from './TerminalOutput';
import { INITIAL_SOURCE_CODE_DATA } from '@/shared/lib/codemirror/codeMirror.Docs';
import TerminalPanel from './TerminalPanel';

interface IProblemWorksSectionProps {
  problemId: string;
  token: string;
}

export default function ProblemWorksSection({ problemId, token }: IProblemWorksSectionProps) {
  const [sourceCodeData, setSourceCodeData] = useState(INITIAL_SOURCE_CODE_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChangeSourceCodeData = (key: string, value: string | number) => {
    setSourceCodeData((prev) => ({ ...prev, [key]: value }));
  };

  const handleChangeSubmittedStatus = (status: boolean) => {
    setIsSubmitted(status);
  };

  return (
    <section className="flex flex-col flex-1">
      <CodeEditor onChangeSourceCodeData={handleChangeSourceCodeData} />
      <div className="h-[1px] w-full bg-white" />
      <div className="flex flex-1">
        <TerminalOutput isSubmitted={isSubmitted} />
        <TerminalPanel
          problemId={problemId}
          token={token}
          sourceCodeData={sourceCodeData}
          onSubmit={handleChangeSubmittedStatus}
        />
      </div>
    </section>
  );
}
