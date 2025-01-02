"use client"
import { Bitcoin, CurrencyConverter, Dash, Etherium, Iota, Neo, Ripple, SalesOverview, Transcations, crypto, traders } from "@/shared/data/dashboard/cryptodata";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
const Select = dynamic(() => import("react-select"), { ssr: false });

const Crypto = () => {

	return (
		<div>
			<Seo title={"Crypto Dashboard"} />
			<PageHeader currentpage="Crypto Dashboard" activepage="Home" mainpage="Crypto Dashboard" />

			<div className="grid grid-cols-12 gap-x-6">
				{crypto.map((idx) => (
					<div className="col-span-12 md:col-span-6 xxl:col-span-3" key={Math.random()} >
						<div className="box overflow-hidden">
							<div className="box-body">
								<div className="flex items-center">
									<div className="flex items-center">
										<div className="ltr:mr-2 rtl:ml-2">
											<span
												className="avatar avatar-sm rounded-full bg-gray-100 dark:bg-black/20 p-2">
												{idx.icon}
											</span>
										</div>
										<div>
											<div className="mb-0 font-semibold text-gray-800 dark:text-white">
												{idx.class}
											</div>
											<p className="text-sm text-gray-500 dark:text-white/70 mb-0 leading-none">
												{idx.data}</p>
										</div>
									</div>
									<div className="ltr:ml-auto rtl:mr-auto text-end my-auto">
										<h3 className="text-gray-800 dark:text-white font-medium text-xl">{idx.data1}
										</h3>
										<p className={`text-${idx.color} mb-0`}> <i className={idx.icon1}></i> {idx.text}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
				<div className="col-span-12 xxl:col-span-9">
					<SalesOverview />
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box recent-trasaction-box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Recent Transactions</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button id="hs-dropdown-custom-icon-trigger3" type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu"
										aria-labelledby="hs-dropdown-custom-icon-trigger3">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Action</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Another Action</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Something else here</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="flex flex-col crypto-trans">
								{Transcations.map((idx) => (
									<li className={`p-0 ${idx.class2} ti-list-group border-0 text-gray-800 dark:text-white`} key={Math.random()}>
										<Link href="#!" scroll={false} className="w-full">
											<div className="flex items-center justify-between">
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2">
														<img src={idx.src}
															alt="" className="avatar w-9 h-9" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm">{idx.class}</p>
														<p className={`mb-0 text-xs text-${idx.color} font-semibold`}>{idx.class1}
														</p>
													</div>
												</div>
												<div className="text-end">
													<p className="mb-0 font-semibold text-sm">
														{idx.data}
													</p>
													<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
														{idx.data1}
													</p>
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

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:col-span-5">
					<div className="box overflow-hidden">
						<div className="box-header">
							<div className="sm:flex justify-between space-y-2 sm:space-y-0">
								<h5 className="box-title my-auto">Your Assets</h5>
								<div className="block ltr:ml-auto rtl:mr-auto my-auto"><button type="button"
									className="ti-btn ti-btn-primary ltr:!mr-2 rtl:!ml-2 !p-1 !px-3 !m-0">Add
									New</button>
									<button type="button"
										className="ti-btn !m-0 rounded-sm !p-1 !px-3 !border !border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:!border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:!border-white/10 dark:hover:!border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										View All</button>
								</div>
							</div>
						</div>
						<div className="box-body p-0 activity-table">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead className="">
										<tr>
											<th scope="col" className="min-w-[200px]">Coin</th>
											<th scope="col">Total</th>
											<th scope="col">Holding</th>
											<th scope="col">Status</th>
											<th scope="col">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="leading-none">
														<span
															className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 p-2 bg-gray-100 dark:bg-black/20">
															<img src={"../../assets/img/crypto-currencies/regular/Bitcoin.svg"}
																alt="" />
														</span>
													</div>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Currency</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">
															Bitcoin</p>
													</div>
												</div>
											</td>
											<td>
												$1,11,290
											</td>
											<td>
												1.00089BTC
											</td>
											<td>
												<span className="text-success">+0.5%</span>
											</td>
											<td className="border-top-dashed pe-4 flex gap-1">
												<Link href="#!" scroll={false}
													className="ti-btn ti-btn-secondary !py-1 !px-3 !m-1">Buy</Link>
												<Link href="#!" scroll={false}
													className="ti-btn ti-btn-primary !py-1 !px-3 !m-1">Sell</Link>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="leading-none">
														<span
															className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 p-2 bg-gray-100 dark:bg-black/20">
															<img src={"../../assets/img/crypto-currencies/regular/Ethereum.svg"}
																alt="" />
														</span>
													</div>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Currency</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">
															Ethereum</p>
													</div>
												</div>
											</td>
											<td>
												$1,01,785
											</td>
											<td>
												0.00185ETH
											</td>
											<td>
												<span className="text-success">+10.5%</span>
											</td>
											<td className="border-top-dashed pe-4 flex gap-1">
												<Link href="#!" scroll={false}
													className="ti-btn ti-btn-secondary !py-1 !px-3 !m-1">Buy</Link>
												<Link href="#!" scroll={false}
													className="ti-btn ti-btn-primary !py-1 !px-3 !m-1">Sell</Link>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="leading-none">
														<span
															className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 p-2 bg-gray-100 dark:bg-black/20">
															<img src={"../../assets/img/crypto-currencies/regular/litecoin.svg"}
																alt="" />
														</span>
													</div>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Currency</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">
															Litecoin</p>
													</div>
												</div>
											</td>
											<td>
												$1,00,854
											</td>
											<td>
												1.0145LTC
											</td>
											<td>
												<span className="text-danger">-0.05%</span>
											</td>
											<td className="border-top-dashed pe-4 flex gap-1">
												<Link href="#!" scroll={false}
													className="ti-btn ti-btn-secondary !py-1 !px-3 !m-1">Buy</Link>
												<Link href="#!" scroll={false}
													className="ti-btn ti-btn-primary !py-1 !px-3 !m-1">Sell</Link>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="leading-none">
														<span
															className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 p-2 bg-gray-100 dark:bg-black/20">
															<img src={"../../assets/img/crypto-currencies/regular/Dash.svg"}
																alt="" />
														</span>
													</div>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Currency</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">
															Dash</p>
													</div>
												</div>
											</td>
											<td>
												$1,01,214
											</td>
											<td>
												0.0156DSH
											</td>
											<td>
												<span className="text-success">+5.89%</span>
											</td>
											<td className="border-top-dashed pe-4 flex gap-1">
												<Link href="#!" scroll={false}
													className="ti-btn ti-btn-secondary !py-1 !px-3 !m-1">Buy</Link>
												<Link href="#!" scroll={false}
													className="ti-btn ti-btn-primary !py-1 !px-3 !m-1">Sell</Link>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="leading-none">
														<span
															className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 p-2 bg-gray-100 dark:bg-black/20">
															<img src={"../../assets/img/crypto-currencies/regular/Golem.svg"}
																alt="" />
														</span>
													</div>
													<div className="items-center">
														<span
															className="text-xs text-gray-500 dark:text-white/70">Currency</span>
														<p className="text-sm mb-0 text-gray-800 dark:text-white">
															Golem</p>
													</div>
												</div>
											</td>
											<td>
												$1,00,985
											</td>
											<td>
												0.011125GLM
											</td>
											<td>
												<span className="text-success">+11.07%</span>
											</td>
											<td className="border-top-dashed pe-4 flex gap-1">
												<Link href="#!" scroll={false}
													className="ti-btn ti-btn-secondary !py-1 !px-3 !m-1">Buy</Link>
												<Link href="#!" scroll={false}
													className="ti-btn ti-btn-primary !py-1 !px-3 !m-1">Sell</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Top Traders</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										View All <i className="ti ti-chevron-down"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu hidden">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Download</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Import</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Export</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="flex flex-col traders-list">
								{traders.map((idx) => (
									<li className={`${idx.class2} p-0 ti-list-group border-0 text-gray-800 dark:text-white`} key={Math.random()}>
										<div className="sm:flex items-center w-full">
											<div className="ltr:mr-2 rtl:ml-2 leading-none min-w-[40px]">
												<img src={idx.src} alt=""
													className="avatar avatar-sm rounded-full bg-gray-100 dark:bg-black/20" />
											</div>
											<div className="sm:flex items-center justify-between w-full">
												<div>
													<p className="mb-0 font-semibold text-sm">{idx.class}</p>
													<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">{idx.class1}</p>
												</div>
												<div className="sm:text-end sm:ltr:ml-auto sm:rtl:mr-auto">
													<p className="mb-0 font-semibold text-sm text-success">
														{idx.data} <span className="">{idx.data2}</span>
													</p>
													<p className="mb-0 opacity-70 text-gray-500 dark:text-white/70 text-xs">
														{idx.data1}
													</p>
												</div>
											</div>
										</div>
									</li>
								))}

							</ul>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<div className="sm:flex justify-between">
								<h5 className="box-title my-auto">Currency Converter</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button id="hs-dropdown-custom-icon-trigger" type="button"
										className="!m-0 hs-dropdown-toggle !px-2 !py-1 ti-btn ti-btn-primary">USD
										($)<i className="ri-arrow-down-s-line align-middle"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu"
										aria-labelledby="hs-dropdown-custom-icon-trigger">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >USD ($)</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Euro (€)</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >FJD ($)</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >INR (₹)</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body p-0 currency-converter">
							<div
								className="sm:flex items-center justify-between px-4 py-3 border-b border-dashed border-gray-200 dark:border-white/10 flex-wrap">
								<p className="text-gray-500 dark:text-white/70 mb-0">Bal Available:<span
									className="text-primary text-sm ltr:ml-1 rtl:ml-1">$25,390.00</span></p>
								<p className="text-gray-500 dark:text-white/70 mb-0">1 USD:<span
									className="text-primary text-sm ltr:ml-1 rtl:ml-1"> ~ 0.000158BTC</span></p>
							</div>
							<div className="p-4" id="buy-style-1">
								<div className="mb-5">
									<div className="sm:flex rounded-sm space-y-2 sm:space-y-0">
										<span
											className="py-2 px-3 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm sm:w-auto ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm dark:bg-black/20 dark:border-white/10 dark:text-white/70">Pay</span>
										<input type="number"
											className="ti-form-input rounded-none -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm relative focus:z-10"
											defaultValue="0.0329" placeholder="Amount of coins" />
										<div className="sm:inline-flex items-center min-w-fit  sm:ltr:rounded-r-sm sm:ltr:rounded-l-none sm:rtl:rounded-l-sm sm:rtl:rounded-r-none rounded-sm border sm:ltr:border-l-0 sm:rtl:border-r-0 border-gray-200 bg-gray-50 dark:bg-bodybg dark:border-white/10">

											<Select className="billing-search" options={CurrencyConverter} classNamePrefix="react-select" placeholder='BTC' />

										</div>
									</div>
									<Link href="#!" scroll={false} aria-label="anchor"
										className="!flex items-center !justify-center ti-btn p-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] bg-secondary text-white hover:bg-secondary focus:ring-0 focus:ring-secondary dark:focus:ring-offset-white/10 !mx-auto !my-2"><i
											className="ti ti-arrows-down-up"></i></Link>
									<div className="sm:flex rounded-sm space-y-2 sm:space-y-0">
										<span
											className="py-2 px-3 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm sm:w-auto ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm dark:bg-black/20 dark:border-white/10 dark:text-white/70">Buy</span>
										<input type="number"
											className="ti-form-input rounded-none -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm relative focus:z-10"
											defaultValue="0.00378" placeholder="Amount you get" />
										<div className="sm:inline-flex items-center min-w-fit  sm:ltr:rounded-r-sm sm:ltr:rounded-l-none sm:rtl:rounded-l-sm sm:rtl:rounded-r-none rounded-sm border sm:ltr:border-l-0 sm:rtl:border-r-0 border-gray-200 bg-gray-50 dark:bg-bodybg dark:border-white/10">
											<Select className=" billing-search" options={CurrencyConverter} classNamePrefix="react-select" placeholder='BTC' />
										</div>
									</div>
								</div>
								<div className="p-3 rounded-sm bg-gray-100 dark:bg-black/20 mb-4 overflow-auto">
									<div className="sm:grid grid-cols-12 gap-x-6">
										<div className="col-span-6 mb-2">
											<span>Transaction Fee</span>
										</div>
										<div className="col-span-6 mb-2">
											<span className="sm:ltr:float-right sm:rtl:float-left">$2.05</span>
										</div>
										<div className="col-span-6 mb-2">
											<span>Other Charges</span>
										</div>
										<div className="col-span-6 mb-2">
											<span className="sm:ltr:float-right sm:rtl:float-left">$7.73</span>
										</div>
										<div className="col-span-6">
											<span className="font-semibold text-base">Total</span>
										</div>
										<div className="col-span-6">
											<span
												className="sm:ltr:float-right sm:rtl:float-left font-semibold text-base">$34,798.00</span>
										</div>
									</div>
								</div>
								<Link href="#!" scroll={false} className="ti-btn ti-btn-primary !m-0 w-full">Exchange<i
									className="ti ti-arrow-narrow-right align-middle"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="sm:flex justify-between">
								<h5 className="box-title my-auto">Crypto Currencies Market Trends</h5>
								<div className="inline-flex rounded-md shadow-sm">
									<button type="button"
										className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-primary">
										1D
									</button>
									<button type="button"
										className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-soft-primary">
										1W
									</button>
									<button type="button"
										className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-soft-primary">
										1M
									</button>
									<button type="button"
										className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-soft-primary">
										3M
									</button>
									<button type="button"
										className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-soft-primary">
										6M
									</button>
									<button type="button"
										className="ti-btn-group !text-xs !border-0 !py-2 !px-3 ti-btn-soft-primary">
										1Y
									</button>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-sm overflow-auto crypto-table">
								<table className="ti-custom-table ti-custom-table-head">
									<thead className="">
										<tr>
											<th scope="col">S.No</th>
											<th scope="col">Name</th>
											<th scope="col">Symbol</th>
											<th scope="col">Price</th>
											<th scope="col">Market Cap</th>
											<th scope="col">Price Graph</th>
											<th scope="col">Volume</th>
											<th scope="col">Price Change</th>
											<th scope="col">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Bitcoin</td>
											<td>
												<div className="leading-none flex items-center">
													<img className="avatar w-5 h-5 rounded-full"
														src={"../../assets/img/crypto-currencies/regular/Bitcoin.svg"}
														alt="" /> - BTC
												</div>
											</td>
											<td>
												$16,839.10
											</td>
											<td>
												324.01B
											</td>
											<td>
												<Bitcoin />
											</td>
											<td>
												14,674,311,168
											</td>
											<td>
												<span className="text-success">0.36%<i
													className="ti ti-arrow-big-up-lines ltr:ml-1 rtl:mr-1 inline-flex"></i></span>
											</td>
											<td>
												<Link href="#!" scroll={false} className="ti-btn !my-0 ti-btn-soft-primary py-2 px-3 m-0 ltr:mr-2 rtl:ml-2">Buy</Link>
												<Link href="#!" scroll={false} className="ti-btn !my-0 ti-btn-primary py-2 px-3 m-0">Trade</Link>
											</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Etherium</td>
											<td>
												<div className="leading-none flex items-center">
													<img className="avatar  w-5 h-5 rounded-full"
														src={"../../assets/img/crypto-currencies/regular/Ethereum.svg"}
														alt="" />- ETH
												</div>
											</td>
											<td>
												1,217.96
											</td>
											<td>
												$149,316,232,699
											</td>
											<td>
												<Etherium />
											</td>
											<td>
												$4,758,554,801
											</td>
											<td>
												<span className="text-success">0.30% <i
													className="ti ti-arrow-big-up-lines ltr:ml-1 rtl:mr-1"></i></span>
											</td>
											<td>
												<Link href="#!" scroll={false} className="ti-btn !my-0 ti-btn-soft-primary py-2 px-3 m-0 ltr:mr-2 rtl:ml-2">Buy</Link>
												<Link href="#!" scroll={false} className="ti-btn !my-0 ti-btn-primary py-2 px-3 m-0">Trade</Link>
											</td>
										</tr>
										<tr>
											<td>3</td>
											<td>Dash</td>
											<td>
												<div className="leading-none flex items-center">
													<img className="avatar  w-5 h-5 rounded-full"
														src={"../../assets/img/crypto-currencies/regular/Dash.svg"}
														alt="" /> - DASH
												</div>
											</td>
											<td>
												$43.49
											</td>
											<td>
												$480,799,847
											</td>
											<td>
												<Dash />
											</td>
											<td>
												$52,626,563
											</td>
											<td>
												<span className="text-success">0.45% <i
													className="ti ti-arrow-big-up-lines ltr:ml-1 rtl:mr-1"></i></span>
											</td>
											<td>
												<Link href="#!" scroll={false} className="ti-btn !my-0 ti-btn-soft-primary py-2 px-3 m-0 ltr:mr-2 rtl:ml-2">Buy</Link>
												<Link href="#!" scroll={false} className="ti-btn !my-0 ti-btn-primary py-2 px-3 m-0">Trade</Link>
											</td>
										</tr>
										<tr>
											<td>4</td>
											<td>Ripple</td>
											<td>
												<div className="leading-none flex items-center">
													<img className="avatar  w-5 h-5 rounded-full"
														src={"../../assets/img/crypto-currencies/regular/Ripple.svg"}
														alt="" />- XRP
												</div>
											</td>
											<td>
												$0.3531
											</td>
											<td>
												$17,791,969,465
											</td>
											<td>
												<Ripple />
											</td>
											<td>
												$511,598,941
											</td>
											<td>
												<span className="text-success">0.97% <i
													className="ti ti-arrow-big-up-lines ltr:ml-1 rtl:mr-1"></i></span>
											</td>
											<td>
												<Link href="#!" scroll={false} className="ti-btn !my-0 ti-btn-soft-primary py-2 px-3 m-0 ltr:mr-2 rtl:ml-2">Buy</Link>
												<Link href="#!" scroll={false} className="ti-btn !my-0 ti-btn-primary py-2 px-3 m-0">Trade</Link>
											</td>
										</tr>
										<tr>
											<td>5</td>
											<td>Iota</td>
											<td>
												<div className="leading-none flex items-center">
													<img className="avatar  w-5 h-5 rounded-full"
														src={"../../assets/img/crypto-currencies/regular/IOTA.svg"}
														alt="" />- IOTA
												</div>
											</td>
											<td>
												$0.169741
											</td>
											<td>
												$471,800,600
											</td>
											<td>
												<Iota />
											</td>
											<td>
												$5,524,385
											</td>
											<td>
												<span className="text-success">0.93% <i
													className="ti ti-arrow-big-up-lines ltr:ml-1 rtl:mr-1"></i></span>
											</td>
											<td>
												<Link href="#!" scroll={false} className="ti-btn !my-0 ti-btn-soft-primary py-2 px-3 m-0 ltr:mr-2 rtl:ml-2">Buy</Link>
												<Link href="#!" scroll={false} className="ti-btn !my-0 ti-btn-primary py-2 px-3 m-0">Trade</Link>
											</td>
										</tr>
										<tr>
											<td>6</td>
											<td>Neo</td>
											<td>
												<div className="leading-none flex items-center">
													<img className="avatar  w-5 h-5 rounded-full"
														src={"../../assets/img/crypto-currencies/regular/Neo.svg"}
														alt="" /> - NEO
												</div>
											</td>
											<td>
												$6.43
											</td>
											<td>
												$453,601,667
											</td>
											<td>
												<Neo />
											</td>
											<td>
												$12,904,320
											</td>
											<td>
												<span className="text-danger">0.49% <i
													className="ti ti-arrow-big-down-lines ltr:ml-1 rtl:mr-1"></i></span>
											</td>
											<td>
												<Link href="#!" scroll={false} className="ti-btn !my-0 ti-btn-soft-primary py-2 px-3 m-0 ltr:mr-2 rtl:ml-2">Buy</Link>
												<Link href="#!" scroll={false} className="ti-btn !my-0 ti-btn-primary py-2 px-3 m-0">Trade</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>

						</div>
						<div className="box-footer">
							<div className="flex items-center">
								<div className="">
									showing 5 Entries <i
										className="ri-arrow-right-line ltr:ml-2 rtl:mr-2 font-semibold"></i>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<nav className="flex justify-center items-center space-x-2 rtl:space-x-reverse">
										<Link className="text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center gap-2 rounded-sm"
											href="#!" scroll={false} >
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


export default Crypto;
