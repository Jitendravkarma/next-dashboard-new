"use client"
import React, { useCallback, useEffect, useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import DataTable from "@/shared/data/basic-ui/tables/nexttable";
import ContactVia from "@/shared/layout-components/dashboard/ContactVia";
import { useUserContext } from "@/shared/userContext/userContext";
import { Download } from "@/shared/layout-components/dashboard/DownloadBtn";
import { ContactBox, LimitReachedBox, SmsBox, ValidityBox, WhatsappBox } from "@/shared/layout-components/dashboard/AlertBox";

const UserAnalytics = () => {
	const [ validity, setValidity ] = useState("");
	const columns = [
		{
			field: 'actions',
			headerName: 'Give Reply',
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
			field: 'reply',
			headerName: 'Response',
			width: 100,
			renderCell: (params) => {
				const reply = params.row.replied;
				return reply ? 
				<span className="badge leading-none bg-success/10 text-success rounded-sm">Replied</span> 
				: 
				<span className="badge leading-none bg-danger/10 text-danger rounded-sm">Unreplied</span>
			},
			editable: false,
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
			headerName: "Query",
			field: "query",
			width: 400,
			editable: false
		},
		{
			headerName: "Date",
			field: "date",
			width: 150,
			editable: false
		},
		{
			headerName: "Expire",
			field: "query_expire",
			width: 150,
			editable: false
		},
	];
	
	const localData = [
		{
		  "id": 1,
		  "name": "Kuldeep Verma",
		  "email": "kuldeepverma@gmail.com",
		  "phone": "+91 70583-43210",
		  "query": "Hello my name is Kuldeep I want to know that how your tools are works?",
		  "date": "10 Mar 2026",
		  "query_expire": "In 30 Days",
		  "replied": true
		},
		{
		  "id": 2,
		  "name": "Ananya Singh",
		  "email": "ananyasingh@gmail.com",
		  "phone": "+91 98123-45678",
		  "query": "Hi, I have a question about your API integration process. Could you help me?",
		  "date": "12 Mar 2026",
		  "query_expire": "In 30 Days",
		  "replied": true
		},
		{
		  "id": 3,
		  "name": "Rohit Kumar",
		  "email": "rohitkumar@yahoo.com",
		  "phone": "+91 98765-43210",
		  "query": "I would like to learn more about your pricing plans.",
		  "date": "15 Mar 2026",
		  "query_expire": "In 30 Days",
		  "replied": false
		},
		{
		  "id": 4,
		  "name": "Sanya Patel",
		  "email": "sanyapatel@hotmail.com",
		  "phone": "+91 87932-12345",
		  "query": "Can I integrate your tools with third-party platforms?",
		  "date": "17 Mar 2026",
		  "query_expire": "In 30 Days",
		  "replied": true
		},
		{
		  "id": 5,
		  "name": "Vikram Sharma",
		  "email": "vikramsharma@gmail.com",
		  "phone": "+91 99012-34567",
		  "query": "What is the support policy for enterprise clients?",
		  "date": "20 Mar 2026",
		  "query_expire": "In 30 Days",
		  "replied": false
		},
		{
		  "id": 6,
		  "name": "Neha Mehta",
		  "email": "neha.mehta@outlook.com",
		  "phone": "+91 90123-67890",
		  "query": "I am facing an issue with the dashboard. Can you assist?",
		  "date": "22 Mar 2026",
		  "query_expire": "In 30 Days",
		  "replied": true
		},
		{
		  "id": 7,
		  "name": "Arvind Rao",
		  "email": "arvindrao@gmail.com",
		  "phone": "+91 99087-65432",
		  "query": "Is there a trial version available for your software?",
		  "date": "25 Mar 2026",
		  "query_expire": "In 30 Days",
		  "replied": true
		},
		{
		  "id": 8,
		  "name": "Priya Verma",
		  "email": "priyaverma@outlook.com",
		  "phone": "+91 99234-56789",
		  "query": "Could you share more details on your data security practices?",
		  "date": "28 Mar 2026",
		  "query_expire": "In 30 Days",
		  "replied": true
		},
		{
		  "id": 9,
		  "name": "Amit Gupta",
		  "email": "amit.gupta@ymail.com",
		  "phone": "+91 90567-89012",
		  "query": "Do you provide any custom solutions based on client needs?",
		  "date": "1 Apr 2026",
		  "query_expire":"In 30 Days",
		  "replied": false
		},
		{
		  "id": 10,
		  "name": "Simran Kaur",
		  "email": "simrankaurnetworks@gmail.com",
		  "phone": "+91 97012-34567",
		  "query": "What is the process to upgrade my account to a premium plan?",
		  "date": "5 Apr 2026",
		  "query_expire":"In 30 Days",
		  "replied": false
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

	const inquiry = <i className="ri-customer-service-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const unread = <i className="ri-mail-unread-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-success/10 text-success leading-none"></i>
	const reply = <i className="ri-corner-up-left-double-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-danger/10 text-danger leading-none"></i>

	const sortOptions = [
		{value:"read", label: "Read"},
		{value:"unread", label: "Unread"},
		{value:"date", label: "Date"}
	]

	const { contactNum, smsNum, whatsAppNum, limitErr } = useUserContext()
	const [ numOfData, setNumOfData] = useState([
		{ id: 1, icon: inquiry, class: "Total Inquiry", title: "total", text: 0, color: "primary/10", color1: "success" },
		{ id: 2, icon: unread, class: "Total Unread", title: "unread", text: 0, color: "primary/10", color1: "success" },
		{ id: 3, icon: reply, class: "Total Reply", title: "reply", text: 0, color: "primary/10", color1: "success" }
	])
	const [ data, setData ] = useState([]);

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
		if(localData){
			const totalCount = [
				{title: "total", count: localData.length},
				{title: "unread", count: localData.filter(dt=>dt.payment_status).length},
				{title: "reply", count: localData.filter(dt=>dt.expiry).length}
			]
			setData(localData)
			const newData = numOfData.map(obj=>{
				const find = totalCount.find(dt=>dt.title === obj.title)
				if(find){
					return {...obj, text: find.title === obj.title ? find.count : 0}
				}
			})
			setNumOfData(newData)
		}
	},[])

	return (
		<div>
			<Seo title='User Inquiry' />
			<PageHeader currentpage="User Inquiry" img="/assets/img/users/inquiry.png" activepage="Home" mainpage="User Inquiry" />
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
				<ValidityBox closeModel={()=>setValidity(false)}/>
			}
			{/* alert boxes */}
		</div>
	);
};


export default UserAnalytics;
