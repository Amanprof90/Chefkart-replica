import React, { useState } from "react";

const Everyone = () => {
  const [activeTab, setActiveTab] = useState("singles");

  const content = {
    singles: {
      title: "No more missing Ghar Ka Khana!",
      description: "Let our cooks bring memories of home to your plate.",
      img: "/teamg1.png",
    },
    families: {
      title: "Food catered to every family member!",
      description:
        "Spend time with your loved ones as our best cooks take care of the cooking.",
      img: "/family.png",
    },
  };

  const { title, description, img } =
    activeTab === "singles" ? content.singles : content.families;

  return (
    <section className="bg-[#f9f9f9] py-16 px-4 md:px-16 text-center md:text-left">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
        Healthy food cooked in your kitchen, <br /> whenever you want!
      </h2>

      {/* Tabs */}
      <div className="flex justify-center md:justify-start space-x-6 mb-10">
        <button
          onClick={() => setActiveTab("singles")}
          className={`pb-1 text-lg font-medium border-b-2 transition-all ${
            activeTab === "singles"
              ? "text-orange-500 border-orange-500"
              : "text-gray-400 border-transparent"
          }`}
        >
          For Singles
        </button>
        <button
          onClick={() => setActiveTab("families")}
          className={`pb-1 text-lg font-medium border-b-2 transition-all ${
            activeTab === "families"
              ? "text-orange-500 border-orange-500"
              : "text-gray-400 border-transparent"
          }`}
        >
          For Families
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10">
        {/* Left: Image */}
        <div className="bg-white rounded-[30px] overflow-hidden shadow-md md:w-1/2 flex justify-center">
          <img
            src={img}
            alt={activeTab}
            className="object-cover w-full h-[350px] md:h-[420px] transition-all duration-500"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4 leading-snug">
            {title}
          </h3>
          <p className="text-lg text-gray-700">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Everyone;
