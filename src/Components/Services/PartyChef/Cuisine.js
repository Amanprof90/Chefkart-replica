import React, { useState, useEffect } from "react";

const cuisines = [
  {
    name: "Chinese",
    color: "text-[#ff5c5c]",
    image:
      "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Ftop_view_delicious_noodles_concept_9283eeb6c4.webp&w=1920&q=75",
  },
  {
    name: "Indian",
    color: "text-[#ffb84d]",
    image:
      "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Ffood_1_8870eea109_a39bceba07.webp&w=1920&q=75",
  },
  {
    name: "Italian",
    color: "text-[#4db8ff]",
    image:
      "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FItalian_168d980a5a.webp&w=1920&q=75",
  },
  {
    name: "Mexican",
    color: "text-[#66cc66]",
    image:
      "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMexican_9e7092cb2b.webp&w=1920&q=75",
  },
];

const Cuisine = () => {
  const [index, setIndex] = useState(0);

  // Auto rotate every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cuisines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const current = cuisines[index];
  const prev = cuisines[(index - 1 + cuisines.length) % cuisines.length];
  const next = cuisines[(index + 1) % cuisines.length];

  return (
    <div className="text-center py-16 bg-white overflow-hidden">
      {/* ---------- Heading ---------- */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10 transition-all duration-700 ease-in-out">
        Craving{" "}
        <span className={`${current.color} font-bold`}>{current.name}</span>{" "}
        food? Our Multi-Cuisine <br className="hidden md:block" /> Experts Have
        Got You!
      </h2>

      {/* ---------- Image Row ---------- */}
      <div className="flex justify-center items-center gap-16 md:gap-32 transition-all duration-700 ease-in-out">
        {/* Left (previous cuisine) */}
        <img
          src={prev.image}
          alt={prev.name}
          className="w-48 md:w-56 opacity-30 transform scale-90 transition-all duration-700"
        />

        {/* Center (current cuisine) */}
        <img
          src={current.image}
          alt={current.name}
          className="w-64 md:w-80 transform scale-110 drop-shadow-xl transition-all duration-700"
        />

        {/* Right (next cuisine) */}
        <img
          src={next.image}
          alt={next.name}
          className="w-48 md:w-56 opacity-30 transform scale-90 transition-all duration-700"
        />
      </div>
    </div>
  );
};

export default Cuisine;
