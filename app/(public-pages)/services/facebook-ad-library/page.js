import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_fbads } from "@/shared/data/seo-content/content";
import Link from "next/link";
import HowItWork from "@/shared/layout-components/public-comp/HowItWork";
import VideoSection from "@/shared/layout-components/public-comp/VideoSection";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_fbads;

const HeaderProp = {
title: (
<>
Facebook Ad Library Scraper
</>
),
description:
"Our Facebook Ad Library Scraper helps you collect valuable advertising information from Meta Ad Library. Discover advertisers and extract available data such as company names, ad titles, advertiser details, ad creatives, ad copy, landing page URLs, Facebook pages, Instagram profiles, social media links, and other available advertising information. Simplify competitor research, analyze advertising strategies, identify businesses running ads, and organize campaign insights for marketing research and lead generation. Company phone numbers, email addresses, and other contact details may require additional extraction from publicly available sources.",
buttonText: "Try For Free",
buttonLink: "/signup",
leftImg: "/assets/img/slider-images/ad_library_scraper.png",
rightImg: "/assets/img/slider-images/gscreen2.png",
}

const dataTypes = [
{ tooltips: 'The name of the company, advertiser, or business associated with the advertisement.', keywords: 'Company Name' },
{ tooltips: 'The title or headline of the advertisement, when available.', keywords: 'Ad Title' },
{ tooltips: 'The primary text or advertising copy displayed in the ad.', keywords: 'Ad Description' },
{ tooltips: 'The name of the Facebook page or advertiser running the advertisement.', keywords: 'Facebook Page' },
{ tooltips: 'The Instagram profile associated with the advertiser, when available.', keywords: 'Instagram Profile' },
{ tooltips: 'The publicly available website or landing page linked to the advertisement.', keywords: 'Website URL' },
{ tooltips: 'The publicly available company email address, when identified through supported sources.', keywords: 'Email Address' },
{ tooltips: 'The publicly available business phone number, when identified through supported sources.', keywords: 'Phone Number' },
{ tooltips: 'Links to the advertiser’s available social media profiles.', keywords: 'Social Media Links' },
{ tooltips: 'The image, video, or other creative asset associated with the advertisement, when available.', keywords: 'Ad Creative' },
{ tooltips: 'The ad library identifier or unique advertisement ID, when available.', keywords: 'Ad ID' },
{ tooltips: 'The date the advertisement started running, when available.', keywords: 'Ad Start Date' },
{ tooltips: 'The current delivery status or active status of the advertisement, when available.', keywords: 'Ad Status' },
{ tooltips: 'The country or region associated with the advertisement, when available.', keywords: 'Target Country' },
{ tooltips: 'The keyword or search term used to discover the advertisement.', keywords: 'Searched Keyword' }
];

const noOfRecords = [
{ icon: <i className="ri-clipboard-line"></i>, value: "Multiple", label: "Ad Records" },
{ icon: <i className="ri-building-2-line"></i>, value: "Available", label: "Advertiser Details" },
{ icon: <i className="ri-global-line"></i>, value: "Available", label: "Website & Social Links" },
{ icon: <i className="ri-megaphone-line"></i>, value: "Available", label: "Ad Information" },
];

const videoSection = {
heading: "<span className='text-blue-500'>Watch the</span> Demo",
videoUrl: "FzhB9wRwZlA?si=BHbQJ6if3r1aMsOM",
buttonText: "Get Started",
buttonLink: "/signup",
};

