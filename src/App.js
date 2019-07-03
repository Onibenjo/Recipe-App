import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Default from './pages/Default';

const App = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/recipes' component={Recipes}/>
          <Route component={Default}/>
        </Switch>
      </>
    </Router>
  );
};

export default App;
