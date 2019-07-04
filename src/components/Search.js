import React from "react";

const Search = ({ search, handleSubmit, handleChange }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
          <h1 className="text-slanted text-capitalize">
            search recipes with{" "}
            <strong className="text-orange">Food2Fork</strong>
          </h1>

          <form onSubmit={handleSubmit} className="mt-4">
            <label className="text-capitalize" htmlFor="search">
              type recipes separated by comma
            </label>
            <div className="input-group">
              <input
                type="text"
                value={search}
                name="search"
                className="form-control"
                placeholder="chicken, onions, beef"
                onChange={handleChange}
              />
              <div className="input-group-append">
                <button
                  className="input-group-text bg-primary text-white"
                  type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
