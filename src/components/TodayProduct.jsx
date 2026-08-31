import React from "react";
import Countdown from "../utils/CountDown";
import { product } from "../data/todays";
import StarComponent from "./starComponent";
// import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import useCart from "../hooks/useCart";

const TodayProduct = () => {
  const { handleCartClick, addedItemId } = useCart();
  const { user } = useAuth();
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-40 flex flex-col gap-10 w-full items-center justify-between mt-10">
      <div className="flex flex-col justify-between items-center h-auto w-full gap-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-40 h-full w-full">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full lg:w-auto">
            <div className="flex flex-col w-auto justify-between gap-4">
              <div className="flex items-end h-auto w-auto gap-3">
                <div className="bg-[#DB4444] h-fit w-4 rounded-s-sm">
                  <button></button>
                </div>

                <p className="text-[#DB4444] font-bold">Today's</p>
              </div>

              <div className="flex items-end bottom-1">
                <h1 className="font-extrabold font-poppins text-2xl sm:text-3xl self-end pb-0 flex-nowrap">
                  Flash Sales
                </h1>
              </div>
            </div>

            <div className="flex items-baseline h-12.5 w-auto ml-0 sm:ml-10 self-end">
              <Countdown targetDate="2026-12-31T23:59:59" />
            </div>
          </div>

          {/* Arrows */}
          <div className="h-fit w-auto flex items-end justify-between gap-3 self-end">
            <button className="rounded-full w-fit h-fit bg-gray-200">
              <img
                src="/assets/icons_arrow-left.png"
                alt="previous"
                className="h-6 w-6"
              />
            </button>

            <button className="rounded-full w-fit h-fit bg-gray-200">
              <img
                src="/assets/icons arrow-right.png"
                alt="next"
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-wrap lg:flex-nowrap w-full gap-6 overflow-hidden justify-center lg:justify-start">
          {product.map((item, i) => {
            return (
              <div
                key={item.id}
                className="flex flex-col w-full sm:w-[calc(50%-0.75rem)] md:w-64 lg:w-64 shrink-0 gap-3"
              >
                {/* Upper section */}
                <div className="bg-[#F5F5F5] px-8 rounded-sm flex flex-col h-72">
                  <div className="flex justify-between items-start w-[calc(100%+3rem)] -ml-6 mt-3">
                    <button className="bg-[#DB4444] text-white px-3 py-1 rounded-sm text-xs">
                      -{item.percent}%
                    </button>

                    <div className="flex flex-col gap-2">
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
                      className="h-40 w-full object-contain"
                    />
                  </div>

                  {i === 1 ? (
                    <div className="relative">
                      {addedItemId === item.id && (
                        <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-green-600 px-3 py-2 text-sm text-white">
                          Added to cart!
                        </div>
                      )}

                      <button
                        onClick={() => handleCartClick(item)}
                        disabled={!user}
                        className={`bg-black text-white w-[calc(100%+4rem)] -ml-8 py-2 rounded-b-sm flex items-center gap-3 justify-center ${
                          user
                            ? "cursor-pointer"
                            : "cursor-not-allowed opacity-90"
                        }`}
                      >
                        <span>
                          <img src="/assets/cart-icon.png" alt="cart icon" />
                        </span>
                        Add to Cart
                      </button>
                    </div>
                  ) : null}
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

        {/* View All */}
        <div className="flex w-auto h-auto">
          <button className="px-8 sm:px-10 py-2 bg-[#DB4444] text-white rounded-sm font-poppins text-sm">
            View All Products
          </button>
        </div>
      </div>

      <hr className="w-full h-0" />
    </div>
  );
};

export default TodayProduct;
