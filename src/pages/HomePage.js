import React from "react";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  Map,
} from "../container";
import { Navbar } from "../components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <SpecialMenu />
      <Chef />
      <AboutUs />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Map />
      <Footer />
    </>
  );
};

export default HomePage;
