"use client"
import { badgesdata, buttonbadges, induicatorbutton, maxwidthbadge, outlinebadges, outlinebadges1 } from "@/shared/data/components/badgesdata";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React from "react";

const Badges = () => {
	return (
		<div>
			<Seo title={"Badges"} />
			<PageHeader currentpage="Badges" activepage="Components" mainpage="Badges" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Default Badges</h5>
						</div>
						<div className="box-body">
							{badgesdata.map((idx) => (
								<span className={`badge me-1 bg-${idx.color}`} key={Math.random()}>{idx.text}</span>
							))}
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Square Badges</h5>
						</div>
						<div className="box-body">
							{badgesdata.map((idx) => (
								<span className={`badge me-1 rounded-sm bg-${idx.color}`} key={Math.random()}>{idx.text}</span>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Default Light Colored Badges</h5>
						</div>
						<div className="box-body">
							{outlinebadges.map((idx) => (
								<span className={`badge me-1 bg-${idx.color}`} key={Math.random()}>{idx.text}</span>
							))}
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Square Light Colored Badges</h5>
						</div>
						<div className="box-body">
							{outlinebadges.map((idx) => (
								<span className={`badge me-1 rounded-sm bg-${idx.color}`} key={Math.random()}>{idx.text}</span>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Outline Badges</h5>
						</div>
						<div className="box-body">
							{outlinebadges1.map((idx) => (
								<span className={`badge me-1 border ${idx.color}`} key={Math.random()}>{idx.text}</span>
							))}
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Square Outline Badges</h5>
						</div>
						<div className="box-body">
							{outlinebadges1.map((idx) => (
								<span className={`badge me-1 rounded-sm border ${idx.color}`} key={Math.random()}>{idx.text}</span>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Badges with Max-Width</h5>
						</div>
						<div className="box-body">
							{maxwidthbadge.map((idx) => (
								<span key={Math.random()}
									className={`max-w-[10rem] me-1 truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-md text-xs font-medium ${idx.bgcolor} ${idx.color}`}>This
									content is a little bit longer.</span>
							))}
						</div>
					</div>
				</div>
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Badge With Button</h5>
						</div>
						<div className="box-body  xl:space-y-0 space-y-2">
							{buttonbadges.map((idx) => (
								<Link key={Math.random()} className={`relative py-2 px-3 me-2 inline-flex justify-center items-center gap-1 rounded-sm border border-transparent font-semibold ${idx.color1} text-white hover:${idx.color1} focus:outline-none focus:ring-0 focus:${idx.color2} focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10`}
									href="#!" scroll={false} >
									Notifications
									<span className={`badge me-1 py-0.5 px-1.5 ${idx.color} text-white`}>5</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Badges with Remove Buton</h5>
						</div>
						<div className="box-body">
							<span className="badge me-1 bg-primary/10 text-primary">
								Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center  justify-center rounded-full text-primary hover:bg-primary/10 hover:text-primary focus:outline-none focus:text-primary">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge me-1 bg-yellow-100 text-yellow-800">
								Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-yellow-600 hover:bg-yellow-200 hover:text-yellow-500 focus:outline-none focus:bg-yellow-200 focus:text-yellow-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge me-1 bg-red-100 text-red-800">
								Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-200 focus:text-red-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge me-1 bg-green-100 text-green-800">
								Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-green-600 hover:bg-green-200 hover:text-green-500 focus:outline-none focus:bg-green-200 focus:text-green-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge me-1 bg-purple-100 text-purple-800">
								Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-purple-600 hover:bg-purple-200 hover:text-purple-500 focus:outline-none focus:bg-purple-200 focus:text-purple-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge me-1 bg-pink-100 text-pink-800">
								Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-pink-600 hover:bg-pink-200 hover:text-pink-500 focus:outline-none focus:bg-pink-200 focus:text-pink-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge me-1 bg-orange-100 text-orange-800">
								Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-orange-600 hover:bg-orange-200 hover:text-orange-500 focus:outline-none focus:bg-orange-200 focus:text-orange-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge me-1 bg-indigo-100 text-indigo-800">
								Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-indigo-600 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-200 focus:text-indigo-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
							<span className="badge bg-gray-100 text-gray-800">
								Badge
								<button type="button"
									className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
									<span className="sr-only">Remove badge</span>
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
										fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</span>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Badge With Indicator</h5>
						</div>
						<div className="box-body">
							{induicatorbutton.map((idx) => (
								<span className={`badge me-1 ${idx.color} ${idx.color1}`} key={Math.random()}>
									<span className={`w-1.5 h-1.5 inline-block ${idx.color3} rounded-full`}></span>
									Badge
								</span>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Badge With Position</h5>
						</div>
						<div className="box-body grid">
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								href="#!" scroll={false} >
								<i className="ti ti-bell text-xl"></i>
								<span className="absolute top-0 ltr:left-0 rtl:right-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-rose-500 text-white">99+</span>
							</Link>
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								href="#!" scroll={false} >
								<i className="ti ti-bell text-xl"></i>
								<span className="absolute top-0 ltr:right-0 rtl:left-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 bg-rose-500 text-white">99+</span>
							</Link>
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								href="#!" scroll={false} >
								<i className="ti ti-bell text-xl"></i>
								<span className="absolute bottom-0 ltr:left-0 rtl:right-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform translate-y-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-rose-500 text-white">99+</span>
							</Link>
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								href="#!" scroll={false} >
								<i className="ti ti-bell text-xl"></i>
								<span className="absolute bottom-0 ltr:right-0 rtl:left-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform translate-y-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 bg-rose-500 text-white">99+</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Badge With Profile</h5>
						</div>
						<div className="box-body grid">
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								href="#!" scroll={false} >
								<img src={"../../assets/img/users/1.jpg"} alt="profile-img" className="rounded-md" />
								<span
									className="absolute top-0 ltr:left-0 rtl:right-0 inline-flex items-center w-3.5 h-3.5 rounded-full border-2 border-white text-xs font-medium transform -translate-y-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-green-500 text-white">
									<span className="sr-only">Badge value</span>
								</span>
							</Link>
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								href="#!" scroll={false} >
								<img src={"../../assets/img/users/1.jpg"} alt="profile-img" className="rounded-md" />
								<span
									className="absolute top-0 ltr:right-0 rtl:left-0 inline-flex items-center w-3.5 h-3.5 rounded-full border-2 border-white text-xs font-medium transform -translate-y-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 bg-green-500 text-white">
									<span className="sr-only">Badge value</span>
								</span>
							</Link>
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								href="#!" scroll={false} >
								<img src={"../../assets/img/users/1.jpg"} alt="profile-img" className="rounded-md" />
								<span
									className="absolute bottom-0 ltr:left-0 rtl:right-0 inline-flex items-center w-3.5 h-3.5 rounded-full border-2 border-white text-xs font-medium transform translate-y-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-green-500 text-white">
									<span className="sr-only">Badge value</span>
								</span>
							</Link>
							<Link className="mb-4 relative inline-flex flex-shrink-0 justify-center items-center h-[3.375rem] w-[3.375rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								href="#!" scroll={false} >
								<img src={"../../assets/img/users/1.jpg"} alt="profile-img" className="rounded-md" />
								<span
									className="absolute bottom-0 ltr:right-0 rtl:left-0 inline-flex items-center w-3.5 h-3.5 rounded-full border-2 border-white text-xs font-medium transform translate-y-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 bg-green-500 text-white">
									<span className="sr-only">Badge value</span>
								</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Customized Badges</h5>
						</div>
						<div className="box-body space-x-5 rtl:space-x-reverse flex jusftify-center items-center">
							<span className="badge rounded-sm border border-danger text-base text-danger shadow-sm"><i className="ti ti-flame text-xl leading-none"></i>Hot</span>
							<span className="badge rounded-sm bg-gray-100 text-gray-500"><i className="fe fe-eye"></i>13.2k</span>
							<span className="relative inline-flex flex-shrink-0 justify-center items-center rounded-md font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white">
								<span className="text-lg">Inbox</span>
								<span className="absolute top-0 ltr:right-0 rtl:left-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 rtl:-translate-x-1/2 bg-green-500 text-white">32</span>
							</span>
						</div>
					</div>
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Working with icons</h5>
						</div>
						<div className="box-body space-x-5 rtl:space-x-reverse space-y-2">
							<span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
								<svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
								Connected
							</span>

							<span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">
								<svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
								Attention
							</span>

							<span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-500/10 dark:text-blue-500">
								<svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="6" /><line x1="12" x2="12" y1="18" y2="22" /><line x1="4.93" x2="7.76" y1="4.93" y2="7.76" /><line x1="16.24" x2="19.07" y1="16.24" y2="19.07" /><line x1="2" x2="6" y1="12" y2="12" /><line x1="18" x2="22" y1="12" y2="12" /><line x1="4.93" x2="7.76" y1="19.07" y2="16.24" /><line x1="16.24" x2="19.07" y1="7.76" y2="4.93" /></svg>
								Loading
							</span>

							<span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-full dark:bg-slate-500/20 dark:text-slate-400">
								<svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" x2="12" y1="2" y2="12" /></svg>
								Disabled
							</span>

							<span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
								<svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
								14.5%
							</span>

							<span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">
								<svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" /></svg>
								2%
							</span>

							<span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-md dark:bg-slate-500/20 dark:text-slate-400">
								<svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
								37.3%
							</span>

							<span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-md dark:bg-slate-500/20 dark:text-slate-400">
								<svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" /></svg>
								56%
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Badges;
