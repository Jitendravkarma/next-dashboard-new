"use client"
import React, { useCallback, useEffect, useState } from "react";
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
import { countryList } from "@/shared/data/static-content/allCountry";
import ProcessHeader from "@/shared/layout-components/dashboard/ProcessHeader";
import Link from "next/link";
import Snackbar from "@/shared/layout-components/dashboard/SnackBar";
const Select = dynamic(() => import("react-select"), { ssr: false });

const WebsiteDataCenter = () => {
	const { isActivated, contactNum, smsNum, whatsAppNum, openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
	const [ selectedCountry, setSelectedCountry ] = useState("")
	const [countryCode, setCountryCode] = useState("91")
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
		  headerName: "Website",
		  field: "website",
		  width: 200,
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
			headerName: "Email",
			field: "email",
			width: 200,
			editable: false
		},
		{
			headerName: "Phone",
			field: "phone",
			renderCell: ({row})=>(
				(selectedCountry.value) ?
				<>
					{
						row.phone !== "N/A" ?
						<span>+{countryCode} {row.phone}</span> :
						<span>{row.phone}</span>
					}
				</>
				:
				<span>{row.phone}</span>
			),
			width: 200,
			editable: false
		},
		{
			headerName: "Social Links",
			field: "social_links",
			width: 250,
			renderCell: ({row})=>(
			  (row.social_links.length) ? 
			  <div className="text-sm h-full flex gap-1 items-center">
					{
						row.social_links.map(({title, url}, ind)=>
							{
								if(title && url)
								return (
									<Link key={ind} target="_blank" href={
										title === "facebook" ? url : 
										title === "instagram" ? url : 
										title === "telegram" ? url : 
										title === "twitter" ? url : 
										title === "linkedin" ? url : 
										title === "youtube" ? url : 
										title === "reddit" ? url : 
										title === "pinterest" ? url : 
										""
									}>
										<div key={ind} className={`w-8 h-8 flex justify-center opacity-70 hover:opacity-100 duration-200 items-center border border-gray-300 rounded-md text-white ${
											title === "facebook" ? "bg-blue-600" : 
											title === "instagram" ? "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]" :  
											title === "youtube" ? "bg-red-500" : 
											title === "twitter" ? "bg-black" : 
											title === "telegram" ? "bg-[#0088cc]" :
											title === "linkedin" ? "bg-[#0077b5]" :
											title === "pinterest" ? "bg-[#E60023]" :
											title === "reddit" ? "bg-[#FF4500]" : "bg-gray-100"
										}`}>
											<i className={`${
												title === "facebook" ? "ri-facebook-fill" : 
												title === "instagram" ? "ri-instagram-fill" :  
												title === "youtube" ? "ri-youtube-fill" : 
												title === "twitter" ? "ri-twitter-x-fill" : 
												title === "telegram" ? "ri-telegram-fill" :
												title === "linkedin" ? "ri-linkedin-fill" :
												title === "pinterest" ? "ri-pinterest-fill" :
												title === "reddit" ? "ri-reddit-fill" : "ri-question-mark"
											}`}></i>
										</div>
									</Link>
								)
							}
						)
					}
				</div>
			  : <span>N/A</span>
			),
			editable: false
		},
		{
			headerName: "Image",
			field: "image",
			width: 100,
			renderCell: ({row})=>(
			  (row.image !== "N/A") ? 
				<div className="p-2 w-14 h-full hover:scale-105 duration-200">
					<Link href={row.image} target="_blank" title="View full image">
						<div className="w-full h-full p-2 border border-gray-300 rounded-sm ">
							<img src={row.image} title={row.image} className="h-full object-cover"/>
						</div>
					</Link>
				</div>
			  : <div className="py-2 pr-2 pl-0 w-14 h-full hover:scale-110 duration-200">
					<div className="w-full h-full p-1 border border-gray-300 rounded-sm ">
						<img src={"https://cdn-icons-png.flaticon.com/128/15639/15639068.png"} title={"Image not found"} className="h-full object-cover"/>
					</div>
				</div>
			),
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
			headerName: "Searched Keyword",
			field: "query",
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
	const [ countries, setCountries] = useState([])
	const sourceRef = React.useRef(axios.CancelToken.source());
	const [ numOfData, setNumOfData] = useState(recordData)
	const [ keywords, setKeywords ] = useState("");
	const [ isScraping, setIsScraping ] = useState(false)
	const [ isDownload, setIsDownload ] = useState(false)
	const [ data, setData ] = useState([])

	const csvHeaders = [
        { label: "Website", key: "website" },
        { label: "Title", key: "title" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" },
        { label: "Image", key: "image" },
        { label: "Social Media Links", key: "social_links_download" },
        { label: "Description", key: "description" },
        { label: "Keywords", key: "keywords" },
		{ label: "Searched Keyword", key: "query" },
        { label: "Country", key: "country" }
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

	function extractNumbersFromText(numbers) {
		// const uniPattern = /(?:\(?(\d+)\)?[\s-+]?)?(\d+)[\s-]?(\d+)|\+(\d+)\s(\d+)\s(\d+)(?:\s(\d+))+/g;
		let filtered_num = numbers.map((num)=>{
			// console.log(num);
			let updatedNumber = num.replace(/\(|\)/g, "").replace(/[\s()\-\+]/g, '');
			// console.log(updatedNumber)
			if(selectedCountry){
				let matchCnt = countryList.find((country)=>selectedCountry.value.toLowerCase() === country.cnt.toLowerCase());
				// console.log(matchCnt)
				setCountryCode(matchCnt.countryCode)
				if(matchCnt){
					const validatePhoneDiffReg = updatedNumber.match(matchCnt.diffReg);
					// console.log(validatePhoneDiffReg)
					// const validatePhoneReg = updatedNumber.match(matchCnt.reg);
					// console.log(validatePhoneReg)
					if(validatePhoneDiffReg && validatePhoneDiffReg.length > 1){
						return [validatePhoneDiffReg[1]];
					}
					// if(validatePhoneReg && validatePhoneReg.length > 0){
					// 	return [validatePhoneReg[0]];
					// }
				}
			}
			else {
				return updatedNumber
			}
		}).filter((num)=>(num !== undefined));

		const allNumbers = filtered_num.map((filtered)=>{
			let check = String(filtered);
			return check;
		});

		let removeDuplicates = Array.from(new Set(allNumbers?.map(num=>num)));
		return removeDuplicates;
	}

	const startScraping =  async ()=>{
		if(selectedCountry && keywords){
			setData([])
			setNumOfData(recordData)
			setIsScraping(true)
			sourceRef.current = axios.CancelToken.source();
			const allKeywords = keywords.split(',').map(keyword=>keyword.trim())
			let collectData = []
			if(allKeywords.length){
				for(let i in allKeywords){
					try {
						let response = await websiteDataCenter({country: selectedCountry?.value?.toLowerCase(), query: allKeywords[i]}, {cancelToken: sourceRef.current.token});
						if(response.length){
							response.map(({ country, description, title, keywords, website, images, social_links, facebook_profile, phone, email }) => {
								let getPhones = extractNumbersFromText(phone);
								let facebookPhone;
								if(!getPhones.length){
									facebookPhone = extractNumbersFromText((facebook_profile.phone && facebook_profile.phone !== "N/A") ? [facebook_profile.phone] : []);
								}
								let filterSocialUrl;
								if(social_links?.length){
									filterSocialUrl = social_links.filter(link=>(link.url && link.url))
								}
								const obj = {
									country,
									phone: getPhones?.length ? getPhones[0] : facebookPhone.length ? facebookPhone[0] : "N/A", 
									email: email.length ? email : "N/A",
									title: title ? title : "N/A",
									website: `${website}`,
									image: images?.length ? images[0].image : "N/A",
									social_links: social_links?.length ? social_links : [],
									social_links_download: filterSocialUrl.map(link=>link.url).join(", ") || "N/A",
									description: description || "N/A",
									keywords: keywords || "N/A",
									query: allKeywords[i]
								}
								if(obj.phone !== "N/A" || obj.email !== "N/A"){
									collectData.push(obj)
									setData(cur=>[...cur, obj])
								}
							}).filter(item => item);
						}
					} catch (error) {
						console.log(error)
					}
				}
			}
			if(collectData.length){
				setData(collectData)
			}
			else {
				openSnackBar()
				handleSnackMessage('Data not found. Try another keyword!', "danger", "text-white")
			}
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

	useEffect(()=>{
			const country = countryList.map(({cnt})=>{
				return {
					label: cnt,
					value: cnt
				}
			})
			setCountries(country)
	}, [])

	return (
		<div>
			{
				openSnack &&
				<Snackbar content={snackMessage} isOpen={openSnack}/>
			}
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
						{/* Header */}
						<ProcessHeader heading={"Search Keywords"} url={"NfOetsKFX_E"} title={"Website Data Center."}/>
						{/* Header */}

						<div className="box-body grid gap-3">
							<div className="col-span-12">
								<textarea name="keywords" onChange={handleChange} value={keywords} className={`w-full capitalize text-sm border-gray-200 bg-white p-3 overflow-auto border rounded-sm disabled:bg-gray-50`} placeholder="Ex. Schools, Colleges" rows={1} disabled={!selectedCountry}/>
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
								<h5 className="box-title my-auto">
									{
										(isScraping && !data.length) ? 
										<div className="flex items-center gap-2">
											<div className="ti-spinner w-5 h-5 text-primary" role="status" aria-label="loading"><span className="sr-only">Loading...</span></div>
											<span>Processing...</span>
										</div>
										:
										<span>Records</span>
									}
								</h5>
							</div>
						</div>
						{
							data.length > 0 ? 
							<>
								<DataTable columns={columns} progressStatus={{isScraping}} data={data} clearData={clearData} handleDataCount={updateNumOfData}/>

								<div className="px-6 pb-4">
									{
										isActivated ?
										<Download csvHeaders={csvHeaders} data={data} fileName={"website-data-center.csv"}/>
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
				<SmsBox number={smsNum}  code={countryCode}/>
			}
			{
				whatsAppNum &&
				<WhatsappBox number={whatsAppNum}  code={countryCode}/>
			}
			{
				isDownload &&
				<DownloadBox csvHeaders={csvHeaders} data={data.length ? data : []} fileName={"website-data-center"} isModal={isDownload} closeModel={closeModel}/>
			}
			{/* alert boxes */}
		</div>
	);
};

export default WebsiteDataCenter;
