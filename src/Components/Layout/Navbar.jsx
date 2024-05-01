import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <h1>This is practice project for React-Router-Dom</h1>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
