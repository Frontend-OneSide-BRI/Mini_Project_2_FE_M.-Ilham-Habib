import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Filter from "../components/Filter";
import ListGaleries from "../components/ListGaleries";

const Galeries = () => {
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  function handleFilter(category) {
    if (category === "") {
      setFilteredData(listData);
    } else {
      const filtered = listData.filter((item) => item.category === category);
      setFilteredData(filtered);
    }
  }

  function handleSearch(e) {
    const inputValue = e.target.value;
    setSearch(inputValue);

    const filtered = listData.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filtered);
  }

  function getData() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}galeries`)
      .then((res) => {
        const fetchData = res?.data;
        setListData(fetchData);
        setFilteredData(fetchData);
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
      <Hero data={true} value={search} onChange={handleSearch} />
      <Filter
        data={listData}
        onFilter={handleFilter}
        countData={filteredData}
      />
      <div className="max-w-[1240px] mx-auto px-4 py-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
          {listData.length === 0 || isLoading ? (
            <p>Tunggu Sebentar</p>
          ) : filteredData.length === 0 ? (
            <p className="text-2xl py-10">Tidak ada data</p>
          ) : (
            filteredData?.map((item) => {
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
