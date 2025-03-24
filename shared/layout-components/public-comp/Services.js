"use client"
import React, { useState } from "react";
import Image from "next/image";
import { tabs } from "@/shared/data/static-content/public";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("Transform Your Deta");

  // Find the content for the active tab
  const activeTabContent = tabs.find((tab) => tab.key === activeTab).content;

  return (
    <section className="py-14 lg:pt-[62px] bg-gray-50">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center max-w-7xl mx-auto px-4 lg:px-8">
        {/* Tabs Section */}
        <div className="w-full lg:w-[10%] order-1 lg:order-2 mb-5">
          <div className="flex flex-row lg:flex-col items-center lg:items-start justify-center space-x-4 lg:space-x-0 lg:space-y-4 control">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  activeTab === tab.key ? "bg-blue-500 text-white" : "text-gray-400"
                } hover:bg-blue-500 hover:text-white focus:outline-none`}
              >
                <span className="text-sm">{tab.icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[90%] px-4 lg:pr-8 mb-6 lg:mb-0 order-2 lg:order-1">
          <div className="flex flex-col lg:flex-row gap-4 space-x-6 justify-center items-center">
            {/* Column 1 */}
            <div className="w-full lg:w-1/2">
              <Image
                src={activeTabContent.image}
                alt={`${activeTabContent.title} Image`}
                className="w-full h-auto rounded-md"
                width={500}
                height={500}
              />
            </div>

            {/* Column 2 */}
            <div className="w-full lg:w-1/2">
              <h2
                className="text-2xl lg:text-3xl font-bold capitalize text-black-800 mb-4 text-blue-500"
              >
                {activeTabContent.title}
              </h2>
              <p className="text-black text-base font-light">{activeTabContent.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
