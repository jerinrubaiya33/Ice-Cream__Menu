import React from "react";
import "./AboutUs.css";
import images from "../../constants/images";

const AboutUs = () => (
  <div className="app__aboutus section__padding">
    <div className="app__aboutus-background"></div>

    <div className="app__aboutus-container">
      {/* Left - About Us */}
      <div className="app__aboutus-section app__aboutus-about">
        <h1 className="headtext">About Us</h1>
        <div className="spoon__img"></div>
        <p className="p__cormorents">
          Founded with a passion for extraordinary flavors, Scoopology is more than just ice cream—it's 
          an experience. We craft each scoop with premium ingredients and boundless creativity, turning 
          simple desserts into unforgettable memories.
        </p>
      </div>

      <div className="app__aboutus-section app__aboutus-image">
        <img
          src={images.stick}
          alt="About"
          className="aboutus__center-image"
        />
      </div>

      {/* Right - Our Journey */}
      <div className="app__aboutus-section app__aboutus-journey">
        <h1 className="headtext">Our Journey</h1>
        <div className="spoon__img"></div>
        <p className="p__cormorents">
          From a small corner shop in 2012 to multiple locations today, our journey has been as sweet 
          as our creations. Every year brings new flavors, innovations, and happy customers who've 
          made Scoopology a beloved destination for ice cream enthusiasts.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;