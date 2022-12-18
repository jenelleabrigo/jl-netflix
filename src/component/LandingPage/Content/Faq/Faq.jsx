import React, { useState } from "react";
import "./Faq.css";

const Faq = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="l-faq__inner__item">
      <div
        className="l-faq__inner__item__q"
        onClick={() => {
          setOpen((item) => !item);
        }}
      >
        <p className={`l-faq__inner__item__q__txt ${open && "show"}`}>{props.question}</p>
      </div>
      <div className={`l-faq__inner__item__a ${open && "show"}`}>
        <p className="l-faq__inner__item__a__txt">{props.answer}</p>
      </div>
    </div>
  );
};

export default Faq;
