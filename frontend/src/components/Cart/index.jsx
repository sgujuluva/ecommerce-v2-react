import React from "react";
import { useCart } from "react-use-cart";

function Cart({item}) {

    const{prod} = useCart();

  const { isEmpty, totalUniqueItems,totalItems, items, updateItemQuantity, removeItem } = useCart();

    if(isEmpty) return <p>Your Cart is Empty</p>

  return (
    <section>
        <div className="cart-container">
        <h5>Cart({totalUniqueItems}) total Items: ({totalItems})</h5>
        </div>
    
  </section>
  )
}

export default Cart;
