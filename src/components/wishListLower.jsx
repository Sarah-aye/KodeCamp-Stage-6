import React from "react";
import { lower } from "../data/wishList1";
import StarRating from "./starComponent";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

const WishListLower = () => {
  const { handleCartClick, addedItemId } = useCart();
  return (
    <>
      <div className="w-full h-fit flex items-center justify-between py-4 ">
        <div className="flex gap-10 ">
          <div className="flex flex-col  gap-4">
            <div className="flex items-end h-auto w-auto gap-3">
              <div className="bg-[#DB4444] h-fit w-4 rounded-s-sm">
                <button></button>
              </div>
              <p className="text-[#DB4444] font-bold">Just for You</p>
            </div>
          </div>
        </div>

        <div className="h-fit w-fit  flex items-end justify-between self-end">
          <button className="border px-4 py-2 rounded-sm font-poppins text-sm text-black">
            See All
          </button>
        </div>
      </div>

      <div className="flex w-full gap-4">
        {lower.map((item, i) => {
          return (
            <div key={item.id} className="flex flex-col w-64 gap-3">
              {/* Upper section */}
              <div className="bg-[#F5F5F5] px-8  rounded-sm flex flex-col  h-72">
                <div className="flex justify-between items-start w-[calc(100%+3rem)] -ml-6 mt-3">
                  {item.off ? (
                    <button className="bg-[#DB4444] text-white px-3 py-1 rounded-sm text-xs">
                      -{item.off}%
                    </button>
                  ) : (
                    ""
                  )}

                  {i === 2 ? (
                    <button className="bg-[#00FF66] text-white font-poppins px-3 py-1 rounded-sm text-xs">
                      New
                    </button>
                  ) : (
                    ""
                  )}
                  <div className="flex items-end ml-auto flex-col gap-2">
                    <img
                      src="/assets/eye-icon.png"
                      alt="eye-icon"
                      className="w-5 h-5 bg-white rounded-full"
                    />
                  </div>
                </div>

                <div className="flex flex-1 justify-center items-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-40 object-contain"
                  />
                </div>

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
              </div>

              {/* Lower section */}
              <div className="flex flex-col gap-2">
                <p className="text-gray-800 text-sm font-poppins font-medium">
                  {item.name}
                </p>

                <p className="font-poppins text-sm">
                  <span className="text-[#DB4444]">${item.price}</span>{" "}
                  {item.oldPrice ? (
                    <span className="text-gray-500 line-through">
                      ${item.oldPrice}
                    </span>
                  ) : (
                    ""
                  )}
                </p>

                <div className="flex items-center gap-1">
                  <StarRating rating={item.rating} />

                  <span className="text-gray-500 text-sm">({item.rating})</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WishListLower;
