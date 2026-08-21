"use client"
import React, { useCallback, useEffect, useRef, useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import DataTable from "@/shared/data/basic-ui/tables/nexttable";
import { useUserContext } from "@/shared/userContext/userContext";
import { Download } from "@/shared/layout-components/dashboard/DownloadBtn";
import { ContactBox, LimitReachedBox, SmsBox, UserAccess, ValidityBox, WhatsappBox } from "@/shared/layout-components/dashboard/AlertBox";
import Snackbar from "@/shared/layout-components/dashboard/SnackBar";
import { fetchResellerUsers, resellerList, updateResellerLicence, updateUserBlock } from "@/shared/apis/api";

const UserAnalytics = () => {
	const { contactNum, smsNum, whatsAppNum, limitErr, openSnack, snackMessage } = useUserContext()
	const [ data, setData ] = useState([]);
	const [ usersData, setUsersData ] = useState([]);
	const [ userEmail, setUserEmail ] = useState("")
	const [ accessLimit, setAccessLimit ] = useState(false)
	const [ isLoading, setIsLoading ] = useState(false);
	const [ columns, setColumns ] = useState([
		{
			headerName: "User Name",
			field: "name",
			width: 200,
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
		{
			headerName: "Phone",
			field: "phone",
			width: 250,
			editable: false
		},
		{
			headerName: "Paid/Unpaid",
			field: "access_code",
			width: 200,
			renderCell: (params) => {
				const value = params.row.access_code;
				return (
				  <span className={`${value ? "bg-success/10 text-success" : "bg-danger/10 text-danger"} badge leading-none rounded-sm`}>
					{value ? "Paid User" : "Unpaid User"}
				  </span>
				)
			},
			editable: false
		},
		{
			headerName: "Account Status",
			field: "account_activation",
			width: 200,
			renderCell: (params) => {
				const value = params.row.account_activation;
				return (
				  <span className={`${value ? "bg-success/10 text-success" : "bg-danger/10 text-danger"} badge leading-none rounded-sm`}>
					<i className="ri-circle-fill text-xs"/>
					{value ? "Active" : "Inactive"}
				  </span>
				)
			},
			editable: false
		},
		{
			headerName: "User Status",
			field: "verified",
			width: 200,
			renderCell: (params) => {
				const value = params.row.verified;
				return (
				  <span className={`${value ? "bg-success/10 text-success" : "bg-danger/10 text-danger"} badge leading-none rounded-sm`}>
					{value ? "Verified User" : "Unverified User"}
				  </span>
				)
			},
			editable: false
		},
		{
			headerName: 'Registered On',
			field: 'created_at',
			width: 150,
			renderCell: ({row})=>{
				const value = row.created_at;
				return(
					<span>
						{new Date(value).toLocaleDateString()} 
					</span>
				)
			},
			editable: false,
		},
		{
			headerName: "Valid Until",
			field: "valid_until",
			width: 150,
			renderCell: (params) => {
				const value = params.row.valid_till.split('T')[0];
				return (
				  <span className={`${value === "reseller" ? "bg-success/10 text-success" : "bg-primary/10 text-primary"} badge leading-none rounded-sm capitalize`}>
					{value}
				  </span>
				)
			},
			editable: false
		},
		{
			headerName: "User Type",
			field: "reseller",
			width: 150,
			renderCell: (params) => {
				const value = params.row.reseller;
				return (
				  <span className={`${value === "reseller" ? "bg-success/10 text-success" : "bg-primary/10 text-primary"} badge leading-none rounded-sm capitalize`}>
					{value ? 'Reseller' : 'User'}
				  </span>
				)
			},
			editable: false
		},
		{
			headerName: "Block/Unblock",
			field: "block",
			width: 200,
			renderCell: (params) => {
				const email = params.row.email;
				const value = params.row.account_activation;
				const handleBlock = async ()=>{
					try {
						const confirmBox = confirm(`Are you sure want to ${value ? 'Block' : 'Unblock'} ${email}?`);
						if(confirmBox){
							const updateData = await updateUserBlock(value, {email});
							console.log(updateData.data);
							alert(updateData.data.data);
							window.location.reload();
						}
						else {
							alert(`Request canceled!`)
						}
					} catch (error) {
						alert(`Failed to block/unblock!`);
					}
				}
				return (
					<button className={`hover:underline`} onClick={handleBlock} title={value ? "Click to Block User" : "Click to Unblock User"}>
						{value ? "🚫Block User" : "✅Unblock User"}
					</button>
				)
			},
			editable: false
		}
	]);
	
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
		{value:"paid", label: "Paid Users"},
		{value:"unpaid", label: "Unpaid Users"},
		{value:"verified", label: "Unverified Users"}
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

	useEffect(()=>{
		const resellerFun = async ()=>{
			try {
				const fetchResellers = await resellerList();
				const list = fetchResellers.records;
				const convert_dataAll = list.reverse().map(({id, account_activation, parent_id, company_name, company_registered_year, reseller_phone, reseller_email, email, phone, created_at, valid_till, name, purchase_code, lisence_alloted, verified, reseller}, ind)=>{
					return {
						sn: ind + 1,
						user_id: id,
						name,
						email,
						phone: phone || '-',
						created_at,
						reseller,
						parent_id, 
						company_name, 
						company_registered_year, 
						reseller_phone, 
						reseller_email,
						valid_till,
						account_activation,
						lisence_alloted,
						user_type: reseller ? "reseller" : "user",
						access_code: purchase_code,
						verified
					}
				});
				setData(convert_dataAll)
			} catch (error) {
				console.log(error);
			}
		}
		resellerFun();
	}, [])

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
		if(usersData.length){
			const newColumn = columns.slice(3);
			setColumns(newColumn);
		}
		else {
			const resellerAry = [{
				headerName: "View Users",
				field: "reseller_users",
				width: 150,
				renderCell: ({row}) => {
					const [ isResellerUsers, setIsResellerUsers ] = useState(false);
					const resellerUser = async ()=>{
						setIsResellerUsers(true)
						try {
							const users = await fetchResellerUsers(row.user_id);
							if(users.length) setUsersData(users);
						} catch (error) {
							console.log(error)
						}
						setIsResellerUsers(false)
					}
					return (
					<button onClick={resellerUser} className={`bg-indigo-400 hover:bg-indigo-600 text-white badge leading-none rounded-sm capitalize disabled:cursor-not-allowed disabled:animate-pulse`} disabled={isResellerUsers}>
						{ isResellerUsers ? 'Please wait...' : 'Show Users'}
					</button>
					)
				},
				editable: false
			},
			{
				headerName: "Allot Licences",
				field: "limit",
				width: 180,
				renderCell: (params) => {
					const inputRef = useRef();
					const [ days, setDays ] = useState("");
					const [ isUpdating, setIsUpdating ] = useState(false);
					return (
						<div className="flex items-center gap-2 h-full justify-between">
							<input value={days} ref={inputRef} placeholder="No of Licence" onChange={(e)=>setDays(e.target.value)} className="border border-indigo-300 w-24 focus-within:border-2 focus-within:border-indigo-700 py-1 px-2 text-xs rounded-sm"/>
							<button disabled={isUpdating} className={`disabled:cursor-not-allowed disabled:animate-pulse focus:outline-none text-white font-medium rounded-sm text-xs px-2 p-1 bg-indigo-500 border border-indigo-500 hover:bg-indigo-600`}
								onClick={(e) => {
									if(!days) {
										inputRef.current.focus();
										return;
									};
									const approve = async()=>{
										setIsUpdating(true);
										try {
											const resp = await updateResellerLicence({ email: params.row.email, no_of_licences: Number(days) });
											alert(`Licences updated successfully!`);
											// window.location.reload();
										} catch (error) {
											console.log(error)
										} finally {
											setIsUpdating(false);
										}
									} 
									approve();
								}}
							>
								{isUpdating ? "Updating..." : "Update"}
							</button>
						</div>
					)
				},
				editable: false
			},
			{
				headerName: "Allotted Licences",
				field: "lisence_alloted",
				width: 200,
				renderCell: (params)=>
					(<span className="capitalize">{params.row.lisence_alloted}</span>)
				,
				editable: false
			}];

			setColumns(cur=>([...resellerAry, ...cur]))
		}
	}, [usersData.length]);

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
					<div className="col-span-12 md:col-span-4" key={Math.random()}>
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
							<div className="flex gap-2 items-center justify-between">
								<div>
									<h5 className="box-title my-auto">User Records</h5>
									{
										isLoading &&
										<div className="ti-spinner w-4 h-4 text-primary" role="status" aria-label="loading">
											<span className="sr-only">Loading...</span>
										</div>
									}
								</div>
								{
									usersData.length > 0 && <button className="text-blue-500 hover:underline" onClick={()=>setUsersData([])}>Back to Resellers</button>
								}
							</div>
						</div>
						{
							usersData.length > 0 ?
							<>
								<DataTable columns={columns} progressStatus={{isScraping:false}} data={usersData} hideClear={true} handleDataCount={updateNumOfData} sortOptions={sortOptions}/>
								<div className="px-6 pb-4">
									<Download customCls={"ti-btn ti-btn-outline !border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10"} csvHeaders={csvHeaders} data={usersData} fileName={"reseller-customers.csv"}/>
								</div>
							</>
							:
							data.length > 0 ? 
							<>
								<DataTable columns={columns} progressStatus={{isScraping:false}} data={data} hideClear={true} handleDataCount={updateNumOfData} sortOptions={sortOptions}/>

								<div className="px-6 pb-4">
									<Download customCls={"ti-btn ti-btn-outline !border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10"} csvHeaders={csvHeaders} data={data} fileName={"resellers.csv"}/>
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
				accessLimit &&
				<UserAccess email={userEmail} closePop={()=>setAccessLimit(false)}/>
			}
			{/* {
				validity &&
				<ValidityBox id={userId} closeModel={()=>setValidity(false)}/>
			} */}
			{/* alert boxes */}
		</div>
	);
};


export default UserAnalytics;
