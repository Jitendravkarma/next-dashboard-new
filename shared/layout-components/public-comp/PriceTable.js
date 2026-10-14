"use client"
import React from "react";
import Link from "next/link";
import { useUserContext } from "@/shared/userContext/userContext";

const PriceTable = ({singleuser}) => {
  const { priceObj, selectedSilverPlan, openRates } = useUserContext();
  return (
    <div>
      {/* Header Row */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Compare Plans &{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Features
          </span>
        </h2>
        <p className="text-gray-600">
          Choose the plan that best fits your business needs
        </p>
      </div>
      
      <div className="px-6 max-w-7xl mx-auto bg-white border border-gray-200 rounded-md overflow-x-auto shadow">
        <div className="w-[500px] md:w-auto mx-auto overflow-x-auto">
          <div className="grid grid-cols-4 text-center border-b bg-white">
            <div></div>
            {/* Silver */}
            <div className="py-6">
              <h3 className="font-semibold text-gray-700">{singleuser ? 'basic' : 'Silver'} Plan</h3>
              <p className="text-gray-400 text-sm mb-3">{priceObj.priceTag}{singleuser ? '11,999' : priceObj.pro}/yr</p>
              <Link target="_blank" href={singleuser ? 'https://basic.com' : priceObj.proLink} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-semibold">
                Buy Now
              </Link>
            </div>

            {/* Gold */}
            <div className="py-6">
              <h3 className="font-semibold text-orange-500">{singleuser ? 'Standard' : 'Gold'} Plan</h3>
              <p className="text-gray-400 text-sm mb-3">{priceObj.priceTag}{singleuser ? '15,999' : priceObj.gold}/yr</p>
              <Link target="_blank" href={singleuser ? 'https://standard.com' : priceObj.goldLink} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold">
                Buy Now
              </Link>
            </div>

            {/* Platinum */}
            <div className="py-6">
              <h3 className="font-semibold text-purple-600">{singleuser ? 'Pro' : 'Platinum'} Plan</h3>
              <p className="text-gray-400 text-sm mb-3">{priceObj.priceTag}{singleuser ? '18,999' : priceObj.platinum}/yr</p>
              <Link target="_blank" href={singleuser ? 'https://pro.com' : priceObj.platinumLink} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-semibold">
                Buy Now
              </Link>
            </div>
          </div>

          {/* Rows */}
          {[
            ["Data Extraction", "upto 1.8 million", "upto 3.6 million", "upto 5 million"],
            ["Billed Annually", "✔", "✔", "✔"],
            ["Downloads", "Unlimited", "Unlimited", "Unlimited"],
            ["No of Licence", "Single Licence", "Single Licence", "Single Licence"],
            ["Priority Onboarding", "✔", "✔", "✔"],
            ["Dedicated Account Manager", "✔", "✔", "✔"],
            ["Contact Support", "Email Support", "Direct Contact Support", "24/7 Priority Support"],
            ["Customer Support", "✔", "✔", "✔"],
            ["Early Access to New Features", "✔", "✔", "✔"],
          ].map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 items-center text-sm ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              } border-b`}
            >
              {/* Feature */}
              <div className="p-4 text-gray-700 font-medium">
                {row[0]}
              </div>

              {/* Silver */}
              <div className="text-center p-4">
                {row[1] === "✔" ? (
                  <span className="text-green-600 font-bold">✔</span>
                ) : row[1] === "✖" ? (
                  <span className="text-red-300 font-bold">✖</span>
                ) : (
                  row[1]
                )}
              </div>

              {/* Gold */}
              <div className="text-center p-4">
                {row[2] === "✔" ? (
                  <span className="text-green-600 font-bold">✔</span>
                ) : row[2] === "✖" ? (
                  <span className="text-red-300 font-bold">✖</span>
                ) : (
                  row[2]
                )}
              </div>

              {/* Platinum */}
              <div className="text-center p-4">
                {row[3] === "✔" ? (
                  <span className="text-green-600 font-bold">✔</span>
                ) : row[3] === "✖" ? (
                  <span className="text-red-300 font-bold">✖</span>
                ) : (
                  row[3]
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
