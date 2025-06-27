import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    {/* Background Layer */}
    <div className="app__footer-background" />

    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1
          className="app__footer-headtext"
          style={{ fontSize: "2.6rem", color: "white" }}
        >
          Contact Us
        </h1>
        <p
          className="p__cormorent"
          style={{ fontSize: "1.5rem", color: "white", marginTop: '1rem' }}
        >
          1234 Elm Street Springfield, IL 62704 United States
        </p>
        <p
          className="p__cormorent"
          style={{ fontSize: "1.5rem", color: "white" }}
        >
          +880 1618-758-208
        </p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.Scoopology} alt="footer-logo" />
        <p
          className="p__cormorent-p"
          style={{
            marginTop: "-215px",
            marginLeft: "35px",
            fontSize: "1.5rem",
            color: "#ffff",
          }}
        >
          "Your go-to platform for all things scoop!"{" "}
        </p>
        <p
          className="p__cormorent-follow"
          style={{
            marginTop: "15px",
            marginLeft: "35px",
            fontSize: "1.6rem",
            color: "#ffff",
          }}
        >
          Follow us on:
        </p>
        <div
          className="app__footer-links_icons"
          style={{
            marginTop: "15px",
            marginLeft: "37px",
            fontSize: "1.8rem",
            color: "#ffff",
            margin: '0.8rem'
          }}
        >
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext" style={{ fontSize: "2.6rem" }}>
          Working Hours
        </h1>
        <p className="p__cormorent"> Monday - Friday:</p>
        <p className="p__cormorent">08:00 am-10:00 am </p>
        <p className="p__cormorent"> Saturday - Sunday</p>
        <p className="p__cormorent">07:00 am-11:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p
        className="p__cormorent"
        style={{ color: "white", fontSize: "1.4rem" }}
      >
        2025 Scoopplogy. All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
