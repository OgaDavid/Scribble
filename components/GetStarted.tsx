import Container from "@/components/Container";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

const GetStarted = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center pt-32 md:pt-48">
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <h1 className="text-4xl md:text-6xl text-center max-w-[900px] pt-5 md:leading-[62px] font-extrabold">
                Start <span className="text-brand-purple">scribbling</span> for
                free.
              </h1>
              <Image
                className="absolute max-md:w-[120px] max-md:h-[79px] -top-12 md:-top-28 z-[5] right-8 md:right-12"
                src="/assets/images/top-peek.png"
                alt="peek"
                height={150}
                width={221}
              />
            </div>
            <p className="text-brand-gray text-sm md:text-lg text-center max-w-[800px] pt-3">
              Scribble is a dynamic and inclusive network of communities. Just
              like Reddit, but with its own unique flair, Scribble offers a
              seamless platform for users to engage in a wide range of topics,
              creating a rich tapestry of conversations.
            </p>
          </div>
          <div className="mt-7 flex items-center justify-center gap-6">
            <Button asChild className="bg-black flex gap-1">
              <Link className="flex items-center" href="/auth/signup">
                <span>Try Scribble</span>{" "}
                <ArrowRight className="w-4 mt-[1px] h-4" />
              </Link>
            </Button>
            <Link
              className="text-brand-purple font-medium flex items-center gap-1"
              href=""
            >
              <span>Request a demo</span>
              <ChevronRight className="w-4 h-4 mt-[1px]" />
            </Link>
          </div>
          <div className="mt-12 md:mt-20">
            <Image
              alt="start-scribbling"
              src="/assets/images/start-scribbling.png"
              width={1080}
              height={329}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetStarted;
