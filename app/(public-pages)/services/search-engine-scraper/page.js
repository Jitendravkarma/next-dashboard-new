import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_real_estate, seo_search_engine } from "@/shared/data/seo-content/content";
import Link from "next/link";
import HowItWork from "@/shared/layout-components/public-comp/HowItWork";
import VideoSection from "@/shared/layout-components/public-comp/VideoSection";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_search_engine;

const HeaderProp = {
  title: (
    <>
    Search Engine Scraper
    </>
  ),
  description:
    `Our Search Engine Scraper extracts relevant business and organization data from multiple search engines, including Google, Bing, Yahoo, DuckDuckGo, and other supported sources. Simply enter a search query such as schools in Mumbai, dentists in Delhi, or manufacturers in Pune to discover relevant results. Collect available business names, phone numbers, email addresses, websites, social media links, website descriptions, business addresses, search result URLs, and other publicly available information. Automate search-based data collection for lead generation, market research, business development, competitor research, and sales prospecting. Organize and export collected results to simplify your research and support data-driven decisions.`,
  buttonText: `Try For Free`,
  buttonLink: `/signup`,
  leftImg: `/assets/img/slider-images/search_engine_scraper.png`,
  rightImg: `/assets/img/slider-images/gscreen2.png`,
}

const dataTypes = [
  { tooltips: `The name of the business, organization, school, company, or other entity found in search results.`, keywords: `Business / Organization Name` },
  { tooltips: `The publicly available contact phone number associated with the business or organization, when accessible.`, keywords: `Phone Number` },
  { tooltips: `The publicly available email address found on the website or associated business pages, when accessible.`, keywords: `Email Address` },
  { tooltips: `The official website URL associated with the business or organization, when available.`, keywords: `Website URL` },
  { tooltips: `A description of the business or organization gathered from available search snippets or website content.`, keywords: `Website Description` },
  { tooltips: `Links to the business or organization’s publicly available social media profiles, when found.`, keywords: `Social Media Links` },
  { tooltips: `The available business address, locality, city, state, or other location details.`, keywords: `Business Address` },
  { tooltips: `The title or heading of the relevant page displayed in the search engine results.`, keywords: `Search Result Title` },
  { tooltips: `The URL of the page displayed in the search results for the user's query.`, keywords: `Search Result URL` },
  { tooltips: `The text snippet or summary displayed by the search engine for a matching result.`, keywords: `Search Result Description` },
  { tooltips: `The category or type of business identified from available website or search result information.`, keywords: `Business Category` },
  { tooltips: `The name of the search engine from which the result was collected, when available.`, keywords: `Search Engine Source` },
  { tooltips: `Additional publicly available contact information or business details found on supported pages.`, keywords: `Additional Business Details` },
  { tooltips: `The query entered by the user to discover relevant businesses, organizations, or websites.`, keywords: `Searched Keyword` },
  { tooltips: `The page ranking or position of a result within the collected search results, when available.`, keywords: `Search Result Position` },
  { tooltips: `Other relevant publicly available information discovered during the supported extraction process.`, keywords: `More Information` }
];

const noOfRecords = [
  { icon: <i className={`ri-clipboard-line`}></i>, value: `Multiple`, label: `Search Result Records` },
  { icon: <i className={`ri-building-2-line`}></i>, value: `Available`, label: `Business & Organization Data` },
  { icon: <i className={`ri-contacts-line`}></i>, value: `Available`, label: `Contact Details` },
  { icon: <i className={`ri-global-line`}></i>, value: `Multiple`, label: `Search Engine Sources` },
];

const videoSection = {
  heading: `<span className='text-blue-500'>Watch a</span> Demo`,
  videoUrl: `q4FnHlCtFMc?si=19iNzjZpP2AWXSbD`,
  buttonText: `Get Started`,
  buttonLink: `/signup`,
};

