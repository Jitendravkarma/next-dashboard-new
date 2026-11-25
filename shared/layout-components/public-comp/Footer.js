
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

  const {
    logo,
    resellerContactInfo,
    dynamicSocialLinks,
  } = useUserContext();

  const [showGoTop, setShowGoTop] = useState(false);
  const [openEnquiry, setOpenEnquiry] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoTop(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpenEnquiry(true);
  }, []);

  const closePop = () => setOpenEnquiry(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerSections = [
    {
      title: "Popular Tools",
      subtitle: "Explore our solutions",
      icon: "ri-apps-2-line",
      links: [
        { title: "Google Maps Lead Finder", url: "/services/google-map-scraper/" },
        { title: "IndiaMART CRM", url: "/services/indiaMart-CRM/" },
        { title: "JustDial CRM", url: "/services/justdial-CRM/" },
        { title: "IndiaMART Lead Finder", url: "/services/indiamart-scraper/" },
        { title: "JustDial Lead Finder", url: "/services/justdial-scraper/" },
        { title: "Google Search Lead Finder", url: "/services/google-search-scraper/" },
        { title: "Website Contact Finder", url: "/services/website-data-scraper/" },
        { title: "Business Directory Lead Finder", url: "/services/business-directory-scraper/" },
      ],
    },
    {
      title: "Quick Links",
      subtitle: "Everything you need",
      icon: "ri-links-line",
      links: [
        { title: "Sign In", url: "/signin" },
        { title: "Create Account", url: "/signup" },
        { title: "About Us", url: "/about" },
        { title: "User Manual", url: "/user-manual" },
        { title: "FAQ", url: "/faq" },
        { title: "Contact Us", url: "/contact" },
        { title: "Become a Reseller", url: "/reseller" },
        { title: "Single User Plan", url: "/singleuser" },
      ],
    },
    {
      title: "Agreements",
      subtitle: "Legal information",
      icon: "ri-shield-check-line",
      links: [
        { title: "User Agreement", url: "/user-agreement" },
        { title: "Reseller Agreement", url: "/reseller-agreement" },
        { title: "Partner Agreement", url: "/partner-agreement" },
        { title: "Privacy Policy", url: "/legal-policy" },
        { title: "Terms & Conditions", url: "/legal-terms" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: dynamicSocialLinks?.facebook,
      icon: "ri-facebook-fill",
      color: "hover:bg-[#1877F2]",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/designcollection.in/",
      icon: "ri-instagram-line",
      color: "hover:bg-[#E4405F]",
    },
    {
      name: "YouTube",
      url: dynamicSocialLinks?.youtube,
      icon: "ri-youtube-fill",
      color: "hover:bg-[#FF0000]",
    },
    {
      name: "LinkedIn",
      url: dynamicSocialLinks?.linkedin,
      icon: "ri-linkedin-fill",
      color: "hover:bg-[#0A66C2]",
    },
  ];

  const phone = resellerContactInfo?.phone || "";
  const cleanPhone = phone.replace(/[\s()\-\+]/g, "");

  return (
    <>
      {/* Enquiry Modal */}
      {(openEnquiry && pathName !== "/downloads/" && pathName !== "/user-agreement/" && pathName !== "/reseller-agreement/" && pathName !== "/signin/" && pathName !== "/signup/")&& (
        <EnquiryFormModal closePop={closePop} />
      )}

      {/* ================= FOOTER ================= */}
      <footer className="bg-white text-gray-800 border-t border-gray-100">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Footer Main */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-14 lg:py-16">

            {/* BRAND COLUMN */}
            <div className="lg:col-span-4">

              <Link href="/" aria-label="Scrape Genius Home">
                <img
                  src={`${
                    process.env.NODE_ENV === "production"
                      ? basePath
                      : ""
                  }${logo.dark}`}
                  alt="Scrape Genius"
                  className="w-44 object-contain"
                />
              </Link>

              <p className="mt-6 text-sm text-gray-500 leading-7 max-w-sm">
                Scrape Genius is a powerful B2B lead generation
                platform that helps businesses discover verified
                leads from Google Maps, IndiaMART, JustDial and
                websites, while managing every enquiry through
                one smart CRM.
              </p>

              {/* Social Media */}
              <div className="mt-8">

                <h4 className="text-sm font-bold text-gray-900 mb-4">
                  Connect With Us
                </h4>

                <div className="flex gap-3">

                  {socialLinks
                    .filter((item) => item.url)
                    .map((item) => (
                      <Link
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                        title={item.name}
                        className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600 border border-gray-200 text-lg transition-all duration-300 hover:text-white hover:-translate-y-1 hover:border-transparent ${item.color}`}
                      >
                        <i className={item.icon} />
                      </Link>
                    ))}

                </div>
              </div>

            </div>

            {/* NAVIGATION COLUMNS */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">

              {footerSections.map((section) => (
                <div key={section.title}>

                  {/* Section Heading */}
                  <div className="mb-6">

                    <div className="flex items-center gap-2">

                      <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <i className={`${section.icon} text-lg`} />
                      </span>

                      <h3 className="text-base font-bold text-gray-900">
                        {section.title}
                      </h3>

                    </div>

                    <div className="w-10 h-[2px] bg-blue-600 rounded-full mt-4" />

                  </div>

                  {/* Links */}
                  <ul className="space-y-3">

                    {section.links.map((link) => (
                      <li key={link.url}>

                        <Link
                          href={link.url}
                          className="group flex items-center gap-2 text-[13px] text-gray-500 hover:text-blue-600 transition-all duration-200"
                        >

                          <i className="ri-arrow-right-s-line text-blue-500 text-base opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />

                          <span className="group-hover:translate-x-0.5 transition-transform">
                            {link.title}
                          </span>

                        </Link>

                      </li>
                    ))}

                  </ul>

                </div>
              ))}

            </div>

          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-gray-200 py-6">

            <div className="text-center">

              <p className="text-xs text-gray-500 text-center">
                © {new Date().getFullYear()}{" "}

                <Link
                  href="https://neuralnetics.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Neuralnetics Technologies Pvt. Ltd.
                </Link>

                {" "}All Rights Reserved.
              </p>

            </div>

          </div>

        </div>

      </footer>

      {/* ================= FLOATING BUTTONS ================= */}

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
