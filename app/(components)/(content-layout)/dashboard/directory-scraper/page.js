"use client"
import React, { useCallback, useRef, useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import DataTable from "@/shared/data/basic-ui/tables/nexttable";
import ContactVia from "@/shared/layout-components/dashboard/ContactVia";
import { ContactBox, DownloadBox, LimitReachedBox, SmsBox, WhatsappBox } from "@/shared/layout-components/dashboard/AlertBox";
import { useUserContext } from "@/shared/userContext/userContext";
import { Download } from "@/shared/layout-components/dashboard/DownloadBtn";
import { fetchDirectoryScraper } from "@/shared/apis/api";
import countryList from "@/shared/layout-components/dashboard/Country";
import Snackbar from "@/shared/layout-components/dashboard/SnackBar";
import ProcessHeader from "@/shared/layout-components/dashboard/ProcessHeader";
import Link from "next/link";
const Select = dynamic(() => import("react-select"), { ssr: false });

const DirectoryScraper = () => {
	const { snackMessage, openSnack, openSnackBar, handleSnackMessage, isVerfified, isActivated, contactNum, smsNum, whatsAppNum, limitErr, handleLimitErr } = useUserContext()
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
			width: 100,
			editable: false,
		},
		{
			headerName: "Email",
			field: "email",
			width: 400,
			editable: false
		},
		{
			headerName: "Phone",
			field: "phone",
			width: 400,
			editable: false
		},
		{
			headerName: "Website",
			field: "website",
			width: 400,
			renderCell: ({row})=>(
				(row.website !== "N/A") ? 
				<Link href={row.website} title={row.website} target="_blank" className="hover:underline hover:text-blue-500">
					{row.website}
				</Link> 
				: <span title={row.website}>{row.website}</span>
			),
			editable: false
		},
		{
			headerName: "Title",
			field: "title",
			width: 400,
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
	let refElement = useRef(null);
	const [ numOfData, setNumOfData] = useState(recordData)
	const [ selectedCountry, setSelectedCountry ] = useState("")
	const [ isScraping, setIsScraping ] = useState(false)
	const [ isDownload, setIsDownload ] = useState(false)
	const [ data, setData ] = useState([])
	const [textContent, setTextContent] = useState("");
	const [countryCode, setCountryCode] = useState("91")
	
	const csvHeaders = [
        { label: "ID", key: "id" },
        { label: "Title", key: "id" },
        { label: "Website", key: "website" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" },
        { label: "Description", key: "description" },
        { label: "Keywords", key: "keywords" }
    ];

	const closeModel = useCallback(()=>{
		setIsDownload(!isDownload)
	},[isDownload])

	const handleSubmit = async () => {
		if(isVerfified){
		  if(textContent){
			const arrayOfUrl = textContent.split(", ");
			if(!isActivated && arrayOfUrl.length > 5){
				openSnackBar();
				handleSnackMessage("You can not enter more than five URLs due to your free trial, Please consider purchasing our product!", "white", "text-danger")
			}
			else if(arrayOfUrl.length){
			  const fetchURLData = arrayOfUrl.map( async (url)=>{
				try {
				  setIsScraping(true)
				  const validateUrl = /(https?:\/\/[^\s",]+)/g;
				  const actualUrl = url.match(validateUrl)
				  if(actualUrl){
					// setError("")
					const response = await fetchDirectoryScraper({url: actualUrl[0]})
					const limitErr = response?.response?.data?.message
					if(limitErr === "You have reached the limits of the free plan. Please upgrade your plan to continue using this service."){
					  console.log(limitErr)
					//   setIsModal(true)
						handleLimitErr(limitErr)
					  setIsScraping(false)
					}
					if (response && !limitErr) {
					  const phones = response.mobile
					  const emails = response.Email
					  if(response.url){
						return {
							title: response.title || "N/A", 
							website: response.url || "N/A", 
							description: response.description || "N/A",
							keywords: response.keywords || "N/A",
							phone : phones ? phones : "N/A", 
							email: emails ? emails : "N/A"
						};
					  }
		
					} else {
					  console.error('Failed to fetch the page');
					}
				  }
				  else {
					openSnackBar();
					handleSnackMessage("Invalid URL, Please use a valid URL (e.g., 'https://example.com' or 'http://example.com').", "white", "text-danger")
				  }
				} catch (error) {
				  console.error('Error fetching page content:', error);
				}
			  })
			  const contactInfo = (await Promise.all(fetchURLData)).filter(obj=>obj);
			  
			  const convertedData = contactInfo.map(({title, description, keywords, website, phone, email})=>{
				const emails = email.split(',');
				const phones = phone.split(',');
				const maxLength = Math.max(emails.length, phones.length);
		  
				const newData = Array.from({length: maxLength}, (_, index)=>({
					title, 
					website, 
					description,
					keywords,
					phone: phones[index] || 'N/A', 
					email: emails[index] || 'N/A'
				}))
				return newData;
			  }).flat();
			  
			  const addSerial = convertedData.map((item, ind)=>({id: ind+1, ...item}))
	
			  const countUrl = addSerial.filter(item=>item.url).length;
			  const countEmail = addSerial.filter(item=>item.email).length;
			  const countPhone = addSerial.filter(item=>item.phone).length;
			//   setNumberOfData({url: countUrl, email: countEmail, phone: countPhone})
			//   setActualData(addSerial)
			  setData(addSerial)
			//   const freeData = addSerial.slice(0, 50);
			//   setRecords(isActivated ? addSerial : freeData)
			//   setIsLoading(false)
			  setIsScraping(false)
			}
		  }
		  else {
			openSnackBar()
			handleSnackMessage("Please provide any URL.", "white", "text-danger")
		  }
		}
		else {
		//   openVerifyEmail();
		}
	};

	const handleQueryChange = (obj)=>{
		const checkCountry = countryList.find(cnt=>obj.value.toLowerCase() === cnt.cnt.toLowerCase());
		setCountryCode(checkCountry.countryCode)
		setSelectedCountry(obj)
	}

	const clearData = useCallback(()=>{
		setSelectedCountry("")
		setData([])
		setTextContent("")
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
			{
				openSnack &&
				<Snackbar content={snackMessage} isOpen={openSnack}/>
			}
			<Seo title={"Business Directory Scraper"} />
			<PageHeader currentpage="Business Directory Scraper" activepage="Lead Generation" img="/assets/iconfonts/dashboard-icon/directoryIcon.png" mainpage="Business Directory Scraper" />

			<div className="grid grid-cols-12 gap-x-5">
				{numOfData.map((idx) => (
					<div className="col-span-12 md:col-span-4" key={Math.random()}>
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
							<h5 className="box-title">Select Country</h5>
						</div>
						<div className="box-body">
							<Select classNamePrefix='react-select' id='react-select-3-live-region' className="capitalize" value={selectedCountry} options={countries} placeholder='Choose Country' onChange={handleQueryChange} />
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						{/* Header */}
						<ProcessHeader heading={"Enter bulk URLs"} url={"LW9_PAJhens"} title={"Business Directory Scraper."}/>
						{/* Header */}
						
						<div className="box-body grid grid-cols-12 gap-y-5 xxl:gap-y-0 gap-x-5">
							<div className="col-span-12 xxl:col-span-9">
								<textarea className="ti-form-input" ref={refElement} value={textContent} onChange={(e)=>setTextContent(e.target.value)} rows="1" placeholder="Ex. https://example.com/, https://example.in"></textarea>
							</div>

							<div className="col-span-3">
							{
								isScraping ? 
								<button type="button" className={`ti-btn ti-btn-outline !border-indigo-500 bg-indigo-500 text-white hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`}>
									<div className="ti-spinner w-4 h-4" role="status" aria-label="loading">
										<span className="sr-only"></span>
									</div>
									Loading...
								</button>
								:
								<button type="button" className={`ti-btn ti-btn-outline border !border-indigo-500 ${textContent ? "text-white bg-indigo-500" : "text-indigo-500 hover:text-white hover:bg-indigo-500"} hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`} onClick={handleSubmit}>Search</button>
							}
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
										<Download customCls={"ti-btn ti-btn-outline !border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10"} csvHeaders={csvHeaders} data={data} fileName={"google-search-scrapper.csv"}/>
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
				<ContactBox number={contactNum} code={countryCode}/>
			}
			{
				smsNum &&
				<SmsBox number={smsNum} code={countryCode} />
			}
			{
				whatsAppNum &&
				<WhatsappBox number={whatsAppNum} code={countryCode} />
			}
			{
				isDownload &&
				<DownloadBox csvHeaders={csvHeaders} data={data.length ? data : []} fileName={"business-directory-scraper"} isModal={isDownload} closeModel={closeModel}/>
			}
			{
				limitErr &&
				<LimitReachedBox/>
			}
			{/* alert boxes */}
		</div>
	);
};

export default DirectoryScraper;
