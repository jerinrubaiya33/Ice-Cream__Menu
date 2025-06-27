import React from "react";
import images from "../../constants/images";
const SubHeading = ({ tittle, className, style }) => (
  <div
    className={className}
    style={{ marginBottom: "1rem", ...style }} // merge passed styles here
  >
    <p
      className="p__cormorant-sub"
      style={{
        color: "white",
        fontSize: "24px",
      }}
    >
      {tittle}
    </p>
    <img
      src={images.spoon}
      alt="spoon"
      className="spoon__img"
      style={{
        width: "70px",
        filter: "brightness(0) invert(1)", // makes image pure white
        marginRight: "255px",
        marginBottom: "10px",
      }}
    />
  </div>
);

export default SubHeading;
