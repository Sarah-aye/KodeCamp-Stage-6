import React from "react";

const ScrollUp = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-40 flex justify-end">
      <button className="p-2 h-fit w-fit bg-gray-300 rounded-full">
        <img
          src="/assets/up-icon.png"
          alt="scroll up"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      </button>
    </div>
  );
};

export default ScrollUp;
