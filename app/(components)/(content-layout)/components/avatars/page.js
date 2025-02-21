"use client"
import { avatar, avatardata, avatargrid, avatarstack } from "@/shared/data/components/avatardata";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React from "react";

const Avatars = () => {
	return (
		<div>
			<Seo title={"Avatars"} />
			<PageHeader currentpage="Avatars" activepage="Components" mainpage="Avatars" />

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Circular avatars
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-3">
							{avatar.map((idx) => (
								<img className={`avatar avatar-${idx.class} rounded-full`} src={"../../assets/img/users/1.jpg"} alt="Image Description" key={Math.random()} />
							))}
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Square avatars
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-3">
							{avatar.map((idx) => (
								<img className={`avatar avatar-${idx.class} rounded-sm`} src={"../../assets/img/users/1.jpg"} alt="Image Description" key={Math.random()} />
							))}
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Radius avatars
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-3">
							{avatar.map((idx) => (
								<img className={`avatar avatar-${idx.class} rounded-md`} src={"../../assets/img/users/1.jpg"} alt="Image Description" key={Math.random()} />
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Circular avatars With Top Status
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-3">
							{avatardata.map((idx) => (
								<div className="relative inline-block" key={Math.random()} >
									<img className={`avatar avatar-${idx.class} rounded-full`} src={"../../assets/img/users/1.jpg"} alt="Image Description" />
									<span className={`absolute top-0 ltr:right-0 rtl:left-0 block h-${idx.data} w-${idx.data} rounded-full ring-2 ring-white ${idx.color}`}></span>

								</div>
							))}
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Square avatars With Top Status
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-3">
							{avatardata.map((idx) => (
								<div className="relative inline-block" key={Math.random()}>
									<img className={`avatar avatar-${idx.class} rounded-sm`} src={"../../assets/img/users/1.jpg"} alt="Image Description" />
									<span className={`absolute top-0 ltr:right-0 rtl:left-0 block h-${idx.data} w-${idx.data} rounded-full ring-2 ring-white ${idx.color}`}></span>

								</div>
							))}

						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Radius avatars With Top Status
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-3">
							{avatardata.map((idx) => (
								<div className="relative inline-block" key={Math.random()} >
									<img className={`avatar avatar-${idx.class} rounded-md`} src={"../../assets/img/users/1.jpg"} alt="Image Description" />
									<span className={`absolute top-0 ltr:right-0 rtl:left-0 block h-${idx.data} w-${idx.data} rounded-full ring-2 ring-white ${idx.color}`}></span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Circular avatars With Bottom Status
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-3">
							{avatardata.map((idx) => (
								<div className="relative inline-block" key={Math.random()}>
									<img className={`avatar avatar-${idx.class} rounded-full`} src={"../../assets/img/users/1.jpg"} alt="Image Description" />
									<span className={`absolute bottom-0 ltr:right-0 rtl:left-0 block h-${idx.data} w-${idx.data} rounded-full ring-2 ring-white ${idx.color}`}></span>

								</div>
							))}
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Square avatars With Bottom Status
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-3">
							{avatardata.map((idx) => (
								<div className="relative inline-block" key={Math.random()} >
									<img className={`avatar avatar-${idx.class} rounded-sm`} src={"../../assets/img/users/1.jpg"} alt="Image Description" />
									<span className={`absolute bottom-0 ltr:right-0 rtl:left-0 block h-${idx.data} w-${idx.data} rounded-full ring-2 ring-white ${idx.color}`}></span>

								</div>
							))}
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Radius avatars With Bottom Status
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-3">
							{avatardata.map((idx) => (
								<div className="relative inline-block" key={Math.random()} >
									<img className={`avatar avatar-${idx.class} rounded-md`} src={"../../assets/img/users/1.jpg"} alt="Image Description" />
									<span className={`absolute bottom-0 ltr:right-0 rtl:left-0 block h-${idx.data} w-${idx.data} rounded-full ring-2 ring-white ${idx.color}`}></span>

								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Circular Avatars with Displaying a Tooltip
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-3">
							{avatardata.map((idx) => (
								<div className="hs-tooltip inline-block" key={Math.random()}>
									<Link className="hs-tooltip-toggle relative inline-block" href="#!" scroll={false} >
										<img className={`avatar avatar-${idx.class} rounded-full`} src={"../../assets/img/users/1.jpg"} alt="Image Description" />
										<span
											className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
										<div
											className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
											role="tooltip">
											Maria Wanner is online
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Square Avatars with Displaying a Tooltip
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-3">
							{avatardata.map((idx) => (
								<div className="hs-tooltip inline-block" key={Math.random()} >
									<Link className="hs-tooltip-toggle relative inline-block" href="#!" scroll={false} >
										<img className={`avatar avatar-${idx.class} rounded-sm`} src={"../../assets/img/users/1.jpg"} alt="Image Description" />
										<span
											className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
										<div
											className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
											role="tooltip">
											Maria Wanner is online
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Radius Avatars with Displaying a Tooltip
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-3">
							{avatardata.map((idx) => (
								<div className="hs-tooltip inline-block" key={Math.random()}>
									<Link className="hs-tooltip-toggle relative inline-block" href="#!" scroll={false} >
										<img className={`avatar avatar-${idx.class} rounded-md`} src={"../../assets/img/users/1.jpg"} alt="Image Description" />
										<span
											className="absolute bottom-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
										<div
											className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
											role="tooltip">
											Maria Wanner is online
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Avatars with Placeholder Icons
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-3">
							<span className="inline-block h-6 w-6 bg-gray-100 rounded-full overflow-hidden">
								<img src={"../../assets/img/users/21.jpg"} alt="userimg" />
							</span>

							<span className="inline-block h-[2.375rem] w-[2.375rem] bg-gray-100 rounded-full overflow-hidden">
								<img src={"../../assets/img/users/21.jpg"} alt="userimg" />
							</span>

							<span className="inline-block h-[2.875rem] w-[2.875rem] bg-gray-100 rounded-full overflow-hidden">
								<img src={"../../assets/img/users/21.jpg"} alt="userimg" />
							</span>

							<span className="inline-block h-[3.875rem] w-[3.875rem] bg-gray-100 rounded-full overflow-hidden">
								<img src={"../../assets/img/users/21.jpg"} alt="userimg" />
							</span>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Avatars with Placeholder Initials
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-3">
							<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-600 dark:bg-black/20">
								<span className="text-xs font-medium text-white leading-none">AC</span>
							</span>

							<span
								className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-600 dark:bg-black/20">
								<span className="text-sm font-medium text-white leading-none">AC</span>
							</span>

							<span
								className="inline-flex items-center justify-center h-[2.875rem] w-[2.875rem] rounded-full bg-gray-600 dark:bg-black/20">
								<span className="font-medium text-white leading-none">AC</span>
							</span>

							<span
								className="inline-flex items-center justify-center h-[3.875rem] w-[3.875rem] rounded-full bg-gray-600 dark:bg-black/20">
								<span className="text-lg font-medium text-white leading-none">AC</span>
							</span>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Avatar with Media</h5>
						</div>
						<div className="box-body">
							<div className="flex-shrink-0 group block">
								<div className="flex items-center">
									<img className="inline-block flex-shrink-0 h-[3.875rem] w-[3.875rem] rounded-full"
										src={"../../assets/img/users/1.jpg"} alt="Image Description" />
									<div className="ltr:ml-3 rtl:mr-3">
										<h3 className="font-semibold text-gray-800 dark:text-white">Maria Wanner</h3>
										<p className="text-sm font-medium text-gray-500 dark:text-white/70">maria@gmail.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Avatars Stack
							</h5>
						</div>
						<div className="box-body">
							<div className="grid gap-10 sm:items-end">
								<div className="flex -space-x-2 rtl:space-x-reverse">
									{avatarstack.map((idx) => (
										<img className="avatar avatar-xs rounded-full" src={idx.src} alt="Image Description" key={Math.random()} />

									))}

								</div>
								<div className="flex -space-x-2 rtl:space-x-reverse">
									{avatarstack.map((idx) => (
										<img className="avatar avatar-sm rounded-full" src={idx.src} alt="Image Description" key={Math.random()} />

									))}
								</div>
								<div className="flex -space-x-2 rtl:space-x-reverse">
									{avatarstack.map((idx) => (
										<img className="avatar rounded-full" src={idx.src} alt="Image Description" key={Math.random()} />

									))}
								</div>
								<div className="flex -space-x-2 rtl:space-x-reverse">
									{avatarstack.map((idx) => (
										<img className="avatar avatar-lg rounded-full" src={idx.src} alt="Image Description" key={Math.random()} />

									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Avatars Stack With Tooltip
							</h5>
						</div>
						<div className="box-body">
							<div className="grid gap-10 sm:items-end">
								<div className="flex -space-x-2 rtl:space-x-reverse">
									{avatarstack.map((idx) => (
										<div className="hs-tooltip inline-block" key={Math.random()}>
											<Link className="hs-tooltip-toggle relative inline-block" href="#!" scroll={false} >
												<img className="avatar avatar-xs rounded-full" src={idx.src} alt="Image Description" />
												<div
													className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
													role="tooltip">
													Maria Wanner
												</div>
											</Link>
										</div>

									))}
								</div>
								<div className="flex -space-x-2 rtl:space-x-reverse">
									{avatarstack.map((idx) => (
										<div className="hs-tooltip inline-block" key={Math.random()}>
											<Link className="hs-tooltip-toggle relative inline-block" href="#!" scroll={false} >
												<img className="avatar avatar-sm rounded-full" src={idx.src} alt="Image Description" />
												<div
													className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
													role="tooltip">
													Maria Wanner
												</div>
											</Link>
										</div>

									))}

								</div>
								<div className="flex -space-x-2 rtl:space-x-reverse">
									{avatarstack.map((idx) => (
										<div className="hs-tooltip inline-block" key={Math.random()}>
											<Link className="hs-tooltip-toggle relative inline-block" href="#!" scroll={false} >
												<img className="avatar rounded-full" src={idx.src} alt="Image Description" />
												<div
													className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
													role="tooltip">
													Maria Wanner
												</div>
											</Link>
										</div>

									))}
								</div>
								<div className="flex flex-wrap -space-x-2 rtl:space-x-reverse">
									{avatarstack.map((idx) => (
										<div className="hs-tooltip inline-block" key={Math.random()}>
											<Link className="hs-tooltip-toggle relative inline-block" href="#!" scroll={false} >
												<img className="avatar avatar-lg rounded-full" src={idx.src} alt="Image Description" />
												<div
													className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
													role="tooltip">
													Maria Wanner
												</div>
											</Link>
										</div>

									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Avatars Grid
							</h5>
						</div>
						<div className="box-body">
							<div className="grid gap-10 sm:items-end">
								<div className="grid xxl:!grid-cols-8 md:!grid-cols-11 sm:grid-cols-6 grid-cols-4 gap-4">
									{avatargrid.map((idx) => (
										<img key={Math.random()}
											className="avatar rounded-full"
											src={idx.src} alt="Image Description" />
									))}

									<span
										className="inline-flex items-center justify-center h-[2.875rem] w-[2.875rem] rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
										<span className="font-medium text-gray-500 leading-none dark:text-white/70">9+</span>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Avatars Bodered
							</h5>
						</div>
						<div className="box-body">
							<div className="flex -space-x-2 rtl:space-x-reverse overflow-auto p-2">
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src={"../../assets/img/users/1.jpg"} alt="Image Description" />
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src={"../../assets/img/users/2.jpg"} alt="Image Description" />
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src={"../../assets/img/users/3.jpg"} alt="Image Description" />
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src={"../../assets/img/users/5.jpg"} alt="Image Description" />
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src={"../../assets/img/users/8.jpg"} alt="Image Description" />
								<img className="hidden sm:inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src={"../../assets/img/users/4.jpg"} alt="Image Description" />
								<img className="hidden sm:inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src={"../../assets/img/users/6.jpg"} alt="Image Description" />
								<img className="hidden sm:inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src={"../../assets/img/users/7.jpg"} alt="Image Description" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Avatars With Dropdown
							</h5>
						</div>
						<div className="box-body">
							<div className="flex -space-x-2 rtl:space-x-reverse">
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src={"../../assets/img/users/8.jpg"} alt="Image Description" />
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src={"../../assets/img/users/4.jpg"} alt="Image Description" />
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src={"../../assets/img/users/6.jpg"} alt="Image Description" />
								<img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white" src={"../../assets/img/users/7.jpg"} alt="Image Description" />
								<div className="hs-dropdown relative inline-flex" data-hs-dropdown-placement="top-left">
									<button type="button" id="hs-dropdown-avatar-more" className="hs-dropdown-toggle inline-flex items-center justify-center h-[2.875rem] w-[2.875rem] rounded-full bg-gray-200 border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-primary focus:text-white focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:bg-primary dark:focus:text-white dark:focus:ring-offset-white/10">
										<span className="font-medium leading-none">9+</span>
									</button>
									<div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-72 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 min-w-[15rem] bg-white shadow-md rounded-md p-2 dark:bg-bgdark dark:border dark:border-white/10 dark:divide-white/10">
										<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
											Chris Lynch
										</Link>
										<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
											Maria Guan
										</Link>
										<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
											Amil Evara
										</Link>
										<Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false} >
											Ebele Egbuna
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Placeholder initials With Solid color variants
							</h5>
						</div>
						<div className="box-body space-y-2 sm:space-y-0">
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-primary font-semibold text-white leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-secondary font-semibold text-white leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-danger font-semibold text-white leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-warning font-semibold text-white leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-info font-semibold text-white leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-success font-semibold text-white leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-gray-100 font-semibold text-gray-600 leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-black dark:bg-gray-900 text-white font-semibold leading-none">
								AC
							</span>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Placeholder initials With Soft color variants
							</h5>
						</div>
						<div className="box-body space-y-2 sm:space-y-0">
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-primary/10 font-semibold text-primary leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-secondary/10 font-semibold text-secondary leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-danger/10 font-semibold text-danger leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-warning/10 font-semibold text-warning leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-info/10 font-semibold text-info leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-success/10 font-semibold text-success leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-gray-100/10 font-semibold text-gray-600 dark:text-white leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-gray-800/[.1] text-gray-600 dark:bg-gray-900/[.1]  dark:text-white font-semibold leading-none">
								AC
							</span>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Placeholder initials With Outline color variants
							</h5>
						</div>
						<div className="box-body space-y-2 sm:space-y-0">
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-white dark:bg-bgdark border border-primary font-semibold text-primary leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-white dark:bg-bgdark border border-secondary font-semibold text-secondary leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-white dark:bg-bgdark border border-danger font-semibold text-danger leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-white dark:bg-bgdark border border-warning font-semibold text-warning leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-white dark:bg-bgdark border border-info font-semibold text-info leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-white dark:bg-bgdark border border-success font-semibold text-success leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-white dark:bg-bgdark border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/70 font-semibold leading-none">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] rounded-full bg-white dark:bg-bgdark border border-gray-900 alert text-gray-900 dark:border-white/10 dark:text-gray-100 font-semibold leading-none">
								AC
							</span>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
								Placeholder Initials with White color variants
							</h5>
						</div>
						<div className="box-body space-x-2 rtl:space-x-reverse sm:space-x-6 last:xl:space-x-0 sm:flex gap-2 items-center">
							<span className="inline-flex me-2 items-center justify-center size-8 text-xs font-semibold rounded-full leading-none border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
								AC
							</span>

							<span className="inline-flex me-2 items-center justify-center size-[38px] text-sm font-semibold rounded-full leading-none border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
								AC
							</span>
							<span className="inline-flex me-2 items-center justify-center size-[46px] text-sm font-semibold rounded-full leading-none border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
								AC
							</span>

							<span className="inline-flex me-2 items-center justify-center size-[62px] font-semibold rounded-full leading-none border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
								AC
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Avatars;
