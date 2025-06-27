import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./FindUs.css";

const FindUs = () => (
  <div
    className="app__bg section__padding"
    id="contact"
    style={{
      backgroundImage: `url(${images.sp})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
    }}
  >
    <div className="app__wrapper app__wrapper--narrow">
      <div className="app__wrapper_info" style={{ marginLeft: "22rem",  marginTop: "18rem"}} >
        <p  className="Contact-Sub-title" style={{ marginTop: "0rem"}}>Contact</p>
        <SubHeading className="Contact-Sub" title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "0rem"}}>
          Find us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans" style={{fontFamily: "var(--font-base", fontSize: '23px'}}>
            1234 Elm Street Springfield, IL 62704 United States
          </p>
          <p
            className="p__cormorant"
            style={{ color: "#ffff", margin: "0.8rem 0", fontSize: "2rem" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans" style={{fontFamily: "var(--font-base", fontSize: '23px'}}>Mon-Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans" style={{fontFamily: "var(--font-base", fontSize: '23px'}}>Sat-Sun: 10:00 am - 03:00 am</p>
        </div>
      </div>
    </div>
  </div>
);

export default FindUs;
