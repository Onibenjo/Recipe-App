import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";

const Home = () => {
  return (
    <div>
      <Header title="Amazing Recipes">
        <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">
          search recipes
        </Link>
      </Header>
    </div>
  );
};

export default Home;
