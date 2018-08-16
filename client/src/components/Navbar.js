import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <NavbarUnAuth />
  </nav>
);

const NavbarUnAuth = () => (
  <ul>
    <li>
      <NavLink to="/" exact>
        Projects
      </NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
    <li>
      <NavLink to="/search">Search</NavLink>
    </li>
  </ul>
);

export default Navbar;
