"use client"
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import React, { Fragment, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import Calendar from "react-calendar";
import { addDays, setHours, setMinutes } from "date-fns";
import Seo from "@/shared/layout-components/seo/seo";
import { SketchExample } from "@/shared/data/forms/advancedforms/classicmethod";
import { ColorPicker, useColor } from "react-color-palette";


const Advancedforms = () => {

	const [startDate, setStartDate] = useState(new Date());
	const [startDate1, setStartDate1] = useState(new Date());
	const [startDate2, setStartDate2] = useState(new Date());
	const [startDate3, setStartDate3] = useState(new Date());
	const [startDate4, setStartDate4] = useState(new Date());
	const [startDate5, setStartDate5] = useState(new Date());

	//range data picker

	const [dateRange, setDateRange] = useState([null, null]);
	const [startsDate5, endDate] = dateRange;

	//Specific time range

	const [startTime, setStartTime] = useState(
		setHours(setMinutes(new Date(), 30), 17)
	);

	//React Calender 

	const [value, onChange] = useState(new Date());

	const [show, setShow] = useState(false);

	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};
	const [color, setColor] = useColor("#561ecb");
	return (
		<Fragment>
			<Seo title={"advanced forms"} />
			<PageHeader currentpage="Advanced Forms" activepage="Forms" mainpage="Advanced Forms" />

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6 xxl:col-span-3 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Date Picker</h5>
						</div>
						<div className="box-body">
							<div className="flex rounded-sm overflow-auto">
								<div className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
									<span className="text-sm text-gray-500 dark:text-white/70">
										<i className="ri ri-calendar-line"></i>
									</span>
								</div>

								<DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />

							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xxl:col-span-3 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Date Time Picker</h5>
						</div>
						<div className="box-body">
							<div className="flex rounded-sm overflow-auto">
								<div
									className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
									<span className="text-sm text-gray-500 dark:text-white/70"><i
										className="ri ri-calendar-line"></i></span>
								</div>

								<DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate1} onChange={(date1) => setStartDate1(date1)} timeInputLabel="Time:" dateFormat="MM/dd/yyyy h:mm aa" showTimeInput />

							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xxl:col-span-3 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Human Friendly Date Picker</h5>
						</div>
						<div className="box-body date-picker">
							<div className="flex rounded-sm overflow-auto">
								<div
									className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
									<span className="text-sm text-gray-500 dark:text-white/70"><i
										className="ri ri-calendar-line"></i></span>
								</div>

								<DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate2} onChange={(date2) => setStartDate2(date2)} showTimeSelect timeFormat="p" timeIntervals={15} dateFormat="Pp" />

							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 xxl:col-span-3 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Date Range Picker</h5>
						</div>
						<div className="box-body">
							<div className="flex rounded-sm overflow-auto">
								<div
									className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
									<span className="text-sm text-gray-500 dark:text-white/70"><i
										className="ri ri-calendar-line"></i></span>
								</div>

								<DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" placeholderText="Choose Date" selectsRange={true} startDate={startsDate5} endDate={endDate} onChange={(update) => { setDateRange(update); }} isClearable={true} />

							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-4 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Inline Time Picker </h5>
						</div>
						<div className="box-body">
							<div className="flex items-center rounded-sm overflow-auto">
								<div
									className="p-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
									<span className="text-sm text-gray-500 dark:text-white/70"><i
										className="ri ri-calendar-line"></i></span>
								</div>

								<DatePicker className="ti-form-input focus:z-10" selected={startDate5} onChange={(date) => setStartDate5(date)} inline showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />

							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-8 xxl:col-span-9">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-span-12 md:col-span-6 sm:col-span-12 lg:col-span-6 xxl:col-span-4">
							<div className="box">
								<div className="box-header">
									<h5 className="box-title"> Specific Time Range  </h5>
								</div>
								<div className="box-body date-picker">
									<div className="flex rounded-sm">
										<div className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
											<span className="text-sm text-gray-500 dark:text-white/70"><i
												className="ri ri-time-line"></i>
											</span>
										</div>
										<DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startTime} onChange={(date) => setStartTime(date)} showTimeSelect minTime={setHours(setMinutes(new Date(), 0), 17)} maxTime={setHours(setMinutes(new Date(), 30), 20)} dateFormat="MMMM d, yyyy h:mm aa" />

									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 md:col-span-6 sm:col-span-12 lg:col-span-6 xxl:col-span-4">
							<div className="box multiple-month-picker">
								<div className="box-header">
									<h5 className="box-title"> Multiple Month Picker </h5>
								</div>
								<div className="box-body">
									<div className="flex rounded-sm overflow-auto">
										<div
											className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
											<span className="text-sm text-gray-500 dark:text-white/70"><i
												className="ri ri-time-line"></i></span>
										</div>
										<DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10 flatpickr-input" selected={startDate3} onChange={(date3) => setStartDate3(date3)} monthsShown={2} />

									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 md:col-span-6 sm:col-span-12 lg:col-span-6 xxl:col-span-4">
							<div className="box">
								<div className="box-header">
									<h5 className="box-title">Basic Time Picker</h5>
								</div>
								<div className="box-body">
									<div className="flex rounded-sm overflow-auto">
										<div
											className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
											<span className="text-sm text-gray-500 dark:text-white/70"><i
												className="ri ri-time-line"></i></span>
										</div>

										<DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />

									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 md:col-span-6 sm:col-span-12 lg:col-span-6 xxl:col-span-4">
							<div className="box">
								<div className="box-header">
									<h5 className="box-title"> Month with Year Picker </h5>
								</div>
								<div className="box-body date-picker">
									<div className="flex rounded-sm overflow-auto">
										<div
											className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
											<span className="text-sm text-gray-500 dark:text-white/70"><i
												className="ri ri-calendar-line"></i></span>
										</div>
										<DatePicker
											className="ti-form-input rounded-none ltr:border-r-0 rtl:border-l-0 focus:z-10 flatpickr-input"
											selected={startDate}
											onChange={(date) => setStartDate(date)}
											dateFormat="MM/yyyy"
											showMonthYearPicker
											showFullMonthYearPicker
										/>
										<DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10 flatpickr-input" selected={startDate} onChange={(date) => setStartDate(date)} showYearPicker dateFormat="yyyy" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 md:col-span-6 sm:col-span-12 lg:col-span-6 xxl:col-span-4">
							<div className="box">
								<div className="box-header">
									<h5 className="box-title"> Specific Date Range </h5>
								</div>
								<div className="box-body">
									<div className="flex rounded-sm overflow-auto">
										<div
											className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
											<span className="text-sm text-gray-500 dark:text-white/70"><i
												className="ri ri-time-line"></i></span>
										</div>

										<DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10 flatpickr-input" selected={startDate4} onChange={(date4) => setStartDate4(date4)} minDate={new Date()} maxDate={addDays(new Date(), 5)} placeholderText="Select a date between today and 5 days in the future" />

									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 md:col-span-6 sm:col-span-12 lg:col-span-6 xxl:col-span-4">
							<div className="box">
								<div className="box-header">
									<h5 className="box-title"> Range Picker with Portal screen Format </h5>
								</div>
								<div className="box-body">
									<div className="flex rounded-sm overflow-auto">
										<div
											className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
											<span className="text-sm text-gray-500 dark:text-white/70"><i
												className="ri ri-time-line"></i></span>
										</div>
										<DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" placeholderText="Choose Date" selectsRange={true} startDate={startsDate5} endDate={endDate} onChange={(update) => { setDateRange(update); }} withPortal />

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Inline Calendar </h5>
						</div>
						<div className="box-body sm:overflow-hidden overflow-auto">
							<div className="flex justify-center rounded-sm overflow-auto">
								<div className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
									<span className="text-sm text-gray-500 dark:text-white/70">
										<i className="ri ri-calendar-line"></i>
									</span>
								</div>
								<div className="inline-calendar">
									<input type="text" className="py-2 px-3  ltr:pr-11 rtl:pl-11 ti-form-input rounded-none ltr:rounded-r-sm rtl:rounded-l-sm focus:z-10" onClick={() => setShow(show => !show)} />
									{show && (<Calendar className="ti-form-input focus:z-10 flatpickr-input" onChange={onChange} value={value} />)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-8">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Color Picker </h5>
						</div>
						<div className="box-body">
							{/* <div className=""> */}
								<div className="grid  grid-cols-12 gap-x-6 align-center">
								<div className="col-span-12 xxl:col-span-3">
									{/* <div> */}
										<button onClick={toggleVisibility} className='ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium'>
											<i className="ri-palette-line"></i>
										</button>
										{isVisible && (
											<ColorPicker color={color} onChange={setColor} hideInput={["hex", "hsv"]} />
										)}
									{/* </div> */}

									</div>
								<div className="col-span-12 xxl:col-span-6">
										<div className="text-center">
							<div className="sm:overflow-hidden overflow-auto">
								<input type="color"
									className="h-10 w-10 block bg-white border border-gray-200 cursor-pointer rounded-sm 
                                    disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10"
									id="hs-color-input" defaultValue="#5a66f1" title="Choose your color" />
				</div>
									</div>
									{/* <div> */}


										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
		</Fragment>
	);
};
export default Advancedforms;
