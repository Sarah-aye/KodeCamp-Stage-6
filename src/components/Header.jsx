import React from "react";
import NavBar from "./NavBar";
import TopHeader from "./topHeader";
import MyAccount from "./myAccount";
import { useNavigate, useLocation } from "react-router-dom";
import { upper } from "../data/wishList1";
import ToggleComponent from "./toggle";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isWishlist = location.pathname === "/wishlist";
  const isCart = location.pathname === "/cart";
  const productDetails = location.pathname === "/productdetails";

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between container w-full mx-auto px-4 sm:px-8 lg:px-40 font-poppins gap-5 lg:gap-0">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Exlusive</h1>
        </div>

        {/* Navigation */}
        <div className="w-full lg:w-auto">
          <NavBar />
        </div>

        {/* Search + Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 w-full lg:w-auto">
          {/* Search */}
          <div className="w-full sm:w-fit h-fit rounded flex items-center justify-between gap-4 pt-1.75 pr-3 pb-1.75 pl-5 relative bg-[#F5F5F5]">
            <div className="flex-1">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full sm:w-auto h-auto opacity-50 font-normal text-xs leading-4.5 tracking-normal outline-none bg-transparent"
              />
            </div>

            <div>
              <img
                src="/assets/searchIcon.png"
                alt="search icon"
                className="w-6 h-6"
              />
            </div>
          </div>

          {/* Wishlist + Cart + Account */}
          {/* Wishlist + Cart + Account */}
          <div className="flex items-center justify-start lg:justify-end gap-4">
            <ToggleComponent
              render={(on, toggle) => (
                <div className="relative cursor-pointer">
                  <button
                    onClick={() => {
                      toggle();
                      navigate("/wishlist");
                    }}
                  >
                    <img
                      src="/assets/heart.png"
                      alt="wishlist"
                      className="w-6 h-6"
                    />
                  </button>

                  {(isWishlist || isCart || "/") && (
                    <span className="absolute -right-1 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#DB4444] text-xs text-white">
                      {upper.length}
                    </span>
                  )}
                </div>
              )}
            />

            <ToggleComponent
              render={(on, toggle) => (
                <div className="relative cursor-pointer">
                  <button
                    onClick={() => {
                      toggle();
                      navigate("/cart");
                    }}
                  >
                    <img
                      src="/assets/Cart1.png"
                      alt="cart"
                      className="w-6 h-6"
                    />
                  </button>

                  {(productDetails || isCart || isWishlist || "/") && (
                    <span className="absolute -right-1 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#DB4444] text-xs text-white">
                      {cartItems.length}
                    </span>
                  )}
                </div>
              )}
            />

            <MyAccount />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
