import { seo_eula } from "@/shared/data/seo-content/content";
import AllEula from "@/shared/layout-components/public-comp/AllEula";

export const metadata = seo_eula

// TODO: confirm date (taken from file name 17102026)
const LAST_UPDATED = "October 17, 2026";

const EndUserLicenseAgreement = () => {
  return (
    <>
      <header className='py-14 lg:pt-28 lg:pb-20 bg-gray-100'>
        <div className='w-full text-center px-4 lg:px-16'>
          <h1 className='text-3xl lg:text-[64px] font-semibold mb-4 lg:mb-12 text-black-800 w-full'>End User Licence Agreement</h1>
          <h3 className='text-xl font-medium text-gray-600'>Last updated {LAST_UPDATED}</h3>
        </div>
      </header>

      <AllEula/>
    </>
  );
};

export default EndUserLicenseAgreement;
