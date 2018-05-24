import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home/Home";
import GithubSearch from "./GithubSearch/GithubSearch";
import CurrencyData from "./CurrencyData/CurrencyData";

const FourOhFour = () => <h1>404</h1>;

export default (
  <Switch>
    <Route exact path="/currency-data" component={CurrencyData} />
    <Route exact path="/github-search" component={GithubSearch} />
    <Route exact path="/" component={Home} />
    <Route component={FourOhFour} />
  </Switch>
);
