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
    <div className="container w-full mx-auto mt-10 px-40">
      <div className=" items-center grid grid-cols-[auto_1fr]  gap-10">
        <div className=" grid p-8 items-start border-r gap-4">
          {data.map((item, i) => (
            <div className="grid gap-4 " key={i}>
              <div className="grid ">
                <div className="grid grid-cols-[1fr_auto] gap-10">
                  <p className="font-poppins">{item}</p>
                  {i < 2 && <img src="/assets/DropDown.png" alt="drop down" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid items-center grid-cols-2 bg-black relative p-10 gap-4 ">
          <div className="grid items-center  gap-8 p-2 border-r-2 ">
            <div className="grid items-center grid-cols-[auto_1fr] gap-4">
              <img
                src="/assets/appleIcon.png"
                alt="apple icon"
                className="w-10 h-12.25"
              />
              <p className="text-gray-300 text-xs font-poppins">
                iPhone 14 Series
              </p>
            </div>
            <div className="grid w-73.5 gap-2">
              <h1 className="text-wrap text-4xl text-white font-bold font-poppins">
                Up to 10%
              </h1>
              <h1 className="text-wrap text-4xl text-white font-bold font-poppins">
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
                className="size-6"
              />
            </div>
          </div>
          <div className="grid ">
            <img src="/assets/phoneIcon.png" alt="phone image" className="" />
          </div>
          <div className="flex items-center gap-2 absolute left-75  bottom-2">
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
