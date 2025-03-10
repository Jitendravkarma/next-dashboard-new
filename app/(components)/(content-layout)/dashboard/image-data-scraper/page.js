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
import Tesseract from 'tesseract.js';
import Snackbar from "@/shared/layout-components/dashboard/SnackBar";
import { countryList } from "@/shared/data/static-content/allCountry";
import ProcessHeader from "@/shared/layout-components/dashboard/ProcessHeader";
const Select = dynamic(() => import("react-select"), { ssr: false });

const ImageDataScraper = () => {
	const { isActivated, contactNum, smsNum, whatsAppNum, iconPing, hanleIconPing, openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
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
	const [countries, setCountries] = useState([]);
	const [ numOfData, setNumOfData] = useState(recordData)
	const [ isScraping, setIsScraping ] = useState(false)
	const [ isDownload, setIsDownload ] = useState(false)
	const [ data, setData ] = useState([])
	const [emails, setEmails] = useState([]);
  	const [mobileNumbers, setMobileNumbers] = useState([]);
	const [image, setImage] = useState([]);
	const [imageObjects, setImageObjects] = useState([]);
	const [textContent, setTextContent] = useState("");
	const [textFormat, setTextFormat] = useState(false);
	
	const csvHeaders = [
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" }
    ];

	const removeSelectedFile = ()=>{
		fileInputRef.current.value = null;
		setImage('');
	}

	const closeModel = useCallback(()=>{
		setIsDownload(!isDownload)
	},[isDownload])

	const extractEmails = ()=>{
		hanleIconPing("email", true);
		const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
		const results = returnMatchedContent(emailRegex);
		if(results.length){
			setTimeout(()=>{
				// console.log(results)
				setEmails(results)
				hanleIconPing("email", false);
				hanleIconPing("phone", false);
				// moveToBottom(results)
			//   setDataAlert({...dataAlert, email: true});
			}, 2000);
		}
		else {
			alert(`Email not found!`);
			hanleIconPing("email", false);
			hanleIconPing("phone", false);
		}
	}

	const extractPhones = ()=>{
		if(selectedCountry.value){
			hanleIconPing("phone", true);
			const numberRegex = /(?:\(?(\d+)\)?[\s-+]?)?(\d+)[\s-]?(\d+)|\+(\d+)\s(\d+)\s(\d+)(?:\s(\d+))+/g;
			const results = returnMatchedContent(numberRegex)
			if(results.length){
			  const checkCountry = countryList.find(cnt=>selectedCountry.value.toLowerCase() === cnt.cnt.toLowerCase());
			  setCountryCode(checkCountry.countryCode)
			  const phoneNumbers = results.map(phoneNum=>{
				  const phone = phoneNum.replace(/^[0]+|[\s\+\-]+/g, '').replace(/^0/, '');
				  let countryPhone;
				  if(checkCountry.diffReg){
					// console.log(checkCountry)
					// console.log(phone)
					const validateNum = phone.match(checkCountry.diffReg)
					// console.log(validateNum)
					if(validateNum && validateNum.length) {
					  (validateNum.length > 1) ? countryPhone = validateNum[1] : countryPhone = validateNum;;
					}
				  }
				  return countryPhone
			  }).filter(num=>num).flat();
	  
			  let removeDuplicates = Array.from(new Set(phoneNumbers?.map(num=>num)));
	  
			  setTimeout(()=>{
				hanleIconPing("phone", false);
				hanleIconPing("email", false);
				setMobileNumbers(removeDuplicates);
				// console.log(phoneNumbers)
				// moveToBottom(phoneNumbers)
				// setDataAlert({...dataAlert, phone: true});
			  }, 2000);
			}
			else {
			  hanleIconPing("phone", false);
			  hanleIconPing("email", false);
			  alert(`Phone number not found!`)
			}
		  }
		else {
			alert(`Please select a country to extract phone numbers!`)
		}
	}

	const fetchTextContent = (files)=>{
		const imgObjects = Object.keys(files).map(file=>{
		  const image = files[file]
		  const imgObj = URL.createObjectURL(image);
		  return {imageName: image.name, imgObj};
		});
		const getImgNames = imgObjects.map(image=>image.imageName);
		const getImgObj = imgObjects.map(image=>image.imgObj);
		setImage(getImgNames);
		setImageObjects(getImgObj);
	}

	const handleChange = async (event)=>{
		const files = event.target.files;
		let type = Object.keys(files).map(docs=>files[docs].type);
		let len = Object.keys(files).length;
		if(len > 1 && !isActivated){
			openSnackBar()
			handleSnackMessage('You cannot select multiple files during the free trial. Please consider purchasing our product!', "white", "text-danger")
			fileInputRef.current.value = null;
		}
		else {
		let collectSize = 0;
			if((type.includes("image/png") || type.includes("image/jpeg") || type.includes("image/webp"))){
				Object.keys(files).map(file=>{
					const image = files[file];
					collectSize = collectSize + image.size;
				});
				if(collectSize > 10486760){
					openSnackBar()
					handleSnackMessage("File size must be between 10KB to 10MB!", "white", "text-danger")
				}
				else {
					if(!isActivated){
						if(collectSize > 1048676){
							// setLimit(true);
							// setLimitMsg(`You cannot upload files larger than 1MB due to your free trial limit. Please purchase our product for full access!`)
							fileInputRef.current.value = null;
						}
						else {
							fetchTextContent(files);
						}
					}
					else{
						fetchTextContent(files);
					}
				}
			}
			// else if (image.size > 99000){
			//   alert(`Too heavy image size, Size should be between 10KB to 10MB!`);
			// }
			else {
				openSnackBar()
				handleSnackMessage("Image not supported!", "white", "text-danger")
			}
		}
	}

	const handleDownload = () => {
		const blob = new Blob([textContent], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		
		const a = document.createElement('a');
		a.href = url;
		a.download = `${image?.length > 1 ? "all-images" : image[0]?.split('.')[0]}-content.txt`; // The name of the downloaded file
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url); // Clean up the URL object
	};

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(textContent);
			openSnackBar()
			handleSnackMessage("Text copied to clipboard!", "white", "text-success")
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};

	const mergeEmailMobile = (emails.length >= mobileNumbers.length)? emails.map((email, index)=>({
		id:index+1,
		email: email || "N/A",
		phone:(mobileNumbers[index] === undefined)?"N/A":mobileNumbers[index]
	  })):(mobileNumbers.length >= emails.length)? mobileNumbers.map((phone, index)=>({
		id:index+1,
		email:(emails[index] === undefined)?"N/A":emails[index],
		phone: phone || "N/A"
	  })):[];
	
	const matchContent = (reg)=>{
		return textContent.match(reg) || []
	}
	
	const returnMatchedContent = (reg)=>{
		if(textContent){
			const results = matchContent(reg);
			return results;
		}
	}

	useEffect(()=>{
			const country = countryList.map(({cnt})=>{
				return {
					label: cnt,
					value: cnt
				}
			})
			setCountries(country)
	}, [])

	useEffect(()=>{
		window.scrollTo(0, 0);
		setData(mergeEmailMobile);
	},[emails, mobileNumbers]);

	useEffect(()=>{
		if(imageObjects.length){
		  const processExtracting = async ()=>{
			let results = [];
			const responses = imageObjects.map((imageObj)=>{
			  const extractText = async () => {
				setIsScraping(true);
				try {
					const getContent = await Tesseract.recognize(imageObj, 'eng')
					const textContent = getContent.data.text;
					results.push(textContent);
					return textContent;
				} catch (error) {
					console.log(error)
				}
			  };
			  // calling fun...
			  return extractText();
			})
	  
			const data = await Promise.all(responses)
			if(data.length){
			  setTextContent(data.join(", "));
			  setIsScraping(false)
			}
		  }
		  processExtracting();
		}
	  }, [imageObjects])


	const handleQueryChange = (obj)=>{
		setSelectedCountry(obj)
	}

	const clearData = useCallback(()=>{
		setSelectedCountry("")
		setData([])
		setTextContent("")
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

	return (
		<div>
			<Seo title={"Image Data Scraper"} />
			<PageHeader currentpage="Image Data Scraper" activepage="Lead Generation" img="/assets/iconfonts/dashboard-icon/imageIcon.png" mainpage="Image Data Scraper" />

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
						{/* Header */}
						<ProcessHeader heading={"Select Country"} url={"NfOetsKFX_E"} title={"Image Data Scraper."}/>
						{/* Header */}

						<div className="box-body">
							<Select classNamePrefix='react-select' id='react-select-3-live-region' className="capitalize" value={selectedCountry} options={countries} placeholder='Choose Country' onChange={handleQueryChange} />
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Upload Images{" "}
								<span className="text-xs">(Supported file: JPG, PNG and WEBP)</span>
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
									image.length > 0 &&
									<span className="text-xxs flex flex-wrap">
										<b title={image.length > 1 ? image.join(', ') : image[0]}>{image.length > 1 ? "Bulk images" : `${image[0].slice(0, 10)}...`}</b>
										&nbsp; &nbsp; &nbsp;
										{
											!isScraping &&
											<button className="text-red-400 hover:text-red-500 font-bold hover:italic cursor-pointer" onClick={removeSelectedFile}>
												{image.length > 1 ? "Remove images" : <i className="ri-delete-bin-line"></i>}
											</button>
										}
									</span>
								}
							</div>
						</div>
					</div>
				</div>

				{
					textContent &&
					<div className="col-span-12">
						<div className="box">
							<div className="box-header flex justify-between items-center">
								<h5 className="box-title">Extracted Content</h5>
								<div className="flex items-center gap-3">
									<button type="button" className={`ti-btn ti-btn-outline border !border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-indigo-500 dark:focus:ring-offset-white/10`} title="Download your cotent" onClick={handleDownload}>
										<i className="ri-download-2-line"></i>
									</button>

									<button type="button" className={`ti-btn ti-btn-outline border !border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-indigo-500 dark:focus:ring-offset-white/10`} title="Copy your cotent" onClick={handleCopy}>
										<i className="ri-file-copy-line"></i>
									</button>
									
									<button type="button" className={`relative ti-btn ti-btn-outline border !border-indigo-500 text-indigo-500 ${!textFormat && "hover:bg-indigo-500 hover:text-white"} focus:ring-indigo-500 dark:focus:ring-offset-white/10`} onClick={()=>setTextFormat(!textFormat)}>
										<i className="ri-more-2-fill"></i>
										{
											textFormat &&
											<div className="absolute top-12 -left-28 w-40 text-sm formats flex flex-col border rounded-sm shadow-lg py-1 px-2 bg-white">
												<span className="p-1 hover:underline text-gray-500 hover:text-gray-700 inline-flex gap-1 items-center" onClick={()=>setTextContent(cur=> cur.toUpperCase())}>
													Uppercase (A-Z)
												</span>
												<span className="p-1 hover:underline text-gray-500 hover:text-gray-700 inline-flex gap-1 items-center" onClick={()=>setTextContent(cur=> cur.toLowerCase())}>
													Lowercase (a-z)
												</span>
											</div>
										}
									</button>
									
								</div>
							</div>
							<div className="box-body">
								<textarea className="ti-form-input" value={textContent} onChange={(e)=>setTextContent(e.target.value)} rows="10" placeholder="Your extracted content"></textarea>
								<div className="flex items-center gap-3 mt-4">
									{
										iconPing.email ?
										<button type="button" className={`ti-btn ti-btn-outline !border-indigo-500 bg-indigo-500 text-white hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`}>
											<div className="ti-spinner w-4 h-4" role="status" aria-label="loading">
												<span className="sr-only"></span>
											</div>
											Extracting...
										</button>
										:
										<button type="button" className={`ti-btn ti-btn-outline !border-indigo-500 bg-indigo-500 text-white hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`} onClick={extractEmails}>Extract Emails</button>
									}
									
									{
										iconPing.phone ?
										<button type="button" className={`ti-btn ti-btn-outline !border-indigo-500 bg-indigo-500 text-white hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`}>
											<div className="ti-spinner w-4 h-4" role="status" aria-label="loading">
												<span className="sr-only"></span>
											</div>
											Extracting...
										</button>
										:
										<button type="button" className={`ti-btn ti-btn-outline !border-indigo-500 bg-indigo-500 text-white hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`} onClick={extractPhones}>Extract Phone</button>
									}
								</div>
							</div>
						</div>
					</div>
				}
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
										<Download customCls={"ti-btn ti-btn-outline !border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10"} csvHeaders={csvHeaders} data={data} fileName={"image-data-scraper.csv"}/>
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
				<DownloadBox csvHeaders={csvHeaders} data={data.length ? data : []} fileName={"image-data-scraper"} isModal={isDownload} closeModel={closeModel}/>
			}
			{/* alert boxes */}
		</div>
	);
};

export default ImageDataScraper;
