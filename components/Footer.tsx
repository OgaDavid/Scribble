import React from "react";
import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";
import Image from "next/image";
import { TooltipContainer } from "./TooltipContainer";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Separator className="mt-1" />
        <div className="flex justify-between max-md:gap-8 mb-20 flex-wrap items-start mt-5 md:mt-10">
          <div className="flex flex-col items-start gap-5">
            <Logo />
            <p className="font-medium max-w-[356px] text-brand-gray">
              Post articles, join communities, get relevant content related to
              you.
            </p>
            <div>
              <h4 className="text-lg md:text-2xl font-extrabold">Legals</h4>
              <ul className="font-medium mt-4 text-brand-gray">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-start gap-10">
            <div>
              <h4 className="text-lg md:text-2xl font-extrabold">
                Quick links
              </h4>
              <ul className="font-medium flex mt-4 flex-col gap-4 text-brand-gray">
                <li className="cursor-pointer hover:underline">Home Page</li>
                <li className="cursor-pointer hover:underline">Product</li>
                <li className="cursor-pointer hover:underline">About Us</li>
                <li className="cursor-pointer hover:underline">FAQ</li>
                <li className="cursor-pointer hover:underline">Contact us</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg md:text-2xl font-extrabold">
                Social Media
              </h4>
              <p className="font-medium text-brand-gray">
                Follow us on our social media.
              </p>
              <div className="flex items-center mt-[32px] gap-3">
                <TooltipContainer text="Follow us on linkedin">
                  <Image
                    className="cursor-pointer"
                    alt="linkedin"
                    src="/assets/images/linkedin.svg"
                    width={20}
                    height={20}
                  />
                </TooltipContainer>
                <TooltipContainer text="Follow us on facebook">
                  <Image
                    className="cursor-pointer"
                    alt="facebook"
                    src="/assets/images/facebook.svg"
                    width={20}
                    height={20}
                  />
                </TooltipContainer>
                <TooltipContainer text="Follow us on instagram">
                  <Image
                    className="cursor-pointer"
                    alt="instagram"
                    src="/assets/images/instagram.svg"
                    width={20}
                    height={20}
                  />
                </TooltipContainer>
                <TooltipContainer text="Follow us on twitter">
                  <Image
                    className="cursor-pointer"
                    alt="twitter"
                    src="/assets/images/twitter.svg"
                    width={20}
                    height={20}
                  />
                </TooltipContainer>
                <TooltipContainer text="Follow us on youtube">
                  <Image
                    className="cursor-pointer"
                    alt="youtube"
                    src="/assets/images/youtube.svg"
                    width={20}
                    height={20}
                  />
                </TooltipContainer>
              </div>
            </div>
            <div className="space-y-[32px]">
              <h4 className="text-lg md:text-2xl font-extrabold">
                Download our App
              </h4>
              <div className="flex flex-col gap-4 items-center">
                <TooltipContainer text="Download scribble on Google play">
                  <Image
                    className="cursor-pointer"
                    alt="google play"
                    src="/assets/images/google-play.svg"
                    width={185}
                    height={185}
                  />
                </TooltipContainer>
                <TooltipContainer text="Download scribble on the App store">
                  <Image
                    className="cursor-pointer"
                    alt="app store"
                    src="/assets/images/app-store.svg"
                    width={185}
                    height={185}
                  />
                </TooltipContainer>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex text-brand-gray flex-col py-6 text-center items-center justify-center">
          <p className="text-xs md:text-sm font-semibold">
            Copyrights &copy; 2023 Scribble. All rights Reserved.
          </p>
          <p className="text-[10px] md:text-xs pt-1 font-semibold">
            Designed and Developed by{" "}
            <Link className="italic underline text-brand-purple" href="">
              OgaDavid
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
