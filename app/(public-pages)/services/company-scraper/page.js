import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_company_scraper } from "@/shared/data/seo-content/content";
import Link from "next/link";
import HowItWork from "@/shared/layout-components/public-comp/HowItWork";
import VideoSection from "@/shared/layout-components/public-comp/VideoSection";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_company_scraper;

const HeaderProp = {
  title: (
    <>
      Company Contact Scraper
    </>
  ),
  description:
    `Extract company contact information in bulk by uploading a CSV file containing company names and city names. Discover available phone numbers, email addresses, websites, social media profiles, business addresses, company categories, and other business details to build targeted B2B lead lists.`,
  buttonText: `Try For Free`,
  buttonLink: `/signup`,
  leftImg: `/assets/img/slider-images/company_scraper.png`,
  rightImg: `/assets/img/slider-images/gscreen2.png`,
}

const dataTypes = [
  {
    tooltips: `Find matching businesses using company names and city names provided in your uploaded CSV file.`,
    keywords: `Company Name, City, Business Name, Local Business Search`,
  },
  {
    tooltips: `Extract available contact details to connect with potential customers and business prospects.`,
    keywords: `Phone Number, Mobile Number, Email Address, Contact Information`,
  },
  {
    tooltips: `Discover official company websites and publicly available social media profiles for business research.`,
    keywords: `Website URL, LinkedIn, Facebook, Instagram, YouTube, Social Media Links`,
  },
  {
    tooltips: `Collect available business location details to identify and organize companies by geographic area.`,
    keywords: `Business Address, City, State, Country, PIN Code, Location`,
  },
  {
    tooltips: `Gather additional available information to understand and categorize companies for targeted prospecting.`,
    keywords: `Business Category, Industry, Company Description, Business Profile, Operating Hours`,
  },
];

const noOfRecords = [
  {
    icon: <i className={`ri-building-4-line`}></i>,
    value: `Bulk`,
    label: `Company Contact Extraction`,
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
  {
    icon: <i className={`ri-map-pin-line`}></i>,
    value: `Detailed`,
    label: `Business Location Data`,
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
      subheading: `Upload Your Company CSV`,
      paragraph: `Upload a CSV file containing company names and city names in separate columns. Add multiple companies to your file to find their contact information in bulk.`,
      description: `Upload a CSV file containing company names and city names in separate columns. Add multiple companies to your file to find their contact information in bulk.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Upload Company Names & Cities`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 1`,
      presubtitle: `Upload CSV`,
    },
    {
      subheading: `Match Companies by Name and City`,
      paragraph: `The scraper uses the company name and city provided in each CSV row to search for matching businesses and help identify the correct company.`,
      description: `The scraper uses the company name and city provided in each CSV row to search for matching businesses and help identify the correct company.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Find the Right Companies`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 2`,
      presubtitle: `Match`,
    },
    {
      subheading: `Extract Company Contact Details`,
      paragraph: `Collect available phone numbers, email addresses, official websites, social media links, business addresses, categories, and other company information from supported data sources.`,
      description: `Collect available phone numbers, email addresses, official websites, social media links, business addresses, categories, and other company information from supported data sources.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Collect Business Information`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 3`,
      presubtitle: `Extract`,
    },
    {
      subheading: `Review Your Company Leads`,
      paragraph: `Review the extracted company records, check available contact details, and organize the results for your sales and marketing activities.`,
      description: `Review the extracted company records, check available contact details, and organize the results for your sales and marketing activities.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Review Extracted Data`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 4`,
      presubtitle: `Review`,
    },
    {
      subheading: `Export Your Company Contact List`,
      paragraph: `Export your collected company information for B2B lead generation, sales prospecting, marketing campaigns, and business research.`,
      description: `Export your collected company information for B2B lead generation, sales prospecting, marketing campaigns, and business research.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Download Company Leads`,
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
      <VideoSection {...videoSection} toolName={`company_scraper`} />
      <FaqSection />
      <HorizontalAds/>
      <WhyChooseUs />
    </>
  );
};

export default JobPortal;
