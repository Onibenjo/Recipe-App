import React, { useState, useEffect } from "react";
// import { recipeData } from "../data/tempDetails";
import { Link } from "react-router-dom";

const SingleRecipe = ({ match }) => {
  // const [recipe, setRecipe] = useState(recipeData);
  const [recipe, setRecipe] = useState({});
  const [id] = useState(match.params.id);
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const {
    publisher,
    publisher_url,
    title,
    source_url,
    image_url,
    ingredients
  } = recipe;

  useEffect(() => {
    const url = `https://www.food2fork.com/api/get?key=${
      process.env.REACT_APP_API_KEY
    }&rId=${id}`;

    try {
      const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setRecipe(data.recipe);
        setLoading(false);
      };

      fetchData();
    } catch (err) {
      setError(true);
    }
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        {isError && <div>Something went wrong ...</div>}
        {/* shows a loading message if it fetches the data from the api */}
        {loading ? (
          <div className="col-10 mx-auto col-md-6 my-3">
            <h2 className="text-uppercase text-center text-orange">
              Loading recipe...
            </h2>
          </div>
        ) : (
          <>
            <div className="col-10 mx-auto col-md-6 my-3">
              <Link
                to="/recipes"
                className="btn btn-warning mb-5 text-capitalize">
                <i className="fa fa-arrow-left" aria-hidden="true" /> recipes
              </Link>
              <img
                src={image_url}
                className="d-block w-100"
                style={{ maxHeight: "30rem" }}
                alt="Recipe"
              />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase">{title}</h2>
              <h6 className="text-slanted text-capitalize text-warning">
                published by {publisher}
              </h6>
              <a
                href={publisher_url}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-capilize mt-3 btn btn-outline-success">
                <i className="fa fa-globe" aria-hidden="true" /> publisher url
              </a>
              <a
                href={source_url}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-capilize mt-3 btn mx-2 btn-outline-primary">
                <i className="fa fa-globe" aria-hidden="true" /> recipe url
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4 mx-auto">Ingredients</h2>
                {ingredients.map((item, i) => (
                  <li key={i} className="list-group-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleRecipe;
