import Container from "@/components/Container";
import React from "react";

type PageContentProps = {
  children: React.ReactNode;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <div className="flex border border-red-400 py-4 justify-center">
      <div className="flex border border-green-400 w-[95%] justify-center max-w-[1300px]">
        <div className="flex border border-blue-400 flex-col w-full md:w-[65%] mr-0 md:mr-2">
          {children && children[0 as keyof typeof children]}
        </div>
        <div className="md:flex border border-orange-400 grow flex-col hidden">
          {children && children[1 as keyof typeof children]}
        </div>
      </div>
    </div>
  );
};
export default PageContent;
