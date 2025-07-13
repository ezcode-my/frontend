import { SubmissionsResonse } from '@/query/mypage/mypage.interface';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  payload: SubmissionsResonse;
}

export const SolvedModal = ({ isOpen, onClose, payload }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000080]"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md text-[#000] max-h-[80%] min-w-[80%] flex flex-col gap-2 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="font-bold text-xl">내가 푼 문제 상세 페이지</h1>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-1">
            <span className="w-25">제목</span>
            <span>{payload.problemTitle}</span>
          </div>
          <div className="flex flex-row gap-1">
            <span className="w-25 shrink-0">설명</span>
            <span>{payload.problemDescription}</span>
          </div>
          <div className="flex flex-col gap-1 border-[#000] border-[1px]">
            {payload.submissions.map((item, index) => {
              return (
                <div className="flex flex-col gap-1" key={item.id}>
                  <div className="flex flex-row gap-1">
                    <span className="w-25 shrink-0">제출 답안 {index + 1}</span>
                    <span>{item.sourceCode}</span>
                  </div>
                  <div className="flex flex-row gap-1">
                    <span className="w-25">정답 여부</span>
                    <span>{item.isCorrect ? '정답' : '오답'}</span>
                  </div>
                  <div className="flex flex-row gap-1">
                    <span className="w-25">실행 시간</span>
                    <span>{item.executionTime}</span>
                  </div>
                  <div className="flex flex-row gap-1">
                    <span className="w-25">메모리 사용량</span>
                    <span>{item.memoryUsage}</span>
                  </div>
                  <div className="flex flex-row gap-1">
                    <span className="w-25">제출 일자</span>
                    <span>
                      {item.submittedAt.split('T')[0]} {item.submittedAt.split('T')[1]}
                    </span>
                  </div>

                  {index !== payload.submissions.length - 1 && <hr className="text-[#000]" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
