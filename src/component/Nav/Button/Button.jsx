import React from "react";
import "./Button.css";

const Button = ({ type, text }) => {
  return (
    <button type={type} className="c-button">
      {text}
    </button>
  );
};

export default Button;
