'use client';
import { ProblemId, Icon } from '@/shared';
import clsx from 'clsx';
import { Mode } from './ProblemWorksSection';
import useProblemWebSocketStore, {
  useProblemWebSocketStoreActions,
} from '../model/useProblemWebSocketStore';
import useSubscribeProblem from '../hooks/useSubscribeProblem';
import GitPushDialog from '../../gitPush/ui/GitPushDialog';
import { useRouter } from 'next/navigation';
import { API_URL } from '@/api/constants/api.constants';
import { ISourceCode, useSubmissionForResultMutation } from '@/entities/submitCode';

interface TerminalPanelProps {
  problemId: ProblemId;
  setMode: (mode: Mode) => void;
  mode: Mode;
  githubUrl: string | null;
  sourceCodeData: ISourceCode;
}

export default function TerminalPanel({
  problemId,
  setMode,
  mode,
  githubUrl,
  sourceCodeData,
}: TerminalPanelProps) {
  const { sessionKey } = useProblemWebSocketStore();
  const router = useRouter();

  useSubscribeProblem(sessionKey);

  const { mutateAsync } = useSubmissionForResultMutation(problemId);
  const { clearResults } = useProblemWebSocketStoreActions();
  const { token } = useProblemWebSocketStore();

  const submitForResult = () => {
    if (!token) return router.push(API_URL.AUTH.SIGN_IN);
    clearResults();
    mutateAsync({ ...sourceCodeData, sessionKey: sessionKey || '' });
    setMode('result');
  };

  return (
    <div className="flex flex-col w-[68px] px-[10px] pt-[19px]">
      <div className="flex flex-col gap-6 items-center w-full text-[10px] text-[#ffffff]">
        <button className="flex flex-col gap-[3px] items-center" onClick={submitForResult}>
          <Icon.TerminalRunIcon className={clsx('text-[#6B6B6B]')} />
          <h3 className={clsx('text-[#6B6B6B]')}>RUN</h3>
        </button>
        <button
          className="flex flex-col gap-2 items-center w-[30px]"
          onClick={() => setMode('result')}
        >
          <Icon.TerminalResultIcon className="text-[#00E35B]" />
          <h3 className="text-[#00E35B]">RESULT</h3>
        </button>
        <button className="flex flex-col gap-[3px] items-center" onClick={() => setMode('review')}>
          <Icon.TerminalReviewIcon className={clsx(mode !== 'review' && 'text-[#6B6B6B]')} />
          <h3 className={clsx(mode !== 'review' && 'text-[#6B6B6B]')}>REVIEW</h3>
        </button>
        <GitPushDialog githubUrl={githubUrl} />
      </div>
    </div>
  );
}
