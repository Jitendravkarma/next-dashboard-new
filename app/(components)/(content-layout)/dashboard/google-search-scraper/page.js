"use client"
import React, { useCallback, useEffect, useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import { keywords } from "@/shared/data/forms/formselect/formselect";
import { getGoogleData, getGoogleGlobalData, getWebsiteData, requestGoogleData, requestWebsiteData } from "@/shared/apis/api";
import DataTable from "@/shared/data/basic-ui/tables/nexttable";
import axios from "axios";
import ContactVia from "@/shared/layout-components/dashboard/ContactVia";
import { ContactBox, DownloadBox, LimitReachedBox, SmsBox, WhatsappBox } from "@/shared/layout-components/dashboard/AlertBox";
import { useUserContext } from "@/shared/userContext/userContext";
import { Download } from "@/shared/layout-components/dashboard/DownloadBtn";
const Select = dynamic(() => import("react-select"), { ssr: false });

const GoogleSearchScraper = () => {
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

	const sourceRef = React.useRef(axios.CancelToken.source());
	const [ numOfData, setNumOfData] = useState(recordData)
	const [ selectedQuery, setSelectedQuery ] = useState("")
	const [ globalQuery, setGlobalQuery ] = useState([]);
	const [ formData, setFormData ] = useState({keyword:"", city: ""});
	const [ progressMsg, setProgressMsg ] = useState("Start Working")
	const [ per, setPer ] = useState(0)
	const [ isScraping, setIsScraping ] = useState(false)
	const [ isExtracting, setIsExtracting ] = useState(false)
	const [ isGlobalLoad, setGlobalLoad ] = useState(false)
	const [ isDownload, setIsDownload ] = useState(false)
	const [ data, setData ] = useState([])

	const [ queryBox, setQueryBox ]= useState([]);

	const csvHeaders = [
        { label: "ID", key: "id" },
        { label: "Title", key: "title" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" },
        { label: "Description", key: "description" },
        { label: "Website", key: "website" }
    ];

	const closeModel = useCallback(()=>{
		setIsDownload(!isDownload)
	},[isDownload])

	const convertData = (data)=>{
		return data.map(({title, link, snippet, phones, emails})=>{
			return {
				website: link,
				title,
				description: snippet,
				phone: phones.length ? phones[0] : "N/A",
				email: emails.length ? emails.join(", ") : "N/A"
			}
		}).filter(item => item.phone !== "N/A" || item.email !== "N/A").map((item, ind)=>({id:ind+1, ...item}));
	}

	const showGlobalData = async ()=>{
		setData([])
		setGlobalLoad(true)
		if(selectedQuery.label){
			const response = await getGoogleData({fetch_id: selectedQuery.value});
			const responseData = response?.data?.data;
			const convertedData = convertData(responseData)
			setData(convertedData)
		}
		setGlobalLoad(false)
	}

	const handleChange = (e)=>{
		const name = e?.target?.name
		const value = e?.target?.value
		if(name){
			setFormData({...formData, city: value})
		}
		else {
			setFormData({...formData, keyword: {value: e.value, label: e.value}})
		}
	}

	const handleQueryChange = (obj)=>{
		setSelectedQuery(obj)
	}

	const addQuery = ()=>{
		if(formData.keyword && formData.city){
			if(formData.city.includes(',')){
				const cities = formData.city.split(',')
				const multiQuery = cities.map( ct=> ({ keyword: formData.keyword, city: ct }) ).slice(0, 5)
				console.log(multiQuery)
				if(queryBox.length < 6){
					setQueryBox([...queryBox, ...multiQuery])
				}
			}
			else {
				if(queryBox.length < 6){
					setQueryBox([...queryBox, {keyword: formData.keyword, city: formData.city}])
				}
			}
			setFormData({keyword:"", city: ""})
		}
	}
	
	const removeQuery = (id)=>{
		const filterQuery = queryBox.filter((data, ind)=> (ind !== id));
		setQueryBox(filterQuery)
	}

	const startScraping =  async ()=>{
		if(queryBox.length){
			sourceRef.current = axios.CancelToken.source();
			setIsScraping(true)
			if(per > 10){
				setPer(0)
			}
			let queries = []
			queryBox.map(({keyword, city})=>{
				let contactQuery = { query : `${keyword.value.trim().toLowerCase()} contact number in ${city.trim().toLowerCase()}` }
				let emailQuery = { query : `${keyword.value.trim().toLowerCase()} email id in ${city.trim().toLowerCase()}` }
				queries.push(contactQuery)
				queries.push(emailQuery)
			})
			
			const makeRequest = queries.map(async query=>{
				const makeRequest = await requestGoogleData(query, {cancelToken: sourceRef.current.token})
				const queryId = makeRequest?.data?.data;
				let countRequest = 0;
				let interval;
				if(queryId){
					const fetchGoogleData = async()=>{
						try {
							countRequest++;
							const response = await getGoogleData({fetch_id: queryId}, {cancelToken: sourceRef.current.token});
							const responseData = response?.data?.data;
							if(!responseData.length){
								return new Promise(resolve=>{
									if( countRequest !== 5){
										interval = setTimeout(async () => {
											resolve(await fetchGoogleData());
										}, 15000);
									}
									else {
										clearInterval(interval);
									}
								})
							}
							else {
								clearInterval(interval);
								return responseData;
							}
						} catch (error) {
							console.log(error)
						}
					}
					return fetchGoogleData();
				}
			})

			Promise.all(makeRequest).then((res) => {
				const filteredResponses = res.filter(
					(res) => res !== null
				).filter(dt=>dt);
				// console.log(filteredResponses)
				if(filteredResponses.length){
					let mergeData = filteredResponses.reduce((amu, cur) => {
						return [...amu, ...cur];
					});
					if (mergeData) {
						const convertedData = convertData(mergeData)
						const countNotNullEmail = convertedData.filter(item=> item.email !== "N/A").length;
						const countNotNullPhone = convertedData.filter(item=> item.phone !== "N/A").length;
						const countNotNullURL = convertedData.filter(item=> item.website !== "N/A").length;
						// console.log(countNotNullEmail, countNotNullPhone, countNotNullURL)
						dashboardRecords("google", "map", queryBox?.length, countNotNullURL, countNotNullEmail, countNotNullPhone);
						setData(convertedData)
						setPer(100)
						setProgressMsg(`Proccess completed!`)
					}
				}
			}).catch((err) => {
				console.log(err)
				const error = err?.response?.data?.message;
				handleLimitErr(error)
				setProgressMsg("Start Working")
			}).finally(()=>{
				setIsScraping(false)
			})
		}
	}

	function stopScraping() {
        sourceRef.current.cancel('Post request canceled');  
        setProgressMsg("Process stopped!")
		setIsScraping(false)
		setIsExtracting(false)
    };

	const deepExtractor = async ()=>{
		const filterWebsite = data.filter(dt=>( dt.website !== "N/A" && ( dt.email === "N/A" || dt.phone === "N/A" )))
		if(filterWebsite.length){
			if(per > 10){
				setPer(0)
			}
			sourceRef.current = axios.CancelToken.source();
			const urls = filterWebsite.map(dt=>dt.website)
			const country = Array.isArray(urls) ? Array.from({length: urls.length}, ()=> "india") : urls;
			if(urls.length){
				setIsExtracting(true)
				const requestId = await requestWebsiteData({ query: "india", country_list: country, url_list: urls });
				if(requestId){
					let interval;
					let request_num = 0
					let cur_len = 0;
					const fetch_data = async () =>{
						const bulk_data = await getWebsiteData({fetch_id: requestId}, {cancelToken: sourceRef.current.token});
						if(!bulk_data.length){
						interval = setTimeout(()=>{
							fetch_data()
						}, 10000);
						}
						else {
						clearInterval(interval)
						const websiteData = bulk_data.map((item, ind)=>{
							// if(item?.mobileNumbers?.length){
							//   return {sno: ind + 1, ...item, phone: item.mobileNumbers?.length ? item.mobileNumbers?.join(", ") : "N/A"};
							// }
							return {
								sno: ind + 1, 
								...item, 
								url: item.url,
								emails: item.Email ? item.Email.split(',') : '',
								mobile: item.mobile ? item.mobile.split(',') : ""
							};
						}).filter(dt=>dt);
						
						if(websiteData.length){
							interval = setTimeout(()=>{
								request_num++;
		
								if(request_num === 8 && cur_len !== websiteData.length){
									request_num = 0;
									fetch_data()
									// console.log(`request num reset!`, cur_len)
								}
		
								else if((cur_len !== websiteData.length && request_num !== 5)){
									fetch_data()
									cur_len = websiteData.length
									// console.log(`fetching after websiteData found!`, request_num, cur_len)
								}
		
								else {
									// console.log(cur_len, data.length, request_num)
									const updatedData = data.map((cur)=>{
										const findData = websiteData.find(dt=>dt.url === cur.website)
										if(findData && findData.Email){
											cur.email = findData.Email
										}
										if(findData && findData.mobile.length){
											cur.phone = findData.mobile[0]
										}
										return cur;
									})
									setData(updatedData)
									clearInterval(interval)
									setIsExtracting(false)
									setPer(100)
									setProgressMsg("Added additional data!")
								}
							}, 20000)
						}
						}
					}
					fetch_data();
				}
			}
		}
	}

	const clearData = useCallback(()=>{
		setData([])
		setProgressMsg('Start Working')
		setPer(0)
		setQueryBox([])
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
	},[])

	useEffect(()=>{
		let target = 80;
		let interval;
		if(isScraping){
			setProgressMsg("Working on it...")
			interval = setInterval(()=>{
				setPer(cur=>{
					let inc = cur + 0.1
					if(cur === target || cur === 100){
						clearInterval(interval)
						return cur;
					}
					else {
						return inc
					}
				})
			}, 200)
		}
		return ()=>{
			clearInterval(interval)
		}
	}, [ isScraping ])
	
	useEffect(()=>{
		let target = 80;
		let interval;
		if(isExtracting){
			setProgressMsg("Working on it...")
			interval = setInterval(()=>{
				setPer(cur=>{
					let inc = cur + 0.1
					if(cur === target || cur === 100){
						clearInterval(interval)
						return cur;
					}
					else {
						return inc
					}
				})
			}, 200)
		}
		return ()=>{
			clearInterval(interval)
		}
	}, [ isExtracting ])

	useEffect(()=>{
		const globalData = async ()=>{
			let data = await getGoogleGlobalData();
			const limitErr = data?.response?.data?.message;
			handleLimitErr(limitErr)
			if(data.length){
				const convertData = data.map(({order_id, query})=>{
					return { label: query, value: order_id }
				})
				setGlobalQuery(convertData)
			}
		}
		globalData()
	}, [])

	return (
		<div>
			<Seo title={"Google Search Scraper"} />
			<PageHeader currentpage="Google Search Scraper" activepage="Lead Generation" img="/assets/iconfonts/dashboard-icon/google.png" mainpage="Google Search Scraper" />

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
                            <h5 className="box-title">Progress Status</h5>
                        </div>
                        <div className="box-body space-y-4">
                            {/* <!-- Progress --> */}
                            <div className="">
                                <div className="mb-2 flex justify-between items-center">
                                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">{progressMsg}</h3>
                                    <span className="text-sm text-gray-800 dark:text-white">{parseInt(per)}%</span>
                                </div>
                                <div className="ti-main-progress w-full h-2 bg-gray-200 dark:bg-bodybg">
                                    <div className="relative ti-main-progress-bar bg-primary rounded-full text-xs text-white text-center duration-200" role="progressbar" style={{ width: `${per}%` }} aria-valuenow={per} aria-valuemin={0} aria-valuemax={100}>
										{
											(isScraping || isExtracting) && <div className="absolute right-0 w-2 h-2 animate-ping bg-gray-200 rounded-full"/>
										}
									</div>
                                </div>
                            </div>
                            {/* <!-- End Progress --> */}
                        </div>
                    </div>

					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Globally Searched Queries</h5>
						</div>
						<div className="box-body">
							<Select classNamePrefix='react-select' id='react-select-3-live-region' className="capitalize" value={selectedQuery} options={globalQuery} placeholder='Select Query' onChange={handleQueryChange} />

							<div className="mt-3">
								<button type="button" className={`ti-btn ti-btn-outline !border-indigo-500 text-indigo-500 ${selectedQuery ? 	"bg-indigo-500 text-white" : "hover:text-white hover:bg-indigo-500"} hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`} onClick={showGlobalData}>
									{
										isGlobalLoad ? 
										<>
											<div className="ti-spinner w-4 h-4" role="status" aria-label="loading">
												<span className="sr-only"></span>
											</div>
											Loading...
										</>
									 	: "Show Data"
									}
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Initial Steps</h5>
						</div>
						<div className="box-body grid gap-5">
							<div className="col-span-12 xxl:col-span-8">
								<label className="ti-form-select-label">Search Keywords</label>
								<Select value={formData.keyword} classNamePrefix='react-select ti-form-input' id='react-select-3-live-region' className="capitalize" options={keywords} placeholder='Type Keyword' onChange={handleChange} />
							</div>
							<div className="col-span-12 xxl:col-span-4">
								<label className="ti-form-select-label" id="city">Enter City</label>
								<input type="text" name="city" value={formData.city} className="capitalize py-2 px-3 ti-form-input disabled:bg-gray-100 disabled:cursor-not-allowed" id="city" placeholder="Ex. London, Peris, Delhi" onChange={handleChange} disabled={!formData.keyword} />
							</div>
							<div className="col-span-12">
								<label className="ti-form-select-label">Selected Queries</label>
								<div className={`border-gray-200 ${queryBox.length ? "bg-white" : "bg-gray-100"} p-2 min-h-10 h-20 max-h-20 overflow-auto border rounded-sm grid grid-cols-1 ${queryBox.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"} items-center gap-1`}>
									{
										queryBox.length > 0 &&
										queryBox.map(({ keyword, city }, ind)=>(
											<span key={ind} className={`inline-flex rounded-sm items-center justify-between capitalize border border-indigo-200 ${queryBox.length < 2 && "w-fit"}`} style={{fontSize:'11px'}}>
												<span title={keyword.value} className="p-1 pl-2 inline-block">
													{keyword.value} contact no & email id in {city}
												</span>
												<button className="py-1 px-2 rounded-r-sm bg-indigo-100 hover:text-white hover:bg-indigo-500 duration-200" title="Remove query" onClick={()=>removeQuery(ind)}>
													<i className="ri-close-line"></i>
												</button>
											</span>
										))
									}
									{
										queryBox.length > 1 &&
										<div className="w-20 mt-auto">
											<button className="p-1 px-2 rounded-sm text-xs border border-indigo-500 hover:text-white hover:bg-indigo-500" onClick={()=>setQueryBox([])}>Clear all</button>
										</div>
									}
								</div>
							</div>
							<div className="col-span-12 flex flex-wrap gap-1 items-center overflow-hidden">
								<button type="button" className={`ti-btn ti-btn-outline !border-indigo-500 text-indigo-500 ${formData.city ? "bg-indigo-500 text-white" : "hover:text-white hover:bg-indigo-500"} hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`} onClick={addQuery}>Add</button>
								
								<button type="button" className={`ti-btn ti-btn-outline !border-indigo-500 text-indigo-500 ${(queryBox.length && !isScraping && !isExtracting) ? "text-white bg-indigo-500" : "hover:text-white hover:bg-indigo-500"} hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`} onClick={startScraping} disabled={isScraping || isExtracting}>Start</button>
								
								<button type="button" className={`ti-btn ti-btn-outline !border-indigo-500 text-indigo-500 ${(isScraping || isExtracting) ? "text-white bg-indigo-500" : "hover:text-white hover:bg-indigo-500"} hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`} onClick={stopScraping} disabled={!isScraping && !isExtracting}>Stop</button>
								
								{
									( numOfData[0].title === "website" && numOfData[0].text > 0 ) &&
									<button type="button" className={`ti-btn ti-btn-outline !border-indigo-500 text-indigo-500 ${(numOfData[0].text > 0 && !isExtracting) ? "text-white bg-indigo-500" : "hover:text-white hover:bg-indigo-500"} hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`} onClick={deepExtractor} disabled={isExtracting || isScraping}>
										Deep Extractor
									</button>
								}
								
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
								<DataTable columns={columns} progressStatus={{isScraping, isExtracting}} data={data} clearData={clearData} handleDataCount={updateNumOfData}/>

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

export default GoogleSearchScraper;
