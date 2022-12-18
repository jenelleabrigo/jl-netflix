import React from "react";
import "./Section.css";

const Section = (props) => {
  return (
    <div className="l-section">
      <div className="u-layout">
        <div className={`l-section__inner ${props.order}`}>
          <div className="l-section__inner__txt">
            <h1 className="l-section__inner__txt__title">{props.title}</h1>
            <p className="l-section__inner__txt__desc">{props.desc}</p>
          </div>
          <div className="l-section__inner__img-container">
            <img src={props.img} alt="" className="l-section__inner__img-container__img" />
            <div className="l-section__inner__img-container__video">
              <video loop autoPlay="" muted>
                <source src={props.vid} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
