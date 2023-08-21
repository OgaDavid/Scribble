"use client";

import { Modal } from "@/components/ui/Modal";
import { useCreateCommunityModal } from "@/hooks/use-create-community-modal";
import { Input } from "@/components/ui/Input";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";

export const CreateCommunity = () => {
  const createCommunityModal = useCreateCommunityModal();

  const [communityName, setCommunityName] = useState("");
  const [charsRemaining, setCharsRemaining] = useState(21);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 21) return;
    setCommunityName(event.target.value);
    setCharsRemaining(21 - event.target.value.length);
  };
  return (
    <Modal
      title="Create a Community"
      description="Be an author! Create your community"
      isOpen={createCommunityModal.isOpen}
      onClose={createCommunityModal.onClose}
    >
      <div>
        <div>
          <Label htmlFor="community name">Name</Label>
          <span className="text-red-600 py-1 font-medium flex items-center gap-1 text-xs">
            <AlertCircle className="w-3 h-3" />
            Community names including capitalization cannot be edited.
          </span>
          <Input
            value={communityName}
            onChange={handleChange}
            name="community name"
            placeholder="Enter community name"
          />
          <p
            className={cn(
              charsRemaining === 0 && "text-red-600",
              "py-1 pl-1 text-xs"
            )}
          >
            {charsRemaining} characters remaining.
          </p>
        </div>
        <div>

        </div>
      </div>
    </Modal>
  );
};
