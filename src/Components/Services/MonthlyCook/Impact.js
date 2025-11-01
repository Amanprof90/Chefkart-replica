import React from "react";

const Impact = () => {
  return (
    <section className="w-full flex flex-col md:flex-row h-auto md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-[300px] md:h-[500px]">
        <img
          src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMale_female_Cooks_ceb391c475.webp&w=1920&q=75"
          alt="Our expert cooks"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 h-[300px] md:h-[500px] bg-[#f8f5f0] flex items-center justify-center p-8 md:p-16">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 leading-snug text-center md:text-left">
          Discover your ideal cook from <br /> a team of over 4500 experts.
        </h2>
      </div>
    </section>
  );
};

export default Impact;
