import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [credentials, setCredentials] = useState({});
  const [initialEmail, setInitialEmail] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <StateContext.Provider value={{ credentials, setCredentials, isAuthenticated, setIsAuthenticated, initialEmail, setInitialEmail }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
