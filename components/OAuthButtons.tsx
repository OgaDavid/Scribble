import { auth } from "@/lib/firebase/firebase.config";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { toast } from "./ui/use-toast";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const OAuthButtons = () => {

  const router = useRouter();

  // setup for google oAuth
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const googleSignIn = () => {
    signInWithGoogle();
    if (googleError) {
      toast({
        variant: "destructive",
        description: `Error: ${googleError.message}`,
      });
    }
  };

  // setup for github oAuth
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const githubSignIn = () => {
    signInWithGithub();
    if (githubError) {
      toast({
        variant: "destructive",
        description: `Error: ${githubError.message}`,
      });
    }
  };

  // toast notification once user logs in
  useEffect(() => {
    if (googleUser || githubUser) {
      toast({
        description: `You are logged in as ${
          googleUser?.user.email || githubUser?.user.email
        }`,
      });
      router.push("/");
    }
  }, [googleUser, githubUser]);
  
  return (
    <div className="flex md:flex-row max-md:flex-col gap-5 md:gap-10 pt-10 items-center justify-center">
      <div>
        <Button
          className="w-[300px]"
          variant="outline"
          onClick={googleSignIn}
          disabled={googleLoading}
        >
          {googleLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <span className="flex gap-2">
              <Image
                alt="google"
                src="/assets/images/google.png"
                width={21}
                height={21}
              />
              Continue with Google
            </span>
          )}
        </Button>
      </div>
      <div>
        <Button
          className="w-[300px]"
          variant="outline"
          onClick={githubSignIn}
          disabled={githubLoading}
        >
          {githubLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <span className="flex gap-2">
              <Image
                alt="google"
                src="/assets/images/github.png"
                width={21}
                height={21}
              />
              Continue with GitHub
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default OAuthButtons;
