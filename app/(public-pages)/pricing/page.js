import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import PricingTable from "./table";
import Link from "next/link";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_pricing } from "@/shared/data/seo-content/content";

export const metadata = seo_pricing

const PriceCards = () => {
  return (
    <>
      <PageHeader title={"Pricing"}/>

      <div className="bg-white pt-20">
        {/* Heading and Subtitle */}
        <div className="text-center mb-24">
          <h1 className="text-4xl font-bold text-gray-800">Our Pricing Plans</h1>
          <p className="text-gray-600 mt-4">
            Choose a plan that fits your needs. Whether you're an individual,<br /> a small team, or a large organization, we've got you covered!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-8 px-5 md:px-3 xl:px-0">
          {/* Free Plan */}
          <div className="w-80 md:w-[19rem] xl:w-80 bg-white shadow-sm hvoer:shadow-sm rounded-md border-t-4 border-blue-500 hover:scale-105 transition-transform duration-300">
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-blue-500">Free Plan</h3>
              <p className="text-gray-500 mt-2">For a quick, simple project</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">₹0</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mt-6 space-y-4 text-left">
                <FeatureItem label="Access to basic features" tooltip="Basic features include access to core functionalities." />
                <FeatureItem label="Limited Access" tooltip="Limited Access allows usage up to a certain level without unlocking premium features." />
                <FeatureItem label="50 Tasks" tooltip="You can perform up to 50 tasks per month on the free plan." />
                <FeatureItem label="Direct Contact" tooltip="Contact directly to your customers via Phone calls, SMS, WhatsApp or Email." />
                <FeatureItem label="Limited downloads" tooltip="Download up to 50 records per month with the free plan." />
                <FeatureItem label="Limited page access" tooltip="Access limited pages and content without unlocking the full site." />
                <FeatureItem label="No priority support" tooltip="Priority support is not included in the free plan." unavailable />
              </ul>
              <Link href={"/signup"} target="_blank" className="block mt-6 w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700">
                Get Started
              </Link>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="w-80 md:w-[19rem] xl:w-80 bg-white shadow-sm hvoer:shadow-sm rounded-md border-t-4 border-green-500 hover:scale-105 lg:hover:scale-105 xl:scale-105 transition-transform duration-300">
            <div className="p-6 text-center relative overflow-hidden">
              {/* ribbon */}
              <div className="absolute top-6 right-6 bg-red-500 text-white text-xs font-bold py-1 px-8 transform translate-x-1/2 -translate-y-1/2 rotate-45 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                Best Sale
              </div>
              <h3 className="text-xl font-semibold text-green-500">Standard Plan</h3>
              <p className="text-gray-500 mt-2">Ideal for small teams</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">₹2,999</span>
                <span className="text-gray-500">/3 months</span>
              </div>
              <ul className="mt-6 space-y-4 text-left">
                <FeatureItem label="Access to all features" tooltip="Standard plan includes access to all available features." />
                <FeatureItem label="Full Access" tooltip="Unlock all features without limitations." />
                <FeatureItem label="500 Tasks" tooltip="You can perform up to 500 tasks per month on the Standard plan." />
                <FeatureItem label="Direct Contact" tooltip="Contact directly to your customers via Phone calls, SMS, WhatsApp or Email." />
                <FeatureItem label="Downloads up to 500 records" tooltip="Download up to 500 records per month with the Standard plan." />
                <FeatureItem label="Full page access" tooltip="Access all pages and content without restrictions." />
                <FeatureItem label="Priority support" tooltip="Get faster and prioritized support for any issues." />
              </ul>
              <Link href={"https://pmny.in/PAYUMN/oJ45wjNe1PxQ"} target="_blank" className="block mt-6 w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
                Choose Standard
              </Link>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="w-80 md:w-[19rem] xl:w-80 bg-white shadow-sm hvoer:shadow-sm rounded-md border-t-4 border-yellow-500 hover:scale-105 transition-transform duration-300">
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-yellow-500">Professional Plan</h3>
              <p className="text-gray-500 mt-2">Perfect for medium-sized businesses</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">₹9,999</span>
                <span className="text-gray-500">/year</span>
              </div>
              <ul className="mt-6 space-y-4 text-left">
                <FeatureItem label="Access to all premium features" tooltip="Premium plan provides access to all advanced features and tools." />
                <FeatureItem label="Unlimited Access" tooltip="Enjoy unlimited access to all features and tools without restrictions." />
                <FeatureItem label="Unlimited Tasks" tooltip="Perform an unlimited number of tasks per month with the Premium plan." />
                <FeatureItem label="Direct Contact" tooltip="Contact directly to your customers via Phone calls, SMS, WhatsApp or Email." />
                <FeatureItem label="Unlimited downloads" tooltip="Download unlimited records per month with the Premium plan." />
                <FeatureItem label="Full page access" tooltip="Access all pages and content without restrictions." />
                <FeatureItem label="24/7 priority support" tooltip="Get round-the-clock priority support for any issues." />
              </ul>
              <Link href={"https://pmny.in/PAYUMN/vIKMqUi2yUTD"} target="_blank" className="block mt-6 w-full py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600">
                Choose Professional
              </Link>
            </div>
          </div>
        </div>

        {/* re-seller link */}
        <p className="text-center mt-16 mb-5 text-xl">
          {/* <Link href={"/reseller-plan"} className="text-blue-500 hover:underline">
            Become a Reseller?
          </Link> */}
        </p>
        {/* re-seller link */}

        {/* comparition */}
        <PricingTable/>
        {/* comparition */}
      </div>
    </>
  );
};

const FeatureItem = ({ label, tooltip, unavailable }) => {
  return (
    <li className={`flex items-center text-gray-600 ${unavailable ? "opacity-50" : ""}`}>
      <FontAwesomeIcon icon={unavailable ? faTimes : faCheck} className={`${unavailable ? "text-red-500" : "text-green-500"} mr-2`} />
      {label}
      <FontAwesomeIcon
        icon={faQuestionCircle}
        className="text-blue-400 ml-2 cursor-pointer"
        title={tooltip}
      />
    </li>
  );
};

export default PriceCards;
