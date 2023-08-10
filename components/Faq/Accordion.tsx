import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

const faq = [
  {
    id: 1,
    question: "How many communities can I create?",
    answer: "You can create as much communities as you like.",
  },
  {
    id: 2,
    question: "Can I upgrade to a premium version?",
    answer: "There is no premium version, at least not yet.",
  },
  {
    id: 3,
    question: "Can I save my work for later?",
    answer:
      "Yes, while working on an article, you can save to your drafts for later.",
  },
  {
    id: 4,
    question: "Can I edit my post after publishing?",
    answer: "No, you cannot edit your post after publishing.",
  },
];

const AccordionComponent = () => {
  return (
    <div className="mt-10 mx-auto md:mt-20 max-w-[1076px]">
      {faq.map((faq) => (
        <div key={faq.id}>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
