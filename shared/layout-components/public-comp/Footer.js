"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [showGoTop, setShowGoTop] = useState(false);

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
      title: "Lead Generation",
      list: [
        { title: "Google Search Scraper", url: "/services/google-search-scraper" },
        { title: "Google Map Scraper", url: "/services/google-map-scraper" },
        { title: "Website Data Scraper", url: "/services/website-data-scraper" },
        { title: "Website Data Center", url: "/services/website-data-center" },
        { title: "Document Data Scraper", url: "/services/document-data-scraper" },
        { title: "Image Data Scraper", url: "/services/image-data-scraper" },
        { title: "Business Directory Scraper", url: "/services/business-directory-scraper" },
        { title: "Whois Data Download", url: "/services/whois-database" }
      ],
    },
    {
      title: "Quick Links",
      list: [
        { title: "Sign In", url: "/signin" },
        { title: "Sign Up", url: "/signup" },
        { title: "Contact Us", url: "/contact" },
        { title: "About Us", url: "/about" },
        { title: "Terms & Conditions", url: "/legal-terms" },
        { title: "Privacy Policy", url: "/legal-policy" },
        { title: "FAQ", url: "/faq" }
      ],
    },
    {
      title: "follow us",
      list: [
        { title: "facebook", url: "https://www.facebook.com/designcollection.in" },
        { title: "twitter", url: "https://x.com/mukesh019" },
        { title: "youtube", url: "https://www.youtube.com/@designcollection6499" },
        { title: "linkedin", url: "https://www.linkedin.com/company/designcollection/" }
      ],
    },
  ];

  return (
    <>
      {/* Footer Section */}
      <footer className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-0 xl:gap-0 xl:space-x-10">
            <div className="col-span-12 xl:col-span-5 flex flex-col gap-5">
              <div className="mr-auto">
                <Link href="/">
                  <Image
                    src="/assets/img/brand-logos/desktop-logo.png"
                    alt="Site logo"
                    width={150}
                    height={150}
                  />
                </Link>
              </div>
              <p>
                Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to today.
              </p>
              <p>
              © 2016. Design Collection Private Limited owns all rights. Creator of webcrawlerspider.com
              </p>
            </div>

            <div className="col-span-12 xl:col-span-7 grid grid-cols-12 gap-0 md:gap-2">
              {
                footerLinks.map(({ title, list }, ind) => (
                  title === "follow us" ? (
                    <div key={ind} className="col-span-12 md:col-span-4 my-5 xl:my-0">
                      <h4 className="capitalize text-base font-normal text-black mb-4">
                        {title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {
                          list.map(({ title, url }, idx) => (
                            <div key={idx}>
                              <Link
                                href={url}
                                target="_blank"
                                aria-label={title}
                                title={title}
                                className={`bg-gray-200 rounded-sm p-2 text-gray-600 ${title === "facebook" ? "hover:bg-blue-600" : title === "twitter" ? "hover:bg-gray-800" : title === "youtube" ? "hover:bg-red-600" : "hover:bg-blue-700"} hover:text-white`}
                              >
                                <i className={`${title === "facebook" ? "ri-facebook-line" : title === "twitter" ? "ri-twitter-x-line" : title === "youtube" ? "ri-youtube-line" : "ri-linkedin-line"}`}></i>
                              </Link>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  ) : (
                    <div key={ind} className="col-span-12 md:col-span-4 my-5 xl:my-0">
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

          </div>
        </div>
      </footer>

      {/* Floating Contact and WhatsApp Buttons */}
      <Link
        href="tel:+917987887047"
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
        href="https://wa.me/917987887047"
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
