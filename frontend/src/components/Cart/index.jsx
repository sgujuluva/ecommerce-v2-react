import React from "react";
import { CartProvider, useCart } from "react-use-cart";

function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  return <div></div>;
}

export default Cart;
