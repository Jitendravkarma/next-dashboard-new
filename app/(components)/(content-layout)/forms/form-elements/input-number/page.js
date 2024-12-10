"use client"
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";

const InputNumber = () => {
  return (
    <Fragment>
      <Seo title={"Input Number"} />
      <PageHeader currentpage="Input Number" activepage="Form-Elements" mainpage="Input Number" />
      {/* <!-- Start::row-1 --> */}
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Basic Input Number</h5>
            </div>
            <div className="box-body">
              {/* <!-- Input Number --> */}
              <div className="py-2 px-3 bg-gray-100 rounded-sm dark:bg-bodybg" data-hs-input-number>
                <div className="w-full flex justify-between items-center gap-x-5">
                  <div className="grow">
                    <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" type="text" defaultValue="1" data-hs-input-number-input />
                  </div>
                  <div className="flex justify-end items-center gap-x-1.5">
                    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-decrement>
                      <i className="ri-subtract-line"></i>
                    </button>
                    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-increment>
                      <i className="ri-add-line"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- End Input Number --> */}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title"> Input style 01</h5>
            </div>
            <div className="box-body">
              {/* <!-- Input Number --> */}
              <div className="py-2 px-3 bg-gray-100 rounded-sm dark:bg-bodybg" data-hs-input-number>
                <div className="w-full flex justify-between items-center gap-x-5">
                  <div className="grow">
                    <span className="block text-xs text-gray-500 dark:text-white/70">
                      Select quantity
                    </span>
                    <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" type="text" defaultValue="1" data-hs-input-number-input />
                  </div>
                  <div className="flex justify-end items-center gap-x-1.5">
                    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-decrement>
                      <i className="ri-subtract-line"></i>
                    </button>
                    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-increment>
                      <i className="ri-add-line"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- End Input Number --> */}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Buttons vertically stacked</h5>
            </div>
            <div className="box-body">
              {/* <!-- Input Number --> */}
              <div className="bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10" data-hs-input-number>
                <div className="w-full flex justify-between items-center gap-x-1 overflow-hidden">
                  <div className="grow py-2 px-3">
                    <span className="block text-xs text-gray-500 dark:text-white/70">
                      Select quantity
                    </span>
                    <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" type="text" defaultValue="1" data-hs-input-number-input />
                  </div>
                  <div className="flex flex-col -gap-y-px divide-y divide-gray-200 border-s border-gray-200 dark:divide-white/10 dark:border-white/10">
                    <button type="button" className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-se-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:text-white dark:hover:bg-bgdark/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-decrement>
                      <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                    </button>
                    <button type="button" className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:text-white dark:hover:bg-bgdark/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-increment>
                      <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- End Input Number --> */}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Buttons horizontally stacked</h5>
            </div>
            <div className="box-body">
              {/* <!-- Input Number --> */}
              <div className="bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10" data-hs-input-number>
                <div className="w-full flex justify-between items-center gap-x-1 overflow-hidden">
                  <div className="grow py-2 px-3">
                    <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" type="text" defaultValue="1" data-hs-input-number-input />
                  </div>
                  <div className="flex items-center -gap-y-px divide-x rtl:divide-x-reverse divide-gray-200 border-s border-gray-200 dark:divide-white/10 dark:border-white/10">
                    <button type="button" className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-sm bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:text-white dark:hover:bg-bgdark/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-decrement>
                      <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                    </button>
                    <button type="button" className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-sm bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:text-white dark:hover:bg-bgdark/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-increment>
                      <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- End Input Number --> */}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Mini Input</h5>
            </div>
            <div className="box-body">
              {/* <!-- Input Number --> */}
              <div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10" data-hs-input-number>
                <div className="flex items-center gap-x-1.5">
                  <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-decrement>
                    <i className="ri-subtract-line"></i>
                  </button>
                  <input className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white" type="text" defaultValue="0" data-hs-input-number-input />
                  <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-increment>
                    <i className="ri-add-line"></i>
                  </button>
                </div>
              </div>
              {/* <!-- End Input Number --> */}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Pricing seats example</h5>
            </div>
            <div className="box-body">
              {/* <!-- Input Number --> */}
              <div className="py-2 px-3 bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10" data-hs-input-number>
                <div className="w-full flex justify-between items-center gap-x-3">
                  <div>
                    <span className="block font-medium text-sm text-gray-800 dark:text-white">
                      Additional seats
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-white/70">
                      $39 monthly
                    </span>
                  </div>
                  <div className="flex items-center gap-x-1.5">
                    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-decrement>
                      <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                    </button>
                    <input className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white" type="text" defaultValue="0" data-hs-input-number-input />
                    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-increment>
                      <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- End Input Number --> */}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Input disabled</h5>
            </div>
            <div className="box-body">
              {/* <!-- Input Number --> */}
              <div className="py-2 px-3 bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10" data-hs-input-number>
                <div className="w-full flex justify-between items-center gap-x-3">
                  <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" type="text" defaultValue="10" data-hs-input-number-input disabled />
                  <div className="flex justify-end items-center gap-x-1.5">
                    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-decrement>
                      <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                    </button>
                    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-increment>
                      <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- End Input Number --> */}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Button disabled</h5>
            </div>
            <div className="box-body">
              {/* <!-- Input Number --> */}
              <div className="py-2 px-3 bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10" data-hs-input-number>
                <div className="w-full flex justify-between items-center gap-x-3">
                  <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" type="text" defaultValue="10" data-hs-input-number-input disabled />
                  <div className="flex justify-end items-center gap-x-1.5">
                    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-decrement disabled>
                      <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                    </button>
                    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-increment>
                      <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- End Input Number --> */}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Validation states</h5>
            </div>
            <div className="box-body">
              {/* <!-- Input Number --> */}
              <div className="py-2 px-3 bg-white border border-danger rounded-sm dark:bg-bodybg" data-hs-input-number>
                <div className="w-full flex justify-between items-center gap-x-3">
                  <div className="relative w-full">
                    <input id="hs-validation-name-error" className="w-full p-0 pe-7 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" type="text" defaultValue="10" data-hs-input-number-input aria-describedby="hs-validation-name-error-helper" />
                    <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none">
                      <svg className="flex-shrink-0 size-4 text-danger" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
                    </div>
                  </div>
                  <div className="flex justify-end items-center gap-x-1.5">
                    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-decrement>
                      <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                    </button>
                    <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" data-hs-input-number-increment>
                      <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- End Input Number --> */}

              <p className="text-sm text-danger mt-2" id="hs-validation-name-error-helper">Out of limit</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End::row-1 --> */}
    </Fragment>
  )
};

export default InputNumber;