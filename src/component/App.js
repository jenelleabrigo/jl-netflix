import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import SignIn from "./SignInPage/SignIn";
import SignUp from "./SignUpPage/SignUp";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import NotFound from "./NotFoundPage/NotFound";
import Welcome from "./Welcome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";

function App() {
  const { setIsAuthenticated } = useStateContext();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user && !loading) {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated, user, loading]);

  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
