import Logo from "@/components/Logo";
import { MenuItems } from "@/components/Navbar/MenuItems";
import Container from "@/components/Container";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Container>
      <header className="flex items-end py-2 justify-between">
        <div className="flex items-center gap-10">
          <Logo />
          <MenuItems />
        </div>
        <div className="flex gap-10 items-center">
          <div>
            <Link className="flex hover:underline items-center gap-1" href="https://github.com/OgaDavid/Scribble">
              <span className="font-medium text-sm">GitHub</span>
              <ArrowUpRight className="w-4 h-4"/>
            </Link>
          </div>
          <div className="flex items-center gap-7">
            <Link className="font-medium text-sm" href="/onboard">
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
      </header>
    </Container>
  );
};
export default Navbar;
