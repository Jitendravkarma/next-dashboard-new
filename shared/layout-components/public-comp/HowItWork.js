import React from "react";
import Link from "next/link";
import Image from "next/image";
const HowItWork = ({ scraperData }) => {
  return (
    <>
      {/* Meet Your Needs Begin */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Display title at the top of the section */}
          <h2
            className="text-2xl lg:text-3xl font-bold text-center mb-16 flex items-center justify-center gap-2"
            dangerouslySetInnerHTML={{ __html: scraperData.mainheading }}
          />
          {scraperData.scrapers.map((howitworkgmps, howitworkgmpsindex) => (
            <div
              key={howitworkgmpsindex}
              className="flex flex-col lg:flex-row gap-12 lg:gap-28 justify-between items-start  mb-20 lg:mb-36"
            >
              {/* Alternating Layout */}
              {howitworkgmpsindex % 2 === 0 ? (
                // First section (image & description on left, 'How It Works' on right)
                <>
                  {/* Left Box: Image & Title */}
                  <div className="lg:w-1/2 relative bg-lft-top">
                    <div className="rounded-md p-6 shadow-md bg-white border area">
                      {/* Background Images using ::before pseudo-class */}
                      <div className="group lg:flex items-center mb-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-transparent border border-gray-300 rounded-md shadow">
                          <Image
                            src={howitworkgmps.imageSrc} // Use dynamic image source here
                            alt={howitworkgmps.subheading}
                            className="w-8 h-8 rounded-md"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="lg:ml-3 mt-3">
                          <h3 className="text-sm font-semibold  text-truncate pb-1">
                            {howitworkgmps.subheading}
                          </h3>
                          {/* Assuming dynamic text for these spans */}
                          <span className="text-xs h-5 px-2 py-1 rounded-full bg-slate-100 leading-[18px] mr-2">
                            {howitworkgmps.pretitle}
                          </span>
                          <span className="text-xs h-5  px-2 py-1 rounded-full bg-slate-100 leading-[18px]">
                            {howitworkgmps.presubtitle}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">
                        {howitworkgmps.paragraph}
                      </p>
                    </div>
                  </div>
                  {/* Right Box: How It Works Description */}
                  <div className="lg:w-1/2">
                    <h2 className="text-2xl lg:text-3xl font-bold text-black-800 mb-6">
                      {howitworkgmps.sectionHeading}
                      {/* <span className="text-blue-700">{howitworkgmps.sectionHeading.split(" ")[0]}</span> {howitworkgmps.sectionHeading.split(" ").slice(1).join(" ")}  */}
                    </h2>
                    <p className="text-black text-base font-light mb-12">
                      {howitworkgmps.description}
                    </p>
                    <Link
                      href={howitworkgmps.link} // Dynamic link
                      className="text-xs lg:text-base font-medium bg-blue-500 hover:bg-blue-400 text-white rounded-md py-4 lg:px-24 px-12 mb-3"
                    >
                      {howitworkgmps.buttonText} {/* Dynamic button text */}
                    </Link>
                  </div>
                </>
              ) : (
                // Second section (reverse the order, 'How It Works' on left, image & description on right)
                <>
                  {/* Left Box: How It Works Description */}
                  <div className="lg:w-1/2">
                    <h2 className="text-2xl lg:text-3xl font-bold text-black-800 mb-6">
                      {howitworkgmps.sectionHeading}
                    </h2>
                    <p className="text-black text-base font-light mb-12">
                      {howitworkgmps.description}
                    </p>
                    <Link
                      href={howitworkgmps.link} // Dynamic link
                      className="text-xs lg:text-base font-medium bg-blue-500 hover:bg-blue-400 text-white rounded-md py-4 lg:px-24 px-12 mb-3"
                    >
                      {howitworkgmps.buttonText} {/* Dynamic button text */}
                    </Link>
                  </div>
                  {/* Right Box: Image & Title */}
                  <div className="lg:w-1/2 relative bg-lft-top">
                    <div className="rounded-md p-6 shadow-md bg-white border area">
                      <div className="group lg:flex items-center mb-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-transparent border border-gray-300 rounded-md shadow">
                          <Image
                            src={howitworkgmps.imageSrc} // Use dynamic image source here
                            alt="Google Map Scraper"
                            className="w-8 h-8 rounded-md"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="lg:ml-3 mt-3 lg:mt-0">
                          <h3 className="text-sm font-semibold  text-truncate pb-1">
                            {howitworkgmps.subheading}
                          </h3>
                          <div>
                            {/* Assuming dynamic text for these spans */}
                            <span className="text-xs   px-2 py-1 rounded-full bg-slate-100 leading-[18px] mr-2">
                              {" "}
                              {howitworkgmps.pretitle}
                            </span>
                            <span className="text-xs   px-2 py-1 rounded-full bg-slate-100 leading-[18px]">
                              {" "}
                              {howitworkgmps.presubtitle}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">
                        {howitworkgmps.paragraph}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Meet Your Needs End */}
    </>
  );
};
export default HowItWork;
