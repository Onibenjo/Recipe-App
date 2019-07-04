import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({
  recipe: { publisher, title, source_url, recipe_id, image_url }
}) => {
  return (
    <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
      <div className="card" style={{ height: "100%" }}>
        <img
          src={image_url}
          style={{ height: "14rem", width: "14rem" }}
          className="img-card-top"
          alt="Recipe"
        />
        <div className="card-body text-capitalize">
          <h5>{title}</h5>
          <h6 className="text-slanted text-warning">provided by {publisher}</h6>
        </div>
        <div className="card-footer">
          <Link
            to={`/recipes/${recipe_id}`}
            className="btn btn-primary text-capitalize">
            details
          </Link>
          <a
            className="btn btn-success mx-2 text-capitalize"
            href={source_url}
            target="_blank"
            rel="noopener noreferrer">
            recipe url
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
