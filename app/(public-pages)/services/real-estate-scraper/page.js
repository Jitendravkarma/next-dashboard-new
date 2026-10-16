import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_real_estate } from "@/shared/data/seo-content/content";
import Link from "next/link";
import HowItWork from "@/shared/layout-components/public-comp/HowItWork";
import VideoSection from "@/shared/layout-components/public-comp/VideoSection";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_real_estate;

const HeaderProp = {
  title: (
    <>
    Real Estate Scraper
    </>
  ),
  description:
    "Our Real Estate Scraper extracts valuable property listing and real estate data from multiple platforms, including 99acres, Beegru, Magicbricks, Makaan24, Square Yards, and other supported sources. Collect available property details such as property names, prices, property types, locations, sizes, configurations, descriptions, amenities, agent information, owner details, and publicly available contact information. Automate property data collection for real estate market research, property comparisons, lead generation, investment analysis, and business intelligence. Organize and export property data to streamline your research and support informed real estate decisions.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/real_estate_scraper.png",
  rightImg: "/assets/img/slider-images/gscreen2.png",
}

const dataTypes = [
  { tooltips: 'The title or name of the property listed on the real estate platform.', keywords: 'Property Title' },
  { tooltips: 'The listed sale price or rental amount of the property, when available.', keywords: 'Property Price' },
  { tooltips: 'The category of property, such as residential, commercial, land, or industrial.', keywords: 'Property Type' },
  { tooltips: 'The complete available location details, including locality, city, and state.', keywords: 'Property Location' },
  { tooltips: 'The built-up area, carpet area, plot size, or other available area measurements.', keywords: 'Property Area' },
  { tooltips: 'The number of bedrooms, bathrooms, and other room configurations, when available.', keywords: 'BHK & Configuration' },
  { tooltips: 'The detailed property description, including features and listing information.', keywords: 'Property Description' },
  { tooltips: 'The amenities and facilities associated with the property, when available.', keywords: 'Amenities' },
  { tooltips: 'The name of the property owner, real estate agent, builder, or advertiser, when available.', keywords: 'Owner / Agent Name' },
  { tooltips: 'The publicly available contact phone number of the owner, agent, or advertiser, when accessible.', keywords: 'Phone Number' },
  { tooltips: 'The publicly available email address associated with the property listing or advertiser, when accessible.', keywords: 'Email Address' },
  { tooltips: 'The official website of the builder, agency, or property advertiser, when available.', keywords: 'Website' },
  { tooltips: 'The direct URL of the original property listing.', keywords: 'Property URL' },
  { tooltips: 'The URL of the property image, when available.', keywords: 'Property Image' },
  { tooltips: 'The listing category, such as for sale, for rent, or for lease.', keywords: 'Listing Purpose' },
  { tooltips: 'The keyword used to find relevant properties during the search.', keywords: 'Searched Keyword' }
];

const noOfRecords = [
  { icon: <i className="ri-clipboard-line"></i>, value: "Multiple", label: "Property Records" },
  { icon: <i className="ri-building-2-line"></i>, value: "Available", label: "Property Listings" },
  { icon: <i className="ri-contacts-line"></i>, value: "Available", label: "Owner & Agent Details" },
  { icon: <i className="ri-map-pin-line"></i>, value: "Available", label: "Property Locations" },
];

const videoSection = {
  heading: "<span className='text-blue-500'>Watch a</span> Demo",
  videoUrl: "FzhB9wRwZlA?si=BHbQJ6if3r1aMsOM",
  buttonText: "Get Started",
  buttonLink: "/signup",
};

