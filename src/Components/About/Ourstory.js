import React from "react";
import { Link } from "react-router-dom";

const Ourstory = () => {
  return (
    <section className="relative w-full bg-[#f9f9f9] py-16 px-6 md:px-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="z-10">
          {/* Tag */}
          <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Our Story
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-snug text-gray-900 mb-6">
            Embracing the goal of{" "}
            <span className="text-[#2e7d32]">Change & Empowerment</span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            We aim to bridge the gap between delicious food and a healthy
            lifestyle while empowering our cooks.
          </p>

          {/* Button */}
          <Link
            to="/contact"
            className="bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center md:justify-end">
          {/* Background Dots */}
          <div className="absolute top-10 right-20 w-6 h-6 bg-orange-500 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-5 h-5 bg-orange-500 rounded-full"></div>

          {/* Plate Image */}
          <div className="relative">
            <img
              src="/Dish.png" 
              alt="Dish"
              className="w-[400px] h-[280px] rounded-xl object-cover shadow-md"
            />

            {/* Chef Image (Overlapping) */}
            <div className="absolute -bottom-10 -left-10 bg-[#ff7a00] p-1 rounded-md">
              <img
                src="/cook2.png" 
                alt="Chef"
                className="w-[220px] h-[280px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourstory;
