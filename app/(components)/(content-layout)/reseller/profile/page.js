"use client"
import { activateAccount } from "@/shared/apis/api";
import { ProfileService, ProfileService1 } from "@/shared/data/pages/contactdata";
import Snackbar from "@/shared/layout-components/dashboard/SnackBar";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { useUserContext } from "@/shared/userContext/userContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Cookies from 'js-cookie';

const Profile = () => {
  const { user, setActivated, isActivated, openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
  const [startDate, setStartDate] = useState(new Date());
  const [purchaseCode, setPurchaseCode] = useState("")
  const [data, setData] = useState([])

  const [Image, setImage] = useState("../../../assets/img/users/1.jpg");

  let location = useRouter();

  const [ClassName, setClassName] = useState();

  useEffect(() => {
    if (ProfileService.returnImage() != undefined) {
      setImage(ProfileService.returnImage());
    }
    let contactItem = document.querySelectorAll(".main-contact-item");
    contactItem.forEach((ele => {
      ele.addEventListener("click", () => {
        setClassName("main-content-body-show");
      });
    }));

  }, [location]);

  //
  //URl image
  const [UrlImage1, setUrlImage1] = useState("../../../assets/img/users/1.jpg");
  const [Image1, setImage1] = useState("../../../assets/img/users/1.jpg");

  let location1 = useRouter();

  const putImage1 = () => {
    setImage(ProfileService1.returnImage1());
    if (UrlImage1 != Image1) {
      ProfileService1.handleChangeUrl1(UrlImage1);
      setImage1(ProfileService1.returnImage1());
    }
    // setSmShow(false)
  };

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

  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem("reseller")))
  },[])
  return (
    <div>
      <Seo title={"Profile Settings"} />
      <HelmetProvider>
        {
            openSnack &&
            <Snackbar content={snackMessage} isOpen={openSnack}/>
        }
        <Helmet>
          <body className={ClassName}></body>
        </Helmet>
        <PageHeader currentpage="Profile" activepage="Dashboard" img="/assets/img/users/profile.png" mainpage="Profile" />
        <div className="grid grid-cols-12 gap-x-6">
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
                            <input type="text" className="my-auto ti-form-input cursor-not-allowed bg-gray-100" value={user.name} disabled={user.name} placeholder="Enter full name" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Email Address</label>
                            <input type="email" className="my-auto ti-form-input cursor-not-allowed bg-gray-100" value={user.email} disabled={user.email} placeholder="your@site.com" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Phone Number</label>
                            <input type="text" className="my-auto ti-form-input" placeholder="+91 123-456-789" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Date Of Birth</label>
                            <DatePicker className="ti-form-input focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='choose Date' dateFormat="dd-MM-yyyy" />
                          </div>
                          <div className="space-y-2 relative">
                            <label className="ti-form-label mb-0">Plan Type</label>
                            <input type="text" className="my-auto ti-form-input capitalize" placeholder="" value={data ? data[0]?.plan_type : ""} />
                            <span className="absolute top-[58%] -translate-y-1/2 right-2">
                              <i className={`${data[0]?.plan_type === "premium" ? "ri-vip-crown-line text-secondary" : data[0]?.plan_type === "gold" ? "ri-medal-line text-warning" : "ri-bard-line text-info"} text-lg text-success`}></i>
                            </span>
                          </div>
                          <div className="space-y-2 relative">
                            <label className="ti-form-label mb-0">Purchase Code</label>
                            <input type="text" className={`my-auto ti-form-input ${openSnack && "text-danger"} ${isActivated && "cursor-not-allowed bg-gray-100"}`} placeholder="XXXX-XXXX-XXXX-XXXX" value={user.purchase_code ? user.purchase_code : purchaseCode} onChange={handePurchaseChange} onBlur={handlePurchaseBlur} disabled={isActivated || user.purchase_code} />
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
                            <input type="text" className="my-auto ti-form-input" placeholder="Address" />
                          </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">City</label>
                            <input type="text" className="my-auto ti-form-input" placeholder="city" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Country</label>
                            <input type="text" className="my-auto ti-form-input" placeholder="country" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">State</label>
                            <input type="text" className="my-auto ti-form-input" placeholder="state" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Pincode</label>
                            <input type="number" className="my-auto ti-form-input" placeholder="pincode" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-footer text-end space-x-3 rtl:space-x-reverse">
                <Link href="#!" scroll={false} className="ti-btn m-0 ti-btn-soft-primary"><i className="ri ri-refresh-line"></i> Update</Link>
                <Link href="#!" scroll={false} className="ti-btn m-0 ti-btn-soft-secondary"><i className="ri ri-close-circle-line"></i> Cancel</Link>
              </div>
            </div>
          </div>
        </div>
      </HelmetProvider>
    </div>
  );
};

export default Profile;
