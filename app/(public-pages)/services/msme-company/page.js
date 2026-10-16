import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_msme_company } from "@/shared/data/seo-content/content";
import Link from "next/link";
import HowItWork from "@/shared/layout-components/public-comp/HowItWork";
import VideoSection from "@/shared/layout-components/public-comp/VideoSection";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_msme_company;

const HeaderProp = {
  title: (
    <>
    MSME Company Scraper
    </>
  ),
  description:
    `Our MSME Company Scraper helps you collect available business and registration information about Micro, Small, and Medium Enterprises (MSMEs) across India. Discover registered enterprises based on state, district, industry, product, or business activity. Extract available company names, contact names, phone numbers, email addresses, business addresses, PIN codes, Udyam registration numbers, industry categories, business activities, and website URLs when available. Automate MSME data collection for B2B lead generation, supplier discovery, market research, sales prospecting, and business development. Organize and export collected records to build targeted business databases and identify potential opportunities across Indian industries.`,
  buttonText: `Try For Free`,
  buttonLink: `/signup`,
  leftImg: `/assets/img/slider-images/msme_scraper.png`,
  rightImg: `/assets/img/slider-images/gscreen2.png`,
}

const dataTypes = [
  { tooltips: `The registered name of the MSME or enterprise listed in the available source records.`, keywords: `Company Name` },
  { tooltips: `The publicly available phone or mobile number associated with the enterprise, when accessible.`, keywords: `Phone Number` },
  { tooltips: `The publicly available business email address associated with the enterprise, when available.`, keywords: `Email Address` },
  { tooltips: `The name of the entrepreneur, proprietor, contact person, or authorized representative, when available.`, keywords: `Contact Person Name` },
  { tooltips: `The Udyam registration number associated with the registered MSME, when available in the source record.`, keywords: `Udyam Registration Number` },
  { tooltips: `The official business address, including premises, street, locality, or other available address details.`, keywords: `Business Address` },
  { tooltips: `The city, district, state, and PIN code associated with the enterprise, when available.`, keywords: `City / District / State / PIN Code` },
  { tooltips: `The primary business activity, such as manufacturing, services, or another activity listed in the source record.`, keywords: `Business Activity` },
  { tooltips: `The industry classification or National Industrial Classification (NIC) code associated with the enterprise, when available.`, keywords: `Industry / NIC Code` },
  { tooltips: `The classification of the enterprise as micro, small, or medium, when provided by the source.`, keywords: `MSME Enterprise Category` },
  { tooltips: `The organization type, such as proprietorship, partnership, company, or another listed legal structure, when available.`, keywords: `Organization Type` },
  { tooltips: `The official website URL associated with the enterprise, when available from supported source pages.`, keywords: `Website URL` },
  { tooltips: `The publicly available GST identification details associated with the business, only when accessible from a supported source.`, keywords: `GST Details` },
  { tooltips: `The date on which the enterprise was registered under Udyam or another registration system, when available.`, keywords: `Registration Date` },
  { tooltips: `The date on which the enterprise commenced its business or production, when available in the source record.`, keywords: `Business Commencement Date` },
  { tooltips: `The original source page or record URL from which the MSME information was collected.`, keywords: `Source URL` }
];

