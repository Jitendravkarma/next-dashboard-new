"use client";
import React, { useState } from "react";

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null); // Track which FAQ is open

  // FAQ data as an array of objects
  const faqData = [
    {
      question: "What is Scrape Genius?",
      answer:
        "A Scrape Genius is a versatile tool that extracts data according to given keywords. It supports a range of data scraping tools for various needs, including website data scraper, yellow pages scraper, whois database lookup, and image scraping. The Scrape Genius can gather data such as mobile numbers, website URLs, and email IDs, which are essential for business growth. This tool can be used for business directory scraping, whois domain searches, and scrape images from websites, making it a powerful asset for web scraping service. With options like web scraper Chrome extension, yellow pages scraper free, and online web scraper capabilities, this tool makes scraping tasks easier. Compatible with scraping software like business directory scraper and web scraping, it is designed for efficient data extraction. The Scrape Genius can help with domain search whois, scrape data from website to Excel, and even scrape LinkedIn and scrape Instagram photos. As a comprehensive web scraping tool, it ensures accurate and organized data, providing businesses with valuable insights. From whois database download to screen scraping tools, the Scrape Genius meets diverse data needs for professionals and organizations.",
    },
    {
      question: "Can Scrape Genius tool scrape data in many ways?",
      answer:
        "Yes, the Scrape Genius has many tools and can scrape data in various ways, making it highly versatile. This includes tools like the Google Search Scraper, Google Map Scraper, Website Data Scraper, Whois Domain Data Scraper, Business Directory Scraper, and Document Data Scraper. Additionally, it offers specialized features such as the yellow pages scraper for yellow pages data extraction, whois database download for whois domain information, and image scraper from website for gathering visual data. Whether you're looking to perform business directory scraping, web scraping yellow pages, scrape excel, csv and more files, or scrape Instagram photos, the Scrape Genius provides the tools you need. It’s compatible with advanced options like business directory scraper and web scraper, as well as free tools such as yellow pages scraper free and online web scraper solutions. This makes it ideal for a variety of scraping tasks, from scraping LinkedIn to conducting icann whois searches, and supports data scraping tools for efficient data collection.",
    },
    {
      question: "What Is Google Search Scraper?",
      answer:
        "A Google Search Scraper is a specific type of web scraping tool that is designed to extract information from the search results pages of Google. This tool simulates a user querying Google's search engine and then collects data from the search results displayed, including website URLs, titles, descriptions, and keywords. As part of a larger suite of data scraping tools, the Google Search Scraper enables users to perform targeted whois searches for domain information and to gather insights for business directory scraping. It is particularly useful for digital marketing professionals and SEO experts looking to analyze competition, track trends, or gather leads. This tool is often integrated with other scraping functionalities, such as yellow pages scraper for business listings or whois database lookup for domain registration details. With the ability to automate the extraction process, users can save time and effort while obtaining accurate data to drive their strategies.",
    },
    {
      question: "What are CRM services ?",
      answer:
        "CRM (Customer Relationship Management) services help businesses manage and organize customer enquiries, leads, and interactions in one place. Our CRM tools automatically collect and centralize leads from platforms like Justdial and IndiaMART, so you don’t have to manually track or import them.",
    },
    {
      question: "What Is Website Data Scraper?",
      answer:
        "Our Website Data Scraper tool lets you easily scrape data from millions of websites worldwide. With this powerful web scraping service, you can extract domain names, email IDs, phone numbers, titles, and country details in a snap. It's simple to use, making it perfect for quick research and finding contacts. Whether you're conducting a whois database lookup or gathering leads, our website scraper is designed to boost your business by gathering all the info you need effortlessly. Utilize our web scraping tools to streamline your data collection process and enhance your marketing strategies.",
    },
    {
      question: "What is Whois Domain Data?",
      answer:
        "A Whois Domain Data Scraper is a specialized tool designed to extract information from the Whois database, including details like the owner's contact info, registration and expiration dates, hosting registrar, and sometimes the owner's name and email address. It scrapes registrant details, domain status, and registrar information, and can access Whois IP information. With bulk scraping capabilities, it efficiently handles multiple domain queries simultaneously, making it ideal for Whois search operations and tasks involving large numbers of domain lookups.",
    },
    {
      question: "What is Business Directory Scraper?",
      answer:
        "A Business Directory Scraper is a tool designed to extract information from online directories like Yelp, Yellow Pages, LinkedIn, and industry-specific databases. It gathers data such as company details, services, email IDs, contact numbers, and domain names, and can perform Whois searches for enhanced data accuracy. This tool helps streamline lead generation and manage customer data efficiently by extracting valuable insights from various business directories.",
    },
    {
      question: "What is Document Data Scraper?",
      answer:
        "A Document Data Scraper is a tool designed to extract contact numbers and email addresses from various document formats such as CSV, TXT, DOC, DOCX, XLS, HTML, and JSON. It streamlines data extraction for communication tasks, ensuring high accuracy and efficiency, particularly in business directory scraping and web scraping. The tool automates the extraction process, saving time and reducing manual effort, making it ideal for lead generation, Whois domain data, and large dataset analysis.",
    },
    // Add more FAQ objects as needed
  ];

  const toggleAccordion = (index) => {
    setOpenFaq(openFaq === index ? null : index); // Toggle the FAQ visibility
  };

  return (
    <div className="py-14 lg:py-16 bg-white">
      <div className="max-w-7xl lg:w-[70%] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-center flex items-center mb-16 justify-center gap-2">
          <span className="text-blue-500">Frequently Asked</span>Questions
        </h2>

        <div className="w-full">
          {faqData.map((faq, index) => (
            //   <div
            //   key={index}
            //   className={`border-b border-gray-200 ${
            //     openFaq === index ? 'accordion-bg-open' : ''
            //   }`}
            // >

            <div
              key={index}
              className="accordion-bg mb-4 rounded-md border border-gray-200"
            >
              <h3
                className="text-[18px] bg-soft font-semibold cursor-pointer p-4 flex items-center justify-between"
                onClick={() => toggleAccordion(index)}
              >
                {openFaq === index ? `${faq.question}` : faq.question}
                {openFaq === index ? (
                  <i className="ri-arrow-up-s-line w-4 h-4 text-black-600" />
                ) : (
                  <i className="ri-arrow-down-s-line w-4 h-4 text-black-600"></i>
                )}
              </h3>
              {openFaq === index && (
                <div className="pb-3 text-gray-600 text-sm">
                  <p className="text-black text-base font-light border-t pt-4 p-4 border-t-1">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
