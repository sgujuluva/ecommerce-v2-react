import React from "react";
import Header from "../Header/index"
import { useCart } from "react-use-cart";

function Cart() {
  
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();
/* console.log(items)  */
  if (isEmpty) 
  return (
    <>
    <Header/>
    <div className="ml-50">Your Cart is Empty</div>
    </>
  );

  return (
    <>
    <Header/>
    <section className="py-4 container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12">
        <h5>
          Cart: ({totalUniqueItems})  total Items: ({totalItems})
        </h5>
        <table className="table table-light table-hover m-0">
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item.image} style={{ height: "4rem" }} alt="" />
                  </td>
                  <td >{item.title}</td>
                  <td>{item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <button
                      className="btn btn-warning ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +{" "}
                    </button>
                    <button
                      className="btn btn-warning ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn btn-warning ms-2"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove Item
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="col-auto mt-20">
        <h2>Total Price : {cartTotal.toFixed(2)}</h2>
      </div>
      <div className="col-auto ms-auto">
        <button className="btn btn-secondary m-2" 
                onClick={() => emptyCart() }
        >Clear Cart</button>
        </div>
      </div>
    </section>
    </>
  );
 
}

export default Cart;
