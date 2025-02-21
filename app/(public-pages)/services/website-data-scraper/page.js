import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import ContentHeader from "@/shared/layout-components/public-comp/ContentHeader";
import ImageSlider from "@/shared/layout-components/public-comp/ImageSlider";
import ContentItemList from "@/shared/layout-components/public-comp/ContentItem";
import { seo_website_scraper } from "@/shared/data/seo-content/content";

export const metadata = seo_website_scraper

const GoogleSearch = () => {
    const whyThisService = [
        {
            title: <b>Effective Lead Generation:</b>,
            des: (
                <>
                    Perfect for marketers and sales professionals who need to compile contact lists for outreach campaigns. Our <b>Website Data Scraper</b> is an essential <b>web scraping tool</b> for <b>website data scraping</b>, making lead generation efficient and precise.
                </>
            )
        },
        {
            title: <b>Efficient Research Tool:</b>,
            des: (
                <>
                    Ideal for researchers who need to gather emails for surveys, studies, or academic purposes. This <b>website scraper</b> offers a streamlined way to perform <b>web scraping</b> and quickly gather contact details, saving time on research tasks.
                </>
            )
        },
        {
            title: <b>Enhanced Networking:</b>,
            des: (
                <>
                    Business professionals can use this <b>web scraping service</b> to find contact information for potential partners, clients, or collaborators. The <b>Website Data Scraper</b> is a valuable tool for expanding networks through targeted <b>data scraping</b>.
                </>
            )
        },
        {
            title: <b>Convenient and Reliable:</b>,
            des: (
                <>
                    This <b>website data scraper tool</b> provides a quick, reliable way to extract emails and other contact details, ensuring you have the information you need without the hassle. With <b>data scraping tools</b> designed for convenience, it’s perfect for professionals and individuals alike.
                </>
            )
        },
        {
            title: <b>Comprehensive and Essential:</b>,
            des: (
                <>
                    Our <b>web scraping tools</b> offer complete functionality to meet your data extraction needs. This <b>website data scraper software</b> is a powerful resource, providing users with efficient <b>web scraper</b> technology to access crucial data from any <b>website URL</b>.
                </>
            )
        }
    ];
    
    
      const benefits = [
        {
            title: <b>Quick and Easy Email Extraction:</b>,
            des: (
                <>
                    Instantly gather email addresses from any <b>website URL</b> using our <b>Website Data Scraper</b> without the need for manual searching. This <b>website data scraper software</b> leverages advanced <b>web scraping tools</b> to ensure rapid and accurate extraction.
                </>
            )
        },
        {
            title: <b>Accurate and Relevant Data:</b>,
            des: (
                <>
                    The <b>web scraper</b> provides targeted email addresses specific to the URL you input, ensuring you receive relevant and up-to-date contact information. With our <b>web scraping service</b> and <b>data scraping tools</b>, get precise data for effective outreach and research.
                </>
            )
        },
        {
            title: <b>User-Friendly Interface:</b>,
            des: (
                <>
                    Designed with a <b>user-friendly interface</b>, our <b>Website Data Scraper</b> is intuitive and easy to use, even for those with minimal technical experience. Compatible as a <b>web scraper Chrome</b> extension and with <b>website scraping</b> options, it’s accessible for everyone.
                </>
            )
        }
    ];
    
    
      const howWorks = [
        {
            title: <b>Enter the Website URL:</b>,
            des: (
                <>
                    Start by entering the URL of the website you want to scrape. Our <b>Website Data Scraper</b> allows you to extract email addresses from any <b>website URL</b>, whether it's the homepage or a specific page. This <b>website scraping</b> process makes data collection easy and fast.
                </>
            )
        },
        {
            title: <b>Initiate the Scraping Process:</b>,
            des: (
                <>
                    After entering the URL, click the extract button to start the process. Our <b>website data scraper software</b> will scan the website for email addresses and other relevant data, utilizing efficient <b>web scraper</b> technology to ensure comprehensive extraction.
                </>
            )
        },
        {
            title: <b>Extract Emails:</b>,
            des: (
                <>
                    The <b>web scraper</b> identifies and extracts all available email addresses on the website, including those found on contact pages, footers, or other areas. Our <b>data scraping tools</b> make this process seamless, gathering information with precision.
                </>
            )
        },
        {
            title: <b>Review the Results:</b>,
            des: (
                <>
                    Once the extraction is complete, you’ll receive an organized list of all emails found. Our <b>web scraping service</b> provides clear results, allowing you to quickly review and utilize the <b>website data scraper</b> output for your needs.
                </>
            )
        },
        {
            title: <b>Analyze the Results:</b>,
            des: (
                <>
                    Review the extracted data in an organized format to identify the most relevant information. Our <b>web scraping tools</b> are designed for easy analysis, making it simple to leverage the data for lead generation or research purposes.
                </>
            )
        },
        {
            title: <b>Download or Export Data:</b>,
            des: (
                <>
                    You can <b>download or export</b> the extracted emails in your preferred format, whether for marketing, outreach, or research. Our <b>free web scraper</b> and <b>website data scraper</b> options make exporting data efficient and convenient.
                </>
            )
        }
    ];

return (
    <>
      {/* Subpage Heading */}
      <PageHeader
        title={"Efficient Website Data Extraction"}
      />
      {/* Subpage Heading */}

      <section className="bg-white py-24">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ContentHeader img={"https://cdn-icons-png.flaticon.com/128/1674/1674969.png"} heading={'Introduction'} description={<span>
            Our <b>Website Data Scraper</b> service is a powerful <b>website data scraper software</b> designed to help you extract essential details like email addresses, phone numbers, website title, description, and keywords from any website URL. Whether you’re gathering leads, conducting research, or compiling contact information, this <b>web scraping service</b> provides a quick and efficient way to obtain data directly from the websites you’re interested in. With support for <b>web scraper Python</b> and compatibility as a <b>web scraper Chrome</b> extension, our tool is ideal for those seeking a <b>free web scraper</b> or advanced <b>web scraping tools</b>. Make use of our <b>data scraping tools</b> to streamline your workflow and boost productivity.
          </span>
        }/>

        {/* image slider */}
        <ImageSlider leftImg={"/assets/img/websiteDataCenter.png"} rightImg={"/assets/img/webscreen2.png"}/>
        {/* image slider */}
          
          {/* accordians */}
          <div className="my-4 w-full">
            <div className="">
              <div>
                <ContentItemList
                  title={"How It Works?"}
                  content={
                    <span>
                        Using the <b>Website Data Scraper</b> is simple and straightforward. This <b>website data scraper software</b> provides a seamless way to perform <b>website scraping</b> for extracting essential information like emails, phone numbers, and keywords from any website. Our <b>web scraping tools</b> support various platforms, including <b>web scraper Python</b> and <b>web scraper Chrome</b> extensions, making it accessible for all users. Here’s how you can start extracting emails and other data from any website with ease.
                    </span>
                
                  }
                  subItems={howWorks}
                />

                <ContentItemList
                  title={"Why You Need This Service?"}
                  content={
                    <span>
                        The <b>Website Data Scraper</b> is a valuable <b>website data scraper tool</b> for anyone needing to collect email addresses and other information from websites. This <b>website data scraper software</b> enables efficient <b>website scraping</b> and extraction, providing access to essential contact information directly from any <b>website URL</b>. Whether you're using it for <b>web scraper Chrome</b> extension compatibility or prefer <b>Python web scraping tools</b>, this <b>web scraping service</b> offers the flexibility and ease-of-use required for all types of users. Here’s why you should consider using this powerful <b>data scraping tool</b>:
                    </span>
                }

                  subItems={whyThisService}
                />

                <ContentItemList
                  title={"What's the benefit for you?"}
                  content={
                    <span>
                        The <b>Website Data Scraper</b> provides numerous benefits, making it an essential <b>website data scraper tool</b> for professionals and individuals. As a comprehensive <b>website data scraper software</b>, it enables <b>website scraping</b> for valuable information like email addresses, phone numbers, and more. This <b>web scraper</b> is ideal for extracting targeted data from any <b>website URL</b>, saving time and effort. Whether you're using a <b>web scraper Chrome</b> extension or prefer <b>Python web scraping tools</b>, our <b>web scraping service</b> and <b>data scraping tools</b> provide everything you need to streamline your data collection. With options for a <b>free web scraper</b>, this tool is designed for efficient, accessible data extraction to support your research, lead generation, and outreach needs.
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
                            src="https://www.youtube.com/embed/_sXWe4U2Cz8?si=6KyklE6r_9923k0j"
                            title="How to use Website Data Scraper - Step-by-Step Tutorial"
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
