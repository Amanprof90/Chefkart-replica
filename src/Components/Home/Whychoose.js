import React from "react";

const Whychoose = () => {
  const features = [
    {
      icon: "https://storage.googleapis.com/chefkart-strapi-media/professional_cooks_ec13508556.svg",
      title: "Professional Cooks",
    },
    {
      icon: "https://storage.googleapis.com/chefkart-strapi-media/easy_booking_92fea7ca01.svg",
      title: "Easy Booking",
    },
    {
      icon: "https://storage.googleapis.com/chefkart-strapi-media/timely_service_3a6f9d9ebe.svg",
      title: "Timely Service",
    },
    {
      icon: "https://storage.googleapis.com/chefkart-strapi-media/prompt_support_ca831687ac.svg",
      title: "Prompt Support",
    },
  ];

  return (
    <section
      className="relative bg-[#3a2516] bg-cover bg-center text-white py-20 px-6 md:px-16"
      style={{
        backgroundImage:
          "url('https://storage.googleapis.com/chefkart-strapi-media/public/why_choose_bg_chefkart.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3a2415]/85"></div>

      <div className="relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-14">
          Why Choose <span className="text-orange-500">ChefKart?</span>
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#4b2e1c]/60 rounded-3xl p-8 flex flex-col items-center text-center border border-white/20 hover:scale-105 transition-transform duration-300 shadow-lg backdrop-blur-sm"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-20 h-20 mb-6 object-contain"
              />
              <hr className="w-16 border-gray-300/40 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
