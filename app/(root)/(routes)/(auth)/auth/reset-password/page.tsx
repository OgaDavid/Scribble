"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { auth } from "@/lib/firebase/firebase.config";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { FIREBASE_ERRORS } from "@/lib/firebase/errors";
import Link from "next/link";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  // setup for password reset link
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const sendResetLink = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (error) {
      toast({
        variant: "destructive",
        title: "Oops!🤒",
        description:
          FIREBASE_ERRORS[error.message as keyof typeof FIREBASE_ERRORS] ||
          error.message,
      });
      return;
    }
    await sendPasswordResetEmail(email);
    setSuccess(true);
  };

  if (success) {
    toast({
      title: "Reset link sent!",
      description:
        "Check your email. Don't forget to also check your spam folder.",
    });
  }

  return (
    <Container>
      <div className="bg-lines pt-16 md:pt-24">
        <div className="flex justify-end">
          <Image
            className="w-[120px]"
            src="/assets/images/paper-airplane.png"
            alt="paper airplane"
            width={200}
            height={94}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl max- text-center max-w-[800px] pt-5 md:leading-[62px] font-extrabold">
            Reset your password
          </h1>
          <p className="text-brand-gray text-xs md:text-sm text-center max-w-[450px] pt-3">
            Enter the email associated with your account and we'll send you a
            reset link.
          </p>
          {success ? (
            <div className="flex items-center">
              <p className="text-brand-gray text-xs md:text-sm text-center max-w-[450px] pt-3">
                Cheers🎉. Check your email and then come back to
              </p>
              <Link
                href="/auth/login"
                className="text-brand-gray text-xs md:text-sm text-center max-w-[450px] pt-3 underline italic cursor-pointer"
              >
                login
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-5">
              <div className="p-2">
                <form
                  onSubmit={sendResetLink}
                  className="flex mt-4 flex-col gap-5 items-center justify-center"
                >
                  <div className="flex flex-col gap-1">
                    <Label
                      htmlFor="email"
                      className="pl-[3px] md:pl-0 pb-[1px] md:pb-2 text-sm text-muted-foreground"
                    >
                      Email
                    </Label>
                    <Input
                      className="w-[300px]"
                      type="email"
                      value={email}
                      required
                      name="email"
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>

                  <Button typeof="submit" className="w-full" type="submit">
                    <div className="flex items-center gap-1">
                      Send Reset Link{" "}
                      {sending && (
                        <Loader2 className="w-4 text-white h-4 animate-spin" />
                      )}
                    </div>
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
        <div>
          <Image
            className="flex-start max-md:mt-10 max-md:w-[100px] w-[150px]"
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

export default ResetPasswordPage;
