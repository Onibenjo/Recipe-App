import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Default from "./pages/Default";
import SingleRecipe from "./pages/SingleRecipe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipes/:id" component={SingleRecipe} />
          <Route component={Default} />
        </Switch>

        <Footer />
      </>
    </Router>
  );
};

export default App;
