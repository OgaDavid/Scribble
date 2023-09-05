import React from "react";

type PageContentProps = {
  children: React.ReactNode;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <div className="flex py-4 justify-center">
      <div className="flex w-[95%] justify-center max-w-[1300px]">
        <div className="flex flex-col w-full md:w-[65%] mr-0 md:mr-2">
          {children && children[0 as keyof typeof children]}
        </div>
        <div className="md:flex grow flex-col hidden">
          {children && children[1 as keyof typeof children]}
        </div>
      </div>
    </div>
  );
};
export default PageContent;
