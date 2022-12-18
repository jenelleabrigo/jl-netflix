import React from "react";
import Landing from "./LandingPage/Landing";
import HomePage from "./HomePage/Home";
import { useStateContext } from "../context/ContextProvider";

export default function Welcome() {
  const { isAuthenticated } = useStateContext();

  return <>{isAuthenticated ? <HomePage /> : <Landing />}</>;
}
