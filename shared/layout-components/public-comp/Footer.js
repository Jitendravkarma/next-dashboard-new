"use client"
import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

const Footer = () => {
  const SomeTopAdvantages = "Easy Ways to Connect with Customers and Grow Your Business";
  const ListItem = useMemo(() => [
    "Reliable email extractor for accurate data",
    "Efficient website data scraper for fast results",
    "Document scraper for versatile data collection",
    "PDF scraper online for easy file access",
    "Image scraping for visual data extraction",
    "Advanced web scraping tools for efficiency",
    "Expert web scraping for comprehensive insights"
  ], []);
  const copyright =
    "© 2016. Design Collection owns all rights. Creator of webcrawlerspider.com";

  // initialize components based on data attribute selectors
  return (
    <>
      <section className="bg-[#05177f] pt-28 pb-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* grid Begin */}
          <div className="grid md:grid-cols-2  sm:gap-2 lg:gap-4 w-screen">
            {/* ... Column 1 Content ... */}

            {/* col-1 Begin */}
            <div>
              <p className="text-xl text-green-400 font-normal mb-5">
                {SomeTopAdvantages}
              </p>
              <ul className="list-none leading-normal text-white text-xss mt-3 font-normal">
                {ListItem.map((advantage, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <FontAwesomeIcon
                      className="mr-2"
                      color="#ffffff"
                      icon={faCheckDouble}
                    />
                    {advantage}
                  </li>
                ))}
              </ul>
              
              <PrimaryButton/>
            </div>
            {/* col-1 End */}
            {/* ... Column 2 Content ... */}
            {/* col-2 Begin */}
            <div>
                <Image 
                  width={500}
                  height={500}
                  src={"/assets/img/footerImage.svg"}
                  className="h-auto max-w-full mx-auto"
                  alt="growbusiness"
                />
            </div>
            {/* col-2 End */}
          </div>
          {/* grid End */}
          {/* Border Begin */}
          <div className="w-screen pt-5">
            <hr className="border-t border-gray-300 opacity-25 my-8"></hr>
            <Image width={500} height={500} src={"/assets/img/logos/logo.png"} className="h-auto w-[200px]" alt="Logo" />
            <hr className="border-t border-gray-300 opacity-25 my-8"></hr>
          </div>
          {/* Border End */}

          {/* grid Begin */}
          <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center sm:gap-2 lg:gap-4 w-screen">
            {/* ... Column 1 Content ... */}

            {/* col-1 Begin */}
            <div>
              <p className="text-white text-xxs">{copyright}</p>
            </div>
            {/* col-1 End */}
            {/* ... Column 2 Content ... */}
            {/* col-2 Begin */}

            <ul className="flex flex-wrap md:items-end md:justify-end">
              <li>
                <Link
                  href="/faq"
                  className="me-4 text-xxs text-white md:me-6 "
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-terms"
                  className="me-4 text-xxs text-white md:me-6 "
                >
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-policy"
                  className="me-4 text-xxs text-white md:me-6"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>

            {/* col-2 End */}
          </div>
          {/* grid End */}
        </div>
      </section>
    </>
  );
};

export default Footer;
