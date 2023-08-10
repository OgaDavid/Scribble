"use client"
import Container from "@/components/Container";
import "./globals.css";
import Image from "next/image";
import { TooltipContainer } from "@/components/TooltipContainer";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <Container>
      <div className="flex flex-col pt-36 items-center justify-center">
        <h1 className="text-4xl md:text-5xl max- text-center max-w-[800px] pt-5 md:leading-[62px] font-extrabold">
          Sorry that page cannot be found!{" "}
        </h1>
        <p className="text-brand-gray text-sm md:text-lg text-center max-w-[800px] pt-3">
          Seems you&apos;ve sailed away from the page. Click the logo to head
          <TooltipContainer text="Click here to head back!">
            <span
              onClick={() => router.back()}
              className="underline italic cursor-pointer"
            >
              {" "}
              back there!
            </span>
          </TooltipContainer>
        </p>
        <Image
          src="/assets/images/404.png"
          alt="404"
          width={645}
          height={428}
        />
      </div>
    </Container>
  );
}
