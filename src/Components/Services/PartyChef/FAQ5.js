import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faq5 = [
  {
    question: "What is Chef for Party?",
    answer:
      "Chef for Party is a premium service by ChefKart where professional chefs come to your home or event location and cook delicious food for your guests.",
  },
  {
    question: "For how many people can I book Chef for Party?",
    answer:
      "You can book a Chef for any group size — from small family gatherings to large parties. The number of chefs will depend on your guest count and menu.",
  },
  {
    question: "What if I’m hosting a large gathering or catering event?",
    answer:
      "ChefKart provides multiple chefs and kitchen assistants for large gatherings to ensure everything runs smoothly and efficiently.",
  },
  {
    question: "Where is this service available?",
    answer:
      "Chef for Party is currently available in selected cities. You can check availability by entering your location on the ChefKart website or app.",
  },
  {
    question: "How can I find out if this service is available in my area?",
    answer:
      "Simply download the ChefKart app or visit our website, enter your pin code, and we’ll instantly show if the service is available in your area.",
  },
  {
    question: "What kind of food can the chef prepare for a party?",
    answer:
      "Our chefs can prepare a wide range of cuisines including Indian, Chinese, Continental, and more — customized to your taste and event theme.",
  },
  {
    question: "What are the charges for the service?",
    answer:
      "Charges vary depending on the menu, number of guests, and service duration. You’ll get a clear estimate before confirming the booking.",
  },
  {
    question: "Is there a booking amount for this service?",
    answer:
      "Yes, a small advance payment is required to confirm your booking. The remaining amount can be paid after the event.",
  },
  {
    question: "When do I need to pay the final amount?",
    answer:
      "The final amount is payable after the party once the service has been completed to your satisfaction.",
  },
  {
    question: "Will ChefKart provide the ingredients and utensils for the dishes?",
    answer:
      "You can either provide the ingredients yourself or request ChefKart to arrange them at an additional cost. Basic utensils should be available at your venue.",
  },
  {
    question: "How many chefs will come?",
    answer:
      "The number of chefs depends on your guest count and selected menu. For larger parties, we usually send multiple chefs to ensure smooth execution.",
  },
  {
    question: "Who takes care of cleaning after the party?",
    answer:
      "Our chefs clean the kitchen area they use. However, if you need complete post-event cleaning, we can arrange it at additional cost.",
  },
  {
    question: "Can you also provide a bartender and servers?",
    answer:
      "Yes, we can provide professional bartenders and serving staff upon request for an additional fee.",
  },
  {
    question: "Can I update the menu or guest count if plans change?",
    answer:
      "Absolutely! You can update your menu or guest count by contacting our support team before the event date.",
  },
  {
    question: "When will the chef arrive?",
    answer:
      "The chef usually arrives 1–2 hours before the event to set up and begin preparation.",
  },
  {
    question: "How can I get support related to my booking?",
    answer:
      "You can reach our support team via the ChefKart app or website. We’re available 7 days a week to help with your booking or service queries.",
  },
];

const FAQ5 = () => {
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
        {faq5.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left focus:outline-none"
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

export default FAQ5;
