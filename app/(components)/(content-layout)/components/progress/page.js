"use client"
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React from "react";

const Progress = () => {
    return (
        <div>
            <Seo title={"Progress"} />
            <PageHeader currentpage="Progress" activepage="Components" mainpage="Progress" />

            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Basic Progress</h5>
                        </div>
                        <div className="box-body space-y-4">
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-primary" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-primary" role="progressbar" style={{ width: "10%" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-primary" role="progressbar" style={{ width: "15%" }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-primary" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-primary" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-primary" role="progressbar" style={{ width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-primary" role="progressbar" style={{ width: "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Different Colored Progress</h5>
                        </div>
                        <div className="box-body space-y-4">
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-primary" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-secondary" role="progressbar" style={{ width: "10%" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-warning" role="progressbar" style={{ width: "15%" }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-info" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-danger" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-success" role="progressbar" style={{ width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-primary" role="progressbar" style={{ width: "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Progress With Label</h5>
                        </div>
                        <div className="box-body space-y-4">
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>0</div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-secondary text-xs text-white text-center" role="progressbar" style={{ width: "10%" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>10%</div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-warning text-xs text-white text-center" role="progressbar" style={{ width: "15%" }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}>15%</div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-info text-xs text-white text-center" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-danger text-xs text-white text-center" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-success text-xs text-white text-center" role="progressbar" style={{ width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>100%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Progress Bar Sizes</h5>
                        </div>
                        <div className="box-body space-y-4">
                            <div className="ti-main-progress  h-1 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-secondary text-xs text-white text-center" role="progressbar" style={{ width: "10%" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress  h-2 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-warning text-xs text-white text-center" role="progressbar" style={{ width: "15%" }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}>sm</div>
                            </div>
                            <div className="ti-main-progress  h-3 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-info text-xs text-white text-center" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>md</div>
                            </div>
                            <div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-danger text-xs text-white text-center" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>lg</div>
                            </div>
                            <div className="ti-main-progress  h-6 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-success text-xs text-white text-center" role="progressbar" style={{ width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>xl</div>
                            </div>
                            <div className="ti-main-progress  h-8 bg-gray-200 dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>xxl</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Multiple bars Progress</h5>
                        </div>
                        <div className="box-body space-y-4">
                            <div className="ti-main-progress h-1 bg-gray-200 rounded-full overflow-hidden dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-primary" role="progressbar" style={{ width: "5%" }} aria-valuenow={5} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="ti-main-progress-bar bg-secondary" role="progressbar" style={{ width: "10%" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="ti-main-progress-bar bg-warning" role="progressbar" style={{ width: "15%" }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-info" role="progressbar" style={{ width: "10%" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="ti-main-progress-bar bg-danger" role="progressbar" style={{ width: "15%" }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="ti-main-progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-secondary" role="progressbar" style={{ width: "15%" }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="ti-main-progress-bar bg-info" role="progressbar" style={{ width: "20%" }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="ti-main-progress-bar bg-pink-500" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-green-500" role="progressbar" style={{ width: "15%" }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="ti-main-progress-bar bg-red-500" role="progressbar" style={{ width: "20%" }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="ti-main-progress-bar bg-amber-500" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress h-6 bg-gray-200 rounded-full overflow-hidden dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-yellow-500" role="progressbar" style={{ width: "20%" }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="ti-main-progress-bar bg-lime-500" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="ti-main-progress-bar bg-orange-500" role="progressbar" style={{ width: "30%" }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <div className="ti-main-progress h-8 bg-gray-200 rounded-full overflow-hidden dark:bg-black/20">
                                <div className="ti-main-progress-bar bg-sky-500" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="ti-main-progress-bar bg-fuchsia-500" role="progressbar" style={{ width: "30%" }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>
                                <div className="ti-main-progress-bar bg-rose-500" role="progressbar" style={{ width: "40%" }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Vertical Progress</h5>
                        </div>
                        <div className="box-body">
                            <div className="flex space-x-8 rtl:space-x-reverse">
                                <div className="ti-main-progress flex-col flex-nowrap justify-end w-2 h-40 bg-gray-200 dark:bg-black/20">
                                    <div className="bg-primary ti-main-progress-bar" role="progressbar" style={{ height: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="ti-main-progress flex-col flex-nowrap justify-end w-3 h-40 bg-gray-200 dark:bg-black/20">
                                    <div className="bg-secondary ti-main-progress-bar" role="progressbar" style={{ height: "40%" }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="ti-main-progress flex-col flex-nowrap justify-end w-4 h-40 bg-gray-200 dark:bg-black/20">
                                    <div className="bg-warning ti-main-progress-bar" role="progressbar" style={{ height: "60%" }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="ti-main-progress flex-col flex-nowrap justify-end w-5 h-40 bg-gray-200 dark:bg-black/20">
                                    <div className="bg-info ti-main-progress-bar" role="progressbar" style={{ height: "80%" }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="ti-main-progress flex-col flex-nowrap justify-end w-6 h-40 bg-gray-200 dark:bg-black/20">
                                    <div className="bg-danger ti-main-progress-bar" role="progressbar" style={{ height: "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Labels at The end</h5>
                        </div>
                        <div className="box-body space-y-4">
                            {/* <!-- Progress --> */}
                            <div className="flex items-center gap-x-3 whitespace-nowrap w-full">
                                <div className="ti-main-progress w-full h-4 bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" style={{ width: "25%" }} role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="w-10 text-end">
                                    <span className="text-sm text-gray-800 dark:text-white">25%</span>
                                </div>
                            </div>
                            {/* <!-- End Progress --> */}
                            {/* <!-- Progress --> */}
                            <div className="flex items-center gap-x-3 whitespace-nowrap w-full">
                                <div className="ti-main-progress w-full h-4 bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="w-10 text-end">
                                    <span className="text-sm text-gray-800 dark:text-white">50%</span>
                                </div>
                            </div>
                            {/* <!-- End Progress --> */}
                            {/* <!-- Progress --> */}
                            <div className="flex items-center gap-x-3 whitespace-nowrap w-full">
                                <div className="ti-main-progress w-full h-4 bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="w-10 text-end">
                                    <span className="text-sm text-gray-800 dark:text-white">75%</span>
                                </div>
                            </div>
                            {/* <!-- End Progress --> */}
                            {/* <!-- Progress --> */}
                            <div className="flex items-center gap-x-3 whitespace-nowrap w-full">
                                <div className="ti-main-progress w-full h-4 bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="w-10 text-end">
                                    <span className="text-sm text-gray-800 dark:text-white">100%</span>
                                </div>
                            </div>
                            {/* <!-- End Progress --> */}
                            {/* <!-- Progress --> */}
                            <div className="flex items-center gap-x-3 whitespace-nowrap w-full">
                                <div className="ti-main-progress w-full h-4 bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-danger text-xs text-white text-center" role="progressbar" style={{ width: "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="w-10 text-end">
                                    <span className="flex-shrink-0 ms-auto size-4 flex justify-center items-center rounded-full bg-red-500 text-white">
                                        <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            {/* <!-- End Progress --> */}
                            {/* <!-- Progress --> */}
                            <div className="flex items-center gap-x-3 whitespace-nowrap w-full">
                                <div className="ti-main-progress w-full h-4 bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-success text-xs text-white text-center" role="progressbar" style={{ width: "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="w-10 text-end">
                                    <span className="flex-shrink-0 ms-auto size-4 flex justify-center items-center rounded-full bg-success text-white">
                                        <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            {/* <!-- End Progress --> */}
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Progress With Title Label</h5>
                        </div>
                        <div className="box-body space-y-4">
                            {/* <!-- Progress --> */}
                            <div className="">
                                <div className="mb-2 flex justify-between items-center">
                                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Progress title</h3>
                                    <span className="text-sm text-gray-800 dark:text-white">25%</span>
                                </div>
                                <div className="ti-main-progress w-full h-2 bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            {/* <!-- End Progress --> */}
                            {/* <!-- Progress --> */}
                            <div className="">
                                <div className="mb-2 flex justify-between items-center">
                                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Progress title</h3>
                                    <span className="text-sm text-gray-800 dark:text-white">50%</span>
                                </div>
                                <div className="ti-main-progress w-full h-2 bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            {/* <!-- End Progress --> */}
                            {/* <!-- Progress --> */}
                            <div className="">
                                <div className="mb-2 flex justify-between items-center">
                                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Progress title</h3>
                                    <span className="text-sm text-gray-800 dark:text-white">75%</span>
                                </div>
                                <div className="ti-main-progress w-full h-2 bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            {/* <!-- End Progress --> */}
                            {/* <!-- Progress --> */}
                            <div className="">
                                <div className="mb-2 flex justify-between items-center">
                                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Progress title</h3>
                                    <span className="text-sm text-gray-800 dark:text-white">100%</span>
                                </div>
                                <div className="ti-main-progress w-full h-2 bg-gray-200 dark:bg-bodybg">
                                    <div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{ width: "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            {/* <!-- End Progress --> */}
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Progress With Steps</h5>
                        </div>
                        <div className="box-body space-y-4">
                            <div>
                                {/* <!-- Step Progress --> */}
                                <div className="max-w-40 ti-main-progress h-full items-center gap-x-1">
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-primary text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-primary text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-gray-200 dark:bg-bodybg text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-gray-200 dark:bg-bodybg text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div>
                                        <div className="w-10 text-end">
                                            <span className="text-sm text-gray-800 dark:text-white">50%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Step Progress --> */}
                                {/* <!-- Step Progress --> */}
                                <div className="ti-main-progress h-full items-center gap-x-1">
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-primary text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-primary text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-gray-200 dark:bg-bodybg text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-gray-200 dark:bg-bodybg text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div>
                                        <div className="w-10 text-end">
                                            <span className="text-sm text-gray-800 dark:text-white">50%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Step Progress --> */}

                            </div>
                            <div>
                                {/* <!-- Step Progress --> */}
                                <div className="max-w-40 ti-main-progress h-full items-center gap-x-1">
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-danger text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-danger/10 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-danger/10 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-danger/10 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div>
                                        <div className="w-10 text-end">
                                            <span className="text-sm text-danger">25%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Step Progress --> */}
                                {/* <!-- Step Progress --> */}
                                <div className="w-full ti-main-progress h-full items-center gap-x-1">
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-danger text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-danger/10 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-danger/10 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-danger/10 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div>
                                        <div className="w-10 text-end">
                                            <span className="text-sm text-danger">25%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Step Progress --> */}
                            </div>
                            <div>
                                {/* <!-- Step Progress --> */}
                                <div className="max-w-40 ti-main-progress h-full items-center gap-x-1">
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div>
                                        <div className="w-10 text-end">
                                            <span className="text-sm text-gray-800 dark:text-white">100%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Step Progress --> */}
                                {/* <!-- Step Progress --> */}
                                <div className="ti-main-progress h-full items-center gap-x-1">
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div>
                                        <div className="w-10 text-end">
                                            <span className="text-sm text-gray-800 dark:text-white">100%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Step Progress --> */}
                            </div>
                            <div>
                                {/* <!-- Step Progress --> */}
                                <div className="max-w-[8.5rem] ti-main-progress h-full items-center gap-x-1">
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="ms-1">
                                        <span className="flex-shrink-0 ms-auto size-4 flex justify-center items-center rounded-full bg-success text-white">
                                            <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        </span>
                                    </div>
                                </div>
                                {/* <!-- End Step Progress --> */}

                                {/* <!-- Step Progress --> */}
                                <div className="ti-main-progress h-full items-center gap-x-1">
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="w-full h-2.5 ti-main-progress-bar bg-success text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                    <div className="ms-1">
                                        <span className="flex-shrink-0 ms-auto size-4 flex justify-center items-center rounded-full bg-success text-white">
                                            <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        </span>
                                    </div>
                                </div>
                                {/* <!-- End Step Progress --> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Circular progress</h5>
                        </div>
                        <div className="box-body">
                            <div className="flex gap-x-5">
                                {/* <!-- Circular Progress --> */}
                                <div className="relative size-40">
                                    <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                        {/* <!-- Background Circle --> */}
                                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-white/10" strokeWidth="2"></circle>
                                        {/* <!-- Progress Circle inside a group with rotation --> */}
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-primary" strokeWidth="2" strokeDasharray="100" strokeDashoffset="75"></circle>
                                        </g>
                                    </svg>
                                </div>
                                {/* <!-- End Circular Progress --> */}

                                {/* <!-- Circular Progress --> */}
                                <div className="relative size-40">
                                    <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                        {/* <!-- Background Circle --> */}
                                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-white/10" strokeWidth="2"></circle>
                                        {/* <!-- Progress Circle inside a group with rotation --> */}
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-primary" strokeWidth="2" strokeDasharray="100" strokeDashoffset="75"></circle>
                                        </g>
                                    </svg>
                                    {/* <!-- Percentage Text --> */}
                                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2">
                                        <span className="text-center text-2xl font-bold text-gray-800 dark:text-white">72%</span>
                                    </div>
                                </div>
                                {/* <!-- End Circular Progress --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;
