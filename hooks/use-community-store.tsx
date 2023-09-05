import { Community } from "@/typings";
import { create } from "zustand";

interface CommunitySnippet {
  communityId: string;
  communityDescription: string;
  communityImageUrl: string;
  isCreator?: boolean;
}

interface CommunityStoreInterface {
  mySnippets: CommunitySnippet[];
}

export const CommunityStore = create<CommunityStoreInterface>((set) => ({
    mySnippets: [],
  }));
