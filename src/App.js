import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Destinations from "./components/Destination.jsx";
import Category from "./components/Category.jsx";
import Carousel from "./components/Carousel.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Category />
      <Carousel />
    </>
  );
}

export default App;
