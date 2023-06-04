import React, { useState } from "react";

function Filter({ data, onFilter, countData }) {
  const [show, setShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(selectedCategory);
  };

  const categories = [];

  for (let i = 0; i < data.length; i++) {
    const category = data[i].category;

    if (!categories.includes(category)) {
      categories.push(category);
    }
  }

  return (
    <>
      <div className="max-w-[1240px] mx-auto px-4 py-6 flex justify-evenly lg:justify-between">
        <div>
          <h1>
            {" "}
            All Galeries <span>{`(${countData?.length})`}</span>
          </h1>
          <p className="py-4"> Find Your Inspiration</p>
        </div>
        <div className="w-1/5">
          <button
            onClick={() => setShow((prev) => !prev)}
            className="flex px-4 py-2 font-medium border rounded-md text-primary border-primary text-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
            {show === false ? "Open Filter" : "Close Filter"}
          </button>
        </div>
      </div>
      {show && (
        <div className="mx-auto max-w-[400px] border border-primary py-3 rounded-md my-4">
          <form>
            <div className="mb-6">
              <label className="block mx-7 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Filter Categories
              </label>

              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  sm:mx-5 dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-max"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">All</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <button
                onClick={handleSubmit}
                className=" mx-5 text-center font-medium border rounded-md text-primary border-primary text-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Filter;
