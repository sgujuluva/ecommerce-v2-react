import React from 'react'
import Button from "@material-ui/core/Button";
import { CartProvider, useCart } from "react-use-cart";
//styles
import {WrapperProd} from "./ProductStyles"
import "./products.css"
import Cart from '../Cart';

function Products({prod}) {
    console.log(prod) 
  /* usecart hook */
  const { addItem } = useCart();
//handleCart
const handleCart = () => {
    <Cart/>
}

  return (
    <div className = "prod-list">
       <WrapperProd> 
        <span>
          <img src={prod.image} alt="" />
        </span>
          <div className="prod-details">
            <h3>{prod.title}</h3>
            <p>{prod.description}</p>
            <h3>{prod.price.toFixed(2)} €</h3>
            <Cart item={prod}/>
          </div>
          <Button onClick={handleCart}>Add to Cart</Button>
          {/* () => addItem(prod) */}
       </WrapperProd> 
    </div>
  )
}

export default Products