const HowItWorks = {
  mainheading: `<span className='text-blue-500'>How It </span>Works?`,
  scrapers: [
    {
      subheading: `Search Engine Scraper (Search by Keyword)`,
      paragraph: `Start by entering a keyword or search query to discover relevant businesses, organizations, and websites. For example, search for schools in Mumbai, hospitals in Delhi, real estate agents in Pune, or manufacturers in Ahmedabad. Your query helps identify relevant search results across supported search engines such as Google, Bing, Yahoo, and DuckDuckGo.`,
      description: `Start by entering a keyword or search query to discover relevant businesses, organizations, and websites. For example, search for schools in Mumbai, hospitals in Delhi, real estate agents in Pune, or manufacturers in Ahmedabad. Your query helps identify relevant search results across supported search engines such as Google, Bing, Yahoo, and DuckDuckGo.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Search by Keyword`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Keyword Search`,
      presubtitle: `Discover Relevant Results`,
    },
    {
      subheading: `Search Engine Scraper (Select Your Search Engine)`,
      paragraph: `Choose your preferred search engine or supported data source to find relevant results. Explore available information from Google, Bing, Yahoo, DuckDuckGo, and other supported sources. Use specific keywords and locations, such as schools in Mumbai or IT companies in Bengaluru, to discover websites and organizations relevant to your target audience and business requirements.`,
      description: `Choose your preferred search engine or supported data source to find relevant results. Explore available information from Google, Bing, Yahoo, DuckDuckGo, and other supported sources. Use specific keywords and locations, such as schools in Mumbai or IT companies in Bengaluru, to discover websites and organizations relevant to your target audience and business requirements.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Choose Search Engine`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Multiple Search Engines`,
      presubtitle: `Search Across Sources`,
    },
    {
      subheading: `Search Engine Scraper (Initiate Data Extraction)`,
      paragraph: `Once you have entered your query and selected a supported search engine, start the extraction process. Our Search Engine Scraper collects available search results and associated information, which may include business names, phone numbers, email addresses, website URLs, social media links, website descriptions, addresses, result titles, and page links. Additional details depend on what is publicly available and accessible through the supported extraction process.`,
      description: `Once you have entered your query and selected a supported search engine, start the extraction process. Our Search Engine Scraper collects available search results and associated information, which may include business names, phone numbers, email addresses, website URLs, social media links, website descriptions, addresses, result titles, and page links. Additional details depend on what is publicly available and accessible through the supported extraction process.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Extract Search Data`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Automated Extraction`,
      presubtitle: `Business & Contact Details`,
    },
    {
      subheading: `Search Engine Scraper (Review Search Results)`,
      paragraph: `After extraction, review your collected search results in an organized format. Check business and organization names, websites, available phone numbers, email addresses, social media profiles, descriptions, and location details. Analyze relevant results from multiple search engines to identify potential customers, discover businesses in specific locations, research competitors, and build targeted prospect lists.`,
      description: `After extraction, review your collected search results in an organized format. Check business and organization names, websites, available phone numbers, email addresses, social media profiles, descriptions, and location details. Analyze relevant results from multiple search engines to identify potential customers, discover businesses in specific locations, research competitors, and build targeted prospect lists.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Review Search Results`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Result Management`,
      presubtitle: `Organized Business Data`,
    },
    {
      subheading: `Search Engine Scraper (Download or Export Data)`,
      paragraph: `Once you have reviewed your results, export the collected data in a supported format, such as CSV or Excel, if available. Use the extracted information for lead generation, sales prospecting, market research, local business discovery, competitor analysis, and business development. Phone numbers, email addresses, social links, and other additional fields depend on their availability from the search results and supported extraction process.`,
      description: `Once you have reviewed your results, export the collected data in a supported format, such as CSV or Excel, if available. Use the extracted information for lead generation, sales prospecting, market research, local business discovery, competitor analysis, and business development. Phone numbers, email addresses, social links, and other additional fields depend on their availability from the search results and supported extraction process.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Download or Export Data`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Data Export`,
      presubtitle: `Search-Based Lead Generation`,
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
      <VideoSection {...videoSection} toolName={`search_engine`} />
      <FaqSection />
      <HorizontalAds/>
      <WhyChooseUs />
    </>
  );
};

export default JobPortal;
