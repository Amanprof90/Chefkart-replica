import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faq3 = [
  {
    question: "What is Monthly Cook?",
    answer: "Cook for a Month a seamless 30-day service where a trusted and verified cook prepares meals according to your preferences in the comfort of your home.",
  },
  {
    question: "Can I try the cook before choosing the 'Cook for a Month' service?",
    answer: "Yes, ChefKart offers a trial option where you can hire a cook for a day to experience their cooking before committing to the monthly service.",
  },
  {
    question: "When do I have to make the payment for the 'Cook for a Month' service?",
    answer: "Once the trial is complete and you are satisfied with the cook's services, you can proceed to make the payment for the monthly service.",
  },
];

const FAQ3 = () => {
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
        {faq3.map((faq, index) => (
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

export default FAQ3;
