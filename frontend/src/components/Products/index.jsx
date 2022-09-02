import React from 'react'
import Button from "@material-ui/core/Button";
//styles
import {WrapperProd} from "./ProductStyles"

function Products({prods}) {
    const handleAddToCart = (item) => null;
  return (
    <div>
       <WrapperProd> 
          <img src={prods.image} alt="" />
          <div className="prod-details">
            <h3>{prods.title}</h3>
            <p>{prods.description}</p>
            <h3>{prods.price}</h3>
          </div>
          <Button onClick={() => handleAddToCart()}>Add to Cart</Button>
       </WrapperProd> 
    </div>
  )
}

export default Products