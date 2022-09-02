import React from 'react'
import Button from "@material-ui/core/Button";
//styles
import {WrapperProd} from "./ProductStyles"

function Products({prods}) {
  return (
    <div>
       <WrapperProd> 
          <img src={prods.image} alt="" />
          <div className="prod-details">
            <h3>{prods.title}</h3>
            <p>{prods.description}</p>
            <h3>{prods.price}</h3>
          </div>
       </WrapperProd> 
    </div>
  )
}

export default Products