const HowItWorks = {
mainheading: "<span className='text-blue-500'>How It </span>Works?",
scrapers: [
{
subheading: "Facebook Ad Library Scraper (Choose Your Search Criteria)",
paragraph: "Start by entering a relevant keyword, company name, brand name, or industry to discover advertisements in Meta Ad Library. Use specific search terms to find relevant advertisers and explore ads related to your target market, competitors, or business niche.",
description: "Start by entering a relevant keyword, company name, brand name, or industry to discover advertisements in Meta Ad Library. Use specific search terms to find relevant advertisers and explore ads related to your target market, competitors, or business niche.",
imageSrc: "https://cdn-icons-png.flaticon.com/128/1162/1162499.png",
sectionHeading: "Search Meta Advertisements",
link: "/signup",
buttonText: "Try Now",
pretitle: "Meta Ad Library",
presubtitle: "Ad Discovery",
},
{
subheading: "Facebook Ad Library Scraper (Find Advertisers)",
paragraph: "Search for advertisements associated with your selected keywords, companies, or brands. Discover available advertiser information, Facebook pages, ad titles, and other details provided by Meta Ad Library to understand which businesses are promoting products or services in your target market.",
description: "Search for advertisements associated with your selected keywords, companies, or brands. Discover available advertiser information, Facebook pages, ad titles, and other details provided by Meta Ad Library to understand which businesses are promoting products or services in your target market.",
imageSrc: "https://cdn-icons-png.flaticon.com/128/1162/1162499.png",
sectionHeading: "Discover Advertisers",
link: "/signup",
buttonText: "Try Now",
pretitle: "Competitor Research",
presubtitle: "Advertiser Discovery",
},
{
subheading: "Facebook Ad Library Scraper (Extract Ad & Company Data)",
paragraph: "Initiate the extraction process to collect available advertisement and advertiser information. Depending on the data exposed by Meta Ad Library and your supported extraction process, results may include company names, ad titles, ad copy, Facebook pages, Instagram profiles, creative links, landing page URLs, ad IDs, and other available fields. Additional company phone numbers and email addresses may require separate public-source enrichment.",
description: "Initiate the extraction process to collect available advertisement and advertiser information. Depending on the data exposed by Meta Ad Library and your supported extraction process, results may include company names, ad titles, ad copy, Facebook pages, Instagram profiles, creative links, landing page URLs, ad IDs, and other available fields. Additional company phone numbers and email addresses may require separate public-source enrichment.",
imageSrc: "https://cdn-icons-png.flaticon.com/128/1162/1162499.png",
sectionHeading: "Extract Ad Data",
link: "/signup",
buttonText: "Try Now",
pretitle: "Data Extraction",
presubtitle: "Company & Ad Details",
},
{
subheading: "Facebook Ad Library Scraper (Review Advertising Results)",
paragraph: "Once the extraction is complete, review the collected advertisements and advertiser information in an organized format. Examine ad titles, advertising copy, company names, social media profiles, landing page URLs, and other available fields to research competitors, compare promotional strategies, and identify potential business leads.",
description: "Once the extraction is complete, review the collected advertisements and advertiser information in an organized format. Examine ad titles, advertising copy, company names, social media profiles, landing page URLs, and other available fields to research competitors, compare promotional strategies, and identify potential business leads.",
imageSrc: "https://cdn-icons-png.flaticon.com/128/1162/1162499.png",
sectionHeading: "Review Ad Results",
link: "/signup",
buttonText: "Try Now",
pretitle: "Advertising Insights",
presubtitle: "Competitor Analysis",
},
{
subheading: "Facebook Ad Library Scraper (Export Ad & Company Data)",
paragraph: "After reviewing your results, export the collected advertising data in a supported format, such as CSV or Excel, if available. Use the data for competitor analysis, campaign research, advertiser discovery, marketing reports, and lead generation. Keep in mind that contact details and social media links depend on their availability in the source data or additional enrichment.",
description: "After reviewing your results, export the collected advertising data in a supported format, such as CSV or Excel, if available. Use the data for competitor analysis, campaign research, advertiser discovery, marketing reports, and lead generation. Keep in mind that contact details and social media links depend on their availability in the source data or additional enrichment.",
imageSrc: "https://cdn-icons-png.flaticon.com/128/1162/1162499.png",
sectionHeading: "Export Advertising Data",
link: "/signup",
buttonText: "Try Now",
pretitle: "Data Export",
presubtitle: "Marketing & Lead Research",
},
],
};

const FacebookAdLib = () => {
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
      <VideoSection {...videoSection} toolName={`fb_ad`} />
      <FaqSection />
      <HorizontalAds/>
      <WhyChooseUs />
    </>
  );
};

export default FacebookAdLib;
