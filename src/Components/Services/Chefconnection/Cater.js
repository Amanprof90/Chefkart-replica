import React from "react";

const Cater = () => {
  const benefits = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/2331/2331948.png",
      title: "Regular Income",
      desc: "Get your daily earnings regularly on the same day without any delay.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
      title: "Respectful Work",
      desc: "Gain respect and recognition as a professional cook in your community.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1027/1027110.png",
      title: "Training & Support",
      desc: "Learn new recipes from our chefs and get instant help whenever needed.",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Join ChefKart?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden border border-[#FFEDD5] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-orange-50 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cater;
