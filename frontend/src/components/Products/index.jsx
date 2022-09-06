import React from 'react'
import Button from "@material-ui/core/Button";
import { CartProvider, useCart } from "react-use-cart";
//styles
import {WrapperProd} from "./ProductStyles"
import "./products.css"

function Products({prod}) {
  /*   console.log(prod) */
  /* usecart hook */
  const { addItem } = useCart();

    const handleAddToCart = (item) => null;

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
          </div>
          <Button onClick={() => handleAddToCart()}>Add to Cart</Button>
       </WrapperProd> 
    </div>
  )
}

export default Products