import Image from "next/image";
import React from "react";

type LogoProps = {
  imageUrl: string;
  alt: string;
};

const Logo: React.FC<LogoProps> = ({ imageUrl, alt }) => {
  return (
    <Image
      className="relative rounded-md object-cover flex w-[100px] h-[90px] md:w-[110px] md:h-[100px] -top-9 md:-top-10"
      src={imageUrl}
      alt={alt}
      width={160}
      height={160}
    />
  );
};
export default Logo;
