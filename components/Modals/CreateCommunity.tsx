"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Modal } from "@/components/ui/Modal";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useCreateCommunityModal } from "@/hooks/use-create-community-modal";
import { auth, firestore } from "@/lib/firebase/firebase.config";
import { cn } from "@/lib/utils";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { AlertCircle, Loader2, Trash } from "lucide-react";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import Upload from "../Upload";

export const CreateCommunity = () => {
  const [user] = useAuthState(auth);

  const createCommunityModal = useCreateCommunityModal();

  const [communityName, setCommunityName] = useState("");
  const [communityType, setCommunityType] = useState("public");
  const [communityDescription, setCommunityDescription] = useState("");
  const [charsRemaining, setCharsRemaining] = useState(21);
  const [descriptionCharsRemaining, setDescriptionCharsRemaining] =
    useState(150);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 21) return;
    setCommunityName(event.target.value);
    setCharsRemaining(21 - event.target.value.length);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.value.length > 150) return;
    setCommunityDescription(event.target.value);
    setDescriptionCharsRemaining(150 - event.target.value.length);
  };

  const handleCreateCommunity = async () => {
    if (error) {
      setError("");
    }
    const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(communityName) || communityName.length < 3) {
      setError(
        "Community names must be between 3-21 characters, and can only contain letters, numbers and underscores (_) with no spaces."
      );
      return;
    }

    setLoading(true);

    try {
      const communityDocRef = doc(firestore, "communities", communityName);
      const communityDoc = await getDoc(communityDocRef);

      if (communityDoc.exists()) {
        throw new Error(
          `Sorry, "${communityName}" is taken. Try another community name.`
        );
      }

      await setDoc(communityDocRef, {
        creatorID: user?.uid,
        createdAt: serverTimestamp(),
        numberOfMembers: 1,
        description: communityDescription,
        imageUrl: imageUrl,
        privacyType: communityType,
      });
    } catch (error: any) {
      console.log("Handle create community error", error);
      setError(error.message);
    }

    setLoading(false);
    setImageUrl("")
    setCommunityDescription("")
    setCommunityName("")
    createCommunityModal.onClose()
  };

  return (
    <Modal
      title="Create a Community🎉"
      description="Be an author! Create your own community."
      isOpen={createCommunityModal.isOpen}
      onClose={createCommunityModal.onClose}
    >
      <Tabs defaultValue="form" className="md:w-[400px]">
        <TabsList>
          <TabsTrigger value="form">Details</TabsTrigger>
          <TabsTrigger value="imageUpload">Upload Image</TabsTrigger>
        </TabsList>
        <TabsContent value="form">
          <div className="flex flex-col">
            <ScrollArea className="md:h-[300px]">
              <div>
                <Label htmlFor="community name">Name</Label>
                <span className="text-red-600 py-1 font-medium flex items-center gap-1 text-xs">
                  <AlertCircle className="w-3 h-3" />
                  Community names cannot be edited!
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
                {error && (
                  <p className="text-xs py-1 pl-1 text-red-600">{error}</p>
                )}
              </div>
              <div className="mt-2">
                <Label htmlFor="community description">Description</Label>
                <Textarea
                  onChange={handleDescriptionChange}
                  value={communityDescription}
                  placeholder="Your community description"
                />
                <p
                  className={cn(
                    descriptionCharsRemaining === 0 && "text-red-600",
                    "py-1 pl-1 text-xs"
                  )}
                >
                  {descriptionCharsRemaining} characters remaining.
                </p>
              </div>
              <Separator className="my-3" />
              <div>
                <h3 className="font-bold pb-3">Community Type</h3>
                <RadioGroup defaultValue="public">
                  <div
                    onClick={() => setCommunityType("public")}
                    className="flex items-top space-x-2"
                  >
                    <RadioGroupItem value="public" id="public" />
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
                  <div
                    onClick={() => setCommunityType("private")}
                    className="flex items-top space-x-2"
                  >
                    <RadioGroupItem value="private" id="private" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="private"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Private
                      </label>
                      <p className="text-xs text-muted-foreground">
                        Only approved users can view, post, and comment to this
                        community.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => setCommunityType("restricted")}
                    className="flex items-top space-x-2"
                  >
                    <RadioGroupItem value="restricted" id="restricted" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="restricted"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Restricted
                      </label>
                      <p className="text-xs text-muted-foreground">
                        Any one can view this community but, only approved users
                        can post.
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </ScrollArea>
            <div className="flex mt-5 md:justify-end">
              <Button onClick={handleCreateCommunity} className="max-md:w-full">
                <div className="flex items-center gap-1">
                  Create community{" "}
                  {loading && (
                    <Loader2 className="w-4 text-white h-4 animate-spin" />
                  )}
                </div>
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="imageUpload">
          <div className="py-2">
            <h3 className="text-muted-foreground text-sm">
              {imageUrl === ""
                ? "Upload an image for your community"
                : "Upload successful!🙌"}
            </h3>
          </div>
          <div className="">
            {imageUrl === "" ? (
              <Upload setImageUrl={setImageUrl} />
            ) : (
              <div className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
                <div className="z-10 absolute top-2 right-2">
                  <Button
                    type="button"
                    onClick={() => setImageUrl("")}
                    variant="destructive"
                    size="sm"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
                <Image
                  fill
                  className="object-cover"
                  alt="Image"
                  src={imageUrl}
                />
              </div>
            )}
            <div className="flex mt-5 md:justify-end">
              <Button onClick={handleCreateCommunity} className="max-md:w-full">
                <div className="flex items-center gap-1">
                  Create community{" "}
                  {loading && (
                    <Loader2 className="w-4 text-white h-4 animate-spin" />
                  )}
                </div>
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Modal>
  );
};
