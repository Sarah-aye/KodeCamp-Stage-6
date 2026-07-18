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

// const items = [];

// useEffect(() => {
//   for (let i = 0; i <= 5; i++) {
//     items.push(
//       <div
//         key={i}
//         className={`w-2 h-2 rounded-full ${i == 2 ? "bg-[#DB4444] border-white" : " bg-gray-600"}`}
//       >
//         {i}
//       </div>,
//     );
//   }
// }, []);

const LandingPage = () => {
  return (
    <div className="container w-full mx-auto mt-10 px-40">
      <div className=" items-center grid grid-cols-[auto_1fr]  gap-10">
        <div className="p-2">
          {data.map((item, i) => (
            <div className="grid gap-4 " key={i}>
              <div className="grid gap-8">
                <div className="grid grid-cols-[1fr_auto] gap-10">
                  <p className="">{item}</p>
                  {i < 2 && <img src="/assets/DropDown.png" alt="drop down" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[auto_1fr] bg-black relative">
          <div className="grid gap-2 pl-8">
            <div className="grid grid-cols-[auto_1fr]">
              <img src="/assets/appleIcon.png" alt="apple icon" />
              <p className="text-white">iPhone 14 Series</p>
            </div>
            <div>
              <h1 className="wrap-break-word text-white font-bold">
                Up to 10% off Voucher
              </h1>
            </div>
            <div>
              <Link to="/" className="underline text-white">
                Show Now
              </Link>
              <img src="/assets/arrow-right.png" alt="right arrow" />
            </div>
          </div>
          <div className="grid">
            <img src="/assets/phoneIcon.png" alt="phone image" className="" />
          </div>
          <div className="flex items-center gap-2 absolute left-75  bottom-0">
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
