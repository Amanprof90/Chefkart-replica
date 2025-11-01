import React from "react";

const Mission = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-24">
        {/* Left Text */}
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Mission</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Impacting the cooking industry
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are on a mission to manage millions of kitchens while empowering
            the cooking community to contribute significantly to the economy.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/bgchefcook.png" // replace with your actual image path
            alt="Cooking on stove"
            className="rounded-xl shadow-lg object-cover w-[400px] h-[280px]"
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/cook2.png" // replace with your actual image path
            alt="Chefs"
            className="rounded-xl shadow-lg object-cover w-[400px] h-[280px] bg-[#f97316]/10"
          />
        </div>

        {/* Right Text */}
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Vision</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            One kitchen at a time
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to ensure that every household in the country can
            enjoy quality food prepared by our cooks in their own kitchens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
