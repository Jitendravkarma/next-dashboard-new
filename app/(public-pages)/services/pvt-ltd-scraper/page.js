import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_pvt_ltd, seo_real_estate } from "@/shared/data/seo-content/content";
import Link from "next/link";
import HowItWork from "@/shared/layout-components/public-comp/HowItWork";
import VideoSection from "@/shared/layout-components/public-comp/VideoSection";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_pvt_ltd;

const HeaderProp = {
  title: (
    <>
      Pvt Ltd Company Scraper
    </>
  ),
  description:
    `Extract private limited companies registered in your selected Indian state within a specified date range. Choose a state, start date, and end date to discover matching company records, including company names, CIN, incorporation dates, phone numbers, email addresses, websites, social media profiles, registered addresses, director details, and other available corporate information.`,
  buttonText: `Try For Free`,
  buttonLink: `/signup`,
  leftImg: `/assets/img/slider-images/pvt_ltd_scraper.png`,
  rightImg: `/assets/img/slider-images/gscreen2.png`,
}

const dataTypes = [
  {
    tooltips: `Find private limited companies registered in your selected state during your chosen date range.`,
    keywords: `State, Start Date, End Date, Company Registration, Incorporation Date`,
  },
  {
    tooltips: `Extract available corporate registration details to identify and research registered private limited companies.`,
    keywords: `Company Name, CIN, Company Type, Registration Status, Incorporation Date`,
  },
  {
    tooltips: `Collect available business contact information to connect with registered companies and potential clients.`,
    keywords: `Phone Number, Email Address, Website, Contact Details`,
  },
  {
    tooltips: `Discover company websites and publicly available social media profiles for business research and prospecting.`,
    keywords: `Website URL, LinkedIn, Facebook, Instagram, X, Social Media Links`,
  },
  {
    tooltips: `Gather available company location, director, and industry details to better understand each registered business.`,
    keywords: `Registered Address, City, State, PIN Code, Director Names, DIN, Industry, Business Activity`,
  },
];

const noOfRecords = [
  {
    icon: <i className={`ri-building-4-line`}></i>,
    value: `Multiple`,
    label: `Registered Pvt Ltd Companies`,
  },
  {
    icon: <i className={`ri-calendar-check-line`}></i>,
    value: `Date-Based`,
    label: `Company Registration Records`,
  },
  {
    icon: <i className={`ri-contacts-line`}></i>,
    value: `Available`,
    label: `Phone & Email Details`,
  },
  {
    icon: <i className={`ri-global-line`}></i>,
    value: `Available`,
    label: `Websites & Social Profiles`,
  },
];

const videoSection = {
  heading: `<span class='text-blue-500'>Watch a</span> Demo`,
  videoUrl: `FzhB9wRwZlA?si=BHbQJ6if3r1aMsOM`,
  buttonText: `Get Started`,
  buttonLink: `/signup`,
};

const HowItWorks = {
  mainheading: `<span class='text-blue-500'>How It </span>Works?`,
  scrapers: [
    {
      subheading: `Select Your State`,
      paragraph: `Choose the Indian state for which you want to find registered private limited companies. The scraper will use your selected state to filter the available company records.`,
      description: `Choose the Indian state for which you want to find registered private limited companies. The scraper will use your selected state to filter the available company records.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Choose Your Target State`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 1`,
      presubtitle: `Select State`,
    },
    {
      subheading: `Choose Your Registration Date Range`,
      paragraph: `Select a start date and an end date to define the registration period. The scraper will find matching private limited companies registered within your selected date range, subject to available records.`,
      description: `Select a start date and an end date to define the registration period. The scraper will find matching private limited companies registered within your selected date range, subject to available records.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Set Start & End Dates`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 2`,
      presubtitle: `Select Dates`,
    },
    {
      subheading: `Extract Registered Company Details`,
      paragraph: `Retrieve matching company records, including company names, CIN, incorporation dates, registration status, registered addresses, director details, and other available corporate information.`,
      description: `Retrieve matching company records, including company names, CIN, incorporation dates, registration status, registered addresses, director details, and other available corporate information.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Collect Company Records`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 3`,
      presubtitle: `Extract`,
    },
    {
      subheading: `Find Company Contact Information`,
      paragraph: `Discover available phone numbers, email addresses, websites, social media profiles, and other business contact details to support your B2B lead generation activities.`,
      description: `Discover available phone numbers, email addresses, websites, social media profiles, and other business contact details to support your B2B lead generation activities.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Get Contact & Social Details`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 4`,
      presubtitle: `Contact Info`,
    },
    {
      subheading: `Review & Export Company Leads`,
      paragraph: `Review the extracted company records and organize available registration and contact information. Export your results for sales prospecting, B2B marketing, and business research.`,
      description: `Review the extracted company records and organize available registration and contact information. Export your results for sales prospecting, B2B marketing, and business research.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Download Company Data`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 5`,
      presubtitle: `Export`,
    },
  ],
};

const JobPortal = () => {
  return (
    <>
      <section className="py-14 lg:py-16 bg-gradient-to-b from-blue-200 to-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PageHeader {...HeaderProp} />
          <div className="flex justify-evenly flex-wrap items-center gap-6 pt-12">
            {noOfRecords.map((item, index) => (
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
          <HorizontalAds/>
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
              {dataTypes
                .slice(0, Math.ceil(dataTypes.length / 3))
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
              {dataTypes
                .slice(
                  Math.ceil(dataTypes.length / 3),
                  Math.ceil((2 * dataTypes.length) / 3)
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
              {dataTypes
                .slice(Math.ceil((2 * dataTypes.length) / 3))
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

      <HowItWork scraperData={HowItWorks} />
      <VideoSection {...videoSection} toolName={`pvt_ltd`} />
      <FaqSection />
      <HorizontalAds/>
      <WhyChooseUs />
    </>
  );
};

export default JobPortal;
