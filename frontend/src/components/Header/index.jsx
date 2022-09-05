import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./Headerstyled";
import ShoppingBasketIcon from "../../images/cart.png";
import "./header.css"

function Header() {
  return (
    <Wrapper className="header">
      <NavLink to={"/"}><span>eShopping</span> </NavLink>
      <div className="search-item">
        <div className="search">
          <input type="text" placeholder="Search item" />
        </div>
        <div className="search-button">
          <button>Search</button>
        </div>
      </div>
      <NavLink to={"/signup"}>Sign up</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <div className="shopping-basket">
        <img src={ ShoppingBasketIcon} alt="" />
        <span>0</span>
      </div>
    </Wrapper>
  );
}

export default Header;
