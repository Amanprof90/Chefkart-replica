import React, { useEffect, useRef } from "react";

const cooks = [
  {
    name: "Ramesh Rathod",
    rating: "5★",
    exp: "10+ yrs experience",
    img: "/chefcook.png",
  },
  {
    name: "Aisha Ahmed",
    rating: "4.9★",
    exp: "5+ yrs experience",
    img: "/chefcook.png",
  },
  {
    name: "Manoj Sinha",
    rating: "5★",
    exp: "8+ yrs experience",
    img: "/chefcook.png",
  },
  {
    name: "Sushma Bansal",
    rating: "5★",
    exp: "4+ yrs experience",
    img: "/chefcook.png",
  },
  {
    name: "Sunita Singh",
    rating: "4.8★",
    exp: "7+ yrs experience",
    img: "/cook2.png",
  },
];

const TopRatedCooks = () => {
  const scrollRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (!scrollContainer) return;

      // Scroll by card width
      scrollAmount += 320;

      // Reset scroll when reaching end
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }

      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3000); // every 3 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="py-12 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        Meet Our Top-Rated Cooks
      </h2>
      
      <>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scroll-smooth px-8 no-scrollbar"
      >
        {cooks.map((cook, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-[#111] rounded-2xl p-6 w-[280px] h-[320px] flex flex-col items-center justify-between shadow-lg border border-gray-800"
          >
            <img
              src={cook.img}
              alt={cook.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-white"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold mt-4">{cook.name}</h3>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="bg-green-600 px-2 py-1 rounded text-sm">
                  {cook.rating}
                </span>
                <span className="text-gray-300 text-sm">{cook.exp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar for all browsers */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
      </>

      {/* Join Section */}
      <div className="bg-[#fff5ec] text-center py-12 mt-16">
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
          हमारे 4500 से भी ज़्यादा कुक्स की टीम का हिस्सा बनें।
        </h3>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-3 rounded-md transition-all">
          ChefKart से जुड़ें
        </button>
      </div>
    </section>
  );
};

export default TopRatedCooks;
