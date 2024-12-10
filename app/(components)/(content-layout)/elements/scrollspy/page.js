"use client"
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React from "react";

const Scrollspy = () => {
    return (
        <div>
            <Seo title={"Scrollspy"} />
            <PageHeader currentpage="Scrollspy" activepage="Elements" mainpage="Scrollspy" />
            {/* <!-- Start::row-1 --> */}
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 xxl:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Basic Scrollspy</h5>
                        </div>
                        <div id="scrollspy-scrollable-parent-1" className="max-h-[340px] overflow-y-auto">
                            <div className="box-body">
                                <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm py-4 dark:bg-bgdark">
                                    <nav className="w-full mx-auto  sm:flex sm:items-center sm:justify-between" aria-label="Global">
                                        <div className="flex items-center justify-between">
                                            <a href="/dashboards/sales" className="header-logo">
                                                <img src="../../assets/img/brand-logos/desktop-logo.png" alt="logo" className="dark:hidden block" />
                                                <img src="../../assets/img/brand-logos/desktop-dark.png" alt="logo" className="hidden dark:block" />
                                            </a>
                                            <div className="sm:hidden">
                                                <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bodybg dark:hover:bg-slate-800 dark:border-white/10 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-basic" aria-controls="navbar-collapse-basic" aria-label="Toggle navigation">
                                                    <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                                                    <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div id="navbar-collapse-basic" className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                                            <div data-hs-scrollspy="#scrollspy-1" data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-1" className="flex gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 [--scrollspy-offset:220] md:[--scrollspy-offset:70]">
                                                <a className="text-sm text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-primary dark:text-white/70 dark:hover:text-white dark:focus:text-primary hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary active" href="#first">First</a>
                                                <a className="text-sm text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-primary dark:text-white/70 dark:hover:text-white dark:focus:text-primary hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary" href="#second">Second</a>
                                                <div data-hs-scrollspy-group className="hs-dropdown [--adaptive:none] [--placement:bottom-right]">
                                                    <button type="button" id="hs-mega-menu-basic-dr" className="group hs-scrollspy-active:text-primary mb-3 sm:mb-0 inline-flex justify-center items-center gap-x-1 text-sm text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-primary dark:text-white/70 dark:hover:text-white dark:focus:text-primary dark:hs-scrollspy-active:text-primary">
                                                        Dropdown
                                                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                    </button>
                                                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-bodybg sm:dark:border dark:border-white/10 dark:divide-white/10 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden">
                                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-primary dark:text-white/70 dark:hover:text-white dark:focus:text-primary hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary" href="#third">
                                                            Third
                                                        </a>
                                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-primary dark:text-white/70 dark:hover:text-white dark:focus:text-primary hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary" href="#fourth">
                                                            Fourth
                                                        </a>
                                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-primary dark:text-white/70 dark:hover:text-white dark:focus:text-primary hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary" href="#fifth">
                                                            Fifth
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </header>
                                <div id="scrollspy-1" className="mt-3 space-y-4">
                                    <div id="first">
                                        <h3 className="text-lg font-semibold dark:text-white">First</h3>
                                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                                    </div>
                                    <div id="second">
                                        <h3 className="text-lg font-semibold dark:text-white">Second</h3>
                                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                                    </div>
                                    <div id="third">
                                        <h3 className="text-lg font-semibold dark:text-white">Third</h3>
                                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                                    </div>
                                    <div id="fourth">
                                        <h3 className="text-lg font-semibold dark:text-white">Fourth</h3>
                                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                                    </div>
                                    <div id="fifth">
                                        <h3 className="text-lg font-semibold dark:text-white">Fifth</h3>
                                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 xxl:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Nested Scrollspy</h5>
                        </div>
                        <div id="scrollspy-scrollable-parent-2" className="max-h-[400px] overflow-y-auto">
                            <div className="box-body">
                                <div className="grid grid-cols-5">
                                    <div className="col-span-12 md:col-span-1">
                                        <h2 className="text-xl font-medium dark:text-white">Navbar</h2>
                                        <ul className="sticky top-0" data-hs-scrollspy="#scrollspy-2"
                                            data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-2">
                                            <li data-hs-scrollspy-group="">
                                                <a href="#item-1"
                                                    className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-gray-800 dark:text-white dark:hover:text-white/70 hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary">Item
                                                    1</a>
                                                <ul>
                                                    <li className="ms-4">
                                                        <a href="#item-1-1"
                                                            className="group flex items-start gap-x-2 py-0.5 text-sm text-gray-700 leading-6 hover:text-gray-800 dark:text-white/70 dark:hover:text-gray-300 hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary">
                                                            <svg className="w-2 h-6 text-gray-400 overflow-visible group-hover:text-gray-600  dark:text-white dark:group-hover:text-white/70 rtl:rotate-180"
                                                                width="16" height="16" viewBox="0 0 16 16"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14"
                                                                    stroke="currentColor" strokeWidth="2"
                                                                    strokeLinecap="round"></path>
                                                            </svg>
                                                            Item 1-1
                                                        </a>
                                                    </li>
                                                    <li className="ms-4">
                                                        <a href="#item-1-2"
                                                            className="group flex items-start gap-x-2 py-0.5 text-sm text-gray-700 leading-6 hover:text-gray-800 dark:text-white/70 dark:hover:text-gray-300 hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary">
                                                            <svg className="w-2 h-6 text-gray-400 overflow-visible group-hover:text-gray-600  dark:text-white dark:group-hover:text-white/70 rtl:rotate-180"
                                                                width="16" height="16" viewBox="0 0 16 16"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14"
                                                                    stroke="currentColor" strokeWidth="2"
                                                                    strokeLinecap="round"></path>
                                                            </svg>
                                                            Item 1-2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#item-2"
                                                    className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-gray-800 dark:text-white dark:hover:text-white/70 hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary">Item
                                                    2</a>
                                            </li>
                                            <li data-hs-scrollspy-group="">
                                                <a href="#item-3"
                                                    className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-gray-800 dark:text-white dark:hover:text-white/70 hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary">Item
                                                    3</a>
                                                <ul>
                                                    <li className="ms-4">
                                                        <a href="#item-3-1"
                                                            className="group flex items-start gap-x-2 py-0.5 text-sm text-gray-700 leading-6 hover:text-gray-800 dark:text-white/70 dark:hover:text-gray-300 hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary">
                                                            <svg className="w-2 h-6 text-gray-400 overflow-visible group-hover:text-gray-600  dark:text-white dark:group-hover:text-white/70 rtl:rotate-180"
                                                                width="16" height="16" viewBox="0 0 16 16"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14"
                                                                    stroke="currentColor" strokeWidth="2"
                                                                    strokeLinecap="round"></path>
                                                            </svg>
                                                            Item 3-1
                                                        </a>
                                                    </li>
                                                    <li className="ms-4">
                                                        <a href="#item-3-2"
                                                            className="group flex items-start gap-x-2 py-0.5 text-sm text-gray-700 leading-6 hover:text-gray-800 dark:text-white/70 dark:hover:text-gray-300 hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary">
                                                            <svg className="w-2 h-6 text-gray-400 overflow-visible group-hover:text-gray-600  dark:text-white dark:group-hover:text-white/70 rtl:rotate-180"
                                                                width="16" height="16" viewBox="0 0 16 16"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14"
                                                                    stroke="currentColor" strokeWidth="2"
                                                                    strokeLinecap="round"></path>
                                                            </svg>
                                                            Item 3-2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-span-12 md:col-span-4">
                                        <div id="scrollspy-2" className="space-y-4">
                                            <div id="item-1">
                                                <h3 className="text-lg font-semibold dark:text-white">Item 1</h3>
                                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">
                                                    This is some placeholder content for the scrollspy page. Note
                                                    that as you scroll down the page, the appropriate navigation
                                                    link is highlighted. It's repeated throughout the component
                                                    example. We keep adding some more example copy here to emphasize
                                                    the scrolling and highlighting.</p>
                                            </div>

                                            <div id="item-1-1">
                                                <h3 className="text-lg font-semibold dark:text-white">Item 1-1</h3>
                                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">
                                                    This is some placeholder content for the scrollspy page. Note
                                                    that as you scroll down the page, the appropriate navigation
                                                    link is highlighted. It's repeated throughout the component
                                                    example. We keep adding some more example copy here to emphasize
                                                    the scrolling and highlighting.</p>
                                            </div>

                                            <div id="item-1-2">
                                                <h3 className="text-lg font-semibold dark:text-white">Item 1-2</h3>
                                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">
                                                    This is some placeholder content for the scrollspy page. Note
                                                    that as you scroll down the page, the appropriate navigation
                                                    link is highlighted. It's repeated throughout the component
                                                    example. We keep adding some more example copy here to emphasize
                                                    the scrolling and highlighting.</p>
                                            </div>

                                            <div id="item-2">
                                                <h3 className="text-lg font-semibold dark:text-white">Item 2</h3>
                                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">
                                                    This is some placeholder content for the scrollspy page. Note
                                                    that as you scroll down the page, the appropriate navigation
                                                    link is highlighted. It's repeated throughout the component
                                                    example. We keep adding some more example copy here to emphasize
                                                    the scrolling and highlighting.</p>
                                            </div>

                                            <div id="item-3">
                                                <h3 className="text-lg font-semibold dark:text-white">Item 3</h3>
                                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">
                                                    This is some placeholder content for the scrollspy page. Note
                                                    that as you scroll down the page, the appropriate navigation
                                                    link is highlighted. It's repeated throughout the component
                                                    example. We keep adding some more example copy here to emphasize
                                                    the scrolling and highlighting.</p>
                                            </div>

                                            <div id="item-3-1">
                                                <h3 className="text-lg font-semibold dark:text-white">Item 3-1</h3>
                                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">
                                                    This is some placeholder content for the scrollspy page. Note
                                                    that as you scroll down the page, the appropriate navigation
                                                    link is highlighted. It's repeated throughout the component
                                                    example. We keep adding some more example copy here to emphasize
                                                    the scrolling and highlighting.</p>
                                            </div>

                                            <div id="item-3-2">
                                                <h3 className="text-lg font-semibold dark:text-white">Item 3-2</h3>
                                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">
                                                    This is some placeholder content for the scrollspy page. Note
                                                    that as you scroll down the page, the appropriate navigation
                                                    link is highlighted. It's repeated throughout the component
                                                    example. We keep adding some more example copy here to emphasize
                                                    the scrolling and highlighting.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End::row-1 --> */}

        </div>
    );
};

export default Scrollspy;