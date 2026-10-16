import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_global_dir } from "@/shared/data/seo-content/content";
import Link from "next/link";
import HowItWork from "@/shared/layout-components/public-comp/HowItWork";
import VideoSection from "@/shared/layout-components/public-comp/VideoSection";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_global_dir;

const HeaderProp = {
  title: (
    <>
    Global Directory Scraper
    </>
  ),
  description:
    "Our Global Directory Scraper extracts valuable business and directory information from multiple online platforms, including Nextdoor, Practo, Global Sources, Trustpilot, Hotfrog, and other supported sources. Collect available business names, company websites, phone numbers, email addresses, business categories, addresses, descriptions, ratings, reviews, and other publicly accessible details. Automate business data collection for lead generation, market research, supplier discovery, competitor analysis, and reputation monitoring. Organize and export collected information to streamline your research and support data-driven business decisions.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/global_directory_scraper.png",
  rightImg: "/assets/img/slider-images/gscreen2.png",
}

const dataTypes = [
  { tooltips: 'The name of the business, company, organization, or service listed on the directory.', keywords: 'Business Name' },
  { tooltips: 'The official website URL associated with the business, when available.', keywords: 'Website' },
  { tooltips: 'The publicly available business contact phone number, when available.', keywords: 'Phone Number' },
  { tooltips: 'The publicly available business email address, when available.', keywords: 'Email Address' },
  { tooltips: 'A description of the business, its services, or its products.', keywords: 'Business Description' },
  { tooltips: 'The category or industry associated with the listed business.', keywords: 'Business Category' },
  { tooltips: 'The available business address, city, state, country, or service location.', keywords: 'Business Address' },
  { tooltips: 'The business profile or listing URL on the source platform.', keywords: 'Profile URL' },
  { tooltips: 'The customer rating displayed on the directory or review platform, when available.', keywords: 'Rating' },
  { tooltips: 'The number of customer reviews associated with the business, when available.', keywords: 'Review Count' },
  { tooltips: 'The publicly accessible social media profile links associated with the business, when available.', keywords: 'Social Media Links' },
  { tooltips: 'The names or details of products and services offered by the business, when available.', keywords: 'Products & Services' },
  { tooltips: 'The supplier or manufacturer information listed on business sourcing platforms, when available.', keywords: 'Supplier Details' },
  { tooltips: 'The keyword or search phrase used to discover the business listing.', keywords: 'Searched Keyword' },
  { tooltips: 'The directory or platform from which the business information was collected.', keywords: 'Source Platform' }
];

const noOfRecords = [
  { icon: <i className="ri-clipboard-line"></i>, value: "Multiple", label: "Business Records" },
  { icon: <i className="ri-global-line"></i>, value: "Multiple", label: "Business Websites" },
  { icon: <i className="ri-contacts-line"></i>, value: "Available", label: "Contact Details" },
  { icon: <i className="ri-building-2-line"></i>, value: "Multiple", label: "Directory Sources" },
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
      subheading: "Global Directory Scraper (Search Businesses by Keyword)",
      paragraph: "Start by entering a business name, industry, service, product, or location as your search keyword. For example, search for 'dentists in London,' 'industrial equipment suppliers,' or 'plumbers in New York.' Your search criteria help you discover relevant business listings across supported sources such as Nextdoor, Practo, Global Sources, Trustpilot, Hotfrog, and other available directories.",
      description: "Start by entering a business name, industry, service, product, or location as your search keyword. For example, search for 'dentists in London,' 'industrial equipment suppliers,' or 'plumbers in New York.' Your search criteria help you discover relevant business listings across supported sources such as Nextdoor, Practo, Global Sources, Trustpilot, Hotfrog, and other available directories.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/13180/13180582.png",
      sectionHeading: "Search Businesses by Keyword",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Business Discovery",
      presubtitle: "Keyword-Based Search",
    },
    {
      subheading: "Global Directory Scraper (Select Your Data Source)",
      paragraph: "Choose your preferred directory or supported business data source based on your research requirements. Explore local business listings on Nextdoor, healthcare professionals on Practo, suppliers and manufacturers on Global Sources, customer reviews on Trustpilot, and business listings on Hotfrog. Source availability and supported search options may vary depending on the platform.",
      description: "Choose your preferred directory or supported business data source based on your research requirements. Explore local business listings on Nextdoor, healthcare professionals on Practo, suppliers and manufacturers on Global Sources, customer reviews on Trustpilot, and business listings on Hotfrog. Source availability and supported search options may vary depending on the platform.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/13180/13180582.png",
      sectionHeading: "Choose Directory Source",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Multiple Sources",
      presubtitle: "Directory Selection",
    },
    {
      subheading: "Global Directory Scraper (Initiate Data Extraction)",
      paragraph: "Once you have selected your source and search criteria, initiate the extraction process. Our Global Directory Scraper collects available information from supported listings, which may include business names, websites, phone numbers, email addresses, business categories, locations, descriptions, ratings, review counts, and supplier or service details. The extracted fields depend on the information accessible from each platform.",
      description: "Once you have selected your source and search criteria, initiate the extraction process. Our Global Directory Scraper collects available information from supported listings, which may include business names, websites, phone numbers, email addresses, business categories, locations, descriptions, ratings, review counts, and supplier or service details. The extracted fields depend on the information accessible from each platform.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/13180/13180582.png",
      sectionHeading: "Extract Business Data",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Automated Extraction",
      presubtitle: "Business & Contact Details",
    },
    {
      subheading: "Global Directory Scraper (Review Extracted Results)",
      paragraph: "After extraction, review your collected business records in an organized format. Examine company names, contact details, websites, locations, categories, ratings, reviews, and other available information. Compare businesses across different sources to identify potential leads, research competitors, discover suppliers, evaluate customer feedback, and understand market opportunities.",
      description: "After extraction, review your collected business records in an organized format. Examine company names, contact details, websites, locations, categories, ratings, reviews, and other available information. Compare businesses across different sources to identify potential leads, research competitors, discover suppliers, evaluate customer feedback, and understand market opportunities.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/13180/13180582.png",
      sectionHeading: "Review Business Results",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Data Analysis",
      presubtitle: "Business Intelligence",
    },
    {
      subheading: "Global Directory Scraper (Download or Export Data)",
      paragraph: "Once you have reviewed your results, export the collected business data in a supported format, such as CSV or Excel, if available. Use the extracted information for lead generation, supplier research, local business discovery, reputation analysis, market research, and sales planning. Contact details, ratings, reviews, and other fields depend on their availability and the supported extraction capabilities of each source.",
      description: "Once you have reviewed your results, export the collected business data in a supported format, such as CSV or Excel, if available. Use the extracted information for lead generation, supplier research, local business discovery, reputation analysis, market research, and sales planning. Contact details, ratings, reviews, and other fields depend on their availability and the supported extraction capabilities of each source.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/13180/13180582.png",
      sectionHeading: "Download or Export Data",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Data Export",
      presubtitle: "Business Growth & Research",
    },
  ],
};

const WhatsAppGroup = () => {
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
      <VideoSection {...videoSection} toolName={`global_dir`} />
      <FaqSection />
      <HorizontalAds/>
      <WhyChooseUs />
    </>
  );
};

export default WhatsAppGroup;
