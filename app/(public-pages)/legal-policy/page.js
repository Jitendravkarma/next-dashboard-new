import Link from "next/link";
import { seo_privacy } from "@/shared/data/seo-content/content";
import PolicyContentData from "@/shared/layout-components/public-comp/PolicyContentData";
// import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_privacy

const PrivacyPolicy = () => {
  return (
    <>
      <header className='py-14 lg:pt-28 lg:pb-20 bg-gray-100'>
        <div className='w-full text-center px-4 lg:px-16'>
          <h1 className='text-3xl lg:text-[64px] font-semibold mb-4 lg:mb-12 text-black-800 w-full'>Privacy Policy</h1>
          <h3 className='text-xl font-medium text-gray-600'>Last updated December 24, 2024</h3>
        </div>
      </header>

      
      {/* Gets Connects Section */}
      <div className="bg-white">
        {/* <HorizontalAds/> */}
      </div>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-18 sm:px-6 lg:px-10  flex flex-wrap items-center justify-between p-4">
          <div className="prose">
            <p className="text-xss font-light leading-normal">
              One of our main priorities is the
              privacy of our visitors. This Privacy Policy document contains
              types of information that is collected and recorded by
              webcrawlerspider and how we use it.
            </p>

            <p className="text-xss font-light leading-normal">
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>

            <p className="text-xss font-light leading-normal">
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in webcrawlerspider. This policy
              is not applicable to any information collected offline or via
              channels other than this website.
            </p>

            <PolicyContentData/>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
