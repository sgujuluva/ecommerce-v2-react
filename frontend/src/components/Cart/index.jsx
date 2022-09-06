import React from "react";
import { useCart } from "react-use-cart";

function Cart({item}) {

    const{prod} = useCart();

  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

    if(isEmpty) return <p>Your Cart is Empty</p>

  return (
    <>
  { console.log("prod in cart", item)}
  </>
  )
}

export default Cart;
