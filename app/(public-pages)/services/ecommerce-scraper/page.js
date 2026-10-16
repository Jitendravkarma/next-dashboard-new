import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_ecomm } from "@/shared/data/seo-content/content";
import Link from "next/link";
import HowItWork from "@/shared/layout-components/public-comp/HowItWork";
import VideoSection from "@/shared/layout-components/public-comp/VideoSection";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_ecomm;

const HeaderProp = {
title: (
<>
Ecommerce Scraper
</>
),
description:
"Our Ecommerce Scraper helps you extract valuable product and seller information from multiple ecommerce platforms, including Amazon, Flipkart, Meesho, and more. Collect available product names, prices, descriptions, ratings, reviews, product URLs, seller details, and other platform-supported information. Automate ecommerce data collection for product research, competitor analysis, price monitoring, and market insights. Organize and export extracted data to simplify your workflow and support data-driven business decisions.",
buttonText: "Try For Free",
buttonLink: "/signup",
leftImg: "/assets/img/slider-images/ecommerce_scraper.png",
rightImg: "/assets/img/slider-images/gscreen2.png",
}

const dataTypes = [
{ tooltips: 'The name or title of the product listed on the ecommerce platform.', keywords: 'Product Name' },
{ tooltips: 'The current listed price of the product, when available.', keywords: 'Product Price' },
{ tooltips: 'The original or maximum retail price of the product, when available.', keywords: 'Original Price' },
{ tooltips: 'The product description and specifications provided in the listing.', keywords: 'Description' },
{ tooltips: 'The direct URL of the product listing on the ecommerce platform.', keywords: 'Product URL' },
{ tooltips: 'The name of the seller or merchant associated with the product, when available.', keywords: 'Seller Name' },
{ tooltips: 'The customer rating displayed on the product listing, when available.', keywords: 'Rating' },
{ tooltips: 'The number of customer reviews associated with the product, when available.', keywords: 'Reviews' },
{ tooltips: 'The product category or classification shown on the platform.', keywords: 'Category' },
{ tooltips: 'The product image URL, when available.', keywords: 'Product Image' },
{ tooltips: 'The ecommerce marketplace from which the product data was extracted.', keywords: 'Source Platform' },
{ tooltips: 'The search keyword used to find the product listing.', keywords: 'Searched Keyword' }
];

const noOfRecords = [
{ icon: <i className="ri-clipboard-line"></i>, value: "Multiple", label: "Product Records" },
{ icon: <i className="ri-store-2-line"></i>, value: "Multiple", label: "Ecommerce Sources" },
{ icon: <i className="ri-price-tag-3-line"></i>, value: "Available", label: "Product Prices" },
{ icon: <i className="ri-file-excel-2-line"></i>, value: "Export", label: "Product Data" },
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
subheading: "Ecommerce Scraper (Select Your Source)",
paragraph: "Start by selecting your preferred ecommerce platform, such as Amazon, Flipkart, Meesho, or another supported source. Choose the products or categories you want to explore and prepare your search criteria to find relevant product listings.",
description: "Start by selecting your preferred ecommerce platform, such as Amazon, Flipkart, Meesho, or another supported source. Choose the products or categories you want to explore and prepare your search criteria to find relevant product listings.",
imageSrc: "https://cdn-icons-png.flaticon.com/128/1162/1162499.png",
sectionHeading: "Select Ecommerce Source",
link: "/signup",
buttonText: "Try Now",
pretitle: "Ecommerce Research",
presubtitle: "Product Data Extraction",
},
{
subheading: "Ecommerce Scraper (Enter Product Keywords)",
paragraph: "Enter the product name, brand, category, or other relevant search keywords to find matching listings. Use specific search terms to narrow down the results and discover products relevant to your research, competitor analysis, or pricing strategy.",
description: "Enter the product name, brand, category, or other relevant search keywords to find matching listings. Use specific search terms to narrow down the results and discover products relevant to your research, competitor analysis, or pricing strategy.",
imageSrc: "https://cdn-icons-png.flaticon.com/128/1162/1162499.png",
sectionHeading: "Search Products",
link: "/signup",
buttonText: "Try Now",
pretitle: "Product Discovery",
presubtitle: "Keyword-Based Search",
},
{
subheading: "Ecommerce Scraper (Initiate Data Extraction)",
paragraph: "Once you have selected the source and entered your search criteria, start the extraction process. Our Ecommerce Scraper collects available product information from supported listings, which may include product names, prices, descriptions, ratings, reviews, and seller details, depending on the platform.",
description: "Once you have selected the source and entered your search criteria, start the extraction process. Our Ecommerce Scraper collects available product information from supported listings, which may include product names, prices, descriptions, ratings, reviews, and seller details, depending on the platform.",
imageSrc: "https://cdn-icons-png.flaticon.com/128/1162/1162499.png",
sectionHeading: "Extract Product Data",
link: "/signup",
buttonText: "Try Now",
pretitle: "Automated Extraction",
presubtitle: "Product Information",
},
{
subheading: "Ecommerce Scraper (Review Extracted Results)",
paragraph: "After extraction, review the collected product listings in an organized format. Examine available prices, product descriptions, ratings, review counts, URLs, and other extracted fields to compare products, analyze competitors, and identify useful market opportunities.",
description: "After extraction, review the collected product listings in an organized format. Examine available prices, product descriptions, ratings, review counts, URLs, and other extracted fields to compare products, analyze competitors, and identify useful market opportunities.",
imageSrc: "https://cdn-icons-png.flaticon.com/128/1162/1162499.png",
sectionHeading: "Review Product Results",
link: "/signup",
buttonText: "Try Now",
pretitle: "Product Analysis",
presubtitle: "Organized Results",
},
{
subheading: "Ecommerce Scraper (Download or Export Data)",
paragraph: "Once you have reviewed your results, export the collected product data in the supported format, such as CSV or Excel, if available. Use your exported data for product research, price comparisons, competitor monitoring, catalog analysis, reporting, and other ecommerce business activities.",
description: "Once you have reviewed your results, export the collected product data in the supported format, such as CSV or Excel, if available. Use your exported data for product research, price comparisons, competitor monitoring, catalog analysis, reporting, and other ecommerce business activities.",
imageSrc: "https://cdn-icons-png.flaticon.com/128/1162/1162499.png",
sectionHeading: "Export Ecommerce Data",
link: "/signup",
buttonText: "Try Now",
pretitle: "Data Export",
presubtitle: "Business Insights",
},
],
};

const EcommerceScraper = () => {
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
      <VideoSection {...videoSection} toolName={`ecomm`} />
      <FaqSection />
      <HorizontalAds/>
      <WhyChooseUs />
    </>
  );
};

export default EcommerceScraper;
