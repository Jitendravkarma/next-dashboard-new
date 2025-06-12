import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_google_search } from "@/shared/data/seo-content/content";
import {
  facebookscraperdataget,
  FacebookscraperProps,
  facebookscraperstatus,
  FacebookScraperVideo,
  HowitworksFacebookscraper,
} from "@/shared/data/static-content/subPageContent";
import Link from "next/link";
import HowItWork from "@/shared/layout-components/public-comp/HowItWork";
import VideoSection from "@/shared/layout-components/public-comp/VideoSection";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";

export const metadata = seo_google_search;

const FacebookScraper = () => {
  return (
    <>
      <section className="py-14 lg:py-16 bg-gradient-to-b from-blue-200 to-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PageHeader {...FacebookscraperProps} />
          <div className="flex justify-evenly flex-wrap items-center gap-6 pt-12">
            {facebookscraperstatus.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  <p className="text-blue-500 text-3xl me-3">{item.icon}</p>
                  <p className="text-xl font-bold text-gray-800">
                    {item.value}
                  </p>
                </div>
                <p className="text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-soft flex justify-center items-center">
        <div className="w-full lg:w-[80%] text-center px-4 lg:px-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-16 flex flex-wrap  items-center justify-center gap-2">
            {/* <i className="ri-google-fill"></i> */}
            <span className="text-blue-500">What Type</span> of Data You Can Get
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white shadow-md rounded-md lg:px-8 px-2 py-10 col-span-1">
              {facebookscraperdataget
                .slice(0, Math.ceil(facebookscraperdataget.length / 3))
                .map((data, dataindex) => (
                  <div
                    key={dataindex}
                    className="flex items-center justify-between md:justify-start text-base text-black font-light gap-2 mb-2"
                  >
                    <div className="flex items-center gap-2">
                      <i className="ri-check-line text-blue-500"></i>
                      {data.keywords}
                    </div>
                    <div className="relative group">
                      <i className="ri-question-fill cursor-pointer text-gray-500"></i>
                      <div className="absolute  bottom-full mb-2 hidden group-hover:block w-52 -left-44 md:left-0 bg-gray-800 text-white text-sm cursor-pointer rounded px-2 py-1">
                        {data.tooltips}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="bg-white shadow-md rounded-md lg:px-8 px-2 py-10 col-span-1">
              {facebookscraperdataget
                .slice(
                  Math.ceil(facebookscraperdataget.length / 3),
                  Math.ceil((2 * facebookscraperdataget.length) / 3)
                )
                .map((data, dataindex) => (
                  <div
                    key={dataindex}
                    className="flex items-center justify-between md:justify-start text-base text-black font-light gap-2 mb-2"
                  >
                    <div className="flex items-center gap-2">
                      <i className="ri-check-line text-blue-500"></i>
                      {data.keywords}
                    </div>
                    <div className="relative group">
                      <i className="ri-question-fill cursor-pointer text-gray-500"></i>
                      <div className="absolute  bottom-full mb-2 hidden group-hover:block w-52 -left-44 md:left-0 bg-gray-800 text-white text-sm cursor-pointer rounded px-2 py-1">
                        {data.tooltips}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="bg-white shadow-md rounded-md lg:px-8 px-2 py-10 col-span-1">
              {facebookscraperdataget
                .slice(Math.ceil((2 * facebookscraperdataget.length) / 3))
                .map((data, dataindex) => (
                  <div
                    key={dataindex}
                    className="flex items-center justify-between md:justify-start text-base text-black font-light gap-2 mb-2"
                  >
                    <div className="flex items-center gap-2">
                      <i className="ri-check-line text-blue-500"></i>
                      {data.keywords}
                    </div>
                    <div className="relative group">
                      <i className="ri-question-fill cursor-pointer text-gray-500"></i>
                      <div className="absolute  bottom-full mb-2 hidden group-hover:block w-52 -left-44 md:left-0 bg-gray-800 text-white text-sm cursor-pointer rounded px-2 py-1">
                        {data.tooltips}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <Link
            href="/signup"
            className="text-xs lg:text-base font-medium bg-blue-500 hover:bg-blue-400 text-white rounded-md py-4 lg:px-24 px-12 mb-3"
          >
            Try For Free
          </Link>
        </div>
      </section>

      <HowItWork scraperData={HowitworksFacebookscraper} />
      <VideoSection {...FacebookScraperVideo} toolName={`facebook`} />
      <FaqSection />
      <WhyChooseUs />
    </>
  );
};

export default FacebookScraper;
