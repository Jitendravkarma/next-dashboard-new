"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/shared/userContext/userContext";

export default function Header() {
  const { isAuthenticated, handleSignOut } = useUserContext()
  const { pathname, push } = useRouter()
  const menus = [
    { title: "home", url: "/" },
    { title: "services", url: "/services" },
    { title: "pricing", url: "/pricing" },
    { title: "Docs", url: "/docs" },
    { title: "about", url: "/about" },
    { title: "signin", url: "/signin" },
    { title: isAuthenticated ? "Download Now" : "Start a Free Trial", url: isAuthenticated ? "/downloads" : "/signup" }
  ];

  const submenu = [
    // {title : "bing search scraper", url: "/services/bing-search-scraper"},
    {title : "google search scraper", url: "/services/google-search-scraper"},
    {title : "google map scraper", url: "/services/google-map-scraper"},
    {title : "website data scraper", url: "/services/website-data-scraper"},
    {title : "website data center", url: "/services/website-data-center"},
    {title : "business directory scraper", url: "/services/business-directory-scraper"},
    {title : "document data scraper", url: "/services/document-data-scraper"},
    {title : "image data scraper", url: "/services/image-data-scraper"},
    {title : "whois domain database", url: "/services/whois-database"}
  ]

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
            <Link href="/">
              <Image
                src="/assets/img/brand-logos/desktop-logo.png"
                alt="Site logo"
                width={500}
                height={500}
                style={{ width: "150px", height: "auto" }} // Example
              />
            </Link>
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
                ) : title === "services" ? (
                  <li key={url} className="relative z-50">
                    {/* Lead Generation menu with dropdown */}
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center space-x-1 nav-link hover:text-blue-500"
                    >
                      <span>Services</span>
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
                            submenu.map(({title, url}, ind)=>(
                              <li key={ind}>
                                <Link
                                  href={url}
                                  className="header-submenu-item rounded-sm hover:bg-gray-100 p-2 block"
                                >
                                  {title}
                                </Link>
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
            ) : title === "services" ? (
              <li key={url} className="border-bottom relative">
                <button
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  className="font-normal flex items-center space-x-1 text-black cursor-pointer capitalize"
                >
                  <span>Lead Generation</span>
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
                        submenu.map(({title, url}, ind)=>(
                          <li key={ind}>
                            <Link
                              href={url}
                              className="capitalize block px-4 py-2 text-black hover:bg-gray-100 text-sm font-light"
                            >
                              {title}
                            </Link>
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
