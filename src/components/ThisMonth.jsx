import React from "react";
import { ThisMonthProducts } from "../data/thisMonth";
import StarComponent from "./starComponent";

const ThisMonth = () => {
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
                <p className="text-[#DB4444] font-bold">This Month</p>
              </div>
              <div className="flex items-end bottom-1">
                <h1 className="font-extrabold font-poppins text-3xl self-end pb-0 flex-nowrap">
                  Best Selling Products
                </h1>
              </div>
            </div>
          </div>
          <div className="h-fit w-fit  flex items-end justify-between self-end">
            <button className="bg-[#DB4444] px-4 py-2 rounded-sm font-poppins text-sm text-white">
              View All
            </button>
          </div>
        </div>

        <div className="flex w-full gap-4">
          {ThisMonthProducts.map((item) => {
            return (
              <div key={item.id} className="flex flex-col w-64 gap-3">
                {/* Upper section */}
                <div className="bg-[#F5F5F5] px-8  rounded-sm flex flex-col  h-72">
                  <div className="flex justify-between items-start w-[calc(100%+3rem)] -ml-6 mt-3">
                    <div className="flex items-end ml-auto flex-col gap-2">
                      <img
                        src="/assets/heart_small.png"
                        alt="small heart"
                        className="w-5 h-5 bg-white rounded-full"
                      />
                      <img
                        src="/assets/eye-icon.png"
                        alt="eye-icon"
                        className="w-5 h-5 bg-white rounded-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 justify-center items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-40 object-contain"
                    />
                  </div>
                </div>

                {/* Lower section */}
                <div className="flex flex-col gap-2">
                  <p className="text-gray-800 text-sm font-poppins font-medium">
                    {item.name}
                  </p>

                  <p className="font-poppins text-sm">
                    <span className="text-[#DB4444]">${item.price}</span>{" "}
                    <span className="text-gray-500 line-through">
                      ${item.oldPrice}
                    </span>
                  </p>

                  <div className="flex items-center gap-1">
                    <StarComponent rating={item.rated} />

                    <span className="text-gray-500 text-sm">
                      ({item.rated})
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThisMonth;
