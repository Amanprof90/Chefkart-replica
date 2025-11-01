import React from "react";

const Voice2 = () => {
  return (
    <section className="bg-[0000] py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        {/* Left Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Let Food Do The Talking
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            Enjoy the spotlight with a chef for birthday, kitty party,
            anniversaries, house-warming, farewell, and any other party.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center relative">
          <img
            src="/bgchefcook.png"
            alt="ChefKart Party Chefs"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Voice2;
