import React from "react";

const Hero2 = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center bg-[#f8f8f9] overflow-hidden">
      {/* Background Image */}
      <img
        src="/Herochef.png"
        alt="Chef cooking"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 md:px-16">
        {/* Left Side - Text */}
        <div className="text-white max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Get a Cook for One-Time
            <br />
            <span className="text-orange-500">Within 60 minutes</span>
          </h1>

          <p className="mt-4 text-gray-200 text-base md:text-lg">
            Forget ordering online! Get fresh food cooked in your kitchen.
          </p>

          <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-all">
            Get Started
          </button>
        </div>

        
      </div>
    </section>
  );
};

export default Hero2;
