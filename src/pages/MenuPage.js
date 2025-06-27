import React from "react";
import { Navbar } from "../components";
import { SpecialMenu, Map, Footer } from "../container";
import "./MenuPage.css"; // Create this file for styles

const MenuPage = () => {
  return (
    <>
      <Navbar />
      {/* Hero Banner */}
      <div className="menu__hero">
        <h2 className="menu__hero-title">This is the Menu Page</h2>
      </div>

      <SpecialMenu />
      <Map />
      <Footer />
    </>
  );
};

export default MenuPage;
