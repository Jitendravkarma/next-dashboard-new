import Link from "next/link";
import React from "react";

const OurExpertise = () => {
  return (
    <section className="py-14 lg:py-20 bg-liner-gradient">
      <div className="w-full mx-auto px-4 lg:px-16">
        <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-8">
          Your Goals, Our Expertise.
        </h2>
        <div className="flex justify-center">
          {" "}
          {/* This centers the button */}
          <Link
            href="/google-map-scrape" // Update this with the correct path or URL
            className="text-base font-medium bg-white text-blue-400 hover:bg-blue-500 hover:text-white border-2 border-blue-400 hover:border-white rounded-md py-4 lg:px-24 px-12 my-5 inline-block"
          >
            Try Free Trial
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
