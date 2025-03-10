import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import ContentHeader from "@/shared/layout-components/public-comp/ContentHeader";
import ImageSlider from "@/shared/layout-components/public-comp/ImageSlider";
import ContentItemList from "@/shared/layout-components/public-comp/ContentItem";
import { seo_google_search } from "@/shared/data/seo-content/content";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_google_search

const GoogleSearch = () => {
    const whyThisService = [
    {
        title: <b>Save Time and Effort:</b>,
        des: (
            <>
                Instead of spending hours manually <b>scraping Google search results</b> for contact details or information, the extractor does the work for you, providing results in seconds through efficient <b>web scraping Google search results</b>.
            </>
        )
    },
    {
        title: <b>Access to Comprehensive Data:</b>,
        des: (
            <>
                The service delivers a complete set of data, including website names, emails, phone numbers, and descriptions. This <b>Google search scraper tool</b> ensures you have everything needed to make informed decisions or reach out to the right contacts.
            </>
        )
    },
    {
        title: <b>Targeted Results:</b>,
        des: (
            <>
                The data you receive is tailored to your specific query, ensuring that you get the most relevant information. This precision reduces irrelevant results, giving you exactly what you’re looking for through <b>Google search data extraction</b>.
            </>
        )
    },
    {
        title: <b>Ideal for Professionals:</b>,
        des: (
            <>
                Whether you’re a marketer gathering leads, a researcher compiling data, or a business owner seeking potential partners, the <b>Google Search Scraper</b> provides the <b>scraping tools</b> you need to succeed.
            </>
        )
    }
    ];

    const benefits = [
    {
        title: <b>Lead Generation:</b>,
        des: (
            <>
                For marketers and sales professionals, the <b>Google search scraper tool</b> is an invaluable asset for <b>scraping data from Google search results</b> to generate leads. You can quickly compile lists of potential clients or partners, complete with contact details, making your outreach efforts more effective through efficient <b>Google search data extraction</b>.
            </>
        )
    },
    {
        title: <b>Market Research:</b>,
        des: (
            <>
                Researchers can use the service for <b>web scraping Google search results</b> on competitors, market trends, or specific industries. The detailed results offer insights that can guide your strategies and decisions, making it an ideal <b>Google search scraper API</b> solution for market analysis.
            </>
        )
    },
    {
        title: <b>Business Networking:</b>,
        des: (
            <>
                Business owners and professionals can use the extractor to <b>scrape Google search results</b> for contact information related to potential partners, suppliers, or clients. This streamlined access to data facilitates networking and helps you build valuable connections.
            </>
        )
    },
    {
        title: <b>Content Creation and Outreach:</b>,
        des: (
            <>
                Content creators and outreach specialists can utilize the <b>Google search scraper</b> to identify potential sources or partners for collaboration. The detailed descriptions and contact information make it easy to reach out and establish connections, enhancing outreach efforts through <b>scrape search results</b> capabilities.
            </>
        )
    }
    ];

    const howWorks = [
        {
            title: <b>Enter Your Search Query:</b>,
            des: (
                <>
                    Start by typing in the specific search term you’re interested in. For example, you might search for 'schools in London contact details.' This search query will guide our <b>Google Search Scraper</b> to provide precise results by <b>scraping Google search results</b>.
                </>
            )
        },
        {
            title: <b>Initiate the Extraction:</b>,
            des: (
                <>
                    Once you’ve entered your query, simply click the search button to start the extraction process. Our tool will begin <b>web scraping Google search results</b> based on your input, utilizing advanced <b>Google search scraper APIs</b> and <b>Python-based</b> extraction techniques.
                </>
            )
        },
        {
            title: <b>Data Extraction:</b>,
            des: (
                <>
                    The extractor will analyze the <b>Google search results</b>, retrieving essential information, including <b>names, website URLs</b>, and more. This <b>Google search scraper tool</b> efficiently captures valuable details, providing insights tailored to your query.
                </>
            )
        },
        {
            title: <b>Email Extracting:</b>,
            des: (
                <>
                    After the initial <b>Google search data extraction</b>, if you wish to find additional email addresses related to the extracted data, simply click on the Email Extracting button. This feature allows for deeper data retrieval, ensuring you have all the contact information you need.
                </>
            )
        },
        {
            title: <b>Review the Results:</b>,
            des: (
                <>
                    Once the extraction is complete, you’ll receive a detailed list of results. Review the information, which is presented in an easy-to-read format. This <b>Google search scraper tool</b> lets you quickly use and analyze the data, making it valuable for various applications.
                </>
            )
        },
        {
            title: <b>Download or Export:</b>,
            des: (
                <>
                    Finally, you have the option to download or export the data in your preferred format, ready for further use. Whether for research, <b>lead generation</b>, or contacting businesses, our <b>Google search scraper</b> and <b>Google Maps search scraper</b> make saving and accessing extracted data straightforward.
                </>
            )
        }
    ]

return (
    <>
      {/* Subpage Heading */}
      <PageHeader
        title={"Scrape Google Search Results Easily"}
      />
      {/* Subpage Heading */}

      <section className="bg-white py-24">
        {/* google ads */}
        <HorizontalAds/>
        {/* google ads */}

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ContentHeader img={"https://cdn-icons-png.flaticon.com/128/300/300221.png"} heading={'Introduction'} description={<span>
            In today’s data-centric world, efficiently <b>scraping Google search results</b> has become vital for businesses, researchers, and marketers alike. Our <b>Google Search Scraper</b> tool empowers you to perform <b>web scraping on Google search results</b> quickly and accurately. With seamless integration for <b>Python</b> users, our scraper tool uses APIs designed to extract valuable insights, whether you're looking to <b>scrape search results</b> for analytics or need a reliable <b>Google search scraper</b> for your custom applications. This includes everything from <b>scraping Google Maps search results</b> to automating <b>Google search data extraction</b> for specific keywords, contact details, and more. Discover how our <b>Python-based Google Search Scraper</b> can streamline your data collection process with easy access and support for diverse search requirements.
          </span>
        }/>

        {/* image slider */}
        <ImageSlider leftImg={"/assets/img/gscreen.png"} rightImg={"/assets/img/gscreen2.png"}/>
        {/* image slider */}
          
          {/* accordians */}
          <div className="my-4 w-full">
            <div className="">
              <div>
                <ContentItemList
                  title={"How It Works?"}
                  content={
                    <span>
                        Using the <b>Google Search Scraper</b> is simple and efficient. Whether you're interested in <b>scraping Google search results</b> for analytics, research, or contact information, this tool covers it all. Here’s a step-by-step guide to help you get the most out of this <b>web scraping Google search results</b> service. From setting up <b>Google search scraper APIs</b> to <b>scraping Google Maps search results</b>, our tool is designed to streamline data extraction, making it easy for both beginners and experts to <b>scrape search results</b> accurately.
                    </span>
                
                  }
                  subItems={howWorks}
                />

                {/* <ContentItemList title={"What You Will Get?"} content={<span>When you use our <b>Google Search Scraper</b> service, you'll receive the following detailed information:</span>} subItems={googleSearchService}/> */}

                {/* <ContentItemList
                  title={"What's the benefit for you?"}
                  content={
                    <span>
                    The <b>Google Search Scraper</b> takes the search query you provide and efficiently <b>scrapes Google search results</b> to retrieve detailed and relevant information. This service is designed for <b>web scraping Google search results</b>, enabling you to gather essential data with ease. Whether you're using it for <b>Google search scraper API</b> integration, <b>scraping Google Maps search results</b>, or need a versatile <b>Google search scraper tool</b> in Python, this tool is tailored to meet a variety of data extraction needs.
                  </span>
                
                  }
                  subItems={googleSearchService}
                /> */}

                <ContentItemList
                  title={"Why You Need This Service?"}
                  content={
                    <span>
                        In a world where time is money, efficiency is key. The <b>Google Search Scraper</b> service offers you the ability to <b>scrape Google search results</b> and gather critical information without the tedious task of manually searching and compiling data from multiple sources. Our <b>web scraping Google search results</b> tool, compatible with <b>Python</b> and using advanced <b>Google search scraper APIs</b>, ensures you receive precise data with ease. Whether you’re <b>scraping data from Google search results</b> for business insights, <b>scraping Google Maps search results</b> for contact info, or need a reliable <b>Google search scraper tool</b> for in-depth data extraction, this service is your ultimate solution.
                    </span>
                }

                  subItems={whyThisService}
                />

                <ContentItemList
                  title={"What's the benefit for you?"}
                  content={
                    <span>
                        The data extracted by this <b>Google search scraper tool</b> is more than just information; it’s a powerful resource that can drive your business or personal projects forward. By <b>scraping Google search results</b> and <b>Google Maps search results</b>, this service offers targeted insights and saves you time on <b>web scraping Google search results</b> manually. Whether you’re using <b>Python Google search scraper</b> tools, integrating with <b>Google search scraper APIs</b>, or relying on <b>Google search scraper GitHub</b> resources, this tool ensures efficient <b>scraping of Google search results</b>. It’s designed to <b>scrape data from Google search</b> accurately, helping you make informed decisions for any project. Here’s how you can benefit:
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
