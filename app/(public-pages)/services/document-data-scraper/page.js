import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import ContentHeader from "@/shared/layout-components/public-comp/ContentHeader";
import ImageSlider from "@/shared/layout-components/public-comp/ImageSlider";
import ContentItemList from "@/shared/layout-components/public-comp/ContentItem";
import { seo_document_scraper } from "@/shared/data/seo-content/content";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_document_scraper

const GoogleSearch = () => {
    const benefits = [
        {
            title: <b>Effortless Contact Extraction:</b>,
            des: (
                <>
                    If you have a large document filled with contact numbers or emails, manually filtering them can be time-consuming and challenging. Our <b>website data scraper</b> software simplifies this process. Just upload your document, and our <b>web scraper</b> will quickly and efficiently pull out the contact information using advanced <b>data scraping tools</b>.
                </>
            )
        },
        {
            title: <b>Efficiency:</b>,
            des: (
                <>
                    Save time and effort by automating the extraction process with our <b>web scraping service</b>, allowing you to focus on other important tasks. This <b>website data scraper software</b> ensures maximum productivity for users.
                </>
            )
        },
        {
            title: <b>Versatile File Support:</b>,
            des: (
                <>
                    The tool’s ability to handle different document formats makes it a versatile <b>web scraping tool</b> for various industries and use cases. Whether you're using <b>website scraper Python</b> or <b>web scraper Chrome</b> extensions, simply upload your document, and our tool will handle the data extraction without compatibility concerns.
                </>
            )
        },
        {
            title: <b>Country-Specific Extraction:</b>,
            des: (
                <>
                    Optimized for extracting phone numbers from specific countries, our <b>web scraper</b> ensures you get the most relevant contact details. This feature makes our <b>website data scraper</b> perfect for targeted, country-specific data extraction.
                </>
            )
        },
        {
            title: <b>Easy Download in CSV Format:</b>,
            des: (
                <>
                    Once the extraction is complete, you can easily download the contact information in a CSV format. This feature of our <b>website data scraper</b> and <b>web scraping tools</b> makes it simple to organize and utilize the data efficiently.
                </>
            )
        }
    ];
    
    
    const howWorks = [
        {
            title: <b>Upload Your Document:</b>,
            des: (
                <>
                    Start by uploading your document in one of the supported formats, such as .txt, .pdf, .html, .json, and more. Our <b>website data scraper</b> and <b>web scraping service</b> accept a wide range of file types to accommodate various data extraction needs.
                </>
            )
        },
        {
            title: <b>Initiate the Scraping Process:</b>,
            des: (
                <>
                    Once your document is uploaded, click the extract button to begin the <b>website scraping</b> process. This <b>web scraper</b> will automatically start analyzing the content of your document to identify relevant data.
                </>
            )
        },
        {
            title: <b>Extract Contact Information:</b>,
            des: (
                <>
                    The <b>data scraping tool</b> will search through the document and extract all available email addresses and phone numbers from any country. This <b>webscraper</b> provides accurate and quick contact extraction for all your professional needs.
                </>
            )
        },
        {
            title: <b>Review the Results:</b>,
            des: (
                <>
                    After extraction, the <b>web scraping tool</b> will display the collected data, including email addresses and phone numbers. The information is organized in a way that makes it easy to review and use immediately.
                </>
            )
        },
        {
            title: <b>Analyze the Results:</b>,
            des: (
                <>
                    Once the scraping is complete, review the extracted data presented in a clear, organized format. This helps you quickly identify and leverage the most relevant information, using a reliable <b>website scraper Python</b> setup or <b>web scraper Chrome</b> extension.
                </>
            )
        },
        {
            title: <b>Download or Export:</b>,
            des: (
                <>
                    Finally, download or export the extracted data in a format that suits your needs. This <b>website data scraper software</b> is perfect for further processing, marketing, or outreach, saving you time and effort.
                </>
            )
        }
    ];

return (
    <>
      {/* Subpage Heading */}
      <PageHeader
        title={"Document Data Scraper"}
      />
      {/* Subpage Heading */}

      <section className="bg-white py-24">
        {/* google ads */}
        <HorizontalAds/>
        {/* google ads */}

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ContentHeader img={"https://cdn-icons-png.flaticon.com/128/281/281760.png"} heading={'Introduction'} description={<span>
            Our <b>Document Data Scraper</b> is an advanced <b>website data scraper software</b> tailored for extracting contact information from various document types. This tool supports <b>website scraping</b> and document scraping across multiple formats, including .txt, .pdf, .html, and .json, making it a versatile <b>data scraping tool</b>. With our <b>web scraper</b>, professionals can efficiently gather emails, phone numbers, and other relevant data directly from their files. Designed to be compatible with <b>website scraper Python</b> setups and available as a <b>web scraper Chrome</b> extension, our service simplifies the process of data extraction, whether for lead generation, research, or outreach. Experience the convenience of <b>web scraping tools</b> built to save you time and enhance productivity with our reliable <b>web scraping service</b>.
          </span>
        }/>

        {/* image slider */}
        <ImageSlider leftImg={"/assets/img/docscreen.png"} rightImg={"/assets/img/docscreen2.png"}/>
        {/* image slider */}
          
          {/* accordians */}
          <div className="my-4 w-full">
            <div className="">
              <div>
                <ContentItemList
                  title={"How It Works?"}
                  content={
                    <span>
                        Using the <b>Document Data Scraper</b> is a straightforward process. This powerful <b>website data scraper software</b> is designed to simplify <b>website scraping</b> and document extraction tasks. Compatible with <b>web scraper Python</b> setups and available as a <b>web scraper Chrome</b> extension, our service offers flexibility for various needs. With our <b>web scraping tools</b>, you can efficiently gather data from documents, making it an essential <b>data scraping tool</b> for professionals. Here’s how you can make the most out of this comprehensive <b>web scraping service</b>.
                    </span>
                
                  }
                  subItems={howWorks}
                />


                <ContentItemList
                  title={"What's the benefit for you?"}
                  content={
                    <span>
                        The <b>Document Data Scraper</b> is a powerful <b>website data scraper software</b> that offers several significant benefits for users. This <b>web scraping service</b> is ideal for anyone needing detailed geographic or contact data. As a versatile <b>web scraper</b> compatible with <b>website scraper Python</b> and available as a <b>web scraper Chrome</b> extension, it’s designed to simplify <b>website scraping</b> and document data extraction. With robust <b>web scraping tools</b> and advanced <b>data scraping tools</b>, the Document Data Scraper enables efficient data collection, making it an essential resource for professionals in need of comprehensive data.
                    </span>
                }
                
                
                  subItems={benefits}
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
                            src="https://www.youtube.com/embed/NfOetsKFX_E?si=mt8J2KTxUWdkP6xL"
                            title="How to use Document Data Scraper - Step-by-Step Tutorial"
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
