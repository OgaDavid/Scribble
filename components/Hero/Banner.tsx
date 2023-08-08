import { ChevronRight } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className="border inline-block py-1 px-3 border-brand-purple rounded-[30px] mx-auto">
      <span className="text-xs flex items-center font-medium">
        🎉 Scribble now supports login and sign up with oAuth. {"  "}
        <span className="flex hover:underline cursor-pointer text-brand-purple items-center">
          {" "}
          Read More <ChevronRight className="h-4 w-4" />
        </span>
      </span>
    </div>
  );
};

export default Banner;
