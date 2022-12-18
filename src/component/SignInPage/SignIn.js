import React, { useState, useEffect } from "react";
import "./SignIn.css";
import Button from "../Nav/Button/Button";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import { logInWithEmailAndPassword } from "../../firebase";

function SignIn() {
  const { isAuthenticated } = useStateContext();
  const navigateTo = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const login = async (e) => {
    try {
      e.preventDefault();
      await logInWithEmailAndPassword(inputs.email, inputs.password);
    } catch (err) {
      setErrors(err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="l-signin">
      <div className="l-signin__bg"></div>
      <form onSubmit={login} className="l-signin__form">
        <h1 className="heading">Sign In</h1>
        <div htmlFor="email" className="field">
          <input type="text" name="email" onChange={handleChange} value={inputs.email || ""} className={`${inputs.email?.length === 0 ? "" : "hasText"}`} />
          <label className="txt">Email</label>
        </div>

        <div htmlFor="password" className="field">
          <input type="password" name="password" onChange={handleChange} value={inputs.password || ""} className={`${inputs.password?.length === 0 ? "" : "hasText"}`} />
          <label className="txt">Password</label>
        </div>

        <Button type="submit" text="Sign In"></Button>

        {/* {errors.map((error, index) => (
          <p key={index} style={{ color: "red", textAlign: "center", marginTop: `${index === 0 ? "10px" : ""}` }}>
            {error}
          </p>
        ))} */}
        <div className="l-signin__register">
          <p>No account yet?</p>
          <a href="/register" className="l-signin__register__link">
            <p> Register now.</p>
          </a>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
