"use client"
import React, { useEffect, useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { SalesValue } from "@/shared/data/charts/chartjsdata";
import UpgradePlan from "@/shared/layout-components/dashboard/UpgradePlan";
import { SessionOverview } from "@/shared/data/dashboard/analyticdata";
import { useUserContext } from "@/shared/userContext/userContext";

const Home = () => {
	const { usersData } = useUserContext()
	const users = <i className="ri-group-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const active = <i className="ri-user-follow-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const inactive = <i className="ri-user-unfollow-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const date = <i className="ri-calendar-check-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	// const expiry_icon = <i className="ri-calendar-close-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-danger/10 text-danger leading-none"></i>
	// const sales = <i className="ri-pass-valid-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>

	// const months = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov"]
	const validity = new Date()

	const [totalRecords, setTotalRecords] = useState([
		{ id: 1, class: "Total Customers", icon: users, title: "total", text: "0", color: "primary/10", color1: "success" },
		{ id: 2, class: "Paid Customers", icon: active, title: "paid", text: "0", color: "primary/10", color1: "success" },
		{ id: 3, class: "Unpaid Customers", icon: inactive, title: "unpaid", text: "0", color: "primary/10", color1: "success" },
		// { id: 3, class: "Licences", icon: sales, title: "sales", text: "0", color: "primary/10", color1: "success" },
		{ id: 4, class: "Plan Expiry", icon: date, title: "date", text: (validity.getFullYear()+1).toString(), color: "primary/10", color1: "success" },
	]);

    const [ monthlyUser, setMonthlyUser ] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [ soldLicence, setSoldLicence] = useState(0)

    useEffect(()=>{
        if(usersData.length){
            const records = [
                { title: "total", count: usersData.length}, 
                { title: "paid", count: usersData.filter(user=>user.access_code).length}, 
                { title: "unpaid", count: usersData.filter(user=>!user.access_code).length}, 
                { title: "date", count: (validity.getFullYear()+1).toString()}
            ]
			const new_data = totalRecords.map(rec=>{
				const find = records.find(rec2=> rec.title === rec2.title);
				if(find){
                    return {
                        ...rec,
                        text: rec.title === find.title ? find.count : rec.text
                    }
                }
			})
            setSoldLicence(records[1].count)
			setTotalRecords(new_data)
        }
    }, [usersData.length])
	
	return (
		<div>
			<Seo title='Dashboard' />
			<PageHeader currentpage="Dashboard" img="/assets/iconfonts/dashboard-icon/dashboard.png" activepage="Reseller" mainpage="Dashboard" />
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
							<div className="flex">
								<h5 className="box-title my-auto">Sold Licences</h5>
							</div>
						</div>
						<div className="box-body pb-0 px-0">
							<div className="sales-value relative border-b border-gray-200 dark:border-white/10 pb-5">
								<SalesValue data={{
									type: "doughnut",
									labels: ["Available Licence", "Used Licence"],
									datasets: [
										{
											data: [300, soldLicence],
											backgroundColor: ["rgb(90, 102, 241)", "rgb(96, 165, 250)"],
											borderWidth: 0,
										},
									],
								}}/>
								<div
									className="chart-circle-value circle-style absolute border-2 border-dashed border-primary -top-5 inset-0 flex justify-center items-center w-[150px] h-[150px] leading-[70px] rounded-full text-5xl mx-auto my-auto">
									<div className="text-xl font-bold text-center">
										{300 - soldLicence} <br/>
										<span>Licence Left</span>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-2 p-3">
								<div className="px-5 py-3 ltr:border-r rtl:border-l border-gray-200 dark:border-white/10">
									<div className="text-center">
										<p className="text-blue-500 dark:text-white text-2xl font-medium">{soldLicence}</p>
									</div>
									<div className="text-sm text-gray-500 dark:text-white/80 text-center font-medium">
										Your Licence
									</div>
								</div>
								<div className="px-5 py-3">
									<div className="text-center">
										<p className="text-primary dark:text-white text-2xl font-medium">
											300
										</p>
									</div>
									<div className="text-sm text-gray-500 dark:text-white/80 text-center font-medium">
										Licence Limit
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">User Overview</h5>
								{/* <div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										This year <i className="ti ti-chevron-down"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu hidden">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Today</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >This Week</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >This Month</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >This Year</Link>
									</div>
								</div> */}
							</div>
						</div>
						<div className="box-body">
							<SessionOverview data={{name: "Registered Customers", data:monthlyUser, color: "rgba(var(--color-primary))"}} />
						</div>
					</div>
				</div>
				<div className="col-span-12">
					<div className="box">
						<div className="box-header flex">
							<h5 className="box-title my-auto">Recent Customers</h5>
						</div>
						<div className="box-body p-0">
                            <p className="my-5 text-center">No Customer Registered!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


export default Home;
