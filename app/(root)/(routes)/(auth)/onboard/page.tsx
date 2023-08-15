"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  useSignInWithGoogle,
  useSendSignInLinkToEmail,
} from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase/firebase.config";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/Input";
import { Loader2 } from "lucide-react";

const OnboardPage = () => {
  const router = useRouter();
  // setup google oAuth for app
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

  // setup for sign in with email link
  const [email, setEmail] = useState("");
  const [sendSignInLinkToEmail, sending, error] =
    useSendSignInLinkToEmail(auth);

  const actionCodeSettings = {
    url: "https://tryscribble.vercel.app/onboard/confirm-email",
    handleCodeInApp: true,
  };

  const sendEmailLink = async () => {
    const success = await sendSignInLinkToEmail(email, actionCodeSettings);

    if (success) {
      toast({
        description: `Mail sent to ${email}, remember to check your spams folder if you can\'t find the mail.`,
      });
      localStorage.setItem("email", email);
    }

    if (error) {
      toast({
        variant: "destructive",
        description: `Error: ${error}`,
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
            By signing up with Google or email, you acknowledge that you have
            read and understood, and agree to Scribble&apos;s
            <span className="underline italic cursor-pointer">
              {" "}
              Terms & Conditions and Privacy Policy.
            </span>
          </p>
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
            <span className="font-semibold text-xs py-5">OR</span>
            <div>
              <p className="text-center pb-2 text-sm text-muted-foreground">
                Sign up/Login with link sent to your email.
              </p>
              <div className="flex max-md:flex-col items-center gap-2">
                <Input
                  className="w-[300px]"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
                <Button
                  onClick={sendEmailLink}
                  className="max-md:w-full"
                  type="submit"
                >
                  {sending ? (
                    <Loader2 className="w-4 text-white h-4 animate-spin" />
                  ) : (
                    "Send"
                  )}
                </Button>
              </div>
            </div>
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
