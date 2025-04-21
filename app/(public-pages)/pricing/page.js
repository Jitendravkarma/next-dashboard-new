import React from "react";
import { seo_pricing } from "@/shared/data/seo-content/content";
// import BecomeReseller from "@/shared/layout-components/public-comp/BecomeReseller";
import PriceCards from "@/shared/layout-components/public-comp/PriceCards";
import PriceTable from "@/shared/layout-components/public-comp/PriceTable";
// import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";
import Link from "next/link";

export const metadata = seo_pricing

const PricingPage = () => {
  return (
    <>
      <header className='py-14 lg:pt-28 lg:pb-20 bg-gray-100'>
        <div className='w-full text-center px-4 lg:px-16'>
          <h1 className='text-3xl lg:text-[64px] font-semibold mb-4 lg:mb-12 text-black-800 w-full'>Our Pricing</h1>
          <h3 className='text-xl font-medium text-gray-600'>Best and reliable pricing plans</h3>
        </div>
      </header>
      <div className="bg-white">
        <PriceCards/>
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-18 sm:px-6 lg:px-8">
          <Link href={"https://codecanyon.net/item/google-map-scraper-pro/25283251"} target="_blank" title="Buy Now">
            <img src="/assets/img/pricebanner.png" className="rounded-md shadow-md" />
          </Link>
        </div>
        {/* <HorizontalAds/> */}
        <PriceTable/>
      </div>
      {/* <div className="bg-gray-100 py-16">
        <BecomeReseller/>
      </div> */}
    </>
  );
};

export default PricingPage;
