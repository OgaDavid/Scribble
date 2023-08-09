"use client";

import Logo from "@/components/Logo";
import { MenuItems } from "@/components/Navbar/MenuItems";
import Container from "@/components/Container";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { TooltipContainer } from "../TooltipContainer";
import { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import { MobileMenuItems } from "./MobileMenuItems";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  // state and function for fixed navbar on scroll
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 70) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  function openNavigation() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <header
        className={cn(
          "fixed w-full transition-all duration-150",
          isFixed ? "bg-white shadow-md" : ""
        )}
      >
        <Container>
          <div className="flex py-2 justify-between">
            <div className="flex items-center gap-5 md:gap-10">
              <Logo />
              <MenuItems />
            </div>
            <div className="hidden md:flex gap-10 items-center">
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
                <Link
                  className="font-medium hover:underline text-sm"
                  href="/onboard"
                >
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
            <div className="md:hidden" onClick={openNavigation}>
              <Hamburger open={isOpen} />
            </div>
          </div>
        </Container>

        {/* Mobile Navigation */}
        <div className={`bg-white`}>
          <Container>
            <div className={cn(isOpen ? "block" : "hidden", "pt-4")}>
              <MobileMenuItems />
              <div className="mt-12">
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
              <nav>
                <ul>
                  <li className="py-3">
                    <Link
                      className="font-medium hover:underline text-sm"
                      href="/onboard"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="py-2">
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
                  </li>
                  <li className="py-2">
                    <Link href=""></Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};
export default Navbar;
