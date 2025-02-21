"use client"
import React, { useCallback, useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import DataTable from "@/shared/data/basic-ui/tables/nexttable";
import axios from "axios";
import ContactVia from "@/shared/layout-components/dashboard/ContactVia";
import { ContactBox, DownloadBox, SmsBox, WhatsappBox } from "@/shared/layout-components/dashboard/AlertBox";
import { useUserContext } from "@/shared/userContext/userContext";
import { Download } from "@/shared/layout-components/dashboard/DownloadBtn";
import { websiteDataCenter } from "@/shared/apis/api";
const Select = dynamic(() => import("react-select"), { ssr: false });

const WebsiteDataCenter = () => {
	const { isActivated, contactNum, smsNum, whatsAppNum } = useUserContext()
	const columns = [
		{
			field: 'actions',
			headerName: 'Actions',
			width: 200,
			renderCell: (params) => {
				const phone = params.row.phone;
				const email = params.row.email;
				return (
					<ContactVia contact={{phone, email, customNum:false}}/>
				);
			},
		},
		{
			field: 'id',
			headerName: 'ID',
			width: 50,
			editable: false,
		},
		{
		  headerName: "Website",
		  field: "website",
		  width: 300,
		  editable: false
		},
		{
			headerName: "Email",
			field: "email",
			width: 200,
			editable: false
		},
		{
			headerName: "Phone",
			field: "phone",
			width: 200,
			editable: false
		},
		{
			headerName: "Title",
		  field: "title",
		  width: 200,
		  editable: false
		},
		{
		  headerName: "Description",
		  field: "description",
		  width: 400,
		  editable: false
		},
		{
			headerName: "Keywords",
			field: "keywords",
			width: 400,
			editable: false
		},
		{
			headerName: "Country",
			field: "country",
			width: 400,
			editable: false
		}
	];
	const websiteIcon = <i className="ri-global-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const emailIcon = <i className="ri-mail-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const phoneIcon = <i className="ri-phone-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const recordData = [
		{ id: 1, icon: websiteIcon, title:'website', class: "Total Website", text: 0, color: "primary/10" },
		{ id: 2, icon: emailIcon, title:'email', class: "Total Email", text: 0, color: "primary/10" },
		{ id: 3, icon: phoneIcon, title:'phone', class: "Total Phone", text: 0, color: "primary/10" },
	]
	const countries = [
		{label: "australia", value: "australia"},
		{label: "brazil", value: "brazil"},
		{label: "canada", value: "canada"},
		{label: "germany", value: "germany"},
		{label: "france", value: "france"},
		{label: "india", value: "india"},
		{label: "italy", value: "italy"},
		{label: "turkey", value: "turkey"},
		{label: "united kingdom", value: "united kingdom"},
		{label: "united states", value: "united states"}
	]
	const sourceRef = React.useRef(axios.CancelToken.source());
	const [ numOfData, setNumOfData] = useState(recordData)
	const [ selectedCountry, setSelectedCountry ] = useState("")
	const [ keywords, setKeywords ] = useState("");
	const [ isScraping, setIsScraping ] = useState(false)
	const [ isDownload, setIsDownload ] = useState(false)
	const [ data, setData ] = useState([])

	const csvHeaders = [
        { label: "ID", key: "id" },
        { label: "Title", key: "title" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" },
        { label: "Description", key: "description" },
        { label: "Keywords", key: "keywords" },
        { label: "Country", key: "country" },
        { label: "Website", key: "website" }
    ];

	const closeModel = useCallback(()=>{
		setIsDownload(!isDownload)
	},[isDownload])

	const handleChange = (e)=>{
		setKeywords(e.target.value)
	}

	const handleQueryChange = (obj)=>{
		setSelectedCountry(obj)
	}

	const startScraping =  async ()=>{
		if(selectedCountry && keywords){
			setIsScraping(true)
			const allKeywords = keywords.split(',').map(keyword=>keyword.trim())
			let collectData = []
			if(allKeywords.length){
				for(let i in allKeywords){
					try {
						let response = await websiteDataCenter({country: selectedCountry?.value?.toLowerCase(), query: allKeywords[i]});
						if(response.length){
							response.map(({ country, description, title, keywords, website, mobile, emails }, ind) => {
								const obj = {
									id: ind + 1,
									country,
									phone: mobile.split(',')[0] || "N/A",
									email: emails ? emails.split(',') : "N/A",
									title: title ? title : "N/A",
									website: `https://${website}`,
									description,
									keywords
								}
								collectData.push(obj)
							}).filter(item => item);
						}
					} catch (error) {
						console.log(error)
					}
				}
			}
			setData(collectData)
			setIsScraping(false)
		}
		else {
			alert(`Please select or enter keywords`)
		}
	}

	function stopScraping() {
        sourceRef.current.cancel('Post request canceled');  
		setIsScraping(false)
    };

	const clearData = useCallback(()=>{
		setSelectedCountry("")
		setKeywords("")
		setData([])
		setNumOfData(recordData)
	},[])

	const updateNumOfData = useCallback((dataCount)=>{
		const newData = numOfData.map(obj=>{
			const find = dataCount.find(dt=>dt.title === obj.title)
			if(find){
				return {...obj, text: find.title === obj.title ? find.num : 0}
			}
		})
		setNumOfData(newData)
	}, [])

	return (
		<div>
			<Seo title={"Website Data Center"} />
			<PageHeader currentpage="Website Data Center" activepage="Lead Generation" img="/assets/iconfonts/dashboard-icon/websiteIcon.png" mainpage="Website Data Center" />

			<div className="grid grid-cols-12 gap-x-5">
				{numOfData.map((idx) => (
					<div className="col-span-12 md:col-span-4 xl:col-span-4" key={Math.random()}>
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
												{idx.text}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
				
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Initial Steps</h5>
						</div>
						<div className="box-body">
							<label className="ti-form-select-label mb-3">Select Country</label>
							<Select classNamePrefix='react-select' id='react-select-3-live-region' className="capitalize" value={selectedCountry} options={countries} placeholder='Choose Country' onChange={handleQueryChange} />
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Search Keywords</h5>
						</div>
						<div className="box-body grid gap-3">
							<div className="col-span-12">
								<textarea name="keywords" onChange={handleChange} value={keywords} className={`w-full capitalize text-sm border-gray-200 bg-white p-3 overflow-auto border rounded-sm disabled:bg-gray-50`} placeholder="Enter keywords..." rows={1} disabled={!selectedCountry}/>
							</div>
							<div className="col-span-12 flex flex-wrap gap-1 items-center overflow-hidden">
								<button type="button" className={`ti-btn ti-btn-outline !border-indigo-500 text-indigo-500 ${(keywords && !isScraping) ? "bg-indigo-500 text-white" : "hover:text-white hover:bg-indigo-500"} hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`} onClick={startScraping}>
									{
										isScraping ?
										<>
											<div className="ti-spinner w-4 h-4" role="status" aria-label="loading">
												<span className="sr-only"></span>
											</div>
											Loading...
										</>
										:
										<span>Search</span>
									}
								</button>
								
								<button type="button" className={`ti-btn ti-btn-outline !border-indigo-500 text-indigo-500 ${(isScraping) ? "text-white bg-indigo-500" : "hover:text-white hover:bg-indigo-500"} hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`} onClick={stopScraping} disabled={!isScraping}>Stop</button>
								
								<button type="button" className="py-1 px-2 ti-btn ml-0 md:ml-auto bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 dark:focus:ring-offset-white/10">
									YouTube <i className="ri-youtube-fill"></i>
								</button>
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
								<h5 className="box-title my-auto">Records</h5>
							</div>
						</div>
						{
							data.length > 0 ? 
							<>
								<DataTable columns={columns} progressStatus={{isScraping}} data={data} clearData={clearData} handleDataCount={updateNumOfData}/>

								<div className="px-6 pb-4">
									{
										isActivated ?
										<Download csvHeaders={csvHeaders} data={data} fileName={"google-search-scrapper.csv"}/>
										:
										<button type="button" onClick={()=>setIsDownload(true)} className={`ti-btn ti-btn-outline !border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`}>
											Download <i className="ri-download-2-fill"></i>
										</button>
									}
								</div>
							</>
							:
							<div className="box-body">
								<p className="text-center text-base">There is no data to display</p>
							</div>
						}
					</div>
				</div>
			</div>

			{/* alert boxes */}
			{
				contactNum &&
				<ContactBox number={contactNum}/>
			}
			{
				smsNum &&
				<SmsBox number={smsNum} />
			}
			{
				whatsAppNum &&
				<WhatsappBox number={whatsAppNum} />
			}
			{
				isDownload &&
				<DownloadBox csvHeaders={csvHeaders} data={data.length ? data : []} fileName={"google-search-scraper"} isModal={isDownload} closeModel={closeModel}/>
			}
			{/* alert boxes */}
		</div>
	);
};

export default WebsiteDataCenter;
