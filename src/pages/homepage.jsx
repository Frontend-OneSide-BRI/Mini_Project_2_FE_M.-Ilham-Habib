import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Hero />
      <Link to="/galeries">
        <Content />
      </Link>
      <Carousel />
    </>
  );
}

export default HomePage;
