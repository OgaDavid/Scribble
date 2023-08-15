"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "@/components/ui/Input";
import { Loader2 } from "lucide-react";
import { useSignInWithEmailLink } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase/firebase.config";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";

const OnboardPage = () => {
  const router = useRouter();
  const [signInWithEmailLink, user, loading, error] =
    useSignInWithEmailLink(auth);

    // get email from local storage
  const [email, setEmail] = useState("");
  useEffect(() => {
    const email = window.localStorage.getItem("email");
    if (email) {
      setEmail(email);
    }
  }, []);

  const signInWithEmail = () => {
    if (email) {
      signInWithEmailLink(email);
    }

    if (error) {
        toast({
            description: error.message,
            variant: "destructive"
        });
    }
  };

  useEffect(() => {
    if (user) {
      toast({
        description: `You are logged in as ${user.user.email}`,
      });
      localStorage.removeItem("email")
      router.push("/");
    }
  }, [user]);

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
            Confirm Email
          </h1>
          <div className="flex md:flex-row max-md:flex-col md:gap-10 pt-10 items-center justify-center">
            <div>
              <p className="text-center pb-2 text-sm text-muted-foreground">
                Last step! verify your email to login now.
              </p>
              <div className="flex max-md:flex-col items-center gap-2">
                <Input
                  className="w-[300px]"
                  type="email"
                  value={email || undefined}
                  placeholder="Enter your email"
                />
                <Button
                  onClick={signInWithEmail}
                  className="max-md:w-full"
                  type="submit"
                >
                  {loading ? (
                    <Loader2 className="w-4 text-white h-4 animate-spin" />
                  ) : (
                    "Confirm"
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
