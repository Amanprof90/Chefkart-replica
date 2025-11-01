import React from "react";

const Aboutus = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20">
        <div className="text-white max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            What People Think About Us
          </h2>
          <p className="mt-4 text-lg md:text-xl font-medium">
            All our customers reviews after using chefkart services{" "}
            <span className="text-[#ff7b00] font-semibold">
              from booking to home services everything.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
