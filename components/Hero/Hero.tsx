import { Button } from "@/components/ui/Button";
import Banner from "./Banner";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Gradient from "./Gradient";

const Hero = () => {
  return (
    <div className="flex flex-col bg-lines items-center justify-center pt-32">
      <Gradient />
      <Banner />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl text-center max-w-[800px] pt-5 leading-[62px] font-extrabold">
          Discover the power of communities with{" "}
          <span className="text-brand-purple">Scribble</span>
        </h1>
        <p className="text-brand-gray text-lg text-center max-w-[800px] pt-3">
          Scribble is a dynamic and inclusive blogging community for developers
          and people in tech. Scribble offers a seamless platform for users to
          post and engage in a wide range of topics and articles, creating a
          rich tapestry of conversations.{" "}
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <Button asChild className="bg-brand-purple flex gap-1">
          <Link href='/onboard'>
            Get started for Free <ArrowRight className="w-4 mt-[3px] h-4" />
          </Link>
        </Button>
      </div>
      <div className="mt-16">
        <Image width={1013} height={349} alt="hero" src='/assets/images/hero.png'/>
      </div>
    </div>
  );
};

export default Hero;
