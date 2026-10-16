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
    WhatsApp Group Scraper
    </>
  ),
  description:
    "Our WhatsApp Group Scraper helps you discover WhatsApp group invite links and collect available group-related information based on your search keywords. Find relevant groups for networking, communities, business discussions, marketing research, and professional connections. Organize discovered group links and associated publicly available information to simplify group discovery and research. Phone numbers and member details are only available when legitimately accessible and permitted; group membership alone does not make members' phone numbers public or authorize bulk extraction.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/whatsapp_group_scraper.png",
  rightImg: "/assets/img/slider-images/gscreen2.png",
}

const dataTypes = [
  { tooltips: 'The WhatsApp group invitation URL used to join a group, when publicly available.', keywords: 'Group Invite Link' },
  { tooltips: 'The name or title of the WhatsApp group, when available.', keywords: 'Group Name' },
  { tooltips: 'A description of the group and its purpose, when available.', keywords: 'Group Description' },
  { tooltips: 'The keyword used to discover relevant WhatsApp groups.', keywords: 'Searched Keyword' },
  { tooltips: 'The publicly available webpage where the WhatsApp group link was discovered.', keywords: 'Source URL' },
  { tooltips: 'The category or topic associated with the group, such as business, education, jobs, or community.', keywords: 'Group Category' },
  { tooltips: 'The publicly displayed group information available from the discovery source.', keywords: 'Group Information' },
  { tooltips: 'A phone number that is explicitly and legitimately available from a public source or provided with appropriate authorization.', keywords: 'Publicly Available Phone Number' },
  { tooltips: 'The date the group link was discovered, when tracked by the application.', keywords: 'Discovery Date' }
];

const noOfRecords = [
  { icon: <i className="ri-links-line"></i>, value: "Multiple", label: "Group Links" },
  { icon: <i className="ri-whatsapp-line"></i>, value: "Available", label: "WhatsApp Groups" },
  { icon: <i className="ri-search-line"></i>, value: "Multiple", label: "Search Keywords" },
  { icon: <i className="ri-file-excel-2-line"></i>, value: "Export", label: "Group Data" },
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
      subheading: "WhatsApp Group Scraper (Search Groups by Keyword)",
      paragraph: "Start by entering a keyword related to the groups you want to discover. For example, search for 'business networking WhatsApp groups,' 'digital marketing groups,' or 'job updates WhatsApp groups.' Your search terms help identify relevant group invitation links published on accessible websites and other supported sources.",
      description: "Start by entering a keyword related to the groups you want to discover. For example, search for 'business networking WhatsApp groups,' 'digital marketing groups,' or 'job updates WhatsApp groups.' Your search terms help identify relevant group invitation links published on accessible websites and other supported sources.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/1384/1384055.png",
      sectionHeading: "Search WhatsApp Groups",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Group Discovery",
      presubtitle: "Keyword-Based Search",
    },
    {
      subheading: "WhatsApp Group Scraper (Discover Group Invite Links)",
      paragraph: "Once you enter your search criteria, discover relevant WhatsApp group invitation links from supported sources. Organize the links according to your selected keywords or group categories, making it easier to find communities related to your interests, industry, business, or professional network.",
      description: "Once you enter your search criteria, discover relevant WhatsApp group invitation links from supported sources. Organize the links according to your selected keywords or group categories, making it easier to find communities related to your interests, industry, business, or professional network.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/1384/1384055.png",
      sectionHeading: "Extract Group Links",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Link Extraction",
      presubtitle: "Group Invite Discovery",
    },
    {
      subheading: "WhatsApp Group Scraper (Collect Available Group Details)",
      paragraph: "After discovering group links, collect available information such as group names, descriptions, categories, and source URLs where supported. Phone numbers explicitly published in accessible sources may also be recorded when appropriate. WhatsApp does not make every group member's phone number publicly available for unrestricted bulk extraction, so private member details are not assumed to be accessible.",
      description: "After discovering group links, collect available information such as group names, descriptions, categories, and source URLs where supported. Phone numbers explicitly published in accessible sources may also be recorded when appropriate. WhatsApp does not make every group member's phone number publicly available for unrestricted bulk extraction, so private member details are not assumed to be accessible.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/1384/1384055.png",
      sectionHeading: "Collect Group Information",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Group Data",
      presubtitle: "Available Information",
    },
    {
      subheading: "WhatsApp Group Scraper (Review and Organize Results)",
      paragraph: "Review the collected group invitation links and available group information in an organized format. Check the discovered links, group categories, search keywords, and source details to identify relevant communities, remove duplicate links, and manage your group discovery results efficiently.",
      description: "Review the collected group invitation links and available group information in an organized format. Check the discovered links, group categories, search keywords, and source details to identify relevant communities, remove duplicate links, and manage your group discovery results efficiently.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/1384/1384055.png",
      sectionHeading: "Review Group Results",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Data Management",
      presubtitle: "Organized Results",
    },
    {
      subheading: "WhatsApp Group Scraper (Download or Export Data)",
      paragraph: "Once you have reviewed your results, export the collected group links and available information in a supported format, such as CSV or Excel, if available. Use the exported data to organize communities, support research, discover relevant networking groups, and manage group resources. Ensure that any personal information is collected and used with appropriate authorization and in accordance with applicable privacy requirements.",
      description: "Once you have reviewed your results, export the collected group links and available information in a supported format, such as CSV or Excel, if available. Use the exported data to organize communities, support research, discover relevant networking groups, and manage group resources. Ensure that any personal information is collected and used with appropriate authorization and in accordance with applicable privacy requirements.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/1384/1384055.png",
      sectionHeading: "Download or Export Data",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Data Export",
      presubtitle: "Group Link Management",
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
      <VideoSection {...videoSection} toolName={`whatsapp_group`} />
      <FaqSection />
      <HorizontalAds/>
      <WhyChooseUs />
    </>
  );
};

export default WhatsAppGroup;
