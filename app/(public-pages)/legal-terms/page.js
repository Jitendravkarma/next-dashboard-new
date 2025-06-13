import { seo_terms } from "@/shared/data/seo-content/content";
import AllTerms from "@/shared/layout-components/public-comp/AllTerms";
// import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";
import Link from "next/link";

export const metadata = seo_terms

const TermsCondition = () => {
  return (
    <>
      <header className='py-14 lg:pt-28 lg:pb-20 bg-gray-100'>
        <div className='w-full text-center px-4 lg:px-16'>
          <h1 className='text-3xl lg:text-[64px] font-semibold mb-4 lg:mb-12 text-black-800 w-full'>Terms and conditions</h1>
          <h3 className='text-xl font-medium text-gray-600'>Last updated December 24, 2024</h3>
        </div>
      </header>

      {/* <HorizontalAds/> */}
      {/* Gets Connects Section */}
      <AllTerms/>

      {/* Footer Section */}

    </>
  );
};

export default TermsCondition;
