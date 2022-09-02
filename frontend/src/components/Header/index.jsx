import React from 'react'
import {NavLink} from "react-router-dom"
import "./Header.css"
import {Wrapper} from "./Headerstyled"

function Header() {
  return (
    <div className="header">
<NavLink to={"/"}>Home</NavLink>
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
    </div>
  )
}

export default Header