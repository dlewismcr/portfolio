import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import SwipeDrawer from "./SwipeDrawer";

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1>
        <NavLink to="/">Daniel Lewis</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/group">Group Project</NavLink>
        </li>
        <li>
          <NavLink to="/solo">Solo Project</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <SwipeDrawer />
    </div>
  );
};

export default NavBar;
