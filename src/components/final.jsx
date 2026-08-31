import React from "react";
import Countdown from "../utils/CountDown";
import { product } from "../data/todays";
import StarComponent from "./starComponent";
// import { Link } from "react-router-dom";

import useCart from "../hooks/useCart";

const FinalProduct = () => {
  const { handleCartClick, addedItemId } = useCart();
  return (
    <div className="container mx-auto   flex flex-col gap-6 sm:gap-8 w-full items-center justify-between mt-10">
      <div className="flex flex-col justify-between items-center h-auto w-full gap-6 sm:gap-8">
        {/* Heading */}
        <div className="flex justify-between items-end h-full w-full">
          <div className="flex gap-10">
            <div className="flex flex-col w-auto justify-between gap-4">
              <div className="flex items-end h-auto w-auto gap-3">
                <div className="bg-[#DB4444] h-fit w-4 rounded-s-sm">
                  <button></button>
                </div>

                <p className="text-[#DB4444] font-bold">Related Items</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex w-full gap-4">
          {product.map((item, i) => {
            return (
              <div
                key={item.id}
                className="flex flex-col w-full sm:w-auto lg:w-64 gap-3"
              >
                {/* Upper section */}
                <div className="bg-gray-100 px-8 rounded-sm flex flex-col h-72">
                  <div className="flex justify-between items-start w-[calc(100%+3rem)] -ml-6 mt-3">
                    {i === 3 ? (
                      ""
                    ) : (
                      <button className="bg-[#DB4444] text-white flex items-end px-3 py-1 rounded-sm text-xs">
                        -{item.percent}%
                      </button>
                    )}

                    <div className="flex flex-col gap-2 ml-auto">
                      <div className="bg-white w-5 h-5 rounded-full">
                        <img
                          src="/assets/heart_small.png"
                          alt="small heart"
                          className="object-contain"
                        />
                      </div>

                      <div className="bg-white w-4 h-4 rounded-full">
                        <img
                          src="/assets/eye-icon.png"
                          alt="eye-icon"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 justify-center items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-40 object-contain"
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
                        className="bg-black text-white w-[calc(100%+4rem)] -ml-8 py-2 rounded-b-sm flex items-center gap-3 justify-center cursor-pointer"
                      >
                        <span>
                          <img src="/assets/cart-icon.png" alt="delete icon" />
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
      </div>
    </div>
  );
};

export default FinalProduct;
