import React from "react";
import { Heading, Para } from "../Heading";

const Services = () => {
  const services = [
    {
      title: "Bing Search Scraper",
      img: "/assets/iconfonts/dashboard-icon/bing.png",
      des: "Collect Bing search data: URLs, titles, and contacts.",
      url: "/services/bing-search-scraper/",
    },
    {
      title: "Yahoo Search Scraper",
      img: "/assets/iconfonts/dashboard-icon/yahoo.png",
      des: "Filter out the results from Yahoo search engine and get important data.",
      url: "/services/yahoo-search-scraper/",
    },
    {
      title: "DuckDuckGo Scraper",
      img: "/assets/iconfonts/dashboard-icon/duckduckgo.png",
      des: "Get search results from DuckDuckGo, including websites, description, and contact details",
      url: "/services/duckduckgo-search-scraper/",
    },
    {
      title: "Google Search Scraper",
      img: "/assets/iconfonts/dashboard-icon/google.png",
      des: "Extract search results from Google, including titles, URLs, and descriptions",
      url: "/services/google-search-scraper/",
    },
    {
      title: "Google Map Scraper",
      img: "/assets/iconfonts/dashboard-icon/map.png",
      des: "Scrape business details from Google Maps, including name, phone, and address.",
      url: "/services/google-map-scraper/",
    },
    {
      title: "Live Website Scraping",
      img: "/assets/iconfonts/dashboard-icon/live.png",
      des: "Get the contact information, social media links, and more data directly from live websites.",
      url: "/services/live-website-scraping/",
    },
    {
      title: "Live Website Data",
      img: "/assets/iconfonts/dashboard-icon/websiteIcon.png",
      des: "Instant business leads and faster engagement, powered by our next-gen live website data.",
      url: "/services/live-website-data/",
    },
    {
      title: "Facebook Scraper",
      img: "/assets/iconfonts/dashboard-icon/facebook.png",
      des: "Get the Followers, Phone, Email and more public data easily from facebook.",
      url: "/services/facebook-scraper/",
    },
    {
      title: "YouTube Scraper",
      img: "/assets/iconfonts/dashboard-icon/youtube.png",
      des: "Know about subscribers, viewers, and other important data of YouTubers.",
      url: "/services/youtube-scraper/",
    },
    {
      title: "India Mart Scraper",
      img: "/assets/iconfonts/dashboard-icon/indiamartIcon.png",
      des: "Extract website URL, virtual phone numbers, actual phone number, email address, and GST number.",
      url: "/services/indiamart-scraper",
    },
    {
      title: "Justdial Scraper",
      img: "/assets/iconfonts/dashboard-icon/jdIcon.png",
      des: "Extract business listings and profile details, including email address, GST number, virtual and actual phone numbers, and more.",
      url:"/services/justdial-scraper"
    },
    {
      title: "Sulekha Scraper",
      img: "/assets/iconfonts/dashboard-icon/sulekha.png",
      des: "Extract listing profile details, including website URL, virtual and actual phone numbers, email address, business address, and more.",
      url:"/services/sulekha-scraper"
    },
    {
      title: "Trade India Scraper",
      img: "/assets/iconfonts/dashboard-icon/tradeindia.png",
      des: "Extract business profile information, including profile URL, business website, virtual and actual phone numbers, email address, and more.",
      url:"/services/tradeindia-scraper"
    },
    {
      title: "ExportersIndia Scraper",
      img: "/assets/iconfonts/dashboard-icon/exporters.png",
      des: "Get ExportersIndia india business profile information, including website, virtual and actual phone numbers, email address, GST number .",
      url:"/services/exportersindia-scraper"
    },
    {
      title: "Email Scraper",
      img: "/assets/iconfonts/dashboard-icon/email.png",
      des: "Extract bulk email addresses based on various domain types such as .com, .in, .org, and more—filtered by your chosen keywords and city.",
      url:"/services/email-scraper"
    },
    {
      title: "Phone Scraper",
      img: "/assets/iconfonts/dashboard-icon/phone.png",
      des: "Extract Indian phone numbers in bulk based on your selected keywords and city.",
      url:"/services/phone-scraper"
    },
    {
      title: "Website Data Scraper",
      img: "/assets/iconfonts/dashboard-icon/website.png",
      des: "Extract valuable data from websites for research and marketing.",
      url: "/services/website-data-scraper/",
    },
    {
      title: "Business Directory Scraper",
      img: "/assets/iconfonts/dashboard-icon/directoryIcon.png",
      des: "Extract contact details from online business directories easily.",
      url: "/services/business-directory-scraper/",
    },
    {
      title: "Document Data Scraper",
      img: "/assets/iconfonts/dashboard-icon/docIcon.png",
      des: "Extract data from CSV, Excel, Doc, and other documents automatically.",
      url: "/services/document-data-scraper/",
    },
    {
      title: "Image data scraper",
      img: "/assets/iconfonts/dashboard-icon/imageIcon.png",
      des: "Extract text and contact information from images with OCR technology.",
      url: "/services/image-data-scraper/",
    },
    {
      title: "Whois domain database",
      img: "/assets/iconfonts/dashboard-icon/domain.png",
      des: "Retrieve domain ownership details like name, address, and country.",
      url: "/services/whois-database/",
    },
  ];
  return (
    <div>
      <Heading title={"Services & Tools"} />
      <Para para={"Explore our top tools & services and generate your business leads."}/>
      <div className="flex flex-wrap gap-5 justify-center my-10">
      {services.map(({ title, url, des, img }, ind) => (
        <a
          href={url}
          key={ind}
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-[1.03] transition-all duration-300"
        >
          <div className="w-full sm:w-[370px] bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 sm:py-10 shadow-lg rounded-xl text-center hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-100 hover:to-white">
            <div className="mb-3 sm:mb-6">
              <img
                src={img}
                alt={title}
                className="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] mx-auto rounded-full shadow-sm"
              />
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-blue-900 mb-3">{title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{des}</p>
          </div>
        </a>
      ))}

      </div>
    </div>
  );
};

export default Services;
