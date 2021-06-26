import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
const AppRoute = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default AppRoute;
