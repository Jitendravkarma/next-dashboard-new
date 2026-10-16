import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_real_estate, seo_social_media } from "@/shared/data/seo-content/content";
import Link from "next/link";
import HowItWork from "@/shared/layout-components/public-comp/HowItWork";
import VideoSection from "@/shared/layout-components/public-comp/VideoSection";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_social_media;

const HeaderProp = {
  title: (
    <>
    Social Media Scraper
    </>
  ),
  description:
    `Our Social Media Scraper helps you collect publicly available business and profile information from multiple social media platforms, including Facebook, Instagram, X (Twitter), LinkedIn, and other supported sources. Discover relevant businesses, brands, professionals, and potential customers based on your search criteria. Extract available phone numbers, email addresses, social media profile links, website URLs, WhatsApp numbers, business names, profile descriptions, locations, and other publicly available details. Automate social media data collection for lead generation, audience research, business development, competitor analysis, and sales prospecting. Organize and export collected information to streamline your research and help you identify relevant business opportunities.`,
  buttonText: `Try For Free`,
  buttonLink: `/signup`,
  leftImg: `/assets/img/slider-images/social_media.png`,
  rightImg: `/assets/img/slider-images/gscreen2.png`,
}

const dataTypes = [
  { tooltips: `The name of the business, brand, organization, professional, or profile owner, when available.`, keywords: `Name / Business Name` },
  { tooltips: `The publicly available contact phone number associated with a business or profile, when accessible.`, keywords: `Phone Number` },
  { tooltips: `The publicly available email address listed on a profile, business page, or linked website, when accessible.`, keywords: `Email Address` },
  { tooltips: `The publicly available WhatsApp contact number associated with a business or profile, when available.`, keywords: `WhatsApp Number` },
  { tooltips: `The direct URL of the Facebook, Instagram, X (Twitter), LinkedIn, or other supported social media profile or page.`, keywords: `Social Media Profile Link` },
  { tooltips: `The official website URL listed on the social media profile or business page, when available.`, keywords: `Website URL` },
  { tooltips: `The profile biography, business introduction, or publicly available description of the account.`, keywords: `Profile Description` },
  { tooltips: `The business address, city, state, country, or other publicly available location details.`, keywords: `Business Location` },
  { tooltips: `The username or account handle associated with the social media profile, when available.`, keywords: `Username / Handle` },
  { tooltips: `The category or industry associated with the business, brand, organization, or professional profile, when available.`, keywords: `Business Category` },
  { tooltips: `The name of the social media platform from which the profile information was collected.`, keywords: `Social Media Platform` },
  { tooltips: `The publicly available number of followers associated with a profile, when supported and accessible.`, keywords: `Followers Count` },
  { tooltips: `The publicly available number of connections or other audience metrics, when supported by the platform and extraction process.`, keywords: `Connections / Audience Details` },
  { tooltips: `The publicly available profile or business page details relevant to your search, when accessible.`, keywords: `Profile Information` },
  { tooltips: `The keyword or search query used to discover relevant profiles, businesses, or social media pages.`, keywords: `Searched Keyword` },
  { tooltips: `Additional publicly available business or contact information discovered through supported profile pages or linked websites.`, keywords: `Additional Details` }
];

const noOfRecords = [
  { icon: <i className={`ri-clipboard-line`}></i>, value: `Multiple`, label: `Social Media Records` },
  { icon: <i className={`ri-user-3-line`}></i>, value: `Available`, label: `Profiles & Business Pages` },
  { icon: <i className={`ri-contacts-line`}></i>, value: `Available`, label: `Contact Details` },
  { icon: <i className={`ri-global-line`}></i>, value: `Multiple`, label: `Social Media Platforms` },
];

const videoSection = {
  heading: `<span className='text-blue-500'>Watch a</span> Demo`,
  videoUrl: `wFT9EfVKAAA?si=HG94qAbE0BoQ9DGJ`,
  buttonText: `Get Started`,
  buttonLink: `/signup`,
};

