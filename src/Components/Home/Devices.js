import React from "react";
import { Link } from "react-router-dom";

const Devices = () => {
  return (
    <section className="w-full bg-gray-100 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 py-16">
      {/* Left: Mobile Mockup (Video) */}
      <div className="flex justify-center md:w-1/2 mb-10 md:mb-0">
  <div className="relative w-[220px] md:w-[260px] h-[460px] md:h-[520px] bg-black rounded-[2rem] shadow-xl flex items-center justify-center overflow-hidden border-[4px] border-black">
    {/* Video Mockup */}
    <video
      src="https://storage.googleapis.com/chefkart-strapi-media/public/AppDemoForWebsite.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-[95%] h-[95%] object-cover rounded-[1.5rem]"
    />
    {/* Camera Notch */}
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl"></div>
  </div>
</div>


      {/* Right: Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
          Let’s take it forward
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-4">
          This is as easy as it gets! Good cooks are just a click away.
        </p>
        <p className="text-gray-700 text-base md:text-lg mb-8">
          Download the App and get started.
        </p>

        {/* Store Buttons with React Router Links */}
        <div className="flex justify-center md:justify-start items-center space-x-4">
          <Link to="/app-store">
            <img
              src="https://storage.googleapis.com/chefkart-strapi-media/app_store_icon_555c3446a1.svg"
              alt="Download on App Store"
              className="w-32 md:w-36 hover:scale-105 transition-transform"
            />
          </Link>

          <Link to="/google-play">
            <img
              src="https://storage.googleapis.com/chefkart-strapi-media/play_icon_358c0e85c1.svg"
              alt="Get it on Google Play"
              className="w-32 md:w-36 hover:scale-105 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Devices;
