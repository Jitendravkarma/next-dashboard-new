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

const UserAnalytics = () => {
	const { contactNum, smsNum, whatsAppNum, limitErr, openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
	const [ validity, setValidity ] = useState(false);
	const [ userId, setUserId ] = useState(false);
	const [ data, setData ] = useState([]);
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
			width: 60,
			editable: false,
		},
		{
			headerName: "Customer Name",
			field: "name",
			width: 200,
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
			width: 170,
			editable: false
		},
		{
			headerName: "Payment Status",
			field: "payment_status",
			width: 150,
			renderCell: (params) => {
				const value = params.row.validity;
				return value ? (
				  <span className="badge leading-none bg-success/10 text-success rounded-sm">
					Paid
				  </span>
				) : (
				  <span className="badge leading-none bg-danger/10 text-danger rounded-sm">
					Unpaid
				  </span>
				);
			},
			editable: false
		},
		{
			headerName: "Validity",
			field: "validity",
			width: 150,
			renderCell: (params) => {
				const value = params.value;
				const handleEvent = ()=>{
					setValidity(true)
					setUserId(params.row.id)
				}
				return value ? (
				  <span>
					{value}
				  </span>
				) : (
				  <button className="!m-0 hs-tooltip-toggle relative ti-btn !px-2 !py-1 text-xs transition-none focus:outline-none ti-btn-soft-primary" href="/reseller/customers/" onClick={handleEvent}>
					Set Validity
				  </button>
				);
			},
			editable: false
		},
		{
			headerName: "Expiry Status",
			field: "expiry",
			width: 150,
			renderCell: (params) => {
				const value = params.value;
				return value ? (
				  <span className="badge leading-none bg-danger/10 text-danger rounded-sm">
					Expire Soon
				  </span>
				) : (
				  <span className="badge leading-none bg-success/10 text-success rounded-sm">
					-
				  </span>
				);
			},
			editable: false
		},
		{
			field: 'block',
			headerName: 'User Action',
			width: 100,
			renderCell: (params) => {
				const id = params.row.id;
				const value = params.row.isBlocked
				const blockUser = ()=>{
					const block = data.map(dt=>({...dt, isBlocked: dt.id === id ? true : dt.isBlocked}))
					localStorage.setItem("customers", JSON.stringify(block))
					openSnackBar();
            		handleSnackMessage(`User has been blocked!`, "white", "text-danger")
				}
				const unblockUser = ()=>{
					const unblock = data.map(dt=>({...dt, isBlocked: dt.id === id ? false : dt.isBlocked}))
					localStorage.setItem("customers", JSON.stringify(unblock))
					openSnackBar();
            		handleSnackMessage(`You have unblocked the user!`, "white", "text-success")
				}
				const editValidity = ()=>{
					setValidity(true)
					setUserId(id)
				}
				return (
					<div>
						{
							value ? 
							<button className="!m-0 hs-tooltip-toggle relative ti-btn !px-2 !py-1 text-xs transition-none focus:outline-none ti-btn-soft-primary" onClick={unblockUser} title="Click to verify user"><i className="ri-checkbox-circle-fill"></i></button>
							:
							<button className="!m-0 hs-tooltip-toggle relative ti-btn !px-2 !py-1 text-xs transition-none focus:outline-none ti-btn-soft-danger" onClick={blockUser} title="Click to block user"><i className="ri-prohibited-line"></i></button>
						}
						{" "}
						<button className="!m-0 hs-tooltip-toggle relative ti-btn !px-2 !py-1 text-xs transition-none focus:outline-none ti-btn-soft-primary" onClick={editValidity} title="Edit validity"><i className="ri-pencil-fill"></i></button>
					</div>
				)
			},
		},
	];
	
	const localData = [
		{
		  "id": 1,
		  "name": "Kuldeep Verma",
		  "email": "kuldeepverma@gmail.com",
		  "phone": "+91 70583-43210",
		  "payment_status": true,
		  "validity": "10 Mar 2026",
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 2,
		  "name": "Jituraj Karma",
		  "email": "jiturajkarma2020@gmail.com",
		  "phone": "+91 98765-43210",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 3,
		  "name": "Rituraj Gupta",
		  "email": "riturajgupta@gmail.com",
		  "phone": "+91 98765-34838",
		  "payment_status": true,
		  "validity": "28 Nov 2026",
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 4,
		  "name": "Suman Rao",
		  "email": "sumanrao@gmail.com",
		  "phone": "+91 98765-43210",
		  "payment_status": true,
		  "validity": "15 Jan 2025",
		  "expiry": true,
		  "isBlocked": false		
		},
		{
		  "id": 5,
		  "name": "Ravi Kumar",
		  "email": "ravikumar@yahoo.com",
		  "phone": "+91 90876-54321",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 6,
		  "name": "Anita Sharma",
		  "email": "anitasharma@outlook.com",
		  "phone": "+91 81234-56789",
		  "payment_status": true,
		  "validity": "05 Oct 2026",
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 7,
		  "name": "Manish Gupta",
		  "email": "manishgupta@gmail.com",
		  "phone": "+91 96543-21098",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 8,
		  "name": "Pooja Desai",
		  "email": "poojadesai@rediffmail.com",
		  "phone": "+91 75642-39847",
		  "payment_status": true,
		  "validity": "22 Apr 2026",
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 9,
		  "name": "Vikram Singh",
		  "email": "vikramsingh@gmail.com",
		  "phone": "+91 86573-49320",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 10,
		  "name": "Neha Agarwal",
		  "email": "nehaagarwal@gmail.com",
		  "phone": "+91 93485-67021",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 11,
		  "name": "Rashmi Patel",
		  "email": "rashmipatel@live.com",
		  "phone": "+91 70321-65432",
		  "payment_status": true,
		  "validity": "07 May 2026",
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 12,
		  "name": "Ajay Singh",
		  "email": "ajaysingh@outlook.com",
		  "phone": "+91 97865-43210",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 13,
		  "name": "Sneha Mehta",
		  "email": "snehamehta@hotmail.com",
		  "phone": "+91 87563-21987",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 14,
		  "name": "Harish Joshi",
		  "email": "harishjosh@gmail.com",
		  "phone": "+91 92011-56789",
		  "payment_status": true,
		  "validity": "10 Mar 2025",
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 15,
		  "name": "Priya Bhatia",
		  "email": "priyabhatia@yahoo.com",
		  "phone": "+91 87465-32109",
		  "payment_status": true,
		  "validity": "02 Feb 2025",
		  "expiry": true,
		  "isBlocked": false		
		},
		{
		  "id": 16,
		  "name": "Kunal Soni",
		  "email": "kunalsoni@gmail.com",
		  "phone": "+91 78124-68945",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 17,
		  "name": "Meena Rao",
		  "email": "meenarao@rediffmail.com",
		  "phone": "+91 89573-32145",
		  "payment_status": true,
		  "validity": "25 Jan 2025",
		  "expiry": true,
		  "isBlocked": false		
		},
		{
		  "id": 18,
		  "name": "Amit Bhardwaj",
		  "email": "amitbhardwaj@hotmail.com",
		  "phone": "+91 94567-89230",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 19,
		  "name": "Suman Patil",
		  "email": "sumanpatil@rediffmail.com",
		  "phone": "+91 79864-51230",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 20,
		  "name": "Tushar Kumar",
		  "email": "tusharkumar@gmail.com",
		  "phone": "+91 90876-53210",
		  "payment_status": true,
		  "validity": "15 Nov 2025",
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 21,
		  "name": "Simran Kaur",
		  "email": "simrankaur@outlook.com",
		  "phone": "+91 87125-98430",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 22,
		  "name": "Rohit Mehra",
		  "email": "rohitmehra@live.com",
		  "phone": "+91 99999-12345",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 23,
		  "name": "Geeta Thakur",
		  "email": "geetathakur@yahoo.com",
		  "phone": "+91 87756-32498",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 24,
		  "name": "Rajeev Malik",
		  "email": "rajeevmalik@gmail.com",
		  "phone": "+91 82456-97011",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false,
		  "isBlocked": false
		},
		{
		  "id": 25,
		  "name": "Anjali Reddy",
		  "email": "anjalireddy@outlook.com",
		  "phone": "+91 98564-20391",
		  "payment_status": false,
		  "validity": false,
		  "expiry": false,
		  "isBlocked": false
		}
	]

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
		{value:"payment_status", label: "Paid"},
		{value:"payment_status", label: "Unpaid"},
		{value:"Expiry", label: "Expiry"}
	]

	const [ numOfData, setNumOfData] = useState([
		{ id: 1, icon: users, class: "Total Users", title: "total", text: 0, color: "primary/10", color1: "success" },
		{ id: 2, icon: clients, class: "Total Clients", title: "clients", text: 0, color: "primary/10", color1: "success" },
		{ id: 3, icon: renewal, class: "Renewal Clients", title: "renewal", text: 0, color: "primary/10", color1: "success" }
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

	useEffect(()=>{
		let getCustomers = JSON.parse(localStorage.getItem("customers"));
		if(getCustomers){
			const totalCount = [
				{title: "total", count: getCustomers.length},
				{title: "clients", count: getCustomers.filter(dt=>dt.validity).length},
				{title: "renewal", count: getCustomers.filter(dt=>dt.expiry).length}
			]
			setData(getCustomers)
			const newData = numOfData.map(obj=>{
				const find = totalCount.find(dt=>dt.title === obj.title)
				if(find){
					return {...obj, text: find.title === obj.title ? find.count : 0}
				}
			})
			setNumOfData(newData)
		}
		else {
			localStorage.setItem("customers", JSON.stringify(localData))
			JSON.parse(localStorage.getItem("customers"));
		}
	},[data.length])

	return (
		<div>
			{
				openSnack &&
				<Snackbar content={snackMessage} isOpen={openSnack}/>
			}
			<Seo title='User Analytics' />
			<PageHeader currentpage="User Analytics" img="/assets/img/users/profile.png" activepage="Home" mainpage="User Analytics" />
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
							<div className="sm:flex justify-between">
								<h5 className="box-title my-auto">User Records</h5>
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
