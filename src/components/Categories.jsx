import React from "react";

const Categories = () => {
  const products = [
    { name: "Phones", icons: "/assets/phone.png" },
    { name: "Computers", icons: "/assets/computer.png" },
    { name: "SmartWatch", icons: "/assets/smartwatch.png" },
    { name: "Camera", icons: "/assets/camera.png" },
    { name: "HeadPhones", icons: "/assets/headphones.png" },
    { name: "Gaming", icons: "/assets/gaming.png" },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-40 flex flex-col gap-10 w-full items-center justify-between mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center h-auto w-full gap-6">
        <div className="flex flex-col gap-4 h-full w-auto">
          <div className="flex items-end gap-3 h-auto w-auto">
            <div className="bg-[#DB4444] h-fit w-4 rounded-s-sm">
              <button></button>
            </div>

            <p className="text-[#DB4444] font-bold">categories</p>
          </div>

          <div className="flex items-end bottom-1">
            <h1 className="font-extrabold font-poppins text-2xl sm:text-3xl">
              Browse By Category
            </h1>
          </div>
        </div>

        {/* Arrows */}
        <div className="h-fit w-auto flex items-end justify-between gap-3">
          <button className="rounded-full w-fit h-fit bg-gray-200">
            <img
              src="/assets/icons_arrow-left.png"
              alt="previous"
              className="h-6 w-6"
            />
          </button>

          <button className="rounded-full w-fit h-fit bg-gray-200">
            <img
              src="/assets/icons arrow-right.png"
              alt="next"
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center justify-center sm:justify-between w-full h-auto min-h-36.25 gap-4 overflow-x-auto pb-2">
        {products.map((item, i) => {
          return (
            <div
              key={item.id ?? i}
              className={`flex flex-col shrink-0 py-3 rounded-2xl items-center justify-center gap-3 h-32 w-28 sm:w-30 border border-gray-400 ${
                i === 3 ? "bg-[#DB4444] text-white" : "text-gray-700"
              }`}
            >
              <img
                src={item.icons}
                alt="product icon"
                className={`h-12 sm:h-14 w-12 sm:w-14 ${
                  i === 3 ? "stroke-white" : "stroke-gray-900"
                }`}
              />

              <p className="font-poppins font-normal text-sm sm:text-base">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>

      <hr className="w-full h-0" />
    </div>
  );
};

export default Categories;
