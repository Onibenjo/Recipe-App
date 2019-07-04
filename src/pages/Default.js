import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Default = () => {
  return (
    <Header title="404" styleClass="default-hero">
      <h2 className="text-light text-uppercase">You are in the wrong place</h2>
      <Link to="/" className="btn text-uppercase mt-3 btn-lg btn-secondary">
        return home
      </Link>
    </Header>
  );
};

export default Default;
