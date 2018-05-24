import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <Link to="/github-search">Github Search</Link>
    <br />
    <Link to="/currency-data">Currency Exchange Data</Link>
  </div>
);

export default Home;
