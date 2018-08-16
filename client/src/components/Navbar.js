import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav>
    <NavbarAuth />
  </nav>
);

const NavbarAuth = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/search">Search</NavLink>
    </li>
    <li>
      <NavLink to="/projects/add">Add Project</NavLink>
    </li>
  </ul>
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
      <NavLink to="/search">Search</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </ul>
);

export default Navbar;
