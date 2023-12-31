import { auth, firestore } from "@/lib/firebase/firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "./ui/use-toast";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FIREBASE_ERRORS } from "@/lib/firebase/errors";
import { doc, setDoc } from "firebase/firestore";
import { User } from "firebase/auth";

const OAuthButtons = () => {
  const router = useRouter();

  // setup for google oAuth
  const [signInWithGoogle, userCredentials, loading, error] =
    useSignInWithGoogle(auth);

  // create user credentials document and store in firestore
  const createUserDoc = async (user: User) => {
    const userDocRef = doc(firestore, "users", user.uid);
    await setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
  };

  const googleSignIn = () => {
    signInWithGoogle();
    if (error) {
      toast({
        title: "Oops!",
        variant: "destructive",
        description:
          FIREBASE_ERRORS[error.message as keyof typeof FIREBASE_ERRORS] ||
          error.message,
      });
    }
  };

  // toast notification once user logs in
  useEffect(() => {
    if (userCredentials) {
      // store user in db
      createUserDoc(userCredentials.user);

      toast({
        description: `You are logged in as ${userCredentials?.user.email}`,
      });
      router.push("/");
    }
  }, [userCredentials]);

  return (
    <div className="flex md:flex-row max-md:flex-col gap-5 md:gap-10 pt-10 items-center justify-center">
      <div>
        <Button
          className="w-[300px]"
          variant="outline"
          onClick={googleSignIn}
          disabled={loading}
        >
          <span className="flex gap-2 items-center">
            <Image
              alt="google"
              src="/assets/images/google.png"
              width={21}
              height={21}
            />
            Continue with Google
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default OAuthButtons;
