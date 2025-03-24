import React from "react";
import { Heading, Para } from "../Heading";

const Services = () => {
  const services = [
    {
      title: "Bing Search Scraper",
      img: "/assets/iconfonts/dashboard-icon/bing.png",
      des: "Collect Bing search data: URLs, titles, and contacts.",
      url: "https://webcrawlerspider.com/services/bing-search-scraper/",
    },
    {
      title: "Google Search Scraper",
      img: "/assets/iconfonts/dashboard-icon/google.png",
      des: "Extract search results from Google, including titles, URLs, and descriptions",
      url: "https://webcrawlerspider.com/services/google-search-scraper/",
    },
    {
      title: "Google Map Scraper",
      img: "/assets/iconfonts/dashboard-icon/map.png",
      des: "Scrape business details from Google Maps, including name, phone, and address.",
      url: "https://webcrawlerspider.com/services/google-map-scraper/",
    },
    {
      title: "Website Data Center",
      img: "/assets/iconfonts/dashboard-icon/websiteIcon.png",
      des: "Instant business leads and faster engagement, powered by our next-gen website data center.",
      url: "https://webcrawlerspider.com/services/website-data-center/",
    },
    {
      title: "Website Data Scraper",
      img: "/assets/iconfonts/dashboard-icon/website.png",
      des: "Extract valuable data from websites for research and marketing.",
      url: "https://webcrawlerspider.com/services/website-data-scraper/",
    },
    {
      title: "Business Directory Scraper",
      img: "/assets/iconfonts/dashboard-icon/directoryIcon.png",
      des: "Extract contact details from online business directories easily.",
      url: "https://webcrawlerspider.com/services/business-directory-scraper/",
    },
    {
      title: "Document Data Scraper",
      img: "/assets/iconfonts/dashboard-icon/docIcon.png",
      des: "Extract data from CSV, Excel, Doc, and other documents automatically.",
      url: "https://webcrawlerspider.com/services/document-data-scraper/",
    },
    {
      title: "Image data scraper",
      img: "/assets/iconfonts/dashboard-icon/imageIcon.png",
      des: "Extract text and contact information from images with OCR technology.",
      url: "https://webcrawlerspider.com/services/image-data-scraper/",
    },
    {
      title: "Whois domain download",
      img: "/assets/iconfonts/dashboard-icon/domain.png",
      des: "Retrieve domain ownership details like name, address, and country.",
      url: "https://webcrawlerspider.com/services/whois-domain-download/",
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
          <div className="w-[370px] bg-gradient-to-br from-blue-50 to-blue-100 p-6 py-10 shadow-lg rounded-xl text-center hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-100 hover:to-white">
            <div className="mb-6">
              <img
                src={img}
                alt={title}
                className="w-[60px] h-[60px] mx-auto rounded-full shadow-sm"
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{des}</p>
          </div>
        </a>
      ))}

      </div>
    </div>
  );
};

export default Services;
