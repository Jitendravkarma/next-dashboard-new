"use client"
import { AudienceOverview, Deviceview, SessionOverview, SessionsByGender, channel, countries } from "@/shared/data/dashboard/analyticdata";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React from "react";

const Analytics = () => {

	return (
		<div>
			<Seo title={"Analytics Dashboard"} />
			<PageHeader currentpage="Analytics Dashboard" activepage="Home" mainpage="Analytics Dashboard" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:col-span-9">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-span-12 xl:col-span-4 lg-col-span-12 md-col-span-4">
							<div className="box">
								<div className="box-body">
									<div className="flex items-start">
										<div className="ltr:mr-4 rtl:ml-4">
											<span className="avatar bg-primary/20 text-primary text-[1.5rem] p-3 rounded-sm"><i
												className="ri-flag-2-line leading-none"></i></span>
										</div>
										<div className="flex-1">
											<div className="font-medium text-sm mb-1">Total Sessions</div>
											<div className="flex items-center justify-between mb-1">
												<h5 className="text-xl font-bold text-gray-800 dark:text-white">1,289</h5>
												<span className="badge bg-success/20 text-success rounded-sm py-1">+12.2%</span>
											</div>
											<p className="text-gray-500 dark:text-white/70 mb-0 text-xs">since last 2 months</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 xl:col-span-4 lg-col-span-12 md-col-span-4">
							<div className="box">
								<div className="box-body">
									<div className="flex items-start">
										<div className="ltr:mr-4 rtl:ml-4">
											<span className="avatar bg-secondary/20 text-secondary text-[1.5rem] p-3 rounded-sm"><i
												className="ri-share-circle-line leading-none"></i></span>
										</div>
										<div className="flex-1">
											<div className="font-medium text-sm mb-1">Bounce Rate</div>
											<div className="flex items-center justify-between mb-1">
												<h5 className="text-xl font-bold text-gray-800 dark:text-white">19.8%</h5>
												<span className="badge bg-danger/20 text-danger rounded-sm py-1">-2.6%</span>
											</div>
											<p className="text-gray-500 dark:text-white/70 mb-0 text-xs">since last 2 months</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 xl:col-span-4 lg-col-span-12 md-col-span-4">
							<div className="box">
								<div className="box-body">
									<div className="flex items-start">
										<div className="ltr:mr-4 rtl:ml-4">
											<span className="avatar bg-danger/20 text-danger text-[1.5rem] p-3 rounded-sm"><i
												className="ri-eye-line leading-none"></i></span>
										</div>
										<div className="flex-1">
											<div className="font-medium text-sm mb-1">Page Views</div>
											<div className="flex items-center justify-between mb-1">
												<h5 className="text-xl font-bold text-gray-800 dark:text-white">15,250</h5>
												<span className="badge bg-success/20 text-success rounded-sm py-1">+35.6%</span>
											</div>
											<p className="text-gray-500 dark:text-white/70 mb-0 text-xs">since last 2 months</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 lg:col-span-8">
							<div className="box">
								<div className="box-header">
									<div className="flex justify-between">
										<h5 className="box-title my-auto">Session Overview</h5>
										<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
											<button type="button"
												className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
												This year <i className="ti ti-chevron-down"></i></button>
											<div className="hs-dropdown-menu ti-dropdown-menu hidden">
												<Link className="ti-dropdown-item" href="#!" scroll={false} >Today</Link>
												<Link className="ti-dropdown-item" href="#!" scroll={false} >This Week</Link>
												<Link className="ti-dropdown-item" href="#!" scroll={false} >This Month</Link>
												<Link className="ti-dropdown-item" href="#!" scroll={false} >This Year</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="box-body ">
									<SessionOverview />
								</div>
							</div>
						</div>
						<div className="col-span-12 lg:col-span-4">
							<div className="box">
								<div className="box-header">
									<div className="flex justify-between">
										<h5 className="box-title my-auto">Visitors By Countries</h5>
										<button type="button"
											className="ti-btn !m-0 rounded-sm !p-1 !px-3 !border !border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:!border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:!border-white/10 dark:hover:!border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
											View All</button>
									</div>
								</div>
								<div className="box-body">
									<ul className="flex flex-col vistors-list">
										{countries.map((idx) => (
											<li className="p-0 mb-4 ti-list-group border-0 text-gray-800 dark:text-white" key={Math.random()}>
												<Link href="#!" scroll={false} className="w-full">
													<div className="flex items-center">
														<div className="avatar avatar-xs rounded-sm flex-none">
															<img src={idx.src} alt="" />
														</div>
														<div className="ltr:ml-3 rtl:mr-3 flex-auto">
															<span className="text-sm">{idx.class}</span>
														</div>
														<div>
															<span className="badge rounded-sm bg-gray-100 text-gray-500 dark:bg-black/20 dark:text-white">{idx.data}</span>
														</div>
													</div>
												</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box overflow-hidden">
						<div className="box-body">
							<div className="flex mb-4">
								<h5 className="box-title my-auto">Active Users</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle text-gray-500 dark:text-white/70 p-0 border-0 shadow-none">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Action</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Another Acttion</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Something Else Here</Link>
									</div>
								</div>
							</div>
							<div className="flex">
								<div className="ltr:mr-2 rtl:ml-2 my-auto">
									<span className="avatar rounded-full bg-primary text-white text-[1rem] p-3"><i
										className="ri-pulse-line leading-none"></i></span>
								</div>
								<div className="flex-1">
									<p className="text-2xl text-gray-800 dark:text-white font-medium">12,890<span
										className="inline-flex text-success text-xs ltr:ml-2 rtl:mr-2"><i
											className="ri-arrow-right-up-line text-xs"></i>10.5%</span></p>
									<p className="mb-0 text-xs text-gray-500 dark:text-white/70">Currently active now</p>
								</div>
							</div>
						</div>
					</div>
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">

								<h5 className="box-title my-auto">Device views</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										This year <i className="ti ti-chevron-down"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu hidden">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Today</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >This Week</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >This Month</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >This Year</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body" id="analytics">
							<Deviceview />
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Sessions By Gender</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
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
							<SessionsByGender />
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Traffic Sources</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Download</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Import</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Export</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Browser</th>
											<th scope="col">Sessions</th>
											<th scope="col">Traffic</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="">
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<span className="avatar avatar-xs rounded-sm bg-primary/20 text-primary p-1.5"><i
															className="ri-chrome-line text-xl leading-none"></i></span>
													</div>
													<p className="mb-0">Chrome</p>
												</div>
											</td>
											<td className="">20,937<i
												className="ri-arrow-up-s-fill ltr:ml-2 rtl:mr-2 text-base text-success my-auto"></i></td>
											<td className="">
												<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "80%" }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
												</div>
											</td>
										</tr>
										<tr>
											<td className="">
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<span className="avatar avatar-xs rounded-sm bg-secondary/20 text-secondary p-1.5"><i
															className="ri-safari-line text-xl leading-none"></i></span>
													</div>
													<p className="mb-0">Safari</p>
												</div>
											</td>
											<td className="">23,379<i
												className="ri-arrow-up-s-fill ltr:ml-2 rtl:mr-2 text-base text-success my-auto"></i></td>
											<td className="">
												<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-secondary text-xs text-white text-center" role="progressbar" style={{ width: "40%" }}
														aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}></div>
												</div>
											</td>
										</tr>
										<tr>
											<td className="">
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<span className="avatar avatar-xs rounded-sm bg-danger/20 text-danger p-1.5"><i
															className="ri-opera-line text-xl leading-none"></i></span>
													</div>
													<p className="mb-0">Opera</p>
												</div>
											</td>
											<td className="">20,582<i
												className="ri-arrow-down-s-fill ltr:ml-2 rtl:mr-2 text-base text-danger my-auto"></i></td>
											<td className="">
												<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-danger text-xs text-white text-center" role="progressbar" style={{ width: "30%" }}
														aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>
												</div>
											</td>
										</tr>
										<tr>
											<td className="">
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<span className="avatar avatar-xs rounded-sm bg-warning/20 text-warning p-1.5"><i
															className="ri-firefox-line text-xl leading-none"></i></span>
													</div>
													<p className="mb-0">Firefox</p>
												</div>
											</td>
											<td className="">18,120<i
												className="ri-arrow-up-s-fill ltr:ml-2 rtl:mr-2 text-base text-success my-auto"></i></td>
											<td className="">
												<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-warning text-xs text-white text-center" role="progressbar" style={{ width: "50%" }}
														aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
												</div>
											</td>
										</tr>
										<tr>
											<td className="">
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<span className="avatar avatar-xs rounded-sm bg-success/20 text-success p-1.5"><i
															className="ri-edge-line text-xl leading-none"></i></span>
													</div>
													<p className="mb-0">Edge</p>
												</div>
											</td>
											<td className="">11,352<i
												className="ri-arrow-up-s-fill ltr:ml-2 rtl:mr-2 text-base text-danger my-auto"></i></td>
											<td className="">
												<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-success text-xs text-white text-center" role="progressbar" style={{ width: "25%" }}
														aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Audience Overview</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
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
											<span
												className="text-base text-gray-800 dark:text-white font-medium ltr:mr-2 rtl:ml-2 pointer-events-none">New
												Visitors</span>
										</span>
									</p>
								</li>
								<li>
									<p className="inline-flex items-center">
										<span
											className="block w-3 h-3 rounded-full ltr:mr-2 rtl:ml-2 border-4 border-gray-200 pointer-events-none"></span>
										<span className="flex items-center">
											<span
												className="text-base text-gray-800 dark:text-white font-medium ltr:mr-2 rtl:ml-2 pointer-events-none">Online
												Visitors</span>
										</span>
									</p>
								</li>
							</ul>
							<AudienceOverview />
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Visitors By Channel</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button id="hs-dropdown-custom-icon-trigger" type="button"
										className="hs-dropdown-toggle !px-2 !py-1 ti-btn ti-btn-primary">Sort
										By<i className="ri-arrow-down-s-line align-middle"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu hidden"
										aria-labelledby="hs-dropdown-custom-icon-trigger">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >New</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >popular</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Relevant</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head table-bordered rounded-sm ti-custom-table-head whitespace-nowrap">
									<thead className="bg-gray-50 dark:bg-black/20">
										<tr className="">
											<th scope="col" className="dark:text-white/80">S.no</th>
											<th scope="col" className="dark:text-white/80">Channel</th>
											<th scope="col" className="dark:text-white/80">Sessions</th>
											<th scope="col" className="dark:text-white/80">Bounce Rate</th>
											<th scope="col" className="dark:text-white/80">Avg Session Duration</th>
											<th scope="col" className="dark:text-white/80">Target Reached</th>
											<th scope="col" className="dark:text-white/80">Pages Per Session</th>
											<th scope="col" className="dark:text-white/80">Action</th>
										</tr>
									</thead>
									<tbody className="">
										{channel.map((idx) => (
											<tr className="" key={Math.random()}>
												<td>{idx.id}</td>
												<td>
													<div className="flex items-center">
														<span className={`avatar avatar-xs bg-${idx.color}/20 rounded-full p-2`}>
															<i className={`ri-${idx.icon} text-base font-semibiold text-${idx.color} leading-none`}></i>
														</span>
														<span className="ltr:ml-2 rtl:mr-2">{idx.class}</span>
													</div>
												</td>
												<td>{idx.text}</td>
												<td>{idx.text1}</td>
												<td>{idx.data}</td>
												<td><span className={`badge bg-${idx.color}/20 rounded-sm text-${idx.color}`}>{idx.data1}</span></td>
												<td>{idx.data2}</td>
												<td className="font-medium space-x-2 rtl:space-x-reverse">
													<div className="hs-tooltip ti-main-tooltip">
														<Link href="#!" scroll={false}
															className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
															<i className="ti ti-eye"></i>
															<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">View</span>
														</Link>
													</div>
													<div className="hs-tooltip ti-main-tooltip">
														<Link href="#!" scroll={false}
															className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
															<i className="ti ti-pencil"></i>
															<span
																className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
																role="tooltip">Edit</span>
														</Link>
													</div>
													<div className="hs-tooltip ti-main-tooltip">
														<Link href="#!" scroll={false}
															className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
															<i className="ti ti-trash"></i>
															<span
																className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
																role="tooltip">
																Delete
															</span>
														</Link>
													</div>
												</td>
											</tr>

										))}

									</tbody>
								</table>
							</div>
						</div>
						<div className="box-footer">
							<div className="sm:flex items-center">
								<div className="">
									showing 5 Entries <i className="ri-arrow-right-line ml-2 font-semibold"></i>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<nav className="flex justify-center items-center space-x-2 rtl:space-x-reverse">
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex itemLink-center gap-2 rounded-sm" href="#!" scroll={false} >
											<span aria-hidden="true">Prev</span>
											<span className="sr-only">Previous</span>
										</Link>
										<Link className="bg-primary text-white py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm" href="#!" scroll={false} aria-current="page">1</Link>
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-Linkm font-medium rounded-sm" href="#!" scroll={false} >2</Link>
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-Linkm font-medium rounded-sm" href="#!" scroll={false} >3</Link>
										<Link className="text-gray-500 hover:text-primary e py-1 px-2 leading-none inline-flex itemLink-center gap-2 rounded-sm" href="#!" scroll={false} >
											<span className="sr-only">Next</span>
											<span aria-hidden="true">Next</span>
										</Link>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
