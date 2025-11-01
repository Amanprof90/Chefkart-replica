import React from "react";

const Safety = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Top Curve (concave inward shape) */}
      <svg
        className="absolute top-0 left-0 w-full h-[100px] z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        {/* concave arc cutting into the video */}
        <path
          fill="#ffffff"
          d="M0,100 C400,0 1040,0 1440,100 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Background Video */}
      <video
        className="w-full h-[600px] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://storage.googleapis.com/chefkart-strapi-media/hygiene_740470aa24_674070e837.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-start px-8 md:px-20 bg-black/30">
        <div className="text-white max-w-xl z-20">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Your Safety, Our Top-Priority
          </h2>
          <p className="mt-4 text-lg md:text-xl font-medium">
            All our chefs follow the food safety guidelines and{" "}
            <span className="text-[#ff7b00] font-semibold">
              adhere to hygienic practices.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Safety;
