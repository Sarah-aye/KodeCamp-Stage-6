import React from "react";
import NavBar from "./NavBar";
import TopHeader from "./topHeader";

const Header = () => {
  return (
    <>
      <div className="flex items-end justify-between container w-full mx-auto px-40 top-30 font-poppins">
        {/* <TopHeader /> */}
        <div>
          <h1 className="font-bold">Exlusive</h1>
        </div>
        <div>
          <NavBar />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="w-fit h-fit rounded flex items-center justify-between gap-4 pt-1.75 pr-3 pb-1.75 pl-5 relative bg-[#F5F5F5]">
            <div>
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-auto h-auto opacity-50 font-normal text-xs leading-4.5 tracking-normal"
              />
            </div>
            <div>
              <img
                src="/assets/searchIcon.png"
                alt="search icon"
                className="w-6 h-6  "
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <img src="/assets/heart.png" alt="heart Icon" />
            <img src="/assets/Cart1.png" alt=" cart icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
