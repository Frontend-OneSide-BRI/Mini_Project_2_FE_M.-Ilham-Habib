import React, { useEffect, useState } from "react";
import boraBora from "../assets/borabora.jpg";
import boraBora2 from "../assets/borabora2.jpg";
import keyWest from "../assets/keywest.jpg";
import malDivest from "../assets/maldives.jpg";
import malDivest2 from "../assets/maldives2.jpg";

function LatestGalery(props) {
  const data = props?.data;
  return data.slice(0, 4)?.map((item) => {
    return (
      <img
        src={item?.url}
        className="w-full h-full object-cover"
        alt={item?.title}
        key={item?.id}
      />
    );
  });
}

export default LatestGalery;
