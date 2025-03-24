import Image from "next/image";
import Link from "next/link";

const BecomeReseller = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 lg:py-18 lg:px-14 rounded-md bg-blue-100">
      {/* Container for overall content */}
      <div className="">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl lg:pt-7 font-bold leading-tight mb-6 text-black-800 w-full">
              <span className="text-blue-500">Become a</span> Reseller
            </h2>
            {/* Description */}
            <p className="text-black text-base font-light">
              Start earning significant income by becoming a reseller. Sell
              unlimited licenses of our software and keep all the profits.
              We&aposve created a platform to help you operate efficiently,
              providing access to all features like CRM, payment gateway
              integration, customization, and more. Just follow the steps.
            </p>
            {/* Want Be Reseller Button */}
            <Link
              href="/reseller"
              className="text-base font-medium bg-white text-blue-400 
              hover:bg-blue-500 hover:text-white border-2 border-blue-400 
              hover:border-white rounded-md py-4 lg:px-24 px-12 my-5 inline-block"
            >
              Want Be Reseller
            </Link>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2">
            {/* Image */}
            <Image
              src="/assets/img/reseller-plan.svg"
              alt="reseller plan"
              width={436}
              height={200}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeReseller;
