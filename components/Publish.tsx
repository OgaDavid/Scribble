import Image from "next/image";
import React from "react";

const Publish = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center pt-20 md:pt-32">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl max- text-center max-w-[900px] pt-5 md:leading-[62px] font-extrabold">
            Publish your article in a matter of minutes on{" "}
            <span className="text-brand-purple">Scribble</span>
          </h1>
          <p className="text-brand-gray text-sm md:text-lg text-center max-w-[800px] pt-3">
            Write and publish your articles. Upload thumbnails, embed links,
            code blocks and style your content as you like! It&apos;s that
            simple.
          </p>
        </div>
        <div className="mt-10">
          <Image
            width={1397}
            height={702}
            alt="editor"
            src="/assets/images/mockup.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Publish;
