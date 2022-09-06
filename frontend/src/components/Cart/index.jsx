import React from "react";
import { useCart } from "react-use-cart";

function Cart({item}) {    

  const { isEmpty, totalUniqueItems,totalItems, items, updateItemQuantity, removeItem,cartTotal } = useCart();

    if(isEmpty) return <p>Your Cart is Empty</p>

  return (
    <section>
        <div className="cart-container">
        <h5>Cart({totalUniqueItems}) total Items: ({totalItems})</h5>
        <table>
            <tbody>
            {items.map((item,index) => {
                return (
               <tr key={index}>
                    <td>
                        <img src={item.image} style={{height:"6rem"}} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.Quantity})</td>
                    <td>
                        <button className="btn btn-info ms-2" 
                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                    + </button>
                        <button className="btn btn-info ms-2"
                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                            -</button>
                        <button className="btn btn-danger ms-2"
                                onClick={() => removeItem(item.id)}
                        >Remove Item</button>
                    </td>
               </tr> 
                )
            })}
            </tbody>
        </table>
        </div>
    <div className="col-auto ms-auto">
<h2>Total Price : {cartTotal}</h2>
    </div>
  </section>
  )
}

export default Cart;
