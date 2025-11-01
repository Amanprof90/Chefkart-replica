import React from "react";

const Impact2 = () => {
  return (
    <section className="w-full h-auto md:h-[500px] flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.89)] mb-4">
      {/* Left Section - Text */}
      <div className="w-full md:w-1/2 bg-[#f8f8f8] flex flex-col justify-center px-8 md:px-20 py-10 md:py-0 h-full">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 leading-snug mb-4">
          Homemade food that <br /> warms the soul
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-8">
          Never have to worry about skipping meals or <br />
          eating oily outside food.
        </p>
        <button className="bg-orange-500 text-white font-medium px-6 py-3 rounded-md hover:bg-orange-600 transition-all duration-300 w-fit">
          Book Now
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 h-[300px] md:h-[500px]">
        <img
          src="/food1.png" // Place your image in /public folder
          alt="Homemade Food"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Impact2;
