// import React from 'react';
// import {AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Map } from './container';
// import { Navbar } from './components';
// import './App.css';

// const App = () => (
//   <div>
//     <Navbar />
//     <Header />
//     <SpecialMenu />
//     <Chef />
//     <AboutUs />
//     <Intro />
//     <Laurels />
//     <Gallery />
//     <FindUs />
//     <Map />
//     <Footer />
//   </div>
// );

// export default App;







import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  );
};

export default App;
