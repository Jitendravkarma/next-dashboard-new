import Link from "next/link";
import React from "react";
import ImageSlider from "./ImageSlider";

const PageHeaderSection = (googlemapscraperProps) => {
  return (
    <>
      <h1 className="text-3xl lg:text-[58px] lg:pt-7 font-bold leading-tight mb-6 text-black-800 w-full">
        {googlemapscraperProps.title}
      </h1>
      <p className="mb-12 text-black text-base font-light text-paragraph">
        {googlemapscraperProps.description}
      </p>
      <Link
        href={googlemapscraperProps.buttonLink}
        className="text-xs lg:text-base font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-md py-4 lg:px-24 px-12 mb-3"
      >
        {googlemapscraperProps.buttonText}
      </Link>
      <ImageSlider
        leftImg={googlemapscraperProps.leftImg}
        rightImg={googlemapscraperProps.rightImg}
      />
    </>
  );
};

export default PageHeaderSection;
