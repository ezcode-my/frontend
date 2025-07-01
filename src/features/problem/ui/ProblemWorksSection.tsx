'use client';
import { useState } from 'react';
import CodeEditor from './CodeEditor';
import TerminalOutput from './TerminalOutput';
import { INITIAL_SOURCE_CODE_DATA } from '@/shared/lib/codemirror/codeMirror.Docs';
import TerminalPanel from './TerminalPanel';
import useConnectProblemWebSocket from '../hooks/useConnectProblemWebSocket';

interface IProblemWorksSectionProps {
  problemId: string;
  token: string;
}

export default function ProblemWorksSection({ problemId, token }: IProblemWorksSectionProps) {
  const [sourceCodeData, setSourceCodeData] = useState(INITIAL_SOURCE_CODE_DATA);
  const [sessionKey, setSessionKey] = useState('');

  const handleChangeSourceCodeData = (key: string, value: string | number) => {
    setSourceCodeData((prev) => ({ ...prev, [key]: value }));
  };

  useConnectProblemWebSocket(token, sessionKey);

  return (
    <section className="flex flex-col flex-1">
      <CodeEditor onChangeSourceCodeData={handleChangeSourceCodeData} />
      <div className="h-[1px] w-full bg-white" />
      <div className="flex flex-1">
        <TerminalOutput />
        <TerminalPanel
          problemId={problemId}
          token={token}
          sourceCodeData={sourceCodeData}
          onSubmit={(sessionKey) => setSessionKey(sessionKey)}
        />
      </div>
    </section>
  );
}
