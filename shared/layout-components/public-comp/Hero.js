"use client"
import React, { useEffect, useState } from "react";
import { HeroContent } from "@/shared/data/static-content/public";
import PrimaryButton from "./PrimaryButton";


const HeroSection = () => {
  const [currentText, setCurrentText] = useState(HeroContent[0].text);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % HeroContent.length);
        setFadeClass("fade-in");
      }, 1000); // Match CSS animation duration
    }, 4000); // 3 seconds display + 1 second fade-out

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  useEffect(() => {
    setCurrentText(HeroContent[index].text);
  }, [index]);

  return (
    <section className="max-w-7xl mx-auto py-14 lg:py-16" data-aos="fade-up">
      {/* Text Content */}
      <div className="w-full text-center px-4 lg:px-16">
        <h1
          className={`text-2xl lg:text-[58px] pt-7 font-bold leading-tight mb-6 text-black-800 w-full ${fadeClass}`}
        >
          {/* Render dynamic content with HTML safely */}
          <div>{currentText}</div>
        </h1>
        <p className="mb-8 text-black text-base font-light">
          Increase Sales with Our Scraper.
        </p>
        <PrimaryButton/>
      </div>

      {/* Full-Width Image */}
      <div className="w-[80%] flex items-center justify-center pt-10 mx-auto">
        <img
          src="/assets/img/header-image.png"
          className="rounded-md shadow-md"
          alt="Header Image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
