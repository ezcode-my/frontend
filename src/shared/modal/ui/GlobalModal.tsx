'use client';
import { SubmissionsResonse } from '@/query/mypage/mypage.interface';
import { useModalStore } from '../model/modalStore';
import { SolvedModal } from '@/shared/ui/modal/SolvedModal';

export const GlobalModal = () => {
  const { isOpen, close, type, payload } = useModalStore();

  let modalContent: React.ReactNode = null;

  switch (type) {
    case 'solved':
      modalContent = (
        <SolvedModal isOpen={isOpen} onClose={close} payload={payload as SubmissionsResonse} />
      );
      break;
    // case 'confirm':
    //   modalContent = <ConfirmModal isOpen={isOpen} onClose={close} />;
    //   break;
    default:
      modalContent = null;
  }

  return <>{modalContent}</>;
};