const noOfRecords = [
  { icon: <i className={`ri-clipboard-line`}></i>, value: `Multiple`, label: `MSME Company Records` },
  { icon: <i className={`ri-contacts-line`}></i>, value: `Available`, label: `Business Contact Details` },
  { icon: <i className={`ri-building-2-line`}></i>, value: `Available`, label: `Enterprise Information` },
  { icon: <i className={`ri-map-pin-line`}></i>, value: `Available`, label: `Business Locations` },
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
      subheading: `MSME Company Scraper (Search Indian MSMEs)`,
      paragraph: `Start by entering a business keyword, product, industry, or location to discover relevant MSME companies across India. For example, search for textile manufacturers in Surat, food processing companies in Maharashtra, engineering businesses in Pune, or packaging manufacturers in Delhi. Use relevant search criteria to discover enterprise records from supported MSME directories and registration sources.`,
      description: `Start by entering a business keyword, product, industry, or location to discover relevant MSME companies across India. For example, search for textile manufacturers in Surat, food processing companies in Maharashtra, engineering businesses in Pune, or packaging manufacturers in Delhi. Use relevant search criteria to discover enterprise records from supported MSME directories and registration sources.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Search MSME Companies`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `MSME Search`,
      presubtitle: `Discover Indian Businesses`,
    },
    {
      subheading: `MSME Company Scraper (Select Location & Industry)`,
      paragraph: `Choose your preferred supported MSME data source and refine your search using state, district, product, industry, or business activity. Discover relevant enterprises from supported Indian MSME directories and registration records. For example, target manufacturers in Gujarat, service providers in Karnataka, or food product businesses in Madhya Pradesh to find companies that match your business requirements.`,
      description: `Choose your preferred supported MSME data source and refine your search using state, district, product, industry, or business activity. Discover relevant enterprises from supported Indian MSME directories and registration records. For example, target manufacturers in Gujarat, service providers in Karnataka, or food product businesses in Madhya Pradesh to find companies that match your business requirements.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Filter by State & Industry`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Targeted Search`,
      presubtitle: `Location & Business Activity`,
    },
    {
      subheading: `MSME Company Scraper (Initiate Company Data Extraction)`,
      paragraph: `After selecting your search criteria, start the extraction process. Our MSME Company Scraper collects available enterprise information, which may include company names, Udyam registration numbers, contact names, phone numbers, email addresses, business addresses, PIN codes, industry classifications, business activities, and registration dates. Website URLs and additional business details may also be collected when available through supported sources.`,
      description: `After selecting your search criteria, start the extraction process. Our MSME Company Scraper collects available enterprise information, which may include company names, Udyam registration numbers, contact names, phone numbers, email addresses, business addresses, PIN codes, industry classifications, business activities, and registration dates. Website URLs and additional business details may also be collected when available through supported sources.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Extract MSME Company Data`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Automated Extraction`,
      presubtitle: `Company & Contact Details`,
    },
    {
      subheading: `MSME Company Scraper (Review Collected Company Records)`,
      paragraph: `After extraction, review your collected MSME records in an organized format. Check available company names, registration numbers, contact information, addresses, business activities, industry classifications, and other enterprise details. Compare companies across different states, districts, and industries to identify potential suppliers, business partners, customers, and sales prospects for your organization.`,
      description: `After extraction, review your collected MSME records in an organized format. Check available company names, registration numbers, contact information, addresses, business activities, industry classifications, and other enterprise details. Compare companies across different states, districts, and industries to identify potential suppliers, business partners, customers, and sales prospects for your organization.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Review MSME Records`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Record Management`,
      presubtitle: `Organized Company Data`,
    },
    {
      subheading: `MSME Company Scraper (Download or Export Data)`,
      paragraph: `Once you have reviewed your results, export the collected company records in a supported format, such as CSV or Excel, if available. Use the extracted data for B2B lead generation, supplier research, industry analysis, market research, sales prospecting, and business development. Phone numbers, email addresses, registration details, website URLs, and other fields depend on their availability in the source records and the supported extraction process.`,
      description: `Once you have reviewed your results, export the collected company records in a supported format, such as CSV or Excel, if available. Use the extracted data for B2B lead generation, supplier research, industry analysis, market research, sales prospecting, and business development. Phone numbers, email addresses, registration details, website URLs, and other fields depend on their availability in the source records and the supported extraction process.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Download or Export Data`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Data Export`,
      presubtitle: `Indian MSME Lead Generation`,
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
      <VideoSection {...videoSection} toolName={`msme_diary`} />
      <FaqSection />
      <HorizontalAds/>
      <WhyChooseUs />
    </>
  );
};

export default JobPortal;
