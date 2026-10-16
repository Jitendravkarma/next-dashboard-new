import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_real_estate, seo_whatsapp_veri } from "@/shared/data/seo-content/content";
import Link from "next/link";
import HowItWork from "@/shared/layout-components/public-comp/HowItWork";
import VideoSection from "@/shared/layout-components/public-comp/VideoSection";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_whatsapp_veri;

const HeaderProp = {
  title: (
    <>
      WhatsApp Number Verification
    </>
  ),
  description:
    `Check whether a phone number is registered on WhatsApp using the supported verification method. Identify numbers that are available on WhatsApp and organize your contact lists for more targeted WhatsApp communication and business outreach.`,
  buttonText: `Try For Free`,
  buttonLink: `/signup`,
  leftImg: `/assets/img/slider-images/whatsapp_verification.png`,
  rightImg: `/assets/img/slider-images/gscreen2.png`,
}

const dataTypes = [
  {
    tooltips: `Check whether a phone number is identified as registered on WhatsApp by the supported verification service.`,
    keywords: `WhatsApp Number, Registration Status, WhatsApp Availability`,
  },
  {
    tooltips: `Validate phone number formatting and country codes before checking WhatsApp registration.`,
    keywords: `Phone Number, Country Code, Number Validation`,
  },
  {
    tooltips: `Separate numbers based on the WhatsApp registration status returned by the verification service.`,
    keywords: `Registered, Not Registered, Unknown Status`,
  },
  {
    tooltips: `Organize verification results to help prepare contact lists for WhatsApp communication workflows.`,
    keywords: `Verified Contacts, Contact List Cleaning, WhatsApp Outreach`,
  },
];

const noOfRecords = [
  {
    icon: <i className={`ri-whatsapp-line`}></i>,
    value: `Fast`,
    label: `WhatsApp Number Checks`,
  },
  {
    icon: <i className={`ri-checkbox-circle-line`}></i>,
    value: `Available`,
    label: `Registration Status`,
  },
  {
    icon: <i className={`ri-contacts-line`}></i>,
    value: `Bulk`,
    label: `Contact List Verification`,
  },
  {
    icon: <i className={`ri-list-check-2`}></i>,
    value: `Simple`,
    label: `Result Organization`,
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
      subheading: `Upload Your WhatsApp Number CSV`,
      paragraph: `Upload a CSV file containing the phone numbers you want to check for WhatsApp registration. Include a phone number column and country codes where required.`,
      description: `Upload a CSV file containing the phone numbers you want to check for WhatsApp registration. Include a phone number column and country codes where required.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Upload Your WhatsApp Contact List`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 1`,
      presubtitle: `Upload CSV`,
    },
    {
      subheading: `Validate Phone Number Format`,
      paragraph: `Check phone number formatting and country codes to prepare numbers for the WhatsApp verification process.`,
      description: `Check phone number formatting and country codes to prepare numbers for the WhatsApp verification process.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Prepare Your Numbers`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 2`,
      presubtitle: `Validate`,
    },
    {
      subheading: `Check WhatsApp Registration`,
      paragraph: `Submit numbers to the supported verification service to check whether they are identified as registered on WhatsApp.`,
      description: `Submit numbers to the supported verification service to check whether they are identified as registered on WhatsApp.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Verify WhatsApp Availability`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 3`,
      presubtitle: `Verify`,
    },
    {
      subheading: `Review Registration Results`,
      paragraph: `Review the status returned for each number, including registered, not registered, or unknown where supported.`,
      description: `Review the status returned for each number, including registered, not registered, or unknown where supported.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Check Number Status`,
      link: `/signup`,
      buttonText: `Try Now`,
      pretitle: `Step 4`,
      presubtitle: `Results`,
    },
    {
      subheading: `Export Your Verified Contacts`,
      paragraph: `Organize and export the verification results to support contact management and relevant WhatsApp business communication workflows.`,
      description: `Organize and export the verification results to support contact management and relevant WhatsApp business communication workflows.`,
      imageSrc: `https://cdn-icons-png.flaticon.com/128/3850/3850285.png`,
      sectionHeading: `Export WhatsApp Results`,
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
      <VideoSection {...videoSection} toolName={`bing`} />
      <FaqSection />
      <HorizontalAds/>
      <WhyChooseUs />
    </>
  );
};

export default JobPortal;
