import Container from "@/components/Container";
import React from "react";

const GetStarted = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center pt-20 md:pt-32">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl max- text-center max-w-[900px] pt-5 md:leading-[62px] font-extrabold">
              Start <span className="text-brand-purple">scribbling</span> for
              free.
            </h1>
            <p className="text-brand-gray text-sm md:text-lg text-center max-w-[800px] pt-3">
              Scribble is a dynamic and inclusive network of communities. Just
              like Reddit, but with its own unique flair, Scribble offers a
              seamless platform for users to engage in a wide range of topics,
              creating a rich tapestry of conversations.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetStarted;
