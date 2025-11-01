import React, { useEffect, useState } from "react";
import { FaUtensils, FaUserTie, FaHome } from "react-icons/fa";

const Matrix = () => {
  const [meals, setMeals] = useState(0);
  const [cooks, setCooks] = useState(0);
  const [households, setHouseholds] = useState(0);

  useEffect(() => {
    let mealsTarget = 3000000;
    let cooksTarget = 4500;
    let householdsTarget = 10000;

    const duration = 2500; // 2.5 seconds for animation
    const interval = 30;

    const steps = duration / interval;

    let mealsStep = mealsTarget / steps;
    let cooksStep = cooksTarget / steps;
    let householdsStep = householdsTarget / steps;

    const counter = setInterval(() => {
      setMeals((prev) => (prev < mealsTarget ? prev + mealsStep : mealsTarget));
      setCooks((prev) => (prev < cooksTarget ? prev + cooksStep : cooksTarget));
      setHouseholds((prev) =>
        prev < householdsTarget ? prev + householdsStep : householdsTarget
      );
    }, interval);

    return () => clearInterval(counter);
  }, []);

  const formatNumber = (num, suffix) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M${suffix}`;
    if (num >= 1000) return `${Math.floor(num / 1000)}K${suffix}`;
    return `${Math.floor(num)}${suffix}`;
  };

  return (
    <div className="w-full bg-orange-100 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-8 md:space-y-0">
        
        {/* Meals */}
        <div className="text-center relative">
          <FaUtensils className="absolute text-gray-400 text-6xl -top-6 left-1/2 transform -translate-x-1/2 opacity-40" />
          <h2 className="text-4xl font-bold text-black relative z-10">
            {formatNumber(meals, "+")}
          </h2>
          <p className="text-black-900 text-sm mt-2">Meals cooked with love</p>
        </div>

        {/* Cooks */}
        <div className="text-center relative">
          <FaUserTie className="absolute text-gray-400 text-6xl -top-6 left-1/2 transform -translate-x-1/2 opacity-40" />
          <h2 className="text-4xl font-bold text-black relative z-10">
            {formatNumber(cooks, "+")}
          </h2>
          <p className="text-gray-900 text-sm mt-2">Verified & Trained Cooks</p>
        </div>

        {/* Households */}
        <div className="text-center relative">
          <FaHome className="absolute text-gray-400 text-6xl -top-6 left-1/2 transform -translate-x-1/2 opacity-40" />
          <h2 className="text-4xl font-bold text-black relative z-10">
            {formatNumber(households, "+")}
          </h2>
          <p className="text-gray-900 text-sm mt-2">Households served</p>
        </div>

      </div>
    </div>
  );
};

export default Matrix;
