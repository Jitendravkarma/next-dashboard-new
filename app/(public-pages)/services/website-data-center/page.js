import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import ContentHeader from "@/shared/layout-components/public-comp/ContentHeader";
import ImageSlider from "@/shared/layout-components/public-comp/ImageSlider";
import ContentItemList from "@/shared/layout-components/public-comp/ContentItem";
import { seo_websitedata } from "@/shared/data/seo-content/content";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_websitedata

const GoogleSearch = () => {
    const benefits = [
        {
            title: <b>Targeted Searches:</b>,
            des: (
                <>
                    By allowing you to select a country before entering your query, the <b>Website Data Scraper</b> ensures you receive location-specific data. This <b>web scraping service</b> provides more relevant and useful results tailored to your geographic needs, making it ideal for focused <b>website scraping</b>.
                </>
            )
        },
        {
            title: <b>Comprehensive Search Results:</b>,
            des: (
                <>
                    The <b>website data scraper software</b> scans through a variety of data points, including <b>URLs, titles, descriptions, keywords, emails, and phone numbers</b>. This <b>online web scraper</b> ensures a complete overview tailored to your query, making it a powerful tool for <b>extracting data from websites</b>.
                </>
            )
        },
        {
            title: <b>Accuracy and Relevance:</b>,
            des: (
                <>
                    Designed to match your specific search terms and selected country, this <b>web scraper</b> provides precise and relevant results. Ideal for use as a <b>website scraper Python</b> or <b>web scraper Chrome</b> extension, it’s optimized for accurate data retrieval from websites.
                </>
            )
        },
        {
            title: <b>Easy Access and Copy:</b>,
            des: (
                <>
                    Once the information is displayed, you can easily copy the data for use in <b>research, contact management, marketing</b>, or other purposes. This <b>free web scraper</b> feature simplifies data handling, making it efficient to <b>scrape data from websites to Excel</b> or other formats.
                </>
            )
        },
        {
            title: <b>Easy Download:</b>,
            des: (
                <>
                    Once the information is displayed, you can easily download the data for use in <b>research, contact management, marketing</b>, or other purposes. This functionality is part of our <b>web scraping tools free</b>, providing fast access to organized data, whether you’re <b>scraping LinkedIn</b> or working with other <b>web scraping companies</b>.
                </>
            )
        }
    ];
    
    
      const howWorks = [
        {
            title: <b>Select Country:</b>,
            des: (
                <>
                    Start by selecting the country you want to focus your search on to ensure more targeted results. This step is essential for refining your search in our <b>website data scraper</b>, helping you get precise information from specific regions.
                </>
            )
        },
        {
            title: <b>Enter Your Query:</b>,
            des: (
                <>
                    After selecting the country, enter the keyword or phrase you want to search for in the <b>Website Data Center</b>'s search bar. This <b>web scraper</b> and <b>web scraping service</b> enables efficient data retrieval based on your query, simplifying <b>website scraping</b> for exact matches.
                </>
            )
        },
        {
            title: <b>Automated Scanning:</b>,
            des: (
                <span>
                    The system then scans for relevant information, including <b>website URLs, titles, descriptions, keywords, emails, and phone numbers</b> related to your query. With <b>data scraping tools</b> and <b>web scraper Chrome</b> integration, this <b>website data scraper software</b> automates the entire process, making <b>extracting data from websites</b> seamless.
                </span>
            )
        },
        {
            title: <b>Receive Detailed Results:</b>,
            des: (
                <>
                    Once a match is found, the tool presents you with detailed information in an organized manner for easy review. This feature is perfect for <b>scraping LinkedIn</b> or other platforms and is compatible with <b>website scraper Python</b> setups and <b>web scraping tools free</b> options for further data processing.
                </>
            )
        }
    ];

return (
    <>
      {/* Subpage Heading */}
      <PageHeader
        title={"Powerful Website Data Scraper & Web Scraping Tools Online"}
      />
      {/* Subpage Heading */}

      <section className="bg-white py-24">
        {/* google ads */}
        <HorizontalAds/>
        {/* google ads */}

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ContentHeader img={"https://cdn-icons-png.flaticon.com/128/7915/7915366.png"} heading={'Introduction'} description={<span>
            The <b>Website Data Center</b> is a comprehensive <b>website data scraper</b> designed to make finding relevant website information simple and efficient. This <b>website data scraper software</b> offers powerful <b>web scraping</b> capabilities to extract data based on your selected country and query. It quickly provides detailed results, including the <b>website URL, title, description, keywords, emails, and phone numbers</b>. With support for <b>website scraper Python</b> functionality, <b>web scraper Chrome</b> extensions, and <b>online web scraper</b> options, it’s a complete <b>web scraping service</b>. This feature-packed tool enables you to <b>extract data from websites</b> effortlessly, whether for research, <b>scraping LinkedIn</b>, or exporting <b>data to Excel</b>. The <b>Website Data Center</b> is your all-in-one solution for efficient, accurate data extraction using the best <b>web scraping tools</b> and <b>website scraping tools</b>.
          </span>
        }/>

        {/* image slider */}
        <ImageSlider leftImg={"/assets/img/webscreen.png"} rightImg={"/assets/img/webscreen2.png"}/>
        {/* image slider */}
          
          {/* accordians */}
          <div className="my-4 w-full">
            <div className="">
              <div>
                <ContentItemList
                  title={"How It Works?"}
                  content={
                    <span>
                        Using the <b>Website Data Center</b> is a straightforward process. This <b>website data scraper</b> and <b>web scraping service</b> offers powerful features for efficient data extraction. Whether you need a <b>website data scraper software</b>, <b>website scraper Python</b> compatibility, or an <b>online web scraper</b>, our tool provides flexibility to suit various needs. With support for <b>web scraping tools</b>, <b>data scraping tools</b>, and <b>web scraper Chrome</b> extensions, you can easily <b>extract data from websites</b> and organize it. Here’s how you can make the most out of this <b>free web scraper</b> for <b>scraping data to Excel</b> or even <b>scraping LinkedIn</b>.
                    </span>
                
                  }
                  subItems={howWorks}
                />


                <ContentItemList
                  title={"What's the benefit for you?"}
                  content={
                    <span>
                        The <b>Website Data Center</b> offers several significant benefits for users, making it an essential tool for anyone needing detailed geographic data. This <b>website data scraper</b> and <b>website data scraper software</b> provides a powerful solution for <b>website scraping</b> tasks, allowing users to <b>extract data from websites</b> with ease. With compatibility for <b>website scraper Python</b>, <b>web scraper Chrome</b> extensions, and various <b>web scraping tools</b>, this <b>online web scraper</b> is perfect for handling large datasets. Whether you need a <b>free web scraper</b> or advanced <b>data scraping tools</b> for specific tasks like <b>scraping LinkedIn</b> or exporting data to Excel, the <b>Website Data Center</b> is equipped to meet all your data extraction needs.
                    </span>
                }
                
                
                  subItems={benefits}
                  btn={true}
                />

                {/* google ads */}
                <div className='text-center'>
                    <ins className="adsbygoogle"
                        data-ad-client="ca-pub-6421827460277995"
                        data-ad-slot="2799812988"
                        data-ad-format="auto" 
                        data-full-width-responsive="true" 
                        style={{ display: 'block' }}>
                    </ins>
                </div>
                {/* google ads */}

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
                            src="https://www.youtube.com/embed/xJsktXJfZZ8"
                            title="How to use Google Map Scraper - Step-by-Step Tutorial"
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
