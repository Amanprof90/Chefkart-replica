import React from "react";

const steps = [
  {
    id: 1,
    title: "Register on app",
    desc: "Download the ChefKart App and register yourself",
    img: "https://storage.googleapis.com/chefkart-strapi-media/Register_on_app_4372ed1276.svg",
  },
  {
    id: 2,
    title: "Select Chefit - Cook for One Meal",
    desc: "Choose Chefit from ‘Our Services’ section on homepage",
    img: "https://storage.googleapis.com/chefkart-strapi-media/select_your_service_7ba59dddd5.svg",
  },
  {
    id: 3,
    title: "Fill requirements & pay",
    desc: "Share your preferences and complete the payment",
    img: "https://storage.googleapis.com/chefkart-strapi-media/make_payment_50309d2915.svg",
  },
  {
    id: 4,
    title: "Get a cook",
    desc: "Get a trained & trusted cook at your doorstep within 60 minutes",
    img: "https://storage.googleapis.com/chefkart-strapi-media/Get_a_cook_b0e201f46a.svg",
    button: true,
  },
];

const Process3 = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
        How <span className="text-[#421b58]">it</span> works
      </h2>

      {/* Steps Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center relative h-full"
          >
            {/* Dotted Line */}
            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-20 right-[-35px] w-16 h-[2px] border-t-2 border-dotted border-green-500"></div>
            )}

            {/* Image */}
            <div className="w-full flex justify-center mb-6">
              <img
                src={step.img}
                alt={step.title}
                className="w-40 h-40 object-contain"
              />
            </div>

            {/* Step Number */}
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-800 font-semibold mb-3">
              {step.id}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg md:text-xl mb-2 h-14 flex items-center justify-center">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed px-3 min-h-[60px] flex items-center justify-center">
              {step.desc}
            </p>

            {/* Button (only last) */}
            {step.button && (
              <button className="mt-4 bg-transparent border border-orange-500 text-orange-500 font-semibold px-6 py-2 rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300">
                Book Now
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process3;
