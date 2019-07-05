import React, { useState, useEffect } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
// import { recipeData } from "../data/tempList";

const Recipes = () => {
  // const [recipes, setRecipes] = useState(recipeData);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState({
    search_url: `https://www.food2fork.com/api/search?key=${
      process.env.REACT_APP_API_KEY
    }`,
    base_url: `https://www.food2fork.com/api/search?key=${
      process.env.REACT_APP_API_KEY
    }`,
    query: "&q=",
    error: ""
  });
  const [isError, setError] = useState("");

  const getRecipes = async () => {
    try {
      const res = await fetch(url.search_url);
      const { recipes } = await res.json();
      if (recipes.length === 0) {
        return setError(
          "Sorry, no recipes matched your search. Please try again or search for the most popular recipes."
        );
      }
      setRecipes(recipes);
      setError("");
    } catch (err) {
      setError("Sorry, error fethcing recipes");
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const handleChange = e => setSearch(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    const { base_url, query } = url;

    setUrl({ ...url, search_url: `${base_url}${query}${search}` }, () =>
      getRecipes()
    );
    setSearch("");
  };

  return (
    <>
      <Search
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {isError ? (
        <section>
          <div className="row">
            <div className="col">
              <div className="mt-5 text-orange text-uppercase text-center">
                {isError}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </>
  );
};

export default Recipes;
