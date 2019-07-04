import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Recipe App" />
      </Link>
      <div className="collapse navbar-collaspe show ml-sm-5">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/recipes" className="nav-link">
              Recipes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/404" className="nav-link">
              404
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
