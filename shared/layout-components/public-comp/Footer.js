"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUserContext } from "@/shared/userContext/userContext";
import { basePath } from "@/next.config";
import EnquiryFormModal from "./Enquiry";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathName = usePathname();
  const { logo, resellerContactInfo, companyDetails, dynamicSocialLinks } = useUserContext()
  const [showGoTop, setShowGoTop] = useState(false);
  const [openEnquiry, setOpenEnquiry] = useState(false);

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setShowGoTop(position > 50); // Show button if scrolled down more than 50px
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  // Scroll Listener
  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  const footerLinks = [
    {
      title: "Top Services",
      list: [
        { title: "Google Search Scraper", url: "/services/google-search-scraper" },
        { title: "Google Map Scraper", url: "/services/google-map-scraper" },
        { title: "Website Data Scraper", url: "/services/website-data-scraper" },
        { title: "Live Website Data", url: "/services/live-website-data" },
        { title: "Document Data Scraper", url: "/services/document-data-scraper" },
        { title: "Image Data Scraper", url: "/services/image-data-scraper" },
        { title: "Business Directory Scraper", url: "/services/business-directory-scraper" },
        { title: "Whois Domain Lookup", url: "/services/whois-database" }
      ],
      subItem: false,
    },
    {
      title: "Quick Links",
      list: [
        { title: "Sign In", url: "/signin" },
        { title: "Create Account", url: "/signup" },
        { title: "About Us", url: "/about" },
        { title: "User Manual", url: "/user-manual" },
        { title: "Terms & Conditions", url: "/legal-terms" },
        { title: "Privacy Policy", url: "/legal-policy" },
        { title: "FAQ", url: "/faq" },
        { title: "Contact Us", url: "/contact" },
      ],
      subItem: false,
    },
    {
      title: "follow us",
      list: [
        { title: "facebook", url: dynamicSocialLinks.facebook },
        { title: "twitter", url: dynamicSocialLinks.twitter },
        { title: "youtube", url: dynamicSocialLinks.youtube },
        { title: "linkedin", url: dynamicSocialLinks.linkedin }
      ],
      subItem: {
        title: "watch tutorials",
        list: [
          { title: "youtube", url: dynamicSocialLinks.youtube },
        ],
      },
    },
  ];

  const closePop = ()=>{
    setOpenEnquiry(false)
  }

  useEffect(()=>{
    setOpenEnquiry(true);
  }, [])

  return (
    <>
      {/* Footer Section */}
      {
        (openEnquiry && pathName !== '/downloads/') &&
        <EnquiryFormModal closePop={closePop}/>
      }
      <footer className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 xl:col-span-5 flex flex-col gap-5">
              <div className="mr-auto">
                <Link className="responsive-logo-dark" href={"/"} aria-label="Brand">
                  <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}${logo.dark}`} alt="logo" className="w-36 mx-auto" />
                </Link>
              </div>
              <p>
                Scrape Genius provides advanced web scraping solutions designed to simplify and automate your data extraction needs. Get actionable insights, streamline your workflow, and harness the full potential of online data efficiently and effortlessly.
              </p>
            </div>

            <div className="col-span-12 xl:col-span-7 grid grid-cols-12 gap-0 md:gap-5">
              {
                footerLinks.map(({ title, list, subItem }, ind) => (
                  (title === "follow us") ? (
                    <div key={ind} className="col-span-12 sm:col-span-6 md:col-span-3 my-5 xl:my-0 flex flex-col gap-7">
                      <div className="">
                        <h4 className="capitalize text-base font-normal text-black mb-4">
                          {title}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {
                            list.map(({ title, url }, idx) => (
                              <div key={idx}>
                                <Link
                                  href={url ? url : "/reseller/profile"}
                                  target="_blank"
                                  aria-label={title}
                                  title={url ? `Visit ${title} profile` : `${title} profile not found`}
                                  className={`bg-gray-200 rounded-sm p-2 text-gray-600 ${title === "facebook" ? "hover:bg-blue-600" : title === "twitter" ? "hover:bg-gray-800" : title === "youtube" ? "hover:bg-red-600" : "hover:bg-blue-700"} hover:text-white`}
                                >
                                  <i className={`${title === "facebook" ? "ri-facebook-line" : title === "twitter" ? "ri-twitter-x-line" : title === "youtube" ? "ri-youtube-line" : "ri-linkedin-line"}`}></i>
                                </Link>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                      {
                        subItem &&
                        <div className="">
                          <h4 className="capitalize text-base font-normal text-black mb-4">
                            {subItem.title}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {
                              subItem.list.map(({ title, url }, idx) => (
                                <div key={idx}>
                                  <Link
                                    href={url ? url : "/reseller/profile"}
                                    target="_blank"
                                    aria-label={title}
                                    title={url ? `Visit ${title} profile` : `${title} profile not found`}
                                    className={`bg-gray-200 rounded-sm p-2 text-gray-600 ${title === "facebook" ? "hover:bg-blue-600" : title === "twitter" ? "hover:bg-gray-800" : title === "youtube" ? "hover:bg-red-600" : "hover:bg-blue-700"} hover:text-white`}
                                  >
                                    <i className={`${title === "facebook" ? "ri-facebook-line" : title === "twitter" ? "ri-twitter-x-line" : title === "youtube" ? "ri-youtube-line" : "ri-linkedin-line"}`}></i>
                                  </Link>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      }
                    </div>
                  ) : (
                    <div key={ind} className="col-span-12 sm:col-span-6 md:col-span-3 my-5 xl:my-0">
                      <h4 className="capitalize text-base font-normal text-black mb-4">
                        {title}
                      </h4>
                      <ul>
                        {
                          list.map(({ title, url }, idx) => (
                            <li key={idx}>
                              <Link href={url} className="block py-1 hover:text-blue-500">{title}</Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )
                ))
              }
            </div>

            <div className="col-span-12 text-center border-t pt-3">
              <p>
              © {new Date().getFullYear()}. <Link href={"https://neuralnetics.io/"} target="_blank">Neuralnetics Technologies Pvt. Ltd.</Link> - All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact and WhatsApp Buttons */}
      <Link
        href={`tel:${resellerContactInfo.phone}`}
        className="fixed z-10 bottom-[4.5rem] xl:bottom-20 left-4 border-4 border-white rounded-md shadow-md flex items-center justify-center overflow-hidden w-12 h-12 hover:scale-110 bg-white transition-all duration-150"
        target="_blank"
        title="Contact Now"
      >
        <Image
          src="/assets/img/call-icons.png"
          alt="Contact Now"
          className="w-8 h-8"
          width={500}
          height={500}
        />
      </Link>
      <Link
        href={`https://wa.me/${resellerContactInfo.phone.replace(/[\s()\-\+]/g, '')}`}
        className="fixed z-10 bottom-4 xl:bottom-6 left-4 border-4 border-white rounded-md shadow-md flex items-center justify-center overflow-hidden w-12 h-12 hover:scale-110 bg-white transition-all duration-150"
        target="_blank"
        title="WhatsApp Now"
      >
        <Image
          src="/assets/img/whatsapp-icons.png"
          alt="WhatsApp Now"
          className="w-8 h-8"
          width={500}
          height={500}
        />
      </Link>

      <button
          className="fixed z-10 bottom-[4.5rem] xl:bottom-20 right-4 border-4 border-blue-500 rounded-md shadow-md flex items-center justify-center overflow-hidden w-12 h-12 hover:bg-blue-500 transition-all duration-150" title="Enquiry Now"
          onClick={()=>setOpenEnquiry(true)}
      >
        <Image src={"https://cdn-icons-png.flaticon.com/128/3719/3719420.png"} alt="Enquiry Now" className="w-8 h-8" width={500} height={500}/>
      </button>

      {/* Scroll to Top Button */}
      {showGoTop && (
        <div
          className="fixed z-10 bottom-4 right-4 bg-blue-500 text-white rounded-md p-2 cursor-pointer shadow-md hover:bg-blue-600 transition duration-150"
          onClick={scrollUp}
        >
          <i className="ri-arrow-up-circle-fill text-3xl"></i>
        </div>
      )}
    </>
  );
}
