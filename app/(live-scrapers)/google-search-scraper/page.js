"use client"
import Link from 'next/link'
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import DataTable from "@/shared/data/basic-ui/tables/nexttable";
import { useUserContext } from '@/shared/userContext/userContext';
import Snackbar from '@/shared/layout-components/dashboard/SnackBar';
import { Download } from '@/shared/layout-components/dashboard/DownloadBtn';

const GoogleSearchScraper = () => {
    const queryLimitAmount = 1000;
    const websiteIcon = <i className="ri-global-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const emailIcon = <i className="ri-mail-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const phoneIcon = <i className="ri-phone-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>

    const recordData = [
		{ id: 1, icon: phoneIcon, title:'phone', class: "Total Phone", text: 0, color: "primary/10" },
        { id: 2, icon: emailIcon, title:'email', class: "Total Email", text: 0, color: "primary/10" },
		{ id: 3, icon: websiteIcon, title:'website', class: "Total Website", text: 0, color: "primary/10" },
	];

    const searchCsvHeader = [
        { label: "Title", key: "title" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" },
        // { label: "WhatsApp", key: "whatsapp" },
        { label: "Description", key: "description" },
        // { label: "Social Links", key: "social_links_download" },
        { label: "Keywords", key: "keywords" },
        { label: "Website", key: "website" },
        // { label: "Country", key: "country" },
        { label: "Search Engine Name", key: "engine_name" },
        { label: "Searched Keyword", key: "query" }
    ];

    const [ searchEngine, setSearchEngine ] = useState([
		{ label: "Google", value: "google" },
		{ label: "Bing", value: "bing" },
		{ label: "DuckDuckGo", value: "duck" },
		{ label: "Yahoo", value: "yahoo" }
	]);
	
    const allEngines = [
		{ full_engine_name: "Google", engine_name: "google", url: '/api/google_search_scraper' },
		{ full_engine_name: "Yahoo", engine_name: "yahoo", url: '/api/yahoo_search_scraper' },
		{ full_engine_name: "DuckDuckGo", engine_name: "duck", url: '/api/duck_search_scraper' },
		{ full_engine_name: "Bing", engine_name: "bing", url: '/api/bing_search_scraper' },
	];
    
    const columns = [
		// {
		//   headerName: "Source Website",
		//   field: "website",
		//   width: 150,
		//   renderCell: ({row})=>(
		// 	<div className="h-full">
		// 		{
		// 			(row.website && row.website !== "N/A") ?
		// 			<Link href={row.website} className="text-blue-500 hover:underline" target="_blank">
		// 				Visit Website
		// 			</Link>
		// 			:
		// 			<span>{row.website}</span>
		// 		}
		// 	</div>
		//   ),
		//   editable: false
		// },
        {
		  headerName: "S.N",
		  field: "id",
		  width: 100,
		  renderCell: ({row})=>(
			<span>{row.id}</span>
		  ),
		  editable: false
		},
		{
			headerName: "Phone",
			field: "phone",
			width: 200,
			renderCell: ({row})=>(
                (row.phone && row.phone !== "N/A") ?
				<Link href={`tel:${row.phone}`} title='Click to call' className='hover:underline' target='_blank'>{row.phone}</Link>
                :
                <span>N/A</span>
			),
			editable: false
		},
		{
			headerName: "Email",
			field: "email",
			width: 200,
            renderCell: ({row})=>(
				(row.email && row.email !== "N/A") ?
				<Link href={`mailto:${row.email}`} title='Click to email' className='hover:underline' target='_blank'>{row.email}</Link>
                :
                <span>N/A</span>
			),
			editable: false
		},
		// {
		// 	headerName: "Title",
		//   field: "title",
		//   width: 200,
		//   editable: false
		// },
		// {
		//   headerName: "Description",
		//   field: "description",
		//   width: 400,
		//   editable: false
		// },
		// {
		//   headerName: "Keywords",
		//   field: "keywords",
		//   width: 400,
		//   editable: false
		// },
		// {
		//   headerName: "Search Engine",
		//   field: "engine_name",
		//   width: 200,
		//   renderCell: ({row})=>(
		// 	<span className="capitalize">{row.engine_name}</span>
		//   ),
		//   editable: false
		// },
		{
		  headerName: "Searched Keyword",
		  field: "query",
		  width: 400,
		  editable: false
		}
	];

    const sourceRef = React.useRef(axios.CancelToken.source());
	const stopFlag = React.useRef();
    const { openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext();
    const [ engineName, setEngineName ] = useState({label: "google", value: "google"})
    const [ numOfData, setNumOfData] = useState(recordData);
    const [ progressMsg, setProgressMsg ] = useState("Start Working")
	const [ per, setPer ] = useState(0)
    const [ isScraping, setIsScraping ] = useState(false);
    const [ formData, setFormData ] = useState({keyword:"", city: ""});
    const [ queryBox, setQueryBox ]= useState([]);
    const [ data, setData ] = useState([]);
    
    const handleSearchEngine = (obj)=>setEngineName(obj);
    
    const handleChange = (e)=>{
		const name = e?.target?.name
		const value = e?.target?.value
    	setFormData({...formData, [name]: value})
	}

    const removeQuery = (id)=>{
		const filterQuery = queryBox.filter((data, ind)=> (ind !== id));
		setQueryBox(filterQuery)
	}

    const addQuery = ()=>{
		let keyword = formData.keyword.toLowerCase()
		const validateQuery = ()=>{
			let city = formData.city;
			let custom = formData.keyword;
			let cities = []
			if(city.includes(',')){
				cities = city.split(',').filter(q=>q?.trim())
			}
			if(custom && city){
				if(cities.length){
					if(queryBox.length < queryLimitAmount){
						let multiQuery = []
                        if(custom.includes(',')){
                            multiQuery = custom.split(',').filter(q=>q?.trim()).map(keyword=>{
                                const allQuery = cities.map(ct=>({keyword: keyword.trim(), city: ct.trim()}))
                                return allQuery
                            }).flat()
                        }
                        else multiQuery = cities.map( ct=> ({ keyword: custom, city: ct }) )
						if(multiQuery.length){
							const sliced = multiQuery.slice(0, queryLimitAmount)
							setQueryBox([...queryBox, ...sliced])
						}
					}
				}
				else {
					if(queryBox.length < queryLimitAmount) {
                        if(custom.includes(',')){
                            let multiQuery = custom.split(',').filter(q=>q?.trim()).map(key=>{
                                return {keyword: key.trim(), city: city.trim()}
                            }).slice(0, queryLimitAmount)
                            setQueryBox([...queryBox, ...multiQuery])
                        }
                        else setQueryBox([...queryBox, {keyword: custom, city: city.trim()}])
					}
				}
				setFormData({keyword:"", city: ""})
			}
		}
		
		if(keyword && formData.city){
            if(queryBox.length < queryLimitAmount){
                validateQuery()
            }
            else {
                openSnackBar();
                handleSnackMessage("You cannot perform more than 1000 searches at a time.", "danger", "text-white")
            }
		}
		else {
			openSnackBar();
			handleSnackMessage("Please type keywords and city.", "danger", "text-white")
		}
	}

    const startScraping = async ()=>{
		setNumOfData(recordData)
		setData([])
		sourceRef.current = axios.CancelToken.source();
		stopFlag.current = false;
		if(per > 10){
			setPer(0)
		}
		if(queryBox.length){
			let engine;
			if(engineName.value){
				engine = searchEngine.find(item=>item.value === engineName.value)
			}
			let queries = []

			const queryGenerator = (keyword, city, phone_query)=>{
				let contactQuery;
				if(keyword.value){
					contactQuery = { query : `${keyword.value.trim().toLowerCase()} ${phone_query} in ${city.trim().toLowerCase()}` }
				}
				else {
					contactQuery = { query : `${keyword.trim().toLowerCase()} ${phone_query} in ${city.trim().toLowerCase()}` }
				}
				return contactQuery
			}
			queryBox.map(({keyword, city})=>{
				const checkQuery = queryGenerator(keyword, city, "phone and email")
				queries.push(checkQuery)
			})

			// if(engine && engine.value){
				setIsScraping(true)
				let results = []
				for(let query of queries){
					if (stopFlag.current) break;
                    for(let i = 0; i < 100; i+=10){
                        if (stopFlag.current) break;										
                        try {
                            const callUnlocker = await axios.post('/api/web_unlocker', { query: query.query, startFrom: i }, {cancelToken: sourceRef.current.token});
                            const resp_data = callUnlocker.data;

                            const collected_data = []
                            resp_data.map((item, idx)=>{
                                if(item.phones.length || item.emails.length){
                                    const getPhones = item.phones;
                                    const emails = item.emails;
                                    const phones = getPhones;
                                    const maxLength = Math.max(emails.length, phones.length);
                                    const social_links = item.socialMediaLinks || [];
                                    const filterSocialUrl = social_links.filter(link => link && link.url).map(l => l.url);
                                    const newData = Array.from({length: maxLength}, (_, index)=>({
                                        website: item.website || "N/A",
                                        title: item.company || "N/A",
                                        description: item.description || "N/A",
                                        keywords: item.keywords || "N/A",
                                        phone: phones[index] || 'N/A',
                                        email: emails[index] || 'N/A',
                                        whatsapp: "N/A",
                                        social_links: social_links.length ? social_links : [],
                                        social_links_download: filterSocialUrl.length ? filterSocialUrl.join(", ") : "N/A",
                                        // engine_name: findEngine.engine_name,
                                        query: query.query,
                                    }));
                                    collected_data.push(...newData);
                                }
                            });
                            console.log(collected_data);
                            results.unshift(...collected_data);
                            setData(cur=>([...collected_data, ...cur]));
                        } catch (error) {
                            console.log(error);
                            break;
                        }
                    }
				}
				if(results.length){
                    if(results.length){
                        console.log(results)
                        setData(results)
					}
				}
				setProgressMsg(`Proccess completed!`)
				setPer(100)
				setIsScraping(false)
			// }
		}
		else {
			alert(`Please select any query or keyword`)
		}
	}

    function stopScraping() {
        sourceRef.current.cancel('Post request canceled');  
		stopFlag.current = true;
        setProgressMsg("Scraping stopped!")
		setIsScraping(false)
    };

    const clearData = useCallback(()=>{
		sourceRef.current.cancel('Post request canceled');  
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

    return (
        <div className='py-5 px-20 max-w-7xl mx-auto'>
            {/* snackbar */}
            {
				openSnack &&
				<Snackbar isOpen={openSnack} content={snackMessage}/>
			}

            {/* header */}
            <div className="block justify-between page-header md:flex">
                <div>
                    <h3 className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-white text-lg sm:text-2xl font-medium flex gap-3 items-center">
                        <img src={"https://cdn-icons-png.flaticon.com/128/6897/6897087.png"} className="w-8"/>
                        Google Search Scraper
                    </h3>
                </div>
            </div>

            {/* main */}
            <div className="grid grid-cols-12 gap-x-5">
                {/* data counter */}
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

                {/* progress section */}
                <div className="col-span-12 xl:col-span-6">
                    <div className='box'>
                        <div className="box-header">
                            <h5 className="box-title capitalize">Intial Steps</h5>
                        </div>
                        <div className="box-body grid grid-cols-12 gap-5">
                            {/* <!-- Progress --> */}
                            <div className={`col-span-12 md:col-span-6 flex flex-col gap-3 my-2 sm:my-0`}>
                                <div>
                                    <label className="ti-form-select-label" htmlFor="keyword">Type Keywords</label>
                                    <input type="text" name="keyword" value={formData.keyword} className="capitalize py-2 px-3 ti-form-input disabled:bg-gray-100 disabled:cursor-not-allowed" id="keyword" placeholder="Ex. Schools, Colleges" onChange={handleChange} />
                                </div>
                            </div>
                            <div className={`col-span-12 md:col-span-6 my-2 sm:my-0`}>
                                <div className="flex gap-2">
									<label className="ti-form-select-label" htmlFor="city">Type City</label>
									<i className="hover:font-bold ri-error-warning-line cursor-pointer text-base" title="Use comma ( , ) for multiple cities: (New york, London, Paris)."></i>
								</div>
                                <input type="text" name="city" value={formData.city} className="capitalize py-2 px-3 ti-form-input disabled:bg-gray-100 disabled:cursor-not-allowed" id="city" placeholder="Ex. London, Paris, Delhi" onChange={handleChange} disabled={!formData.keyword} />
                            </div>
                            <div className="col-span-12 flex flex-wrap gap-1 items-center overflow-hidden mt-2 sm:mt-0">
                                <button type="button" className={`m-0 py-1 px-2 border rounded-sm mr-1 !border-indigo-500 text-indigo-500 ${formData.city ? "bg-indigo-500 text-white" : "hover:text-white hover:bg-indigo-500"} hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`} onClick={addQuery}>Add</button>
                                {
									isScraping &&
									<button type="button" className={`m-0 py-1 px-2 border rounded-sm mr-1 !border-indigo-500 text-indigo-500 ${(queryBox.length && !isScraping) ? "text-white bg-indigo-500" : "hover:text-white hover:bg-indigo-500"} hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`} onClick={stopScraping} disabled={!isScraping}>
										<div className="ti-spinner w-3 h-3 mr-1" role="status" aria-label="loading">
											<span className="sr-only"></span>
										</div>
										Stop
									</button>
								}
								{
									!isScraping &&
									<button type="button" className={`m-0 py-1 px-2 border rounded-sm mr-1 !border-indigo-500 text-indigo-500 ${(queryBox.length && !isScraping) ? "text-white bg-indigo-500" : "hover:text-white hover:bg-indigo-500"} hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10`} onClick={startScraping} disabled={isScraping}>
										Start
									</button>
								}
                            </div>
                            {/* <!-- End Progress --> */}
                        </div>
                    </div>
                </div>

                {/* queries section */}
                <div className="col-span-12 xl:col-span-6">
                    <div className='box'>
                        <div className="box-header">
                            <h5 className="box-title">Queries</h5>
                        </div>

                        <div className="box-body grid grid-cols-12 sm:gap-5 items-end">
                            {/* <div className={`col-span-12 md:col-span-6 my-2 sm:my-0`}>
								<div className="flex gap-2">
									<label className="ti-form-select-label" htmlFor="city">Search Engine</label>
								</div>
								<Select value={engineName} classNamePrefix='react-select ti-form-input' id='react-select-3-live-region' className="capitalize" options={searchEngine} placeholder='Select Search Engine' onChange={handleSearchEngine} />
							</div> */}
                            <div className="col-span-12">
                                <div className="flex justify-between items-center flex-wrap gap-2">
									<label className="ti-form-select-label">Selected Queries</label>
									<span className="ti-form-select-label">Total Queries <b>{queryBox.length}</b></span>
								</div>
                                <div className={`border-gray-200 ${queryBox.length ? "bg-white" : "bg-gray-100"} p-2 min-h-10 h-20 resize-y queryBoxScrollbar overflow-auto border rounded-sm grid grid-cols-1 ${queryBox.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"} items-center gap-1`}>
									{
										queryBox.length > 0 &&
										queryBox.map(({ keyword, city }, ind)=>{
											if(keyword.value){
												return (
													<span key={ind} className={`inline-flex rounded-sm items-center justify-between capitalize border border-indigo-200 ${queryBox.length < 2 && "w-fit"}`} style={{fontSize:'11px'}}>
														<span title={keyword.value} className="p-1 pl-2 inline-block">
															{keyword.value} contact no & email id in {city}
														</span>
														<button className="py-1 px-2 rounded-r-sm bg-indigo-100 hover:text-white hover:bg-indigo-500 duration-200" title="Remove query" onClick={()=>removeQuery(ind)} disabled={isScraping}>
															<i className="ri-close-line"></i>
														</button>
													</span>
												)
											}
											else {
												return (
													<span key={ind} className={`inline-flex rounded-sm items-center justify-between capitalize border border-indigo-200 ${queryBox.length < 2 && "w-fit"}`} style={{fontSize:'11px'}}>
														<span title={keyword} className="p-1 pl-2 inline-block">
															{keyword} contact no & email id in {city}
														</span>
														<button className="py-1 px-2 rounded-r-sm bg-indigo-100 hover:text-white hover:bg-indigo-500 duration-200" title="Remove query" onClick={()=>removeQuery(ind)} disabled={isScraping}>
															<i className="ri-close-line"></i>
														</button>
													</span>
												)
											}
										})
									}
									{
										queryBox.length > 1 &&
										<div className="w-20 flex items-center">
											<button className="p-1 px-2 rounded-sm text-xs border border-indigo-500 hover:text-white hover:bg-indigo-500" onClick={()=>setQueryBox([])} disabled={isScraping}>Clear all</button>
										</div>
									}
								</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* data table */}
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

								<div className="px-6 pb-4 flex gap-3 items-center flex-wrap">
                                    <Download csvHeaders={searchCsvHeader} data={data} fileName={"search-engine-scraper.csv"}/>
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
            
        </div>
    )
}

export default GoogleSearchScraper