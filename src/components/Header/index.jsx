import React from 'react'
import {NavLink} from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <div className="header">
<NavLink to={"/"}>Home</NavLink>
<NavLink to={"/signup"}>Sign in</NavLink>
<NavLink to={"/login"}>Login</NavLink>
    </div>
  )
}

export default Header