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
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FIREBASE_ERRORS } from "@/lib/firebase/errors";

const OnboardPage = () => {
  const router = useRouter();

  // setup for email and password
  const [logInForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  // toggle password
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // setup for sign in with email and password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const signInUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signInWithEmailAndPassword(logInForm.email, logInForm.password);

    setLoginForm({
      email: "",
      password: "",
    });

    return;
  };

  useEffect(() => {
    if (user) {
      toast({
        title: "Welcome back🎉",
        description: `You are logged in as ${user.user.email}`,
      });
      router.push("/");
    }
  }, [user]);

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
            Login
          </h1>
          <div className="flex items-center">
            <p className="text-brand-gray text-xs md:text-sm text-center max-w-[450px] pt-3">
              Do not have an account?{" "}
            </p>
            <Link
              href="/auth/signup"
              className="text-brand-gray text-xs md:text-sm text-center max-w-[450px] pt-3 underline italic cursor-pointer"
            >
              Sign up
            </Link>
          </div>
          <div className="flex flex-col items-center gap-5">
            <OAuthButtons />
            <div className="p-2">
              <div>
                <p className="text-center pb-2 text-sm text-muted-foreground">
                  OR
                </p>
              </div>
              <form
                onSubmit={signInUser}
                className="flex md:flex-row max-md:flex-col gap-5 md:gap-10 items-center justify-center"
              >
                <div className="flex flex-col gap-1">
                  <Label
                    htmlFor="email"
                    className="md:text-center pl-[3px] md:pl-0 pb-[1px] md:pb-2 text-sm text-muted-foreground"
                  >
                    Email
                  </Label>
                  <Input
                    className="w-[300px]"
                    type="email"
                    value={logInForm.email}
                    required
                    name="email"
                    onChange={onChange}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Label className="md:text-center pl-[3px] md:pl-0 pb-[1px] md:pb-2 text-sm text-muted-foreground">
                    Password
                  </Label>
                  <div className="flex max-md:flex-col items-center gap-2">
                    <div className="relative">
                      <Input
                        className="w-[300px]"
                        type={showPassword ? "text" : "password"}
                        value={logInForm.password}
                        name="password"
                        required
                        onChange={onChange}
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
                        Login{" "}
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
          {error && (
            <div className="flex items-center">
              <p className="text-red-600 text-xs md:text-sm text-center max-w-[450px] pt-2">
                {FIREBASE_ERRORS[
                  error.message as keyof typeof FIREBASE_ERRORS
                ] || error.message}
              </p>
            </div>
          )}
          <div className="flex items-center">
            <p className="text-brand-gray text-xs md:text-sm text-center max-w-[450px] pt-3">
              Forgotten your password?{" "}
            </p>
            <Link
              href="/auth/reset-password"
              className="text-brand-gray text-xs md:text-sm text-center max-w-[450px] pt-3 underline italic cursor-pointer"
            >
              {" "}Reset password
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
