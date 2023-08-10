import React from "react";
import AccordionComponent from "./Accordion";
import Container from "@/components/Container";

const FAQ = () => {
  return (
    <section>
      <Container>
        <div id="faq"  className="flex flex-col items-center justify-center pt-20 md:pt-32">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl text-center max-w-[900px] pt-5 md:leading-[62px] font-extrabold">
              Questions & Answers
            </h1>
            <p className="text-brand-gray text-sm md:text-lg text-center max-w-[800px] pt-3">
              Here are some answers to your frequently asked questions.
            </p>
          </div>
        </div>
        <AccordionComponent />
      </Container>
    </section>
  );
};

export default FAQ;
