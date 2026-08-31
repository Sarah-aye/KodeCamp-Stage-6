import React from "react";
import withAuth from "../HOC/withAuth";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useCart from "../hooks/useCart";

const headers = ["Product", "Price", "Quantity", "Subtitle"];

const Cart = () => {
  const { handleDecreaseItem, handleIncreaseItem, handleRemoveFromCart } =
    useCart();
  const cartItems = useSelector((state) => state.cart.items);
  //   console.log(cartItems);

  const subtotal = cartItems
    .map((item) => item)
    .reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-40 flex flex-col gap-10 w-full items-start justify-between py-10">
      {/* Breadcrumb */}
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

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-gray-900" : "text-gray-500"
          }
        >
          Cart
        </NavLink>
      </div>

      {/* Cart Header - desktop */}
      <div className="hidden sm:grid w-full grid-cols-4 px-4 sm:px-6 py-5 shadow-sm">
        {headers.map((header, i) => (
          <div key={header}>
            <h3
              className={`text-black font-poppins ${
                i === 0 ? "text-left" : i === 3 ? "text-right" : "text-center"
              }`}
            >
              {header}
            </h3>
          </div>
        ))}
      </div>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="w-full grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-0 items-center mt-2 sm:mt-10 shadow-sm px-4 sm:px-6 py-5"
        >
          {/* Product */}
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <img
                src={item.icon}
                alt={item.name}
                className="h-10 w-10 object-contain"
              />

              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="w-4 h-4 rounded-full flex items-center justify-center absolute -top-1 -left-1 bg-[#DB4444] cursor-pointer"
              >
                <img src="/assets/remove.png" alt="remove item" />
              </button>
            </div>

            <NavLink
              to={`/productdetails/${item.id}`}
              className="text-black text-sm font-poppins cursor-pointer truncate"
            >
              {item.name}
            </NavLink>
          </div>

          {/* Price */}
          <div className="text-left sm:text-center flex justify-between sm:block">
            <span className="sm:hidden font-poppins text-sm font-semibold">
              Price:
            </span>

            <p className="text-black text-sm font-poppins">${item.price}</p>
          </div>

          {/* Quantity */}
          <div className="flex justify-between sm:justify-center items-center">
            <span className="sm:hidden font-poppins text-sm font-semibold">
              Quantity:
            </span>

            <div className="flex items-center justify-between border border-gray-400 rounded-md w-20 px-2 py-1">
              <span className="text-black text-sm">
                {String(item.quantity).padStart(2, "0")}
              </span>

              <div className="flex flex-col">
                <button
                  className="text-black text-xs leading-none hover:text-gray-500"
                  onClick={() => handleIncreaseItem(item.id)}
                >
                  ▲
                </button>

                <button
                  onClick={() => handleDecreaseItem(item.id)}
                  className="text-black text-xs leading-none hover:text-gray-500"
                >
                  ▼
                </button>
              </div>
            </div>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between sm:block text-left sm:text-right">
            <span className="sm:hidden font-poppins text-sm font-semibold">
              Subtotal:
            </span>

            <p className="text-black text-sm font-poppins">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      ))}

      {/* Cart Buttons */}
      <div className="flex flex-col sm:flex-row w-full items-stretch sm:items-center justify-between gap-4">
        <button className="px-5 py-2 border w-full sm:w-auto rounded-sm">
          Return To Shop
        </button>

        <button className="px-5 py-2 border w-full sm:w-auto rounded-sm">
          Update Cart
        </button>
      </div>

      {/* Coupon + Cart Total */}
      <div className="flex flex-col lg:flex-row w-full items-stretch lg:items-start justify-between gap-8 py-4 mb-10">
        {/* Coupon */}
        <div className="flex flex-col sm:flex-row w-full lg:w-fit gap-4 items-stretch sm:items-start">
          <button className="w-full sm:w-fit px-8 sm:px-18 py-2 rounded-sm text-sm border text-black font-poppins">
            Coupon Code
          </button>

          <button className="w-full sm:w-fit px-3 py-2 rounded-sm text-sm bg-[#DB4444] text-white font-poppins">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="flex flex-col gap-2 w-full lg:w-[400px] border-2 rounded-sm px-5 py-5">
          <div className="flex items-start">
            <h3 className="font-poppins text-black font-semibold">
              Cart Total
            </h3>
          </div>

          <div className="py-6 flex flex-col gap-4">
            <div className="flex w-full items-center justify-between">
              <p className="font-poppins text-black">Subtotal:</p>
              <p className="font-poppins text-black">${subtotal}</p>
            </div>

            <hr className="bg-black w-full" />

            <div className="flex w-full items-center justify-between">
              <p className="font-poppins text-black">Shipping:</p>
              <p className="font-poppins text-black">Free</p>
            </div>

            <hr className="bg-black w-full" />

            <div className="flex w-full items-center justify-between">
              <p className="font-poppins text-black">Total:</p>
              <p className="font-poppins text-black">${subtotal}</p>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <button className="bg-[#DB4444] text-white font-poppins text-sm px-8 py-2 rounded-sm">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Cart);
