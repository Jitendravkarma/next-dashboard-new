"use client";
import React, { memo, useState } from "react";
import Image from "next/image";

const ImageSlider = ({ leftImg, rightImg }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - container.left; // Get X position relative to container
    const percentage = Math.min(
      Math.max((offsetX / container.width) * 100, 0),
      100
    );
    setSliderPosition(percentage); // Set slider position (0-100%)
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      const container = e.currentTarget.getBoundingClientRect();
      const offsetX = e.touches[0].clientX - container.left; // Get X position relative to container
      const percentage = Math.min(
        Math.max((offsetX / container.width) * 100, 0),
        100
      );
      setSliderPosition(percentage); // Set slider position (0-100%)
    }
  };

  return (
    <>
      <div
        className="mt-[70px] relative mx-auto w-[80%] lg:w-full sm:h-[30vh] md:h-[40vh] lg:h-[60vh] xl:h-[70vh] overflow-hidden box-shadow rounded-md"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Left Image */}
        <Image
          src={leftImg}
          alt="Left Image"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
          width={500}
          height={500}
        />

        {/* Right Image */}
        <Image
          src={rightImg}
          alt="Right Image"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
          }}
          width={500}
          height={500}
        />

        {/* Slider Button */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white-500 cursor-col-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 w-14 h-14 flex items-center justify-center rounded-full text-white text-lg bg-blue-500 hover:bg-blue-600 cursor-pointer">
              <i className="ri-expand-left-right-line text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ImageSlider);
