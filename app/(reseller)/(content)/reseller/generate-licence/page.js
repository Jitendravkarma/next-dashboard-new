"use client"
import React, { useEffect, useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { UpgradePlanPopup } from "@/shared/layout-components/dashboard/AlertBox";
import { generateLicence, resellerLicences } from "@/shared/apis/api";
import { useUserContext } from "@/shared/userContext/userContext";
import Snackbar from "@/shared/layout-components/dashboard/SnackBar";

const GenerateLicence = () => {
	const { openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
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
	
	const calender = <i className="ri-pass-valid-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const status = <i className={`${compareDate ? "ri-close-line bg-danger/10 text-danger" : "ri-shield-check-line bg-success/10 text-success"} text-xl avatar w-10 h-10 rounded-full p-2.5 leading-none`}></i>
	const expiry = <i className={`ri-bar-chart-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-danger/10 text-danger leading-none`}></i>
	const planIcon = <i className={`${dashboard_data.role === "reseller" ? "ri-pie-chart-line bg-secondary/10 text-secondary" : dashboard_data.role === "white" ? "ri-medal-line bg-warning/10 text-warning" : "ri-bard-line bg-info/10 text-info"} text-xl avatar w-10 h-10 rounded-full p-2.5 leading-none`}></i>

	const [ numOfData, setNumOfData] = useState([
		{ id: 1, icon: calender, class: "Licences Limit", title: "limit", text: "100", color: "primary/10", color1: "success" },
		{ id: 2, icon: expiry, class: "Available Limit", title: "available", text: 0, color: "primary/10", color1: "success" },
		{ id: 3, icon: status, class: "Sold Licences", title: "sold", text: <span>0/<small>0</small></span>, color: "primary/10", color1: "success" },
		{ id: 4, icon: planIcon, class: "Available Licences", title: "type", text: <span>0/<small>0</small></span>, color: "primary/10", color1: "success" },
	])

	const [ isGenerating, setIsGenerating ] = useState(false)
	const [ licences, setLicences ] = useState([])

    const copyLicenceCode = (txt)=>{
        const textArea = document.createElement('textarea');
        textArea.value = txt;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('License code copied to clipboard!');
    }

	const fetchLicenses = async ()=>{
		try {
			const licences = await resellerLicences()
			const allLicence = licences.data.data
			const converData = allLicence.map(({asigned_user_email, asigned_user_id, purchase_code, created_at})=>{
				const date = new Date(created_at);
				const day = String(date.getDate()).padStart(2, '0');  // Add leading zero if needed
				const month = String(date.getMonth() + 1).padStart(2, '0');  // Months are 0-indexed
				const year = String(date.getFullYear()).slice(-2);
				return {
					licence_code: purchase_code, 
					allocated: asigned_user_email ? asigned_user_email : false, 
					email: asigned_user_email, 
					created_date: `${day}-${month}-${year}`,
					available: asigned_user_email ? false : true
				}
			})
			setLicences(converData)
		} catch (error) {
			console.log(error)
		} finally {
			// setIsLoading(false)
		}
	} 

	const generateLicenceCode = async ()=>{
		if(licences.length < 100){
			try {
				setIsGenerating(true)
				const generateCode = await generateLicence()
				const access_code = generateCode.data.data
				if(access_code){
					fetchLicenses()
				}
			} catch (error) {
				console.log(error)
			} finally {
				setIsGenerating(false)
			}
		}
		else {
			openSnackBar();
            handleSnackMessage("Please verify your email before signing in. Check your inbox or spam folder.", "white", "text-danger")
		}
	}

	useEffect(()=>{
		setNumOfData([
			{ id: 1, icon: calender, class: "Licences Limit", title: "limit", text: "100", color: "primary/10", color1: "success" },
			{ id: 2, icon: expiry, class: "Available Limit", title: "available", text: <span className={`${licences.length > 95 && "animate-pulse text-danger"}`}>{100 - licences.length}</span>, color: "primary/10", color1: "success" },
			{ id: 3, icon: status, class: "Sold Licences", title: "sold", text: <span>{licences.filter(lic=>lic.email).length}/<small className={`${licences.length < 5 && "animate-pulse text-danger"}`}>{licences.length}</small></span>, color: "primary/10", color1: "success" },
			{ id: 4, icon: planIcon, class: "Available Licences", title: "type", text: <span>{licences.filter(lic=>!lic.email).length}/<small className={`${licences.length < 5 && "animate-pulse text-danger"}`}>{licences.length}</small></span>, color: "primary/10", color1: "success" },
		])
		fetchLicenses()
	}, [licences.length])

	return (
		<div>
			<Seo title='Generate Licence' />
			<PageHeader currentpage="Generate Licence" img="https://cdn-icons-png.flaticon.com/128/3600/3600987.png" activepage="Reseller" mainpage="Generate Licence" />
			{
				openSnack &&
				<Snackbar content={snackMessage} isOpen={openSnack}/>
			}
			<div className="grid grid-cols-12 gap-x-5">
				{numOfData.map((idx) => (
					<div className="col-span-12 md:col-span-6 lg:col-span-3" key={idx.id}>
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

				{
					compareDate &&
					<div className="col-span-12">
						<h3 className="text-xl mt-2 mb-3 capitalize font-bold">Plan Expired</h3>
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
											<p className="mt-1 text-red-500">Note: You can't generate more than 100 licenses. Contact your plan provider to increase your licence limit.</p>
										}
									</div>
									<div className="flex gap-2 items-center">
										<h3 className="">Total Licences: <b>{licences.length}</b></h3>
										<span className="font-bold">|</span>
										<h3 className="">Available Licences: <b>{licences.filter(lic=>!lic.email).length}</b></h3>
									</div>
								</div>

								{
									licences.length > 0 ?
									<table className="ti-custom-table ti-custom-table-head">
										<thead>
											<tr>
												<th scope="col" className="!p-[0.65rem]">Generated At</th>
												<th scope="col" className="text-center !p-[0.65rem]">Licence Code</th>
												<th scope="col" className="!p-[0.65rem]">Allocated To</th>
												<th scope="col" className="!p-[0.65rem]">Licence Availability</th>
											</tr>
										</thead>
										<tbody>
											{
												licences.map((dt, ind)=>(
												<tr key={ind}>
													<td className="!p-[0.65rem] text-sm">
														Date: {dt.created_date}
													</td>
													<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem]">
														<span className={`cursor-pointer group ${dt.email ? "bg-danger/10 text-danger" : "bg-success/10 text-success"} badge leading-none rounded-sm`} onClick={()=>copyLicenceCode(dt.licence_code)} title="Copy licence code">
															{dt.licence_code}
															<span> <i className="ri-file-copy-line"></i></span>
														</span>
													</td>
													<td className="!p-[0.65rem] text-sm">
														{dt.allocated ? dt.allocated : "Not Allocated"}
													</td>
													<td className={`!p-[0.65rem] text-sm ${!dt.available && "text-danger"}`}>
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
			</div>

			{
				openRenewal &&
				<UpgradePlanPopup closeModel={()=>setOpenRenewal(false)}/>
			}
		</div>
	);
};


export default GenerateLicence;
