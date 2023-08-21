import { create } from "zustand";

interface useCreateCommunityModalInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCreateCommunityModal = create<useCreateCommunityModalInterface>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
