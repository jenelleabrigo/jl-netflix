import React from "react";
import "./SignUp.css";
import Button from "../Nav/Button/Button";
import { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import { registerWithEmailAndPassword } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SignUp() {
  const navigateTo = useNavigate();
  const { initialEmail } = useStateContext();
  const { isAuthenticated } = useStateContext();
  const [inputs, setInputs] = useState({ email: initialEmail });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const register = async (e) => {
    try {
      e.preventDefault();
      registerWithEmailAndPassword(inputs.email, inputs.password);
    } catch (error) {
      setErrors(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="l-signup">
      <div className="l-signup__bg"></div>
      <form onSubmit={register} className="l-signup__form">
        <h1 className="heading">Register Account</h1>
        <div htmlFor="email" className="field">
          <input type="text" name="email" onChange={handleChange} value={inputs.email || ""} className={`${inputs.email?.length === 0 ? "" : "hasText"}`} />
          <label className="txt">Email</label>
        </div>

        <div htmlFor="password" className="field">
          <input type="password" name="password" onChange={handleChange} value={inputs.password || ""} className={`${inputs.password?.length === 0 ? "" : "hasText"}`} />
          <label className="txt">Password</label>
        </div>

        <Button type="submit" text="Sign Up"></Button>

        {errors.map((error, index) => (
          <p key={index} style={{ color: "red", textAlign: "center", marginTop: `${index === 0 ? "10px" : ""}` }}>
            {error}
          </p>
        ))}
        <div className="l-signup__register">
          <p>Already have an account?</p>
          <a href="/signIn" className="l-signup__register__link">
            <p> Sign In</p>
          </a>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
