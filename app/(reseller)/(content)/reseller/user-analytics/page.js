"use client"
import React, { useCallback, useEffect, useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import DataTable from "@/shared/data/basic-ui/tables/nexttable";
import ContactVia from "@/shared/layout-components/dashboard/ContactVia";
import { useUserContext } from "@/shared/userContext/userContext";
import { Download } from "@/shared/layout-components/dashboard/DownloadBtn";
import { ContactBox, LimitReachedBox, SmsBox, ValidityBox, WhatsappBox } from "@/shared/layout-components/dashboard/AlertBox";
import Snackbar from "@/shared/layout-components/dashboard/SnackBar";
import { resellerUsers } from "@/shared/apis/api";

const UserAnalytics = () => {
	const { contactNum, smsNum, whatsAppNum, limitErr, openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
	const [ validity, setValidity ] = useState(false);
	const [ userId, setUserId ] = useState(false);
	const [ startDate, setStartDate ] = useState("");
	const [ data, setData ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const columns = [
		// {
		// 	field: 'actions',
		// 	headerName: 'Actions',
		// 	width: 200,
		// 	renderCell: (params) => {
		// 		const phone = params.row.phone;
		// 		const email = params.row.email;
		// 		return (
		// 			<ContactVia contact={{phone, email, customNum:false}}/>
		// 		);
		// 	},
		// },
		{
			field: 'user_id',
			headerName: 'User Id',
			width: 200,
			editable: false,
		},
		{
			headerName: "User Name",
			field: "name",
			width: 300,
			renderCell: (params)=>
				(<span className="capitalize">{params.value}</span>)
			,
			editable: false
		},
		{
			headerName: "Email",
			field: "email",
			width: 300,
			editable: false
		},
		// {
		// 	headerName: "Phone",
		// 	field: "phone",
		// 	width: 170,
		// 	editable: false
		// },
		{
			headerName: "Access Code",
			field: "access_code",
			width: 300,
			renderCell: (params) => {
				const value = params.row.access_code;
				return (
				  <span title={`${params.row.validity ? params.row.expired ? `Plan is expired` : `Plan is active` : "Need to set validity"}`} className={`cursor-pointer ${params.row.expired ? "bg-danger/10 text-danger" : params.row.validity ? "bg-success/10 text-success" : "bg-warning/10 text-warning"} badge leading-none rounded-sm`}>
					{value}
				  </span>
				)
			},
			editable: false
		},
		// {
		// 	headerName: "Plan Date",
		// 	field: "plan_date",
		// 	width: 150,
		// 	renderCell: (params) => {
		// 		const value = params.value;
		// 		return value && (
		// 		  <span>
		// 			{value}
		// 		  </span>
		// 		)
		// 	},
		// 	editable: false
		// },
		// {
		// 	headerName: "Plan Expiry",
		// 	field: "validity",
		// 	width: 150,
		// 	renderCell: (params) => {
		// 		const value = params.value;
		// 		const id = params.row.id;
		// 		const editValidity = ()=>{
		// 			setValidity(true)
		// 			setUserId(id)
		// 			setStartDate(params.row.plan_date)
		// 		}
		// 		return value ? (
		// 		  <span>
		// 			{
		// 				params.row.expired ?
		// 				<span className="text-danger font-semibold" title="Plan expired!">{value}</span>
		// 				:
		// 				<span className="font-semibold">{value}</span>
		// 			}
		// 		  </span>
		// 		) : (
		// 			<button className="!m-0 hs-tooltip-toggle relative ti-btn !px-2 !py-1 text-xs transition-none focus:outline-none ti-btn-soft-primary" onClick={editValidity} title="Set Plan Validity">
		// 				Set Validity
		// 			</button>
		// 		);
		// 	},
		// 	editable: false
		// },
		// {
		// 	field: 'block',
		// 	headerName: 'Plan Edit',
		// 	width: 100,
		// 	renderCell: (params) => {
		// 		const id = params.row.id;
		// 		const editValidity = ()=>{
		// 			setValidity(true)
		// 			setUserId(id)
		// 			setStartDate(params.row.plan_date)
		// 		}
		// 		return (
		// 			<div>
		// 				<button className="!m-0 hs-tooltip-toggle relative ti-btn !px-2 !py-1 text-xs transition-none focus:outline-none ti-btn-soft-primary" onClick={editValidity} title="Edit Plan Validity"><i className="ri-pencil-fill"></i></button>
		// 			</div>
		// 		)
		// 	},
		// },
	];
	
	// const localData = [
	// 	{
	// 		user_id: 2,
	// 		name: "aman singh",
	// 		email: "amansingh@example.com",
	// 		phone: "+917876543210",
	// 		country: "india",
	// 		role: "user",
	// 		access_code: "7ty6-93sf-102a-p9k1",
	// 		purchase_date: "2025-01-02",
	// 		plan_date: "2025-01-02",
	// 		validity: "",
	// 		expired: false
	// 	},
	// 	{
	// 		user_id: 5,
	// 		name: "neha gupta",
	// 		email: "nehagupta@gmail.com",
	// 		phone: "+917850612345",
	// 		country: "india",
	// 		role: "user",
	// 		access_code: "8gh2-56dw-947b-u2v4",
	// 		purchase_date: "2025-03-15",
	// 		plan_date: "2025-03-15",
	// 		validity: "",
	// 		expired: false
	// 	},
	// 	{
	// 		user_id: 6,
	// 		name: "jitendra karma",
	// 		email: "jeet@gmail.com",
	// 		phone: "+919387594734",
	// 		country: "india",
	// 		role: "user",
	// 		access_code: "9dh1-42pl-201q-z3w5",
	// 		purchase_date: "2025-03-25",
	// 		plan_date: "2025-03-25",
	// 		validity: "2025-06-25",
	// 		expired: false
	// 	}
	// ]

	const localData = []

	const csvHeaders = [
        { label: "ID", key: "id" },
        { label: "Customer Name", key: "name" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" },
        { label: "Payment Status", key: "payment_status" },
        { label: "Validity", key: "validity" }
    ];

	const users = <i className="ri-group-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const clients = <i className="ri-user-follow-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-success/10 text-success leading-none"></i>
	const renewal = <i className="ri-loop-left-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-danger/10 text-danger leading-none"></i>

	const sortOptions = [
		{value:"validity", label: "Need Validity"},
		{value:"validity", label: "Active Plans"},
		{value:"expired", label: "Expired Plans"}
	]

	const [ numOfData, setNumOfData] = useState([
		{ id: 1, icon: users, class: "Total Customers", title: "total", text: 0, color: "primary/10", color1: "success" },
		{ id: 2, icon: clients, class: "Active Plans", title: "clients", text: 0, color: "primary/10", color1: "success" },
		{ id: 3, icon: renewal, class: "Expired Plans", title: "renewal", text: 0, color: "primary/10", color1: "success" }
	])

	const updateNumOfData = useCallback((dataCount)=>{
		const newData = numOfData.map(obj=>{
			const find = dataCount.find(dt=>dt.title === obj.title)
			if(find){
				return {...obj, text: find.title === obj.title ? find.num : 0}
			}
		})
		// setNumOfData(newData)
	}, [])

	// useEffect(()=>{
	// 	let getCustomers = JSON.parse(localStorage.getItem("customers"));
	// 	if(getCustomers){
	// 		const totalCount = [
	// 			{title: "total", count: getCustomers.length},
	// 			{title: "clients", count: getCustomers.filter(dt=>(dt.validity && !dt.expired)).length},
	// 			{title: "renewal", count: getCustomers.filter(dt=>dt.expired).length}
	// 		]
	// 		setData(getCustomers)
	// 		const newData = numOfData.map(obj=>{
	// 			const find = totalCount.find(dt=>dt.title === obj.title)
	// 			if(find){
	// 				return {...obj, text: find.title === obj.title ? find.count : 0}
	// 			}
	// 		})
	// 		setNumOfData(newData)
	// 	}
	// 	else {
	// 		localStorage.setItem("customers", JSON.stringify(localData))
	// 		JSON.parse(localStorage.getItem("customers"));
	// 	}
	// },[data.length])

	useEffect(()=>{
		if(data.length){
			const records = [{ title: "total", count: data.length}, { title: "clients", count: data.filter(user=>user.access_code).length}, { title: "renewal", count: 0}]
			const new_data = numOfData.map(rec=>{
				const find = records.find(rec2=> rec.title === rec2.title);
				return {
					...rec,
					text: rec.title === find.title ? find.count : rec.text
				}
			})
			setNumOfData(new_data)
		}
	}, [data.length])

	useEffect(()=>{
		const fetchUsers = async ()=>{
			try {
				setIsLoading(true)
				const users = await resellerUsers()
				const user_data = users.data.data
				if(user_data.length){
					const convert_data = user_data.map(({id, email, name, purchase_code, verified})=>{
						return {
							user_id: id,
							name,
							email,
							access_code: purchase_code,
							verified
						}
					})
					setData(convert_data)
				}
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		} 
		fetchUsers()
	}, [])

	return (
		<div>
			{
				openSnack &&
				<Snackbar content={snackMessage} isOpen={openSnack}/>
			}
			<Seo title='User Analytics' />
			<PageHeader currentpage="User Analytics" img="/assets/img/users/profile.png" activepage="Reseller" mainpage="User Analytics" />
			<div className="grid grid-cols-12 gap-x-5">
				{numOfData.map((idx) => (
					<div className="col-span-12 md:col-span-6 xl:col-span-4" key={Math.random()}>
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
												{idx.text.toLocaleString('en-US')}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			
			{/* customers data */}
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box orders-table">
						<div className="box-header">
							<div className="flex gap-2 items-center">
								<h5 className="box-title my-auto">User Records</h5>
								{
									isLoading &&
									<div className="ti-spinner w-4 h-4 text-primary" role="status" aria-label="loading">
										<span className="sr-only">Loading...</span>
									</div>
								}
							</div>
						</div>
						{
							data.length > 0 ? 
							<>
								<DataTable columns={columns} progressStatus={{isScraping:false}} data={data} hideClear={true} handleDataCount={updateNumOfData} sortOptions={sortOptions}/>

								<div className="px-6 pb-4">
									<Download customCls={"ti-btn ti-btn-outline !border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10"} csvHeaders={csvHeaders} data={data} fileName={"customers-data.csv"}/>
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
			{/* customers data */}

			{/* alert boxes */}
			{
				contactNum &&
				<ContactBox number={contactNum} code={""}/>
			}
			{
				smsNum &&
				<SmsBox number={smsNum} code={""} />
			}
			{
				whatsAppNum &&
				<WhatsappBox number={whatsAppNum} code={""} />
			}
			{
				limitErr &&
				<LimitReachedBox/>
			}
			{
				validity &&
				<ValidityBox id={userId} closeModel={()=>setValidity(false)}/>
			}
			{/* alert boxes */}
		</div>
	);
};


export default UserAnalytics;
