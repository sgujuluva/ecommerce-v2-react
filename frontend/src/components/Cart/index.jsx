import React from "react";
import { useCart } from "react-use-cart";

function Cart(prod) {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

    if(isEmpty) return <p>Your Cart is Empty</p>

  return (
    <>
   
  </>
  )
}

export default Cart;
