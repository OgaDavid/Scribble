import { Timestamp } from "firebase/firestore";

export interface Community {
    id: string,
    creatorId: string,
    numberOfMembers: number,
    description: string,
    imageUrl?: string,
    createdAt: Timestamp,
    privacyType: "public" | "private" | "restricted"
}