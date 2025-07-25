import React from "react";
import { seo_about } from "@/shared/data/seo-content/content";
// import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";
import { aboutuswebcontent, aboutuswhowearecontent } from "@/shared/data/static-content/subPageContent";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import PrimaryButton from "@/shared/layout-components/public-comp/PrimaryButton";
// import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_about

const About = () => {
  return (
    <div className="bg-white">
        {/* Section: Top Header Section Begin */}
        <header className='py-14 lg:pt-28 lg:pb-20 bg-gray-100'>
          <div className='w-full text-center px-4 lg:px-16'>
            <h1 className='text-3xl lg:text-[64px] font-semibold mb-4 lg:mb-12 text-black-800 w-full'>About Us</h1>
            <h3 className='text-xl font-medium text-gray-600'>Last updated December 24, 2024</h3>
          </div>
        </header>
        {/* Section: Top Header Section End */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className='py-14 lg:py-16 bg-white flex justify-center items-center'>
            <div className=''>
              {/* Welcome Message */}
              <p className='text-lg font-semibold my-4 text-center'>Hey there!</p>
              <p className='text-lg font-semibold text-center'>We are all about making web scraping a breeze for everyone!</p>

              {/* About Us - Who We Are */}
              <h2 className='text-2xl lg:text-3xl font-bold  mt-16 uppercase'>Who we are?</h2>
              {aboutuswhowearecontent.map((content, index) => (
                <p key={index} className='text-black text-base font-light my-7'>
                  {content}
                </p>
              ))}

              {/* About Us - What is Data Scrapper */}
              <h2 className='text-2xl lg:text-3xl font-bold  mt-16 uppercase'>What is Data Scrapper?</h2>
              {aboutuswebcontent.map((content, index) => (
                <p key={index} className='text-black text-base font-light my-7'>
                  {content}
                </p>
              ))}

              {/* Call-to-Action Buttons */}
              <div className='mt-8'>
                <PrimaryButton/>
              </div>
            </div>
          </section>
        </div>
        
        {/* <HorizontalAds/> */}
        <WhyChooseUs />
    </div>
  );
};

export default About;
