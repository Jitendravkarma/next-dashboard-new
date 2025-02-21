"use client"
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React from "react";

const FormInput = () => {
    return (
        <div>
            <Seo title={"Form Inputs"} />
            <PageHeader currentpage="Form Inputs" activepage="Forms" mainpage="Form Inputs" />
            {/* <!-- Start::row-1 --> */}
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Basic Inputs</h5>
                        </div>
                        <div className="box-body">
                            <div className="max-w-sm space-y-3">
                                <input type="text" className="ti-form-input" />
                                <textarea className="ti-form-input" rows={3}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Inputs With Placeholder</h5>
                        </div>
                        <div className="box-body">
                            <div className="max-w-sm space-y-3">
                                <input type="text" className="ti-form-input" placeholder="This is placeholder" />
                                <textarea className="ti-form-input" rows={2} placeholder="This is a textarea placeholder"></textarea>
                                <input type="text" className="ti-form-input" placeholder="Readonly input" readOnly />
                                <textarea className="py-3 px-4 ti-form-input" rows={2} placeholder="Readonly" readOnly></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Disabled Inputs</h5>
                        </div>
                        <div className="box-body">
                            <div className="max-w-sm space-y-3">
                                <input type="text" className="opacity-70 pointer-events-none ti-form-input" placeholder="Disabled input" disabled />
                                <input type="text" className="opacity-70 pointer-events-none ti-form-input" placeholder="Disabled readonly input" disabled readOnly />
                                <textarea className="py-3 px-4 ti-form-input disabled:opacity-50 disabled:pointer-events-none" rows={2} placeholder="Disabled textarea" disabled></textarea>
                                <textarea className="py-3 px-4 ti-form-input disabled:opacity-50 disabled:pointer-events-none" rows={2} placeholder="Disabled readonly textarea" disabled readOnly></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Gray Inputs</h5>
                        </div>
                        <div className="box-body space-y-3">
                            <div className="relative">
                                <input type="email" className="peer py-3 px-4 ps-11 ti-form-input bg-gray-100 border-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-transparent" placeholder="Enter name" />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                    <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-white/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                            </div>

                            <div className="relative">
                                <input type="password" className="peer py-3 px-4 ps-11 ti-form-input bg-gray-100 border-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-transparent" placeholder="Enter password" />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                    <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-white/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" /><circle cx="16.5" cy="7.5" r=".5" /></svg>
                                </div>
                            </div>
                            <textarea className="py-3 px-4 ti-form-input bg-gray-100 border-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-transparent" rows={3} placeholder="This is a textarea placeholder"></textarea>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Underline Inputs</h5>
                        </div>
                        <div className="box-body space-y-3">
                            <div className="relative">
                                <input type="email" className="peer py-3 pe-0 ps-8 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10" placeholder="Enter name" />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                    <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-white/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                            </div>

                            <div className="relative">
                                <input type="password" className="peer py-3 pe-0 ps-8 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10" placeholder="Enter password" />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                    <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-white/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" /><circle cx="16.5" cy="7.5" r=".5" /></svg>
                                </div>
                            </div>
                            <textarea className="py-3 px-0 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 text-sm focus:!border-t-transparent focus:!border-x-transparent  focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10" rows={3} placeholder="This is a textarea placeholder"></textarea>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Floating label</h5>
                        </div>
                        <div className="box-body space-y-3">
                            {/* <!-- Floating Input --> */}
                            <div className="relative">
                                <input type="email" id="hs-floating-input-email" className="peer p-4 ti-form-input placeholder:!text-transparent focus:!border-primary focus:!ring-primary disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2" placeholder="you@email.com" />
                                <label htmlFor="hs-floating-input-email" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:text-xs
                                    peer-focus:-translate-y-1.5
                                    peer-focus:text-gray-500 dark:peer-focus:text-white/70
                                    peer-[:not(:placeholder-shown)]:text-xs
                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                    peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Email</label>
                            </div>
                            {/* <!-- End Floating Input --> */}

                            {/* <!-- Floating Input --> */}
                            <div className="relative">
                                <input type="password" id="hs-floating-input-passowrd" className="peer p-4 ti-form-input placeholder:!text-transparent focus:!border-primary focus:!ring-primary disabled:opacity-50 disabled:pointer-events-none
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="********" />
                                <label htmlFor="hs-floating-input-passowrd" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                        peer-focus:text-xs
                                        peer-focus:-translate-y-1.5
                                        peer-focus:text-gray-500 dark:peer-focus:text-white/70
                                        peer-[:not(:placeholder-shown)]:text-xs
                                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                        peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Password</label>
                            </div>
                            {/* <!-- End Floating Input --> */}

                            {/* <!-- Floating Textarea --> */}
                            <div className="relative">
                                <textarea id="hs-floating-textarea" className="peer p-4 ti-form-input placeholder:!text-transparent focus:!border-primary focus:!ring-primary disabled:opacity-50 disabled:pointer-events-non
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
                                <label htmlFor="hs-floating-textarea" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:text-xs
                                    peer-focus:-translate-y-1.5
                                    peer-focus:text-gray-500 dark:peer-focus:text-white/70
                                    peer-[:not(:placeholder-shown)]:text-xs
                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                    peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Comment</label>
                            </div>
                            {/* <!-- End Floating Textarea --> */}
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Gray Floating label</h5>
                        </div>
                        <div className="box-body space-y-3">
                            {/* <!-- Floating Input --> */}
                            <div className="relative">
                                <input type="email" id="hs-floating-gray-input-email" className="peer p-4 ti-form-input bg-gray-100 border-transparent placeholder:!text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-transparent
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="you@email.com" />
                                <label htmlFor="hs-floating-gray-input-email" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:text-xs
                                    peer-focus:-translate-y-1.5
                                    peer-focus:text-gray-500 dark:peer-focus:text-white/70
                                    peer-[:not(:placeholder-shown)]:text-xs
                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                    peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Email</label>
                            </div>
                            {/* <!-- End Floating Input --> */}

                            {/* <!-- Floating Input --> */}
                            <div className="relative">
                                <input type="password" id="hs-floating-gray-input-passowrd" className="peer p-4 ti-form-input bg-gray-100 border-transparent placeholder:!text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-transparent
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="********" />
                                <label htmlFor="hs-floating-gray-input-passowrd" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                        peer-focus:text-xs
                                        peer-focus:-translate-y-1.5
                                        peer-focus:text-gray-500  dark:peer-focus:text-white/70
                                        peer-[:not(:placeholder-shown)]:text-xs
                                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                        peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Password</label>
                            </div>
                            {/* <!-- End Floating Input --> */}

                            {/* <!-- Gray Floating Textarea --> */}
                            <div className="relative">
                                <textarea id="hs-floating-textarea-gray" className="peer p-4 ti-form-input bg-gray-100 border-transparent placeholder:!text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-transparent
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
                                <label htmlFor="hs-floating-textarea-gray" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:text-xs
                                    peer-focus:-translate-y-1.5
                                    peer-focus:text-gray-500  dark:peer-focus:text-white/70
                                    peer-[:not(:placeholder-shown)]:text-xs
                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                    peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Comment</label>
                            </div>
                            {/* <!-- End Gray Floating Textarea --> */}
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Underline Floating label</h5>
                        </div>
                        <div className="box-body space-y-3">
                            {/* <!-- Floating Input --> */}
                            <div className="relative">
                                <input type="email" id="hs-floating-underline-input-email" className="peer py-4 px-0 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 placeholder:!text-transparent focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="you@email.com" />
                                <label htmlFor="hs-floating-underline-input-email" className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:text-xs
                                    peer-focus:-translate-y-1.5
                                    peer-focus:text-gray-500  dark:peer-focus:text-white/70
                                    peer-[:not(:placeholder-shown)]:text-xs
                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                    peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Email</label>
                            </div>
                            {/* <!-- End Floating Input --> */}

                            {/* <!-- Floating Input --> */}
                            <div className="relative">
                                <input type="password" id="hs-floating-underline-input-passowrd" className="peer py-4 px-0 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 placeholder:!text-transparent focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="********" />
                                <label htmlFor="hs-floating-underline-input-passowrd" className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:text-xs
                                    peer-focus:-translate-y-1.5
                                    peer-focus:text-gray-500  dark:peer-focus:text-white/70
                                    peer-[:not(:placeholder-shown)]:text-xs
                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                    peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Password</label>
                            </div>
                            {/* <!-- End Floating Input --> */}
                            {/* <!-- Underline Floating Textarea --> */}
                            <div className="relative">
                                <textarea id="hs-floating-textarea-underline" className="peer py-4 px-0 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 placeholder:!text-transparent focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10
                                    focus:pt-6
                                    focus:pb-2
                                    [&:not(:placeholder-shown)]:pt-6
                                    [&:not(:placeholder-shown)]:pb-2
                                    autofill:pt-6
                                    autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
                                <label htmlFor="hs-floating-textarea-underline" className="absolute top-0 start-0 py-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                    peer-focus:text-xs
                                    peer-focus:-translate-y-1.5
                                    peer-focus:text-gray-500  dark:peer-focus:text-white/70
                                    peer-[:not(:placeholder-shown)]:text-xs
                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                    peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Comment</label>
                            </div>
                            {/* <!-- End Underline Floating Textarea --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Pilled Inputs</h5>
                        </div>
                        <div className="box-body space-y-3">
                            <input type="text" className="ti-form-input px-5 rounded-full" placeholder="Input text" />
                            <textarea className="ti-form-input px-5 rounded-md" rows={3} placeholder="This is a textarea placeholder"></textarea>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Input With Hidden Label</h5>
                        </div>
                        <div className="box-body space-y-3">
                            <div className="">
                                <label htmlFor="input-email-label" className="sr-only">Email</label>
                                <input type="email" id="input-email-label" className="ti-form-input" placeholder="you@site.com" />
                            </div>
                            <div className="">
                                <label htmlFor="textarea-email-label" className="sr-only">Comment</label>
                                <textarea id="textarea-email-label" className="ti-form-input" rows={3} placeholder="Say hi..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Inputs With Label</h5>
                        </div>
                        <div className="box-body space-y-3">
                            <div className="">
                                <label htmlFor="input-label" className="ti-form-label">Email</label>
                                <input type="email" id="input-label" className="ti-form-input" placeholder="you@site.com" />
                            </div>
                            <div>
                                <label htmlFor="textarea-label" className="ti-form-label">Comment</label>
                                <textarea id="textarea-label" className="ti-form-input" rows={3} placeholder="Say hi..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Input With Helper text</h5>
                        </div>
                        <div className="box-body space-y-3">
                            <div>
                                <label htmlFor="input-label-with-helper-text" className="ti-form-label">Email</label>
                                <input type="email" id="input-label-with-helper-text" className="ti-form-input" placeholder="you@site.com" aria-describedby="hs-input-helper-text" />
                                <p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-input-helper-text">We'll never share your details.</p>
                            </div>
                            <div>
                                <label htmlFor="textarea-label-with-helper-text" className="ti-form-label">Leave your question</label>
                                <textarea id="textarea-label-with-helper-text" className="ti-form-input" rows={2} placeholder="Say hi, we'll be happy to chat with you." aria-describedby="hs-textarea-helper-text"></textarea>
                                <p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-textarea-helper-text">We'll get back to you soon.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Input With Inline helper text</h5>
                        </div>
                        <div className="box-body space-y-3">
                            <div className="sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full rtl:space-x-reverse">
                                <label htmlFor="inline-input-label-with-helper-text" className="ti-form-label">Email</label>
                                <input type="email" id="inline-input-label-with-helper-text" className="ti-form-input" placeholder="you@site.com" aria-describedby="hs-inline-input-helper-text" />
                                <p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-inline-input-helper-text">We'll never share your details.</p>
                            </div>
                            <div className="sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full rtl:space-x-reverse">
                                <label htmlFor="inline-textarea-label-with-helper-text" className="ti-form-label">Leave your question</label>
                                <textarea id="inline-textarea-label-with-helper-text" className="ti-form-input" rows={3} placeholder="Say hi, we'll be happy to chat with you." aria-describedby="hs-textarea-helper-text"></textarea>
                                <p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-inline-textarea-helper-text">We'll get back to you soon.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Input With Corner Hint</h5>
                        </div>
                        <div className="box-body space-y-4">
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="with-corner-hint" className="ti-form-label">Email</label>
                                    <span className="block text-xs text-gray-500 mb-2 dark:text-white/70">Optional</span>
                                </div>
                                <input type="email" id="with-corner-hint" className="ti-form-input" placeholder="you@site.com" />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="hs-textarea-with-corner-hint" className="ti-form-label">Contact us</label>
                                    <span className="block text-xs text-gray-500 mb-2 dark:text-white/70">100 characters</span>
                                </div>
                                <textarea id="hs-textarea-with-corner-hint" className="ti-form-input" rows={3} placeholder="Say hi..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Input Validation states</h5>
                        </div>
                        <div className="box-body">
                            <div className="space-y-3">
                                <div>
                                    <label htmlFor="hs-validation-name-error" className="ti-form-label">Email</label>
                                    <div className="relative">
                                        <input type="text" id="hs-validation-name-error" name="hs-validation-name-error" className="ti-form-input !border-danger focus:border-danger focus:ring-danger" required aria-describedby="hs-validation-name-error-helper" />
                                        <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                            <svg className="h-5 w-5 text-danger" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">Please enter a valid email address.</p>
                                </div>

                                <div>
                                    <label htmlFor="hs-validation-name-success" className="ti-form-label">Email</label>
                                    <div className="relative">
                                        <input type="text" id="hs-validation-name-success" name="hs-validation-name-success" className="ti-form-input !border-success focus:border-success focus:ring-success" required aria-describedby="hs-validation-name-success-helper" />
                                        <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                            <svg className="h-5 w-5 text-success" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-sm text-green-600 mt-2" id="hs-validation-name-success-helper">Looks good!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Input Sizes</h5>
                        </div>
                        <div className="box-body">
                            <div className="space-y-3">
                                <input type="text" className="py-2 px-3 ti-form-input" placeholder="Small size" />
                                <input type="text" className="ti-form-input" placeholder="Default size" />
                                <input type="text" className="ti-form-input sm:p-5" placeholder="Large size" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Textarea Sizes</h5>
                        </div>
                        <div className="box-body">
                            <div className="space-y-3">
                                <textarea className="py-2 px-3 ti-form-input" rows={2} placeholder="Small size"></textarea>
                                <textarea className="py-3 px-4 ti-form-input" rows={2} placeholder="Default size"></textarea>
                                <textarea className="sm:p-5 py-3 px-4 ti-form-input" rows={2} placeholder="Large size"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Textarea examples</h5>
                        </div>
                        <div className="box-body space-y-3">
                            {/* <!-- Textarea --> */}
                            <div className="relative">
                                <textarea id="hs-textarea-ex-1" className="p-4 pb-12 ti-form-input focus:!ring-primary" placeholder="Ask me anything..."></textarea>
                                {/* <!-- Toolbar --> */}
                                <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white dark:bg-bgdark">
                                    <div className="flex justify-between items-center">
                                        {/* <!-- Button Group --> */}
                                        <div className="flex items-center">
                                            {/* <!-- Mic Button --> */}
                                            <button aria-label="button" type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-md text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><line x1="9" x2="15" y1="15" y2="9"></line></svg>
                                            </button>
                                            {/* <!-- End Mic Button --> */}

                                            {/* <!-- Attach Button --> */}
                                            <button aria-label="button" type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-md text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                                            </button>
                                            {/* <!-- End Attach Button --> */}
                                        </div>
                                        {/* <!-- End Button Group --> */}

                                        {/* <!-- Button Group --> */}
                                        <div className="flex items-center gap-x-1">
                                            {/* <!-- Mic Button --> */}
                                            <button aria-label="button" type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-md text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
                                            </button>
                                            {/* <!-- End Mic Button --> */}

                                            {/* <!-- Send Button --> */}
                                            <button aria-label="button" type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-sm text-white bg-primary hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                                                </svg>
                                            </button>
                                            {/* <!-- End Send Button --> */}
                                        </div>
                                        {/* <!-- End Button Group --> */}
                                    </div>
                                </div>
                                {/* <!-- End Toolbar --> */}
                            </div>
                            {/* <!-- End Textarea --> */}
                            {/* <!-- Textarea --> */}
                            <div className="relative">
                                <textarea id="hs-textarea-ex-2" className="p-4 pb-12 ti-form-input focus:!ring-primary bg-gray-100 dark:bg-bodybg" placeholder="Ask me anything..."></textarea>

                                {/* <!-- Toolbar --> */}
                                <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-gray-100 dark:bg-bodybg">
                                    <div className="flex justify-between items-center">
                                        {/* <!-- Button Group --> */}
                                        <div className="flex items-center">
                                            {/* <!-- Mic Button --> */}
                                            <button aria-label="button" type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-md text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><line x1="9" x2="15" y1="15" y2="9"></line></svg>
                                            </button>
                                            {/* <!-- End Mic Button --> */}

                                            {/* <!-- Attach Button --> */}
                                            <button aria-label="button" type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-md text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                                            </button>
                                            {/* <!-- End Attach Button --> */}
                                        </div>
                                        {/* <!-- End Button Group --> */}

                                        {/* <!-- Button Group --> */}
                                        <div className="flex items-center gap-x-1">
                                            {/* <!-- Mic Button --> */}
                                            <button aria-label="button" type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-md text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
                                            </button>
                                            {/* <!-- End Mic Button --> */}

                                            {/* <!-- Send Button --> */}
                                            <button aria-label="button" type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-sm text-white bg-primary hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                                                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                                                </svg>
                                            </button>
                                            {/* <!-- End Send Button --> */}
                                        </div>
                                        {/* <!-- End Button Group --> */}
                                    </div>
                                </div>
                                {/* <!-- End Toolbar --> */}
                            </div>
                            {/* <!-- End Textarea --> */}
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xxl:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Autoheight</h5>
                        </div>
                        <div className="box-body">
                            <label htmlFor="hs-autoheight-textarea" className="ti-form-label">Contact us</label>
                            <textarea id="hs-autoheight-textarea" className="ti-form-input" rows={3} placeholder="Say hi..."></textarea>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start::row-3 --> */}
            <div className="grid grid-cols-12 gap-6">
            </div>
            {/* <!-- End::row-3 --> */}

        </div>
    );
};

export default FormInput;
