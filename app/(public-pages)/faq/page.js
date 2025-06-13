import React from "react";
// import Link from "next/link";
// import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_faq } from "@/shared/data/seo-content/content";
// import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";
import FaqSection from "@/shared/layout-components/public-comp/FaqSection";

export const metadata = seo_faq

const Faq = () => {
  return (
    <>
      <header className='py-14 lg:pt-28 lg:pb-20 bg-gray-100'>
        <div className='w-full text-center px-4 lg:px-16'>
          <h1 className='text-3xl lg:text-[64px] font-semibold mb-4 lg:mb-12 text-black-800 w-full'>FAQ</h1>
          <h3 className='text-xl font-medium text-gray-600'>Last updated December 24, 2024</h3>
        </div>
      </header>

      {/* faq question and answer Begin */}
      <section className="bg-white py-24">
       <FaqSection/>
      </section>
      {/* <HorizontalAds/> */}
      {/*faq question and answer End */}
    </>
  );
};

export default Faq;
