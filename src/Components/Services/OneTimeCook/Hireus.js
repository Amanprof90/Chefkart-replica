import React from "react";

const Hireus = () => {
  return (
    <section className="bg-[#f7f7f7]">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-10 md:py-1 gap-8 md:gap-12">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[85%] md:w-[75%] flex items-center justify-center">
            <img
              src="/cook2.png"
              alt="Chef"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 text-left space-y-4">
          <p className="text-[#b7410e] font-semibold">
            Running on a tight schedule
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f0f] leading-snug">
            No time to cook? <br />
            ChefKart Got You <br />
            Covered!!
          </h2>
          <p className="text-gray-700 font-medium">
            Get a professional cook within 60 minutes
          </p>
          <button className="mt-4 bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-900 transition">
            Book Now
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#faebd7] py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-6">
          <h3 className="text-3xl font-bold text-orange-500 md:w-1/2 leading-snug text-center md:text-left">
            Why order online <br /> when you can just Chefit?
          </h3>
          <p className="text-gray-800 md:w-1/2 text-lg text-center md:text-left">
            Enjoy your favourite comfort food cooked in your kitchen without
            burning your wallets. Get a cook for a one-time meal at an
            affordable price.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hireus;
