import React from "react";
import withAuth from "../HOC/withAuth.jsx";
import { upper } from "../data/wishList1.js";
import WishListLower from "./wishListLower.jsx";
import { Link } from "react-router-dom";

import useCart from "../hooks/useCart.js";

const Wishlist = () => {
  const { handleCartClick, addedItemId } = useCart();
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-40 flex flex-col gap-10 w-full items-center justify-between mt-10 py-10">
      <div className="flex flex-col items-center justify-around h-auto w-full gap-8">
        <div className="w-full h-fit flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4">
          <p className="text-black font-poppins">
            {`WishList (${upper.length})`}
          </p>

          <button className="w-full sm:w-auto px-4 py-2 border rounded-sm">
            Move All To Bag
          </button>
        </div>

        {/* Upper row products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-6 pb-10">
          {upper.map((item) => (
            <div key={item.id} className="flex flex-col w-full gap-3">
              {/* Upper section */}
              <div className="bg-[#F5F5F5] px-8 rounded-sm flex flex-col h-72">
                <div className="flex justify-between items-start w-[calc(100%+3rem)] -ml-6 mt-3">
                  {item.off ? (
                    <button className="bg-[#DB4444] text-white px-3 py-1 rounded-sm text-xs">
                      -{item.off}%
                    </button>
                  ) : (
                    <div />
                  )}

                  <div className="flex items-end ml-auto">
                    <img
                      src="/assets/delete.png"
                      alt="delete icon"
                      className="w-7 h-7 bg-white rounded-full"
                    />
                  </div>
                </div>

                <div className="flex flex-1 justify-center items-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-40 w-full object-contain"
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
                      <img src="/assets/cart-icon.png" alt="cart icon" />
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
                  {item.oldPrice && (
                    <span className="text-gray-500 line-through">
                      ${item.oldPrice}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lower section */}
        <WishListLower />
      </div>
    </div>
  );
};

export default withAuth(Wishlist);
