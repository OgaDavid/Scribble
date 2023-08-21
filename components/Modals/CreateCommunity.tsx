"use client";

import { useState } from "react";

import { Modal } from "@/components/ui/Modal";
import { useCreateCommunityModal } from "@/hooks/use-create-community-modal";
import { Input } from "@/components/ui/Input";
import { AlertCircle } from "lucide-react";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/Button";

export const CreateCommunity = () => {
  const createCommunityModal = useCreateCommunityModal();

  const [communityName, setCommunityName] = useState("");
  const [communityType, setCommunityType] = useState("public");
  const [charsRemaining, setCharsRemaining] = useState(21);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 21) return;
    setCommunityName(event.target.value);
    setCharsRemaining(21 - event.target.value.length);
  };

  const onCommunityTypeChange = (
    event: React.ChangeEvent<HTMLButtonElement>
  ) => {
    setCommunityType(event.target.name);
    console.log(event.target.name);
  };

  return (
    <Modal
      title="Create a Community🎉"
      description="Be an author! Create your own community."
      isOpen={createCommunityModal.isOpen}
      onClose={createCommunityModal.onClose}
    >
      <div className="flex flex-col">
        <div>
          <Label htmlFor="community name">Name</Label>
          <span className="text-red-600 py-1 font-medium flex items-center gap-1 text-xs">
            <AlertCircle className="w-3 h-3 max-md:hidden" />
            Community names including capitalization cannot be edited!
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
        <Separator className="my-3" />
        <div>
          <h3 className="font-bold pb-3">Community Type</h3>
          <RadioGroup defaultValue="public">
            <div className="flex items-top space-x-2">
              <RadioGroupItem onChange={onCommunityTypeChange} value="public" id="public" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="public"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Public
                </label>
                <p className="text-xs text-muted-foreground">
                  Anyone can view, post and comment to this community. 
                </p>
              </div>
            </div>
            <div className="flex items-top space-x-2">
              <RadioGroupItem onChange={onCommunityTypeChange} value="private" id="private" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="private"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Private
                </label>
                <p className="text-xs text-muted-foreground">
                  Only approved users can view, post, and comment to this community.
                </p>
              </div>
            </div>
            <div className="flex items-top space-x-2">
              <RadioGroupItem onChange={onCommunityTypeChange} value="restricted" id="restricted" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="restricted"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Restricted
                </label>
                <p className="text-xs text-muted-foreground">
                  Any one can view this community but, only approved users can post.
                </p>
              </div>
            </div>
          </RadioGroup>
        </div>
        <div className="flex mt-5 md:justify-end">
          <Button className="max-md:w-full">Create community</Button>
        </div>
      </div>
    </Modal>
  );
};
