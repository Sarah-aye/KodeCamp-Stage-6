import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-40 flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full items-start justify-between py-10">
      <div className="w-auto flex gap-2 items-end mt-5 text-sm sm:text-base">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-gray-900" : "text-gray-500"
          }
        >
          Home
        </NavLink>

        <p>/</p>

        <span className="text-gray-900">404 Error</span>
      </div>

      <div className="w-full flex flex-col gap-6 sm:gap-8 items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-10 md:px-20 text-center">
        <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-wrap">
          404 Not Found
        </h1>

        <p className="text-xs sm:text-sm font-poppins">
          Your visited page not found. You may go to home page.
        </p>

        <NavLink
          className="flex px-6 sm:px-8 py-2 bg-[#DB4444] items-center justify-center text-sm text-white rounded-sm font-poppins cursor-pointer"
          to="/"
        >
          Back To Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
