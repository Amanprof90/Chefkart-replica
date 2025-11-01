import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faq4 = [
  {
    question: "What is Chefit?",
    answer:
      "Chefit is a one-time cooking service where our trusted and verified cooks prepare healthy meals in the comfort of your kitchen.",
  },
  {
    question: "What is the price for Chefit?",
    answer:
      "The base price for the Chefit service is ₹499. For each additional person, there is an extra charge of ₹100 per person.",
  },
  {
    question: "How can I find out if this service is available in my area?",
    answer:
      "You can check service availability by entering your location while booking or contacting our support team.",
  },
  {
    question: "Will Chefit provide groceries along with the service?",
    answer:
      "No, Chefit does not provide groceries. The cook will prepare food using groceries available in your kitchen.",
  },
  {
    question: "What can I expect my cook to do post cooking?",
    answer:
      "After cooking, the cook will clean the utensils and cooking area used for meal preparation.",
  },
  {
    question: "How many dishes can the cook prepare?",
    answer:
      "Typically, a cook can prepare up to 3–4 dishes in one session, depending on complexity and time.",
  },
  {
    question: "How long will a cook stay at my booking?",
    answer:
      "A cook usually stays for 1.5 to 2 hours per booking, based on your meal plan and requirements.",
  },
  {
    question: "Is Chefit suitable for parties or get-togethers?",
    answer:
      "Yes, you can book Chefit for small parties or gatherings. We recommend mentioning this while booking for proper arrangements.",
  },
  {
    question: "Can I hire the same professional for the 'cook for a month' service?",
    answer:
      "Yes, you can request the same cook for long-term bookings like our ‘cook for a month’ plan, subject to their availability.",
  },
  {
    question: "What are the cancellation and refund policies?",
    answer:
      "You can cancel bookings easily through our app or website. Refunds are processed as per our cancellation policy.",
  },
  {
    question: "When will the cook be assigned for a Chefit booking?",
    answer:
      "A cook is usually assigned within a few minutes after booking confirmation, depending on your area and slot availability.",
  },
  {
    question: "How can I get support related to my booking?",
    answer:
      "You can reach our support team via chat, email, or phone for any help related to your booking.",
  },
];

const FAQ4 = () => {
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
        {faq4.map((faq, index) => (
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

export default FAQ4;
