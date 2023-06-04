import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
// import Destinations from "./components/LatestGalery.jsx";
import Carousel from "./components/Carousel.jsx";
import Content from "./components/Content.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Carousel />
    </>
  );
}

export default App;
