import React from "react";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import ContentHeader from "@/shared/layout-components/public-comp/ContentHeader";
import ImageSlider from "@/shared/layout-components/public-comp/ImageSlider";
import ContentItemList from "@/shared/layout-components/public-comp/ContentItem";
import { seo_whois_data } from "@/shared/data/seo-content/content";

export const metadata = seo_whois_data

const GoogleSearch = () => {
    const whyThisService = [
        {
            title: <b>Efficient Domain Management:</b>,
            des: (
                <>
                    Whether you’re managing a portfolio of <b>whois domain</b> records or conducting market research, this <b>whois database download</b> service provides all necessary <b>whois database</b> data in a single download. Ideal for <b>whois domain owner</b> verification and <b>whois IP</b> tracking.
                </>
            )
        },
        {
            title: <b>Invaluable for Research:</b>,
            des: (
                <>
                    Researchers and analysts can use this <b>whois database provider</b> to access historical domain data, assisting in <b>icann whois</b> tracking, <b>whois database lookup</b>, and identifying market trends or new opportunities through <b>whois search</b> and <b>domain search whois</b>.
                </>
            )
        },
        {
            title: <b>Secure and Convenient:</b>,
            des: (
                <>
                    All data is securely packaged in a zip file, making it easy to store and access whenever needed. This service ensures <b>whois ip lookup</b>, <b>whois domain name</b> searches, and <b>com whois</b> data are organized and reliable.
                </>
            )
        },
        {
            title: <b>Tailored to Your Needs:</b>,
            des: (
                <>
                    By allowing you to select specific years and months, the service ensures you only download the <b>whois database</b> data relevant to your requirements, including <b>whois IP address</b> and <b>whois lookup domain</b> information.
                </>
            )
        },
        {
            title: <b>All-in-One Solution for Domain Data:</b>,
            des: (
                <>
                    The <b>Whois Database Download</b> service is the ideal solution for professionals and individuals who need quick and reliable access to <b>whois domain</b> registration information, all within a single, easy-to-manage zip file. Perfect for <b>whois com domain</b> and <b>whois search</b> needs.
                </>
            )
        }
    ];
    
    
      const benefits = [
        {
            title: <b>Comprehensive Data Access:</b>,
            des: (
                <>
                    Obtain detailed information on <b>whois domain</b> registrations, including <b>whois domain owner</b> details, registration dates, and more, in one convenient file. Our <b>whois database download</b> service provides access to extensive <b>whois database</b> information for all your <b>icann whois</b> and <b>domain search whois</b> needs.
                </>
            )
        },
        {
            title: <b>User-Friendly:</b>,
            des: (
                <>
                    With a simple interface, selecting a date range and downloading data is straightforward, even for users with minimal technical knowledge. This <b>whois database provider</b> ensures an easy experience for <b>whois database lookup</b> and <b>whois search</b> tasks, making <b>whois ip</b> and <b>whois domain name</b> data accessible to everyone.
                </>
            )
        },
        {
            title: <b>Organized Information:</b>,
            des: (
                <>
                    The data is well-organized within the zip file, making it easy to review and use for various purposes, such as <b>whois lookup domain</b> analysis, <b>whois ip lookup</b>, and <b>domain management</b>. Perfect for those managing <b>whois com domain</b> assets or analyzing <b>whois ip address</b> records.
                </>
            )
        }
    ];
    
    
      const howWorks = [
        {
            title: <b>Select Year and Month:</b>,
            des: (
                <>
                    Start by choosing the year and month for which you want to <b>download whois database</b> domain data. This step allows you to target specific registration periods that are relevant to your needs, ensuring precise <b>whois database lookup</b>.
                </>
            )
        },
        {
            title: <b>Initiate the Download:</b>,
            des: (
                <>
                    Once you’ve selected the desired timeframe, click the download button. The <b>whois database provider</b> service will compile all relevant <b>whois domain</b> information registered within the specified period, including <b>whois IP</b> and <b>whois domain owner</b> details.
                </>
            )
        },
        {
            title: <b>Download the Zip File:</b>,
            des: (
                <span>
                    The compiled <b>whois database</b> data, including <b>domain names</b>, owner’s details, purchase dates, and more, will be packaged into a single zip file. You can download this file for easy access and storage, ideal for <b>icann whois</b> queries and <b>whois IP lookup</b> needs.
                </span>
            )
        },
        {
            title: <b>Extract and Review:</b>,
            des: (
                <>
                    After downloading, extract the zip file to view all the <b>whois domain</b> data. The information is organized for easy review, making it perfect for <b>whois search</b>, <b>domain search whois</b> functions, or managing <b>whois com domain</b> assets.
                </>
            )
        }
    ];
    
return (
    <>
      {/* Subpage Heading */}
      <PageHeader
        title={"Efficient Whois Database Download for Domain Insights"}
      />
      {/* Subpage Heading */}

      <section className="bg-white py-24">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ContentHeader img={"https://cdn-icons-png.flaticon.com/128/2282/2282226.png"} heading={'Introduction'} description={<span>
            Our <b>Whois Database Download</b> service provides you with easy access to detailed <b>whois domain</b> information. As a reliable <b>whois database provider</b>, we allow you to download comprehensive <b>whois database</b> data, including <b>whois domain owner</b> details, <b>whois IP</b> information, and other critical data. Whether you're conducting <b>whois search</b> queries, performing <b>whois lookup domain</b> checks, or managing digital assets, this service is designed to meet your needs. Download our detailed <b>whois database lookup</b> information in a convenient zip file format, complete with ownership details for easy access and analysis. Ideal for <b>icann whois</b> searches, <b>whois IP lookup</b>, and <b>domain search whois</b> functions.
          </span>
        }/>

        {/* image slider */}
        <ImageSlider leftImg={"/assets/img/whoisscreen.png"} rightImg={"/assets/img/whoisscreen2.png"}/>
        {/* image slider */}
          
          {/* accordians */}
          <div className="my-4 w-full">
            <div className="">
              <div>
                <ContentItemList
                  title={"How It Works?"}
                  content={
                    <span>
                        Using the <b>Whois Database Download</b> service is quick and simple. This <b>whois database provider</b> offers easy access to comprehensive <b>whois domain</b> information, including <b>whois IP</b> data and <b>whois domain owner</b> details. Here’s a step-by-step guide to help you make the most of this <b>whois search</b> tool and maximize your <b>whois database lookup</b> experience.
                    </span>
                
                  }
                  subItems={howWorks}
                />

                <ContentItemList
                  title={"Why You Need This Service?"}
                  content={
                    <span>
                        The <b>Whois Database Download</b> service is a critical tool for anyone needing detailed and organized <b>whois database</b> information. As a trusted <b>whois database provider</b>, this service offers easy access to <b>whois domain</b> and <b>whois IP</b> data, along with other essential details. Ideal for conducting <b>whois search</b> queries, performing <b>whois database lookup</b> for specific <b>whois domain names</b>, or analyzing <b>whois IP addresses</b>, this tool is invaluable for professionals. Here’s why you should consider using this service for <b>icann whois</b> searches, <b>whois lookup domain</b> checks, <b>domain search whois</b> needs, or managing <b>whois com domain</b> assets.
                    </span>
                }

                  subItems={whyThisService}
                />

                <ContentItemList
                  title={"What's the benefit for you?"}
                  content={
                    <span>
                        The <b>Whois Database Download</b> service offers numerous benefits, making it an invaluable tool for various professional and personal applications. As a reliable <b>whois database provider</b>, this service enables quick access to comprehensive <b>whois database</b> information, including <b>whois domain</b> and <b>whois IP</b> data. Whether you're conducting <b>whois search</b> queries, performing <b>whois database lookup</b> for specific <b>whois domain name</b> records, or retrieving <b>whois IP address</b> details, this tool is designed to meet all your needs. Ideal for <b>icann whois</b> searches, <b>whois lookup domain</b> analysis, <b>domain search whois</b>, and managing <b>whois com domain</b> assets.
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
                            src="https://www.youtube.com/embed/iGRgQurIOPg?si=_FZxSenRrpUWK87c"
                            title="How to download whois domain database - Step-by-Step Tutorial"
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
