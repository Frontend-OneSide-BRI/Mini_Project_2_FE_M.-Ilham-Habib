import React, { useEffect, useState } from "react";

import boraBora from "../assets/borabora.jpg";
import boraBora2 from "../assets/borabora2.jpg";
import keyWest from "../assets/keywest.jpg";
import malDivest from "../assets/maldives.jpg";
import malDivest2 from "../assets/maldives2.jpg";
import ListCategory from "./ListCategory";
import axios from "axios";
import LatestGalery from "./LatestGalery";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

function Content() {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(true);

  function getData() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}galeries`)
      .then((res) => {
        const fetchData = res?.data;
        const lastEightData = fetchData.slice(-8);
        setData(lastEightData);
        setIsloading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Link to="/galeries">
        <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
          <h1> All Galeries</h1>
          <p className="py-4"> The Latest Galery</p>
          <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
            <img
              src={boraBora}
              className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
              alt="image1"
            />
            {data?.length === 0 || isloading ? (
              <p>Tunggu Sebentar</p>
            ) : (
              <LatestGalery data={data} />
            )}
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 py-6 grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
          {data.length === 0 || isloading ? (
            <p>Tunggu Sebentar</p>
          ) : (
            data?.map((item) => {
              return (
                <ListCategory
                  title={item?.title}
                  desc={item?.desc}
                  url={item?.url}
                  category={item?.category}
                  id={item?.id}
                  key={item?.id}
                />
              );
            })
          )}
        </div>
      </Link>

      <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
        {data?.length === 0 || isloading ? (
          <p>Tunggu Sebentar</p>
        ) : (
          <Carousel dataSlider={data} />
        )}
      </div>
    </>
  );
}

export default Content;
