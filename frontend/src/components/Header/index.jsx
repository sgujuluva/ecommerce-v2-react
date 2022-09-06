import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./Headerstyled";

import ShoppingBasketIcon from "../../images/cart.png";
import Home from "../Home/index";
import "./header.css";
import { useCart } from "react-use-cart";

function Header({ setProdType }) {
const [userInput,setUserInput] = useState("");
  const {totalItems } = useCart();

  const handleSearch = () => {

  }

  const handleClick = () => {

  }

  return (
    <Wrapper className="header">
      <div className="header-styling">
      <NavLink to="/">
        <span>eShopping</span>{" "}
      </NavLink>
      {/* category */}
      <select onChange={(e) => setProdType(e.target.value)} id="all">
        <option value="all">All</option>
        <option value="men's clothing">Men</option>
        <optgroup label="women">
          <option value="jewelery">Accessories</option>
          <option value="women's clothing">Clothing</option>
        </optgroup>
        <option value="electronics">Electronics</option>
      </select>
      
      {/* search bar */}
     {/*  <form className="search-item">
        <div className="search">
          <input type="text" placeholder="Search item" />
        </div>
        <div className="search-button">
          <button>Search</button>
        </div>
      </form> */}
       <div className="header-search">
        <input type="text" onChange={handleSearch} value={userInput} />
        <button onClick={handleClick} className="search-icon" ></button>
      </div>
      {/* sign up , if new user */}
      <NavLink to={"/signup"}>Sign up</NavLink>
      {/* login for already existing user */}
      <NavLink to={"/login"}>Login</NavLink>
      {/* cart icon */}
      <div className="shopping-basket">
      <NavLink to={"/cart"}><img src={ShoppingBasketIcon} alt="" /></NavLink>
         <span>{totalItems}</span> 
      </div>
      </div>
    </Wrapper>
  );
}

export default Header;
