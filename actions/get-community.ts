import { firestore } from "@/lib/firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import safeJsonStringify from "safe-json-stringify";

export async function getCommunity(communityId: string) {
  try {
    const communityDocRef = doc(firestore, "communities", communityId);

    const communityDoc = await getDoc(communityDocRef);

    return JSON.parse(
      safeJsonStringify({ id: communityId, ...communityDoc.data() })
    );
  } catch (error) {
    console.log(`Get community error`, error);
  }
}
