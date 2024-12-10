
"use client"
import { LightboxGallery, SpacebetweenSwiper } from "@/shared/data/advance-ui/file-manager/filedetailsdata";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";

const Filedetails = () => {
    return (
        <Fragment>
            <Seo title={"File Details"} />
            <PageHeader currentpage="File Details" activepage="Advanced UI" mainpage="File Details" />
            <div className="grid grid-cols-12 xl:gap-6">
                <div className="col-span-12 xl:col-span-8">
                    <div className="box">
                        <div className="box-body space-y-4">
                            <img className="rounded-md" src={"../../../assets/img/gallery/8.jpg"} alt="Image Description" />
                            <div className="sm:flex justify-between space-y-2 sm:space-y-0">
                                <div className="flex space-x-2 rtl:space-x-reverse"><i className="ri ri-image-line text-primary p-2 leading-none bg-primary/20 rounded-md"></i><h3 className="my-auto font-bold">Nature.jpg</h3></div>
                                <div className="flex space-x-3 rtl:space-x-reverse">
                                    <i className="ri ri-edit-2-line p-2 leading-none bg-gray-200 text-gray-500 dark:text-white/70 dark:bg-black/20 rounded-md"></i>
                                    <i className="ri ri-star-line p-2 leading-none bg-gray-200 text-gray-500 dark:text-white/70 dark:bg-black/20 rounded-md"></i>
                                    <i className="ri ri-share-line p-2 leading-none bg-gray-200 text-gray-500 dark:text-white/70 dark:bg-black/20 rounded-md"></i>
                                    <i className="ri ri-download-2-line p-2 leading-none bg-gray-200 text-gray-500 dark:text-white/70 dark:bg-black/20 rounded-md"></i>
                                    <i className="ri ri-delete-bin-6-line p-2 leading-none bg-gray-200 text-gray-500 dark:text-white/70 dark:bg-black/20 rounded-md"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Related Files</h5>
                        </div>
                        <div className="box-body">
                            <SpacebetweenSwiper />
                        </div>
                    </div>
                </div>
                <div className="col-span-12 xl:col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">File Details</h5>
                        </div>
                        <div className="box-body p-0">
                            <div className="rounded-lg overflow-auto">
                                <table className="ti-custom-table ti-custom-table-head">
                                    <tbody>
                                        <tr className="divide-x divide-gray-200 dark:divide-white/10">
                                            <td className="font-medium">Type</td>
                                            <td>Jpg File(.jpg)</td>
                                        </tr>

                                        <tr className="divide-x divide-gray-200 dark:divide-white/10">
                                            <td className="font-medium">Location</td>
                                            <td>file/gallery</td>
                                        </tr>

                                        <tr className="divide-x divide-gray-200 dark:divide-white/10">
                                            <td className="font-medium">Size</td>
                                            <td>909KB</td>
                                        </tr>

                                        <tr className="divide-x divide-gray-200 dark:divide-white/10">
                                            <td className="font-medium">Created Date</td>
                                            <td>1-10-2022</td>
                                        </tr>

                                        <tr className="divide-x divide-gray-200 dark:divide-white/10">
                                            <td className="font-medium">Modified Date</td>
                                            <td>12-10-2022</td>
                                        </tr>

                                        <tr className="divide-x divide-gray-200 dark:divide-white/10">
                                            <td className="font-medium">Dimensions</td>
                                            <td>7360 * 4912</td>
                                        </tr>

                                        <tr className="divide-x divide-gray-200 dark:divide-white/10">
                                            <td className="font-medium">File Location</td>
                                            <td>Device/Storage/Archives/AMB-2012.zip</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">File Description</h5>
                        </div>
                        <div className="box-body">
                            <p className="mb-3">
                                This file contains 3 folder Synto.main &amp; Synto.premium &amp; Synto.featured and 42 images and layout styles are added in this update.
                            </p>
                            <h5 className="font-semibold text-slate-700 dark:text-white text-sm">Shared With :-</h5>
                            <div className="flex -space-x-2 rtl:space-x-reverse mt-2">
                                <img className="avatar avatar-sm rounded-full" src={"../../../assets/img/users/1.jpg"} alt="Image Description" />
                                <img className="avatar avatar-sm rounded-full" src={"../../../assets/img/users/4.jpg"} alt="Image Description" />
                                <img className="avatar avatar-sm rounded-full" src={"../../../assets/img/users/6.jpg"} alt="Image Description" />
                                <img className="avatar avatar-sm rounded-full hidden sm:block" src={"../../../assets/img/users/5.jpg"} alt="Image Description" />
                                <img className="avatar avatar-sm rounded-full" src={"../../../assets/img/users/7.jpg"} alt="Image Description" />
                                <img className="avatar avatar-sm rounded-full" src={"../../../assets/img/users/2.jpg"} alt="Image Description" />
                                <img className="avatar avatar-sm rounded-full" src={"../../../assets/img/users/9.jpg"} alt="Image Description" />
                                <span className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
                                    <span className="font-medium text-gray-500 leading-none dark:text-white/70">9+</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Recent Files</h5>
                        </div>
                        <div className="box-body">
                            <div className="relative">
                                <div className="sm:grid grid-cols-12 gap-5 sm:space-y-0 space-y-6">
                                    <LightboxGallery />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default Filedetails;
