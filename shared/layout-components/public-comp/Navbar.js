"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ContactNow from "./ContactNow";
import Link from "next/link";
import Image from "next/image";

const SubLinks = ({subLinks})=>{
  return (
    <>
      {
        subLinks.map(({url, title}, ind)=>(
          <li key={ind}><Link href={url} title={title} className={`text-gray-800 font-light capitalize block p-2 border border-transparent hover:border hover:bg-slate-200`} style={{fontSize:'0.795rem'}}>{title}</Link></li>
        ))
      }
    </>
  )
}
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = [
    { to: '/', text: 'Home', current: true },
    { to: '/services', text: 'Services' },
    { to: '/pricing', text: 'Pricing' },
    // { to: '/faq', text: 'FAQ' },
    { to: '/about', text: 'About Us' },
    { to: '/contact', text: 'Contact' },
    { to: '/signin', text: 'Sign In' }
  ];
  
  const subLinks = [
    {url:"/services/google-search-scraper", title:"google search scraper"},
    {url:"/services/google-map-scraper", title:"google map scraper"},
    {url:"/services/website-data-scraper", title:"website data scraper"},
    {url:"/services/document-data-scraper", title:"document data scraper"},
    {url:"/services/image-data-scraper", title:"image data scraper"},
    {url:"/services/business-directory-scraper", title:"business directory scraper"},
    {url:"/services/whois-database", title:"whois data download"},
    // {url:"/services/website-data-center", title:"website data center"}
  ]

  // initialize components based on data attribute selectors
  return (
    <>
      <nav className="border-gray-200 bg-[#05177f] sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href={"/"} title="Home">
            <Image width={500} height={500} src={`/assets/img/logos/logo.png`} className="h-auto w-[200px]" alt="Logo" />
          </Link>
          {/* button toggle Begin */}
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 bg-gray-100 rounded-sm lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* button toggle End */}
          <div
            className={`w-full lg:block lg:w-auto ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-solid-bg"
          >
            <ul className={`flex flex-col font-medium items-center gap-5 mt-4 rounded-md lg:flex-row lg:mt-0`}>
              {links.map((link) => 
               {
                if(link.text.toLowerCase()==="services"){
                  return (
                    <li key={link.to} className="relative service-menu group text-gray-300 hover:text-white">
                      <span
                        href={link.to}
                        className={`p-0 lg:p-3 cursor-pointer text-sm font-bold ${link.text==="Try Now" && "mb-2 lg:mb-0"} flex items-center gap-1`}
                        aria-current={link.current ? 'page' : ''}
                        target={link.target}
                      >
                        {link.text}
                        <FontAwesomeIcon icon={faAngleDown} className="text-white"/>
                      </span>
                      <ul className="hidden group-hover:block bg-white -left-10 lg:left-0 overflow-hidden duration-200 rounded-sm shadow-lg absolute z-10 w-52 services">
                        <SubLinks subLinks={subLinks}/>
                      </ul>
                    </li>
                  )
                }
                else {
                  return (
                    <li key={link.to}>
                      <Link
                        href={link.to}
                        className={`p-3 text-sm ${link.text==="Try Now" && "mb-2 lg:mb-0"} font-bold text-gray-300 hover:text-white hvr-underline-from-center capitalize`}
                        aria-current={link.current ? 'page' : ''}
                        target={link.target}
                      >
                        {link.text}
                      </Link>
                    </li>
                  )
                }
               } 
              )}
              <li>
                <Link
                  href="/signup"
                  className="bg-green-400 rounded-sm px-4 py-2 text-sm text-white mr-0 inline-block mb-2 lg:mt-0 uppercase"
                  style={{letterSpacing:"1px"}}
                >
                  Free Trial
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ContactNow/>
    </>
  );
};

export default Navbar;
