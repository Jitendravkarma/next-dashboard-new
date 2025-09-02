import React from "react";
import Link from "next/link";

const PriceTable = () => {
  return (
    <div className="bg-white py-14 max-w-screen-lg mx-auto">
      {/* Table Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">Compare Plans & <span className="text-blue-500">Features</span></h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-center">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 px-6"></th>
              <th className="py-4 px-6">Free Plan</th>
              <th className="py-4 px-6">Standard Plan</th>
              <th className="py-4 px-6">Reseller Plan</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* Button */}
            <tr>
              <td className="text-left font-bold"></td>
              <td className="pb-5 px-6">
                <Link href={"/signup"} target="_blank" className="inline-block mt-6 w-[130px] py-2 border-b-2 border-blue-500 hover:text-white font-semibold rounded-md hover:bg-blue-500">Get Started</Link>
              </td>
              <td className="pb-5 px-6">
                <Link href={"https://codecanyon.net/item/google-map-scraper-pro/25283251"} target="_blank" className="inline-block mt-6 w-[130px] py-2 border-b-2 border-green-500 hover:text-white font-semibold rounded-md hover:bg-green-500">Buy Now</Link>
              </td>
              <td className="pb-5 px-6">
                <Link href={"https://codecanyon.net/item/google-map-scraper-pro/25283251"} target="_blank" className="inline-block mt-6 w-[130px] py-2 border-b-2 border-yellow-500 hover:text-white font-semibold rounded-md hover:bg-yellow-500">Buy Now</Link>
              </td>
            </tr>

            {/* Pricing Section */}
            <tr>
              <td className="py-4 px-6 text-left font-bold bg-gray-100 md:bg-white shadow-md">Price</td>
              <td className="py-4 px-6">₹0</td>
              <td className="py-4 px-6">₹2,999</td>
              <td className="py-4 px-6">₹9,999</td>
            </tr>

            {/* Billing Section */}
            <tr>
              <td className="py-4 px-6 text-left bg-gray-100 md:bg-white shadow-md">Billed Quarterly</td>
              <td className="py-4 px-6 text-gray-500">
                <i className="ri-close-line text-red-500" />
              </td>
              <td className="py-4 px-6 text-gray-500">
                <i className="ri-close-line text-red-500" />
              </td>
              <td className="py-4 px-6 text-gray-500">
                <i className="ri-close-line text-red-500" />
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-left bg-gray-100 md:bg-white shadow-md">Billed Annually</td>
              <td className="py-4 px-6 text-gray-500">
                <i className="ri-close-line text-red-500" />
              </td>
              <td className="py-4 px-6 text-gray-500">
                <i className="ri-check-line text-green-500" />
              </td>
              <td className="py-4 px-6 text-gray-500">
                <i className="ri-check-line text-green-500" />
              </td>
            </tr>

            {/* Download Section */}
            <tr>
              <td className="py-4 px-6 text-left bg-gray-100 md:bg-white shadow-md">Downloads</td>
              <td className="py-4 px-6">Limited upto 50 records</td>
              <td className="py-4 px-6">No Limit</td>
              <td className="py-4 px-6">No Limit</td>
            </tr>

            {/* devices access */}
            <tr>
              <td className="py-4 px-6 text-left bg-gray-100 md:bg-white shadow-md">Reselling</td>
              <td className="py-4 px-6">
                <i className="ri-close-line text-red-500" />
              </td>
              <td className="py-4 px-6">
                <i className="ri-close-line text-red-500" />
              </td>
              <td className="py-4 px-6">Resale upto 100 clients</td>
            </tr>

            {/* Contact Section */}
            <tr>
              <td className="py-4 px-6 text-left bg-gray-100 md:bg-white shadow-md">Contact Support</td>
              <td className="py-4 px-6 text-gray-500">
                <i className="ri-close-line text-red-500" />
              </td>
              <td className="py-4 px-6">Standard Support</td>
              <td className="py-4 px-6">24/7 Priority Support</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;
