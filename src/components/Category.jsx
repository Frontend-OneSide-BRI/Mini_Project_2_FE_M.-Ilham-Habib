import React from "react";

import boraBora from "../assets/borabora.jpg";
import boraBora2 from "../assets/borabora2.jpg";
import keyWest from "../assets/keywest.jpg";
import malDivest from "../assets/maldives.jpg";
import malDivest2 from "../assets/maldives2.jpg";
import ListCategory from "./ListCategory";

function Category() {
  const listArr = [
    {
      id: 1,
      bg: boraBora,
      text: "bora bora",
    },
    {
      id: 2,
      bg: boraBora2,
      text: "bora bora2",
    },
    {
      id: 3,
      bg: keyWest,
      text: "keywest",
    },
    {
      id: 4,
      bg: malDivest,
      text: "maldivest",
    },
    {
      id: 1,
      bg: malDivest2,
      text: "maldivest2",
    },
  ];
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {listArr?.map((item) => {
        return <ListCategory bg={item?.bg} text={item?.text} />;
      })}
    </div>
  );
}

export default Category;
