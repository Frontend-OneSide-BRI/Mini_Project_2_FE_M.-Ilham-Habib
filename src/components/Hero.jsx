import React from "react";
import video from "../assets/video.mp4";
import { AiOutlineSearch } from "react-icons/ai";

function Hero({ data, value, onChange }) {
  const viewInGalery = data;
  return (
    <div className="w-full h-screen relative z-20">
      <video
        className="w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>Discover With Us</h1>
        <h2 className="py-4">Top 1% Locations Worldwide</h2>
        {viewInGalery ? (
          <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
            <div>
              <input
                onChange={onChange}
                value={value}
                className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none"
                type="text"
                placeholder="Search Destinations"
              />
            </div>
            <div>
              <button>
                <AiOutlineSearch
                  size={20}
                  className="icon"
                  style={{ color: "#fff" }}
                />
              </button>
            </div>
          </form>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Hero;
