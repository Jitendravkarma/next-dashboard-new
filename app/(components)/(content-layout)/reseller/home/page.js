"use client"
import React, { useEffect, useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import { SalesValue } from "@/shared/data/charts/chartjsdata";
import UpgradePlan from "@/shared/layout-components/dashboard/UpgradePlan";
import { AudienceOverview, SessionOverview } from "@/shared/data/dashboard/analyticdata";

const Home = () => {
	const localData = [
		{
		  "id": 1,
		  "name": "Kuldeep Verma",
		  "email": "kuldeepverma@gmail.com",
		  "phone": "+91 70583-43210",
		  "payment_status": true,
		  "validity": "10 Mar 2026",
		  "expiry": false
		},
		{
		  "id": 2,
		  "name": "Jituraj Karma",
		  "email": "jiturajkarma2020@gmail.com",
		  "phone": "+91 98765-43210",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false
		},
		{
		  "id": 3,
		  "name": "Rituraj Gupta",
		  "email": "riturajgupta@gmail.com",
		  "phone": "+91 98765-34838",
		  "payment_status": true,
		  "validity": "28 Nov 2026",
		  "expiry": false
		},
		{
		  "id": 4,
		  "name": "Suman Rao",
		  "email": "sumanrao@gmail.com",
		  "phone": "+91 98765-43210",
		  "payment_status": true,
		  "validity": "15 Jan 2025",
		  "expiry": true
		},
		{
		  "id": 5,
		  "name": "Ravi Kumar",
		  "email": "ravikumar@yahoo.com",
		  "phone": "+91 90876-54321",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false
		},
		{
		  "id": 6,
		  "name": "Anita Sharma",
		  "email": "anitasharma@outlook.com",
		  "phone": "+91 81234-56789",
		  "payment_status": true,
		  "validity": "05 Oct 2026",
		  "expiry": false
		},
		{
		  "id": 7,
		  "name": "Manish Gupta",
		  "email": "manishgupta@gmail.com",
		  "phone": "+91 96543-21098",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false
		},
		{
		  "id": 8,
		  "name": "Pooja Desai",
		  "email": "poojadesai@rediffmail.com",
		  "phone": "+91 75642-39847",
		  "payment_status": true,
		  "validity": "22 Apr 2026",
		  "expiry": false
		},
		{
		  "id": 9,
		  "name": "Vikram Singh",
		  "email": "vikramsingh@gmail.com",
		  "phone": "+91 86573-49320",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false
		},
		{
		  "id": 10,
		  "name": "Neha Agarwal",
		  "email": "nehaagarwal@gmail.com",
		  "phone": "+91 93485-67021",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false
		},
		{
		  "id": 11,
		  "name": "Rashmi Patel",
		  "email": "rashmipatel@live.com",
		  "phone": "+91 70321-65432",
		  "payment_status": true,
		  "validity": "07 May 2026",
		  "expiry": false
		},
		{
		  "id": 12,
		  "name": "Ajay Singh",
		  "email": "ajaysingh@outlook.com",
		  "phone": "+91 97865-43210",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false
		},
		{
		  "id": 13,
		  "name": "Sneha Mehta",
		  "email": "snehamehta@hotmail.com",
		  "phone": "+91 87563-21987",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false
		},
		{
		  "id": 14,
		  "name": "Harish Joshi",
		  "email": "harishjosh@gmail.com",
		  "phone": "+91 92011-56789",
		  "payment_status": true,
		  "validity": "10 Mar 2025",
		  "expiry": false
		},
		{
		  "id": 15,
		  "name": "Priya Bhatia",
		  "email": "priyabhatia@yahoo.com",
		  "phone": "+91 87465-32109",
		  "payment_status": true,
		  "validity": "02 Feb 2025",
		  "expiry": true
		},
		{
		  "id": 16,
		  "name": "Kunal Soni",
		  "email": "kunalsoni@gmail.com",
		  "phone": "+91 78124-68945",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false
		},
		{
		  "id": 17,
		  "name": "Meena Rao",
		  "email": "meenarao@rediffmail.com",
		  "phone": "+91 89573-32145",
		  "payment_status": true,
		  "validity": "25 Jan 2025",
		  "expiry": true
		},
		{
		  "id": 18,
		  "name": "Amit Bhardwaj",
		  "email": "amitbhardwaj@hotmail.com",
		  "phone": "+91 94567-89230",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false
		},
		{
		  "id": 19,
		  "name": "Suman Patil",
		  "email": "sumanpatil@rediffmail.com",
		  "phone": "+91 79864-51230",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false
		},
		{
		  "id": 20,
		  "name": "Tushar Kumar",
		  "email": "tusharkumar@gmail.com",
		  "phone": "+91 90876-53210",
		  "payment_status": true,
		  "validity": "15 Nov 2025",
		  "expiry": false
		},
		{
		  "id": 21,
		  "name": "Simran Kaur",
		  "email": "simrankaur@outlook.com",
		  "phone": "+91 87125-98430",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false
		},
		{
		  "id": 22,
		  "name": "Rohit Mehra",
		  "email": "rohitmehra@live.com",
		  "phone": "+91 99999-12345",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false
		},
		{
		  "id": 23,
		  "name": "Geeta Thakur",
		  "email": "geetathakur@yahoo.com",
		  "phone": "+91 87756-32498",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false
		},
		{
		  "id": 24,
		  "name": "Rajeev Malik",
		  "email": "rajeevmalik@gmail.com",
		  "phone": "+91 82456-97011",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false
		},
		{
		  "id": 25,
		  "name": "Anjali Reddy",
		  "email": "anjalireddy@outlook.com",
		  "phone": "+91 98564-20391",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false
		}
	]

	const resellerData = [
		{
			"id": 1,
			"secret_id": 15412,
			"name": "Kuldeep Verma",
			"email": "kuldeepverma@gmail.com",
			"reseller": true,
			"phone": "+91 70583-43210",
			"plan_type": "premium",
			"client_limit": 300,
			"payment_status": true,
			"activate_date": "16 Jan 2024",
			"renewal_date": "16 Jan 2025",
			"expired": false
		},
		{
			"id": 2,
			"secret_id": 15412,
			"name": "Kuldeep Verma",
			"email": "kuldeepverma@gmail.com",
			"reseller": true,
			"phone": "+91 70583-43210",
			"plan_type": "gold",
			"client_limit": 200,
			"payment_status": true,
			"activate_date": "25 June 2023",
			"renewal_date": "25 June 2024",
			"expired": false
		},
		{
			"id": 3,
			"secret_id": 15412,
			"name": "Kuldeep Verma",
			"email": "kuldeepverma@gmail.com",
			"reseller": true,
			"phone": "+91 70583-43210",
			"plan_type": "basic",
			"client_limit": 100,
			"payment_status": true,
			"activate_date": "10 May 2022",
			"renewal_date": "10 May 2023",
			"expired": true
		}
	]

	const users = <i className="ri-group-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const clients = <i className="ri-user-follow-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const date = <i className="ri-calendar-check-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const expiry_icon = <i className="ri-calendar-close-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-danger/10 text-danger leading-none"></i>
	const sales = <i className="ri-store-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>

	const months = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov"]
	const validity = new Date()
	const validityDate = (cur=0, expiry)=> `${validity.getDate()+cur} ${months[validity.getMonth()+expiry]} ${validity.getFullYear()}`

	const [totalRecords, setTotalRecords] = useState([
		{ id: 1, class: "Registered Users", icon: users, title: "total", text: "0", color: "primary/10", color1: "success" },
		{ id: 2, class: "Total Clients", icon: clients, title: "clients", text: "0", color: "primary/10", color1: "success" },
		{ id: 3, class: "Sold Service", icon: sales, title: "sales", text: "0", color: "primary/10", color1: "success" },
		{ id: 4, class: "Plan Expiry", icon: date, title: "date", text: "Expired", color: "primary/10", color1: "success" },
	]);

	const [ reseller, setReseller ] = useState([]);
	const [ data, setData ] = useState([]);

	useEffect(()=>{
		let getCustomers = JSON.parse(localStorage.getItem("customers"));
		let getReseller = JSON.parse(localStorage.getItem("reseller"));
		if(getCustomers){
			const paid = getCustomers.filter(dt=>dt.payment_status).length
			const checkDate = (new Date(getReseller && getReseller[0]?.renewal_date) < validity);
			const totalCount = [
				{title: "total", count: getCustomers.length},
				{title: "clients", count: getCustomers.filter(dt=>dt.payment_status).length},
				{title: "sales", count: `${paid}/100`},
				{title: "date", count: checkDate ? "Expired" : reseller[0]?.renewal_date}
			]
			setData(getCustomers.slice(0, 6))
			const newData = totalRecords.map(obj=>{
				const find = totalCount.find(dt=>dt.title === obj.title)
				if(find){
					return {...obj, icon: (find.title === "date") ? checkDate ? expiry_icon : date : obj.icon, text: find.title === obj.title ? find.count : 0}
				}
				else {
					return obj
				}
			})
			setTotalRecords(newData)
		}
		else {
			localStorage.setItem("customers", JSON.stringify(localData))
			JSON.parse(localStorage.getItem("customers"));
		}
		if(getReseller){
			setReseller(getReseller)
		}
		else {
			localStorage.setItem("reseller", JSON.stringify(resellerData))
		}
	},[data.length])

	return (
		<div>
			<Seo title='Dashboard' />
			<PageHeader currentpage="Dashboard" img="/assets/iconfonts/dashboard-icon/dashboard.png" activepage="Home" mainpage="Dashboard" />
			<div className="grid grid-cols-12 gap-x-5">
				{totalRecords.map((idx) => (
					<div className="col-span-12 md:col-span-6 xl:col-span-3" key={Math.random()}>
						<div className="box">
							<div className="box-body">
								<div className="flex space-x-3 rtl:space-x-reverse">
									<div className="flex items-center justify-center ecommerce-icon px-0">
										<span>
											{idx.icon}
										</span>
									</div>
									<div className="flex flex-col justify-center">
										<div className="mb-2">{idx.class}</div>
										<div className="text-gray-500 dark:text-white/70 mb-1 text-xs">
											<span
												className="text-gray-800 font-semibold text-xl leading-none align-bottom dark:text-white">
												{idx.title !== "date" ? idx.text : idx.text?.toLocaleString('en-US')} {" "}
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
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">User Overview</h5>
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
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Sales Overview</h5>
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
												className="text-base text-gray-800 dark:text-white font-medium ltr:mr-2 rtl:ml-2 pointer-events-none">Total Sales</span>
										</span>
									</p>
								</li>
								<li>
									<p className="inline-flex items-center">
										<span
											className="block w-3 h-3 rounded-full ltr:mr-2 rtl:ml-2 border-4 border-gray-200 pointer-events-none"></span>
										<span className="flex items-center">
											<span
												className="text-base text-gray-800 dark:text-white font-medium ltr:mr-2 rtl:ml-2 pointer-events-none">Total Revenue</span>
										</span>
									</p>
								</li>
							</ul>
							<AudienceOverview />
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-6 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Sold Services</h5>
							</div>
						</div>
						<div className="box-body pb-0 px-0">
							<div className="sales-value relative border-b border-gray-200 dark:border-white/10 pb-5">
								<SalesValue />
								<div
									className="chart-circle-value circle-style absolute border-2 border-dashed border-primary -top-5 inset-0 flex justify-center items-center w-[150px] h-[150px] leading-[70px] rounded-full text-5xl mx-auto my-auto">
									<div className="text-xl font-bold text-center">
										55 <br/>
										<span>Sales Left</span>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-2 p-3">
								<div className="px-5 py-3 ltr:border-r rtl:border-l border-gray-200 dark:border-white/10">
									<div className="text-center">
										<p className="text-blue-500 dark:text-white text-2xl font-medium">45</p>
									</div>
									<div className="text-sm text-gray-500 dark:text-white/80 text-center font-medium">
										Your Sales
									</div>
								</div>
								<div className="px-5 py-3">
									<div className="text-center">
										<p className="text-primary dark:text-white text-2xl font-medium">
											100
										</p>
									</div>
									<div className="text-sm text-gray-500 dark:text-white/80 text-center font-medium">
										Sales Limit
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-12 xxl:col-span-8">
					<div className="box">
						<div className="box-header flex">
							<h5 className="box-title my-auto">Recent Customers</h5>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col" className="!p-[0.65rem]"></th>
											<th scope="col" className="text-center !p-[0.65rem]">Customer Name</th>
											<th scope="col" className="!p-[0.65rem]">Payment Status</th>
											<th scope="col" className="!p-[0.65rem]">Validity</th>
										</tr>
									</thead>
									<tbody>
										{data.map((idx) => (
											<tr key={Math.random()}>
												<td className="!p-[0.65rem] truncate">
													<Link href={"/reseller/user-analytics"} title={idx.name}>
														{
															idx.payment_status ? 
															<i className="ri-user-follow-line text-xl avatar w-10 h-10 bg-primary/10 text-primary leading-none avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-bodybg"></i>
															:
															<i className="ri-user-unfollow-line text-xl avatar w-10 h-10 bg-primary/10 text-danger leading-none avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-bodybg"></i>
														}
													</Link>
												</td>
												<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] capitalize">
													{idx.name}
												</td>
												<td className="!p-[0.65rem] text-sm">
													<span
													className={`badge leading-none ${idx.payment_status ? "bg-success/10 text-success rounded-sm" : "bg-danger/10 text-danger rounded-sm"}`}>
														{idx.payment_status ? "Paid" : "Unpaid"}
													</span>
												</td>
												<td className="!p-[0.65rem] text-sm">
													{
														idx.payment_status ?
														<span className="font-semibold">
															{idx.validity} {" "}
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
