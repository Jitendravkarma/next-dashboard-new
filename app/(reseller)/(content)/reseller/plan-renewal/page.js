"use client"
import React, { useCallback, useEffect, useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { UpgradePlanPopup } from "@/shared/layout-components/dashboard/AlertBox";
import { useUserContext } from "@/shared/userContext/userContext";
import { generateLicence } from "@/shared/apis/api";

const PlanRenewal = () => {
    const { user } = useUserContext()

	const dashboard_data = {
		user_id: 5,
        name: "kripal",
        email: "kripal@gmail.com",
        phone: "+917985465465",
        country: "india",
        role: "reseller",
        access_code: "kri-465-ind-id5",
        purchase_date: "2025",
        plan_date: "2025",
        validity: "2026",
        expired: false,
		licence_codes: [
            // {
            //     user_id: null,
            //     name: "",
            //     email: "",
            //     phone: "",
            //     country: "india",
            //     role: "user",
            //     access_code: "7ty6-93sf-102a-p9k1",
            //     purchase_date: "",
            //     plan_date: "",
            //     validity: "",
            //     expired: false
            // }
        ]
	}
	
	const [ openRenewal, setOpenRenewal ] = useState(false);

	const compareDate = dashboard_data && new Date([dashboard_data.validity]) < new Date();
	
	const calender = <i className="ri-calendar-check-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const status = <i className={`${compareDate ? "ri-close-line bg-danger/10 text-danger" : "ri-shield-check-line bg-success/10 text-success"} text-xl avatar w-10 h-10 rounded-full p-2.5 leading-none`}></i>
	const expiry = <i className={`${dashboard_data.expired ? "ri-calendar-close-fill" : "ri-calendar-schedule-line"} text-xl avatar w-10 h-10 rounded-full p-2.5 bg-danger/10 text-danger leading-none`}></i>
	const planIcon = <i className={`${dashboard_data.role === "reseller" ? "ri-vip-crown-line bg-secondary/10 text-secondary" : dashboard_data.role === "white" ? "ri-medal-line bg-warning/10 text-warning" : "ri-bard-line bg-info/10 text-info"} text-xl avatar w-10 h-10 rounded-full p-2.5 leading-none`}></i>

	const [ numOfData, setNumOfData] = useState([
		{ id: 1, icon: calender, class: "Plan Activate", title: "validity", text: dashboard_data.plan_date, color: "primary/10", color1: "success" },
		{ id: 2, icon: status, class: "Plan Status", title: "status", text: compareDate ? "Expired" : "Active", color: "primary/10", color1: "success" },
		{ id: 3, icon: expiry, class: "Plan Expiry", title: "expiry", text: dashboard_data.validity, color: "primary/10", color1: "success" },
		{ id: 4, icon: planIcon, class: "Plan Type", title: "type", text: dashboard_data.role, color: "primary/10", color1: "success" },
	])

	const [ isGenerating, setIsGenerating ] = useState(false)
	const [ licences, setLicences ] = useState([])

	const updateNumOfData = useCallback((dataCount)=>{
		const newData = numOfData.map(obj=>{
			const find = dataCount.find(dt=>dt.title === obj.title)
			if(find){
				return {...obj, text: find.title === obj.title ? find.num : 0}
			}
		})
		// setNumOfData(newData)
	}, [])

    const copyLicenceCode = (txt)=>{
        const textArea = document.createElement('textarea');
        textArea.value = txt;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('License code copied to clipboard!');
    }

	const generateLicenceCode = async ()=>{
		try {
			setIsGenerating(true)
			const collectLicence = []
			const generateCode = await generateLicence()
			const access_code = generateCode.data.data
			if(access_code){
				collectLicence.push({licence_code: access_code, allocated: false, email: user.email, available: true})
				const getLicences = JSON.parse(localStorage.getItem("licences"));
				if(getLicences && getLicences?.length){
					collectLicence.push(...getLicences)
				}
				else {
					localStorage.setItem("licences", JSON.stringify(collectLicence))
				}
				localStorage.setItem("licences", JSON.stringify(collectLicence))
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsGenerating(false)
		}
	}

	useEffect(()=>{
		const getLicences = JSON.parse(localStorage.getItem("licences")) || [];
		setLicences(getLicences)
		setNumOfData([
			{ id: 1, icon: calender, class: "Plan Activate", title: "validity", text: dashboard_data.plan_date, color: "primary/10", color1: "success" },
			{ id: 2, icon: status, class: "Plan Status", title: "status", text: dashboard_data.expired ? "Inactive" : "Active", color: "primary/10", color1: "success" },
			{ id: 3, icon: expiry, class: "Plan Expiry", title: "expiry", text: dashboard_data.validity, color: "primary/10", color1: "success" },
			{ id: 4, icon: planIcon, class: "Plan Type", title: "type", text: dashboard_data.role, color: "primary/10", color1: "success" },
		])
	},[isGenerating])

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
					<h3 className="text-xl mt-2 mb-3 capitalize font-bold">Plan Renewal History</h3>
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
										<p className="text-sm text-white/80 capitalize">Your reseller's <b>{dashboard_data.role}</b> plan has expired. Consider renewing or upgrading it.</p>
									</div>
									<button type="button" className="ti-btn ti-btn-light my-auto ltr:ml-auto rtl:mr-auto" onClick={()=>setOpenRenewal(true)}>Renew / Upgrade</button>
								</div>
							</div>
						</div>
					</div>
				}
				<div className="col-span-12">
					<div className="box">
						{/* <div className="box-header flex">
							<h5 className="box-title my-auto">Plan Renewal History</h5>
						</div> */}
						<div className="box-body p-5">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col" className="text-center !p-[0.65rem]">Registered Name</th>
											<th scope="col" className="!p-[0.65rem]">Activation Year</th>
											<th scope="col" className="!p-[0.65rem]">Plan Validity</th>
											{/* <th scope="col" className="!p-[0.65rem]">Purchase Date</th> */}
											<th scope="col" className="!p-[0.65rem]">Total Licence</th>
											<th scope="col" className="!p-[0.65rem]">Remaining Licence</th>
											<th scope="col" className="!p-[0.65rem]">Sold Licence</th>
											<th scope="col" className="!p-[0.65rem]">Plan Type</th>
											<th scope="col" className="!p-[0.65rem]">Plan Status</th>
										</tr>
									</thead>
									<tbody>
										<tr key={user.id}>
											<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] capitalize">
												{user.name}
											</td>
											<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] capitalize">
												{dashboard_data.plan_date}
											</td>
											<td className="!p-[0.65rem] text-sm">
												{
													dashboard_data.validity &&
													<span className="font-semibold">
														{dashboard_data.validity}
													</span>
												}
											</td>
											{/* <td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] capitalize">
												{dashboard_data.purchase_date}
											</td> */}
											<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] capitalize">
												100
											</td>
											<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] capitalize font-semibold">
												100
											</td>
											<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] capitalize">
												0
											</td>
											<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] capitalize">
												<span className={`badge leading-none 
													${dashboard_data.role === "reseller" ? "bg-secondary/10 text-secondary" : dashboard_data.role === "gold" ? "bg-warning/10 text-warning" : "bg-info/10 text-info"} rounded-sm`}
												>
													{dashboard_data.role}
												</span>
											</td>
											<td className="!p-[0.65rem] text-sm">
												<span
												className={`badge leading-none ${!dashboard_data.expired ? "bg-success/10 text-success rounded-sm" : "bg-danger/10 text-danger rounded-sm"}`}>
													{
														!dashboard_data.expired ? "Active" : "Inactive"
													}
												</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-span-12">
					<h3 className="text-xl mt-2 mb-3 capitalize font-bold">Licence Overview</h3>
				</div>

                <div className="col-span-12">
					<div className="box">
						{/* <div className="box-header flex">
							<h5 className="box-title my-auto">Plan Renewal History</h5>
						</div> */}
						<div className="box-body p-5">
							<div className="overflow-auto">
								<div className="flex flex-wrap gap-5 justify-between items-center mb-5">
									<div>
										<button onClick={generateLicenceCode} className={`p-2 border rounded-sm hover:bg-indigo-500 ${isGenerating ? "animate-pulse border-indigo-500 bg-indigo-500 hover:!border-indigo-500 text-white" : "border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:!border-indigo-500 hover:text-white"} disabled:bg-indigo-500 disabled:text-white disabled:cursor-not-allowed disabled:opacity-50 focus:ring-indigo-500 dark:focus:ring-offset-white/10`} disabled={licences.length === 100 || isGenerating}>
											<i className="ri-magic-line"/>{" "} {isGenerating ? "Generating..." : "Generate Licence"}
										</button>
										{
											licences.length === 100 && 
											<p className="mt-1 text-red-500">Note: You cannot generate more than 100 licenses as per your reseller plan.</p>
										}
									</div>
									<div className="flex gap-2 items-center">
										<h3 className="">Total Licences: <b>{licences.length}</b></h3>
										<span className="font-bold">|</span>
										<h3 className="">Available Licences: <b>{licences.length}</b></h3>
									</div>
								</div>

								{
									licences.length > 0 ?
									<table className="ti-custom-table ti-custom-table-head">
										<thead>
											<tr>
												<th scope="col" className="text-center !p-[0.65rem]">Licence Code</th>
												<th scope="col" className="!p-[0.65rem]">Allocated To</th>
												<th scope="col" className="!p-[0.65rem]">Licence Availability</th>
											</tr>
										</thead>
										<tbody>
											{
												licences.map((dt, ind)=>(
												<tr key={ind}>
													<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem]">
														<span className={`cursor-pointer group bg-success/10 text-success badge leading-none rounded-sm`} onClick={()=>copyLicenceCode(dt.licence_code)} title="Copy licence code">
															{dt.licence_code}
															<span> <i className="ri-file-copy-line"></i></span>
														</span>
													</td>
													<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem]">
														{dt.allocated ? "Allocated" : "Not Allocated"}
													</td>
													<td className="!p-[0.65rem] text-sm">
														{dt.available ? "Available" : "Not Available"}
													</td>
												</tr>
												))
											}
										</tbody>
									</table>
									:
									<p className="text-center my-5">No Licence Generated!</p>
								}
							</div>
						</div>
					</div>
				</div>

				{/* <div className="col-span-12">
					<div className="box orders-table">
						<div className="box-header">
							<div className="sm:flex justify-between">
								<h5 className="box-title my-auto">Licence Overview</h5>
							</div>
						</div>
						{
							dashboard_data.licence_codes.length > 0 ? 
							<>
								<DataTable columns={columns} progressStatus={{isScraping: false}} handleDataCount={updateNumOfData} data={dashboard_data.licence_codes} />

								<div className="px-6 pb-4">
									<Download customCls={"ti-btn ti-btn-outline !border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10"} csvHeaders={csvHeaders} data={data} fileName={"customers-data.csv"}/>
								</div>
							</>
							:
							<div className="box-body">
								<p className="text-center text-base">There is no data to display</p>
							</div>
						}
					</div>
				</div> */}
			</div>

			{
				openRenewal &&
				<UpgradePlanPopup closeModel={()=>setOpenRenewal(false)}/>
			}
		</div>
	);
};


export default PlanRenewal;
