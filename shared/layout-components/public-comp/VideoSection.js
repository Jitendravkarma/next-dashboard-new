import React from "react";
import Link from "next/link";

const VideoSection = ({ heading, videoUrl, buttonText, buttonLink }) => {
  return (
    <section className="py-14 lg:py-16 bg-soft">
      <div className="max-w-7xl lg:w-[70%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dynamic Heading */}
        <h2
          className="text-2xl lg:text-3xl font-bold text-center mb-16 flex items-center justify-center gap-2"
          dangerouslySetInnerHTML={{ __html: heading }}
        />

        {/* Dynamic Video */}
        <div className="w-full aspect-video rounded-md border-2 border-blue-500 border-dashed p-1">
          <iframe
            className="w-full h-full rounded-md"
            src={videoUrl} // Dynamic video URL
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Centered Dynamic Button */}
        <div className="flex justify-center mt-12">
          {" "}
          {/* Centering the button */}
          <Link
            href={buttonLink} // Dynamic button link
            className="text-xs lg:text-base font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-md py-4 lg:px-24 px-12 mb-3 inline-block"
          >
            {buttonText} {/* Dynamic button text */}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
