import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home/Home";
import GithubSearch from "./containers/GithubSearch/GithubSearch";

const FourOhFour = () => <h1>404</h1>;

export default (
  <Switch>
    <Route exact path="/github-search" component={GithubSearch} />
    <Route exact path="/" component={Home} />
    <Route component={FourOhFour} />
  </Switch>
);
