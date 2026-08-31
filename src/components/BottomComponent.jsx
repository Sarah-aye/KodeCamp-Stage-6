import React from "react";
import { BottomInfo } from "../data/bottomComponent";

const BottomComponent = () => {
  return (
    <div className="container mx-auto px-60 py-20 flex  items-center  gap-15 w-auto h-auto">
      {BottomInfo.map((item) => (
        <div key={item.id} className="flex flex-col items-center gap-3">
          <img
            src={item.icon}
            alt={item.heading}
            className="w-15 h-15 rounded-full border-5 border-gray-400 bg-black"
          />
          <p className=" font-poppins font-semibold">{item.heading}</p>
          <p className="text-sm text-gray-700">{item.para}</p>
        </div>
      ))}
    </div>
  );
};

export default BottomComponent;
