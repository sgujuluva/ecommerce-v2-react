import React from "react";
import { useCart } from "react-use-cart";

function Cart({item}) {    

  const { isEmpty, totalUniqueItems,totalItems, items, updateItemQuantity, removeItem } = useCart();

    if(isEmpty) return <p>Your Cart is Empty</p>

  return (
    <section>
        <div className="cart-container">
        <h5>Cart({totalUniqueItems}) total Items: ({totalItems})</h5>
        <table>
            {items.map((item,index) => {
                return (
               <tr key={index}>
                    <td>
                        <img src={item.image} style={{height:"6rem"}} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantitty ({item.Quantity})</td>
                    <td>
                        
                    </td>
               </tr> 
                )
            })}
        </table>
        </div>
    
  </section>
  )
}

export default Cart;
