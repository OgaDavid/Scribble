"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { auth } from "@/lib/firebase/firebase.config";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import Link from "next/link";
import OAuthButtons from "@/components/OAuthButtons";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FIREBASE_ERRORS } from "@/lib/firebase/errors";

const OnboardPage = () => {
  const router = useRouter();

  // setup for email and password
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const passwordRegex = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[^\s]{8,}$/;
  const validatePassword = (password: string) => {
    return passwordRegex.test(password);
  };

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const signUpWithEmailAndPassword = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!validatePassword(signUpForm.password)) {
      toast({
        title: "Meh.. your password is weak! 🤒",
        variant: "destructive",
        description:
          "Your password must be at least 8 characters long with one uppercase letter, lowercase letter, number or special character",
      });
      return;
    }
    
    if(error) {
      toast({
        title: "Oops! 🤒",
        variant: "destructive",
        description: FIREBASE_ERRORS[error.message as keyof typeof FIREBASE_ERRORS] || error.message
      });
    }

    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
    
    setSignUpForm({
      email: "",
      password: "",
    })
  };

  useEffect(() => {
    if (user) {
      toast({
        title: "Account Created! 🎉",
        description: "Welcome to scribble, whoop whoop!",
        variant: "default"
      });
      router.push("/");
    }
  }, [user])

  // toggle password
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
            Sign Up
          </h1>
          <p className="text-brand-gray text-xs md:text-sm text-center max-w-[450px] pt-3">
            By signing up with Google/GitHub/Email, you acknowledge that you
            have read and understood, and agree to Scribble&apos;s
            <span className="underline italic cursor-pointer">
              {" "}
              Terms & Conditions and Privacy Policy.
            </span>
          </p>
          <div className="flex flex-col items-center gap-5">
            <OAuthButtons />
            <div className="p-2">
              <div>
                <p className="text-center pb-2 text-sm text-muted-foreground">
                  OR
                </p>
              </div>
              <form onSubmit={signUpWithEmailAndPassword} className="flex md:flex-row max-md:flex-col gap-5 md:gap-10 items-center justify-center">
                <div className="flex flex-col gap-1">
                  <Label
                    htmlFor="email"
                    className="md:text-center pl-[3px] md:pl-0 pb-[1px] md:pb-2 text-sm text-muted-foreground"
                  >
                    Email
                  </Label>
                  <Input
                    className="w-[300px]"
                    required
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={signUpForm.email}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Label className="md:text-center pl-[3px] md:pl-0 pb-[1px] md:pb-2 text-sm text-muted-foreground">
                    Password
                  </Label>
                  <div className="flex max-md:flex-col items-center gap-4 md:gap-2">
                    <div className="relative">
                      <Input
                        className="w-[300px]"
                        name="password"
                        onChange={onChange}
                        required
                        type={showPassword ? "text" : "password"}
                        value={signUpForm.password}
                        placeholder="Enter your password"
                      />
                      {showPassword ? (
                        <Eye
                          onClick={handleShowPassword}
                          className="absolute cursor-pointer w-4 h-4 top-[15px] right-3"
                        />
                      ) : (
                        <EyeOff
                          onClick={handleShowPassword}
                          className="absolute cursor-pointer w-4 h-4 top-[15px] right-3"
                        />
                      )}
                    </div>
                    <Button
                      typeof="submit"
                      className="max-md:w-full"
                      type="submit"
                    >
                      <div className="flex items-center gap-1">
                      Sign up{" "}
                      {loading && (
                        <Loader2 className="w-4 text-white h-4 animate-spin" />
                      )}
                    </div>
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-brand-gray text-xs md:text-sm text-center max-w-[450px] pt-3">
              Already have an account?{" "}
            </p>
            <Link
              href="/auth/login"
              className="text-brand-gray text-xs md:text-sm text-center max-w-[450px] pt-3 underline italic cursor-pointer"
            >
              Login
            </Link>
          </div>
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

export default OnboardPage;
