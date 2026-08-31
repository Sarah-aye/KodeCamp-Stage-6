import React from "react";
import { AllOfProducts } from "../data/allProducts";
import StarComponent from "./starComponent";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

const AllProducts = () => {
  const { handleCartClick, addedItemId } = useCart();
  return (
    <div className="container mx-auto px-40 flex flex-col gap-10  w-full items-center mt-10">
      <div className="flex justify-between items-center h-auto w-full">
        <div className=" flex flex-col gap-4 h-full w-auto">
          <div className="flex items-end   gap-3 h-auto w-auto">
            <div className="bg-[#DB4444] h-fit w-4 rounded-s-sm">
              <button></button>
            </div>
            <p className="text-[#DB4444] font-bold">Our Products</p>
          </div>
          <div className="flex items-end bottom-1">
            <h1 className="font-extrabold font-poppins text-3xl">
              Explore Our Products
            </h1>
          </div>
        </div>

        <div className="h-fit w-auto  flex items-end justify-between gap-3  ">
          <div className="rounded-full w-fit h-fit bg-gray-200">
            <img
              src="/assets/icons_arrow-left.png"
              alt="icons_arrow-left.png"
              className="h-6 w-6"
            />
          </div>
          <div className="rounded-full w-fit h-fit bg-gray-200">
            <img
              src="/assets/icons arrow-right.png"
              alt="icons_arrow-right.png"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 w-full h-auto">
        {AllOfProducts.map((item, i) => {
          return (
            <>
              <div className="flex flex-col gap-4">
                <div className="bg-[#F5F5F5] px-8  rounded-sm flex flex-col  h-72">
                  <div className="flex  justify-between items-start w-[calc(100%+3rem)] -ml-6 mt-3">
                    {i === 4 || i === 6 ? (
                      <button className="bg-[#00FF66] text-white px-3 py-1 rounded-sm text-xs">
                        New
                      </button>
                    ) : null}
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

                <div className="flex flex-col gap-2">
                  <p className="text-gray-800 text-sm font-poppins font-medium">
                    {item.name}
                  </p>

                  <p className="font-poppins text-sm">
                    <span className="text-[#DB4444]">${item.price}</span>{" "}
                  </p>

                  <div className="flex items-center gap-1">
                    <StarComponent rating={item.rated} />

                    <span className="text-gray-500 text-sm">
                      ({item.rated})
                    </span>
                  </div>
                  {i > 3 ? (
                    <div className="flex  gap-3">
                      <div className="h-4 w-4 rounded-full border border-black flex items-center justify-center">
                        <div
                          className={`h-2.5 w-2.5 rounded-full ${
                            i === 4
                              ? "bg-[#DB4444]"
                              : i === 5
                                ? "bg-[#EEFF61]"
                                : i === 6
                                  ? "bg-black"
                                  : i === 7
                                    ? "bg-[#184A48]"
                                    : ""
                          }`}
                        />
                      </div>
                      <div className="bg-[#DB4444]  h-4 w-4 rounded-full"></div>
                    </div>
                  ) : null}
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* <hr className="w-full h-0 " /> */}

      <div className="flex w-auto h-auto">
        <button className="px-10 py-2 bg-[#DB4444] text-white rounded-sm font-poppins text-sm ">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
