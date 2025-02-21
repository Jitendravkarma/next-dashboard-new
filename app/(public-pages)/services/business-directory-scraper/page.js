import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import ContentHeader from "@/shared/layout-components/public-comp/ContentHeader";
import ImageSlider from "@/shared/layout-components/public-comp/ImageSlider";
import ContentItemList from "@/shared/layout-components/public-comp/ContentItem";
import { seo_directory_scraper } from "@/shared/data/seo-content/content";

export const metadata = seo_directory_scraper

const GoogleSearch = () => {

    const whyThisService = [
        {
            title: <b>Streamlined Data Management:</b>,
            des: (
                <>
                    Ideal for organizing and managing large volumes of contact information from directories, the <b>Business Directory Scraper</b> simplifies <b>Yellow Pages data scraping</b> and other <b>business directory scraper</b> tasks, making contact information easier to access and use.
                </>
            )
        },
        {
            title: <b>Optimized for Lead Generation:</b>,
            des: (
                <>
                    Perfect for creating targeted contact lists from directory data, our <b>Yellow Pages scraper</b> and <b>Yellow Pages email extractor</b> enhance your marketing and outreach efforts by enabling precise data collection from sources like <b>Yellow Pages</b>.
                </>
            )
        },
        {
            title: <b>Valuable for Research:</b>,
            des: (
                <>
                    Researchers can extract relevant contact details using this <b>Yellow Pages data extractor</b> and <b>Yellow Pages web scraper</b>, making it an invaluable resource for studies, surveys, and structured data extraction from <b>Yellow Pages</b> and similar directories.
                </>
            )
        },
        {
            title: <b>Convenient and Efficient:</b>,
            des: (
                <>
                    The <b>Reoon Yellow Pages scraper</b> provides a reliable method to extract and organize contact details, minimizing the time and effort required for data management. This <b>Yellow Pages scraper free</b> tool is perfect for busy professionals who need quick access to clean, organized data.
                </>
            )
        },
        {
            title: <b>Comprehensive Data Solution:</b>,
            des: (
                <>
                    The <b>Business Directory Scraper</b> is the go-to tool for anyone needing to extract and organize email addresses and phone numbers from directories. With <b>Yellow Pages scraper software free download</b> options, this tool is an indispensable asset for professionals across various industries.
                </>
            )
        }
    ];

    const benefits = [
        {
            title: <b>Effortless Data Extraction:</b>,
            des: (
                <>
                    Simplify the process of pulling contact details from large directories with the <b>Business Directory Scraper</b>. This <b>Yellow Pages scraper</b> and <b>Yellow Pages data extractor</b> saves time and reduces manual effort, making data collection more efficient.
                </>
            )
        },
        {
            title: <b>Targeted Contact Information:</b>,
            des: (
                <>
                    Extract phone numbers and emails specific to key regions with our <b>Yellow Pages email extractor</b> and <b>Yellow Pages web scraper</b>, ensuring your contact lists are precise and actionable. This tool makes <b>web scraping Yellow Pages</b> highly targeted.
                </>
            )
        },
        {
            title: <b>Flexible Data Handling:</b>,
            des: (
                <>
                    With support for multiple file formats like CSV and Excel, the <b>Yellow Pages scraper</b> allows you to work with various directory types without compatibility concerns. This <b>Yellow Pages scraper software free download</b> option is perfect for handling diverse data sources.
                </>
            )
        },
        {
            title: <b>Intuitive and Accessible:</b>,
            des: (
                <>
                    Designed with a user-friendly interface, the <b>Reoon Yellow Pages scraper</b> makes data extraction straightforward, even for users with minimal experience. This <b>Yellow Pages scraper free</b> tool is accessible and easy to use for all.
                </>
            )
        }
    ];

    const howWorks = [
        {
            title: <b>Upload Your Directory:</b>,
            des: (
                <>
                    Begin by selecting and uploading your directory file. The <b>Business Directory Scraper</b> supports various formats, including CSV, Excel, and other common directory types, making it an ideal <b>Yellow Pages scraper</b> for handling diverse data sources.
                </>
            )
        },
        {
            title: <b>Begin the Extraction:</b>,
            des: (
                <>
                    After uploading, initiate the extraction process with a single click. This <b>Yellow Pages data extractor</b> will process the directory to identify and extract relevant contact details. Whether you're using it as a <b>Yellow Pages email extractor</b> or a <b>Yellow Pages web scraper</b>, this tool simplifies data collection.
                </>
            )
        },
        {
            title: <b>Targeted Data Collection:</b>,
            des: (
                <span>
                    The scraper will specifically search for and extract <b>email addresses</b> and <b>phone numbers</b>, focusing on key regions to ensure the data is relevant. Our <b>Yellow Pages scraper free</b> feature ensures you get precise and targeted information efficiently.
                </span>
            )
        },
        {
            title: <b>Review and Refine:</b>,
            des: (
                <>
                    Once the extraction is complete, you'll receive a detailed list of contacts. This <b>Yellow Pages data scraper</b> organizes the list for easy review, allowing you to refine or export the data as needed. Perfect for those looking to <b>web scrape Yellow Pages</b> data effectively.
                </>
            )
        },
        {
            title: <b>Analyze the Results:</b>,
            des: (
                <>
                    After scraping is complete, review the extracted data presented in a clear, organized format. This makes it easy to identify and use the information that’s most relevant to your needs, enhancing your <b>Yellow Pages extractor</b> experience.
                </>
            )
        },
        {
            title: <b>Download Your Data:</b>,
            des: (
                <>
                    The final step is downloading the extracted data in your preferred format, whether for marketing, outreach, or internal use. This <b>Yellow Pages scraper software free download</b> feature makes it simple to access and utilize your data.
                </>
            )
        }
    ];

return (
    <>
      {/* Subpage Heading */}
      <PageHeader
        title={"Free Yellow Pages Data Extractor & Directory Scraper"}
      />
      {/* Subpage Heading */}

      <section className="bg-white py-24">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ContentHeader img={"https://cdn-icons-png.flaticon.com/128/6223/6223617.png"} heading={'Introduction'} description={<span>
            Our <b>Business Directory Scraper</b> service is a powerful tool designed to help you quickly extract valuable contact information, such as <b>emails and phone numbers</b>, from business directories like <b>Yellow Pages</b>. Whether you’re working with large directories in various formats or need structured data extraction, this tool is ideal for <b>web scraping Yellow Pages</b> and other business listings. The <b>Yellow Pages scraper</b> and <b>Yellow Pages data extractor</b> features allow you to gather essential contact details efficiently. For those in need of a <b>Yellow Pages email extractor</b> or looking for a <b>Yellow Pages scraper free</b> option, this service provides the flexibility to meet your needs. With support for <b>Yellow Pages web scraper</b> and <b>Yellow Pages extractor free download</b> options, our <b>Reoon Yellow Pages scraper</b> offers a complete solution for data extraction.
          </span>
        }/>

        {/* image slider */}
        <ImageSlider leftImg={"/assets/img/dirscreen.png"} rightImg={"/assets/img/dirscreen2.png"}/>
        {/* image slider */}
          
          {/* accordians */}
          <div className="my-4 w-full">
            <div className="">
              <div>
                <ContentItemList
                  title={"How It Works?"}
                  content={
                    <span>
                        Using the <b>Business Directory Scraper</b> is straightforward and user-friendly. This powerful tool, including features from <b>Yellow Pages scraper</b> to <b>Yellow Pages email extractor</b>, makes it easy to gather contact information. Whether you’re using the <b>Yellow Pages web scraper</b> or need a <b>Yellow Pages data scraper</b> solution, this tool allows you to extract emails and phone numbers efficiently. Here’s how you can make the most out of the <b>Reoon Yellow Pages scraper</b> and <b>Yellow Pages extractor free download</b> options to quickly pull data from your directories.
                    </span>
                
                  }
                  subItems={howWorks}
                />

                <ContentItemList
                  title={"What's the benefit for you?"}
                  content={
                    <span>
                        The <b>Business Directory Scraper</b> provides a range of benefits tailored to users who need to extract and manage contact information efficiently. This versatile tool functions as a <b>Yellow Pages scraper</b>, <b>Yellow Pages data extractor</b>, and <b>Yellow Pages email extractor</b>, making it ideal for gathering contact details from business directories. Whether you're looking for a <b>Yellow Pages scraper free</b> option or need a comprehensive <b>Yellow Pages web scraper</b>, this service allows for precise and organized data extraction. With the added advantage of a <b>Yellow Pages scraper software free download</b>, our tool streamlines the process for users looking to <b>web scrape Yellow Pages</b> or manage business directory data efficiently.
                    </span>
                }
                
                
                  subItems={benefits}
                  btn={false}
                />
                
                <ContentItemList
                  title={"Why Choose This Service?"}
                  content={
                    <span>
                        The <b>Business Directory Scraper</b> is an essential tool for professionals who need to manage and utilize contact information from directories effectively. As a versatile <b>Yellow Pages scraper</b> and <b>Yellow Pages data extractor</b>, it allows users to pull detailed contact lists with ease. Whether you’re using it as a <b>Yellow Pages email extractor</b> or a <b>Yellow Pages web scraper</b>, this tool provides reliable <b>web scraping Yellow Pages</b> capabilities. With features like <b>Reoon Yellow Pages scraper</b> support and a <b>Yellow Pages scraper software free download</b> option, it stands out as the ultimate solution for efficiently gathering and organizing business directory data.
                    </span>
                }
                
                
                  subItems={whyThisService}
                  btn={true}
                />

                <div className="flex justify-center items-center gap-2 mb-8">
                    <hr className="border-2 border-blue-600 w-14"/>
                    Watch A Demo
                    <hr className="border-2 border-blue-600 w-14"/>
                </div>
                {/* youtube demo */}
                <div className="w-full gap-2 border-gray-300 md:px-44">
                    <div>
                        <div className="border-gray-200">
                        
                        <div className="w-full aspect-video">
                            <iframe
                            className="w-full h-full rounded-md border-blue"
                            src="https://www.youtube.com/embed/LW9_PAJhens?si=KrEhZ4skAo8tK5iN"
                            title="How to use Business Directory Scraper - Step-by-Step Tutorial"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            ></iframe>
                        </div>


                        </div>
                    </div>
                </div>
                {/* youtube demo */}

                
              </div>
            </div>
          </div>
          {/* accordians */}
        </div>
      </section>
    </>
  );
};

export default GoogleSearch;
