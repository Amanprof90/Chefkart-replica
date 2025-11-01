import React from "react";

const ContactLower = () => {
  return (
    <section className="text-gray-800 body-font">
      <div className="container mx-auto px-5 py-16 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 md:pr-12 flex flex-col items-start">
          <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed mb-4">
            Our mission is to provide{" "}
            <span className="text-orange-500 font-semibold">at-home cooking</span>{" "}
            services in a way that has never been experienced before by empowering
            millions of cooks across India
          </h2>

          {/* Underline */}
          <div className="w-16 h-1 bg-orange-500 mb-6"></div>

          {/* Chef Image Section */}
          <div className="relative bg-orange-500 rounded-md overflow-hidden">
            <img
              src="https://thechefkart.com/_next/image?url=%2FM_F_Home%20chef_refine%201.png&w=3840&q=75" 
              alt="ChefKart Chefs"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-12 flex flex-col items-start">
          <img
            src="https://thechefkart.com/_next/image?url=%2FImage.png&w=3840&q=75" 
            alt="Salad Bowl"
            className="rounded-md mb-6 w-full h-auto object-cover"
          />
          <p className="leading-relaxed text-gray-700 mb-4">
            ChefKart is a platform that connects home chefs and households
            seamlessly by building an ecosystem. Our professionals are handpicked
            to serve you hygienic and wholesome meals catered to your taste!
          </p>
          <a
            href="https://thechefkart.com/about-us"
            className="text-orange-500 hover:text-orange-600 font-medium underline-offset-2 hover:underline"
          >
            Read about our story
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactLower;
