import React, { useState } from "react";
import { X } from "lucide-react";

const Lower = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="bg-[#FFF8F3] relative">
      {/* ================= TOP SECTION ================= */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 md:px-12 py-12 gap-8 md:gap-20">
        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMale_female_Cooks_ceb391c475.webp&w=1920&q=75"
            alt="ChefKart Chefs"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-[#F25C05] font-semibold mb-1 text-sm md:text-base">
            We Believe
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            The food you cook will <br className="hidden md:block" /> be loved by
            everyone!
          </h2>
          <p className="text-gray-700 font-medium mb-6 text-sm md:text-base">
            Rise up with us
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="bg-black text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-gray-900 transition duration-300"
          >
            Join ChefKart
          </button>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="bg-[#FFF0E6] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* LEFT TEXT */}
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              Be a part of{" "}
              <span className="text-orange-500 font-extrabold">
                over 4500+ cooks
              </span>{" "}
              working with ChefKart.
            </h3>
          </div>

          {/* RIGHT TEXT */}
          <div className="md:w-1/2 text-gray-700 text-base leading-relaxed">
            Live with pride and respect. With ChefKart’s training and support,
            take your cooking skills to new heights and achieve your goals.
          </div>
        </div>
      </div>

      {/* ================= POPUP FORM ================= */}
      {showForm && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
            onClick={() => setShowForm(false)}
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[100] px-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Please fill this form to join
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
                />
                <div className="flex items-center border border-gray-300 rounded-md">
                  <span className="px-3 text-gray-600 text-sm flex items-center gap-1 border-r border-gray-300">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="flex-1 px-4 py-2 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-md transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Lower;
