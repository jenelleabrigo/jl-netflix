import React from "react";
import "./Input.css";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../../context/ContextProvider";

const Input = () => {
  const { initialEmail, setInitialEmail } = useStateContext();
  const navigateTo = useNavigate();

  const handleChange = (e) => {
    setInitialEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    navigateTo("/register");
  };

  return (
    <>
      <p className="c-input__txt">Ready to watch? Enter your email to create or restart your membership.</p>
      <div>
        <form onSubmit={handleSubmit} className="c-input__email">
          <div className="c-input__email__container">
            <input type="email" name="email" onChange={handleChange} value={initialEmail} />
            <label htmlFor="email" className="c-input__email__container__label">
              Email Address
            </label>
          </div>
          <button type="submit" className="c-input__btn">
            <span className="c-input__btn__txt">Get Started</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Input;
