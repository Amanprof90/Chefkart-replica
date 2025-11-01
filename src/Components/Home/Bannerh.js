import React from "react";

const Bannerh= () => {
  return (
    <section
      className="relative w-full h-[250px] md:h-[350px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/fc2.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative text-center text-white px-4">
        <p className="text-sm md:text-lg mb-2">
          What's Better Than Your Favourite Food
        </p>
        <h1 className="text-2xl md:text-4xl font-bold text-orange-500 leading-snug">
          Getting it cooked in <br /> your kitchen.
        </h1>
      </div>
    </section>
  );
};

export default Bannerh;
