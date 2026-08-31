import React from "react";
import Timer from "../utils/timer";

const LowerMiddle = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-40 flex flex-col gap-10 w-full items-center justify-between mt-10">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 items-center justify-between h-auto w-full p-6 sm:p-8 lg:p-10 bg-black overflow-hidden">
        <div className="flex flex-col gap-4 h-full w-full sm:w-1/2">
          <p className="text-sm text-[#00FF66] font-poppins font-bold">
            category
          </p>

          <h1 className="font-extrabold font-poppins text-2xl sm:text-3xl self-start pb-0 text-white">
            Enhance Your Music Experience
          </h1>

          <div className="flex gap-2">
            <Timer targetDate="2026-12-31T23:59:59" />
          </div>

          <div className="px-0 sm:px-3 py-2">
            <button className="w-auto px-5 py-2 rounded-sm text-white text-sm bg-[#00FF66]">
              Buy Now!
            </button>
          </div>
        </div>

        <div className="p-2 sm:p-6 w-full sm:w-1/2 flex justify-center">
          <img
            src="/assets/jlb.png"
            alt="JBL boombox"
            className="drop-shadow-[-12px_12px_12px_rgba(156,163,175,0.5)] w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LowerMiddle;
