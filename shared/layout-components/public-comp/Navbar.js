"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/shared/userContext/userContext";

export default function Header() {
  const { isAuthenticated, handleSignOut, isLoading, logo } = useUserContext()
  const { pathname, push } = useRouter()
  const menus = [
    { title: "home", url: "/" },
    { title: "tools", url: "/services" },
    { title: "pricing", url: "/pricing" },
    // { title: "Docs", url: "/docs" },
    { title: "about", url: "/about" },
    { title: "signin", url: "/signin" },
    { title: isAuthenticated ? "Download Now" : "Start a Free Trial", url: isAuthenticated ? "/downloads" : "/signup" }
  ];

  const mainMenus = [
    {
      title : "Live Website Scraping", 
      url: "/services/live-website-scraping", 
      subLinks: [], 
      category: false
    },
    {
      title : "Live Website Data", 
      url: "/services/live-website-data", 
      subLinks: [], 
      category: false
    },
    {
      title : "Search Engine Scraper", 
      url: "", 
      subLinks: [
        {
          title: "Bing Search Scraper",
          url: "/services/bing-search-scraper/"
        },
        {
          title: "Google Search Scraper",
          url: "/services/google-search-scraper/"
        },
        {
          title: "Yahoo Search Scraper",
          url: "/services/yahoo-search-scraper/"
        },
        {
          title: "DuckDuckGo Search Scraper",
          url: "/services/duckduckgo-search-scraper/"
        },
        {
          title: "Google Map Scraper",
          url: "/services/google-map-scraper/"
        }
      ], 
      category: true
    },
    {
      title : "Social Media Scraper", 
      url: "", 
      subLinks: [
        {
          title: "facebook Scraper",
          url: "/services/facebook-scraper/"
        },
        {
          title: "youtube scraper",
          url: "/services/youtube-scraper"
        }
      ], 
      category: true
    },
    {
      title : "Web Scrapers", 
      url: "", 
      subLinks: [
        {
          title: "Website Data Scraper",
          url: "/services/website-data-scraper/"
        },
        {
          title: "Business Directory Scraper",
          url: "/services/business-directory-scraper/"
        }
      ], 
      category: true
    },
    {
      title : "File data scrapers", 
      url: "/services/document-data-scraper", 
      subLinks: [
        {
          title: "Document data scraper",
          url: "/services/document-data-scraper/"
        },
        {
          title: "image data scraper",
          url: "/services/image-data-scraper/"
        }
      ], 
      category: true
    },
    {
      title : "whois domain database", 
      url: "/services/whois-database", 
      subLinks: [], 
      category: false
    }
  ]

  const [ subMenus, setSubMenus ] = useState({title: "", menus: []})

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEcommerceDropdownOpen, setIsEcommerceDropdownOpen] = useState(false);
  const [isSocialMediaDropdownOpen, setIsSocialMediaDropdownOpen] =
    useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false); // Close dropdown when menu is toggled
    setIsEcommerceDropdownOpen(false); // Close dropdown when menu is toggled
    setIsSocialMediaDropdownOpen(false); // Close dropdown when menu is toggled
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const showSubMenu = (title, menus)=>{
    setSubMenus({title, menus})
  }

  function handleLogout() {
    handleSignOut();
		window.location.reload()
	}

  // Close mobile menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false); // Close dropdown when clicking outside
        setIsEcommerceDropdownOpen(false);
        setIsSocialMediaDropdownOpen(false);
        setSubMenus({title: "", menus: []})
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={menuRef}
      className="bg-white text-black shadow-md sticky top-0 z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="text-xl font-semibold">
            {
							isLoading ? 
							<div className="pl-0 p-1 h-10 w-36 mx-auto">
								<div className="rounded bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse h-full w-full"/>
							</div>
							:
              <Link className="responsive-logo-dark" href={"/dashboard/home"} aria-label="Brand">
                <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}${logo.dark}`} alt="logo" className="w-36 mx-auto" />
              </Link>
            }
          </div>

          {/* Desktop Navigation */}
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6 capitalize">
              {menus.map(({ title, url }) =>
                (title === "Start a Free Trial" || title === "Download Now") ? (
                  <li key={url}>
                    <Link
                      href={url}
                      className="bg-blue-500 hover:bg-blue-600 text-sm text-white font-medium py-3 px-4 rounded-md"
                    >
                      {title}
                    </Link>
                  </li>
                ) : title === "tools" ? (
                  <li key={url} className="relative z-50">
                    {/* Lead Generation menu with dropdown */}
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center space-x-1 nav-link hover:text-blue-500"
                    >
                      <span>Tools & Services</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? "transform rotate-180" : ""
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div className="rounded-md absolute left-0 mt-5 border border-gray-300 bg-white shadow-md w-60 p-2 z-50 header-submenu">
                        <ul>
                          {
                            mainMenus.map(({title, url, category, subLinks}, ind)=>(
                              <li key={ind}>
                                {
                                  category ? 
                                  <button onClick={()=>showSubMenu(title, subLinks)} className="w-full relative header-submenu-item rounded-sm hover:bg-gray-100 p-2 flex justify-between cursor-pointer">
                                      <span>{title}</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className={`w-4 h-4 transition-transform duration-200 ${
                                          subMenus.title === title ? "transform rotate-0" : "-rotate-90"
                                        }`}
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M19 9l-7 7-7-7"
                                        />
                                      </svg>
                                      {
                                        (subMenus.menus.length > 0 && subMenus.title === title) &&
                                        <div className="rounded-md absolute -right-52 capitalize text-start mt-5 border border-gray-300 bg-white shadow-md w-60 p-2 z-50 header-submenu">
                                          <ul>
                                            {
                                              subMenus.menus.map((link, ind)=>(
                                                <li key={ind}>
                                                  <Link
                                                    href={link.url}
                                                    className="header-submenu-item rounded-sm hover:bg-gray-100 p-2 block"
                                                  >
                                                    {link.title}
                                                  </Link>
                                                </li>
                                              ))
                                            }
                                          </ul>
                                        </div>
                                      }
                                  </button>
                                  :
                                  <Link
                                    href={url}
                                    className="header-submenu-item rounded-sm hover:bg-gray-100 p-2 block"
                                  >
                                    {title}
                                  </Link>
                                }
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={url}>
                  {
                    (isAuthenticated && title === "signin") ? 
                    <button onClick={handleLogout} className={`nav-link text-gray-800 hover:text-blue-500`}>
                      Logout
                    </button>
                    :
                    <Link href={url} className={`nav-link ${pathname === title ? "text-blue-500" : "text-gray-800"} hover:text-blue-500`}>
                      {title}
                    </Link>
                  }
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Mobile Hamburger Icon */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Open menu"
              className="text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white bg-opacity-90 z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        ref={menuRef}
      >
        <div className="flex justify-end p-6 submenu">
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col space-y-5 px-5 text-black">
          {menus.map(({ title, url }) =>
            (title === "Start a Free Trial" || title === "Download Now") ? (
              <li key={url}>
                <Link
                  href={url}
                  className="inline-block bg-blue-500 hover:bg-blue-600 lg:text-sm text-xs text-white font-medium py-3 px-4 rounded-md text-center"
                >
                  {title}
                </Link>
              </li>
            ) : title === "tools" ? (
              <li key={url} className="border-bottom relative">
                <button
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  className="font-normal flex items-center space-x-1 text-black cursor-pointer capitalize"
                >
                  <span>Tools & Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isDropdownOpen ? "transform rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="bg-white shadow-lg rounded-md py-2 transition-all duration-300 w-full">
                    <ul>
                      {
                        mainMenus.map(({title, url, category, subLinks}, ind)=>(
                          <li key={ind}>
                            {
                              category ? 
                              <button onClick={()=>showSubMenu(title, subLinks)} className="w-full relative header-submenu-item rounded-sm hover:bg-gray-100 px-4 py-2 flex justify-between cursor-pointer">
                                  <span>{title}</span>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      className={`w-4 h-4 transition-transform duration-200 ${
                                        subMenus.title === title ? "transform rotate-0" : "-rotate-90"
                                      }`}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                      />
                                    </svg>
                                  {
                                    (subMenus.menus.length > 0 && subMenus.title === title) &&
                                    <div className="rounded-md absolute left-4 top-4 capitalize text-start mt-5 border border-gray-300 bg-white shadow-md w-60 p-2 z-50 header-submenu">
                                      <ul>
                                        {
                                          subMenus.menus.map((link, ind)=>(
                                            <li key={ind}>
                                              <Link
                                                href={link.url}
                                                className="header-submenu-item rounded-sm hover:bg-gray-100 p-2 block"
                                              >
                                                {link.title}
                                              </Link>
                                            </li>
                                          ))
                                        }
                                      </ul>
                                    </div>
                                  }
                              </button>
                              :
                              <Link
                                href={url}
                                className="capitalize block px-4 py-2 text-black hover:bg-gray-100 text-sm font-light"
                              >
                                {title}
                              </Link>
                            }
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                )}
              </li>
            ) : (
              <li className="border-bottom" key={url}>
                {
                  isAuthenticated && title === "signin" ?
                  <button onClick={handleLogout} className="nav-link font-semibold">
                    Logout
                  </button>
                  :
                  <Link href={url} className="nav-link capitalize">
                    {title}
                  </Link>
                }
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
}
