'use client';
import { useState } from 'react';
import CodeEditor from './CodeEditor';
import TerminalOutput from './TerminalOutput';
import { INITIAL_SOURCE_CODE_DATA } from '@/shared/lib/codemirror/codeMirror.Docs';

interface IProblemWorksSectionProps {
  problemId: string;
  token: string;
}

export default function ProblemWorksSection({ problemId, token }: IProblemWorksSectionProps) {
  const [sourceCodeData, setSourceCodeData] = useState(INITIAL_SOURCE_CODE_DATA);

  const handleChangeSourceCodeData = (key: string, value: string | number) => {
    setSourceCodeData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="flex flex-col flex-1">
      <CodeEditor onChangeSourceCodeData={handleChangeSourceCodeData} />
      <div className="h-[1px] w-full bg-white" />
      <TerminalOutput problemId={problemId} token={token} sourceCodeData={sourceCodeData} />
    </section>
  );
}
