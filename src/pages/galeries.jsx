import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Filter from "../components/Filter";
import ListGaleries from "../components/ListGaleries";

const Galeries = () => {
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getData() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}galeries`)
      .then((res) => {
        const fetchData = res?.data;
        setListData(fetchData);
        setIsLoading(false);
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
      <Hero data={true} />
      {/* <Filter /> */}
      <div className="max-w-[1240px] mx-auto px-4 py-6">
        <h1> All Galeries</h1>
        <p className="py-4"> The Latest Galery</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
          {listData.length === 0 || isLoading ? (
            <p>Tunggu Sebentar</p>
          ) : (
            listData?.map((item) => {
              return (
                <ListGaleries
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
      </div>
    </>
  );
};

export default Galeries;
