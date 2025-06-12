"use client"
import React from "react";
import { featurestemplates } from "@/shared/data/static-content/public";
import Link from "next/link";
import { useUserContext } from "@/shared/userContext/userContext";
const FeatureSection = () => {
  const { yt_links } = useUserContext()
  return (
    <section className="py-14 lg:pt-[62px] bg-white relative">
      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-16"><span className="text-blue-500">Featured</span> Templates</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featurestemplates.map((template, index) => (
            <div
              key={index}
              className="border border-gray-200 group rounded-md p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 p-1 flex items-center justify-center bg-white border border-gray-300 rounded-md shadow"
                >
                  {template.image}
                </div>
                <h3 className="text-sm font-semibold ml-4 group-hover:underline">
                  <Link href={template.url}>
                    {template.title}
                  </Link>
                </h3>
              </div>

              <p className="text-black text-sm text-left font-light mt-3">{template.description}</p>
              <div className="flex items-center">
                <a
                  className="pt-4 text-red-600 flex items-center text-sm space-x-2"
                  href={`https://www.youtube.com/watch?v=${yt_links[template.toolName]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-youtube-line"></i>
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          ))}
        </div>    
      </div>
    </section>
  );
};

export default FeatureSection;
