import React from "react";
import boraBora from "../assets/borabora.jpg";
import boraBora2 from "../assets/borabora2.jpg";
import keyWest from "../assets/keywest.jpg";
import malDivest from "../assets/maldives.jpg";
import malDivest2 from "../assets/maldives2.jpg";

function Destinations() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1> All Galeries</h1>
      <p className="py-4"> The best galery</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          src={boraBora}
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          alt="image1"
        />
        <img
          src={boraBora2}
          className="w-full h-full object-cover"
          alt="image2"
        />
        <img
          src={malDivest}
          className="w-full h-full object-cover"
          alt="image3"
        />
        <img
          src={malDivest2}
          className="w-full h-full object-cover"
          alt="image4"
        />
        <img
          src={keyWest}
          className="w-full h-full object-cover"
          alt="image5"
        />
      </div>
    </div>
  );
}

export default Destinations;
