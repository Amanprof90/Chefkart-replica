import React from "react";
import { Salad, ChefHat, Clock, CheckCircle } from "lucide-react";

const Whyus = () => {
  return (
    <section className="bg-[#f8f8f9] py-16 px-6 md:px-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center md:text-left mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-orange-500 font-bold text-lg mb-1">
              Why Choose
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Chefit: Monthly Cook
            </h2>
          </div>
          <p className="text-gray-600 max-w-md border-l-4 border-orange-400 pl-4">
            Get a certified cook for a Month to prepare delicious food in your
            kitchen.
          </p>
        </div>
      </div>

      {/* Grid Box */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {/* Left Column */}
          <div className="flex flex-col divide-y divide-gray-200">
            {/* Top Left */}
            <div className="flex items-start gap-4 p-10 lg:p-14">
              <div className="bg-orange-50 p-4 rounded-xl flex items-center justify-center">
                <Salad className="text-orange-500 w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Healthy & Hygienic Food
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Healthy food cooked in your kitchen with utmost hygiene.
                </p>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="flex items-start gap-4 p-10 lg:p-14">
              <div className="bg-orange-50 p-4 rounded-xl flex items-center justify-center">
                <ChefHat className="text-orange-500 w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Trained & Verified Cooks
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Professionally trained & background verified cooks for quality
                  service.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col divide-y divide-gray-200">
            {/* Top Right */}
            <div className="flex items-start gap-4 p-10 lg:p-14">
              <div className="bg-orange-50 p-4 rounded-xl flex items-center justify-center">
                <CheckCircle className="text-orange-500 w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Tailored to Your Taste
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Food prepared according to your taste and preferences.
                </p>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="flex items-start gap-4 p-10 lg:p-14">
              <div className="bg-orange-50 p-4 rounded-xl flex items-center justify-center">
                <Clock className="text-orange-500 w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Quick Service
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Find a skilled cook for your kitchen in as little as 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
