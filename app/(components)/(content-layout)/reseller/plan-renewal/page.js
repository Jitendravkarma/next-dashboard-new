"use client"
import React, { useEffect, useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import { UpgradePlanPopup } from "@/shared/layout-components/dashboard/AlertBox";
import { useUserContext } from "@/shared/userContext/userContext";

const PlanRenewal = () => {
	const { user } = useUserContext()
	const [ data, setData ] = useState([]);
	const [ openRenewal, setOpenRenewal ] = useState(false);

	const compareDate = data && new Date([data[0]?.renewal_date]) < new Date();
	
	const calender = <i className="ri-calendar-check-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const status = <i className={`${compareDate ? "ri-close-line bg-danger/10 text-danger" : "ri-shield-check-line bg-success/10 text-success"} text-xl avatar w-10 h-10 rounded-full p-2.5 leading-none`}></i>
	const expiry = <i className={`${compareDate ? "ri-calendar-close-fill" : "ri-calendar-schedule-line"} text-xl avatar w-10 h-10 rounded-full p-2.5 bg-danger/10 text-danger leading-none`}></i>
	const planIcon = <i className={`${data[0]?.plan_type === "premium" ? "ri-vip-crown-line bg-secondary/10 text-secondary" : data[0]?.plan_type === "gold" ? "ri-medal-line bg-warning/10 text-warning" : "ri-bard-line bg-info/10 text-info"} text-xl avatar w-10 h-10 rounded-full p-2.5 leading-none`}></i>

	const [ numOfData, setNumOfData] = useState([
		{ id: 1, icon: calender, class: "Plan Activate", title: "validity", text: data[0]?.activate_date, color: "primary/10", color1: "success" },
		{ id: 2, icon: status, class: "Plan Status", title: "status", text: compareDate ? "Expired" : "Active", color: "primary/10", color1: "success" },
		{ id: 3, icon: expiry, class: "Plan Expiry", title: "expiry", text: data[0]?.renewal_date, color: "primary/10", color1: "success" },
		{ id: 4, icon: planIcon, class: "Plan Type", title: "type", text: data[0]?.plan_type, color: "primary/10", color1: "success" },
	])

	useEffect(()=>{
		setData(JSON.parse(localStorage.getItem("reseller")))
		setNumOfData([
			{ id: 1, icon: calender, class: "Plan Activate", title: "validity", text: data[0]?.activate_date, color: "primary/10", color1: "success" },
			{ id: 2, icon: status, class: "Plan Status", title: "status", text: compareDate ? "Expired" : "Active", color: "primary/10", color1: "success" },
			{ id: 3, icon: expiry, class: "Plan Expiry", title: "expiry", text: data[0]?.renewal_date, color: "primary/10", color1: "success" },
			{ id: 4, icon: planIcon, class: "Plan Type", title: "type", text: data[0]?.plan_type, color: "primary/10", color1: "success" },
		])
	},[data.length])

	return (
		<div>
			<Seo title='Plan Renewal' />
			<PageHeader currentpage="Plan Renewal" img="/assets/img/users/renewal.png" activepage="Reseller" mainpage="Plan Renewal" />
			<div className="grid grid-cols-12 gap-x-5">
				{numOfData.map((idx) => (
					<div className="col-span-12 md:col-span-6 xl:col-span-3" key={idx.id}>
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
												className="text-gray-800 font-semibold text-xl leading-none align-bottom dark:text-white capitalize">
												{idx.text}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}

				<div className="col-span-12">
					<h3 className="text-xl mt-2 mb-3 capitalize font-bold">Hello, {user.name || "User"}!</h3>
				</div>
				{
					compareDate &&
					<div className="col-span-12">
						<div className="box bg-gradient-to-r from-danger to-danger">
							<div className="box-body">
								<div className="sm:flex ">
									<div>
										<h2 className="text-xl text-white font-semibold">
											<i className="ri-error-warning-line"></i>{" "}
											Plan Expired
										</h2>
										<p className="text-sm text-white/80 capitalize">Your reseller's <b>{data[0]?.plan_type}</b> plan has expired. Consider renewing or upgrading it.</p>
									</div>
									<button type="button" className="ti-btn ti-btn-light my-auto ltr:ml-auto rtl:mr-auto" onClick={()=>setOpenRenewal(true)}>Renew / Upgrade</button>
								</div>
							</div>
						</div>
					</div>
				}
				<div className="col-span-12 lg:col-span-12">
					<div className="box">
						<div className="box-header flex">
							<h5 className="box-title my-auto">Plan Renewal History</h5>
						</div>
						<div className="box-body p-2">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col" className="text-center !p-[0.65rem]">Registered Name</th>
											<th scope="col" className="!p-[0.65rem]">Activation ID</th>
											<th scope="col" className="!p-[0.65rem]">Activation Date</th>
											<th scope="col" className="!p-[0.65rem]">Plan Validity</th>
											<th scope="col" className="!p-[0.65rem]">Plan Capacity</th>
											<th scope="col" className="!p-[0.65rem]">Plan Type</th>
											<th scope="col" className="!p-[0.65rem]">Plan Status</th>
											<th scope="col" className="!p-[0.65rem]">Payment Status</th>
											<th scope="col" className="!p-[0.65rem]">Renew</th>
										</tr>
									</thead>
									<tbody>
										{data.map((idx) => (
											<tr key={idx.id}>
												<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] capitalize">
													{idx.name}
												</td>
												<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] capitalize">
													{idx.secret_id}
												</td>
												<td className="!p-[0.65rem] text-sm">
													{
														idx.payment_status ?
														<span className="font-semibold">
															{idx.activate_date} {" "}
															{
																idx.expiry && 
																<span className={`badge leading-none bg-danger/10 text-danger rounded-sm animate-pulse`}>
																	Expire Soon
																</span>
															}
														</span>
														:
														<Link href={"/reseller/user-analytics"} className="!m-0 hs-tooltip-toggle relative ti-btn  !px-2 !py-1 text-xs transition-none focus:outline-none ti-btn-soft-primary">
															Set Validity
														</Link>
													}
												</td>
												<td className="!p-[0.65rem] text-sm">
													{
														<span className="font-semibold">
															{idx.renewal_date} {" "}
															{
																idx.expiry && 
																<span className={`badge leading-none bg-danger/10 text-danger rounded-sm animate-pulse`}>
																	Expire Soon
																</span>
															}
														</span>
													}
												</td>
												<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] capitalize">
													<span className={`badge leading-none 
														`}
													>
														{idx.client_limit} Clients
													</span>
												</td>
												<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] capitalize">
													<span className={`badge leading-none 
														${idx.plan_type === "premium" ? "bg-secondary/10 text-secondary" : idx.plan_type === "gold" ? "bg-warning/10 text-warning" : "bg-info/10 text-info"} rounded-sm`}
													>
														{idx.plan_type}
													</span>
												</td>
												<td className="!p-[0.65rem] text-sm">
													<span
													className={`badge leading-none ${ idx.id === 1 ? (new Date(idx.renewal_date) < new Date()) ?
														"bg-danger/10 text-danger rounded-sm" : "bg-success/10 text-success rounded-sm" : idx.payment_status ? "bg-success/10 text-success rounded-sm" : "bg-danger/10 text-danger rounded-sm"}`}>
														{idx.id === 1 ? 
														(new Date(idx.renewal_date) < new Date()) ?
														"Expired" : "Active"
														:
														idx.payment_status ? "Active" : "Inactive"}
													</span>
												</td>
												<td className="!p-[0.65rem] text-sm">
													<span
													className={`badge leading-none ${idx.payment_status ? "bg-success/10 text-success rounded-sm" : "bg-danger/10 text-danger rounded-sm"}`}>
														{idx.payment_status ? "Completed" : "Incompleted"}
													</span>
												</td>
												<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] capitalize">
													{
														idx.id !== 1 ? 
														<button className={`badge leading-none bg-warning/10 text-warning rounded-sm`}>
															Renewed
														</button>
														:
														<button className={`badge leading-none bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-sm`} onClick={()=>setOpenRenewal(true)}>

															Renew <i className="ri-loop-left-line"></i>
														</button>
													}
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

			{
				openRenewal &&
				<UpgradePlanPopup closeModel={()=>setOpenRenewal(false)}/>
			}
		</div>
	);
};


export default PlanRenewal;
