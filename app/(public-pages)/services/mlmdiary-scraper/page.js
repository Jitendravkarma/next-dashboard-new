import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_mlmdiary, seo_real_estate } from "@/shared/data/seo-content/content";
import Link from "next/link";
import HowItWork from "@/shared/layout-components/public-comp/HowItWork";
import VideoSection from "@/shared/layout-components/public-comp/VideoSection";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_mlmdiary;

const HeaderProp = {
  title: (
    <>
    MLM Diary Scraper
    </>
  ),
  description:
    `Our MLM Diary Scraper extracts available business, contact, and profile information from MLM Diary, a platform focused on network marketing and the direct selling industry. Discover MLM leaders, network marketers, direct selling companies, trainers, product suppliers, software providers, and classified listings. Collect available names, phone numbers, email addresses, WhatsApp numbers, company names, designations, locations, website URLs, profile links, business descriptions, and other publicly available details. Automate data collection for MLM lead generation, network marketing research, business development, company discovery, and sales prospecting. Organize and export collected records to simplify your research and help you identify relevant business opportunities.`,
  buttonText: `Try For Free`,
  buttonLink: `/signup`,
  leftImg: `/assets/img/slider-images/mlmdiary_scraper.png`,
  rightImg: `/assets/img/slider-images/gscreen2.png`,
}

const dataTypes = [
  { tooltips: `The name of the MLM leader, network marketer, company representative, trainer, or other listed member.`, keywords: `Name` },
  { tooltips: `The publicly available mobile or contact number associated with a profile or listing, when accessible.`, keywords: `Phone Number` },
  { tooltips: `The publicly available email address associated with a member, company, or classified listing, when available.`, keywords: `Email Address` },
  { tooltips: `The publicly available WhatsApp contact number mentioned in a profile, post, or listing, when accessible.`, keywords: `WhatsApp Number` },
  { tooltips: `The name of the MLM or direct selling company associated with the member or listing, when available.`, keywords: `MLM Company Name` },
  { tooltips: `The professional designation or role of the listed member, such as leader, trainer, consultant, or network marketer.`, keywords: `Designation / Role` },
  { tooltips: `The available city, state, country, or other location details associated with a member or listing.`, keywords: `City / Location` },
  { tooltips: `The official company or personal website URL listed in the profile or advertisement, when available.`, keywords: `Website URL` },
  { tooltips: `The direct URL of the MLM Diary member profile, company page, or classified listing.`, keywords: `Profile / Listing URL` },
  { tooltips: `The publicly available profile biography or introduction describing the member, company, or business opportunity.`, keywords: `Profile Description` },
  { tooltips: `The title or heading of the classified advertisement, business opportunity, or listing.`, keywords: `Classified Title` },
  { tooltips: `The description and details of a classified advertisement, business opportunity, product, or service, when accessible.`, keywords: `Classified Description` },
  { tooltips: `The category associated with a company, member, product, service, or classified listing, when available.`, keywords: `Category` },
  { tooltips: `The publicly available information about products, services, compensation plans, or business opportunities mentioned in a listing.`, keywords: `Products & Business Details` },
  { tooltips: `The name of the member or company associated with a community post, when available.`, keywords: `Post Author` },
  { tooltips: `The keyword used to search for MLM leaders, companies, members, classifieds, or other relevant records.`, keywords: `Searched Keyword` }
];

const noOfRecords = [
  { icon: <i className={`ri-clipboard-line`}></i>, value: `Multiple`, label: `MLM Records` },
  { icon: <i className={`ri-user-3-line`}></i>, value: `Available`, label: `Leaders & Member Profiles` },
  { icon: <i className={`ri-contacts-line`}></i>, value: `Available`, label: `Contact Details` },
  { icon: <i className={`ri-building-2-line`}></i>, value: `Available`, label: `Companies & Classifieds` },
];

const videoSection = {
  heading: `<span className='text-blue-500'>Watch a</span> Demo`,
  videoUrl: `FzhB9wRwZlA?si=BHbQJ6if3r1aMsOM`,
  buttonText: `Get Started`,
  buttonLink: `/signup`,
};

