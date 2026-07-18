import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  const percent = 50;
  return (
    <>
      <div className=" bg-black w-full h-12 flex  items-center justify-between text-white">
        <div className="flex items-center justify-between  container mx-auto px-8  w-auto h-fit absolute top-3 left-70 gap-8 text">
          <div className="flex items-center justify-between gap-4">
            <p>
              Summer Sales For All Swim Suites And Express Delivery - OFF{" "}
              {percent}%
            </p>
            <Link to="/" className="font-bold underline">
              ShopNow
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 absolute right-9">
          <p>English</p>
          <img src="/assets/THIcon.png" alt="language select" />
        </div>
      </div>
    </>
  );
};

export default TopHeader;
