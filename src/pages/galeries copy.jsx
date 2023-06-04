import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const GaleriesCop = () => {
  return (
    <>
      <div className="w-4/5 lg:w-3/5  mx-auto mt-1 mb-10 text-center shadow-md bg-secondary">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-secondary sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              name="search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Karir"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-16 bottom-2.5 bg-primary hover:border hover:bg-white hover:text-primary hover:border-primary bg-s focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
            <span className="cursor-pointer text-white absolute right-2.5 bottom-2.5 bg-primary  hover:border hover:bg-white hover:text-primary hover:border-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              x
            </span>
          </div>
        </form>
      </div>

      {/* Filter */}
      <div className="container flex justify-evenly lg:justify-between">
        <div>
          <h4 className="text-2xl font-bold text-primary">Karir List</h4>
          <p className="text-sm text-primary">Postingan yang ada disini</p>
        </div>
        <div className="w-1/5">
          <button className="flex px-4 py-2 font-medium border rounded-md text-primary border-primary text-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
            {/* {show === false ? "Open Filter" : "Close Filter"} */}
          </button>
        </div>
      </div>
      {
        <div className="w-5/6 mx-auto container border border-primary py-3 rounded-md my-4">
          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Kota
              </label>
              {/* <input
                onChange={handleChangeFilter}
                type="text"
                name="company_city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              /> */}
              <select
                name="company_city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Tempat Perusahaan</option>
                {/* {filterState !== null && (
                  <>
                    {filterState.map((res) => {
                      return (
                        <>
                          <option defaultValue={`${res}`}>{res}</option>
                        </>
                      );
                    })}
                  </>
                )} */}
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nama Perusahaan
              </label>
              {/* <input
                onChange={handleChangeFilter}
                type="text"
                name="company_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              /> */}
              <select
                name="company_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Nama Perusahaan</option>
                {/* {filterCompany !== null && (
                  <>
                    {filterCompany.map((res) => {
                      return (
                        <>
                          <option defaultValue={`${res}`}>{res}</option>
                        </>
                      );
                    })}
                  </>
                )} */}
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Kontrak Job
              </label>
              {/* <input
                onChange={handleChangeFilter}
                type="number"
                name="salary_min"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              /> */}
              <select
                name="job_tenure"
                // onChange={handleChangeFilter}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Kontrak Job</option>
                {/* {filterJobStatus !== null && (
                  <>
                    {filterJobStatus.map((res) => {
                      return (
                        <>
                          <option defaultValue={`${res}`}>{res}</option>
                        </>
                      );
                    })}
                  </>
                )} */}
              </select>
            </div>

            <div className="flex flex-col">
              <button
                type="submit"
                className="flex justify-center text-white bg-primary hover:border hover:bg-white hover:text-primary hover:border-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>

              <span className="mt-2 text-white bg-primary hover:border hover:bg-white hover:text-primary hover:border-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Reset Filter
              </span>
            </div>
          </form>
        </div>
      }
      {/* Card */}

      <div className="px-10 justify-center xl:flex xl:flex-wrap items-center">
        <div>
          <Link to={`/detail/`}>
            <div
              title="klik untuk melihat detail"
              className="cursor-pointer zoom lg:ml-10 my-5 overflow-hidden bg-white shadow-md rounded-xl"
            >
              <div className="md:flex flex-wrap flex">
                <div className="p-8 w-full self-center lg:w-3/6 text-center lg:text-left ">
                  <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                    <p className="text-primary font-bold text-xl">
                      <p>test</p>
                    </p>
                  </div>
                  <p className="mt-2 text-slate-500">
                    <p>test</p>
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <p className="text-md font-bold opacity-75">
                      <p>test</p>
                    </p>
                    <span className="hidden lg:block w-2 h-2 rounded-full bg-primary mt-2.5 ml-2"></span>
                    <p className="hidden lg:block ml-2 opacity-75 font-medium">
                      <p>test</p>
                    </p>
                    <span className="hidden xl:block w-2 h-2 rounded-full bg-primary mt-2.5 ml-2"></span>
                    <p className="hidden xl:block ml-2 opacity-75 font-medium">
                      <p>test</p>
                    </p>
                  </div>
                </div>
                <div className="p-8 w-full self-center lg:w-3/6 text-center lg:text-right ">
                  <div className="flex justify-center lg:block">
                    <p className="opacity-75 ml-2 lg:mb-7 font-medium">
                      <p></p>test
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Galeries;
