import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link className="flex items-center justify-center gap-2" href="/">
        <Image alt="logo" width={40} height={22} src="/assets/images/logo.svg" />
        <span className="font-extrabold text-2xl">Scribble</span>
      </Link>
    </div>
  );
};

export default Logo;
