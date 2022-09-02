import React from 'react'
import Button from "@material-ui/core/Button";
//styles
import {Wrapper} from "./ProductStyles"

function Products({prods}) {
  return (
    <div>
       <Wrapper> 
          <img src={prods.img} alt="" />
          <div className="prod-details">
            <h3>{prods.title}</h3>
            
          </div>
       </Wrapper> 
    </div>
  )
}

export default Products