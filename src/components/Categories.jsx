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
    <div className="container mx-auto px-40 flex flex-col gap-10  w-full items-center justify-between mt-10">
      <div className="flex justify-between items-center h-auto w-full">
        <div className=" flex flex-col gap-4 h-full w-auto">
          <div className="flex items-end   gap-3 h-auto w-auto">
            <div className="bg-[#DB4444] h-fit w-4 rounded-s-sm">
              <button></button>
            </div>
            <p className="text-[#DB4444] font-bold">categories</p>
          </div>
          <div className="flex items-end bottom-1">
            <h1 className="font-extrabold font-poppins text-3xl">
              Browse By Category
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
      <div className="flex items-center justify-between w-full h-36.25">
        {products.map((item, i) => {
          return (
            <div
              className={`flex flex-col py-3 rounded-2xl items-center justify-center gap-3  h-fit w-30 border  border-gray-400 ${i === 3 ? "bg-[#DB4444] text-white" : "text-gray-700"}`}
            >
              <img
                src={item.icons}
                alt="product icon"
                className={` h-14 w-14  ${i === 3 ? "stroke-white" : "stroke-gray-900"}`}
              />
              <p className="font-poppins font-normal ">{item.name}</p>
            </div>
          );
        })}
      </div>
      <hr className="w-full h-0 " />
    </div>
  );
};

export default Categories;
