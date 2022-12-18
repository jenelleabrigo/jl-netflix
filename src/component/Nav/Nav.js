import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Nav.css";
import Button from "./Button/Button";
import avatar from "../../assets/img/avatar.png";
import logo from "../../assets/img/icons/logo.svg";
import { useStateContext } from "../../context/ContextProvider";
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Nav() {
  const [user, loading, error] = useAuthState(auth);
  const { isAuthenticated, setIsAuthenticated } = useStateContext();
  const navigateTo = useNavigate();
  const [scroll, handleScroll] = useState(false);

  const signOut = async () => {
    await logout();
    setIsAuthenticated(false);
    navigateTo("/signIn");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleScroll(true);
      } else handleScroll(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`nav ${scroll && "scrolled"}`}>
      <NavLink to="/">
        <img className="nav__logo" src={logo} alt="Netflix logo" />
      </NavLink>
      <div className="l-header">
        {isAuthenticated ? (
          <>
            <img className="nav__avatar" src={avatar} alt="Netflix Avatar" />
            <div onClick={signOut} style={{ display: "inline" }}>
              <Button type="button" text="Sign Out"></Button>
            </div>
          </>
        ) : (
          <NavLink to="/signIn">
            <Button text="Sign In"></Button>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Nav;
