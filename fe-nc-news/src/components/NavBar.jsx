import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav id="navbar">
      <Link to="/">
        <div className="navbox">Home</div>
      </Link>
      <Link to="/users">
        <div className="navbox">Users</div>
      </Link>
      <Link to="/topics">
        <div className="navbox">Topics</div>
      </Link>
      <Link to="/articles">
        <div className="navbox">Articles</div>
      </Link>
    </nav>
  );
};

export default NavBar;
