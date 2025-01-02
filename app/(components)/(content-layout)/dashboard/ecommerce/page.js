"use client"
import { OrderVsSales, ecommerceorders } from "@/shared/data/dashboard/ecommercedata";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React from "react";

const Ecommerce = () => {
	return (
		<div>
			<Seo title={"Ecommerce Dashboard"} />
			<PageHeader currentpage="Ecommerce Dashboard" activepage="Home" mainpage="Ecommerce Dashboard" />

			<div className="grid grid-cols-12 gap-x-5">
				{ecommerceorders.map((idx) => (
					<div className="col-span-12 xxxl:col-span-2 md:col-span-4" key={Math.random()}>
						<div className="box">
							<div className="box-body">
								<div className="flex space-x-3 rtl:space-x-reverse">
									<div className="flex items-center justify-center ecommerce-icon px-0">
										<span className={`rounded-sm p-4 bg-${idx.color}`}>
											{idx.icon}
										</span>
									</div>
									<div className="">
										<div className="mb-2">{idx.class}</div>
										<div className="text-gray-500 dark:text-white/70 mb-1 text-xs">
											<span
												className="text-gray-800 font-semibold text-xl leading-none align-bottom dark:text-white">
												{idx.text}
											</span>
										</div>
										<div>
											<span className="text-xs mb-0 inline-flex">{idx.data}<span
												className={`text-${idx.color1} ms-1 `}>{idx.data1}</span></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Recent Orders</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button aria-label="button" id="hs-dropdown-custom-icon-trigger1" type="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-bodybg dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu"
										aria-labelledby="hs-dropdown-custom-icon-trigger1">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Action</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Another Action</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Something else here</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="flex flex-col">
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link href="#!" scroll={false} className="w-full">
										<div className="flex items-center">
											<div className="leading-none">
												<img className="avatar avatar-sm rounded-sm"
													src={"../../assets/img/ecommerce/jpg/1.jpg"} alt="image" />
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Smart Phone</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">Mobiles</p>
											</div>
											<div>
												<span className="text-sm text-success font-semibold">$199.99</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link href="#!" scroll={false} className="w-full">
										<div className="flex items-center">
											<div className="leading-none">
												<img className="avatar avatar-sm rounded-sm"
													src={"../../assets/img/ecommerce/jpg/2.jpg"} alt="image" />
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">White Headphones</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">Music</p>
											</div>
											<div>
												<span className="text-sm text-success font-semibold">$79.49</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link href="#!" scroll={false} className="w-full">
										<div className="flex items-center">
											<div className="leading-none">
												<img className="avatar avatar-sm rounded-sm"
													src={"../../assets/img/ecommerce/jpg/3.jpg"} alt="image" />
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Stop Watch</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">Electronics
												</p>
											</div>
											<div>
												<span className="text-sm text-success font-semibold">$49.29</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link href="#!" scroll={false} className="w-full">
										<div className="flex items-center">
											<div className="leading-none">
												<img className="avatar avatar-sm rounded-sm"
													src={"../../assets/img/ecommerce/jpg/4.jpg"} alt="image" />
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Kikon Camera</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">Electronics
												</p>
											</div>
											<div>
												<span className="text-sm text-success font-semibold">$1,699.00</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link href="#!" scroll={false} className="w-full">
										<div className="flex items-center">
											<div className="leading-none">
												<img className="avatar avatar-sm rounded-sm"
													src={"../../assets/img/ecommerce/jpg/5.jpg"} alt="image" />
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Photo Frame</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">Furniture
												</p>
											</div>
											<div>
												<span className="text-sm text-success font-semibold">$29.99</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link href="#!" scroll={false} className="w-full">
										<div className="flex items-center">
											<div className="leading-none">
												<img className="avatar avatar-sm rounded-sm"
													src={"../../assets/img/ecommerce/jpg/6.jpg"} alt="image" />
											</div>
											<div className="flex-auto ltr:ml-2 rtl:mr-2">
												<p className="text-sm font-semibold mb-0">Canvas Shoes</p>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-0">Footwear
												</p>
											</div>
											<div>
												<span className="text-sm text-success font-semibold">$89.99</span>
											</div>
										</div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-6">
					<OrderVsSales />
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Top Customers</h5>
								<div className=" block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" className="ti-btn !m-0 rounded-sm !p-1 !px-3 !border !border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:!border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:!border-white/10 dark:hover:!border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										View All</button>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="flex flex-col">
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link href="#!" scroll={false} className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-top justify-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src={"../../assets/img/users/4.jpg"} alt="Image Description"
														className="avatar avatar-sm rounded-full" />
												</div>
												<div>
													<p className="mb-0 text-sm fw-semibold">Emma Wilson</p>
													<p
														className="mb-0 text-gray-500 dark:text-white/70 text-xs flex font-normal">
														15 Purchases
														<svg className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
															xmlns="http://www.w3.org/2000/svg" width="100"
															height="100" enableBackground="new 0 0 100 100"
															viewBox="0 0 100 100">
															<path
																d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z" />
														</svg>
													</p>
												</div>
											</div>
											<div>
												<span className="text-sm">$1,835</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link href="#!" scroll={false} className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-top justify-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src={"../../assets/img/users/15.jpg"} alt="Image Description"
														className="avatar avatar-sm rounded-full" />
												</div>
												<div>
													<p className="mb-0 text-sm fw-semibold">Robert Lewis</p>
													<p
														className="mb-0 text-gray-500 dark:text-white/70 text-xs flex font-normal">
														18 Purchases
														<svg className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
															xmlns="http://www.w3.org/2000/svg" width="100"
															height="100" enableBackground="new 0 0 100 100"
															viewBox="0 0 100 100">
															<path
																d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z" />
														</svg>
													</p>
												</div>
											</div>
											<div>
												<span className="text-sm">$2,415</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link href="#!" scroll={false} className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-top justify-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src={"../../assets/img/users/5.jpg"} alt="Image Description"
														className="avatar avatar-sm rounded-full" />
												</div>
												<div>
													<p className="mb-0 text-sm fw-semibold">Angelina Hose</p>
													<p
														className="mb-0 text-gray-500 dark:text-white/70 text-xs flex font-normal">
														21 Purchases
														<svg className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
															xmlns="http://www.w3.org/2000/svg" width="100"
															height="100" enableBackground="new 0 0 100 100"
															viewBox="0 0 100 100">
															<path
																d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z" />
														</svg>
													</p>
												</div>
											</div>
											<div>
												<span className="text-sm">$2,341</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link href="#!" scroll={false} className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-top justify-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src={"../../assets/img/users/3.jpg"} alt="Image Description"
														className="avatar avatar-sm rounded-full" />
												</div>
												<div>
													<p className="mb-0 text-sm fw-semibold">Hugh Jackma</p>
													<p
														className="mb-0 text-gray-500 dark:text-white/70 text-xs flex font-normal">
														20 Purchases
														<svg className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
															xmlns="http://www.w3.org/2000/svg" width="100"
															height="100" enableBackground="new 0 0 100 100"
															viewBox="0 0 100 100">
															<path
																d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z" />
														</svg>
													</p>
												</div>
											</div>
											<div>
												<span className="text-sm">$2,341</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-5 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link href="#!" scroll={false} className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-top justify-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src={"../../assets/img/users/2.jpg"} alt="Image Description"
														className="avatar avatar-sm rounded-full" />
												</div>
												<div>
													<p className="mb-0 text-sm fw-semibold">Samantha Sam</p>
													<p
														className="mb-0 text-gray-500 dark:text-white/70 text-xs flex font-normal">
														24 Purchases
														<svg className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
															xmlns="http://www.w3.org/2000/svg" width="100"
															height="100" enableBackground="new 0 0 100 100"
															viewBox="0 0 100 100">
															<path
																d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z" />
														</svg>
													</p>
												</div>
											</div>
											<div>
												<span className="text-sm">2,624</span>
											</div>
										</div>
									</Link>
								</li>
								<li className="p-0 mb-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link href="#!" scroll={false} className="w-full">
										<div className="flex items-center justify-between">
											<div className="flex items-top justify-center">
												<div className="ltr:mr-2 rtl:ml-2">
													<img src={"../../assets/img/users/12.jpg"} alt="Image Description"
														className="avatar avatar-sm rounded-full" />
												</div>
												<div>
													<p className="mb-0 text-sm fw-semibold">Bickle Bob</p>
													<p
														className="mb-0 text-gray-500 dark:text-white/70 text-xs flex font-normal">
														12 Purchases
														<svg className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
															xmlns="http://www.w3.org/2000/svg" width="100"
															height="100" enableBackground="new 0 0 100 100"
															viewBox="0 0 100 100">
															<path
																d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z" />
														</svg>
													</p>
												</div>
											</div>
											<div>
												<span className="text-sm">1,100</span>
											</div>
										</div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-5">
					<div className="box">
						<div className="box-header">
							<div className="sm:flex">
								<h5 className="box-title my-auto">Task List</h5>
								<nav className="sm:flex sm:space-x-2 space-y-2 sm:space-y-0 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto"
									aria-label="Tabs" role="tablist">
									<button type="button"
										className=" hs-tab-active:text-info hs-tab-active:bg-info/20 dark:hs-tab-active:bg-info/20 dark:hs-tab-active:text-info py-2 px-3 inline-flex items-center w-full justify-center gap-2 leading-none font-medium text-center text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300 active"
										id="active-item" data-hs-tab="#taskactive" aria-controls="taskactive"
										role="tab">
										Active
									</button>
									<button type="button"
										className=" hs-tab-active:text-info hs-tab-active:bg-info/20 dark:hs-tab-active:bg-info/20 dark:hs-tab-active:text-info py-2 px-3 inline-flex items-center w-full justify-center gap-2 leading-none font-medium text-center text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300"
										id="completed-item" data-hs-tab="#completed" aria-controls="completed"
										role="tab">
										Completed
									</button>
									<button type="button"
										className=" hs-tab-active:text-info hs-tab-active:bg-info/20 dark:hs-tab-active:bg-info/20 dark:hs-tab-active:text-info py-2 px-3 inline-flex items-center w-full justify-center gap-2 leading-none font-medium text-center text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:text-white/70 dark:hover:text-gray-300"
										id="cancelled-item" data-hs-tab="#cancelled" aria-controls="cancelled"
										role="tab">
										Cancelled
									</button>
								</nav>
							</div>
						</div>
						<div className="box-body p-0">
							<div id="taskactive" className="" role="tabpanel" aria-labelledby="active-item">
								<div className="overflow-auto">
									<table className="ti-custom-table ti-custom-table-head">
										<tbody>
											<tr>
												<td className="min-w-[200px]">
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src={"../../assets/img/users/1.jpg"}
																	alt="Image Description" />
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
																Amanda Nanes</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
															$229.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Delivery
															Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">24 May
															2022</p>
													</div>
												</td>
												<td className="min-w-[100px]">
													<img className="avatar avatar-xs rounded-sm"
														src={"../../assets/img/ecommerce/products/1.png"}
														alt="Image Description" />
												</td>
												<td className="">
													<Link aria-label="anchor" href="#!" scroll={false} >
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-0"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src={"../../assets/img/users/10.jpg"}
																	alt="Image Description" />
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
																Peter Parkour</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
															$135.29</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Delivery
															Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">18 May
															2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src={"../../assets/img/ecommerce/products/2.png"}
														alt="Image Description" />
												</td>
												<td className="">
													<Link aria-label="anchor" href="#!" scroll={false} >
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-0"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src={"../../assets/img/users/12.jpg"}
																	alt="Image Description" />
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
																Jackie Chen</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
															$1,299.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Delivery
															Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">29 May
															2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src={"../../assets/img/ecommerce/products/3.png"}
														alt="Image Description" />
												</td>
												<td className="">
													<Link aria-label="anchor" href="#!" scroll={false} >
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-0"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src={"../../assets/img/users/5.jpg"}
																	alt="Image Description" />
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
																Ryan Gercia</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
															$249.29</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Delivery
															Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">05 Jun
															2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src={"../../assets/img/ecommerce/products/4.png"}
														alt="Image Description" />
												</td>
												<td className="">
													<Link aria-label="anchor" href="#!" scroll={false} >
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-0"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src={"../../assets/img/users/14.jpg"}
																	alt="Image Description" />
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
																Hugh Jackma</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
															$499.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Delivery
															Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">15 May
															2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src={"../../assets/img/ecommerce/products/5.png"}
														alt="Image Description" />
												</td>
												<td className="">
													<Link aria-label="anchor" href="#!" scroll={false} >
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-0"></i></span>
													</Link>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div id="completed" className="hidden" role="tabpanel" aria-labelledby="completed-item">
								<div className="overflow-auto">
									<table className="ti-custom-table ti-custom-table-head">
										<tbody>
											<tr>
												<td className="min-w-[200px]">
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src={"../../assets/img/users/2.jpg"}
																	alt="Image Description" />
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
																Lisa Rebecca</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
															$1,199.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-success">Delivery Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">24 Dec
															2022</p>
													</div>
												</td>
												<td className="min-w-[100px]">
													<img className="avatar avatar-xs rounded-sm"
														src={"../../assets/img/ecommerce/products/6.png"}
														alt="Image Description" />
												</td>
												<td className="">
													<Link aria-label="anchor" href="#!" scroll={false} >
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-0"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src={"../../assets/img/users/13.jpg"}
																	alt="Image Description" />
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
																Matt Martin</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
															$799.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-success">Delivered On</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">18 Nov
															2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src={"../../assets/img/ecommerce/products/7.png"}
														alt="Image Description" />
												</td>
												<td className="">
													<Link aria-label="anchor" href="#!" scroll={false} >
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-0"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src={"../../assets/img/users/7.jpg"}
																	alt="Image Description" />
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
																Mitchell Osama</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
															$279.00</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-success">Delivery Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">29 Dec
															2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src={"../../assets/img/ecommerce/products/8.png"}
														alt="Image Description" />
												</td>
												<td className="">
													<Link aria-label="anchor" href="#!" scroll={false} >
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-0"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src={"../../assets/img/users/12.jpg"}
																	alt="Image Description" />
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
																Cornor Mcgood</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
															$79.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-success">Delivered On</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">05 Dec
															2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src={"../../assets/img/ecommerce/products/9.png"}
														alt="Image Description" />
												</td>
												<td className="">
													<Link aria-label="anchor" href="#!" scroll={false} >
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-0"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src={"../../assets/img/users/15.jpg"}
																	alt="Image Description" />
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
																Kishan Patel</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
															$1449.29</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-success">Delivered On</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">20 Nov
															2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src={"../../assets/img/ecommerce/products/10.png"}
														alt="Image Description" />
												</td>
												<td className="">
													<Link aria-label="anchor" href="#!" scroll={false} >
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-0"></i></span>
													</Link>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div id="cancelled" className="hidden" role="tabpanel" aria-labelledby="cancelled-item">
								<div className="overflow-auto">
									<table className="ti-custom-table ti-custom-table-head">
										<tbody>
											<tr>
												<td className="min-w-[200px]">
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src={"../../assets/img/users/6.jpg"}
																	alt="Image Description" />
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
																Hailey Bobber</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
															$199.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-danger">Cancelled Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">09 Dec
															2022</p>
													</div>
												</td>
												<td className="min-w-[100px]">
													<img className="avatar avatar-xs rounded-sm"
														src={"../../assets/img/ecommerce/products/11.png"}
														alt="Image Description" />
												</td>
												<td className="">
													<Link aria-label="anchor" href="#!" scroll={false} >
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-0"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src={"../../assets/img/users/14.jpg"}
																	alt="Image Description" />
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
																Anthony Mansion</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
															$179.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-danger">Cancelled Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">28 Dec
															2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src={"../../assets/img/ecommerce/products/12.png"}
														alt="Image Description" />
												</td>
												<td className="">
													<Link aria-label="anchor" href="#!" scroll={false} >
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-0"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src={"../../assets/img/users/16.jpg"}
																	alt="Image Description" />
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
																Simon Carter</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
															$149.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-danger">Cancelled Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">30 Dec
															2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src={"../../assets/img/ecommerce/products/1.png"}
														alt="Image Description" />
												</td>
												<td className="">
													<Link aria-label="anchor" href="#!" scroll={false} >
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-0"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src={"../../assets/img/users/3.jpg"}
																	alt="Image Description" />
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
																Sofia Sekh</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
															$1439.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-danger">Cancelled Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">03 Dec
															2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src={"../../assets/img/ecommerce/products/4.png"}
														alt="Image Description" />
												</td>
												<td className="">
													<Link aria-label="anchor" href="#!" scroll={false} >
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-0"></i></span>
													</Link>
												</td>
											</tr>
											<tr>
												<td>
													<div className="flex items-center space-x-2 rtl:space-x-reverse">
														<div className="leading-none">
															<div className="relative inline-block">
																<img className="avatar avatar-xs rounded-full"
																	src={"../../assets/img/users/9.jpg"}
																	alt="Image Description" />
																<span
																	className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-400"></span>
															</div>
														</div>
														<div className="items-center">
															<span
																className="text-xs text-gray-500 dark:text-white/70">Name</span>
															<p className="text-sm mb-0 text-gray-800 dark:text-white">
																Kimura Kai</p>
														</div>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Price</span>
														<p
															className="text-sm mb-0 font-semibold text-gray-800 dark:text-white">
															$1092.99</p>
													</div>
												</td>
												<td>
													<div className="items-center">
														<span className="text-xs text-danger">Cancelled Date</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">02 Dec
															2022</p>
													</div>
												</td>
												<td>
													<img className="avatar avatar-xs rounded-sm"
														src={"../../assets/img/ecommerce/products/5.png"}
														alt="Image Description" />
												</td>
												<td className="">
													<Link aria-label="anchor" href="#!" scroll={false} >
														<span className="orders-arrow"><i
															className="ri-arrow-right-s-line text-lg rtl:rotate-0"></i></span>
													</Link>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-4">
					<div className="box">
						<div className="box-header flex">
							<h5 className="box-title my-auto">Top Selling Products</h5>
							<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
								<button aria-label="button" id="hs-dropdown-custom-icon-trigger3" type="button"
									className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
									<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
								<div className="hs-dropdown-menu ti-dropdown-menu"
									aria-labelledby="hs-dropdown-custom-icon-trigger3">
									<Link className="ti-dropdown-item" href="#!" scroll={false} >Action</Link>
									<Link className="ti-dropdown-item" href="#!" scroll={false} >Another Action</Link>
									<Link className="ti-dropdown-item" href="#!" scroll={false} >Something else
										here</Link>
								</div>
							</div>
						</div>
						<div className="box-body p-0 selling-table">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Product</th>
											<th scope="col">Stock</th>
											<th scope="col">TotalSales</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="leading-none">
												<img src={"../../assets/img/ecommerce/products/13.png"}
													className=" ltr:mr-2 rtl:ml-2 avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20"
													alt="Image Description" />Ethnic School bag for children (24L)
											</td>
											<td className="text-sm"><span
												className="text-success">In
												Stock</span></td>
											<td>
												<span className="text-sm font-semibold">5,093</span>
											</td>
										</tr>
										<tr>
											<td className="leading-none">
												<img src={"../../assets/img/ecommerce/products/14.png"}
													className=" ltr:mr-2 rtl:ml-2 avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20"
													alt="Image Description" />Leather jacket for men (S,M,L,XL)
											</td>
											<td className="text-sm"><span
												className="text-success">In
												Stock</span></td>
											<td>
												<span className="text-sm font-semibold">6,890</span>
											</td>
										</tr>
										<tr>
											<td className="leading-none">
												<img src={"../../assets/img/ecommerce/products/15.png"}
													className=" ltr:mr-2 rtl:ml-2 avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20"
													alt="Image Description" />Childrens Teddy toy of high quality
											</td>
											<td className="text-sm"><span
												className="text-danger">Out
												Of Stock</span></td>
											<td>
												<span className="text-sm font-semibold">5,423</span>
											</td>
										</tr>
										<tr>
											<td className="leading-none">
												<img src={"../../assets/img/ecommerce/products/16.png"}
													className=" ltr:mr-2 rtl:ml-2 avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20"
													alt="Image Description" />Orange smart watch dial (24mm)
											</td>
											<td className="text-sm"><span
												className="text-danger">Out
												Of Stock</span></td>
											<td>
												<span className="text-sm font-semibold">10,234</span>
											</td>
										</tr>
										<tr>
											<td className="leading-none">
												<img src={"../../assets/img/ecommerce/products/18.png"}
													className=" ltr:mr-2 rtl:ml-2 avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20"
													alt="Image Description" />Pink Womens Regular Hand Bag
											</td>
											<td className="text-sm"><span
												className="text-success">In
												Stock</span></td>
											<td>
												<span className="text-sm font-semibold">10,234</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Customer Reviews</h5>
								<div className=" block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" className="ti-btn !m-0 rounded-sm !p-1 !px-3 !border !border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:!border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:!border-white/10 dark:hover:!border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										View All</button>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="flex items-center">
								<div className="flex-1">
									<div className="flex items-baseline mb-2 flex-wrap">
										<h4 className="mb-0 text-4xl text-gray-800 dark:text-white">4.3</h4>
										<span className="ltr:ml-2 rtl:mr-2">
											<i className="ri-star-fill me-1 text-primary"></i>
											<i className="ri-star-fill me-1 text-primary"></i>
											<i className="ri-star-fill me-1 text-primary"></i>
											<i className="ri-star-fill me-1 text-primary"></i>
											<i className="ri-star-fill text-gray-200 dark:text-white/10"></i>
										</span>
									</div>
									<Link href="#!" scroll={false} className="tx-gray-500 dark:text-white/70">1,739
										Reviews</Link>
								</div>
								<div className="min-w-fit">
									<span className="text-sm">(4.3 out of 5)</span>
								</div>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between mb-1 text-sm">
									<p className="mb-0">5 Star</p>
									<span>65%</span>
								</div>
								<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
									<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "65%" }} aria-valuenow={65} aria-valuemin={0}
										aria-valuemax={100}></div>
								</div>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between mb-1 text-sm">
									<p className="mb-0">4 Star</p>
									<span>70%</span>
								</div>
								<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
									<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "70%" }} aria-valuenow={70} aria-valuemin={0}
										aria-valuemax={100}></div>
								</div>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between mb-1 text-sm">
									<p className="mb-0">3 Star</p>
									<span>60%</span>
								</div>
								<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
									<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "60%" }} aria-valuenow={60} aria-valuemin={0}
										aria-valuemax={100}></div>
								</div>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between mb-1 text-sm">
									<p className="mb-0">2 Star</p>
									<span>20%</span>
								</div>
								<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
									<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "30%" }} aria-valuenow={30} aria-valuemin={0}
										aria-valuemax={100}></div>
								</div>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between mb-1 text-sm">
									<p className="mb-0">1 Star</p>
									<span>5%</span>
								</div>
								<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
									<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "15%" }} aria-valuenow={15} aria-valuemin={0}
										aria-valuemax={100}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box orders-table">
						<div className="box-header">
							<div className="sm:flex justify-between">
								<h5 className="box-title my-auto">Products Overview</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button id="hs-dropdown-custom-icon-trigger" type="button"
										className="hs-dropdown-toggle !px-2 !py-1 ti-btn ti-btn-primary">Sort
										By<i className="ri-arrow-down-s-line align-middle"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu"
										aria-labelledby="hs-dropdown-custom-icon-trigger">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >New</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >popular</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Relevant</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-sm overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead className="">
										<tr>
											<th scope="col">Date</th>
											<th scope="col">Product Name</th>
											<th scope="col">Product Id</th>
											<th scope="col">Transaction Id</th>
											<th scope="col">Price</th>
											<th scope="col">Payment Method</th>
											<th scope="col">Status</th>
											<th scope="col">Sales</th>
											<th scope="col">Revenue</th>
											<th scope="col">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="">01-05-23</td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={"../../assets/img/ecommerce/products/13.png"}
															alt="Image Description"
															className="avatar avatar-xs rounded-sm" />
													</div>
													<div className="text-sm">Niker College Bag</div>
												</div>
											</td>
											<td>
												<span className="font-semibold">#1734-9743</span>
											</td>
											<td><Link href={"/component/invoice/invoic-edetails/"}>#14008268610</Link></td>
											<td>
												$199.99
											</td>
											<td>Online</td>
											<td>
												<span
													className="badge bg-success/10 leading-none text-success rounded-sm">Available</span>
											</td>
											<td>
												<span className="">3,903</span>
											</td>
											<td>
												<span className="">$57,899.24</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link href="#!" scroll={false}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
															View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link href="#!" scroll={false}
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
															Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link href="#!" scroll={false}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
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
										<tr>
											<td className="">02-05-23</td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={"../../assets/img/ecommerce/products/17.png"}
															alt="Image Description"
															className="avatar avatar-xs rounded-sm" />
													</div>
													<div className="text-sm">Dslr Camera <br />(50mm f/1.9 HRM Lens)</div>
												</div>
											</td>
											<td>
												<span className="font-semibold">#1234-4567</span>
											</td>
											<td><Link href={"/component/invoice/invoice-details/"}>#31408224782</Link></td>
											<td>
												$1,299.99
											</td>
											<td>Cash On Delivery</td>
											<td>
												<span
													className="badge bg-success/10 leading-none text-success rounded-sm">Available</span>
											</td>
											<td>
												<span className="">12,435</span>
											</td>
											<td>
												<span className="">$3,24,781.92</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link href="#!" scroll={false}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
															View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link href="#!" scroll={false}
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
															Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link href="#!" scroll={false}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
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
										<tr>
											<td className="">03-05-23</td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={"../../assets/img/ecommerce/products/14.png"}
															alt="Image Description"
															className="avatar avatar-xs rounded-sm" />
													</div>
													<div className="text-sm">Outdoor Bomber Jacket</div>
												</div>
											</td>
											<td>
												<span className="font-semibold">#1902-9883</span>
											</td>
											<td><Link href={"/component/invoice/invoice-details/"}>#92065567861</Link></td>
											<td>
												$99.99
											</td>
											<td>Cash On Delivery</td>
											<td>
												<span
													className="badge bg-danger/10 leading-none text-danger rounded-sm">Not
													Available</span>
											</td>
											<td>
												<span className="">5,143</span>
											</td>
											<td>
												<span className="">$76,102.76</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link href="#!" scroll={false}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
															View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link href="#!" scroll={false}
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
															Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link href="#!" scroll={false}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
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
										<tr>
											<td className="">04-05-23</td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={"../../assets/img/ecommerce/products/15.png"}
															alt="Image Description"
															className="avatar avatar-xs rounded-sm" />
													</div>
													<div className="text-sm">Light Blue Teddy</div>
												</div>
											</td>
											<td>
												<span className="font-semibold">#8745-1232</span>
											</td>
											<td><Link href={"/component/invoice/invoice-details/"}>#31652851650</Link></td>
											<td>
												$79.00
											</td>
											<td>Online</td>
											<td>
												<span
													className="badge bg-warning/10 leading-none text-warning rounded-sm">Pending</span>
											</td>
											<td>
												<span className="">7,183</span>
											</td>
											<td>
												<span className="">$78,211.83</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link href="#!" scroll={false}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
															View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link href="#!" scroll={false}
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
															Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link href="#!" scroll={false}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
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
										<tr>
											<td className="">05-05-23</td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={"../../assets/img/ecommerce/products/16.png"}
															alt="Image Description"
															className="avatar avatar-xs rounded-sm" />
													</div>
													<div className="text-sm">Orange Smart Watch (24mm)</div>
												</div>
											</td>
											<td>
												<span className="font-semibold">#1962-9033</span>
											</td>
											<td><Link href={"/component/invoice/invoice-details/"}>#23518898764</Link></td>
											<td>
												$199.99
											</td>
											<td>Cash On Delivery</td>
											<td>
												<span
													className="badge bg-info/10 leading-none text-info rounded-sm">Shipping</span>
											</td>
											<td>
												<span className="">10,287</span>
											</td>
											<td>
												<span className="">$2,32,982.99</span>
											</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link href="#!" scroll={false}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
															View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link href="#!" scroll={false}
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
															Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link href="#!" scroll={false}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn !rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
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
										<Link className="text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center gap-2 rounded-sm" href="#!" scroll={false} >
											<span aria-hidden="true">Prev</span>
											<span className="sr-only">Previous</span>
										</Link>
										<Link className="bg-primary text-white py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm"
											href="#!" scroll={false} aria-current="page">1</Link>
										<Link className="text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm"
											href="#!" scroll={false} >2</Link>
										<Link className="text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm"
											href="#!" scroll={false} >3</Link>
										<Link className="text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center gap-2 rounded-sm"
											href="#!" scroll={false} >
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

export default Ecommerce;
