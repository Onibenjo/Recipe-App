import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-between ">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Recipe App" />
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collaspe show ml-sm-5" id="navbarToggler">
        <ul className="navbar-nav  mr-auto mt-2 mt-lg-0">
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
