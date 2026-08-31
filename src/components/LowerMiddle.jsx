import React from "react";
import Timer from "../utils/timer";

const LowerMiddle = () => {
  return (
    <div className="container mx-auto px-40 flex flex-col gap-10  w-full items-center justify-between mt-10">
      <div className="flex gap-2 items-center h-auto w-full p-10 bg-black">
        <div className=" flex flex-col gap-4 h-full w-auto">
          <p className="text-sm text-[#00FF66] font-poppins font-bold">
            category
          </p>
          <h1 className="font-extrabold font-poppins text-3xl self-end pb-0 flex-wrap text-white">
            Enhance Your Music Experience
          </h1>
          <div className="flex gap-2">
            <Timer targetDate="2026-12-31T23:59:59" />
          </div>
          <div className="px-3 py-2">
            <button className=" w-auto px-5 py-2 rounded-sm text-white text-sm bg-[#00FF66]">
              Buy Now!
            </button>
          </div>
        </div>
        <div className="p-6">
          <img
            src="/assets/jlb.png"
            alt=" JLB boombox"
            className="drop-shadow-[-12px_12px_12px_rgba(156,163,175,0.5)] w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LowerMiddle;
