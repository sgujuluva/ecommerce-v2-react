import React from 'react'
import Button from "@material-ui/core/Button";
//styles
import {WrapperProd} from "./ProductStyles"
import "./products.css"

function Products({prods}) {
  console.log(prods)
    const handleAddToCart = (item) => null;
  return (
    <div className = "prods-list">
       <WrapperProd> 
        <span>
          <img src={prods.image} alt="" />
        </span>
          <div className="prod-details">
            <h3>{prods.title}</h3>
            <p>{prods.description}</p>
            <h3>{prods.price.toFixed(2)} €</h3>
          </div>
          <Button onClick={() => handleAddToCart()}>Add to Cart</Button>
       </WrapperProd> 
    </div>
  )
}

export default Products