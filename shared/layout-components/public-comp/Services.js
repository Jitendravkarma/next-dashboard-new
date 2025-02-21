'use client'
import React from "react";
import Link from "next/link";

const serviceData = [
  {
    imageSrc: "/assets/img/google.png",
    videoURL:"https://www.youtube.com/watch?v=xJsktXJfZZ8&t=1s",
    title: "Google Search Scraper",
    trialLink: "/google-search-scraper",
    description: (
      <>
        Scrape data by searching keywords on Google.com to view website names, email IDs, contact numbers, and more for effective data gathering with this <b>web scraping tool</b>.
      </>
    ),
  },
  {
    imageSrc: "/assets/img/gmapIcon.png",
    videoURL:"https://www.youtube.com/watch?v=BhI2KKoSj3Y",
    title: "Google Map Scraper",
    trialLink: "/google-map-scraper",
    description: (
      <>
        Utilize this <b>Google Map Scraper</b> to scrape data from map.google.com, extracting website names, email IDs, contact numbers, and more for your business needs.
      </>
    ),
  },
  {
    imageSrc: "/assets/img/website.png",
    videoURL:"https://www.youtube.com/watch?v=_sXWe4U2Cz8",
    title: "Website Data Scraper",
    trialLink: "/website-data-scraper",
    description: (
      <>
        With our <b>website data scraper software</b>, gather millions of country-specific web domain records, including domain names, emails, and phone numbers seamlessly.
      </>
    ),
  },
  {
    imageSrc: "/assets/img/document.png",
    videoURL:"https://www.youtube.com/watch?v=NfOetsKFX_E",
    title: "Document Data Scraper",
    trialLink: "/document-data-scraper",
    description: (
      <>
        Our <b>document scraper</b> handles .txt, .csv, .pdf, and more, efficiently extracting contact numbers and email addresses from various document types.
      </>
    ),
  },
  {
    imageSrc: "/assets/img/imageIcon.png",
    videoURL:"https://www.youtube.com/watch?v=k_zh66JW-oU",
    title: "Image Data Scraper",
    trialLink: "/image-data-scraper",
    description: (
      <>
        Upload any image to our <b>image scraping tool</b> to extract text or details efficiently, converting visuals into data to enhance your workflow.
      </>
    ),
  },
  {
    imageSrc: "/assets/img/directory.png",
    videoURL:"https://www.youtube.com/watch?v=LW9_PAJhens",
    title: "Business Directory Scraper",
    trialLink: "/business-directory-scraper",
    description: (
      <>
        Easily scrape data by entering URLs of directories, including email IDs, contact numbers, and domain names for efficient <b>business directory scraping</b>.
      </>
    ),
  },
  {
    imageSrc: "/assets/img/websiteIcon.png",
    videoURL:"",
    title: "Website Data Center",
    trialLink: "/website-data-scraper",
    description: (
      <>
        Our <b>Website Data Center</b> allows quick searches by country and keyword, delivering results like URLs, emails, and phone numbers tailored to your needs.
      </>
    ),
  },
  {
    imageSrc: "/assets/img/domain.png",
    videoURL:"https://www.youtube.com/watch?v=iGRgQurIOPg",
    title: "Whois Domain Database",
    trialLink: "/whois-domain-database",
    description: (
      <>
        Access our extensive <b>Whois database download</b>, featuring raw data collected over 8 years from API sources, filtering year-wise for convenient <b>whois search</b>.
      </>
    ),
  },
  {
    imageSrc: "directory",
    videoURL:"",
    title: "Coming Soon",
    trialLink: "/google_search_scraper",
    description: (
      <>
        We are excited to introduce new features soon, including advanced <b>data scraping options</b> to enhance your <b>web scraping experience</b>.
      </>
    ),
  },
];


const Services = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <p className="text-xl font-normal mb-5">
        Our web crawler spider tool can scrape data in many ways.
        </p>
        <div className="grid gap-x-10 gap-y-7 md:grid-cols-2 lg:grid-cols-3 pt-4 md:pt-10">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-sm p-8 flex flex-col gap-3 border shadow-sm hover:shadow-lg duration-300 mb-3 ${service.title === "Coming Soon" && "flex justify-center items-center"}`}
            >
              {
                service.title !== "Coming Soon" &&
                <img
                    src={service.imageSrc}
                    className="h-auto w-20 mx-auto"
                    width="100px"
                    alt={service.title}
                />
              }
              <p className={`text-center font-normal mt-3 mb-2 ${service.title === "Coming Soon" ? "text-red-500 text-3xl drop-shadow-xl" : "text-xl"}`}>
                {service.title}
              </p>
              {
                service.title !== "Coming Soon" &&
                <>
                  <p className="text-xss text-center font-light leading-normal">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-center gap-2 mt-auto pt-4 border-t border-gray-300">
                    <Link href={service.trialLink} target="_blank" className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-blue-600 border-blue-600 rounded-sm hover:bg-blue-600 hover:text-white gap-1">Free trial</Link>
                    <button className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-red-500 border-red-500 rounded-sm hover:bg-red-500 hover:text-white gap-1" title="How to use?">
                      {/* <FontAwesomeIcon icon={fayoutube}/> */}
                      <i className="ri-youtube-fill"></i>
                      YouTube
                    </button>
                    {/* <YouTubeBtn to={service.videoURL}/> */}
                  </div>
                </>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
