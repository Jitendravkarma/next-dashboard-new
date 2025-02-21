"use client"
import React, { useCallback, useEffect, useRef, useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import DataTable from "@/shared/data/basic-ui/tables/nexttable";
import ContactVia from "@/shared/layout-components/dashboard/ContactVia";
import { ContactBox, DownloadBox, SmsBox, WhatsappBox } from "@/shared/layout-components/dashboard/AlertBox";
import { useUserContext } from "@/shared/userContext/userContext";
import { Download } from "@/shared/layout-components/dashboard/DownloadBtn";
import countryList from "@/shared/layout-components/dashboard/Country";
import Snackbar from "@/shared/layout-components/dashboard/SnackBar";
const Select = dynamic(() => import("react-select"), { ssr: false });

const DocumentScraper = () => {
	const { isActivated, contactNum, smsNum, whatsAppNum, openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
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
		}
	];
	const emailIcon = <i className="ri-mail-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const phoneIcon = <i className="ri-phone-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const recordData = [
		{ id: 1, icon: emailIcon, title:'email', class: "Total Email", text: 0, color: "primary/10" },
		{ id: 2, icon: phoneIcon, title:'phone', class: "Total Phone", text: 0, color: "primary/10" },
	]
	let fileInputRef = useRef(null);
	const [ countries, setCountries ] = useState([])
	const [ numOfData, setNumOfData] = useState(recordData)
	const [ selectedCountry, setSelectedCountry ] = useState("")
	const [ file, setFile ] = useState("")
	const [ isScraping, setIsScraping ] = useState(false)
	const [ isDownload, setIsDownload ] = useState(false)
	const [ data, setData ] = useState([])
	const [emails, setEmails] = useState([]);
  	const [mobileNumbers, setMobileNumbers] = useState([]);

	const csvHeaders = [
        { label: "ID", key: "id" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" }
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

	function extractEmail (txt){
		let emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
		return (txt)?txt.match(emailRegex):"";
	}

	function extractNumbersFromText(text) {
		const uniPattern = /(?:\(?(\d+)\)?[\s-+]?)?(\d+)[\s-]?(\d+)|\+(\d+)\s(\d+)\s(\d+)(?:\s(\d+))+/g;
		const newText = text.replace(/\n/g, ', ');   // removing enters \n
		const extractedNumbers = newText.match(uniPattern);
		if (extractedNumbers) {
			let matchCnt = countryList.find((country)=>selectedCountry.value.toLowerCase() === country.cnt.toLowerCase());
			let numbers = extractedNumbers.map(number => convertPhoneNumber(number));
			// setCountryCode(matchCnt.countryCode);
			let filterNumber = numbers.map((num)=>{
			  // console.log(num);
			  let updatedNumber = num.replace(/\(|\)/g, "");
			  if(matchCnt){
				const phone = updatedNumber.match(matchCnt.diffReg)
				if(phone && phone[1]){
				  return phone[1];
				}
			  }
			  else {
				// setFileError(true);
				// setFileErrMsg(`File extractor added soon for ${selectedCountry.value}!`);
			  }
			}).filter((num)=>num);
			let removeDuplicates = Array.from(new Set(filterNumber?.map(num=>num)));
			return removeDuplicates;
		} 
		else {
			return [];
		}
	}


	const extractContactsFromDocx = (docxFile) => {
		mammoth.extractRawText({ arrayBuffer: docxFile })
		.then((result) => {
			const text = result.value;

			const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
			const phoneRegex = /(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;

			const extractedEmails = text.match(emailRegex) || [];
			const extractedPhoneNumbers = text.match(phoneRegex) || [];

			setEmails(extractedEmails);
			setMobileNumbers(extractedPhoneNumbers);
			})
			.catch((error) => {
			console.error('Error extracting contacts:', error);
		});
	};

	const handleChange = async (event)=>{
		const Files = event.target.files;
		const file = event.target.files[0];
		let type = Object.keys(Files).map(docs=>Files[docs].type);
		if(type.length > 1 && !isActivated){
			openSnackBar()
			handleSnackMessage('You cannot select multiple files during the free trial. Please consider purchasing our product!', "white", "text-danger")
			fileInputRef.current.value = null;
		}
		else {
			setFile(file.name);
			let filetypes = {
				csv:"text/csv", 
				txt:"text/plain", 
				word:"application/msword", 
				docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
				html:"text/html",
				json:"application/json",
				xls:"application/vnd.ms-excel",
				xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
				pdf:"application/pdf"
			}
			
			if ((type.includes(filetypes.csv) || type.includes(filetypes.txt) || type.includes(filetypes.word) || type.includes(filetypes.html) || type.includes(filetypes.xls) || type.includes(filetypes.json)) && file.size < 51000000) {
				let content = [];
				const filePromises = Object.keys(Files).map(docx => {
					return new Promise((resolve, reject) => {
						setIsScraping(true);
						const file = Files[docx];
						const reader = new FileReader();
						
						reader.onload = (e) => {
						content.push(e.target.result);
						resolve(); // Resolve the promise when the file is read
						};
				
						reader.onerror = (err) => {
						reject(err); // Reject the promise on error
						};
				
						reader.readAsText(file);
					});
				});
			
				try {
					await Promise.all(filePromises);
					const allContent = content.join(", "); // Now content should be populated
					let emailex = extractEmail(allContent);
					let numberex = extractNumbersFromText(allContent);
					setTimeout(()=>{
						setEmails(emailex || []);
						setMobileNumbers(numberex || []);
						setIsScraping(false);
					}, 2000);
					// setFileLen(content.length)
				} catch (error) {
					console.error("Error reading files:", error);
				}
			}
			else if(file.size > 51000000){
				openSnackBar()
				handleSnackMessage("This file size is too large, file size should be up to 50 MB!", "white", "text-danger")
			}
			else if (type.includes(filetypes.docx)){
				const reader = new FileReader();
				reader.onload = function (e) {
					extractContactsFromDocx(e.target.result);
				};
				reader.readAsArrayBuffer(file);
			}
			else {
				openSnackBar()
				handleSnackMessage("File not supported!", "white", "text-danger")
			}
		}
	}

	const mergeEmailMobile = (emails.length >= mobileNumbers.length)? emails.map((email, index)=>({
		id:index+1,
		email: email || "N/A",
		phone:(mobileNumbers[index] === undefined)?"N/A":mobileNumbers[index]
	})):(mobileNumbers.length >= emails.length)? mobileNumbers.map((phone, index)=>({
		id:index+1,
		email:(emails[index] === undefined)?"N/A":emails[index],
		phone: phone || "N/A"
	})):[];

	useEffect(()=>{
		const freeData = mergeEmailMobile.slice(0, 50);
		setData(mergeEmailMobile);
		// setRecords(isActivated ? mergeEmailMobile : freeData);
	},[emails, mobileNumbers]);


	const handleQueryChange = (obj)=>{
		setSelectedCountry(obj)
	}

	const clearData = useCallback(()=>{
		setSelectedCountry("")
		setData([])
		removeSelectedFile()
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
			<Seo title={"Document Data Scraper"} />
			<PageHeader currentpage="Document Data Scraper" activepage="Lead Generation" img="/assets/iconfonts/dashboard-icon/docIcon.png" mainpage="Document Data Scraper" />
			{
				openSnack &&
				<Snackbar content={snackMessage} isOpen={openSnack}/>
			}
			<div className="grid grid-cols-12 gap-x-5">
				{numOfData.map((idx) => (
					<div className="col-span-12 md:col-span-6" key={Math.random()}>
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
							<h5 className="box-title">
								Upload Document{" "}
								<span className="text-xs">(Supported file: CSV, XLSX, DOC, DOCX, HTML, JSON.)</span>
							</h5>
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
										<input type="file" name="file" multiple id="csvFile" ref={fileInputRef} onChange={handleChange} className={`rounded-sm text-sm text-gray-500 dark:text-white/70 focus:outline-0 ltr:file:mr-4 rtl:file:ml-4 file:py-3 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold ${selectedCountry ? "file:bg-primary file:text-white cursor-pointer" : "file:bg-gray-200 file:text-gray-400 cursor-not-allowed"} focus-visible:outline-none`} disabled={!selectedCountry} />
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
				<DownloadBox csvHeaders={csvHeaders} data={data.length ? data : []} fileName={"document-data-scraper"} isModal={isDownload} closeModel={closeModel}/>
			}
			{/* alert boxes */}
		</div>
	);
};

export default DocumentScraper;
