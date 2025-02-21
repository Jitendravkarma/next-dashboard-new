"use client"
import React, { useCallback, useRef, useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import DataTable from "@/shared/data/basic-ui/tables/nexttable";
import axios from "axios";
import ContactVia from "@/shared/layout-components/dashboard/ContactVia";
import { ContactBox, DownloadBox, LimitReachedBox, SmsBox, WhatsappBox } from "@/shared/layout-components/dashboard/AlertBox";
import { useUserContext } from "@/shared/userContext/userContext";
import { Download } from "@/shared/layout-components/dashboard/DownloadBtn";
import { getWebsiteData, requestWebsiteData } from "@/shared/apis/api";
import countryList from "@/shared/layout-components/dashboard/Country";
const Select = dynamic(() => import("react-select"), { ssr: false });

const WebsiteScraper = () => {
	const { isActivated, contactNum, smsNum, whatsAppNum, limitErr, handleLimitErr, dashboardRecords } = useUserContext()
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
	let fileInputRef = useRef(null);
	const [ numOfData, setNumOfData] = useState(recordData)
	const [ selectedCountry, setSelectedCountry ] = useState("")
	const [ file, setFile ] = useState("")
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

	const removeSelectedFile = ()=>{
		fileInputRef.current.value = null;
		setFile('');
	}

	const closeModel = useCallback(()=>{
		setIsDownload(!isDownload)
	},[isDownload])

	function convertPhoneNumber(input) {

		let cleanedNumber = input.replace(/[\s\+\-]+/g, '');
		
		if (cleanedNumber.startsWith('+') && cleanedNumber.length > 11) {
			return cleanedNumber.slice(1);
		}
		if (cleanedNumber.startsWith('0') && cleanedNumber.length === 11) {
			return cleanedNumber.slice(1);
		}
		return cleanedNumber;
	}

	function extractNumbersFromText(text) {
		// const uniPattern = /(?:\(?(\d+)\)?[\s-+]?)?(\d+)[\s-]?(\d+)|\+(\d+)\s(\d+)\s(\d+)(?:\s(\d+))+/g;
		if(text){
		  const uniPattern = /(?:\+(\d{1,3})\s?)?(?:\(?\d+\)?[\s-]*)?(\d+[\s-]*){4,}/g
		  const newText = text.replace(/\n/g, ', ');   // removing enters \n
		  const extractedNumbers = newText.match(uniPattern);
		  if (extractedNumbers) {
			let numbers = extractedNumbers.map(number => convertPhoneNumber(number));
			let filterNumber = numbers.map((num)=>{
			  // console.log(num);
			  let updatedNumber = num.replace(/\(|\)/g, "");
			  if(selectedCountry){
				  let matchCnt = countryList.find((country)=>selectedCountry.value === country.cnt);
				  if(matchCnt){
					const validatePhone = updatedNumber.match(matchCnt.diffReg);
					if(validatePhone && validatePhone.length > 1){
					  return [validatePhone[1]];
					}
				  }
				  else {
					// setFileError(true);
					// setFileErrMsg(`We are currently unable to extract data for "${selectedCountry}" country!`);
				  }
				}
				else {
				  return updatedNumber
				}
			}).filter((num)=>(num !== undefined));
			const allNumbers = filterNumber.map((filtered)=>{
			  let check = String(filtered);
			  return check;
			});
			let removeDuplicates = Array.from(new Set(allNumbers?.map(num=>num)));
			return removeDuplicates;
		  } 
		  else {
			  return [];
		  }
		}
	}

	const extractUrls = async (txt)=>{
		const reg = /(https?:\/\/[^\s",]+)/g;
		const urls = txt.match(reg);
		const country = Array.isArray(urls) ? Array.from({length: urls.length}, ()=> selectedCountry.value.toLowerCase()) : urls;
		if(urls){
		  setIsScraping(true);
		//   setMessages({firstMessage:"Scraping has Started.", secondMessage:"Progress is Underway!"});
		//   setPercentage(0)
		  const requestId = await requestWebsiteData({ query: selectedCountry.value, country_list: country, url_list: urls });
		  // const requestId = "5585cfed-4714-4ece-b164-077631380419"
		  const limitErr = requestId?.response?.data?.message
		  if(limitErr === "You have reached the limits of the free plan. Please upgrade your plan to continue using this service."){
			handleLimitErr(limitErr)
			// setIsModal(true)
			setFile('');
			setIsScraping(false)
			// setPercentage(0)
			// setMessages({firstMessage:"Start Scraping.", secondMessage:"Progress Now!"})
		  }
		  // console.log(limitErr)
		  if(requestId && !limitErr){
			let interval;
			let errorCount = 0;
			let checkDataFound = 0;
			let dataLen = 0;
			const fetch_data = async () =>{
			  errorCount++;
			  const bulk_data = await getWebsiteData({fetch_id: requestId});
			//   console.log(bulk_data)
			  if(!bulk_data.length){
				interval = setTimeout(()=>{
				  if(errorCount !== 10){
					fetch_data()
				  }
				  else {
					clearInterval(interval);
					setIsScraping(false);
					// setMessages({firstMessage:'Try again', secondMessage: 'Something went wrong please try again later!'});
				  }
				}, 10000);
			  }
			  else {
				checkDataFound++;
				const convertData = (respData)=>{
				  const newData = respData.map((item, ind)=>{
					const numberString = item?.mobile?.length ? item.mobile?.split(", ")[0] : "";
					let getPhones = extractNumbersFromText(numberString);
					return {
					  id: ind + 1, 
					  website:item.url || "N/A", 
					  title: item.title || "N/A",
					  description: item.description || "N/A",
					  keywords: item.keywords || "N/A",
					  phone: getPhones?.length ? getPhones[0] : "N/A", 
					  email: item.Email || "N/A"
					};
					// else return {sno: ind + 1, ...item, url:"N/A", emails: item.emails?.join(", ")};
				  }).filter(dt=>dt);
				  return newData;
				}
	
				interval = setTimeout(()=>{
				  // console.log(dataLen, bulk_data.length)
				  if(checkDataFound === 8 && dataLen !== bulk_data.length){
					checkDataFound = 0;
					// console.log(`reset counter`)
					fetch_data();
				  }
	
				  else if(checkDataFound === 8 && dataLen === bulk_data.length){
					clearInterval(interval)
					const data = convertData(bulk_data)
					if(data.length){
					 	setData(data)
					  	setIsScraping(false);
						const countNotNullEmail = data.filter(item=> item.email !== "N/A").length;
						const countNotNullPhone = data.filter(item=> item.phone !== "N/A").length;
						const countNotNullURL = data.filter(item=> item.website !== "N/A").length;
						// console.log(countNotNullEmail, countNotNullPhone, countNotNullURL)
						dashboardRecords("google", "map", 0, countNotNullURL, countNotNullEmail, countNotNullPhone);
					  	return data;
					}
				  }
				  
				  else {
					// console.log(checkDataFound)
					fetch_data();
					dataLen = bulk_data.length;
					const data = convertData(bulk_data)
					if(data.length){
					  setData(data)
					//   setActualData(data)
					//   setRecords(data);
					}
				  }
				}, 10000);
				
			  }
			}
			setTimeout(()=>{
			  fetch_data();
			}, 15000);
		  }
		}
		else {
		//   setErrors({file: `URLs not found. Please use a valid URL (e.g., 'https://example.com' or 'http://example.com').`});
		  setIsScraping(false);
		  if(file){
			removeSelectedFile()
		  }
		}
	}

	const handleChange = (e)=>{
		const file = e.target.files[0];
		let type = file.type;
		setFile(file.name);
		// console.log(file);
		let filetypes = {
			csv:"text/csv"
		}
		
		if(type === filetypes.csv && file.size < 14889779){
			setIsScraping(true);
			const reader = new FileReader();
			reader.onload = async (e)=>{
				let content = e.target.result;
				await extractUrls(content);
			}
			reader.readAsText(file);
		}
		
		else if(file.size > 14889779){
			alert("This file size is too large, file size should be up to 14 MB!");
			removeSelectedFile()
		}
		else {
			alert(`File not supported!`);
			removeSelectedFile()
			setIsScraping(false);
		}
	}

	const handleQueryChange = (obj)=>{
		setSelectedCountry(obj)
	}

	const clearData = useCallback(()=>{
		setSelectedCountry("")
		setData([])
		setNumOfData(recordData)
		removeSelectedFile()
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
			<Seo title={"Website Scraper"} />
			<PageHeader currentpage="Website Scraper" activepage="Lead Generation" img="/assets/iconfonts/dashboard-icon/website.png" mainpage="Website Scraper" />

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
							<h5 className="box-title">Select Country</h5>
						</div>
						<div className="box-body">
							<Select classNamePrefix='react-select' id='react-select-3-live-region' className="capitalize" value={selectedCountry} options={countries} placeholder='Choose Country' onChange={handleQueryChange} />
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Upload CSV file</h5>
						</div>
						<div className="box-body">
							<div className="flex items-center gap-2">
								{
									isScraping ?
									<div className="flex items-center gap-3">
										<button type="button" className={`ti-btn ti-btn-outline !border-indigo-500 bg-indigo-500 text-white hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`}>
											<div className="ti-spinner w-4 h-4" role="status" aria-label="loading">
												<span className="sr-only"></span>
											</div>
											Loading...
										</button>
										<span>Working on it...</span>
									</div>
									:
									<>
										<label className="block" htmlFor="csvFile" />
										<input type="file" name="file" id="csvFile" ref={fileInputRef} onChange={handleChange} className={`rounded-sm text-sm text-gray-500 dark:text-white/70 focus:outline-0 ltr:file:mr-4 rtl:file:ml-4 file:py-3 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold ${selectedCountry ? "file:bg-primary file:text-white cursor-pointer" : "file:bg-gray-200 file:text-gray-400 cursor-not-allowed"} focus-visible:outline-none`} disabled={!selectedCountry} />
									</>
								}
								{
									(file && !isScraping) &&
									<button className="text-red-500 hover:underline font-bold hover:italic cursor-pointer" onClick={removeSelectedFile}>Remove file</button>
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
			{
				limitErr &&
				<LimitReachedBox/>
			}
			{/* alert boxes */}
		</div>
	);
};

export default WebsiteScraper;
