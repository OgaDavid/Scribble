"use client";

import Logo from "@/components/Logo";
import { MenuItems } from "@/components/Navbar/MenuItems";
import Container from "@/components/Container";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { TooltipContainer } from "../TooltipContainer";
import { useState } from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  // state and function for fixed navbar on scroll
  const [isFixed, setIsFixed] = useState<boolean>(false);

  function setNavbarToFixed() {
    if (window.scrollY >= 75) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }

  window.addEventListener("scroll", setNavbarToFixed);
  return (
    <>
      <header
        className={cn(
          "fixed w-full transition-all duration-200",
          isFixed
            ? "bg-white shadow-md"
            : ""
        )}
      >
        <Container>
          <div className="flex items-end py-2 justify-between">
            <div className="flex items-center gap-10">
              <Logo />
              <MenuItems />
            </div>
            <div className="flex gap-10 items-center">
              <div>
                <TooltipContainer text="View this page on GitHub.">
                  <Link
                    className="flex hover:underline items-center gap-1"
                    href="https://github.com/OgaDavid/Scribble"
                  >
                    <span className="font-medium text-sm">GitHub</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </TooltipContainer>
              </div>
              <div className="flex items-center gap-7">
                <Link className="font-medium hover:underline text-sm" href="/onboard">
                  Login
                </Link>
                <Link
                  className={cn(
                    buttonVariants(),
                    "inline-flex text-sm px-7 justify-center gap-1"
                  )}
                  href="/onboard"
                >
                  <span>Sign up</span>
                  <ArrowRight className="w-4 h-4 mt-1" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
export default Navbar;
