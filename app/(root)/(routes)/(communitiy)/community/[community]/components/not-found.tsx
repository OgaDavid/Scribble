"use client"

import Container from "@/components/Container";
import { TooltipContainer } from "@/components/TooltipContainer";
import { useCreateCommunityModal } from "@/hooks/use-create-community-modal";
import Image from "next/image";
import React from "react";

const NotFound = ({ name }: { name: string }) => {
  const onOpen = useCreateCommunityModal((state) => state.onOpen);
  return (
    <Container>
      <div className="py-16 md:py-20 text-2xl">
        <div className="flex flex-col md:selection:pt-36 items-center justify-center">
          <h1 className="text-4xl md:text-5xl max- text-center max-w-[800px] pt-5 md:leading-[62px] font-extrabold">
            Uh oh!{" "}
          </h1>
          <p className="text-brand-gray text-sm md:text-lg text-center max-w-[800px] pt-3">
            We&apos;ve searched for {name}, but we just can&apos;t find it. Be the
            first to
            <TooltipContainer text={`Click here to create ${name}.`}>
              <span
                onClick={onOpen}
                className="underline italic cursor-pointer"
              >
                {" "}
                create this community.
              </span>
            </TooltipContainer>
          </p>
          <Image
          className="mt-10"
            src="/assets/images/not-found.png"
            alt="404"
            width={645}
            height={428}
          />
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
