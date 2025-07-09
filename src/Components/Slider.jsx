import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import black from "../Images/black.png";
import gray from "../Images/gray.png";
import orange from "../Images/orange.png";
import white from "../Images/white.png";
import yellow from "../Images/yellow.png";

const images = [orange, yellow, white, black, gray];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < images.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="w-full py-10 flex flex-col items-center justify-center bg-white">
      <div className="relative w-full max-w-6xl overflow-hidden h-[400px]">
        <div
          className="flex transition-transform duration-700 ease-in-out h-[350px]"
          style={{
            transform: `translateX(calc(-${activeIndex} * 33.33% + 33.33%))`,
          }}
        >
          {images.map((img, index) => {
            const isCenter = index === activeIndex;
            return (
              <div
                key={index}
                className={`w-1/3 flex-shrink-0 flex justify-center items-center transition-all duration-500 ${
                  isCenter ? "scale-110 z-20" : "scale-75  z-10"
                }`}
              >
                <div className="bg-[#F5F5F5] rounded-full p-5">
                  <img src={img} alt={`watch-${index}`} className="w-[280px]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrows */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-4 ">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`p-2 rounded-full ${
              activeIndex === 0
                ? "bg-gray-100 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === images.length - 1}
            className={`p-2 rounded-full ${
              activeIndex === images.length - 1
                ? "bg-gray-100 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
