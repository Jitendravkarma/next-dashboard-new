"use client"
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, useState } from "react";

const ImageSlider = ({leftImg, rightImg}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - container.left; // Get X position relative to container
    const percentage = Math.min(Math.max((offsetX / container.width) * 100, 0), 100);
    setSliderPosition(percentage); // Set slider position (0-100%)
  };

  return (
    <div
      className="my-5 relative border-2 border-gray-500 w-full h-[35vh] md:h-[60vh] xl:h-[600px] overflow-hidden bg-gray-200 rounded-md"
      onMouseMove={handleMouseMove}
    >
      {/* Left Image */}
      <img
        src={leftImg}
        alt="Left Image"
        className="absolute top-0 left-0 w-full h-full"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      />

      {/* Right Image */}
      <img
        src={rightImg}
        alt="Right Image"
        className="absolute top-0 left-0 w-full h-full"
        style={{
          clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
        }}
      />

      {/* Slider Button */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-gray-500 cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
       <div className="relative w-full h-full">
        <div className="absolute top-1/2 -translate-y-1/2 -left-6 border-2 border-gray-500 rounded-full p-3 px-4 text-gray-500 bg-white">
          <FontAwesomeIcon icon={faArrowsAltH}/>
        </div>
       </div> 
      </div>
    </div>
  );
};

export default memo(ImageSlider);
