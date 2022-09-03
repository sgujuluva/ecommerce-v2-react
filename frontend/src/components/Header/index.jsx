import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./Headerstyled";

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
      <NavLink to={"/signup"}>Sign in</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
    </Wrapper>
  );
}

export default Header;
