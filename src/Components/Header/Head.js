import React from "react";
import { LuSoup } from "react-icons/lu";

const Head = () => {
  return (
    <div className="w-full bg-[#fbf1eb] border-t border-b border-gray-300 py-3 flex items-center justify-center">
      <div className="flex items-center gap-2">
        <LuSoup className="text-[#d35400] text-4xl" />
        <p className="text-lg font-bold text-black">
          Chefit service is available only in{" "}
          <span className="font-bolder">Gurugram</span>
        </p>
      </div>
    </div>
  );
};

export default Head;
