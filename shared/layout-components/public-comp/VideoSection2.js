"use client";
import React from "react";

export const VideoSection2 = ({ videoUrl, buttonText, toolName }) => {
  return (
    <div className="w-full relative pb-[56.25%] h-0 overflow-hidden rounded-md shadow-md">
      {/* 16:9 aspect ratio (56.25% = 9/16 * 100) */}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={videoUrl}
        title={toolName || "Feature Video"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Optional CTA Button */}
      {/* {buttonText && (
        <div className="text-center mt-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            {buttonText}
          </button>
        </div>
      )} */}
    </div>
  );
};
