import React from "react";

function Filter() {
  const show = true;
  return (
    <>
      {/* Filter */}
      <div className="container flex justify-evenly lg:justify-between">
        <div>
          <h4 className="text-2xl font-bold text-primary">Karir List</h4>
          {/* <p className="text-sm text-primary">
            {data !== null && data.length} Postingan yang ada disini
          </p> */}
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
      {show && (
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
              {/* <select name="company_city" onChange={handleChangeFilter} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Tempat Perusahaan</option>
            {filterState !== null && (
              <>
              {filterState.map((res)=>{
                return(
                  <>
                   <option defaultValue={`${res }`}>{res}</option>
                  </>
                )
              })}
              </>
            )}
          </select> */}
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
              {/* <select
                name="company_name"
                onChange={handleChangeFilter}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Nama Perusahaan</option>
                {filterCompany !== null && (
                  <>
                    {filterCompany.map((res) => {
                      return (
                        <>
                          <option defaultValue={`${res}`}>{res}</option>
                        </>
                      );
                    })}
                  </>
                )}
              </select> */}
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
              {/* <select
                name="job_tenure"
                onChange={handleChangeFilter}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Kontrak Job</option>
                {filterJobStatus !== null && (
                  <>
                    {filterJobStatus.map((res) => {
                      return (
                        <>
                          <option defaultValue={`${res}`}>{res}</option>
                        </>
                      );
                    })}
                  </>
                )}
              </select> */}
            </div>

            <div className="flex flex-col">
              <button
                type="submit"
                className="flex justify-center text-white bg-primary hover:border hover:bg-white hover:text-primary hover:border-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>

              <span
                // onClick={() => setDataStatus(true)}
                className="mt-2 text-white bg-primary hover:border hover:bg-white hover:text-primary hover:border-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Reset Filter
              </span>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Filter;
