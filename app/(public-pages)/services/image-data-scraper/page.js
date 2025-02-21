import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import ContentHeader from "@/shared/layout-components/public-comp/ContentHeader";
import ImageSlider from "@/shared/layout-components/public-comp/ImageSlider";
import ContentItemList from "@/shared/layout-components/public-comp/ContentItem";
import { seo_image_scraper } from "@/shared/data/seo-content/content";

export const metadata = seo_image_scraper

const GoogleSearch = () => {
    const benefits = [
        {
            title: <b>Effortless Contact Extraction:</b>,
            des: (
                <>
                    If you have multiple images containing text with contact numbers or emails, manually extracting this information can be tedious and time-consuming. Our <b>web scraper for images</b> simplifies the process by automatically extracting text and providing options to <b>scrape images from a website</b> for contact information with just a click.
                </>
            )
        },
        {
            title: <b>Efficiency:</b>,
            des: (
                <>
                    Save time and effort by automating the extraction process. Simply upload your image(s) and use the <b>"Extract Emails"</b> or <b>"Extract Phone"</b> button to get the relevant contact details instantly. This tool allows you to <b>scrape images from websites free</b> with ease.
                </>
            )
        },
        {
            title: <b>Versatile Image Support:</b>,
            des: (
                <>
                    The tool supports various image formats like <b>.jpg, .png, and .webp</b>, allowing you to <b>scrape all images from a website</b> or specific images without compatibility concerns. This flexibility makes it an ideal choice for those who need a reliable <b>web scraper for images</b>.
                </>
            )
        },
        {
            title: <b>Accurate Extraction:</b>,
            des: (
                <>
                    Designed to precisely identify and extract contact details like email addresses and phone numbers from the text content in images, ensuring you receive only the most relevant information for your needs when you <b>scrape images from a website</b>.
                </>
            )
        },
        {
            title: <b>Easy Download and Copy:</b>,
            des: (
                <>
                    Once the information is extracted, you can easily download or copy the contact details and text content data extracted from the images. This makes it convenient for use in contact management, marketing, or other purposes, and enhances productivity with our <b>web scraper image</b> functionality.
                </>
            )
        }
    ];
    
    
    const howWorks = [
    {
        title: <b>Upload Your Images:</b>,
        des: (
            <span>
                Start by uploading <b>one or multiple image files</b> in the supported formats, such as <b>.jpg, .png, or .webp</b>. This <b>image scraper</b> tool allows both single and bulk uploads, making it easy to <b>scrape images from websites</b> with flexibility for your data extraction needs.
            </span>
        )
    },
    {
        title: <b>Initiate the Scraping Process:</b>,
        des: (
            <>
                Once the images are uploaded, the <b>web scraper for images</b> will automatically extract the text content from each image and display it in a textarea element, allowing you to <b>scrape all images from a website</b> for easy review.
            </>
        )
    },
    {
        title: <b>Extract Specific Information:</b>,
        des: (
            <span>
                With the extracted text in the textarea, you have two options: click on the <b>"Extract Emails"</b> button to find and extract any email addresses within the text, or use the <b>"Extract Phone"</b> button to locate and pull out phone numbers. This feature is especially useful for those wanting to <b>scrape images from websites free</b>.
            </span>
        )
    },
    {
        title: <b>Review the Results:</b>,
        des: (
            <>
                After clicking the desired button, the extracted information is presented in an organized manner, allowing you to easily review and use the data obtained from the <b>image data scraper</b>.
            </>
        )
    },
    {
        title: <b>Analyze the Results:</b>,
        des: (
            <>
                Once the scraping is complete, review the extracted data in an organized format. This helps you easily identify and use the information most relevant to your needs, whether for contact management or other purposes.
            </>
        )
    },
    {
        title: <b>Download or Export:</b>,
        des: (
            <>
                Finally, you can download or copy the extracted data for use in contact management, marketing, or other activities. Our <b>web scraping tools</b> ensure seamless data extraction and exporting, helping you make the most of this <b>image scraper</b>.
            </>
        )
    }
    ];

return (
    <>
      {/* Subpage Heading */}
      <PageHeader
        title={"Comprehensive Web Scraper for Images"}
      />
      {/* Subpage Heading */}

      <section className="bg-white py-24">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ContentHeader img={"https://cdn-icons-png.flaticon.com/128/4904/4904233.png"} heading={'Introduction'} description={<span>
            Our <b>Image Data Scraper</b> tool is designed to <b>scrape images from websites</b> and extract embedded contact information, making it simple to <b>scrape all images from a website</b> or select specific images for data extraction. Supporting formats like <b>.jpg, .png, and .webp</b>, this tool lets you <b>scrape images from a website free</b> of hassle, providing essential details like <b>email addresses and phone numbers</b> quickly. Just upload your image to begin, and with a click, this <b>web scraper for images</b> will seamlessly retrieve the information you need. It’s the ideal solution for professionals who want a fast, efficient way to <b>scrape images from websites</b> for contact details and more.
          </span>
        }/>

        {/* image slider */}
        <ImageSlider leftImg={"/assets/img/imgscreen.png"} rightImg={"/assets/img/imgscreen2.png"}/>
        {/* image slider */}
          
          {/* accordians */}
          <div className="my-4 w-full">
            <div className="">
              <div>
                <ContentItemList
                  title={"How It Works?"}
                  content={
                    <span>
                        Using the <b>Document Scraper</b> is a straightforward process, whether you're looking to <b>scrape images from websites</b> or extract embedded data. This <b>image scraper</b> tool allows you to <b>scrape all images from a website</b> quickly and efficiently. As a versatile <b>web scraper for images</b>, it supports multiple formats, enabling you to <b>scrape images from websites free</b> and gather crucial information. Here’s how you can make the most out of this <b>image data scraping service</b>.
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
                  title={"What's the benefit for you?"}
                  content={
                    <span>
                        The <b>Document Scraper</b> offers several significant benefits for users, making it an essential tool for anyone needing detailed geographic data. This tool allows you to <b>scrape images from a website</b> efficiently, providing a quick way to <b>scrape all images from a website</b> or target specific ones. With options to <b>scrape images from websites free</b> and compatibility as a <b>web scraper for images</b>, the Document Scraper meets diverse needs for data extraction, making it a valuable resource for professionals and researchers alike.
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
                            src="https://www.youtube.com/embed/k_zh66JW-oU?si=zPYJ4alln-oqK-lb"
                            title="How to use Image Data Scraper - Step-by-Step Tutorial"
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
