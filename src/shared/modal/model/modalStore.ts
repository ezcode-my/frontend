import { create } from 'zustand';

type ModalType = 'solved' | 'alert' | null;

interface ModalState {
  isOpen: boolean;
  type: ModalType | null;
  payload?: unknown;
  open: <T>(type: ModalType, payload?: T) => void;
  close: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  type: null,
  payload: undefined,
  open: (type, payload) => set({ isOpen: true, type, payload }),
  close: () => set({ isOpen: false, type: null, payload: undefined }),
}));