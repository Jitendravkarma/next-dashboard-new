import React from "react";
// import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_contact } from "@/shared/data/seo-content/content";
import ContactUs from "@/shared/layout-components/public-comp/ContactUs";
// import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_contact

const Contact = () => {

  return (
    <div className="bg-white">
      <header className='py-14 lg:pt-28 lg:pb-20 bg-gray-100'>
        <div className='w-full text-center px-4 lg:px-16'>
          <h1 className='text-3xl lg:text-[64px] font-semibold mb-4 lg:mb-12 text-black-800 w-full'>Contact Us</h1>
          <h3 className='text-xl font-medium text-gray-600'>Need assistance? We're here for you!</h3>
        </div>
      </header>
      
      {/* <HorizontalAds/> */}
      
      <div className="">
        <ContactUs/>
      </div>
    </div>
  );
};

export default Contact;
