import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ session }) => (
  <nav>
    {session && session.getCurrentUser ? <NavbarAuth /> : <NavbarUnAuth />}
  </nav>
);

const NavbarAuth = () => (
  <Fragment>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/search">Search</NavLink>
      </li>
      <li>
        <NavLink to="/project/add">Add Project</NavLink>
      </li>
    </ul>
    <h5>You can add custom reminders for yourself (todolist etc)</h5>
  </Fragment>
);

const NavbarUnAuth = () => (
  <Fragment>
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
  </Fragment>
);

export default Navbar;
