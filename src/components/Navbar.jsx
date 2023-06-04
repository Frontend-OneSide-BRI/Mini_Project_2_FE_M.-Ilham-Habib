import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  function handleNav() {
    setNav(!nav);
    setLogo(!logo);
  }
  return (
    <div className="flex justify-between items-center h-20 px-4 absolute z-30 lg:text-white text-black  w-full lg:mix-blend-difference">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          Galery of Art
        </h1>
      </div>
      <ul className="hidden md:flex">
        <Link to="/">
          <li>Homepage</li>
        </Link>
        <Link to="/galeries">
          <li>Galery</li>
        </Link>
      </ul>
      <div className="hidden md:flex">Mini Project 2</div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-30">
        {nav ? (
          <AiOutlineClose size={20} className="text-black" />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile Navbar dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>Galery of Art</h1>
          <Link to="/">
            <li>Homepage</li>
          </Link>
          <Link to="/galeries">
            <li>Galery</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
