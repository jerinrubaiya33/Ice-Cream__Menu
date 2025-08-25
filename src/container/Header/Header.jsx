import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../../constants/images";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/menu");
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading
          tittle="Chase the new flavour"
          className="subheading-center"
          style={{
            background: "#ff5f5f",
            marginLeft: "-32px",
            padding: "0rem 2rem",
            color: "white",
          }}
        />

        <h1 className="app__header-h1">Scoop to Sweet Indulgence</h1>

        <p className="app__header-p">
          Indulge in handcrafted perfection, where velvety ice cream meets
          irresistible toppings. Whether you crave nostalgia or bold new tastes,
          we serve happiness in every cone.
        </p>

        <button
          onClick={handleExploreClick}
          style={{
            marginTop: "-10px",
            background: "#ffffff",
            padding: "0.3rem 2.5rem",
            color: "#fc4444",
            marginLeft: "-0px",
            fontSize: "1.18rem",
            fontWeight: "900",
            position: "relative",
            cursor: "pointer",
          }}
          className="custom__button"
        >
          Explore Menu
          <span className="button-sprinkles">
            <span className="sprinkle pink"></span>
            <span className="sprinkle yellow"></span>
            <span className="sprinkle blue"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
