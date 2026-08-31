import { useDispatch } from "react-redux";

import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  clearCart,
} from "../cart/cartSlice";

import React from "react";
import { useState } from "react";

const useCart = () => {
  const dispatch = useDispatch();
  const [addedItemId, setAddedItemId] = useState(false);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleIncreaseItem = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseItem = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCartClick = (item) => {
    handleAddToCart(item);

    setAddedItemId(item.id);

    setTimeout(() => {
      setAddedItemId(false);
    }, 2500);
  };

  return {
    handleAddToCart,
    handleCartClick,
    handleIncreaseItem,
    handleDecreaseItem,
    handleRemoveFromCart,
    handleClearCart,
    addedItemId,
  };
};

export default useCart;
