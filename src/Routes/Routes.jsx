import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../Pages/About/About";
import GuidePaywall from "../Pages/GuidePaywall/GuidePaywall";
import Home from "../Pages/Home/Home";
const AppRoute = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/guides" component={GuidePaywall}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default AppRoute;
