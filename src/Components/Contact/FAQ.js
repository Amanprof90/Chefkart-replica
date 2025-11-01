import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What does ChefKart do?",
    answer:
      "ChefKart connects home chefs and households by providing hygienic, at-home cooking services through trained professionals.",
  },
  {
    question: "What are your services?",
    answer:
      "We offer personalized home cooking, meal preparation, and kitchen assistance services for households across India.",
  },
  {
    question: "How are cooks onboarded?",
    answer:
      "All cooks go through a strict onboarding process including background verification, cooking trials, and hygiene training.",
  },
  {
    question: "How to reach ChefKart Support?",
    answer:
      "You can contact our support team via email or through the Contact Us page on our website.",
  },
  {
    question: "Do you have an app?",
    answer:
      "Yes! ChefKart has a mobile app available on both Android and iOS platforms for easy booking and management.",
  },
];

const FAQ = () => {
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
        {faqs.map((faq, index) => (
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
              <p className="mt-2 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
