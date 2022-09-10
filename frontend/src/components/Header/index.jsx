import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./Headerstyled";
import { useCart } from "react-use-cart";

import ShoppingBasketIcon from "../../images/cart.png";
import "./header.css";
//context
import { Datas } from "../Context/Context";

function Header({ setProdType, data, handleSearch, handleClick, userInput }) {
  /* console.log("data is,", data)  */
  //from context
  const { apiUser, loginUser, setLoginUser } = useContext(Datas);
  console.log("apiuser  from header is:", apiUser);
  //usecart
  const { totalItems } = useCart();
  //finding the correct user
  let findUser = apiUser.find((item) => item.email === loginUser.email);
  console.log("find user", findUser);
  //signout fucnction
  let signout = () => {
    setLoginUser({ email: "", password: "" });
  };
  return (
    <Wrapper className="header">
      <div className="header-styling">
        <NavLink to="/">
          <span>eShopping</span>
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
        <div className="header-search">
          <input type="text" onChange={handleSearch} value={userInput} />
          <button onClick={handleClick} className="search-icon">
            Search
          </button>
        </div>
        {findUser ? (
          <>
            <NavLink onClick={signout} to={"/"}>
              Sign out
            </NavLink>
            <h3 classname="find-user" >Welcome {findUser.username[0].toUpperCase()+findUser.username.slice(1)}</h3>
          </>
        ) : (
          <>
            {/* sign up , if new user */}
            <NavLink to={"/signup"}>Sign up</NavLink>
            {/* login for already existing user */}
            <NavLink to={"/login"}>Login</NavLink>
          </>
        )}
        {/* cart icon */}
        <div className="shopping-basket">
          <NavLink to={"/cart"}>
            <img src={ShoppingBasketIcon} alt="" />
          </NavLink>
          <span>{totalItems}</span>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
