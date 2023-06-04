import React, { useEffect, useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

function Carousel(props) {
  const [slide, setSlide] = useState(0);
  const [sliderData, setSliderData] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      const data = props?.dataSlider;
      setSliderData(data);
    }, 1000);
  }, []);

  function prevSlide() {
    setSlide(slide === sliderData?.length - 1 ? 0 : slide + 1);
  }
  function nextSlide() {
    setSlide(slide === 0 ? sliderData?.length - 1 : slide - 1);
  }
  return (
    <>
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
              <>
                <img
                  className="w-full rounded-md"
                  src={item?.url}
                  alt="/"
                  key={item?.id}
                />
                <p className="text-2xl text-center my-3 font-bold">
                  {item?.title}
                </p>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

export default Carousel;
