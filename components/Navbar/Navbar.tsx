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
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase/firebase.config";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, []);

  // state and function for fixed navbar on scroll
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 30) {
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
  function closeNavigation() {
    setIsOpen(false);
  }
  return (
    <>
      <header
        className={cn(
          "fixed w-full z-10 transition-all duration-150",
          isFixed ? "bg-white shadow-md" : ""
        )}
      >
        <Container>
          <div className="flex py-2 justify-between">
            <div className="flex items-center gap-5 md:gap-10">
              <div onClick={closeNavigation}>
                <Logo />
              </div>
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
                {user ? (
                  <Link
                    className={cn(
                      buttonVariants(),
                      "inline-flex text-sm px-7 justify-center gap-1"
                    )}
                    href="/onboard"
                  >
                    <span>Logout</span>
                    <ArrowRight className="w-4 h-4 mt-1" />
                  </Link>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
            <div className="md:hidden" onClick={openNavigation}>
              <Hamburger open={isOpen} />
            </div>
          </div>
        </Container>

        {/* Mobile Navigation */}
        <Container>
          <div className="bg-white shadow-md rounded-lg transition duration-150">
            <div className={cn(isOpen ? "block" : "hidden", "pt-4 pl-3")}>
              <MobileMenuItems />
              <div className="mt-12">
                <TooltipContainer text="View this page on GitHub.">
                  <Link
                    onClick={closeNavigation}
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
                  {user ? (
                    <>
                      <li className="py-4">
                        <Link
                          onClick={closeNavigation}
                          className={cn(
                            buttonVariants(),
                            "inline-flex text-sm px-7 justify-center gap-1"
                          )}
                          href="/onboard"
                        >
                          <span>Logout</span>
                          <ArrowRight className="w-4 h-4 mt-1" />
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="py-3">
                        <Link
                          onClick={closeNavigation}
                          className="font-medium hover:underline text-sm"
                          href="/onboard"
                        >
                          Login
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          onClick={closeNavigation}
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
                    </>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
export default Navbar;
