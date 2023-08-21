"use client";

import { Modal } from "@/components/ui/Modal";
import { useCreateCommunityModal } from "@/hooks/use-create-community-modal"

export const CreateCommunity = () => {
  const createCommunityModal = useCreateCommunityModal()
  return (
    <Modal
      title="Create a Community"
      description="Be an author! Create your community"
      isOpen={createCommunityModal.isOpen}
      onClose={createCommunityModal.onClose}
    >
      wassup
    </Modal>
  );
};
