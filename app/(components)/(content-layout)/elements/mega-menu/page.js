"use client"
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React from "react";

const Megamenu = () => {
	return (
		<div>
			<Seo title={"Mega Menu"} />
			<PageHeader currentpage="Mega Menu" activepage="Elements" mainpage="Mega Menu" />

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Mega Menu</h5>
						</div>
						<div className="box-body">
							<header className="relative flex flex-wrap md:justify-start md:flex-nowrap w-full bg-white text-sm dark:bg-bgdark">
								<nav className="w-full mx-auto px-4 md:flex md:items-center md:justify-between" aria-label="Global">
									<div className="flex items-center justify-between">
										<Link href={"/dashboards/sales/"} className="header-logo">
											<img src={"../../assets/img/brand-logos/desktop-logo.png"} alt="logo" className="dark:hidden block" />
											<img src={"../../assets/img/brand-logos/desktop-dark.png"} alt="logo" className="hidden dark:block" />
										</Link>
										<div className="md:hidden">
											<button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-transparent transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" data-hs-collapse="#navbar-collapse-basic" aria-controls="navbar-collapse-basic" aria-label="Toggle navigation">
												<svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
													<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
												</svg>
												<svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
													<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
												</svg>
											</button>
										</div>
									</div>
									<div id="navbar-collapse-basic" className="hidden basis-full grow md:block">
										<div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 ltr:md:pl-5 rtl:md:pr-5">
											<Link className="font-medium text-primary" href="#!" scroll={false} aria-current="page">Active</Link>

											<div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none]">
												<button id="hs-mega-menu-basic-dr3" type="button" className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70 ">
													Dropdown
													<svg className="ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
													</svg>
												</button>

												<div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute top-full md:border before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5">
													<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
														About
													</Link>
													<div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none]">
														<button type="button" className="w-full flex justify-between items-center text-sm text-gray-800 rounded-sm py-2 px-3 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300">
															Sub Menu
															<svg className="md:-rotate-90 ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70 rtl:rotate-90" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
															</svg>
														</button>

														<div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute md:border ltr:before:-right-5 rtl:before:-left-5 before:top-0 before:h-full before:w-5 top-0 ltr:right-full rtl:left-full !mx-[10px]">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																About
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Downloads
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Team Account
															</Link>
														</div>
													</div>

													<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
														Downloads
													</Link>
													<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
														Team Account
													</Link>
												</div>
											</div>

											<div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
												<button type="button" className="flex items-center w-full text-gray-600  hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70">
													Mega Menu
													<svg className="ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
													</svg>
												</button>

												<div className="hs-dropdown-menu transition-[opacity,margin] md:border duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full ltr:left-0 rtl:right-0 min-w-[15rem] bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5 border">
													<div className="md:grid md:grid-cols-3">
														<div className="flex flex-col">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																About
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Services
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Customer Story
															</Link>
														</div>

														<div className="flex flex-col">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Careers
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Careers: Overview
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Careers: Apply
															</Link>
														</div>

														<div className="flex flex-col">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Log In
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Sign Up
															</Link>
														</div>
													</div>
												</div>
											</div>

											<Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-white/70" href="#!" scroll={false} >Link</Link>
										</div>
									</div>
								</nav>
							</header>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Mega Menu With Hover Event</h5>
						</div>
						<div className="box-body">
							<header className="relative flex flex-wrap md:justify-start md:flex-nowrap w-full bg-white text-sm dark:bg-bgdark">
								<nav className="w-full mx-auto px-4 md:flex md:items-center md:justify-between" aria-label="Global">
									<div className="flex items-center justify-between">
										<Link href={"/dashboards/sales/"} className="header-logo">
											<img src={"../../assets/img/brand-logos/desktop-logo.png"} alt="logo" className="dark:hidden block" />
											<img src={"../../assets/img/brand-logos/desktop-dark.png"} alt="logo" className="hidden dark:block" />
										</Link>
										<div className="md:hidden">
											<button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-transparent transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" data-hs-collapse="#navbar-collapse-basic1" aria-controls="navbar-collapse-basic1" aria-label="Toggle navigation">
												<svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
													<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
												</svg>
												<svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
													<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
												</svg>
											</button>
										</div>
									</div>

									<div id="navbar-collapse-basic1" className="hidden basis-full grow md:block">
										<div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 ltr:md:pl-5 rtl:md:pr-5">
											<Link className="font-medium text-primary" href="#!" scroll={false} aria-current="page">Active</Link>

											<div className="hs-dropdown z-10 [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
												<button id="hs-mega-menu-basic-dr3" type="button" className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70 ">
													Dropdown
													<svg className="ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
													</svg>
												</button>

												<div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute top-full md:border before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5">
													<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
														About
													</Link>
													<div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
														<button type="button" className="w-full flex justify-between items-center text-sm text-gray-800 rounded-sm py-2 px-3 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300">
															Sub Menu
															<svg className="md:-rotate-90 ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70 rtl:rotate-90" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
															</svg>
														</button>

														<div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute md:border ltr:before:-right-5 rtl:before:-left-5 before:top-0 before:h-full before:w-5 top-0 ltr:right-full rtl:left-full !mx-[10px]">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																About
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Downloads
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Team Account
															</Link>
														</div>
													</div>

													<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
														Downloads
													</Link>
													<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
														Team Account
													</Link>
												</div>
											</div>

											<div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
												<button type="button" className="flex items-center w-full text-gray-600  hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70">
													Mega Menu
													<svg className="ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
													</svg>
												</button>

												<div className="hs-dropdown-menu relative  z-50 transition-[opacity,margin] md:border duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full ltr:left-0 rtl:right-0 min-w-[15rem] bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5 border">
													<div className="md:grid md:grid-cols-3">
														<div className="flex flex-col">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																About
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Services
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Customer Story
															</Link>
														</div>

														<div className="flex flex-col">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Careers
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Careers: Overview
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Careers: Apply
															</Link>
														</div>

														<div className="flex flex-col">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Log In
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Sign Up
															</Link>
														</div>
													</div>
												</div>
											</div>

											<Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-white/70" href="#!" scroll={false} >Link</Link>
										</div>
									</div>
								</nav>
							</header>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Mega Menu Slide Up Animation</h5>
						</div>
						<div className="box-body">
							<header className="relative flex flex-wrap md:justify-start md:flex-nowrap w-full bg-white text-sm dark:bg-bgdark">
								<nav className="w-full mx-auto px-4 md:flex md:items-center md:justify-between" aria-label="Global">
									<div className="flex items-center justify-between">
										<Link href={"/dashboards/sales/"} className="header-logo">
											<img src={"../../assets/img/brand-logos/desktop-logo.png"} alt="logo" className="dark:hidden block" />
											<img src={"../../assets/img/brand-logos/desktop-dark.png"} alt="logo" className="hidden dark:block" />
										</Link>
										<div className="md:hidden">
											<button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-transparent transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" data-hs-collapse="#navbar-collapse-basic2" aria-controls="navbar-collapse-basic2" aria-label="Toggle navigation">
												<svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
													<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
												</svg>
												<svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
													<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
												</svg>
											</button>
										</div>
									</div>

									<div id="navbar-collapse-basic2" className="hidden basis-full grow md:block">
										<div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 ltr:md:pl-5 rtl:md:pr-5">
											<Link className="font-medium text-primary" href="#!" scroll={false} aria-current="page">Active</Link>

											<div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
												<button id="hs-mega-menu-basic-dr" type="button" className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70 ">
													Dropdown
													<svg className="ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
													</svg>
												</button>

												<div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-3 bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute top-full md:border before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5">
													<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
														About
													</Link>
													<div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
														<button type="button" className="w-full flex justify-between items-center text-sm text-gray-800 rounded-sm py-2 px-3 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300">
															Sub Menu
															<svg className="md:-rotate-90 ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70 rtl:rotate-90" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
															</svg>
														</button>

														<div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-3 bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute md:border ltr:before:-right-5 rtl:before:-left-5 before:top-0 before:h-full before:w-5 top-0 ltr:right-full rtl:left-full !mx-[10px]">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																About
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Downloads
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Team Account
															</Link>
														</div>
													</div>

													<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
														Downloads
													</Link>
													<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
														Team Account
													</Link>
												</div>
											</div>

											<div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
												<button type="button" className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70">
													Mega Menu
													<svg className="ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
													</svg>
												</button>

												<div className="hs-dropdown-menu transition-[opacity,margin] md:border duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 md:mt-3 top-full ltr:left-0 rtl:right-0 min-w-[15rem] bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5 border">
													<div className="md:grid md:grid-cols-3">
														<div className="flex flex-col">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																About
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Services
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Customer Story
															</Link>
														</div>

														<div className="flex flex-col">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Careers
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Careers: Overview
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Careers: Apply
															</Link>
														</div>

														<div className="flex flex-col">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Log In
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Sign Up
															</Link>
														</div>
													</div>
												</div>
											</div>

											<Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-white/70" href="#!" scroll={false} >Link</Link>
										</div>
									</div>
								</nav>
							</header>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Mega Menu With Auto Close Behavior</h5>
						</div>
						<div className="box-body">
							<header
								className="relative flex flex-wrap md:justify-start md:flex-nowrap w-full bg-white text-sm dark:bg-bgdark"
							>
								<nav
									className="w-full mx-auto px-4 md:flex md:items-center md:justify-between"
									aria-label="Global"
								>
									<div className="flex items-center justify-between">
										<Link href={"/dashboards/sales/"} className="header-logo">
											<img src={"../../assets/img/brand-logos/desktop-logo.png"} alt="logo" className="dark:hidden block" />
											<img src={"../../assets/img/brand-logos/desktop-dark.png"} alt="logo" className="hidden dark:block" />
										</Link>
										<div className="md:hidden">
											<button
												type="button"
												className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-transparent transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
												data-hs-collapse="#navbar-collapse-slide-up"
												aria-controls="navbar-collapse-slide-up"
												aria-label="Toggle navigation"
											>
												<svg
													className="hs-collapse-open:hidden w-4 h-4"
													width="16"
													height="16"
													fill="currentColor"
													viewBox="0 0 16 16"
												>
													<path
														fillRule="evenodd"
														d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
													/>
												</svg>
												<svg
													className="hs-collapse-open:block hidden w-4 h-4"
													width="16"
													height="16"
													fill="currentColor"
													viewBox="0 0 16 16"
												>
													<path
														d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
													/>
												</svg>
											</button>
										</div>
									</div>
									<div id="navbar-collapse-slide-up" className="hidden basis-full grow md:block">
										<div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 ltr:md:pl-5 rtl:md:pr-5">
											<Link className="font-medium text-primary" href="#!" scroll={false} aria-current="page">Active</Link>

											<div className="hs-dropdown">
												<button id="hs-mega-menu-basic-dr" type="button" className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70 ">
													Dropdown
													<svg className="ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
													</svg>
												</button>

												<div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-3 bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute top-full md:border before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5">
													<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
														About
													</Link>
													<div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
														<button type="button" className="w-full flex justify-between items-center text-sm text-gray-800 rounded-sm py-2 px-3 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300">
															Sub Menu
															<svg className="md:-rotate-90 ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70 rtl:rotate-90" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
															</svg>
														</button>

														<div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-3 bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute md:border ltr:before:-right-5 rtl:before:-left-5 before:top-0 before:h-full before:w-5 top-0 ltr:right-full rtl:left-full !mx-[10px]">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																About
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Downloads
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Team Account
															</Link>
														</div>
													</div>

													<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
														Downloads
													</Link>
													<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
														Team Account
													</Link>
												</div>
											</div>

											<div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
												<button type="button" className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70">
													Mega Menu
													<svg className="ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
													</svg>
												</button>

												<div className="hs-dropdown-menu transition-[opacity,margin] md:border duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 md:mt-3 top-full ltr:left-0 rtl:right-0 min-w-[15rem] bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5 border">
													<div className="md:grid md:grid-cols-3">
														<div className="flex flex-col">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																About
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Services
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Customer Story
															</Link>
														</div>

														<div className="flex flex-col">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Careers
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Careers: Overview
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Careers: Apply
															</Link>
														</div>

														<div className="flex flex-col">
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Log In
															</Link>
															<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
																Sign Up
															</Link>
														</div>
													</div>
												</div>
											</div>

											<Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-white/70" href="#!" scroll={false} >Link</Link>
										</div>
									</div>
								</nav>
							</header>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Mega Menu With Columns</h5>
						</div>
						<div className="box-body">
							<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-transparent text-sm py-4 sm:py-0">
								<nav className="w-full mx-auto px-4" aria-label="Global">
									<div className="relative sm:flex sm:items-center">
										<div className="flex items-center justify-between">
											<a href="index.html" className="header-logo">
												<img src="../../assets/img/brand-logos/desktop-logo.png" alt="logo" className="dark:hidden block" />
												<img src="../../assets/img/brand-logos/desktop-dark.png" alt="logo" className="hidden dark:block" />
											</a>
											<div className="sm:hidden">
												<button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" data-hs-collapse="#navbar-collapse-columns-1" aria-controls="navbar-collapse-columns-1" aria-label="Toggle navigation">
													<svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
													<svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
												</button>
											</div>
										</div>

										<div id="navbar-collapse-columns-1" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block">
											<div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
												<div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
													<button type="button" className="sm:py-3 flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary">
														1 Col
														<svg className="ms-1 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
													</button>

													<div className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-full sm:w-48 bg-white sm:shadow-md rounded-md py-2 sm:px-2 dark:bg-bgdark sm:dark:border dark:border-white/10 dark:divide-white/10">
														<div className="flex flex-col">
															<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																About
															</a>
															<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																Services
															</a>
															<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																Customer Story
															</a>
														</div>
													</div>
												</div>

												<div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
													<button type="button" className="sm:py-3 flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary">
														2 Cols
														<svg className="ms-1 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
													</button>

													<div className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-full end-0 sm:w-96 bg-white sm:shadow-md rounded-md py-2 sm:px-2 dark:bg-bgdark sm:dark:border dark:border-white/10 dark:divide-white/10">
														<div className="sm:grid sm:grid-cols-2">
															<div className="flex flex-col">
																<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																	About
																</a>
																<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																	Services
																</a>
																<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																	Customer Story
																</a>
															</div>

															<div className="flex flex-col">
																<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																	Careers
																</a>
																<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																	Careers: Overview
																</a>
																<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																	Careers: Apply
																</a>
															</div>
														</div>
													</div>
												</div>

												<div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
													<button type="button" className="sm:py-3 flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary">
														3 Cols
														<svg className="ms-1 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
													</button>

													<div className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-full end-0 sm:w-[30rem] bg-white sm:shadow-md rounded-md py-2 sm:px-2 dark:bg-bgdark sm:dark:border dark:border-white/10 dark:divide-white/10">
														<div className="sm:grid sm:grid-cols-3">
															<div className="flex flex-col">
																<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																	About
																</a>
																<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																	Services
																</a>
																<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																	Customer Story
																</a>
															</div>

															<div className="flex flex-col">
																<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																	Careers
																</a>
																<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																	Careers: Overview
																</a>
																<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																	Careers: Apply
																</a>
															</div>

															<div className="flex flex-col">
																<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																	Log In
																</a>
																<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-white/70 dark:hover:bg-bodybg dark:hover:text-white dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-primary" href="#!">
																	Sign Up
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</nav>
							</header>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Megamenu;
