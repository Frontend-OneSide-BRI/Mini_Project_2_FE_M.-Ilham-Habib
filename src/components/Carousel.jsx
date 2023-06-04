import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

function Carousel() {
  const sliderData = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1609672559667-6a6b80c47edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=779&q=80",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1583119912267-cc97c911e416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1610529362134-799735c6cbf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
  ];
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  function prevSlide() {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  }
  function nextSlide() {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  }

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-black cursor-pointer left-8 sm:left-4 z-10"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-black cursor-pointer right-8 sm:right-4 z-10"
      />
      {sliderData?.map((item, index) => {
        return (
          <div
            className={
              index === slide
                ? "opacity-100 transform duration-500 inset-y-full group-hover:-inset-y-0"
                : "opacity-0 transform duration-500 inset-y-full group-hover:-inset-y-0"
            }
          >
            {index === slide && (
              <img className="w-full rounded-md" src={item?.url} alt="/" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
