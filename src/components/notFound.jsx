import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-40 flex flex-col gap-10  w-full items-start justify-between py-10 ">
      <div className="w-auto flex gap-2 items-end mt-5">
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

      <div className="w-full flex flex-col gap-8 items-center justify-center py-20 px-20">
        <h1 className="font-bold text-8xl text-wrap ">404 Not Found</h1>
        <p className="text-sm font-poppins">
          Your visited page not found. You may go to home page.
        </p>
        <NavLink
          className="flex px-8 py-2 bg-[#DB4444] items-center justify-center text-sm text-white rounded-sm font-poppins cursor-pointer"
          to="/"
        >
          Back To Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
