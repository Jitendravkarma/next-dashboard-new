import React from "react";
import { seo_docs } from "@/shared/data/seo-content/content";
import Link from "next/link";
import { CustomLink, Heading, Heading_Two, Para, Code, LoadImage, CmdBox } from "@/shared/layout-components/docs/Heading";
import CopyCommand from "@/shared/layout-components/docs/CopyButton";
import GetStart from "@/shared/layout-components/docs/sections/Start";
import Features from "@/shared/layout-components/docs/sections/Features";
import Logs from "@/shared/layout-components/docs/sections/Logs";
import Services from "@/shared/layout-components/docs/sections/Services";
import DocBottomSupport from "@/shared/layout-components/public-comp/DocBottomSupport";
import DocYouTubeChannel from "@/shared/layout-components/public-comp/DocYouTubeChannel";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_docs

const Docs = () => {
  return (
    <>
      <div className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Heading and Subtitle */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl text-gray-800 font-semibold"><span className="text-blue-500">Scrape Genius</span><br/>User Manual</h1>
            <p className="text-gray-600 mt-4">
              An advanced web scraping solution that uses multiple legal tools to <br/> efficiently extract and manage data, ensuring full compliance with relevant regulations.
            </p>
          </div>

          <div className="mt-10">
            <div className="py-24" id="started">
              <GetStart/>
            </div>

            <div className="py-24" id="features">
              <HorizontalAds/>
              <Features/>
            </div>


            <div className="py-24" id="services">
              <HorizontalAds/>
              <Services/>
            </div>

            <div className="py-24" id="logs">
              <HorizontalAds/>
              <Logs/>
            </div>
          </div>

          <div className="bg-white border border-blue-200 p-2 sm:p-8 rounded-2xl shadow-xl text-center max-w-4xl mx-auto py-10 sm:py-24 overflow-hidden relative" id="support">
            {/* Subtle Background Accent */}
            <div className="bg-gradient-to-tr absolute from-blue-50 inset-0 opacity-50 to-transparent"></div>
            
            {/* Content */}
            <DocBottomSupport/>
          </div>
          
        </div>
      </div>
    </>
  );
};


export default Docs;
