import React from "react";
import "./Content.css";
import Carousel from "./Carousel/Carousel";
import Section from "./Section/Section";
import Faq from "./Faq/Faq";

import faqItems from "./Faq/faqItems";
import Input from "../Input/Input";

import imgTv from "../../../assets/img/img-tv.png";
import vidTv from "../../../assets/video/tv-video.mp4";
import imgDl from "../../../assets/img/img-download.jpg";
import imgKids from "../../../assets/img/img-kids.png";

const sectionContent = [
  { title: "Enjoy on your TV.", desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.", img: imgTv, vid: vidTv },
  { title: "Download your shows to watch offline.", desc: "Save your favorites easily and always have something to watch.", img: imgDl, order: "inverse" },
  { title: "Watch everywhere.", desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.", img: "" },
  { title: "Create profiles for kids.", desc: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.", img: imgKids, order: "inverse" },
];

const Content = () => {
  return (
    <div className="l-content">
      <div className="l-content__section">
        <Carousel />
      </div>

      {sectionContent.map((item, index) => {
        return (
          <div key={index} className="l-content__section">
            <Section id={index} order={item.order} title={item.title} desc={item.desc} img={item.img} vid={item.vid} />
          </div>
        );
      })}

      <div className="l-content__section">
        <div className="l-faq">
          <div className="u-layout">
            <div className="l-faq__inner">
              <h1 className="l-faq__inner__heading">Frequently Asked Questions</h1>
              <div className="l-faq__inner__item-container">
                {faqItems.map((item, index) => {
                  return <Faq key={index} question={item.question} answer={item.answer} />;
                })}
              </div>
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
