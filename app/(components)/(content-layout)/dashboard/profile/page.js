"use client"
import { activateAccount } from "@/shared/apis/api";
import { ProfileService, ProfileService1 } from "@/shared/data/pages/contactdata";
import { LanguageData, TimeZoneData } from "@/shared/data/pages/profile/profilesettingdata";
import Snackbar from "@/shared/layout-components/dashboard/SnackBar";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { useUserContext } from "@/shared/userContext/userContext";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Select = dynamic(() => import("react-select"), { ssr: false });
import { TagsInput } from "react-tag-input-component";
import Cookies from 'js-cookie';

const Profile = () => {
  const { user, setActivated, isActivated, openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
  const [startDate, setStartDate] = useState(new Date());
  const [purchaseCode, setPurchaseCode] = useState("")

  const handePurchaseChange = (e) => {
    const value = e.target.value;
    setPurchaseCode(value)
  }

  const handlePurchaseBlur = async (e) => {
    const value = e.target.value;
    if (value) {
      try {
        const response = await activateAccount(value);
        if (response) {
          console.log("response", response)
          Cookies.set('purchaseCode', value)
          setActivated()
          setPurchaseCode(value)
        }
      } catch (error) {
        const err = error.response.data.message
        if(err === "Purchase code not verified"){
          openSnackBar();
          handleSnackMessage("Invalid purchase code", "white", "text-danger")
        }
        else if(err === "Purchased code is allready in used."){
          openSnackBar();
          handleSnackMessage("Purchased code is already in used.", "white", "text-danger")
        }
      }
    }
  }

  return (
    <div>
      <Seo title={"Profile Settings"} />
        {
            openSnack &&
            <Snackbar content={snackMessage} isOpen={openSnack}/>
        }
        <PageHeader currentpage="Profile" activepage="Dashboard" img="/assets/img/users/profile.png" mainpage="Profile" />
        <div className="grid grid-cols-12 gap-x-6">
          {/* <div className="col-span-12 xl:col-span-3">
            <div className="box">
              <div className="box-body relative">
                <div className="flex relative before:bg-black/50 before:absolute before:w-full before:h-full before:rounded-sm">
                  <img src={"../../../assets/img/png-images/2.png"} alt="" className="h-[200px] w-full rounded-sm" id="profile-img2" />
                  <button type="button" className="absolute top-5 ltr:right-5 rtl:left-5 flex p-2 rounded-sm ring-1 ring-black/10 text-white bg-black/10 leading-none" data-hs-overlay="#hs-small-modal1"><i className="ri ri-pencil-line"></i></button>

                  <div id="hs-small-modal1" className="hs-overlay hidden ti-modal">
                    <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                      <div className="ti-modal-content">

                        <div className="ti-modal-body">
                          <div onClick={() => { toggleImage1("fileDisabled"); }}>
                            <label htmlFor="file-input" className="sr-only">Choose file</label>
                            <input type="file" id="file-input" disabled={fileDisabled1} onChange={(ele) => ProfileService1.handleChange1(ele)} className=" inset-0 block w-full h-full cursor-pointer border my-2 border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/70  file:border-0 file:bg-gray-100 ltr:file:mr-4 rtl:file:ml-4 file:py-3 file:px-4 dark:file:bg-black/20 dark:file:text-white/70" />
                          </div>
                          <div onClick={() => { toggleImage1("UrlDisabled"); }}>
                            <input type="text" className="my-auto capitalize ti-form-input" name="basic-input" id="basic-input" disabled={UrlDisabled} onChange={(ele) => { setUrlImage1(ele.target.value); }} placeholder="Paste the URL" />
                          </div><br />
                          <button type="button" onClick={() => { putImage1(); }} className="py-1 px-3 ti-btn ti-btn-primary text-sm m-0">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[4.5rem] inset-x-0 text-center space-y-3">
                  <div className="flex justify-center w-full">
                    <div className="relative">
                      <img src={Image} className="w-24 h-24 rounded-full ring-4 ring-white/10 mx-auto" id="profile-img" alt="pofile-img" />

                      <button type="button" className="absolute bottom-0 ltr:right-0 rtl:left-0 block p-1 rounded-full ring-3 ring-white/10 text-white bg-white/10 dark:bg-bgdark leading-none" data-hs-overlay="#hs-small-modal"><i className="ri ri-pencil-line"></i> <span></span></button>

                      <div id="hs-small-modal" className="hs-overlay hidden ti-modal">
                        <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                          <div className="ti-modal-content">
                            <div className="ti-modal-body">
                              <div onClick={() => { toggleImage("fileDisabled"); }}>
                                <label htmlFor="file-input" className="sr-only">Choose file</label>
                                <input type="file" id="file-input" disabled={fileDisabled} onChange={(ele) => ProfileService.handleChange(ele)} className=" inset-0 block w-full h-full cursor-pointer border my-2 border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/70  file:border-0 file:bg-gray-100 ltr:file:mr-4 rtl:file:ml-4 file:py-3 file:px-4 dark:file:bg-black/20 dark:file:text-white/70" />
                              </div>
                              <div onClick={() => { toggleImage("UrlDisabled"); }}>
                                <input type="text" className="my-auto capitalize ti-form-input" name="basic-input" id="basic-input" disabled={UrlDisabled} onChange={(ele) => { setUrlImage(ele.target.value); }} placeholder="Paste the URL" />
                              </div><br />
                              <button type="button" onClick={() => { putImage(); }} className="py-1 px-3 ti-btn ti-btn-primary text-sm m-0">Submit</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-body">
                <nav className="flex flex-col space-y-2" aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">
                  <button type="button" className="hs-tab-active:bg-primary hs-tab-active:border-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mr-px py-3 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 active" id="profile-settings-item-1" data-hs-tab="#profile-settings-1" aria-controls="profile-settings-1" role="tab">
                    <i className="ri ri-shield-user-line"></i> Personal Settings
                  </button>
                  <button type="button" className="hs-tab-active:bg-primary hs-tab-active:border-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mr-px py-3 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300" id="profile-settings-item-2" data-hs-tab="#profile-settings-2" aria-controls="profile-settings-2" role="tab">
                    <i className="ri ri-global-line"></i> General Settings
                  </button>
                  <button type="button" className="hs-tab-active:bg-primary hs-tab-active:border-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mr-px py-3 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300" id="profile-settings-item-3" data-hs-tab="#profile-settings-3" aria-controls="profile-settings-3" role="tab">
                    <i className="ri ri-lock-line"></i> Password Settings
                  </button>
                  <button type="button" className="hs-tab-active:bg-primary hs-tab-active:border-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mr-px py-3 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300" id="profile-settings-item-4" data-hs-tab="#profile-settings-4" aria-controls="profile-settings-4" role="tab">
                    <i className="ri ri-account-circle-line"></i> Account Settings
                  </button>
                  <button type="button" className="hs-tab-active:bg-primary hs-tab-active:border-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mr-px py-3 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300" id="profile-settings-item-5" data-hs-tab="#profile-settings-5" aria-controls="profile-settings-5" role="tab">
                    <i className="ri ri-notification-4-line"></i> Notifications Settings
                  </button>
                </nav>
              </div>
            </div>
          </div> */}
          <div className="col-span-12">
            <div className="box">
              <div className="box-body p-0">
                <div id="profile-settings-1" role="tabpanel" aria-labelledby="profile-settings-item-1">
                  <div className="box border-0 shadow-none mb-0">
                    <div className="box-header">
                      <h5 className="box-title leading-none flex"><i className="ri ri-shield-user-line ltr:mr-2 rtl:ml-2"></i> Personal Settings</h5>
                    </div>
                    <div className="box-body">
                      <div>
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Full Name</label>
                            <input type="text" className="my-auto capitalize ti-form-input bg-gray-100" value={user.name} disabled={user.name} placeholder="Enter full name" />
                          </div>
                          {/* <div className="space-y-2">
                            <label className="ti-form-label mb-0">Last Name</label>
                            <input type="text" className="my-auto capitalize ti-form-input" placeholder="Lastname" />
                          </div> */}
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Email Address</label>
                            <input type="email" className="my-auto capitalize ti-form-input bg-gray-100" value={user.email} disabled={user.email} placeholder="your@site.com" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Phone Number</label>
                            <input type="text" className="my-auto capitalize ti-form-input" placeholder="+91 123-456-789" />
                          </div>
                          <div className="space-y-2 relative">
                            <label className="ti-form-label mb-0">Purchase Code</label>
                            <input type="text" className={`my-auto ti-form-input ${openSnack && "text-danger"} ${isActivated && "text-success bg-gray-100"}`} placeholder="XXXX-XXXX-XXXX-XXXX" value={user.purchase_code ? user.purchase_code : purchaseCode} onChange={handePurchaseChange} onBlur={handlePurchaseBlur} disabled={isActivated || user.purchase_code} />
                            <span className="absolute top-[58%] -translate-y-1/2 right-2">
                              {
                                isActivated ?
                                <i className="ri-checkbox-circle-fill text-lg text-success"></i>
                                :
                                <i className="ri-close-line text-lg text-danger"></i>
                              }
                            </span>
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Date Of Birth</label>
                            <DatePicker className="ti-form-input focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='choose Date' />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Gender</label>
                            <ul className="flex flex-col sm:flex-row">
                              <li className="ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                                <div className="relative flex items-start w-full">
                                  <div className="flex items-center h-5">
                                    <input id="hs-horizontal-list-group-item-radio-1" name="hs-horizontal-list-group-item-radio" type="radio" className="ti-form-radio" defaultChecked />
                                  </div>
                                  <label htmlFor="hs-horizontal-list-group-item-radio-1" className="ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                                    Female
                                  </label>
                                </div>
                              </li>

                              <li className="ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                                <div className="relative flex items-start w-full">
                                  <div className="flex items-center h-5">
                                    <input id="hs-horizontal-list-group-item-radio-2" name="hs-horizontal-list-group-item-radio" type="radio" className="ti-form-radio" />
                                  </div>
                                  <label htmlFor="hs-horizontal-list-group-item-radio-2" className="ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                                    Male
                                  </label>
                                </div>
                              </li>

                              <li className="ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                                <div className="relative flex items-start w-full">
                                  <div className="flex items-center h-5">
                                    <input id="hs-horizontal-list-group-item-radio-3" name="hs-horizontal-list-group-item-radio" type="radio" className="ti-form-radio" />
                                  </div>
                                  <label htmlFor="hs-horizontal-list-group-item-radio-3" className="ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                                    Others
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="my-5">
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Address</label>
                            <input type="text" className="my-auto capitalize ti-form-input" placeholder="Address" />
                          </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">City</label>
                            <input type="text" className="my-auto capitalize ti-form-input" placeholder="city" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Country</label>
                            <input type="text" className="my-auto capitalize ti-form-input" placeholder="country" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">State</label>
                            <input type="text" className="my-auto capitalize ti-form-input" placeholder="state" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Pincode</label>
                            <input type="number" className="my-auto capitalize ti-form-input" placeholder="pincode" />
                          </div>
                        </div>
                        <div className="mt-5">
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Bio</label>
                            <textarea className="ti-form-input capitalize" rows={3} placeholder="Add Your Bio"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-footer text-end space-x-3 rtl:space-x-reverse">
                <Link href="#!" scroll={false} className="ti-btn m-0 ti-btn-soft-primary"><i className="ri ri-refresh-line"></i> Update</Link>
                <Link href="#!" scroll={false} className="ti-btn m-0 ti-btn-soft-secondary"><i className="ri-refresh-line"></i> Reset</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Profile;
