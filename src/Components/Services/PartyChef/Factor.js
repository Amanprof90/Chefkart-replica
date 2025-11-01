import React from "react";
import { Users, Utensils, Leaf, MapPin } from "lucide-react";

const factors = [
  {
    icon: <Users className="w-10 h-10 text-[#1e3b35]" />,
    title: "No. of People",
  },
  {
    icon: <Utensils className="w-10 h-10 text-[#1e3b35]" />,
    title: "No. of Dishes",
  },
  {
    icon: <Leaf className="w-10 h-10 text-[#1e3b35]" />,
    title: "Cuisine Preference",
  },
  {
    icon: <MapPin className="w-10 h-10 text-[#1e3b35]" />,
    title: "Location",
  },
];

const Factor = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c2d26] mb-3">
        Our affordable prices <br className="md:hidden" />
        are based on{" "}
        <span className="text-[#f87b5d]">4 Factors</span>
      </h2>
      <p className="text-lg text-[#0c2d26] mb-12">Minimum prices guaranteed*</p>

      {/* Factors Grid */}
      <div className="flex flex-wrap justify-center items-start gap-10 md:gap-20">
        {factors.map((factor, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-3">{factor.icon}</div>
            <p className="text-base font-semibold text-[#0c2d26]">
              {factor.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Factor;
