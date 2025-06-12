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

            {/* <div className="text-center mt-28 mb-5 bg-blue-100 rounded-md py-16 px-5">
              <h4 className="font-bold text-lg sm:text-3xl mb-3 sm:leading-10 italic capitalize">
                "How do you contact us regarding this policy"
              </h4>
              <div className="text-sm sm:text-lg font-light leading-normal">
                If you have any questions or suggestions about our Privacy Policy,
                do not hesitate to 
                <Link href="/contact-us" className="text-blue-500 hover:underline hover:font-bold hover:italic capitalize">
                  {" "} contact us
                </Link>.
                <p className="mt-3 text-2xl sm:text-5xl text-center">
                  <a href="mailto:support@designcollection.in">
                    <i className="ri-mail-line text-blue-500 hover:text-blue-600" title="Email Now"/>
                  </a>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
