"use client"
import { activateAccount } from "@/shared/apis/api";
import Snackbar from "@/shared/layout-components/dashboard/SnackBar";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { useUserContext } from "@/shared/userContext/userContext";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const Select = dynamic(() => import("react-select"), { ssr: false });
import Cookies from 'js-cookie';

const Profile = () => {
  const { user, setActivated, isActivated, openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
  const [purchaseCode, setPurchaseCode] = useState("")
  const [ selectedCountry, setSelectedCountry ] = useState("")
  const [ formData, setFormData] = useState({phone: "", address: "", city: "", state: "", pin: null})
  const countries = [
    {
      "label": "Algeria",
      "value": "Algeria"
    },
    {
      "label": "Angola",
      "value": "Angola"
    },
    {
      "label": "Benin",
      "value": "Benin"
    },
    {
      "label": "Botswana",
      "value": "Botswana"
    },
    {
      "label": "Burkina Faso",
      "value": "Burkina Faso"
    },
    {
      "label": "Burundi",
      "value": "Burundi"
    },
    {
      "label": "Cabo Verde",
      "value": "Cabo Verde"
    },
    {
      "label": "Cameroon",
      "value": "Cameroon"
    },
    {
      "label": "Central African Republic",
      "value": "Central African Republic"
    },
    {
      "label": "Chad",
      "value": "Chad"
    },
    {
      "label": "Comoros",
      "value": "Comoros"
    },
    {
      "label": "Congo (Republic of the)",
      "value": "Congo (Republic of the)"
    },
    {
      "label": "Democratic Republic of the Congo",
      "value": "Democratic Republic of the Congo"
    },
    {
      "label": "C\u00f4te d\u2019Ivoire (Ivory Coast)",
      "value": "C\u00f4te d\u2019Ivoire (Ivory Coast)"
    },
    {
      "label": "Djibouti",
      "value": "Djibouti"
    },
    {
      "label": "Egypt",
      "value": "Egypt"
    },
    {
      "label": "Equatorial Guinea",
      "value": "Equatorial Guinea"
    },
    {
      "label": "Eritrea",
      "value": "Eritrea"
    },
    {
      "label": "Eswatini",
      "value": "Eswatini"
    },
    {
      "label": "Ethiopia",
      "value": "Ethiopia"
    },
    {
      "label": "Gabon",
      "value": "Gabon"
    },
    {
      "label": "Gambia",
      "value": "Gambia"
    },
    {
      "label": "Ghana",
      "value": "Ghana"
    },
    {
      "label": "Guinea",
      "value": "Guinea"
    },
    {
      "label": "Guinea-Bissau",
      "value": "Guinea-Bissau"
    },
    {
      "label": "Kenya",
      "value": "Kenya"
    },
    {
      "label": "Lesotho",
      "value": "Lesotho"
    },
    {
      "label": "Liberia",
      "value": "Liberia"
    },
    {
      "label": "Libya",
      "value": "Libya"
    },
    {
      "label": "Madagascar",
      "value": "Madagascar"
    },
    {
      "label": "Malawi",
      "value": "Malawi"
    },
    {
      "label": "Mali",
      "value": "Mali"
    },
    {
      "label": "Mauritania",
      "value": "Mauritania"
    },
    {
      "label": "Mauritius",
      "value": "Mauritius"
    },
    {
      "label": "Morocco",
      "value": "Morocco"
    },
    {
      "label": "Mozambique",
      "value": "Mozambique"
    },
    {
      "label": "Namibia",
      "value": "Namibia"
    },
    {
      "label": "Niger",
      "value": "Niger"
    },
    {
      "label": "Nigeria",
      "value": "Nigeria"
    },
    {
      "label": "Rwanda",
      "value": "Rwanda"
    },
    {
      "label": "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
      "value": "S\u00e3o Tom\u00e9 and Pr\u00edncipe"
    },
    {
      "label": "Senegal",
      "value": "Senegal"
    },
    {
      "label": "Seychelles",
      "value": "Seychelles"
    },
    {
      "label": "Sierra Leone",
      "value": "Sierra Leone"
    },
    {
      "label": "Somalia",
      "value": "Somalia"
    },
    {
      "label": "South Africa",
      "value": "South Africa"
    },
    {
      "label": "South Sudan",
      "value": "South Sudan"
    },
    {
      "label": "Sudan",
      "value": "Sudan"
    },
    {
      "label": "Tanzania",
      "value": "Tanzania"
    },
    {
      "label": "Togo",
      "value": "Togo"
    },
    {
      "label": "Tunisia",
      "value": "Tunisia"
    },
    {
      "label": "Uganda",
      "value": "Uganda"
    },
    {
      "label": "Zambia",
      "value": "Zambia"
    },
    {
      "label": "Zimbabwe",
      "value": "Zimbabwe"
    },
    {
      "label": "Afghanistan",
      "value": "Afghanistan"
    },
    {
      "label": "Armenia",
      "value": "Armenia"
    },
    {
      "label": "Azerbaijan",
      "value": "Azerbaijan"
    },
    {
      "label": "Bahrain",
      "value": "Bahrain"
    },
    {
      "label": "Bangladesh",
      "value": "Bangladesh"
    },
    {
      "label": "Bhutan",
      "value": "Bhutan"
    },
    {
      "label": "Brunei",
      "value": "Brunei"
    },
    {
      "label": "Cambodia",
      "value": "Cambodia"
    },
    {
      "label": "China",
      "value": "China"
    },
    {
      "label": "Cyprus",
      "value": "Cyprus"
    },
    {
      "label": "Georgia",
      "value": "Georgia"
    },
    {
      "label": "India",
      "value": "India"
    },
    {
      "label": "Indonesia",
      "value": "Indonesia"
    },
    {
      "label": "Iran",
      "value": "Iran"
    },
    {
      "label": "Iraq",
      "value": "Iraq"
    },
    {
      "label": "Israel",
      "value": "Israel"
    },
    {
      "label": "Japan",
      "value": "Japan"
    },
    {
      "label": "Jordan",
      "value": "Jordan"
    },
    {
      "label": "Kazakhstan",
      "value": "Kazakhstan"
    },
    {
      "label": "Kuwait",
      "value": "Kuwait"
    },
    {
      "label": "Kyrgyzstan",
      "value": "Kyrgyzstan"
    },
    {
      "label": "Laos",
      "value": "Laos"
    },
    {
      "label": "Lebanon",
      "value": "Lebanon"
    },
    {
      "label": "Malaysia",
      "value": "Malaysia"
    },
    {
      "label": "Maldives",
      "value": "Maldives"
    },
    {
      "label": "Mongolia",
      "value": "Mongolia"
    },
    {
      "label": "Myanmar (Burma)",
      "value": "Myanmar (Burma)"
    },
    {
      "label": "Nepal",
      "value": "Nepal"
    },
    {
      "label": "North Korea",
      "value": "North Korea"
    },
    {
      "label": "Oman",
      "value": "Oman"
    },
    {
      "label": "Pakistan",
      "value": "Pakistan"
    },
    {
      "label": "Palestine",
      "value": "Palestine"
    },
    {
      "label": "Philippines",
      "value": "Philippines"
    },
    {
      "label": "Qatar",
      "value": "Qatar"
    },
    {
      "label": "Saudi Arabia",
      "value": "Saudi Arabia"
    },
    {
      "label": "Singapore",
      "value": "Singapore"
    },
    {
      "label": "South Korea",
      "value": "South Korea"
    },
    {
      "label": "Sri Lanka",
      "value": "Sri Lanka"
    },
    {
      "label": "Syria",
      "value": "Syria"
    },
    {
      "label": "Taiwan",
      "value": "Taiwan"
    },
    {
      "label": "Tajikistan",
      "value": "Tajikistan"
    },
    {
      "label": "Thailand",
      "value": "Thailand"
    },
    {
      "label": "Timor-Leste",
      "value": "Timor-Leste"
    },
    {
      "label": "Turkey",
      "value": "Turkey"
    },
    {
      "label": "Turkmenistan",
      "value": "Turkmenistan"
    },
    {
      "label": "United Arab Emirates",
      "value": "United Arab Emirates"
    },
    {
      "label": "Uzbekistan",
      "value": "Uzbekistan"
    },
    {
      "label": "Vietnam",
      "value": "Vietnam"
    },
    {
      "label": "Yemen",
      "value": "Yemen"
    },
    {
      "label": "Albania",
      "value": "Albania"
    },
    {
      "label": "Andorra",
      "value": "Andorra"
    },
    {
      "label": "Armenia",
      "value": "Armenia"
    },
    {
      "label": "Austria",
      "value": "Austria"
    },
    {
      "label": "Azerbaijan",
      "value": "Azerbaijan"
    },
    {
      "label": "Belarus",
      "value": "Belarus"
    },
    {
      "label": "Belgium",
      "value": "Belgium"
    },
    {
      "label": "Bosnia and Herzegovina",
      "value": "Bosnia and Herzegovina"
    },
    {
      "label": "Bulgaria",
      "value": "Bulgaria"
    },
    {
      "label": "Croatia",
      "value": "Croatia"
    },
    {
      "label": "Cyprus",
      "value": "Cyprus"
    },
    {
      "label": "Czech Republic (Czechia)",
      "value": "Czech Republic (Czechia)"
    },
    {
      "label": "Denmark",
      "value": "Denmark"
    },
    {
      "label": "Estonia",
      "value": "Estonia"
    },
    {
      "label": "Finland",
      "value": "Finland"
    },
    {
      "label": "France",
      "value": "France"
    },
    {
      "label": "Georgia",
      "value": "Georgia"
    },
    {
      "label": "Germany",
      "value": "Germany"
    },
    {
      "label": "Greece",
      "value": "Greece"
    },
    {
      "label": "Hungary",
      "value": "Hungary"
    },
    {
      "label": "Iceland",
      "value": "Iceland"
    },
    {
      "label": "Ireland",
      "value": "Ireland"
    },
    {
      "label": "Italy",
      "value": "Italy"
    },
    {
      "label": "Kazakhstan",
      "value": "Kazakhstan"
    },
    {
      "label": "Kosovo",
      "value": "Kosovo"
    },
    {
      "label": "Latvia",
      "value": "Latvia"
    },
    {
      "label": "Liechtenstein",
      "value": "Liechtenstein"
    },
    {
      "label": "Lithuania",
      "value": "Lithuania"
    },
    {
      "label": "Luxembourg",
      "value": "Luxembourg"
    },
    {
      "label": "Malta",
      "value": "Malta"
    },
    {
      "label": "Moldova",
      "value": "Moldova"
    },
    {
      "label": "Monaco",
      "value": "Monaco"
    },
    {
      "label": "Montenegro",
      "value": "Montenegro"
    },
    {
      "label": "Netherlands",
      "value": "Netherlands"
    },
    {
      "label": "North Macedonia",
      "value": "North Macedonia"
    },
    {
      "label": "Norway",
      "value": "Norway"
    },
    {
      "label": "Poland",
      "value": "Poland"
    },
    {
      "label": "Portugal",
      "value": "Portugal"
    },
    {
      "label": "Romania",
      "value": "Romania"
    },
    {
      "label": "Russia",
      "value": "Russia"
    },
    {
      "label": "San Marino",
      "value": "San Marino"
    },
    {
      "label": "Serbia",
      "value": "Serbia"
    },
    {
      "label": "Slovakia",
      "value": "Slovakia"
    },
    {
      "label": "Slovenia",
      "value": "Slovenia"
    },
    {
      "label": "Spain",
      "value": "Spain"
    },
    {
      "label": "Sweden",
      "value": "Sweden"
    },
    {
      "label": "Switzerland",
      "value": "Switzerland"
    },
    {
      "label": "Ukraine",
      "value": "Ukraine"
    },
    {
      "label": "United Kingdom",
      "value": "United Kingdom"
    },
    {
      "label": "Vatican City",
      "value": "Vatican City"
    },
    {
      "label": "Antigua and Barbuda",
      "value": "Antigua and Barbuda"
    },
    {
      "label": "Bahamas",
      "value": "Bahamas"
    },
    {
      "label": "Barbados",
      "value": "Barbados"
    },
    {
      "label": "Belize",
      "value": "Belize"
    },
    {
      "label": "Canada",
      "value": "Canada"
    },
    {
      "label": "Costa Rica",
      "value": "Costa Rica"
    },
    {
      "label": "Cuba",
      "value": "Cuba"
    },
    {
      "label": "Dominica",
      "value": "Dominica"
    },
    {
      "label": "Dominican Republic",
      "value": "Dominican Republic"
    },
    {
      "label": "El Salvador",
      "value": "El Salvador"
    },
    {
      "label": "Grenada",
      "value": "Grenada"
    },
    {
      "label": "Guatemala",
      "value": "Guatemala"
    },
    {
      "label": "Haiti",
      "value": "Haiti"
    },
    {
      "label": "Honduras",
      "value": "Honduras"
    },
    {
      "label": "Jamaica",
      "value": "Jamaica"
    },
    {
      "label": "Mexico",
      "value": "Mexico"
    },
    {
      "label": "Nicaragua",
      "value": "Nicaragua"
    },
    {
      "label": "Panama",
      "value": "Panama"
    },
    {
      "label": "Saint Kitts and Nevis",
      "value": "Saint Kitts and Nevis"
    },
    {
      "label": "Saint Lucia",
      "value": "Saint Lucia"
    },
    {
      "label": "Saint Vincent and the Grenadines",
      "value": "Saint Vincent and the Grenadines"
    },
    {
      "label": "Trinidad and Tobago",
      "value": "Trinidad and Tobago"
    },
    {
      "label": "United States",
      "value": "United States"
    },
    {
      "label": "Argentina",
      "value": "Argentina"
    },
    {
      "label": "Bolivia",
      "value": "Bolivia"
    },
    {
      "label": "Brazil",
      "value": "Brazil"
    },
    {
      "label": "Chile",
      "value": "Chile"
    },
    {
      "label": "Colombia",
      "value": "Colombia"
    },
    {
      "label": "Ecuador",
      "value": "Ecuador"
    },
    {
      "label": "Guyana",
      "value": "Guyana"
    },
    {
      "label": "Paraguay",
      "value": "Paraguay"
    },
    {
      "label": "Peru",
      "value": "Peru"
    },
    {
      "label": "Suriname",
      "value": "Suriname"
    },
    {
      "label": "Uruguay",
      "value": "Uruguay"
    },
    {
      "label": "Venezuela",
      "value": "Venezuela"
    },
    {
      "label": "Australia",
      "value": "Australia"
    },
    {
      "label": "Fiji",
      "value": "Fiji"
    },
    {
      "label": "Kiribati",
      "value": "Kiribati"
    },
    {
      "label": "Marshall Islands",
      "value": "Marshall Islands"
    },
    {
      "label": "Micronesia",
      "value": "Micronesia"
    },
    {
      "label": "Nauru",
      "value": "Nauru"
    },
    {
      "label": "New Zealand",
      "value": "New Zealand"
    },
    {
      "label": "Palau",
      "value": "Palau"
    },
    {
      "label": "Papua New Guinea",
      "value": "Papua New Guinea"
    },
    {
      "label": "Samoa",
      "value": "Samoa"
    },
    {
      "label": "Solomon Islands",
      "value": "Solomon Islands"
    },
    {
      "label": "Tonga",
      "value": "Tonga"
    },
    {
      "label": "Tuvalu",
      "value": "Tuvalu"
    },
    {
      "label": "Vanuatu",
      "value": "Vanuatu"
    }
  ]

  const handleInputChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData(cur=>({...cur, [name]: value}))
  }

  const handleQueryChange = (obj)=>{
		setSelectedCountry(obj)
	}

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

  const handleSubmit  = ()=>{
    if(formData.phone && formData.address && formData.city && selectedCountry.value){
      localStorage.setItem(`profileData`, JSON.stringify({email: user.email, phone: formData.phone, address: formData.address, city: formData.city, state: formData.state, pin: formData.pin}))
      alert(`Data saved successfully!`)
    }
    else {
      alert(`Some fields are required!`)
    }
  }

  useEffect(()=>{
    const profileData = JSON.parse(localStorage.getItem("profileData"))
    if(profileData){
      setFormData({phone: profileData.phone, address: profileData.address, city: profileData.city, state: profileData.state, pin: profileData.pin})
    }
  }, [])
  return (
    <div>
      <Seo title={"Profile Settings"} />
        {
            openSnack &&
            <Snackbar content={snackMessage} isOpen={openSnack}/>
        }
        <PageHeader currentpage="Profile" activepage="Reseller" img="/assets/img/users/profile.png" mainpage="Profile" />
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
                            <input type="email" className="my-auto ti-form-input bg-gray-100" value={user.email} disabled={user.email} placeholder="your@site.com" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Phone Number</label>
                            <input type="text" className="my-auto capitalize ti-form-input" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 123-456-789" />
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
                          {/* <div className="space-y-2">
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
                          </div> */}
                        </div>
                        <div className="my-5">
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Address</label>
                            <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="my-auto capitalize ti-form-input" placeholder="Address" />
                          </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">City</label>
                            <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="my-auto capitalize ti-form-input" placeholder="city" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Country</label>
                            <Select classNamePrefix='react-select' id='react-select-3-live-region' className="capitalize" value={selectedCountry} options={countries} placeholder='Choose Country' onChange={handleQueryChange} />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">State</label>
                            <input type="text" name="state" value={formData.state} onChange={handleInputChange} className="my-auto capitalize ti-form-input" placeholder="state" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Pincode</label>
                            <input type="number" name="pin" value={formData.pin} onChange={handleInputChange} className="my-auto capitalize ti-form-input" placeholder="pincode" />
                          </div>
                        </div>
                        {/* <div className="mt-5">
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Bio</label>
                            <textarea className="ti-form-input capitalize" rows={3} placeholder="Add Your Bio"></textarea>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-footer text-end space-x-3 rtl:space-x-reverse">
                <button onClick={handleSubmit} scroll={false} className="ti-btn m-0 ti-btn-soft-primary"><i className="ri-save-2-line"></i> Save</button>
                {/* <Link href="#!" scroll={false} className="ti-btn m-0 ti-btn-soft-secondary"><i className="ri-refresh-line"></i> Reset</Link> */}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Profile;
