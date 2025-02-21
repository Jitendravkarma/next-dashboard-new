import React, { memo } from "react";
import PropTypes from "prop-types";
import PrimaryButton from "./PrimaryButton";

const Hero = () => {
    const HomeHero = [
        {
          type: "text",
          content: <span style={{lineHeight:'3.5rem'}}>Enhance Your Marketing with, <br /> Web Crawler Spider !</span>,
          className: "text-4xl md:text-5xl text-white font-bold",
        },
        {
          type: "hr",
          className: "border-t border-gray-300 my-4",
        },
        {
          type: "text",
          content: "",
          className: "text-3xl text-white font-normal inline",
        },
        {
          type: "text",
          content: "Increase Sales with Our Scraper.",
          className: "font-bold text-3xl text-white font-bold inline",
        },
          {
          type: "hr",
          className: "border-t border-gray-300 my-4",
        },
        {
          type: "text",
          content: "Try it out now",
          className: "text-xl text-green-400 font-light pt-4",
        },
        {
          type: "text",
          content: "Grow Your Business With Us!",
          className: "text-white font-light pb-3",
        },
        {
          type: "link",
          pageLink: "https://codecanyon.net/item/google-map-scraper-pro/25283251",
          content: "Buy Now",
          className: "bg-green-400",
        },
        {
          type: "link",
          pageLink: "/signin",
          content: "Try Now",
          className: "border border-green-400 text-green-400",
        },
    ]

  return (
    <>
      <section className={"bg-[#05177f] pt-28 md:pt-32 mt-[-80px] pb-20"}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4" id="hero">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 group">
            <div className="w-8/12 sm:w-1/2 lg:w-9/12 mx-auto">
              <img
                id="hero-img"
                src={`/assets/img/hero.png`}
                className="w-full h-auto group-hover:scale-105 duration-700"
                alt="shape"
              />
            </div>
            {/* Column 1 Content */}
            <div>
              {HomeHero &&
                HomeHero.map((array, index) => {
                  if (array.type === "text") {
                    return (
                      <p key={index} className={array.className}>
                        {array.content}
                      </p>
                    );
                  } else if (array.type === "hr") {
                    return <hr key={index} className={array.className} />;
                  }
                  return null; // Handle other types if needed or skip invalid types
                })}

              <PrimaryButton/>
            </div>
          </div>
          
          
        </div>
      </section>
    </>
  );
};

Hero.propTypes = {
  propsData: PropTypes.array.isRequired, // Define the prop as an array and mark it as required
};

export default memo(Hero);
