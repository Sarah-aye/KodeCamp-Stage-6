import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const data = [
  "Women's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home and Life Style",
  "Medicine",
  "Sports and Outdoor",
  "Baby's and Toys",
  "Groceries and Pets",
  "Health and Beauty",
];

console.log("type of data is:", typeof data);

const LandingPage = () => {
  return (
    <div className="container w-full mx-auto mt-0  px-4 sm:px-8 lg:px-40">
      <div className="items-center grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-10">
        {/* Categories */}
        <div className="grid p-4 sm:p-6 lg:p-8 items-start border-r-0 lg:border-r gap-4 py-20 ">
          {data.map((item, i) => (
            <div className="grid gap-4 " key={i}>
              <div className="grid">
                <div className="grid grid-cols-[1fr_auto] gap-6 lg:gap-10">
                  <p className="font-poppins text-sm sm:text-base">{item}</p>

                  {i < 2 && (
                    <img
                      src="/assets/DropDown.png"
                      alt="drop down"
                      className="w-4 h-4"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hero */}
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 bg-black relative p-6 sm:p-8 lg:p-10 gap-6 overflow-hidden">
          {/* Text */}
          <div className="grid items-center gap-6 sm:gap-8 p-2 border-r-0 sm:border-r-2">
            <div className="grid items-center grid-cols-[auto_1fr] gap-3 sm:gap-4">
              <img
                src="/assets/appleIcon.png"
                alt="apple icon"
                className="w-8 h-10 sm:w-10 sm:h-12.25"
              />

              <p className="text-gray-300 text-xs font-poppins">
                iPhone 14 Series
              </p>
            </div>

            <div className="grid gap-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold font-poppins">
                Up to 10%
              </h1>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold font-poppins">
                off Voucher
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="underline text-gray-300 font-poppins text-xs"
              >
                Show Now
              </Link>

              <img
                src="/assets/arrow-right.png"
                alt="right arrow"
                className="size-5 sm:size-6"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center">
            <img
              src="/assets/phoneIcon.png"
              alt="phone image"
              className="w-full max-w-xs sm:max-w-sm object-contain"
            />
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-2 sm:left-1/2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 2 ? "bg-[#DB4444] border border-white" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
