import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_phone_veri, seo_real_estate } from "@/shared/data/seo-content/content";
import Link from "next/link";
import HowItWork from "@/shared/layout-components/public-comp/HowItWork";
import VideoSection from "@/shared/layout-components/public-comp/VideoSection";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_phone_veri;

const HeaderProp = {
  title: (
    <>
      Phone Number Verification
    </>
  ),
  description:
    `Verify phone numbers and retrieve available telecom details, including mobile operator, carrier name, state, country, and location information. Validate phone number data to improve lead quality and organize more reliable business contact lists.`,
  buttonText: `Try For Free`,
  buttonLink: `/signup`,
  leftImg: `/assets/img/slider-images/phone_verification.png`,
  rightImg: `/assets/img/slider-images/gscreen2.png`,
}

const dataTypes = [
  {
    tooltips: `Check phone numbers to determine whether they follow a valid numbering format.`,
    keywords: `Phone Number, Number Validation, Country Code, Number Format`,
  },
  {
    tooltips: `Identify the telecom operator or carrier associated with a phone number when lookup data is available.`,
    keywords: `Operator Name, Telecom Carrier, Network Provider`,
  },
  {
    tooltips: `Retrieve available geographic information associated with a phone number.`,
    keywords: `State, Country, Region, Location`,
  },
  {
    tooltips: `Organize phone number verification results for cleaner and more reliable contact databases.`,
    keywords: `Verified Numbers, Invalid Numbers, Contact List Cleaning`,
  },
];

const noOfRecords = [
  {
    icon: <i className={`ri-phone-line`}></i>,
    value: `Fast`,
    label: `Phone Number Checks`,
  },
  {
    icon: <i className={`ri-signal-tower-line`}></i>,
    value: `Available`,
    label: `Operator & Carrier Details`,
  },
  {
    icon: <i className={`ri-map-pin-line`}></i>,
    value: `Available`,
    label: `State & Country Details`,
  },
  {
    icon: <i className={`ri-checkbox-circle-line`}></i>,
    value: `Simple`,
    label: `Number Validation`,
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
      subheading: `Upload Your Phone Number CSV`,
      paragraph: `Upload a CSV file containing the phone numbers you want to verify. Ensure your file includes a column with phone numbers and country codes where required.`,
      description: `Upload a CSV file containing the phone numbers you want to verify. Ensure your file includes a column with phone numbers and country codes where required.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Upload Your Phone Number List`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 1`,
      presubtitle: `Upload CSV`,
    },
    {
      subheading: `Validate Phone Number Format`,
      paragraph: `Check number formatting and country codes to identify numbers that meet the supported numbering rules.`,
      description: `Check number formatting and country codes to identify numbers that meet the supported numbering rules.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Check Number Validity`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 2`,
      presubtitle: `Validate`,
    },
    {
      subheading: `Identify Carrier Information`,
      paragraph: `Retrieve available telecom operator or carrier information associated with each phone number.`,
      description: `Retrieve available telecom operator or carrier information associated with each phone number.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Find Network Details`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 3`,
      presubtitle: `Carrier`,
    },
    {
      subheading: `View Geographic Details`,
      paragraph: `Review available state, country, and regional information associated with the phone number.`,
      description: `Review available state, country, and regional information associated with the phone number.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `View Location Information`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 4`,
      presubtitle: `Location`,
    },
    {
      subheading: `Review and Export Results`,
      paragraph: `Review the verification results and organize phone numbers with their available carrier and geographic details.`,
      description: `Review the verification results and organize phone numbers with their available carrier and geographic details.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Export Verified Data`,
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
      <VideoSection {...videoSection} toolName={`bing`} />
      <FaqSection />
      <HorizontalAds/>
      <WhyChooseUs />
    </>
  );
};

export default JobPortal;
