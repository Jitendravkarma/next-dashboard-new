import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_job } from "@/shared/data/seo-content/content";
import Link from "next/link";
import HowItWork from "@/shared/layout-components/public-comp/HowItWork";
import VideoSection from "@/shared/layout-components/public-comp/VideoSection";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_job;

const HeaderProp = {
  title: (
    <>
    Job Portal Scraper
    </>
  ),
  description:
    "Our Job Portal Scraper extracts valuable job listing and recruitment data from various job portals, including Naukri.com, Shine, PlacementIndia, and other supported platforms. Collect available information such as job titles, company names, job descriptions, salary details, job locations, experience requirements, recruiter names, company websites, and publicly available contact details. Automate job data collection for recruitment research, market analysis, hiring insights, and business intelligence. Simplify your workflow with organized job listing data for further analysis and reporting.",
  buttonText: "Try For Free",
  buttonLink: "/signup",
  leftImg: "/assets/img/slider-images/job_portal_scraper.png",
  rightImg: "/assets/img/slider-images/gscreen2.png",
}

const dataTypes = [
  { tooltips: 'The title or designation of the advertised job position.', keywords: 'Job Title' },
  { tooltips: 'The name of the company offering the job opportunity.', keywords: 'Company Name' },
  { tooltips: 'The full description of the job role, responsibilities, and requirements.', keywords: 'Job Description' },
  { tooltips: 'The salary range or compensation details mentioned in the job listing, when available.', keywords: 'Salary' },
  { tooltips: 'The city, state, or other location associated with the job opening.', keywords: 'Job Location' },
  { tooltips: 'The minimum or preferred work experience required for the position.', keywords: 'Experience' },
  { tooltips: 'The educational qualifications or skills required for the job, when available.', keywords: 'Qualifications & Skills' },
  { tooltips: 'The employment category, such as full-time, part-time, contract, or internship.', keywords: 'Employment Type' },
  { tooltips: 'The name of the recruiter or hiring contact, when available.', keywords: 'Recruiter Name' },
  { tooltips: 'The publicly available company or recruiter email address, when provided or identified through supported sources.', keywords: 'Email' },
  { tooltips: 'The publicly available company or recruiter phone number, when provided or identified through supported sources.', keywords: 'Phone Number' },
  { tooltips: 'The official company website associated with the job listing, when available.', keywords: 'Company Website' },
  { tooltips: 'The direct URL of the original job listing.', keywords: 'Job URL' },
  { tooltips: 'The date the job was posted or published, when available.', keywords: 'Posted Date' },
  { tooltips: 'The keyword used to find relevant job listings.', keywords: 'Searched Keyword' }
];

const noOfRecords = [
  { icon: <i className="ri-clipboard-line"></i>, value: "Multiple", label: "Job Records" },
  { icon: <i className="ri-building-2-line"></i>, value: "Available", label: "Company Details" },
  { icon: <i className="ri-briefcase-line"></i>, value: "Available", label: "Job Listings" },
  { icon: <i className="ri-contacts-line"></i>, value: "Available", label: "Recruiter Details" },
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
      subheading: "Job Portal Scraper (Search Jobs by Keyword)",
      paragraph: "Start by entering a job title, company name, industry, skill, or other relevant search keyword. For example, search for 'Sales Manager jobs in Mumbai' or 'Software Developer vacancies in Bangalore.' Your search criteria help discover relevant job listings across supported portals such as Naukri.com, Shine, PlacementIndia, and other available sources.",
      description: "Start by entering a job title, company name, industry, skill, or other relevant search keyword. For example, search for 'Sales Manager jobs in Mumbai' or 'Software Developer vacancies in Bangalore.' Your search criteria help discover relevant job listings across supported portals such as Naukri.com, Shine, PlacementIndia, and other available sources.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/3850/3850285.png",
      sectionHeading: "Search Jobs by Keyword",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Job Search",
      presubtitle: "Recruitment Research",
    },
    {
      subheading: "Job Portal Scraper (Select Your Job Portal)",
      paragraph: "Choose your preferred job portal or supported data source to find relevant vacancies. Explore listings from platforms such as Naukri.com, Shine, PlacementIndia, and more, depending on source availability. Refine your search by job role, location, company, experience level, or other supported filters to get more relevant results.",
      description: "Choose your preferred job portal or supported data source to find relevant vacancies. Explore listings from platforms such as Naukri.com, Shine, PlacementIndia, and more, depending on source availability. Refine your search by job role, location, company, experience level, or other supported filters to get more relevant results.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/3850/3850285.png",
      sectionHeading: "Choose Job Portal",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Multiple Sources",
      presubtitle: "Job Portal Selection",
    },
    {
      subheading: "Job Portal Scraper (Initiate Data Extraction)",
      paragraph: "Once you have selected your source and search criteria, start the extraction process. Our Job Portal Scraper collects available information from supported job listings, which may include job titles, company names, descriptions, salaries, locations, experience requirements, recruiter details, and job URLs. The information collected depends on the selected portal and the data accessible from each listing.",
      description: "Once you have selected your source and search criteria, start the extraction process. Our Job Portal Scraper collects available information from supported job listings, which may include job titles, company names, descriptions, salaries, locations, experience requirements, recruiter details, and job URLs. The information collected depends on the selected portal and the data accessible from each listing.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/3850/3850285.png",
      sectionHeading: "Extract Job Data",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Automated Extraction",
      presubtitle: "Job & Company Information",
    },
    {
      subheading: "Job Portal Scraper (Review Extracted Results)",
      paragraph: "After extraction, review your collected job listings in an organized format. Analyze job titles, hiring companies, locations, salary information, experience requirements, and other available fields. Use the extracted information for recruitment research, hiring trend analysis, competitor research, and understanding opportunities across different industries.",
      description: "After extraction, review your collected job listings in an organized format. Analyze job titles, hiring companies, locations, salary information, experience requirements, and other available fields. Use the extracted information for recruitment research, hiring trend analysis, competitor research, and understanding opportunities across different industries.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/3850/3850285.png",
      sectionHeading: "Review Job Listings",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Data Analysis",
      presubtitle: "Hiring Insights",
    },
    {
      subheading: "Job Portal Scraper (Download or Export Data)",
      paragraph: "Once you have reviewed the results, export the collected job data in a supported format, such as CSV or Excel, if available. Use the exported information for recruitment planning, job market analysis, salary research, company hiring analysis, reporting, and other business applications. Company contact information may require additional extraction from publicly available sources when it is not provided directly by the job portal.",
      description: "Once you have reviewed the results, export the collected job data in a supported format, such as CSV or Excel, if available. Use the exported information for recruitment planning, job market analysis, salary research, company hiring analysis, reporting, and other business applications. Company contact information may require additional extraction from publicly available sources when it is not provided directly by the job portal.",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/3850/3850285.png",
      sectionHeading: "Download or Export Data",
      link: "/signup",
      buttonText: "Try Now",
      pretitle: "Data Export",
      presubtitle: "Recruitment Intelligence",
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
      <VideoSection {...videoSection} toolName={`job_portal`} />
      <FaqSection />
      <HorizontalAds/>
      <WhyChooseUs />
    </>
  );
};

export default JobPortal;