const HowItWorks = {
  mainheading: `<span className='text-blue-500'>How It </span>Works?`,
  scrapers: [
    {
      subheading: `MLM Diary Scraper (Search Members & Listings)`,
      paragraph: `Start by choosing a relevant keyword or search query to discover MLM leaders, network marketers, direct selling companies, trainers, product suppliers, software providers, and classified advertisements on MLM Diary. Search using terms such as network marketing leaders in India, MLM companies, direct selling trainers, or MLM software providers to find relevant profiles and business listings.`,
      description: `Start by choosing a relevant keyword or search query to discover MLM leaders, network marketers, direct selling companies, trainers, product suppliers, software providers, and classified advertisements on MLM Diary. Search using terms such as network marketing leaders in India, MLM companies, direct selling trainers, or MLM software providers to find relevant profiles and business listings.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Search MLM Members & Listings`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `MLM Search`,
      presubtitle: `Discover Relevant Records`,
    },
    {
      subheading: `MLM Diary Scraper (Choose Your Data Category)`,
      paragraph: `Select the type of information you want to collect from supported MLM Diary pages. Explore available member profiles, MLM company listings, classified advertisements, community posts, trainers, product suppliers, and business service providers. Use relevant keywords or available category filters to narrow your search and discover records that match your networking, research, or lead generation requirements.`,
      description: `Select the type of information you want to collect from supported MLM Diary pages. Explore available member profiles, MLM company listings, classified advertisements, community posts, trainers, product suppliers, and business service providers. Use relevant keywords or available category filters to narrow your search and discover records that match your networking, research, or lead generation requirements.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Choose MLM Data Category`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Category Selection`,
      presubtitle: `Targeted MLM Data Collection`,
    },
    {
      subheading: `MLM Diary Scraper (Initiate Data Extraction)`,
      paragraph: `After selecting your search criteria and supported data category, start the extraction process. Our MLM Diary Scraper collects accessible information that may include names, phone numbers, email addresses, WhatsApp numbers, company names, designations, locations, website URLs, profile links, classified titles, and business descriptions. The available fields depend on the information displayed on each supported profile or listing and the extraction process.`,
      description: `After selecting your search criteria and supported data category, start the extraction process. Our MLM Diary Scraper collects accessible information that may include names, phone numbers, email addresses, WhatsApp numbers, company names, designations, locations, website URLs, profile links, classified titles, and business descriptions. The available fields depend on the information displayed on each supported profile or listing and the extraction process.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Extract MLM Data`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Automated Extraction`,
      presubtitle: `Member & Business Details`,
    },
    {
      subheading: `MLM Diary Scraper (Review Collected Records)`,
      paragraph: `Once extraction is complete, review your collected MLM Diary records in an organized format. Check available member names, company associations, designations, phone numbers, email addresses, WhatsApp numbers, locations, website links, and classified details. Use the collected information to research direct selling companies, discover networking professionals, identify potential business connections, and organize relevant prospects for your business development activities.`,
      description: `Once extraction is complete, review your collected MLM Diary records in an organized format. Check available member names, company associations, designations, phone numbers, email addresses, WhatsApp numbers, locations, website links, and classified details. Use the collected information to research direct selling companies, discover networking professionals, identify potential business connections, and organize relevant prospects for your business development activities.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Review MLM Records`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Record Management`,
      presubtitle: `Organized MLM Information`,
    },
    {
      subheading: `MLM Diary Scraper (Download or Export Data)`,
      paragraph: `After reviewing your results, export the collected records in a supported format, such as CSV or Excel, if available. Use the extracted information for MLM lead generation, network marketing research, company discovery, business development, and sales prospecting. Phone numbers, email addresses, WhatsApp numbers, and other contact fields depend on their availability on the source pages and the supported extraction process.`,
      description: `After reviewing your results, export the collected records in a supported format, such as CSV or Excel, if available. Use the extracted information for MLM lead generation, network marketing research, company discovery, business development, and sales prospecting. Phone numbers, email addresses, WhatsApp numbers, and other contact fields depend on their availability on the source pages and the supported extraction process.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Download or Export Data`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Data Export`,
      presubtitle: `MLM Lead Generation`,
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
      <VideoSection {...videoSection} toolName={`mlm_diary`} />
      <FaqSection />
      <HorizontalAds/>
      <WhyChooseUs />
    </>
  );
};

export default JobPortal;
