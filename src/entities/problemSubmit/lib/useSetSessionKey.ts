import { ProblemId } from '@/shared';
import { useSubmitQuery } from '../model/query/sessionKey.query';
import { useEffect } from 'react';
import { useProblemWebSocketStoreActions } from '@/features/problem/model/useProblemWebSocketStore';

export default function useSetSessionKey(problemId: ProblemId) {
  const { data } = useSubmitQuery(problemId);
  const { setSessionKey } = useProblemWebSocketStoreActions();
  useEffect(() => {
    if (data?.sessionKey) {
      setSessionKey(data.sessionKey);
    }
  }, [data, problemId]);
}
