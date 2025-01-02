"use client"
import React, { useEffect, useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import { checkWhoIs, getDomainData } from "@/shared/apis/api";
import { useUserContext } from "@/shared/userContext/userContext";
import { WhoisDownloadBox } from "@/shared/layout-components/dashboard/AlertBox";
import UpgradePlan from "@/shared/layout-components/dashboard/UpgradePlan";
const Select = dynamic(() => import("react-select"), { ssr: false });

const WhoisDatabase = () => {
	const fileSize = [
		{
			year: "2016",
			month: "January",
			size: "115.6 MB",
		},
		{
			year: "2016",
			month: "February",
			size: "359.5 MB",
		},
		{
			year: "2016",
			month: "March",
			size: "357.5 MB",
		},
		{
			year: "2016",
			month: "April",
			size: "289 MB",
		},
		{
			year: "2016",
			month: "May",
			size: "262.9 MB",
		},
		{
			year: "2016",
			month: "June",
			size: "238.8 MB",
		},
		{
			year: "2016",
			month: "July",
			size: "248 MB",
		},
		{
			year: "2016",
			month: "August",
			size: "281.2 MB",
		},
		{
			year: "2016",
			month: "September",
			size: "143.9 MB",
		},
		{
			year: "2016",
			month: "October",
			size: "290.6 MB",
		},
		{
			year: "2016",
			month: "November",
			size: "260.2 MB",
		},
		{
			year: "2016",
			month: "December",
			size: "260.7 MB",
		},
		{
			year: "2017",
			month: "January",
			size: "1.81 GB",
		},
		{
			year: "2017",
			month: "February",
			size: "1.66 GB",
		},
		{
			year: "2017",
			month: "March",
			size: "2.07 GB",
			url: "",
		},
		{
			year: "2017",
			month: "April",
			size: "1.79 GB",
		},
		{
			year: "2017",
			month: "May",
			size: "1.78 GB",
		},
		{
			year: "2017",
			month: "June",
			size: "1.41 GB",
		},
		{
			year: "2017",
			month: "July",
			size: "1.27 GB",
		},
		{
			year: "2017",
			month: "August",
			size: "1.24 GB",
		},
		{
			year: "2017",
			month: "September",
			size: "1.26 GB",
		},
		{
			year: "2017",
			month: "October",
			size: "1.28 GB",
		},
		{
			year: "2017",
			month: "November",
			size: "1.42 GB",
		},
		{
			year: "2017",
			month: "December",
			size: "1.09 GB",
		},
		{
			year: "2018",
			month: "January",
			size: "1.32 GB",
		},
		{
			year: "2018",
			month: "February",
			size: "1.08 GB",
		},
		{
			year: "2018",
			month: "March",
			size: "1.55 GB",
		},
		{
			year: "2018",
			month: "April",
			size: "1.16 GB",
		},
		{
			year: "2018",
			month: "May",
			size: "1.31 GB",
		},
		{
			year: "2018",
			month: "June",
			size: "1.25 GB",
		},
		{
			year: "2018",
			month: "July",
			size: "1.25 GB",
		},
		{
			year: "2018",
			month: "August",
			size: "1.1 GB",
		},
		{
			year: "2018",
			month: "September",
			size: "1.08 GB",
		},
		{
			year: "2018",
			month: "October",
			size: "1.15 GB",
		},
		{
			year: "2018",
			month: "November",
			size: "1.11 GB",
		},
		{
			year: "2018",
			month: "December",
			size: "959.5 MB",
		},
		{
			year: "2019",
			month: "January",
			size: "1.34 GB",
		},
		{
			year: "2019",
			month: "February",
			size: "1.15 GB",
		},
		{
			year: "2019",
			month: "March",
			size: "1.07 GB",
		},
		{
			year: "2019",
			month: "April",
			size: "1.03 GB",
		},
		{
			year: "2019",
			month: "May",
			size: "1021.4 MB",
		},
		{
			year: "2019",
			month: "June",
			size: "998.9 MB",
		},
		{
			year: "2019",
			month: "July",
			size: "989 MB",
		},
		{
			year: "2019",
			month: "August",
			size: "1000.2 MB",
		},
		{
			year: "2019",
			month: "September",
			size: "999.9 MB",
		},
		{
			year: "2019",
			month: "October",
			size: "1.39 GB",
		},
		{
			year: "2019",
			month: "November",
			size: "1.08 GB",
		},
		{
			year: "2019",
			month: "December",
			size: "953.5 MB",
		},
		{
			year: "2020",
			month: "January",
			size: "1021.4 MB",
		},
		{
			year: "2020",
			month: "February",
			size: "912.2 MB",
		},
		{
			year: "2020",
			month: "March",
			size: "1.1 GB",
		},
		{
			year: "2020",
			month: "April",
			size: "1001.2 MB",
		},
		{
			year: "2020",
			month: "May",
			size: "1020.7 MB",
		},
		{
			year: "2020",
			month: "June",
			size: "938.3 MB",
		},
		{
			year: "2020",
			month: "July",
			size: "973.2 MB",
		},
		{
			year: "2020",
			month: "August",
			size: "968.9 MB",
		},
		{
			year: "2020",
			month: "September",
			size: "969.6 MB",
		},
		{
			year: "2020",
			month: "October",
			size: "993.7 MB",
		},
		{
			year: "2020",
			month: "November",
			size: "1009.3 MB",
		},
		{
			year: "2020",
			month: "December",
			size: "1.01 GB",
		},
		{
			year: "2021",
			month: "January",
			size: "1.04 GB",
		},
		{
			year: "2021",
			month: "February",
			size: "1013.6 GB",
		},
		{
			year: "2021",
			month: "March",
			size: "1.08 GB",
		},
		{
			year: "2021",
			month: "April",
			size: "1 GB",
		},
		{
			year: "2021",
			month: "May",
			size: "1005.1 MB",
		},
		{
			year: "2021",
			month: "June",
			size: "977.3 MB",
		},
		{
			year: "2021",
			month: "July",
			size: "1.06 GB",
		},
		{
			year: "2021",
			month: "August",
			size: "1.03 GB",
		},
		{
			year: "2021",
			month: "September",
			size: "430.4 MB",
		},
		{
			year: "2021",
			month: "October",
			size: "419.6 MB",
		},
		{
			year: "2021",
			month: "November",
			size: "223.9 MB",
		},
		{
			year: "2021",
			month: "December",
			size: "400.1 MB",
		},
		{
			year: "2022",
			month: "January",
			size: "448.1 MB",
		},
		{
			year: "2022",
			month: "February",
			size: "353.7 MB",
		},
		{
			year: "2022",
			month: "March",
			size: "464.6 MB",
		},
		{
			year: "2022",
			month: "April",
			size: "1.01 GB",
		},
		{
			year: "2022",
			month: "May",
			size: "1 GB",
		},
		{
			year: "2022",
			month: "June",
			size: "885.5 MB",
		},
		{
			year: "2022",
			month: "July",
			size: "1.01 GB",
		},
		{
			year: "2022",
			month: "August",
			size: "1.28 GB",
		},
		{
			year: "2022",
			month: "September",
			size: "1.79 GB",
		},
		{
			year: "2022",
			month: "October",
			size: "585.3 MB",
		},
		{
			year: "2022",
			month: "November",
			size: "620.8 MB",
		},
		{
			year: "2022",
			month: "December",
			size: "632.4 MB",
		},
		{
			year: "2023",
			month: "January",
			size: "1.29 GB",
		},
		{
			year: "2023",
			month: "February",
			size: "1.023.1 MB",
		},
		{
			year: "2023",
			month: "March",
			size: "1.15 GB",
		},
		{
			year: "2023",
			month: "April",
			size: "908.5 MB",
		},
		{
			year: "2023",
			month: "May",
			size: "1.06 GB",
		},
		{
			year: "2023",
			month: "June",
			size: "759.3 MB",
		},
		{
			year: "2023",
			month: "July",
			size: "402.3 MB",
		},
		{
			year: "2023",
			month: "August",
			size: "549.5 MB",
		},
		{
			year: "2023",
			month: "September",
			size: "579.6 MB",
		},
		{
			year: "2023",
			month: "October",
			size: "588.6 MB",
		},
		{
			year: "2023",
			month: "November",
			size: "670.9 MB",
		},
		{
			year: "2023",
			month: "December",
			size: "670.2 MB",
		},
	]
	const { isActivated, isVerfified } = useUserContext();
	const [ domainData, setDomainData ] = useState([])
	const [ filterYears, setFilterYears] = useState([]);
	const [ whoisYear, setWhoisYear ] = useState("")
	const [ whoisData, setWhoisData ] = useState([]);
	const [ actualWhoisData, setActualWhoisData ] = useState([]);
	const [showDownloadModal, setShowDownloadModal] = useState(false);

	const toggleErrorBox = () => {
        setShowDownloadModal(!showDownloadModal);
    };

	const handleYearChange = (e)=>{
		setWhoisYear(e)
	}

	const handleSubmit = ()=>{
		if(whoisYear){
			const fetchData = domainData.filter(data=>data.years === String(whoisYear.value)).map(data=>({year: data.years, month: data.month}))
			// const fetchData = domainData.filter(data=>data.years === String(whoisYear.value)).map(data=>({year: data.years, month: data.month}))
			setWhoisData(fetchData)
            setActualWhoisData(fetchData)
		}
		else {
			alert(`Please select country first!`)
		}
	}

    const getTheUrl = async (year, month) => {
        try {
            const response = await checkWhoIs(year, month);
            if (response) {
                if (response.url) {
                    let a = document.createElement('a');
                    a.href = response.url;
                    a.target="_blank";
                    a.click();
                }
            }
        } catch (error) {
            if (error.response.data.message === "Please fill purchase code") setShowDownloadModal(true);
        }
    };

    const handleSearch = (e)=>{
        const value = e.target.value
        const filterdata = actualWhoisData.filter(dt=>{
            let lower = dt.month.toLowerCase()
            if(lower.includes(value.toLowerCase())){
                return dt;
            }
        })
        setWhoisData(filterdata)
    }

	const clearData = ()=>{
		setWhoisData([])
        setActualWhoisData([])
		setWhoisYear("")
	}

    useEffect(()=>{
        setFilterYears(Array.from(new Set(domainData.map(whois=>Number(whois.years)))).sort((a, b) => a - b).map(year=>({value: year, label: year})))
    },[domainData])

    useEffect(()=>{
        const fetchDomainData = async ()=>{
            let data = await getDomainData();
            setDomainData(data);
        }
        fetchDomainData();
    },[])
	return (
		<div>
			<Seo title={"Whois Domain Database"} />
			<PageHeader currentpage="Whois Domain Database" activepage="Lead Generation" img="/assets/iconfonts/dashboard-icon/domain.png" mainpage="Whois Domain Database" />

			<UpgradePlan/>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 md:col-span-6">
					<div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Select Year</h5>
                        </div>
                        <div className="box-body space-y-4">
                            <Select value={whoisYear} classNamePrefix='react-select ti-form-input' id='react-select-3-live-region' className="capitalize" options={filterYears} placeholder='Years' onChange={handleYearChange} />
                        </div>
                    </div>
				</div>
				<div className="col-span-12 md:col-span-6">
					<div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Display Data</h5>
                        </div>
                        <div className="box-body space-y-4">
							<button type="button" onClick={handleSubmit} className="p-2 rounded-sm border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white duration-200">Show Records</button>
                        </div>
                    </div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box orders-table">
						<div className="box-header">
							<div className="sm:flex justify-between">
								<h5 className="box-title my-auto">Whois Records</h5>
								{
									whoisData.length > 0 &&
									<div className="flex gap-2 items-center">
                                        <div>
                                            <input type="email" id="input-email-label" className="py-1 px-2 ti-btn ml-0 md:ml-auto" placeholder="Search Month" onChange={handleSearch} />
                                        </div>

										<button type="button" className="py-1 px-2 ti-btn ml-0 md:ml-auto bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 dark:focus:ring-offset-white/10" onClick={clearData}>
											Clear Data
											<i className="ri-close-line"></i>
										</button>
									</div>
								}
							</div>
						</div>
						<div className="box-body">
							{
								whoisData.length > 0 ?
								<div className="table-bordered rounded-sm overflow-auto">
									<table className="ti-custom-table ti-custom-table-head">
										<thead className="">
											<tr>
												<th scope="col">Year</th>
												<th scope="col">Month</th>
												<th scope="col">File Size</th>
												<th scope="col">Download File</th>
											</tr>
										</thead>
										<tbody>
											{
												whoisData.map(({year, month})=>(
													<tr key={month}>
														<td>
															{year}
														</td>
														<td>
															{month}
														</td>
														<td>
														{
															fileSize.map((fileData)=>(
																(fileData.year === year &&  fileData.month === month) && fileData.size
															))
														}
														</td>
														<td>
														{
															(isActivated)?
															<button onClick={()=>getTheUrl(year, month)} target="_blank" className="px-2 py-1 text-xxxs font-semibold text-primary hover:underline">
																<i className="ri-download-2-line"></i> {" "}
																Click to Download
															</button>
															:
															(whoisData[0].year < 2017)?
															<button onClick={()=>getTheUrl(year, month)} target="_blank" className="px-2 py-1 text-xxxs font-semibold text-primary hover:underline">
																<i className="ri-download-2-line"></i> {" "}
																Click to Download
															</button>
															:
															<button
																onClick={toggleErrorBox}
																type="button"
																className="px-2 py-1 text-xxxs font-medium text-primary border border-indigo-500 rounded-sm hover:bg-primary hover:text-white duration-150"
															>
																<i className="ri-lock-star-line"></i>{" "}
																Premium
															</button>
														}
														</td>
													</tr>
												))
											}
										</tbody>
									</table>
								</div>
								:
								<p className="text-center text-base">There is no data to display</p>
							}
						</div>
					</div>
				</div>
			</div>

			{showDownloadModal && (
                <WhoisDownloadBox closeModel={toggleErrorBox}/>
            )}
		</div>
	);
};

export default WhoisDatabase;
