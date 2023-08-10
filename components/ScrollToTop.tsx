"use client";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { TooltipContainer } from "./TooltipContainer";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY >= 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <TooltipContainer text="Scroll to top.">
          <button
            onClick={scrollToTop}
            className="fixed rounded-full z-30 transition duration-300 bg-white shadow-xl p-4 bottom-[30px] right-[30px] md:bottom-[50px] md:right-[50px]"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        </TooltipContainer>
      )}
    </div>
  );
};

export default ScrollToTop;
