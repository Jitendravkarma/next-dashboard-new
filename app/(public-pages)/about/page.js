import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import Services from "@/shared/layout-components/public-comp/Services";
import PrimaryButton from "@/shared/layout-components/public-comp/PrimaryButton";
import { seo_about } from "@/shared/data/seo-content/content";

export const metadata = seo_about

const About = () => {
  return (
    <div className="bg-white">
      {/* Contact Us Section Begin*/}
      <PageHeader title={"About us"}/>
      {/* Contact Us Section End*/}
      {/* Inquiry now Section Begin*/}
      
      <section className="bg-white pt-20">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="grid md:grid-cols-2 items-center gap-10 md:gap-12">
            {/* ... Column 1 Content ... */}
            {/* col-1 Begin */}
            <div>
              <p className="text-xl text-blue-600 font-normal mb-5">
              Who we are?
              </p>
              
              <p className="mb-2 text-xss font-light leading-normal">
              Founded in 2015, <b>Neuralnetics Technologies Private Limited</b> specializes in management software, including our <b>business directory scraper</b> and <b>yellow pages extractor</b>. With over 75 products, we offer tools for <b>data scraping</b>, such as <b>PDF scrapers</b> and <b>image scraping tools</b>. Our solutions streamline data collection for users worldwide.
              </p>
              <hr className="border-t border-gray-300 my-4"></hr>
              <p className="text-xl text-blue-600 font-normal mb-5">
              What is web crawler spider?
              </p>
              {/* <hr className="border-t border-gray-300 my-4"></hr> */}
              <p className="mb-2 text-xss font-light leading-normal">
                  The <b>Web Crawler Spider</b> is a powerful <b>data scraping tool</b> designed to simplify data extraction for <b>business professionals</b> and enthusiasts. This versatile tool acts as a <b>business directory scraper</b>, <b>yellow pages scraper</b>, and <b>yellow pages data extractor</b>, enabling users to effortlessly gather essential information such as <b>yellow pages email extractor</b> details, contact numbers, and domain names. With capabilities to <b>scrape data from websites</b>, <b>scrape images from websites</b>, and <b>scrape pdf files</b>, it is invaluable for various data collection tasks.
              </p>
              <p className="mb-2 text-xss font-light leading-normal">
                  Why struggle with complex tools when you can harness the simplicity and efficiency of the <b>Web Crawler Spider</b>? It streamlines the process of <b>web scraping yellow pages</b> and supports <b>document scraping</b> for PDFs and other formats. Whether you're conducting a <b>whois search</b> or utilizing a <b>website data scraper</b>, this tool ensures that all necessary data, including <b>whois domain</b> information and <b>whois database lookup</b>, is at your fingertips, turning minutes into moments of discovery.
              </p>


              <PrimaryButton/>
          
            </div>
            {/* col-1 End */}
            {/* ... Column 2 Content ... */}
            {/* col-2 Begin */}
            <div>
              <img
                  src={"/assets/img/about.png"}
                  className="h-auto w-9/12 md:w-full mx-auto"
                  alt="growbusiness"
                />
            </div>
            {/* col-2 End */}
          </div>
        </div>
      </section>

      <Services/>
    </div>
  );
};

export default About;
