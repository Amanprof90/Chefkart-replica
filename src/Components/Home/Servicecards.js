// File: ServiceCards.js
import React from "react";

const services = [
  {
    title: "Chef for Party",
    description: "Professional party chefs to elevate your party experience",
    features: [
      "Multi-Cuisine Professionals",
      "Customisable Menu",
      "Prompt Service",
      "Bartenders, Waiters, etc.",
      "Available in Delhi NCR, Bengaluru and Mumbai",
    ],
    price: "₹2000",
    visit: "/visit",
    bgColor: "bg-white",
    textColor: "text-gray-800",
    tickColor: "text-green-500",
  },
  {
    title: "Chefit: One-time cook",
    description: "Get a professional cook for one-time within 60 minutes.",
    features: [
      "Trained & Verified Cooks",
      "Healthy & Hygienic Food",
      "Tailored to Your Taste",
      "Quick Service",
      "Available only in Gurugram",
    ],
    price: "₹399",
    visit: "/visit",
    bgColor: "bg-[#244C39]",
    textColor: "text-white",
    tickColor: "text-[#F4B73F]",
  },
];

const Servicecards = () => {
  return (
    <section className="py-20 bg-[#F3F4F6]">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#1E1E1E]">
        Discover Your Perfect Service
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-40 px-6 md:px-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bgColor} ${service.textColor} rounded-2xl shadow-xl p-8 w-full md:w-[350px] flex flex-col justify-between transition-transform hover:scale-105`}
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm mb-4">{service.description}</p>
              <hr className={`${service.textColor === "text-white" ? "border-[#6B7C73]" : "border-gray-300"} mb-4`} />
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className={`${service.tickColor} text-lg`}>✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm italic mb-1">Starting from</p>
              <p className="text-2xl font-semibold mb-4">
                {service.price} <span className="text-base font-normal">{service.visit}</span>
              </p>
              <button className="bg-[#F4A324] text-white w-full py-2 rounded-md font-semibold hover:bg-[#e6931e] transition">
                Book Now
              </button>
              <button
                className={`w-full py-2 mt-3 border rounded-md font-semibold ${
                  service.textColor === "text-white"
                    ? "border-white hover:bg-white hover:text-[#244C39]"
                    : "border-gray-400 hover:bg-gray-100"
                } transition`}
              >
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicecards;