const HowItWorks = {
  mainheading: "<span className='text-blue-500'>How It </span>Works?",
  scrapers: [
    {
      subheading: "Real Estate Scraper (Search Properties by Keyword)",
      paragraph: "Start by entering a property-related keyword, location, property type, or listing category to discover relevant real estate listings. For example, search for '2 BHK flats in Pune,' 'commercial shops for rent in Delhi,' or 'residential plots in Indore.' Your search criteria help you find properties matching your requirements across supported sources such as 99acres, Beegru, Magicbricks, Makaan24, Square Yards, and other available platforms.",
      description: "Start by entering a property-related keyword, location, property type, or listing category to discover relevant real estate listings. For example, search for '2 BHK flats in Pune,' 'commercial shops for rent in Delhi,' or 'residential plots in Indore.' Your search criteria help you find properties matching your requirements across supported sources such as 99acres, Beegru, Magicbricks, Makaan24, Square Yards, and other available platforms.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/602/602182.png",
      sectionHeading: "Search Properties by Keyword",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Property Search",
      presubtitle: "Real Estate Research",
    },
    {
      subheading: "Real Estate Scraper (Select Your Data Source)",
      paragraph: "Choose your preferred real estate platform or supported data source to discover property listings. Explore available data from 99acres, Beegru, Magicbricks, Makaan24, Square Yards, and more. Refine your search using location, property type, budget, BHK configuration, or listing purpose to find relevant properties for your research and business needs.",
      description: "Choose your preferred real estate platform or supported data source to discover property listings. Explore available data from 99acres, Beegru, Magicbricks, Makaan24, Square Yards, and more. Refine your search using location, property type, budget, BHK configuration, or listing purpose to find relevant properties for your research and business needs.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/602/602182.png",
      sectionHeading: "Choose Real Estate Source",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Multiple Sources",
      presubtitle: "Property Data Collection",
    },
    {
      subheading: "Real Estate Scraper (Initiate Property Data Extraction)",
      paragraph: "Once you have selected your data source and search criteria, start the extraction process. Our Real Estate Scraper collects available property information, which may include property titles, prices, locations, sizes, configurations, descriptions, amenities, listing URLs, and owner or agent details. Publicly available phone numbers and email addresses may also be collected when accessible through the supported extraction process.",
      description: "Once you have selected your data source and search criteria, start the extraction process. Our Real Estate Scraper collects available property information, which may include property titles, prices, locations, sizes, configurations, descriptions, amenities, listing URLs, and owner or agent details. Publicly available phone numbers and email addresses may also be collected when accessible through the supported extraction process.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/602/602182.png",
      sectionHeading: "Extract Property Data",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Automated Extraction",
      presubtitle: "Property & Contact Details",
    },
    {
      subheading: "Real Estate Scraper (Review Property Listings)",
      paragraph: "After extraction, review the collected property listings in an organized format. Compare property prices, locations, sizes, configurations, amenities, listing categories, and available owner or agent details. Analyze properties across multiple sources to support market research, property comparisons, investment analysis, sales prospecting, and real estate lead generation.",
      description: "After extraction, review the collected property listings in an organized format. Compare property prices, locations, sizes, configurations, amenities, listing categories, and available owner or agent details. Analyze properties across multiple sources to support market research, property comparisons, investment analysis, sales prospecting, and real estate lead generation.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/602/602182.png",
      sectionHeading: "Review Property Results",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Property Analysis",
      presubtitle: "Market & Investment Insights",
    },
    {
      subheading: "Real Estate Scraper (Download or Export Property Data)",
      paragraph: "Once you have reviewed your results, export the collected property data in a supported format, such as CSV or Excel, if available. Use the extracted information for property market analysis, price comparisons, investment research, real estate lead generation, sales planning, and reporting. Contact details and other listing fields depend on their availability from each source and the supported extraction process.",
      description: "Once you have reviewed your results, export the collected property data in a supported format, such as CSV or Excel, if available. Use the extracted information for property market analysis, price comparisons, investment research, real estate lead generation, sales planning, and reporting. Contact details and other listing fields depend on their availability from each source and the supported extraction process.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/602/602182.png",
      sectionHeading: "Download or Export Data",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Data Export",
      presubtitle: "Real Estate Intelligence",
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
      <VideoSection {...videoSection} toolName={`real_estate`} />
      <FaqSection />
      <HorizontalAds/>
      <WhyChooseUs />
    </>
  );
};

export default JobPortal;
