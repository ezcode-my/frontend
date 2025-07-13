import { ReactNode } from 'react';
import { GlobalModal } from '@/shared/modal/ui/GlobalModal';

interface Props {
  children: ReactNode;
}

export const ModalProvider = ({ children }: Props) => {
  return (
    <>
      {children}
      <GlobalModal />
    </>
  );
};
