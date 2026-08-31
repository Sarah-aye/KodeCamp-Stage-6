import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  const percent = 50;
  return (
    <>
      <div className="bg-black w-full min-h-12 flex items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center text-xs sm:text-sm lg:text-base">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <p>
              Summer Sales For All Swim Suites And Express Delivery - OFF{" "}
              {percent}%
            </p>

            <Link to="/" className="font-bold underline whitespace-nowrap">
              ShopNow
            </Link>
          </div>

          <div className="hidden sm:flex items-center gap-2 absolute right-4 sm:right-9">
            <p>English</p>
            <img
              src="/assets/THIcon.png"
              alt="language select"
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
