import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Is the free audit really free?",
      answer:
        "Yes. You'll receive an automated report outlining inefficiencies and potential savings at no cost.",
    },
    {
      question: "What kind of data do you need?",
      answer:
        "You can upload anonymized usage logs or connect your API. We don't store sensitive information.",
    },
    {
      question: "How is this different from generic monitoring tools?",
      answer:
        "Most tools show where the waste is. We find it, quantify it, and execute a precision engineered fix followed by continuous tuning.",
    },
    {
      question: "How long until we see results?",
      answer:
        "Our clients typically begin seeing measurable savings within two weeks of the engineer audit.",
    },
    {
      question: "Can we scale the retainer as our needs grow?",
      answer:
        "Absolutely. Our retainer tiers are flexible and can be adjusted based on your evolving LLM usage patterns and optimization requirements.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const FAQCard = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => (
    <div
      className="border border-border rounded-lg overflow-hidden transition-all duration-200 hover:border-primary/50"
    >
      <button
        className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between bg-white hover:bg-muted/30 transition-colors"
        onClick={() => toggleFAQ(index)}
      >
        <h3 className="text-base md:text-lg font-semibold text-left text-primary">
          {faq.question}
        </h3>
        <ChevronDown
          className={`h-5 w-5 text-primary transition-transform duration-200 flex-shrink-0  ${
            openIndex === index ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {openIndex === index && (
        <div className="px-4 md:px-6 py-3 md:py-4 bg-muted/20 border-t border-border">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <section id="faq" className="py-10 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-16 px-3 sm:px-4">
          <h2
            className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 break-words"
            style={{ color: "#192841" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-sm xs:text-base sm:text-base md:text-xl text-muted-foreground break-words">
            Get answers to common questions about our LLM cost optimization services.
          </p>
        </div>

        {/* Grid layout: 2-2-1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6 w-full">
          {/* Left Column - 2 FAQs */}
          <div className="space-y-6">
            <FAQCard faq={faqs[0]} index={0} />
            <FAQCard faq={faqs[1]} index={1} />
          </div>

          {/* Right Column - 2 FAQs */}
          <div className="space-y-6">
            <FAQCard faq={faqs[2]} index={2} />
            <FAQCard faq={faqs[3]} index={3} />
          </div>
        </div>

        {/* Bottom Center - 1 FAQ */}
        <div className="max-w-2xl mx-auto">
          <FAQCard faq={faqs[4]} index={4} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
