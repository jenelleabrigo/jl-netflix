import React from "react";
import "./NotFound.css";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

const NotFound = () => {
  const { isAuthenticated } = useStateContext();

  return (
    <div className="l-notfound">
      <p className="l-notfound__status">404</p>
      <p className="l-notfound__txt">The page you're looking for is not found.</p>

      {!isAuthenticated ? (
        <NavLink to="/">
          <p className="l-notfound__back">Back to home page.</p>
        </NavLink>
      ) : (
        <NavLink to="/home">
          <p className="l-notfound__back">Back to home page.</p>
        </NavLink>
      )}
    </div>
  );
};

export default NotFound;
