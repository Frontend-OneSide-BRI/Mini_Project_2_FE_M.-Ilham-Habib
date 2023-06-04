import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Carousel from "../components/Carousel";

function HomePage() {
  return (
    <>
      <Hero />
      <Content />
      <Carousel />
    </>
  );
}

export default HomePage;
