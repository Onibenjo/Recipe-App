import React from "react";
import logo from "../images/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <div className="collapse navbar-collapse show ml-sm-5 " id="navbarToggler">
      <ul
        className="navbar-nav  mx-auto mt-lg-0 justify-content-center"
        style={{ flexDirection: "row" }}>
        <li className="nav-item mx-4">
          <NavLink
            exact
            to="/"
            className="nav-link"
            activeStyle={{
              color: "#3d3d3d",
              borderBottom: "1px solid #3d3d3d"
            }}>
            Home
          </NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink
            exact
            to="/recipes"
            className="nav-link"
            activeStyle={{
              color: "#3d3d3d",
              borderBottom: "1px solid #3d3d3d"
            }}>
            Recipes
          </NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink
            exact
            to="/404"
            className="nav-link"
            activeStyle={{
              color: "#3d3d3d",
              borderBottom: "1px solid #3d3d3d"
            }}>
            404
          </NavLink>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-center px-5">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Recipe App" />
      </Link>

      {menuItems}
    </nav>
  );
};

export default Navbar;
