import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav id="navbar">
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/articles">Articles</Link>
    </nav>
  );
};

export default NavBar;
