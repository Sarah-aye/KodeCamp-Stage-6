import React from "react";
import { Featured } from "../data/featured";
import { Link } from "react-router-dom";

const FeaturedToday = () => {
  const [leftCard, topRightCard, bottomLeftCard, bottomRightCard] = Featured;
  return (
    <div className="container mx-auto px-40 flex flex-col gap-10  w-full items-center justify-between mt-10">
      <div className="flex flex-col justify-between items-center h-auto w-full gap-8 ">
        <div className="flex justify-between items-end gap-80 h-full w-full">
          <div className="flex gap-10 ">
            <div className="flex flex-col  gap-4">
              <div className="flex items-end h-auto w-auto gap-3">
                <div className="bg-[#DB4444] h-fit w-4 rounded-s-sm">
                  <button></button>
                </div>
                <p className="text-[#DB4444] font-bold">Featured</p>
              </div>
              <div className="flex items-end bottom-1">
                <h1 className="font-extrabold font-poppins text-3xl self-end pb-0 flex-nowrap">
                  New Arrivals
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 w-full gap-4">
          {/* Left Large Card */}
          <div className="h-auto w-auto">
            <div className="relative bg-black rounded-sm h-full flex items-center  px-6 overflow-hidden">
              <img
                src={leftCard.image}
                alt={leftCard.heading}
                className="h-auto object-contain"
              />

              <div className=" absolute bottom-6 left-6 z-10 flex w-50 flex-col gap-4">
                <h1 className="font-poppins text-2xl font-semibold text-gray-300">
                  {leftCard.heading}
                </h1>
                <p className="font-poppins text-sm text-wrap text-gray-300">
                  {leftCard.para}
                </p>
                <Link className="underline text-white">
                  <p className="font-semibold text-white">Shop Now</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-rows-2 gap-4 h-full w-full ">
            {/* Top Right */}
            <div className="">
              <div className="relative flex items-center bg-black rounded-sm h-auto  px-6 w-auto gap-4 overflow-hidden">
                <img
                  src={topRightCard.image}
                  alt={topRightCard.heading}
                  className="h-auto object-contain"
                />

                <div className="absolute bottom-6 left-6 z-10 flex items-start w-auto flex-col gap-4">
                  <h1 className="font-poppins text-2xl font-semibold text-gray-300">
                    {topRightCard.heading}
                  </h1>
                  <p className="font-poppins text-sm text-wrap text-gray-300">
                    {topRightCard.para}
                  </p>
                  <Link className="underline text-white">
                    <p className="font-semibold text-white">Shop Now</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Two Cards */}
            <div className="grid grid-cols-2 h-full w-full gap-4">
              <div>
                <div className=" h-full w-auto">
                  <div className="relative bg-black flex rounded-sm h-full items-center px-6 overflow-hidden">
                    <img
                      src={bottomLeftCard.image}
                      alt={bottomLeftCard.heading}
                      className="h-auto object-contain"
                    />

                    <div className=" absolute bottom-6 left-6 z-10 flex w-auto flex-col gap-2">
                      <h1 className="font-poppins  font-semibold text-gray-300">
                        {bottomLeftCard.heading}
                      </h1>
                      <p className="font-poppins text-sm text-wrap text-gray-300">
                        {bottomLeftCard.para}
                      </p>
                      <Link className="underline text-white">
                        <p className="font-semibold text-white">Shop Now</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className=" h-full w-auto">
                  <div className="relative bg-black rounded-sm h-full flex items-center px-6 overflow-hidden">
                    <img
                      src={bottomRightCard.image}
                      alt={bottomRightCard.heading}
                      className="h-auto object-contain"
                    />

                    <div className=" absolute bottom-6 left-6 z-10 flex w-auto flex-col gap-2">
                      <h1 className="font-poppins font-semibold text-gray-300">
                        {bottomRightCard.heading}
                      </h1>
                      <p className="font-poppins text-sm text-wrap text-gray-300">
                        {bottomRightCard.para}
                      </p>
                      <Link className="underline text-white">
                        <p className="font-semibold text-white">Shop Now</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedToday;
