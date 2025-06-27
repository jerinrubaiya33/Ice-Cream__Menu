import React, { useEffect, useState } from "react";
import "./Navbar.css";
import images from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIceCream } from "react-icons/io5";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".navbar__sparkles");
    const createSparkle = () => {
      const sparkle = document.createElement("span");
      sparkle.classList.add("sparkle");
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      const colors = ["#ffcd77", "#c5fdff", "#ffb1b1"];
      sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      sparkle.style.transform = `rotate(${Math.random() * 360}deg)`;
      sparkle.style.animationDuration = `${2 + Math.random() * 2}s`;
      container.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 10000);
    };
    const interval = setInterval(createSparkle, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="app__navbar">
      <div className="navbar__wave">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            stroke="#4444"
            strokeWidth="1"
            fill="#ff5f5f"
            fillOpacity="1"
            d="M0,160 C100,120 150,200 250,150 C350,120 400,220 500,150 C570,120 650,200 750,150 C850,80 900,200 1000,160 C1100,110 1150,190 1230,150 C1350,100 1400,180 1440,160 L1440,0 L0,0 Z"
          />
          <path
            className="wave-light-desktop"
            fill="#ffffff"
            fillOpacity="0.2"
            d="M0,90 C150,40 300,140 450,60 C600,-20 750,160 900,50 C1050,-30 1200,170 1440,70 L1440,0 L0,0 Z"
          />
          <path
            className="wave-light-mobile"
            fill="#ffffff"
            fillOpacity="0.2"
            d="M0,120 C150,80 300,150 450,100 C600,60 750,180 900,90 C1050,55 1200,170 1440,110 L1440,0 L0,0 Z"
          />
        </svg>
        <div className="navbar__sparkles"></div>
      </div>

      <div className="app__navbar-content">
        <div className="app__navbar-logo">
          <img src={images.Scoopology} alt="logo" />
        </div>

        <ul className="app__navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#awards">Awards</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="app__navbar-login">
          <a href="#login">Log In / Register</a>
          <div />
          <a href="/">Book Table</a>
        </div>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            className="hamburger-icon"
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay">
              <IoIceCream
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
                <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
