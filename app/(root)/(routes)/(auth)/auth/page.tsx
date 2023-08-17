"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase/firebase.config";
import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const OnboardPage = () => {
  const router = useRouter();

  // setup for google oAuth
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const googleSignIn = () => {
    signInWithGoogle();
    if (googleError) {
      toast({
        variant: "destructive",
        description: `Error: ${googleError}`,
      });
    }
  };

  useEffect(() => {
    if (googleUser) {
      toast({
        description: `You are logged in as ${googleUser?.user.email}`,
      });
      router.push("/");
    }
  }, [googleUser]);

  // setup for github oAuth
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const githubSignIn = () => {
    signInWithGithub();
    if (githubError) {
      toast({
        variant: "destructive",
        description: `Error: ${githubError}`,
      });
    }
  };

  return (
    <Container>
      <div className="bg-lines pt-16 md:pt-16">
        <div className="flex justify-end">
          <Image
            className="max-md:w-[100px]"
            src="/assets/images/paper-airplane.png"
            alt="paper airplane"
            width={200}
            height={94}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl max- text-center max-w-[800px] pt-5 md:leading-[62px] font-extrabold">
            Sign Up/Login
          </h1>
          <p className="text-brand-gray text-sm md:text-lg text-center max-w-[800px] pt-3">
            By signing up with Google/GitHub, you acknowledge that you have read
            and understood, and agree to Scribble&apos;s
            <span className="underline italic cursor-pointer">
              {" "}
              Terms & Conditions and Privacy Policy.
            </span>
          </p>
          <div>
          <div className="flex md:flex-row max-md:flex-col md:gap-10 pt-10 items-center justify-center">
            <div>
              <p className="text-center pb-2 text-sm text-muted-foreground">
                Sign up/Login with Google.
              </p>
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
              <p className="text-center pb-2 text-sm text-muted-foreground">
                Sign up/Login with GitHub.
              </p>
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
          <div></div>
          </div>
        </div>
        <div>
          <Image
            className="flex-start max-md:mt-10 max-md:w-[100px]"
            alt="throw"
            src="/assets/images/throw-airplane.png"
            width={200}
            height={506}
          />
        </div>
      </div>
    </Container>
  );
};

export default OnboardPage;
