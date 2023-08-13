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

const page = () => {
  const router = useRouter();
  // setup google and github oAuth for app
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [SignInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const googleSignIn = async () => {
    signInWithGoogle();
  };
  const githubSignIn = async () => {
    SignInWithGithub();
  };

  useEffect(() => {
    if (googleUser || githubUser) {
      router.push("/");
      // console.log(googleUser || githubUser)
    }
  }, [googleUser, githubUser]);

  return (
    <Container>
      <div className="bg-lines pt-24 md:pt-16">
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
            By clicking “Continue with Google/GitHub” below, you acknowledge
            that you have read and understood, and agree to Scribble&apos;s
            <span className="underline italic cursor-pointer">
              {" "}
              Terms & Conditions and Privacy Policy.
            </span>
          </p>
          <div>
            <div className="flex gap-5 flex-wrap pt-10 items-center justify-center">
              <Button
                className="flex gap-2"
                variant="outline"
                onClick={googleSignIn}
                disabled={googleLoading}
              >
                <Image
                  alt="google"
                  src="/assets/images/google.png"
                  width={21}
                  height={21}
                />
                Continue with Google
              </Button>
              <Button
                className="flex gap-2"
                variant="outline"
                onClick={githubSignIn}
                disabled={githubLoading}
              >
                <Image
                  alt="github"
                  src="/assets/images/github.png"
                  width={21}
                  height={21}
                />
                Continue with GitHub
              </Button>
            </div>
            {googleError?.message ||
              (githubError?.message && (
                <p className="text-center text-red-600 pt-3 text-sm">
                  {googleError?.message || githubError?.message}
                </p>
              ))}
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

export default page;
