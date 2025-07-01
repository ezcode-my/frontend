import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { useShallow } from 'zustand/shallow';
import {
  IProblemStompFinalResult,
  IProblemStompInitCase,
  IProblemStompResult,
} from './submitProblemStore.types';

/** 스토어 상태 인터페이스 */
interface IMessageInitialState {
  status: boolean;
  initCase: IProblemStompInitCase | null;
  results: IProblemStompResult[] | [];
  finalResult: IProblemStompFinalResult | null;
  error?: unknown | null;
  gitStatus?: unknown | null;
}

/** 스토어 액션 인터페이스 */
interface IMessageInitialAction {
  actions: {
    setStatus: (status: boolean) => void;
    setMessage: (key: MessageKey, message: any) => void;
    clearMessages: () => void;
  };
}

/** 메시지 키 타입 */
type MessageKey = 'initCase' | 'results' | 'finalResult' | 'error' | 'git-status';

/** 인증 스토어 타입 */
type IProblemWebSocketStore = IMessageInitialState & IMessageInitialAction;

/** 인증 스토어 */
const useProblemWebSocketStore = create<IProblemWebSocketStore>()(
  devtools((set) => ({
    testCase: null,
    results: null,
    totalResult: null,
    actions: {
      setStatus: (status) => {
        set({
          status: status,
        });
      },

      setMessage: (key, message) => {
        // // 디버깅용 콘솔 찍음
        // console.log('setMessage', key, message);
        set((state: any) => {
          if (key === 'results') {
            const newResults = [...(state.results ?? []), message];
            newResults.sort((a, b) => a.seqId - b.seqId);
            return {
              ...state,
              results: newResults,
            };
          }
          return {
            ...state,
            [key]: message,
          } as Partial<IMessageInitialState>;
        });
      },

      clearMessages: () => {
        //초기화
        set({ initCase: null, results: [], finalResult: null, error: null, gitStatus: null });
      },
    },
  }))
);

/** 인증 액션 훅 */
export function useProblemWebSocketStoreActions() {
  return useProblemWebSocketStore(
    useShallow((state) => ({
      setStatus: state.actions.setStatus,
      setMessage: state.actions.setMessage,
      clearMessages: state.actions.clearMessages,
    }))
  );
}

export default useProblemWebSocketStore;
