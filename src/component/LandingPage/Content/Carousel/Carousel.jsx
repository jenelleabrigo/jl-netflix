import React from "react";
import "./Carousel.css";
import Input from "../../Input/Input";

const Carousel = () => {
  return (
    <div className="l-carousel">
      <div className="l-carousel__bg"></div>
      <div className="l-carousel__inner">
        <h1 className="l-carousel__inner__txt01">Unlimited movies, TV shows, and more.</h1>
        <p className="l-carousel__inner__txt02">Watch anywhere. Cancel anytime.</p>
        <Input />
      </div>
    </div>
  );
};

export default Carousel;
