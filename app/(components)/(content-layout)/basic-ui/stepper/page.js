"use client"
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";

const Stepper = () => {

    return (
        <Fragment>
            <Seo title={"Stepper"} />
            <PageHeader currentpage="Stepper" activepage="Basic UI" mainpage="Stepper" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 xxl:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Basic Stepper</h5>
                        </div>
                        <div className="box-body">
                            {/* <!-- Start Stepper --> */}
                            <div data-hs-stepper>
                                {/* <!-- Stepper Nav --> */}
                                <ul className="relative sm:flex flex-row gap-x-2 sm:space-y-0 space-y-4">
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{"index": 1}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                Name &amp; Email
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{"index": 2}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                Contact
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{"index": 3}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                Payment
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                </ul>
                                {/* <!-- End Stepper Nav --> */}

                                {/* <!-- Stepper Content --> */}
                                <div className="mt-5 sm:mt-8">
                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 1}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Name" className="ti-form-label">Name: </label>
                                                    <input type="text" id="Name" className="ti-form-input" placeholder="Enter Name" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Email" className="ti-form-label">Email: </label>
                                                    <input type="email" id="Email" className="ti-form-input" placeholder="Enter Email" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 2}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Telephone" className="ti-form-label">Telephone: </label>
                                                    <input type="text" id="Telephone" className="ti-form-input" placeholder="Enter Telephone" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Mobile" className="ti-form-label">Mobile: </label>
                                                    <input type="text" id="Mobile" className="ti-form-input" placeholder="Enter Mobile" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 3}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                                <div className="col-span-12">
                                                    <label htmlFor="cardholder" className="ti-form-label">CardHolder Name: </label>
                                                    <input type="text" id="cardholder" className="ti-form-input" placeholder="Enter card Details" />
                                                </div>
                                                <div className="col-span-12">
                                                    <label htmlFor="card" className="ti-form-label">Card number: </label>
                                                    <input type="text" id="card" className="ti-form-input" placeholder="Enter card Details" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Expiry" className="ti-form-label">Expiry: </label>
                                                    <input type="text" id="Expiry" className="ti-form-input" placeholder="Enter Expiry Date" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="cvv" className="ti-form-label">CVV: </label>
                                                    <input type="text" id="cvv" className="ti-form-input" placeholder="Enter CVV" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- Final Contnet --> */}
                                    <div data-hs-stepper-content-item='{"isFinal": true}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="text-center">
                                                <i className="ri-checkbox-circle-line text-7xl text-success"></i>
                                                <h4 className="text-xl font-semibold mb-1">Hurray !..Your Payment is Successfull</h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Final Contnet --> */}

                                    {/* <!-- Button Group --> */}
                                    <div className="mt-5 sm:flex justify-between items-center gap-x-2">
                                        <button type="button" className="ti-btn ti-btn-light disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-back-btn>
                                            <i className="ri-arrow-left-s-line ltr:block rtl:hidden  rtl:rotate-180"></i>
                                            <i className="ri-arrow-right-s-line ltr:hidden rtl:block  rtl:rotate-180"></i>
                                            Back
                                        </button>
                                        <button type="button" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn>Next
                                            <i className="ri-arrow-right-s-line ltr:block rtl:hidden  rtl:rotate-180"></i>
                                            <i className="ri-arrow-left-s-line ltr:hidden rtl:block  rtl:rotate-180"></i>
                                        </button>
                                        <button type="button" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-finish-btn>Finish</button>
                                        <button type="reset" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-reset-btn>Reset</button>
                                    </div>
                                    {/* <!-- End Button Group --> */}
                                </div>
                                {/* <!-- End Stepper Content --> */}
                            </div>
                            {/* <!-- End Stepper --> */}
                        </div>
                    </div>
                </div>
                <div className="col-span-12 xxl:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Non-linear Stepper</h5>
                        </div>
                        <div className="box-body">
                            {/* <!-- Start Stepper --> */}
                            <div data-hs-stepper='{"mode": "non-linear"}'>
                                {/* <!-- Stepper Nav --> */}
                                <ul className="relative sm:flex flex-row gap-x-2 sm:space-y-0 space-y-4">
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{"index": 1}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                Name &amp; Email
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{"index": 2}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                Contact
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{"index": 3}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                Payment
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                </ul>
                                {/* <!-- End Stepper Nav --> */}

                                {/* <!-- Stepper Content --> */}
                                <div className="mt-5 sm:mt-8">
                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 1}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Name1" className="ti-form-label">Name: </label>
                                                    <input type="text" id="Name1" className="ti-form-input" placeholder="Enter Name" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Email1" className="ti-form-label">Email: </label>
                                                    <input type="email" id="Email1" className="ti-form-input" placeholder="Enter Email" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 2}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Telephone1" className="ti-form-label">Telephone: </label>
                                                    <input type="text" id="Telephone1" className="ti-form-input" placeholder="Enter Telephone" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Mobile1" className="ti-form-label">Mobile: </label>
                                                    <input type="text" id="Mobile1" className="ti-form-input" placeholder="Enter Mobile" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 3}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                                <div className="col-span-12">
                                                    <label htmlFor="cardholder1" className="ti-form-label">CardHolder Name: </label>
                                                    <input type="text" id="cardholder1" className="ti-form-input" placeholder="Enter card Details" />
                                                </div>
                                                <div className="col-span-12">
                                                    <label htmlFor="card1" className="ti-form-label">Card number: </label>
                                                    <input type="text" id="card1" className="ti-form-input" placeholder="Enter card Details" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Expiry1" className="ti-form-label">Expiry: </label>
                                                    <input type="text" id="Expiry1" className="ti-form-input" placeholder="Enter Expiry Date" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="cvv1" className="ti-form-label">CVV: </label>
                                                    <input type="text" id="cvv1" className="ti-form-input" placeholder="Enter CVV" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- Final Contnet --> */}
                                    <div data-hs-stepper-content-item='{"isFinal": true}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="text-center">
                                                <i className="ri-checkbox-circle-line text-7xl text-success"></i>
                                                <h4 className="text-xl font-semibold mb-1">Hurray !..Your Payment is Successfull</h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Final Contnet --> */}

                                    {/* <!-- Button Group --> */}
                                    <div className="mt-5 sm:flex justify-between items-center gap-x-2">
                                        <button type="button" className="ti-btn ti-btn-light disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-back-btn>
                                            <i className="ri-arrow-left-s-line ltr:block rtl:hidden  rtl:rotate-180"></i>
                                            <i className="ri-arrow-right-s-line ltr:hidden rtl:block  rtl:rotate-180"></i>
                                            Back
                                        </button>
                                        <button type="button" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn>Next
                                            <i className="ri-arrow-right-s-line ltr:block rtl:hidden  rtl:rotate-180"></i>
                                            <i className="ri-arrow-left-s-line ltr:hidden rtl:block  rtl:rotate-180"></i>
                                        </button>
                                        <button type="button" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-skip-btn>Skip</button>
                                        <button type="button" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-complete-step-btn='{"completedText": "This step is completed"}'>Complete Step</button>
                                        <button type="button" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-finish-btn>Finish</button>
                                        <button type="reset" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-reset-btn>Reset</button>
                                    </div>
                                    {/* <!-- End Button Group --> */}
                                </div>
                                {/* <!-- End Stepper Content --> */}
                            </div>
                            {/* <!-- End Stepper --> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 xxl:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Skipped Stepper</h5>
                        </div>
                        <div className="box-body">
                            {/* <!-- Start Stepper --> */}
                            <div data-hs-stepper>
                                {/* <!-- Stepper Nav --> */}
                                <ul className="relative sm:flex flex-row gap-x-2 sm:space-y-0 space-y-4">
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group active" data-hs-stepper-nav-item='{"index": 1,"isOptional": true}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                Name &amp; Email
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group active" data-hs-stepper-nav-item='{"index": 2 ,"isOptional": true}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                Contact
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{"index": 3,"isOptional": true}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                Payment
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                </ul>
                                {/* <!-- End Stepper Nav --> */}

                                {/* <!-- Stepper Content --> */}
                                <div className="mt-5 sm:mt-8">
                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 1}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Name5" className="ti-form-label">Name: </label>
                                                    <input type="text" id="Name5" className="ti-form-input" placeholder="Enter Name" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Email5" className="ti-form-label">Email: </label>
                                                    <input type="email" id="Email5" className="ti-form-input" placeholder="Enter Email" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 2}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Telephone5" className="ti-form-label">Telephone: </label>
                                                    <input type="text" id="Telephone5" className="ti-form-input" placeholder="Enter Telephone" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Mobile5" className="ti-form-label">Mobile: </label>
                                                    <input type="text" id="Mobile5" className="ti-form-input" placeholder="Enter Mobile" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 3}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                                <div className="col-span-12">
                                                    <label htmlFor="cardholder5" className="ti-form-label">CardHolder Name: </label>
                                                    <input type="text" id="cardholder5" className="ti-form-input" placeholder="Enter card Details" />
                                                </div>
                                                <div className="col-span-12">
                                                    <label htmlFor="card5" className="ti-form-label">Card number: </label>
                                                    <input type="text" id="card5" className="ti-form-input" placeholder="Enter card Details" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Expiry5" className="ti-form-label">Expiry: </label>
                                                    <input type="text" id="Expiry5" className="ti-form-input" placeholder="Enter Expiry Date" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="cvv5" className="ti-form-label">CVV: </label>
                                                    <input type="text" id="cvv5" className="ti-form-input" placeholder="Enter CVV" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- Final Contnet --> */}
                                    <div data-hs-stepper-content-item='{"isFinal": true}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="text-center">
                                                <i className="ri-checkbox-circle-line text-7xl text-success"></i>
                                                <h4 className="text-xl font-semibold mb-1">Hurray !..Your Payment is Successfull</h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Final Contnet --> */}

                                    {/* <!-- Button Group --> */}
                                    <div className="mt-5 sm:flex justify-between items-center gap-x-2">
                                        <button type="button" className="ti-btn ti-btn-light disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-back-btn>
                                            <i className="ri-arrow-left-s-line ltr:block rtl:hidden  rtl:rotate-180"></i>
                                            <i className="ri-arrow-right-s-line ltr:hidden rtl:block  rtl:rotate-180"></i>
                                            Back
                                        </button>
                                        <button type="button" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn>Next
                                            <i className="ri-arrow-right-s-line ltr:block rtl:hidden  rtl:rotate-180"></i>
                                            <i className="ri-arrow-left-s-line ltr:hidden rtl:block  rtl:rotate-180"></i>
                                        </button>
                                        <button type="button" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-skip-btn>Skip</button>
                                        <button type="button" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-finish-btn>Finish</button>
                                        <button type="reset" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-reset-btn>Reset</button>
                                    </div>
                                    {/* <!-- End Button Group --> */}
                                </div>
                                {/* <!-- End Stepper Content --> */}
                            </div>
                            {/* <!-- End Stepper --> */}
                        </div>
                    </div>
                </div>
                <div className="col-span-12 xxl:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Active Stepper</h5>
                        </div>
                        <div className="box-body">
                            {/* <!-- Start Stepper --> */}
                            <div data-hs-stepper='{"currentIndex": 2}'>
                                {/* <!-- Stepper Nav --> */}
                                <ul className="relative sm:flex flex-row gap-x-2 sm:space-y-0 space-y-4">
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group success" data-hs-stepper-nav-item='{"index": 1,"isCompleted": true}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                Name &amp; Email
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group active" data-hs-stepper-nav-item='{"index": 2}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                Contact
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{"index": 3}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                Payment
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                </ul>
                                {/* <!-- End Stepper Nav --> */}

                                {/* <!-- Stepper Content --> */}
                                <div className="mt-5 sm:mt-8">
                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 1}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Name-1" className="ti-form-label">Name: </label>
                                                    <input type="text" id="Name-1" className="ti-form-input" placeholder="Enter Name" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Email-1" className="ti-form-label">Email: </label>
                                                    <input type="email" id="Email-1" className="ti-form-input" placeholder="Enter Email" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 2}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Telephone-1" className="ti-form-label">Telephone: </label>
                                                    <input type="text" id="Telephone-1" className="ti-form-input" placeholder="Enter Telephone" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Mobile-1" className="ti-form-label">Mobile: </label>
                                                    <input type="text" id="Mobile-1" className="ti-form-input" placeholder="Enter Mobile" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 3}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                                <div className="col-span-12">
                                                    <label htmlFor="cardholder-1" className="ti-form-label">CardHolder Name: </label>
                                                    <input type="text" id="cardholder-1" className="ti-form-input" placeholder="Enter card Details" />
                                                </div>
                                                <div className="col-span-12">
                                                    <label htmlFor="card-1" className="ti-form-label">Card number: </label>
                                                    <input type="text" id="card-1" className="ti-form-input" placeholder="Enter card Details" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Expiry-1" className="ti-form-label">Expiry: </label>
                                                    <input type="text" id="Expiry-1" className="ti-form-input" placeholder="Enter Expiry Date" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="cvv-1" className="ti-form-label">CVV: </label>
                                                    <input type="text" id="cvv-1" className="ti-form-input" placeholder="Enter CVV" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- Final Contnet --> */}
                                    <div data-hs-stepper-content-item='{"isFinal": true}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="text-center">
                                                <i className="ri-checkbox-circle-line text-7xl text-success"></i>
                                                <h4 className="text-xl font-semibold mb-1">Hurray !..Your Payment is Successfull</h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Final Contnet --> */}

                                    {/* <!-- Button Group --> */}
                                    <div className="mt-5 sm:flex justify-between items-center gap-x-2">
                                        <button type="button" className="ti-btn ti-btn-light disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-back-btn>
                                            <i className="ri-arrow-left-s-line ltr:block rtl:hidden  rtl:rotate-180"></i>
                                            <i className="ri-arrow-right-s-line ltr:hidden rtl:block  rtl:rotate-180"></i>
                                            Back
                                        </button>
                                        <button type="button" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn>Next
                                            <i className="ri-arrow-right-s-line ltr:block rtl:hidden  rtl:rotate-180"></i>
                                            <i className="ri-arrow-left-s-line ltr:hidden rtl:block  rtl:rotate-180"></i>
                                        </button>
                                        <button type="button" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-finish-btn>Finish</button>
                                        <button type="reset" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-reset-btn >Reset</button>
                                    </div>
                                    {/* <!-- End Button Group --> */}
                                </div>
                                {/* <!-- End Stepper Content --> */}
                            </div>
                            {/* <!-- End Stepper --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start::row-3 --> */}
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 xxl:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Error Stepper</h5>
                        </div>
                        <div className="box-body" id="ctc-component-error-tab-preview">
                            {/* <!-- Start Stepper --> */}
                            <div data-hs-stepper='{"currentIndex": 2}'>
                                {/* <!-- Stepper Nav --> */}
                                <ul className="relative sm:flex flex-row gap-x-2 sm:space-y-0 space-y-4">
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group success" data-hs-stepper-nav-item='{"index": 1,"isCompleted": true}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success hs-stepper-error:!bg-danger hs-stepper-active:text-white hs-stepper-success:text-white hs-stepper-processed:bg-white hs-stepper-processed:border hs-stepper-processed:border-gray-200 hs-stepper-processed:dark:border-white/10">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden hs-stepper-error:hidden hs-stepper-processed:hidden">1</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-error:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                                <span className="hidden animate-spin size-4 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-white hs-stepper-processed:inline-block" role="status" aria-label="loading">
                                                    <span className="sr-only">Loading...</span>
                                                </span>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success hs-stepper-error:!text-danger">
                                                Name &amp; Email
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group active" data-hs-stepper-nav-item='{"index": 2 , "hasError": true}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success hs-stepper-error:!bg-danger hs-stepper-active:text-white hs-stepper-success:text-white hs-stepper-processed:bg-white hs-stepper-processed:border hs-stepper-processed:border-gray-200 hs-stepper-processed:dark:border-white/10">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden hs-stepper-error:hidden hs-stepper-processed:hidden">2</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-error:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                                <span className="hidden animate-spin size-4 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-white hs-stepper-processed:inline-block" role="status" aria-label="loading">
                                                    <span className="sr-only">Loading...</span>
                                                </span>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success hs-stepper-error:!text-danger">
                                                Contact
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{"index": 3}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-active:!text-white hs-stepper-success:!bg-primary hs-stepper-success:!text-white hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success">
                                                Payment
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                </ul>
                                {/* <!-- End Stepper Nav --> */}

                                {/* <!-- Stepper Content --> */}
                                <div className="mt-5 sm:mt-8">

                                    {/* <!-- First Contnet --> */}

                                    <div data-hs-stepper-content-item='{"index": 1}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Name" className="ti-form-label">Name: </label>
                                                    <input type="text" id="Name4" className="ti-form-input" placeholder="Enter Name" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Email" className="ti-form-label">Email: </label>
                                                    <input type="email" id="Email4" className="ti-form-input" placeholder="Enter Email" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 2}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Telephone" className="ti-form-label">Telephone: </label>
                                                    <input type="text" id="Telephone4" className="ti-form-input" placeholder="Enter Telephone" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Mobile" className="ti-form-label">Mobile: </label>
                                                    <input type="text" id="Mobile4" className="ti-form-input" placeholder="Enter Mobile" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 3}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                                <div className="col-span-12">
                                                    <label htmlFor="cardholder4" className="ti-form-label">CardHolder Name: </label>
                                                    <input type="text" id="cardholder4" className="ti-form-input" placeholder="Enter card Details" />
                                                </div>
                                                <div className="col-span-12">
                                                    <label htmlFor="card4" className="ti-form-label">Card number: </label>
                                                    <input type="text" id="card4" className="ti-form-input" placeholder="Enter card Details" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Expiry4" className="ti-form-label">Expiry: </label>
                                                    <input type="text" id="Expiry4" className="ti-form-input" placeholder="Enter Expiry Date" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="cvv4" className="ti-form-label">CVV: </label>
                                                    <input type="text" id="cvv4" className="ti-form-input" placeholder="Enter CVV" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- Final Contnet --> */}
                                    <div data-hs-stepper-content-item='{"isFinal": true}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="text-center">
                                                <i className="ri-checkbox-circle-line text-7xl text-success"></i>
                                                <h4 className="text-xl font-semibold mb-1">Hurray !..Your Payment is Successfull</h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Final Contnet --> */}

                                    {/* <!-- Button Group --> */}
                                    <div className="mt-5 sm:flex justify-between items-center gap-x-2">
                                        <button type="button" className="ti-btn ti-btn-light disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-back-btn>
                                            <i className="ri-arrow-left-s-line ltr:block rtl:hidden  rtl:rotate-180"></i>
                                            <i className="ri-arrow-right-s-line ltr:hidden rtl:block  rtl:rotate-180"></i>
                                            Back
                                        </button>
                                        <button type="button" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn>Next
                                            <i className="ri-arrow-right-s-line ltr:block rtl:hidden  rtl:rotate-180"></i>
                                            <i className="ri-arrow-left-s-line ltr:hidden rtl:block  rtl:rotate-180"></i>
                                        </button>
                                        <button type="button" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-finish-btn>Finish</button>
                                        <button type="reset" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-reset-btn>Reset</button>
                                    </div>
                                    {/* <!-- End Button Group --> */}
                                </div>
                                {/* <!-- End Stepper Content --> */}
                            </div>
                            {/* <!-- End Stepper --> */}
                        </div>
                    </div>
                </div>
                <div className="col-span-12 xxl:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Success Stepper</h5>
                        </div>
                        <div className="box-body">
                            {/* <!-- Start Stepper --> */}
                            <div data-hs-stepper='{"isCompleted": true}' className="completed">
                                {/* <!-- Stepper Nav --> */}
                                <ul className="relative sm:flex flex-row gap-x-2 sm:space-y-0 space-y-4">
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group success" data-hs-stepper-nav-item='{"index": 1,"isCompleted": true}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success hs-stepper-error:!bg-danger hs-stepper-active:text-white hs-stepper-success:text-white hs-stepper-processed:bg-white hs-stepper-processed:border hs-stepper-processed:border-gray-200 hs-stepper-processed:dark:border-white/10">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden hs-stepper-error:hidden hs-stepper-processed:hidden">1</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-error:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                                <span className="hidden animate-spin size-4 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-white hs-stepper-processed:inline-block" role="status" aria-label="loading">
                                                    <span className="sr-only">Loading...</span>
                                                </span>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success hs-stepper-error:!text-danger">
                                                Name &amp; Email
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group success" data-hs-stepper-nav-item='{"index": 2,"isCompleted": true}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success hs-stepper-error:!bg-danger hs-stepper-active:text-white hs-stepper-success:text-white hs-stepper-processed:bg-white hs-stepper-processed:border hs-stepper-processed:border-gray-200 hs-stepper-processed:dark:border-white/10">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden hs-stepper-error:hidden hs-stepper-processed:hidden">2</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-error:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                                <span className="hidden animate-spin size-4 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-white hs-stepper-processed:inline-block" role="status" aria-label="loading">
                                                    <span className="sr-only">Loading...</span>
                                                </span>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success hs-stepper-error:!text-danger">
                                                Contact
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                    <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group success" data-hs-stepper-nav-item='{"index": 3,"isCompleted": true}'>
                                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-bodybg dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:!bg-primary hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hs-stepper-completed:group-focus:!bg-success hs-stepper-error:!bg-danger hs-stepper-active:text-white hs-stepper-success:text-white hs-stepper-processed:bg-white hs-stepper-processed:border hs-stepper-processed:border-gray-200 hs-stepper-processed:dark:border-white/10">
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden hs-stepper-error:hidden hs-stepper-processed:hidden">3</span>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                                <svg className="hidden flex-shrink-0 size-3 hs-stepper-error:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                                <span className="hidden animate-spin size-4 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-white hs-stepper-processed:inline-block" role="status" aria-label="loading">
                                                    <span className="sr-only">Loading...</span>
                                                </span>
                                            </span>
                                            <span className="ms-2 text-sm font-medium text-gray-800 dark:text-white hs-stepper-active:!text-primary hs-stepper-success:!text-primary hs-stepper-completed:!text-success hs-stepper-error:!text-danger">
                                                Payment
                                            </span>
                                        </span>
                                        <div className="w-full h-px flex-1 bg-gray-200 dark:bg-bodybg group-last:hidden hs-stepper-success:!bg-primary hs-stepper-completed:!bg-success hidden sm:block"></div>
                                    </li>
                                </ul>
                                {/* <!-- End Stepper Nav --> */}

                                {/* <!-- Stepper Content --> */}
                                <div className="mt-5 sm:mt-8">
                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 1,"isCompleted": true}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Name6" className="ti-form-label">Name: </label>
                                                    <input type="text" id="Name6" className="ti-form-input" placeholder="Enter Name" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Email6" className="ti-form-label">Email: </label>
                                                    <input type="email" id="Email6" className="ti-form-input" placeholder="Enter Email" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 2,"isCompleted": true}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 space-y-2 sm:space-y-0">
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Telephone6" className="ti-form-label">Telephone: </label>
                                                    <input type="text" id="Telephone6" className="ti-form-input" placeholder="Enter Telephone" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Mobile6" className="ti-form-label">Mobile: </label>
                                                    <input type="text" id="Mobile6" className="ti-form-input" placeholder="Enter Mobile" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- First Contnet --> */}
                                    <div data-hs-stepper-content-item='{"index": 3,"isCompleted": true}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                                <div className="col-span-12">
                                                    <label htmlFor="cardholder4" className="ti-form-label">CardHolder Name: </label>
                                                    <input type="text" id="cardholder6" className="ti-form-input" placeholder="Enter card Details" />
                                                </div>
                                                <div className="col-span-12">
                                                    <label htmlFor="card6" className="ti-form-label">Card number: </label>
                                                    <input type="text" id="card6" className="ti-form-input" placeholder="Enter card Details" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="Expiry6" className="ti-form-label">Expiry: </label>
                                                    <input type="text" id="Expiry6" className="ti-form-input" placeholder="Enter Expiry Date" />
                                                </div>
                                                <div className="lg:col-span-6 col-span-12">
                                                    <label htmlFor="cvv6" className="ti-form-label">CVV: </label>
                                                    <input type="text" id="cvv6" className="ti-form-input" placeholder="Enter CVV" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End First Contnet --> */}

                                    {/* <!-- Final Contnet --> */}
                                    <div data-hs-stepper-content-item='{"isFinal": true}'>
                                        <div className="p-6 bg-gray-50 dark:bg-bodybg border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
                                            <div className="text-center">
                                                <i className="ri-checkbox-circle-line text-7xl text-success"></i>
                                                <h4 className="text-xl font-semibold mb-1">Hurray !..Your Payment is Successfull</h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Final Contnet --> */}

                                    {/* <!-- Button Group --> */}
                                    <div className="mt-5 sm:flex justify-between items-center gap-x-2">
                                        <button type="button" className="ti-btn ti-btn-light disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-back-btn>
                                            <i className="ri-arrow-left-s-line ltr:block rtl:hidden  rtl:rotate-180"></i>
                                            <i className="ri-arrow-right-s-line ltr:hidden rtl:block  rtl:rotate-180"></i>
                                            Back
                                        </button>
                                        <button type="button" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn>Next
                                            <i className="ri-arrow-right-s-line ltr:block rtl:hidden  rtl:rotate-180"></i>
                                            <i className="ri-arrow-left-s-line ltr:hidden rtl:block  rtl:rotate-180"></i>
                                        </button>
                                        <button type="button" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-finish-btn>Finish</button>
                                        <button type="reset" className="ti-btn ti-btn-primary disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-reset-btn>Reset</button>
                                    </div>
                                    {/* <!-- End Button Group --> */}
                                </div>
                                {/* <!-- End Stepper Content --> */}
                            </div>
                            {/* <!-- End Stepper --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End::row-3 --> */}
            {/* // <!-- Start::row-1 --> */}
        </Fragment>
    )
};

export default Stepper;