import React from "react";
import { seo_about } from "@/shared/data/seo-content/content";
// import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";
import { aboutuswebcontent, aboutuswhowearecontent } from "@/shared/data/static-content/subPageContent";
import WhyChooseUs from "@/shared/layout-components/public-comp/WhyChoose";
import PrimaryButton from "@/shared/layout-components/public-comp/PrimaryButton";
import Link from "next/link";
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

              {/* About Us - What is Scrape Genius */}
              <h2 className='text-2xl lg:text-3xl font-bold  mt-16 uppercase'>What is Scrape Genius?</h2>
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

        {/* certifications */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-14 lg:py-20">
            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-2xl lg:text-4xl font-bold uppercase tracking-wide">
                Our Certifications
              </h2>
              <p className="mt-2 text-gray-600 max-w-xl">
                Official registrations and certifications that build trust and credibility
              </p>
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-12 gap-6 max-w-6xl">
              {/* Certificate 1 */}
              <Link
                href="/assets/img/starupcertificate.jpg"
                target="_blank"
                className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white rounded-md border shadow-sm hover:shadow-lg transition duration-300 group flex flex-col"
                title="View Certificate"
              >
                <div className="relative overflow-hidden rounded-t-md">
                  <img
                    src="/assets/img/starupcertificate.jpg"
                    alt="Startup Certificate"
                    className="w-full h-60 group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <span className="text-white font-semibold text-sm">
                      View Certificate
                    </span>
                  </div>
                </div>
                <div className="p-4 text-center my-auto">
                  <h3 className="font-semibold text-xl text-gray-800">Startup India Certificate</h3>
                  <span className="text-xs text-green-600 font-medium">Verified</span>
                </div>
              </Link>

              {/* Certificate 2 */}
              <Link
                href="/assets/img/coi.jpg"
                target="_blank"
                className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white rounded-md border shadow-sm hover:shadow-lg transition duration-300 group flex flex-col"
                title="View Certificate"
              >
                <div className="relative overflow-hidden rounded-t-md">
                  <img
                    src="/assets/img/coi.jpg"
                    alt="Certificate of Incorporation"
                    className="w-full h-60 group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <span className="text-white font-semibold text-sm">
                      View Certificate
                    </span>
                  </div>
                </div>
                <div className="p-4 text-center my-auto">
                  <h3 className="font-semibold text-xl text-gray-800">
                    Certificate of Incorporation
                  </h3>
                  <span className="text-xs text-green-600 font-medium">Government Registered</span>
                </div>
              </Link>

              {/* Coming Soon */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white rounded-md border border-dashed shadow-sm flex flex-col items-center justify-center h-[400px] text-center">
                <span className="text-lg font-semibold text-gray-700">More Certificates</span>
                <span className="text-sm text-gray-500 mt-1">Coming Soon</span>
              </div>
            </div>
          </section>

        </div>
    </div>
  );
};

export default About;
