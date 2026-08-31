import React from "react";
import { BottomInfo } from "../data/bottomComponent";

const BottomComponent = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-60 py-12 sm:py-16 lg:py-20 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-8 lg:gap-15 w-full h-auto">
      {BottomInfo.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-3 text-center w-full sm:w-1/3"
        >
          <img
            src={item.icon}
            alt={item.heading}
            className="w-15 h-15 rounded-full border-5 border-gray-400 bg-black"
          />

          <p className="font-poppins font-semibold">{item.heading}</p>

          <p className="text-sm text-gray-700">{item.para}</p>
        </div>
      ))}
    </div>
  );
};

export default BottomComponent;
