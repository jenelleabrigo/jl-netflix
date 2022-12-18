import React from "react";
import "./NotFound.css";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="l-notfound">
      <p className="l-notfound__status">404</p>
      <p className="l-notfound__txt">The page you're looking for is not found.</p>

      <NavLink to="/">
        <p className="l-notfound__back">Back to home page.</p>
      </NavLink>
    </div>
  );
};

export default NotFound;
