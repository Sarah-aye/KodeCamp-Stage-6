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

          {/* implementing render prop on the wishlist heart icon */}
          <div className="flex items-center justify-between gap-4">
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
                      alt="wishlist"
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

            {/* <img src="/assets/Cart1.png" alt=" cart icon" /> */}
            <MyAccount />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
