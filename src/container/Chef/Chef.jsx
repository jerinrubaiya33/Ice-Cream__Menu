import React from "react";
import { SubHeading } from "../../components";
import "./Chef.css";
import { images } from "../../constants";

const Chef = () => (
  <div className="app__wrapper section__padding" id="chef">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      {/* <img src={images.chef} alt="chef" /> */}
    </div>
    <div className="app__wrapper_info">
      <p className="chefs__word">Chef's Word</p>
      <SubHeading className="sub-title" title="Chef's Word" />
      <h1 className="app__h1">What we believe in</h1>
      <div className="app__chef__content">
        <div className="app__chef__content_quote">
          <img src={images.quote} alt="quote" />
          <p className="app__p">
            At Scoopology, our master ice cream chef brings two decades of
            frozen dessert artistry to your cone.
          </p>
        </div>
        <p className="app__p">
          Our freezers maintain -22°F (±0.3°) to
          preserve texture without ice crystallization. Every scoop is measured
          to 4.2oz (±0.05oz) using calibrated stainless steel dishers that are
          autoclaved every four hours.
        </p>
      </div>
      <div className="app__chef__sign">
        <p>Kevin Luo</p>
        <p className="app__p">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
