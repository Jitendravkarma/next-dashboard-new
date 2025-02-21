"use client"
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React from "react";

const Timeline = () => {
  return (
    <div>
      <Seo title={"Timeline"} />
      <PageHeader currentpage="Timeline" activepage="Pages" mainpage="Timeline" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Timeline -01</h5>
            </div>
            <div className="box-body">
              <div className="flex flex-row">
                <div className="mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-[3px] bg-gray-100 dark:bg-black/20 pointer-events-none"></div>
                  </div>
                  <div
                    className="avatar avatar-xs absolute top-0 rounded-full bg-gray-200 shadow text-center ltr:-left-[4px] rtl:-right-[4px]">
                    <img src={"../../assets/img/users/1.jpg"} className="rounded-full" alt="timeline-img" />
                  </div>
                </div>
                <div className="flex w-full pb-8">
                  <div className="ltr:ml-5 rtl:mr-5 rounded-sm ltr:mr-auto rtl:ml-auto my-auto w-full space-y-3">
                    <div className="sm:flex">
                      <h3 className="my-auto text-gray-500 dark:text-white/70"><span className="text-dark dark:text-white">Elida
                        Distefa</span> added a comment to <span className="text-dark dark:text-white">Anderson
                          Itumay</span> post</h3>
                      <p className="my-auto ltr:ml-auto rtl:mr-auto text-gray-500 dark:text-white/70 text-xs">
                        Today, 04:30 PM
                      </p>
                    </div>
                    <div className="flex -space-x-2 rtl:space-x-reverse">
                      <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/1.jpg"} alt="Image Description" />
                      <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/4.jpg"}
                        alt="Image Description" />
                      <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/2.jpg"}
                        alt="Image Description" />
                      <img className="avatar avatar-xs rounded-full" src={"../../assets/img/users/3.jpg"}
                        alt="Image Description" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-[3px] bg-gray-100 dark:bg-black/20 pointer-events-none"></div>
                  </div>
                  <div
                    className="avatar avatar-xs absolute top-0 rounded-full bg-gray-200 shadow text-center ltr:-left-[4px] rtl:-right-[4px]">
                    <img src={"../../assets/img/users/3.jpg"} className="rounded-full" alt="timeline-img" />
                  </div>
                </div>
                <div className="flex w-full pb-8">
                  <div className="ltr:ml-5 rtl:mr-5 rounded-sm ltr:mr-auto rtl:ml-auto my-auto w-full space-y-3">
                    <div className="sm:flex">
                      <h3 className="my-auto text-gray-500 dark:text-white/70"><span className="text-dark dark:text-white">Samantha
                        Melon</span> added a 😎 reaction to <span className="text-dark dark:text-white">Anderson
                          Itumay</span> post</h3>
                      <p className="my-auto ltr:ml-auto rtl:mr-auto text-gray-500 dark:text-white/70 text-xs">
                        Today, 04:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-[3px] bg-gray-100 dark:bg-black/20 pointer-events-none"></div>
                  </div>
                  <div
                    className="avatar avatar-xs absolute top-0 rounded-full bg-gray-200 shadow text-center ltr:-left-[4px] rtl:-right-[4px]">
                    <img src={"../../assets/img/users/2.jpg"} className="rounded-full" alt="timeline-img" />
                  </div>
                </div>
                <div className="flex w-full pb-8">
                  <div className="ltr:ml-5 rtl:mr-5 rounded-sm ltr:mr-auto rtl:ml-auto my-auto w-full space-y-3">
                    <div className="sm:flex">
                      <h3 className="my-auto text-gray-500 dark:text-white/70"><span className="text-dark dark:text-white">Samantha
                        Melon</span> like an Image</h3>
                      <p className="my-auto ltr:ml-auto rtl:mr-auto text-gray-500 dark:text-white/70 text-xs">
                        Today, 05:45 PM
                      </p>
                    </div>
                    <div><img src={"../../assets/img/gallery/2.jpg"} className="avatar avatar-lg rounded-sm" alt="profile-img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-[3px] bg-gray-100 dark:bg-black/20 pointer-events-none"></div>
                  </div>
                  <div
                    className="avatar avatar-xs absolute top-0 rounded-full bg-gray-200 shadow text-center ltr:-left-[4px] rtl:-right-[4px]">
                    <img src={"../../assets/img/users/15.jpg"} className="rounded-full" alt="timeline-img" />
                  </div>
                </div>
                <div className="flex w-full pb-8">
                  <div className="ltr:ml-5 rtl:mr-5 rounded-sm ltr:mr-auto rtl:ml-auto my-auto w-full space-y-3">
                    <div className="sm:flex">
                      <h3 className="my-auto text-gray-500 dark:text-white/70"><span className="text-dark dark:text-white">Dennis
                        Trexy</span> Shared an image</h3>
                      <p className="my-auto ltr:ml-auto rtl:mr-auto text-gray-500 dark:text-white/70 text-xs">
                        yesterday, 10:20 am
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500 dark:text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum sit consequuntur quia aperiam quibusdam rerum ut! Id ducimus nobis rerum modi
                        veniam odit totam rem asperiores adipisci, sed quia voluptas?</p>
                      <img src={"../../assets/img/gallery/5.jpg"} className="avatar avatar-lg rounded-sm" alt="profile-img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-[3px] bg-gray-100 dark:bg-black/20 pointer-events-none"></div>
                  </div>
                  <div
                    className="avatar avatar-xs absolute top-0 rounded-full bg-gray-200 shadow text-center ltr:-left-[4px] rtl:-right-[4px]">
                    <img src={"../../assets/img/users/21.jpg"} className="rounded-full" alt="timeline-img" />
                  </div>
                </div>
                <div className="flex w-full pb-8">
                  <div className="ltr:ml-5 rtl:mr-5 rounded-sm ltr:mr-auto rtl:ml-auto my-auto w-full space-y-3">
                    <div className="sm:flex">
                      <h3 className="my-auto text-gray-500 dark:text-white/70"><span className="text-dark dark:text-white">Anesthesia</span>
                        &nbsp;commented on {`today's`} meeting</h3>
                      <p className="my-auto ltr:ml-auto rtl:mr-auto text-gray-500 dark:text-white/70 text-xs">
                        yesterday, 05:06 pm
                      </p>
                    </div>
                    <div
                      className="border border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10 p-4 rounded-sm">
                      <p className="text-xs text-gray-500 dark:text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum sit consequuntur quia aperiam quibusdam rerum ut! Id ducimus nobis rerum modi
                        veniam odit totam rem asperiores adipisci, sed quia voluptas?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-[3px] bg-gray-100 dark:bg-black/20 pointer-events-none"></div>
                  </div>
                  <div className="avatar avatar-xs absolute top-0 rounded-full bg-gray-200 shadow text-center ltr:-left-[4px] rtl:-right-[4px] leading-[2.3] text-gray-800 dark:text-gray-800">H</div>
                </div>
                <div className="flex w-full pb-8">
                  <div className="ltr:ml-5 rtl:mr-5 rounded-sm ltr:mr-auto rtl:ml-auto my-auto w-full space-y-3">
                    <div className="sm:flex">
                      <h3 className="my-auto text-gray-500 dark:text-white/70"><span className="text-dark dark:text-white">Harvey
                        Mattos</span> Followed You</h3>
                      <p className="my-auto ltr:ml-auto rtl:mr-auto text-gray-500 dark:text-white/70 text-xs">
                        03-12-20222, 12:06 pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                  </div>
                  <div
                    className="avatar avatar-xs absolute top-0 rounded-full bg-gray-200 shadow text-center ltr:-left-[4px] rtl:-right-[4px]">
                    <img src={"../../assets/img/users/15.jpg"} className="rounded-full" alt="timeline-img" />
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="ltr:ml-5 rtl:mr-5 rounded-sm ltr:mr-auto rtl:ml-auto my-auto w-full space-y-3">
                    <div className="sm:flex">
                      <h3 className="my-auto text-gray-500 dark:text-white/70"><span className="text-dark dark:text-white">Anesthesia</span>
                        &nbsp;5 Days left for Montly submission of progress report </h3>
                      <p className="my-auto ltr:ml-auto rtl:mr-auto text-gray-500 dark:text-white/70 text-xs">
                        02-12-2022, 6:20 pm
                      </p>
                    </div>
                    <div className="border border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10 p-4 rounded-sm">
                      <p className="text-xs text-gray-500 dark:text-white/70 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit consequuntur quia aperiam quibusdam rerum ut! </p>
                      <p className="text-xs text-gray-500 dark:text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit.veniam odit totam rem asperiores adipisci, sed quia voluptas?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Timeline -02</h5>
            </div>
            <div className="box-body">
              <div className="relative">
                <div className="timeline-start"></div>
                <div className="timeline-line"></div>
                <div className="timeline">
                  <div className="timeline-main">
                    <div className="timeline-left">
                      <div className="timeline-body">
                        <div className="box">
                          <div className="box-body p-4">
                            <h6 className="font-semibold text-base mb-2">Marsha Mellow updated his status</h6>
                            <p className="text-xs text-gray-500 dark:text-white/70">Nonumy erat nonumy dolores duo ea sit, ipsum sed amet aliquyam magna kasd at. Dolor erat sit sed sea et dolor, justo dolor ipsum dolore voluptua. Sed ipsum sed.</p>
                          </div>
                          <div className="box-footer bg-transparent p-4">
                            <div className="sm:space-y-0 space-y-2 sm:flex items-center justify-between">
                              <div className="sm:flex  flex-wrap items-center sm:space-x-3 space-x-0 sm:space-y-0 space-y-2 rtl:space-x-reverse">
                                <div className="flex">
                                  <img className="avatar avatar-sm ring-0 rounded-full" src={"../../assets/img/users/2.jpg"} alt="avatar" />
                                </div>
                                <div>
                                  <p className="text-slate-700 font-semibold text-sm dark:text-white">
                                    Json Taylor
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-white/70">
                                    20 min ago
                                  </p>
                                </div>
                              </div>
                              <div className="space-x-1 sm:space-y-2 space-y-1 sm:space-x-2 text-end rtl:space-x-reverse">
                                <Link href="#!" scroll={false} className="text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark  rtl:ml-1"><i className="text-xs ri ri-heart-line"></i><span>30</span></Link>
                                <Link href="#!" scroll={false} className="text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i className="text-xs ri ri-thumb-up-line"></i><span>25k</span></Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-warning text-white timeline-icon">
                      <i className="ri ri-mail-line text-lg leading-none"></i>
                    </div>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-main">
                    <div className="timeline-right">
                      <div className="timeline-body">
                        <div className="box">
                          <div className="box-body p-4">
                            <h6 className="font-semibold text-base mb-2">Job Meeting</h6>
                            <p className="text-xs text-gray-500 dark:text-white/70">Invidunt dolor justo gubergren sit voluptua ipsum lorem sanctus, justo dolores dolor dolore stet justo dolor. Eos ipsum rebum diam..</p>
                          </div>
                          <div className="box-footer bg-transparent p-4">
                            <div className="sm:space-y-0 space-y-2 sm:flex items-center justify-between">
                              <div className="sm:flex flex-wrap  items-center sm:space-x-3 space-x-0 sm:space-y-0 space-y-2 rtl:space-x-reverse">
                                <div className="flex">
                                  <img className="avatar avatar-sm ring-0 rounded-full" src={"../../assets/img/users/1.jpg"} alt="avatar" />
                                </div>
                                <div>
                                  <p className="text-slate-700 font-semibold text-sm dark:text-white">
                                    Anderson Itumay
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-white/70">
                                    11 Dec 2022
                                  </p>
                                </div>
                              </div>
                              <div className="space-x-1 sm:space-y-2 space-y-1 sm:space-x-2 text-end rtl:space-x-reverse">
                                <Link href="#!" scroll={false} className="text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark rtl:ml-1"><i className="text-xs ri ri-heart-line"></i><span>30</span></Link>
                                <Link href="#!" scroll={false} className="text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i className="text-xs ri ri-thumb-up-line"></i><span>25k</span></Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-secondary text-white timeline-icon">
                      <i className="ri-briefcase-4-line text-lg leading-none"></i>
                    </div>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-main">
                    <div className="timeline-left">
                      <div className="timeline-body">
                        <div className="box">
                          <div className="box-body p-4">
                            <h6 className="font-semibold text-base mb-2">Clark Kent posted on timeline</h6>
                            <p className="text-xs text-gray-500 dark:text-white/70">Accusam et et stet invidunt at duo, ipsum no takimata est eos magna dolore sed, amet diam sea no diam.</p>
                          </div>
                          <div className="box-footer bg-transparent p-4">
                            <div className="sm:space-y-0 space-y-2 sm:flex items-center justify-between">
                              <div className="sm:flex flex-wrap  items-center sm:space-x-3 space-x-0 sm:space-y-0 space-y-2 rtl:space-x-reverse">
                                <div className="flex">
                                  <img className="avatar avatar-sm ring-0 rounded-full" src={"../../assets/img/users/21.jpg"} alt="avatar" />
                                </div>
                                <div>
                                  <p className="text-slate-700 font-semibold text-sm dark:text-white">
                                    Harvey Mattos
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-white/70">
                                    11 Dec 2022
                                  </p>
                                </div>
                              </div>
                              <div className="space-x-1 sm:space-y-2 space-y-1 sm:space-x-2 text-end rtl:space-x-reverse">
                                <Link href="#!" scroll={false} className="text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark rtl:ml-1"><i className="text-xs ri ri-heart-line"></i><span>30</span></Link>
                                <Link href="#!" scroll={false} className="text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i className="text-xs ri ri-thumb-up-line"></i><span>25k</span></Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-danger text-white timeline-icon">
                      <span className="text-lg leading-none">HM</span>
                    </div>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-main">
                    <div className="timeline-right">
                      <div className="timeline-body">
                        <div className="box">
                          <div className="box-body p-4">
                            <h6 className="font-semibold text-base mb-2">Shady Tree send you a post</h6>
                            <p className="text-xs text-gray-500 dark:text-white/70">Dolore justo lorem vero sed et takimata sit no dolore dolores, elitr eos et dolor consetetur sed sanctus. Ipsum amet elitr lorem clita et dolor. Kasd diam ea dolor sit accusam gubergren no kasd. Ea amet et sed takimata kasd,.</p>
                          </div>
                          <div className="box-footer bg-transparent p-4">
                            <div className="sm:space-y-0 space-y-2 sm:flex items-center justify-between">
                              <div className="sm:flex flex-wrap  items-center sm:space-x-3 space-x-0 sm:space-y-0 space-y-2 rtl:space-x-reverse">
                                <div className="flex">
                                  <img className="avatar ring-0 rounded-full" src={"../../assets/img/users/15.jpg"} alt="avatar" />
                                </div>
                                <div>
                                  <p className="text-slate-700 font-semibold text-sm dark:text-white">
                                    Anesthesia
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-white/70">
                                    9 Dec 2022
                                  </p>
                                </div>
                              </div>
                              <div className="space-x-1 sm:space-y-2 space-y-1 sm:space-x-2 text-end rtl:space-x-reverse">
                                <Link href="#!" scroll={false} className="text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark rtl:ml-1"><i className="text-xs ri ri-heart-line"></i><span>30</span></Link>
                                <Link href="#!" scroll={false} className="text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i className="text-xs ri ri-thumb-up-line"></i><span>25k</span></Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-danger text-white timeline-icon">
                      <img className="avatar ring-0 rounded-full" src={"../../assets/img/users/15.jpg"} alt="avatar" />
                    </div>
                  </div>
                </div>
                <div className="timeline-end"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* <!-- Start::row-2 --> */}
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 xl:col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Basic Timeline</h5>
            </div>
            <div className="box-body">
              {/* <!-- Timeline --> */}
              <div>
                {/* <!-- Heading --> */}
                <div className="ps-2 my-2 first:mt-0">
                  <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                    1 Mar, 2024
                  </h3>
                </div>
                {/* <!-- End Heading --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      <svg className="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
                      Created "Preline in React" task
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                      Find more detailed insctructions here.
                    </p>
                    <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-md border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                      <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/img/users/1.jpg" alt="Image Description" />
                      James Collins
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      Release v5.2.0 quick bug fix &#128030;
                    </h3>
                    <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-md border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                      <span className="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                        A
                      </span>
                      Alex Gregarov
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      Marked "Install Charts" completed
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                      Finally! You can check it out here.
                    </p>
                    <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-md border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                      <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/img/users/1.jpg" alt="Image Description" />
                      James Collins
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Heading --> */}
                <div className="ps-2 my-2 first:mt-0">
                  <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                    29 Feb, 2024
                  </h3>
                </div>
                {/* <!-- End Heading --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      Take a break &#9971;
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                      Just chill for now... &#128521;
                    </p>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}
              </div>
              {/* <!-- End Timeline --> */}
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Collapsable Timeline</h5>
            </div>
            <div className="box-body">
              {/* <!-- Timeline --> */}
              <div>
                {/* <!-- Heading --> */}
                <div className="ps-2 my-2 first:mt-0">
                  <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                    1 Mar, 2024
                  </h3>
                </div>
                {/* <!-- End Heading --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      <svg className="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
                      Created "Preline in React" task
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                      Find more detailed insctructions here.
                    </p>
                    <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-md border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                      <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/img/users/1.jpg" alt="Image Description" />
                      James Collins
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      Release v5.2.0 quick bug fix &#128030;
                    </h3>
                    <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-md border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                      <span className="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                        A
                      </span>
                      Alex Gregarov
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      Marked "Install Charts" completed
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                      Finally! You can check it out here.
                    </p>
                    <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-md border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                      <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/img/users/1.jpg" alt="Image Description" />
                      James Collins
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Heading --> */}
                <div className="ps-2 my-2 first:mt-0">
                  <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                    29 Feb, 2024
                  </h3>
                </div>
                {/* <!-- End Heading --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      Take a break &#9971;
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                      Just chill for now... &#128521;
                    </p>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}
                {/* <!-- Collapse --> */}
                <div id="hs-timeline-collapse" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-timeline-collapse-content">
                  {/* <!-- Heading --> */}
                  <div className="ps-2 my-2">
                    <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                      28 Feb, 2024
                    </h3>
                  </div>
                  {/* <!-- End Heading --> */}

                  {/* <!-- Item --> */}
                  <div className="flex gap-x-3">
                    {/* <!-- Icon --> */}
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                      <div className="relative z-10 size-7 flex justify-center items-center">
                        <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg"></div>
                      </div>
                    </div>
                    {/* <!-- End Icon --> */}

                    {/* <!-- Right Content --> */}
                    <div className="grow pt-0.5 pb-8">
                      <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                        Final touch ups
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                        Double check everything and make sure we're ready to go.
                      </p>
                    </div>
                    {/* <!-- End Right Content --> */}
                  </div>
                  {/* <!-- End Item --> */}
                </div>
                {/* <!-- End Collapse --> */}

                {/* <!-- Item --> */}
                <div className="ps-[7px] flex gap-x-3">
                  <button type="button" className="hs-collapse-toggle hs-collapse-open:hidden text-start inline-flex items-center gap-x-1 text-sm text-primary font-medium decoration-2 hover:underline dark:text-primary dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10" id="hs-timeline-collapse-content" data-hs-collapse="#hs-timeline-collapse">
                    <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    Show older
                  </button>
                </div>
                {/* <!-- End Item --> */}
              </div>
              {/* <!-- End Timeline --> */}
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Hoverable Timeline</h5>
            </div>
            <div className="box-body">
              {/* <!-- Timeline --> */}
              <div>
                {/* <!-- Heading --> */}
                <div className="ps-2 my-2 first:mt-0">
                  <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                    1 MAR, 2024
                  </h3>
                </div>
                {/* <!-- End Heading --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3 relative group rounded-md hover:bg-gray-100 dark:hover:bg-white/10">
                  <a className="absolute inset-0 z-[1]" href="#!"></a>

                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg dark:group-hover:after:bg-bodybg/70">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:group-hover:border-white dark:bg-bgdark dark:border-white/10"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-2 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      <svg className="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
                      Created "Preline in React" task
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                      Find more detailed insctructions here.
                    </p>
                    <button type="button" className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-md border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                      <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/img/users/1.jpg" alt="Image Description" />
                      James Collins
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3 relative group rounded-md hover:bg-gray-100 dark:hover:bg-white/10">
                  <a className="absolute inset-0 z-[1]" href="#!"></a>

                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg dark:group-hover:after:bg-bodybg/70">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:group-hover:border-white dark:bg-bgdark dark:border-white/10"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-2 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      Release v5.2.0 quick bug fix &#128030;
                    </h3>
                    <button type="button" className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-md border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                      <span className="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                        A
                      </span>
                      Alex Gregarov
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3 relative group rounded-md hover:bg-gray-100 dark:hover:bg-white/10">
                  <a className="absolute inset-0 z-[1]" href="#!"></a>

                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg dark:group-hover:after:bg-bodybg/70">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:group-hover:border-white dark:bg-bgdark dark:border-white/10"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-2 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      Marked "Install Charts" completed
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                      Finally! You can check it out here.
                    </p>
                    <button type="button" className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-md border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                      <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/img/users/1.jpg" alt="Image Description" />
                      James Collins
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Heading --> */}
                <div className="ps-2 my-2 first:mt-0">
                  <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                    29 FEB, 2024
                  </h3>
                </div>
                {/* <!-- End Heading --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3 relative group rounded-md hover:bg-gray-100 dark:hover:bg-white/10">
                  <a className="absolute inset-0 z-[1]" href="#!"></a>

                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg dark:group-hover:after:bg-bodybg/70">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:group-hover:border-white dark:bg-bgdark dark:border-white/10"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-2 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      Take a break &#9971;
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                      Just chill for now... &#128521;
                    </p>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}
              </div>
              {/* <!-- End Timeline --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End::row-2 --> */}

      {/* <!-- Start::row-3 --> */}
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 xl:col-span-6">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Timeline with Time</h5>
            </div>
            <div className="box-body">
              {/* <!-- Timeline --> */}
              <div>
                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Left Content --> */}
                  <div className="w-16 text-end">
                    <span className="text-xs text-gray-500 dark:text-white/70">12:05PM</span>
                  </div>
                  {/* <!-- End Left Content --> */}

                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      <svg className="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
                      Created "Preline in React" task
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                      Find more detailed insctructions here.
                    </p>
                    <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-md border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                      <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/img/users/1.jpg" alt="Image Description" />
                      James Collins
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Left Content --> */}
                  <div className="w-16 text-end">
                    <span className="text-xs text-gray-500 dark:text-white/70">12:05PM</span>
                  </div>
                  {/* <!-- End Left Content --> */}

                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      Release v5.2.0 quick bug fix &#128030;
                    </h3>
                    <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-md border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                      <span className="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                        A
                      </span>
                      Alex Gregarov
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Left Content --> */}
                  <div className="w-16 text-end">
                    <span className="text-xs text-gray-500 dark:text-white/70">12:05PM</span>
                  </div>
                  {/* <!-- End Left Content --> */}

                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      Marked "Install Charts" completed
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                      Finally! You can check it out here.
                    </p>
                    <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-md border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                      <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/img/users/1.jpg" alt="Image Description" />
                      James Collins
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Left Content --> */}
                  <div className="w-16 text-end">
                    <span className="text-xs text-gray-500 dark:text-white/70">12:05PM</span>
                  </div>
                  {/* <!-- End Left Content --> */}

                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg"></div>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      Take a break &#9971;
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                      Just chill for now... &#128521;
                    </p>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}
              </div>
              {/* <!-- End Timeline --> */}
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-6">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Timeline with Time</h5>
            </div>
            <div className="box-body">
              {/* <!-- Timeline --> */}
              <div>
                {/* <!-- Heading --> */}
                <div className="ps-2 my-2 first:mt-0">
                  <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                    1 MAR, 2024
                  </h3>
                </div>
                {/* <!-- End Heading --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <img className="flex-shrink-0 size-7 rounded-full" src="../../assets/img/users/1.jpg" alt="Image Description" />
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      <svg className="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
                      Created "Preline in React" task
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                      Find more detailed insctructions here.
                    </p>
                    <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-md border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                      <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/img/users/1.jpg" alt="Image Description" />
                      James Collins
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-7 border border-gray-200 text-sm font-semibold uppercase text-gray-800 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                        A
                      </span>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      Release v5.2.0 quick bug fix &#128030;
                    </h3>
                    <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-md border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                      <span className="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                        A
                      </span>
                      Alex Gregarov
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <img className="flex-shrink-0 size-7 rounded-full" src="../../assets/img/users/1.jpg" alt="Image Description" />
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      Marked "Install Charts" completed
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                      Finally! You can check it out here.
                    </p>
                    <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-md border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                      <img className="flex-shrink-0 size-4 rounded-full" src="../../assets/img/users/1.jpg" alt="Image Description" />
                      James Collins
                    </button>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}

                {/* <!-- Heading --> */}
                <div className="ps-2 my-2 first:mt-0">
                  <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                    29 FEB, 2024
                  </h3>
                </div>
                {/* <!-- End Heading --> */}

                {/* <!-- Item --> */}
                <div className="flex gap-x-3">
                  {/* <!-- Icon --> */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                        <svg className="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5" /><path d="M8 3H3v5" /><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" /><path d="m15 9 6-6" /></svg>
                      </span>
                    </div>
                  </div>
                  {/* <!-- End Icon --> */}

                  {/* <!-- Right Content --> */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                      Take a break &#9971;
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                      Just chill for now... &#128521;
                    </p>
                  </div>
                  {/* <!-- End Right Content --> */}
                </div>
                {/* <!-- End Item --> */}
              </div>
              {/* <!-- End Timeline --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End::row-3 --> */}
    </div>
  );
};

export default Timeline;
