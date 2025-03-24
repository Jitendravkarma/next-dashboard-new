"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components
import { Navigation } from "swiper/modules"; // Swiper module for navigation
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Swiper navigation styles
import FreeTrialSection from "./FreeTrial";
import { Businessgrowusecases } from "@/shared/data/static-content/public";

const BusinessGrowSection = () => {
  return (
    <>
      <section className="pt-[62px] pb-[145px] bg-gray-50 grow-business relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-16">
            <span className="text-blue-500">Connect & </span> Grow Your Business Fast
          </h2>
          <div className="slider-container relative">
            <div className="relative">
              {/* Swiper Slider */}
              <Swiper
                modules={[Navigation]} // Enable Navigation module
                navigation={{
                  nextEl: ".swiper-button-prev", // Target custom next button
                  prevEl: ".swiper-button-next", // Target custom previous button
                }}
                spaceBetween={20} // Space between slides
                slidesPerView={1} // Default to 1 slide per view
                breakpoints={{
                  640: { slidesPerView: 1 }, // Mobile view: 1 slide
                  768: { slidesPerView: 2 }, // Tablet view: 2 slides
                  992: { slidesPerView: 4 }, // Desktop view: 3 slides
                }}
              >
                {/* Slide Items */}
                {Businessgrowusecases.map((useCase, index) => (
                  <SwiperSlide key={index}>
                    <div className="card bg-white p-6 card-box text-center flex flex-col items-center justify-center">
                    
                      <div
                        className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full"
                        style={{
                          backgroundColor: useCase.backgroundColor, // Dynamic background color
                        }}
                      >
                        <div style={{ color: useCase.iconColor, fontSize: "1.5rem" }}>{useCase.icon}</div>
                      </div>
                    
                      <h4 className="text-base text-black font-semibold">{useCase.title}</h4>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 flex gap-4 items-center">
                {/* Previous Button */}
                <button
                  className="swiper-button-prev bg-white p-3 rounded-full shadow-md hover:bg-gray-100 border border-gray-200 rotate-180"
                  aria-label="Previous"
                >
                  {/* <i className="ri-arrow-left-line"></i> */}
                </button>

                {/* Next Button */}
                <button
                  className="swiper-button-next bg-white p-3 rounded-full shadow-md hover:bg-gray-100 border border-gray-200 rotate-180"
                  aria-label="Next"
                >
                  {/* <i className="ri-arrow-right-line"></i> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FreeTrialSection/>
    </>
    
  );
};

export default BusinessGrowSection;
