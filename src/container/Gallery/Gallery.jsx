import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      {/* Background Layer */}
      <div className="app__gallery-background" />

      {/* Gallery Content */}
      <div className="app__gallery-content">
        <SubHeading className="Sub_tittle" tittle="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__cormorent" style={{ color: "#ffff", marginTop: "0rem", fontSize: '26px' }}>
          A curated collection of moments, moods, and memories — captured
          through a creative lens. Each image tells its own story.
        </p>
        {/* <button type="button" className="custom__button">
          View More
          <span
            className="icecream-decor"
            style={{ backgroundImage: `url(${images.icecream})` }}
          />
          <span className="button-sprinkles">
            <span className="sprinkle pink"></span>
            <span className="sprinkle yellow"></span>
            <span className="sprinkle blue"></span>
          </span>
        </button> */}
      </div>

      {/* Image Gallery */}
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((img, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery-image-${index}`}
            >
              <img src={img} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
