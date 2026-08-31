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
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-gray-900" : "text-gray-500"
          }
        >
          Cart
        </NavLink>
      </div>

      <div className="w-full mt-5 grid grid-cols-4 px-6 py-5 shadow-sm">
        {headers.map((header, i) => (
          <div key={header.id}>
            <div>
              <h3
                className={`text-black font-poppins ${i === 0 ? "text-left" : i === 3 ? "text-right" : "text-center"}`}
              >
                {header}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {cartItems.map((item, i) => (
        <div
          key={item.id}
          className="h-full w-full grid grid-cols-4  mt-10 shadow-sm px-6 py-5"
        >
          <div className="flex gap-4">
            <div className="relative">
              <img src={item.icon} alt="image" className="h-10 w-10" />

              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="w-4 h-4 rounded-full flex items-center justify-center absolute -top-1 -left-1 bg-[#DB4444] cursor-pointer"
              >
                <img src="/assets/remove.png" alt="remove item" />
              </button>
            </div>

            <NavLink
              to={`/productdetails/${item.id}`}
              className={`text-black text-sm font-poppins cursor-pointer `}
            >
              {item.name}
            </NavLink>

            {/* <p className="text-black text-sm font-poppins">{item.name}</p> */}
          </div>
          <div className="text-center">
            <p className="text-black text-sm font-poppins">{`$${item.price}`}</p>
          </div>

          {/* Quantity */}
          <div className="flex justify-center">
            <div className="flex items-center justify-between border border-gray-400 rounded-md w-20 px-2 py-1">
              <span className="text-black text-sm">{item.quantity}</span>

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

          <div className="text-right">${item.price * item.quantity}</div>
          {/* {headers.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <h3 className="text-black">{item}</h3>
          </div>
        ))} */}
        </div>
      ))}

      <div className="flex w-full items-center justify-between ">
        <button className="px-5 py-2 border w-auto rounded-sm">
          Return To Shop
        </button>
        <button className="px-5 py-2 border w-auto rounded-sm">
          Update Cart
        </button>
      </div>

      <div className=" flex w-full items-start justify-between py-4 mb-10">
        <div className=" flex w-fit  gap-4 items-start">
          <button className="w-fit px-18 py-2 rounded-sm text-sm border text-black font-poppins">
            Coupon Code
          </button>
          <button className="w-fit px-3 py-2 rounded-sm text-sm bg-[#DB4444] text-white font-poppins">
            Apply Coupon
          </button>
        </div>
        <div className="flex flex-col  gap-2  w-100 border-2 rounded-sm px-5 py-5">
          <div className="flex items-start">
            <h3 className="font-poppins text-black font-semibold">
              Cart Total
            </h3>
          </div>

          <div className="py-6 flex flex-col gap-4">
            <div className="flex w-full items-center justify-between">
              <p className="font-poppins text-black">Subtotal:</p>
              <p className="font-poppins text-black">{`$${subtotal}`}</p>
            </div>
            <hr className="bg-black w-full" />
            <div className="flex w-full items-center justify-between">
              <p className="font-poppins text-black">Shipping:</p>
              <p className="font-poppins text-black">Free</p>
            </div>
            <hr className="bg-black w-full" />

            <div className="flex w-full items-center justify-between">
              <p className="font-poppins text-black">Total:</p>
              <p className="font-poppins text-black">{`$${subtotal}`}</p>
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