const HowItWorks = {
  mainheading: `<span className='text-blue-500'>How It </span>Works?`,
  scrapers: [
    {
      subheading: `Social Media Scraper (Search Profiles by Keyword)`,
      paragraph: `Start by entering a keyword, business name, industry, or location to discover relevant social media profiles and business pages. For example, search for schools in Mumbai, digital marketing agencies in Delhi, clothing brands in India, or real estate agents in Pune. Your search criteria help identify relevant profiles across supported platforms such as Facebook, Instagram, X (Twitter), LinkedIn, and other available sources.`,
      description: `Start by entering a keyword, business name, industry, or location to discover relevant social media profiles and business pages. For example, search for schools in Mumbai, digital marketing agencies in Delhi, clothing brands in India, or real estate agents in Pune. Your search criteria help identify relevant profiles across supported platforms such as Facebook, Instagram, X (Twitter), LinkedIn, and other available sources.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Search Profiles by Keyword`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Profile Search`,
      presubtitle: `Discover Relevant Accounts`,
    },
    {
      subheading: `Social Media Scraper (Select Your Social Media Platform)`,
      paragraph: `Choose your preferred social media platform or supported data source to discover relevant profiles and business pages. Collect available information from Facebook, Instagram, X (Twitter), LinkedIn, and other supported platforms. Refine your search using relevant keywords, business names, industries, or locations to find profiles that match your target audience and business requirements.`,
      description: `Choose your preferred social media platform or supported data source to discover relevant profiles and business pages. Collect available information from Facebook, Instagram, X (Twitter), LinkedIn, and other supported platforms. Refine your search using relevant keywords, business names, industries, or locations to find profiles that match your target audience and business requirements.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Choose Social Media Source`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Multiple Platforms`,
      presubtitle: `Social Media Data Collection`,
    },
    {
      subheading: `Social Media Scraper (Initiate Profile Data Extraction)`,
      paragraph: `Once you have selected a supported platform and search criteria, start the extraction process. Our Social Media Scraper collects available profile and business information, which may include names, phone numbers, email addresses, WhatsApp numbers, social media links, website URLs, profile descriptions, usernames, and business locations. Additional profile metrics and contact details depend on the platform, public visibility, and supported extraction process.`,
      description: `Once you have selected a supported platform and search criteria, start the extraction process. Our Social Media Scraper collects available profile and business information, which may include names, phone numbers, email addresses, WhatsApp numbers, social media links, website URLs, profile descriptions, usernames, and business locations. Additional profile metrics and contact details depend on the platform, public visibility, and supported extraction process.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Extract Social Media Data`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Automated Extraction`,
      presubtitle: `Profile & Contact Details`,
    },
    {
      subheading: `Social Media Scraper (Review Collected Profiles)`,
      paragraph: `After extraction, review the collected profiles and business information in an organized format. Check available names, phone numbers, email addresses, WhatsApp numbers, social media profile links, website URLs, descriptions, and location details. Analyze relevant profiles across supported platforms to identify potential customers, discover businesses, research competitors, and build targeted prospect lists for your marketing and sales activities.`,
      description: `After extraction, review the collected profiles and business information in an organized format. Check available names, phone numbers, email addresses, WhatsApp numbers, social media profile links, website URLs, descriptions, and location details. Analyze relevant profiles across supported platforms to identify potential customers, discover businesses, research competitors, and build targeted prospect lists for your marketing and sales activities.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Review Social Media Results`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Profile Management`,
      presubtitle: `Organized Social Media Data`,
    },
    {
      subheading: `Social Media Scraper (Download or Export Data)`,
      paragraph: `Once you have reviewed your results, export the collected information in a supported format, such as CSV or Excel, if available. Use the extracted data for lead generation, social media research, business development, influencer discovery, competitor analysis, and sales prospecting. Phone numbers, email addresses, WhatsApp numbers, social links, and other profile fields depend on their availability and accessibility through the supported extraction process.`,
      description: `Once you have reviewed your results, export the collected information in a supported format, such as CSV or Excel, if available. Use the extracted data for lead generation, social media research, business development, influencer discovery, competitor analysis, and sales prospecting. Phone numbers, email addresses, WhatsApp numbers, social links, and other profile fields depend on their availability and accessibility through the supported extraction process.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Download or Export Data`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Data Export`,
      presubtitle: `Social Media Lead Generation`,
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
      <VideoSection {...videoSection} toolName={`social_media`} />
      <FaqSection />
      <HorizontalAds/>
      <WhyChooseUs />
    </>
  );
};

export default JobPortal;
