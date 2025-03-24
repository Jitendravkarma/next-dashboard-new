"use client";
import { priceplanmonth } from "@/shared/data/static-content/public";
// Importing necessary libraries and hooks
import Link from "next/link"; // For navigation links
import { useState } from "react"; // React hook for state management
const PriceCards = () => {
  // State to toggle between 'monthly' and 'yearly' tabs
  const [activeTab, setActiveTab] = useState("monthly");
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 lg:py-18 sm:px-6 lg:px-8">
      {/* Container for overall content */}
      <div className="text-center">
        {/* Section Header */}
        <h2 className="text-3xl lg:text-4xl lg:pt-7 font-bold leading-tight mb-6 text-black-800 w-full">
          <span className="text-blue-500">Pricing Plan</span>
        </h2>
        {/* Pricing Plans Section Month Begin */}
        <div className="mt-10">
          {activeTab === "monthly" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {priceplanmonth.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white shadow-md rounded-md lg:px-8 px-2 py-10 col-span-1 border relative  ${
                    plan.plantitle === "Standard Plan" ? "border-1 overflow-hidden" : ""
                  }`}
                >
                  {/* "Most Popular" Label for Standard Plan */}
                  {plan.plantitle === "Standard Plan" && (
                    <div className="absolute top-10 right-10 bg-blue-500 text-white text-xs font-bold py-1 px-8 transform translate-x-1/2 -translate-y-1/2 rotate-45 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                      Most Popular
                    </div>
                  )}
                  {/* Plan Title */}
                  <h2 className="text-2xl font-semibold text-blue-500 mb-2">
                    {plan.plantitle}
                  </h2>
                  <small className="text-gray-400">{plan.plansubtitle}</small>
                  {/* Pricing Details */}
                  <div className="mt-[30px] mb-[30px]">
                    <span className="text-4xl font-bold">{plan.rupees}</span>
                    <span className="text-gray-500">{plan.month}</span>
                  </div>
                  {/* Call-to-Action Button */}
                  <Link
                    href={plan.payLink}
                    target="_blank"
                    className={`block mt-6 w-full text-sm py-3 text-gray-500 border font-semibold rounded-md ${
                      plan.plantitle === "Standard Plan" ||
                      plan.plantitle === "Reseller Plan"
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-transparent text-gray-500 border hover:bg-gray-50"
                    }`}
                  >
                    {plan.buttontext}
                  </Link>
                  {/* Additional Feature Description */}
                  <p className="text-left text-light text-sm mt-[50px] font-semibold px-2 lg:px-0">
                    {plan.paragraph}:
                  </p>
                  {/* List of Content Features */}
                  <ul className="mt-4 text-sm text-gray-600 space-y-2 px-2 lg:px-0">
                    {plan.content.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between md:justify-start text-sm text-black font-light gap-2 mb-2"
                      >
                        {/* Feature Text */}
                        <span>{item.text}</span>
                        {/* Question Icon for Tooltip */}
                        {item.question && (
                          <div className="relative group ml-2 z-10">
                            <i className="ri-question-line text-gray-600 cursor-pointer" />
                            <div className="absolute z-50 bottom-full mb-2 hidden group-hover:block w-52 -left-44 md:left-0 bg-gray-800 text-white text-sm cursor-pointer rounded px-2 py-1">
                              {item.tooltips}
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Pricing Plans Section Month End */}
      </div>
    </div>
  );
};
export default PriceCards;
