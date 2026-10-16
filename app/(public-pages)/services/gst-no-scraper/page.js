import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_gst_no } from "@/shared/data/seo-content/content";
import Link from "next/link";
import HowItWork from "@/shared/layout-components/public-comp/HowItWork";
import VideoSection from "@/shared/layout-components/public-comp/VideoSection";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_gst_no;

const HeaderProp = {
  title: (
    <>
      GST Number Scraper
    </>
  ),
  description:
    `Find business GST details using company names or GST numbers. Extract available GSTIN, legal name, trade name, registration date, business address, contact information, business type, and other available registration details to support B2B lead generation and business research.`,
  buttonText: `Try For Free`,
  buttonLink: `/signup`,
  leftImg: `/assets/img/slider-images/gst_no_scraper.png`,
  rightImg: `/assets/img/slider-images/gscreen2.png`,
}

const dataTypes = [
  {
    tooltips: `Search using a company or business name to discover matching GST-registered businesses and their available registration details.`,
    keywords: `Company Name, Business Name, Legal Name, GSTIN, Registered Business`,
  },
  {
    tooltips: `Find GST registration details using a GST number, including available legal name, trade name, and registration status.`,
    keywords: `GST Number, GSTIN, Legal Name, Trade Name, GST Status`,
  },
  {
    tooltips: `Collect available business contact information to support sales prospecting and business outreach.`,
    keywords: `Phone Number, Email Address, Website, Contact Details`,
  },
  {
    tooltips: `Access available GST registration and business information to understand the registration history of a company.`,
    keywords: `Registration Date, Registration Year, Business Type, Taxpayer Type`,
  },
  {
    tooltips: `Retrieve available business location and registration information for research and lead qualification.`,
    keywords: `Registered Address, State, PIN Code, Business Activity, GST Registration Details`,
  },
];

const noOfRecords = [
  {
    icon: <i className={`ri-search-line`}></i>,
    value: `2 Modes`,
    label: `Company Name & GSTIN Search`,
  },
  {
    icon: <i className={`ri-file-list-3-line`}></i>,
    value: `GSTIN`,
    label: `GST Registration Details`,
  },
  {
    icon: <i className={`ri-contacts-line`}></i>,
    value: `Available`,
    label: `Phone & Email Details`,
  },
  {
    icon: <i className={`ri-building-4-line`}></i>,
    value: `Detailed`,
    label: `Business Information`,
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
      subheading: `Choose Your GST Search Mode`,
      paragraph: `Select company name-based search to find matching GST-registered businesses, or GST number-based search to retrieve details for a known GSTIN.`,
      description: `Select company name-based search to find matching GST-registered businesses, or GST number-based search to retrieve details for a known GSTIN.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Two Flexible Search Modes`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 1`,
      presubtitle: `Choose Mode`,
    },
    {
      subheading: `Enter a Company Name or GST Number`,
      paragraph: `Enter the company or business name to discover matching GST records, or provide a GSTIN to look up the corresponding registration information.`,
      description: `Enter the company or business name to discover matching GST records, or provide a GSTIN to look up the corresponding registration information.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Enter Your Search Details`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 2`,
      presubtitle: `Search`,
    },
    {
      subheading: `Extract GST and Business Details`,
      paragraph: `Retrieve available GSTIN, legal name, trade name, registration date and year, business type, registration status, and other matching business information.`,
      description: `Retrieve available GSTIN, legal name, trade name, registration date and year, business type, registration status, and other matching business information.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Get GST Registration Information`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 3`,
      presubtitle: `Extract`,
    },
    {
      subheading: `Find Available Contact Information`,
      paragraph: `Access available phone numbers, email addresses, websites, registered business addresses, and other contact or location details when provided by the data source.`,
      description: `Access available phone numbers, email addresses, websites, registered business addresses, and other contact or location details when provided by the data source.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Get Business Contact Details`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 4`,
      presubtitle: `Contact Info`,
    },
    {
      subheading: `Review and Export GST Leads`,
      paragraph: `Review the matching business records and organize available GST and contact information for B2B lead generation, business verification, and sales prospecting.`,
      description: `Review the matching business records and organize available GST and contact information for B2B lead generation, business verification, and sales prospecting.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Export Your Business Data`,
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
      <VideoSection {...videoSection} toolName={`gst_no`} />
      <FaqSection />
      <HorizontalAds/>
      <WhyChooseUs />
    </>
  );
};

export default JobPortal;
