import React from 'react'
import {Link, NavLink} from "react-router-dom"
import "./Navbar.css"
function Navbar() {
  return (
    <div>
      <NavLink activeClassName="active" to={"/"}>Home</NavLink>
      <NavLink activeClassName="active" to={"/product"}>Product</NavLink>
      <NavLink activeClassName="active" to={"/women"}>Women</NavLink>
      <NavLink activeClassName="active" to={"/cart"}>Cart</NavLink>
    </div>
  )
}

export default Navbar