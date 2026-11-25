import { seo_reseller } from "@/shared/data/seo-content/content";
import AllResellerAgreement from "@/shared/layout-components/public-comp/AllResellerAgreement";

export const metadata = seo_reseller

// Source document had no date (only "Dated: ____"). Set e.g. "November 25, 2026" to show it.
const LAST_UPDATED = null;

const ResellerAgreement = () => {
  return (
    <>
      <header className='py-14 lg:pt-28 lg:pb-20 bg-gray-100'>
        <div className='w-full text-center px-4 lg:px-16'>
          <h1 className='text-3xl lg:text-[64px] font-semibold mb-4 lg:mb-12 text-black-800 w-full'>Scrape Genius Reseller Agreement</h1>
          {LAST_UPDATED && <h3 className='text-xl font-medium text-gray-600'>Last updated {LAST_UPDATED}</h3>}
        </div>
      </header>

      <AllResellerAgreement/>
    </>
  );
};

export default ResellerAgreement;
