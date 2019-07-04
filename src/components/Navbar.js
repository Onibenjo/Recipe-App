import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Recipe App" />
        </Link>
        <div className="collapse navbar-collaspe show ml-sm-5">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/recipes">Recipes</Link>
            </li>
            <li className="navbar-item">
              <Link to="/404">404</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
