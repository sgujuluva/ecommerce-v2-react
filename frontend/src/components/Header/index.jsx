import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./Headerstyled";
import ShoppingBasketIcon from "../../images/cart.png";
import "./header.css";

function Header() {
  return (
    <Wrapper className="header">
      <NavLink to="/">
        <span>eShopping</span>{" "}
      </NavLink>
      {/* catgory */}
      <select id="all">
        <option value="all">All</option>
        <option value="man">Men</option>
        <option value="women">Women</option>
        <option value="electronics">Electronics</option>
      </select>
      {/* search bar */}
      <div className="search-item">
        <div className="search">
          <input type="text" placeholder="Search item" />
        </div>
        <div className="search-button">
          <button>Search</button>
        </div>
      </div>
      {/* sign up , if new user */}
      <NavLink to={"/signup"}>Sign up</NavLink>
      {/* login for already existing user */}
      <NavLink to={"/login"}>Login</NavLink>
      {/* cart icon */}
      <div className="shopping-basket">
        <img src={ShoppingBasketIcon} alt="" />
        <span>0</span>
      </div>
    </Wrapper>
  );
}

export default Header;
