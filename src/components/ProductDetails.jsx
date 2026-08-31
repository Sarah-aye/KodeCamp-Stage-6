import React from "react";
import withAuth from "../HOC/withAuth";
import { NavLink, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import StarRating from "./starComponent";
import FinalProduct from "./final";

const ProductDetails = () => {
  const { id } = useParams();

  const cartItems = useSelector((state) => state.cart.items);

  const product = cartItems.find((item) => item.id === id);

  if (!product) {
    return <Navigate to="*" replace />;
  }
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-40 flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full items-start justify-between py-10 sm:py-14 lg:py-20">
      <div className="w-auto flex gap-2 items-end mt-2 sm:mt-5 text-sm sm:text-base">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-gray-900" : "text-gray-500"
          }
        >
          Home
        </NavLink>

        <p>/</p>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-gray-900" : "text-gray-500"
          }
        >
          Cart
        </NavLink>

        <p>/</p>
        <span className="text-gray-900">Product Details</span>
      </div>

      {/* Main Product Section */}
      <div className="w-full h-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 py-5">
        {/* Product Images */}
        <div className="flex w-full lg:w-1/2 h-auto sm:h-[400px] lg:h-[450px] items-center justify-between gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col w-[20%] h-[300px] sm:h-full gap-2 sm:gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-full flex-1 px-2 sm:px-3 py-2 sm:py-3 bg-gray-100 rounded-sm"
              >
                <img
                  src={product.icon}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex w-[75%] lg:w-[70%] h-[300px] sm:h-full bg-gray-100 rounded-sm items-center justify-center px-3">
            <img
              src={product.icon}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-[40%] h-full flex flex-col items-center">
          <div className="flex flex-col items-start w-full h-auto gap-2">
            <h3 className="text-black font-poppins font-semibold text-left">
              {product.name}
            </h3>

            <div className="flex flex-wrap gap-1 items-start">
              {product.rating ? (
                <div className="flex items-center gap-1">
                  <StarRating rating={product.rating} />

                  <span className="text-gray-500 text-sm">
                    ({`${product.rating} Reviews`})
                  </span>
                </div>
              ) : (
                "No Reviews Available"
              )}

              <span className="text-gray-500">|</span>
              <span className="text-[#00FF66] text-sm">In Stock</span>
            </div>

            <h3 className="text-left text-black font-semibold font-poppins">
              {`$${product.price}`}
            </h3>

            {product.para ? (
              <p className="text-black text-left font-poppins text-xs">
                {`${product.para}`}
              </p>
            ) : (
              "No general description was provided for this product."
            )}
          </div>

          <hr className="border-2 border-gray-400 mt-4 w-full" />

          {/* Colors, Sizes and Actions */}
          <div className="flex flex-col gap-2 mt-4 w-full items-start">
            {/* Colors */}
            <div className="flex gap-3">
              <p className="text-black text-sm font-poppins block">Colors:</p>

              <div className="flex gap-1 items-center">
                <div className="border border-black rounded-full w-4 h-4 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gray-500 flex items-center justify-center"></div>
                </div>

                <div className="w-4 h-4 rounded-full bg-[#DB4444]"></div>
              </div>
            </div>

            {/* Sizes */}
            <div className="flex flex-wrap gap-3 mt-4 items-center">
              <p className="text-black font-poppins block">Size:</p>

              <div className="flex flex-wrap gap-2 items-center">
                <button className="w-auto px-3 py-1 rounded-sm border">
                  XS
                </button>

                <button className="w-auto px-2 py-1 rounded-sm border">
                  S
                </button>

                <button className="w-auto px-2 py-1 rounded-sm border bg-[#DB4444] text-white">
                  M
                </button>

                <button className="w-auto px-2 py-1 rounded-sm border">
                  L
                </button>

                <button className="w-auto px-2 py-1 rounded-sm border">
                  XL
                </button>
              </div>
            </div>

            {/* Quantity + Buy */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <div className="flex items-center">
                <button className="w-8 py-1 border border-gray-300 flex items-center justify-center rounded-l-sm">
                  -
                </button>

                <button className="w-18 py-1 border border-gray-300 flex items-center justify-center">
                  {product.quantity}
                </button>

                <button className="w-8 py-1 border border-gray-300 bg-[#DB4444] text-white flex items-center justify-center rounded-r-sm">
                  +
                </button>
              </div>

              <div className="flex items-center">
                <button className="flex items-center justify-center text-white font-poppins bg-[#DB4444] px-8 py-1 rounded-sm">
                  Buy Now
                </button>
              </div>

              <div className="flex items-center border border-gray-500 rounded-sm px-2 py-2">
                <img
                  src="/assets/heart.png"
                  alt="heart icon"
                  className="object-contain w-4 h-4"
                />
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="flex flex-col items-start w-full h-auto border border-gray-400 rounded-sm mt-6 sm:mt-10 px-4 py-3 gap-4">
            <div className="flex items-center gap-3 sm:gap-5">
              <div className="flex items-center">
                <img
                  src="/assets/track.png"
                  alt="delivery track"
                  className="object-contain w-7 h-7"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-black text-sm font-poppins font-bold">
                  Free Delivery
                </p>

                <p className="text-black text-xs font-poppins">
                  Enter Your Postal Code For Delivery Availability
                </p>
              </div>
            </div>

            <hr className="w-[calc(100%+2rem)] -ml-4 bg-gray-400" />

            <div className="flex items-center gap-3 sm:gap-5">
              <div className="flex items-center">
                <img
                  src="/assets/last.png"
                  alt="return icon"
                  className="object-contain w-7 h-7"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-black text-sm font-poppins font-bold">
                  Return Delivery
                </p>

                <p className="text-black text-xs font-poppins">
                  Free 30 Days Delivery Returns Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FinalProduct />
    </div>
  );
};

export default withAuth(ProductDetails);
