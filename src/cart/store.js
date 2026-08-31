import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";

const savedCart = localStorage.getItem("cart");

const preloadedState = {
  cart: {
    items: savedCart ? JSON.parse(savedCart) : [],
  },
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const cartItems = store.getState().cart.items;

  localStorage.setItem("cart", JSON.stringify(cartItems));
});
