import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faq2 = [
  {
    question: "How can I join ChefKart?",
    answer:
      "To join ChefKart, click on the ‘Join ChefKart’ button above and fill out the form, or call us at 9871231115.",
  },
  {
    question: "Who can join ChefKart?",
    answer:
      "Any cook who has a passion for cooking and is above 18 years of age can join ChefKart.",
  },
  {
    question: "What are the requirements to join ChefKart?",
    answer:
      "To join ChefKart, you need to have an Aadhaar card, a smartphone, a bank account, and a passport-size photo.",
  },
];

const FAQ2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-gray-200">
        {faq2.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-lg font-semibold text-gray-800">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {openIndex === index && (
              <p className="mt-2 text-gray-600 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ2;
