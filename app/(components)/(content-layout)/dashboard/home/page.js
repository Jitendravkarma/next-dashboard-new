"use client"
import React, { useEffect, useState } from "react";
import { SalesOverView, SocialVisitor, customerdata, topselling } from "@/shared/data/dashboard/salesdata";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Link from "next/link";
import { SalesValue } from "@/shared/data/charts/chartjsdata";
import UpgradePlan from "@/shared/layout-components/dashboard/UpgradePlan";

const Home = () => {
	const record = <i className="ri-clipboard-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const websiteIcon = <i className="ri-global-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const emailIcon = <i className="ri-mail-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const phoneIcon = <i className="ri-phone-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const googleIcon = <i className="ri-google-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const mapIcon = <i className="ri-map-pin-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>

	const recordData = [
	  { id: 1, class: "Total Searched Records", title: "total", text: 0, color: "primary/10", color1: "success" },
	  { id: 2, class: "Total Website Scraped", title: "website", text: 0, color: "primary/10", color1: "success" },
	  { id: 3, class: "Total Email Scraped", title: "email", text: 0, color: "primary/10", color1: "success" },
	  { id: 4, class: "Total Phone Scraped", title: "phone", text: 0, color: "primary/10", color1: "success" },
	  { id: 5, class: "Total Google Searches", title: "google", text: 0, color: "primary/10", color1: "success" },
	  { id: 6, class: "Total Map Searches", title: "map", text: 0, color: "primary/10", color1: "success" }
	]

	const icons = [
		{title: "total", icon: record},
		{title: "website", icon: websiteIcon},
		{title: "email", icon: emailIcon},
		{title: "phone", icon: phoneIcon},
		{title: "google", icon: googleIcon},
		{title: "map", icon: mapIcon},
	]

	const [totalRecords, setTotalRecords] = useState([]);

	useEffect(()=>{
		const getRecords = JSON.parse(localStorage.getItem("totalRecords"))
		if(getRecords){
			const applyIcons = getRecords.map((data)=>{
				const find = icons.find((iconData)=>{
					if(iconData.title === data.title){
						return iconData
					}
				})
				if(find.title === data.title){
					return {...data, icon: find.icon}
				}
			})
			setTotalRecords(applyIcons)
		}
		else {
			localStorage.setItem("totalRecords", JSON.stringify(recordData))
			const getRecords = JSON.parse(localStorage.getItem("totalRecords"))
		}
	},[])

	return (
		<div>
			<PageHeader currentpage="Dashboard" img="/assets/iconfonts/dashboard-icon/dashboard.png" activepage="Home" mainpage="Dashboard" />
			<div className="grid grid-cols-12 gap-x-5">
				{totalRecords.map((idx) => (
					<div className="col-span-12 md:col-span-6 xl:col-span-4" key={Math.random()}>
						<div className="box">
							<div className="box-body">
								<div className="flex space-x-3 rtl:space-x-reverse">
									<div className="flex items-center justify-center ecommerce-icon px-0">
										<span>
											{idx.icon}
										</span>
										{/* <span className={`rounded-sm p-4 bg-${idx.color}`}>
											{idx.icon}
										</span> */}
									</div>
									<div className="flex flex-col justify-center">
										<div className="mb-2">{idx.class}</div>
										<div className="text-gray-500 dark:text-white/70 mb-1 text-xs">
											<span
												className="text-gray-800 font-semibold text-xl leading-none align-bottom dark:text-white">
												{idx.text.toLocaleString('en-US')}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="grid grid-cols-12 gap-x-5">
				<UpgradePlan/>
				<div className="col-span-12 lg:col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Scraper Over View</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-bodybg dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Download</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Import</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Export</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="flex flex-wrap space-x-6 rtl:space-x-reverse">
								<li>
									<p className="inline-flex items-center">
										<span
											className="block w-3 h-3 rounded-full ltr:mr-2 rtl:ml-2 border-4 border-primary pointer-events-none"></span>
										<span className="flex items-center">
											<span className="text-2xl text-gray-800 dark:text-white font-bold ltr:mr-2 rtl:ml-2 pointer-events-none">
												1.2M
											</span>
											<span className="text-sm text-gray-400 dark:text-white/80">/ Queries</span>
										</span>
									</p>
								</li>
								<li>
									<p className="inline-flex items-center">
										<span
											className="block w-3 h-3 rounded-full ltr:mr-2 rtl:ml-2 border-4 border-gray-200 pointer-events-none"></span>
										<span className="flex items-center">
											<span className="text-2xl text-gray-800 dark:text-white font-bold ltr:mr-2 rtl:ml-2 pointer-events-none">
												1.1M
											</span>
											<span className="text-sm text-gray-400 dark:text-white/80">/ Full Field</span>
										</span>
									</p>
								</li>
							</ul>
							<SalesOverView />
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Top Used Tools</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-bodybg dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Download</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Import</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Export</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="flex flex-col customer-list">
								{customerdata.map((customer) => (
									<li className="px-0 ti-list-group border-0 text-gray-800 dark:text-white" key={Math.random()}>
										<Link href={customer.url} scroll={false} className="flex  justify-between items-center w-full">
											<div className="flex space-x-3 rtl:space-x-reverse w-full">
												{customer.icon}
												<div className="flex w-full">
													<div className="block my-auto">
														<p
															className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
															{customer.class}</p>
														<p
															className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
															{customer.data}</p>
													</div>
												</div>
											</div>
										</Link>
									</li>
								))}

							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xxl:col-span-3">
					<div className="box social-visitors">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Montly Report</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										This Month <i className="ti ti-chevron-down"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >This Month</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Last Month</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body p-1 pb-6">
							<SocialVisitor />
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-x-5">
				{/* <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Upcoming Products</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-bodybg dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Download</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Import</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Export</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="flex flex-col upcoming-list">
								{products.map((idx) => (
									<li className={`p-0 ${idx.class} ti-list-group border-0 text-gray-800 dark:text-white`} key={Math.random()}>
										<Link href="#!" scroll={false} className="w-full">
											<div className="flex items-center">
												<div className="leading-none">
													<img className="avatar avatar-sm rounded-full" src={idx.src}
														alt="image" />
												</div>
												<div className="flex-auto ltr:ml-2 rtl:mr-2">
													<p className="text-sm font-semibold mb-0">{idx.data}</p>
													<p className="text-xs text-gray-400 dark:text-white/80 mb-0 !font-normal">{idx.data1}</p>
												</div>
												<div className="block text-end">
													<span className="text-sm text-success font-semibold">{idx.text}</span>
													<p className="text-xs text-gray-400 dark:text-white/80 !font-normal"><i
														className="ti ti-clock-hour-2 ltr:mr-1 rtl:ml-1 inline-block"></i>01 Apr, 2023</p>
												</div>
											</div>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div> */}
				<div className="col-span-12 lg:col-span-6 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Daily Limits</h5>
								{/* <div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-bodybg dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Download</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Import</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Export</Link>
									</div>
								</div> */}
							</div>
						</div>
						<div className="box-body pb-0 px-0">
							<div className="sales-value relative border-b border-gray-200 dark:border-white/10 pb-5">
								<SalesValue />
								<div
									className="chart-circle-value circle-style absolute border-2 border-dashed border-primary -top-5 inset-0 flex justify-center items-center w-[150px] h-[150px] leading-[70px] rounded-full text-5xl mx-auto my-auto">
									<div className="text-xl font-bold text-center">
										500 <br/>
										<span>Requests</span>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-2 p-3">
								<div className="px-5 py-3 ltr:border-r rtl:border-l border-gray-200 dark:border-white/10">
									<div className="text-center">
										<p className="text-blue-500 dark:text-white text-2xl font-medium">120</p>
									</div>
									<div className="text-sm text-gray-500 dark:text-white/80 text-center font-medium">
										Remaining Requests
									</div>
								</div>
								<div className="px-5 py-3">
									<div className="text-center">
										<p className="text-primary dark:text-white text-2xl font-medium">380</p>
									</div>
									<div className="text-sm text-gray-500 dark:text-white/80 text-center font-medium">
										Used Requests
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-12 xxl:col-span-8">
					<div className="box">
						<div className="box-header flex">
							<h5 className="box-title my-auto">Recent Activities</h5>
							<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
								<button type="button" aria-label="button" className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-bodybg dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
									<i className="text-sm leading-none ti ti-dots-vertical"></i>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu">
									<Link className="ti-dropdown-item" href="#!" scroll={false} >Action</Link>
									<Link className="ti-dropdown-item" href="#!" scroll={false} >Another Action</Link>
									<Link className="ti-dropdown-item" href="#!" scroll={false} >Something else
										here</Link>
								</div>
							</div>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col" className="!p-[0.65rem]">Used Tool</th>
											<th scope="col" className="text-center !p-[0.65rem]">Searched Query</th>
											<th scope="col" className="!p-[0.65rem]">Status</th>
											<th scope="col" className="!p-[0.65rem]">Download</th>
										</tr>
									</thead>
									<tbody>
										{topselling.map((idx) => (
											<tr key={Math.random()}>
												<td className="!p-[0.65rem] truncate">
													<Link href={idx.url} title={idx.title}>{idx.icon}</Link>
												</td>
												<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] capitalize">
													{idx.data1}
												</td>
												<td className="!p-[0.65rem] text-sm"><span
													className={`badge leading-none bg-${idx.color}/10 text-${idx.color} rounded-sm`}>{idx.text}</span></td>
												<td className="!p-[0.65rem]">
													<span className="text-sm font-semibold">
														<Link href={"dashboards/history"} target="_blank" className="text-blue-500 hover:underline hover:text-blue-700">Click</Link>
													</span>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


export default Home;
