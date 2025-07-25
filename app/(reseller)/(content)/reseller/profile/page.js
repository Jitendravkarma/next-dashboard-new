"use client"
import { activateAccount } from "@/shared/apis/api";
import Snackbar from "@/shared/layout-components/dashboard/SnackBar";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { useUserContext } from "@/shared/userContext/userContext";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
const Select = dynamic(() => import("react-select"), { ssr: false });
import Cookies from 'js-cookie';
import axios from "axios";

const Profile = () => {
  const darkRef = useRef(null);
  const lightRef = useRef(null);
  const phoneRef = useRef(null);
  const { user, setActivated, isActivated, openSnack, localUser, snackMessage, openSnackBar, yt_channel, yt_links, handleSnackMessage, years, userProfileDetails, productUrl, dynamicSocialLinks } = useUserContext()
  const [purchaseCode, setPurchaseCode] = useState("")
  const [ msg, setMsg] = useState(false)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ hideYoutubeLinks, setHideYoutubeLinks ] = useState(true)
  const [ hideSocialLinks, setSocialLinks ] = useState(true)
  const [ formData, setFormData] = useState({
    email: user.email, 
    phone: "", 
    address: "", 
    productUrl: "",
    company: "", 
    company_year: "",
    country: "",
    city: "", 
    state: "", 
    pin: "", 
    light: null, 
    dark: null
  })
  
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
  const defaultLinks = [
    { toolName: "Tool Installation/Setup Link", shortName: "installation", value: `https://www.youtube.com/watch?v=tOLGsRr9V5Q`, placeholder: `https://www.youtube.com/watch?v=tOLGsRr9V5Q`},
    { toolName: "Google Manual mode", shortName: "mode", value: `https://www.youtube.com/watch?v=guM7r-UIN-Y`, placeholder: `https://www.youtube.com/watch?v=guM7r-UIN-Y`},
    { toolName: "Live website Scraper", shortName: "live_scraping", value: `https://www.youtube.com/watch?v=Ls-FfPTmuDU`, placeholder: `https://www.youtube.com/watch?v=Ls-FfPTmuDU`},
    { toolName: "Live Website Data", shortName: "live_data", value: `https://www.youtube.com/watch?v=QNEtI_b3zOY`, placeholder: `https://www.youtube.com/watch?v=QNEtI_b3zOY`},
    { toolName: "Bing search scraper", shortName: "bing", value: `https://www.youtube.com/watch?v=plZ8Jgbc5Fo`, placeholder: `https://www.youtube.com/watch?v=plZ8Jgbc5Fo`},
    { toolName: "google search scraper", shortName: "google", value: `https://www.youtube.com/watch?v=UDVS9GvCQ9c`, placeholder: `https://www.youtube.com/watch?v=UDVS9GvCQ9c`},
    { toolName: "yahoo search scraper", shortName: "yahoo", value: `https://www.youtube.com/watch?v=rA_Uj-p7OBw`, placeholder: `https://www.youtube.com/watch?v=rA_Uj-p7OBw`},
    { toolName: "duckduckgo search scraper", shortName: "duck", value: `https://www.youtube.com/watch?v=IsTXALXQIL4`, placeholder: `https://www.youtube.com/watch?v=IsTXALXQIL4`},
    { toolName: "google map scraper", shortName: "map", value: `https://www.youtube.com/watch?v=-gkZGKExP-4`, placeholder: `https://www.youtube.com/watch?v=-gkZGKExP-4`},
    { toolName: "indiamart scraper", shortName: "map", value: `https://www.youtube.com/watch?v=oVgCPWGB0yI`, placeholder: `https://www.youtube.com/watch?v=oVgCPWGB0yI`},
    { toolName: "justdial scraper", shortName: "map", value: `https://www.youtube.com/watch?v=PhDmPg7JDKQ`, placeholder: `https://www.youtube.com/watch?v=PhDmPg7JDKQ`},
    { toolName: "sulekha scraper", shortName: "map", value: `https://www.youtube.com/watch?v=pFGebR3RN9U`, placeholder: `https://www.youtube.com/watch?v=pFGebR3RN9U`},
    { toolName: "tradeindia scraper", shortName: "map", value: `https://www.youtube.com/watch?v=1g92KfRGA5E`, placeholder: `https://www.youtube.com/watch?v=1g92KfRGA5E`},
    { toolName: "exportersindia scraper", shortName: "map", value: `https://www.youtube.com/watch?v=dYB2IUOra_8`, placeholder: `https://www.youtube.com/watch?v=dYB2IUOra_8`},
    { toolName: "email scraper", shortName: "map", value: `https://www.youtube.com/watch?v=uJYDZtnIj0o`, placeholder: `https://www.youtube.com/watch?v=uJYDZtnIj0o`},
    { toolName: "phone number scraper", shortName: "map", value: `https://www.youtube.com/watch?v=qgPVom0YKpw`, placeholder: `https://www.youtube.com/watch?v=qgPVom0YKpw`},
    { toolName: "facebook scraper", shortName: "facebook", value: `https://www.youtube.com/watch?v=iv9bJRcsP7Y`, placeholder: `https://www.youtube.com/watch?v=iv9bJRcsP7Y`},
    { toolName: "youtube scraper", shortName: "youtube", value: `https://www.youtube.com/watch?v=ZatCD6KfYv0`, placeholder: `https://www.youtube.com/watch?v=ZatCD6KfYv0`},
    { toolName: "website data scraper", shortName: "website_data", value: `https://www.youtube.com/watch?v=hBQezVYKatw`, placeholder: `https://www.youtube.com/watch?v=hBQezVYKatw`},
    { toolName: "business directory scraper", shortName: "directory", value: `https://www.youtube.com/watch?v=xnDlalSMNdk`, placeholder: `https://www.youtube.com/watch?v=xnDlalSMNdk`},
    { toolName: "document data scraper", shortName: "document", value: `https://www.youtube.com/watch?v=UCuamwNuO2M`, placeholder: `https://www.youtube.com/watch?v=UCuamwNuO2M`},
    { toolName: "image data scraper", shortName: "image", value: `https://www.youtube.com/watch?v=B13KxuDkY98`, placeholder: `https://www.youtube.com/watch?v=B13KxuDkY98`},
    { toolName: "whois domain lookup", shortName: "whois", value: `https://www.youtube.com/watch?v=_w0iMP95G-A`, placeholder: `https://www.youtube.com/watch?v=_w0iMP95G-A`}
  ]
  const defautlSocialLinks = [
    { mediaName: "facebook", shortName: "facebook", value: ``, placeholder: ``},
    { mediaName: "instagram", shortName: "instagram", value: ``, placeholder: ``},
    { mediaName: "youtube", shortName: "youtube", value: ``, placeholder: ``},
    { mediaName: "twitter", shortName: "twitter", value: ``, placeholder: ``},
    { mediaName: "linkedin", shortName: "linkedin", value: ``, placeholder: ``}
  ]

  const [ youtubeChannel, setYoutubeChannel ] = useState(yt_channel)
  const [ youtubeLinks, setYouTubeLinks ] = useState(defaultLinks)
  const [ socialMediaLinks, setSocialMediaLinks ] = useState(defautlSocialLinks)

  const handleInputChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    const file = (e.target.files && e.target.files.length > 0) ? e.target.files[0] : "";
    if(name === "phone"){
      if (!/^[\d+]*$/.test(value)) {
        openSnackBar();
        handleSnackMessage("Only numeric characters are allowed in the phone number.", "danger", "text-white")
        return;
      }
    }
    setFormData(cur=>({...cur, [name]: file ? file : value}))
  }

  const handleQueryChange = (obj)=>{
    setFormData(cur=>({...cur, country: obj}))
	}

  const handleYear = (obj)=>{
    setFormData(cur=>({...cur, company_year: obj}))
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

  const handleYoutubeLinkChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    if(name.toLowerCase() === "youtube channel"){
      setYoutubeChannel(value)
    }
    else {
      setYouTubeLinks(cur=>{
        const newData = cur.map(item=>({...item, value: item.toolName === name ? value : item.value}))
        return newData
      })
    }
  }

  const handleSocialLinkChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setSocialMediaLinks(cur=>{
      const newData = cur.map(item=>({...item, value: item.mediaName === name ? value : item.value}))
      return newData
    })
  }

  const handleDefaultLinks = ()=>{
    setYoutubeChannel("https://www.youtube.com/@ClipCloud-m3t")
    setYouTubeLinks(defaultLinks)
  }

  const watchPreviewVideo = (link)=>{
    if(link.includes('https://')){
      const anchor = document.createElement('a')
      anchor.href = link;
      anchor.target = "_blank"
      anchor.click()
    }
    else {
      openSnackBar();
      handleSnackMessage("Invalid URL.", "danger", "text-white")
    }
  }

  const removeFile = (fileName, refName)=>{
    setFormData(cur=>({...cur, [fileName]: null}))
    refName.current.value = null;
  }
  
  const handleSubmit  = async ()=>{
    let phone = formData.phone
    if(user.email === "help@leadglobe.modiguru.com" && phone && formData.address && formData.city && formData.country.value){
      if (!phone.startsWith('+')) {
        openSnackBar();
        handleSnackMessage("Please enter a valid phone number including your country code (e.g., +91).", "danger", "text-white")
        return;
      }
  
      const numberOnly = phone.replace(/\D/g, '');
  
      if (numberOnly.length < 10) {
        openSnackBar();
        handleSnackMessage("Phone number must contain at least 10 digits.", "danger", "text-white")
        return;
      }

      else {
        const newData = {email: user.email, role: user.reseller ? "Reseller": "User", phone: phone, address: formData.address, country: formData.country, city: formData.city, state: formData.state, pin: formData.pin}
        const collectedData = new FormData();
        if(formData.company && formData.company_year?.value){
          if(formData.light && formData.dark){
            Object.keys(formData).forEach(item=>{
              if(item === "country" || item === "company_year"){
                collectedData.append(item, formData[item].value)
              }
              else collectedData.append(item, formData[item])
            })
            try {
              setIsLoading(true)
              // const links = youtubeLinks.map(item=>({ toolName: item.shortName, url:item.value }))
              const customSocialLinks = {
                facebook: socialMediaLinks[0].value,
                instagram: socialMediaLinks[1].value,
                youtube: socialMediaLinks[2].value,
                twitter: socialMediaLinks[3].value,
                linkedin: socialMediaLinks[4].value
              }

              const links = {
                installation: youtubeLinks[0].value,
                mode: youtubeLinks[1].value,
                live_scraping: youtubeLinks[2].value,
                live_data: youtubeLinks[3].value,
                bing: youtubeLinks[4].value,
                google: youtubeLinks[5].value,
                yahoo: youtubeLinks[6].value,
                duck: youtubeLinks[7].value,
                map: youtubeLinks[8].value,
                indiamart: youtubeLinks[9].value,
                justdial: youtubeLinks[10].value,
                sulekha: youtubeLinks[11].value,
                tradeindia: youtubeLinks[12].value,
                exportersindia: youtubeLinks[13].value,
                email: youtubeLinks[14].value,
                phone: youtubeLinks[15].value,
                facebook: youtubeLinks[16].value,
                youtube: youtubeLinks[17].value,
                website_data: youtubeLinks[18].value,
                directory: youtubeLinks[19].value,
                document: youtubeLinks[20].value,
                image: youtubeLinks[21].value,
                whois: youtubeLinks[22].value
              }
              collectedData.append("youtubeLinks", JSON.stringify(links))
              collectedData.append("socialLinks", JSON.stringify(customSocialLinks))
              collectedData.append("youtubeChannel", youtubeChannel)
              await axios.post(`/api/save_profile`, collectedData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
              newData.country = formData.country
              newData.company = formData.company
              newData.company_year = formData.company_year
              openSnackBar();
              handleSnackMessage("Profile saved successfully!", "success", "text-success")
              setMsg("✅ Profile saved successfully!")
            } catch (error) {
              console.log(error)
              openSnackBar();
              handleSnackMessage("Something went wrong!", "danger", "text-white")
              setMsg("❌ Something went wrong!")
            } finally {
              setIsLoading(false)
            }
          }
          else {
            openSnackBar();
            handleSnackMessage("Please upload your logo!", "danger", "text-white")
          }
        }
        else {
          openSnackBar();
          handleSnackMessage("Please fill your company details!", "danger", "text-white")
        }
      }
    }
    else {
      openSnackBar();
      handleSnackMessage("All fields are required!", "danger", "text-white")
    }
  }

  useEffect(()=>{
    setYoutubeChannel(yt_channel)
  }, [yt_channel])

  useEffect(()=>{
    setYouTubeLinks([
      { toolName: "Tool Installation/Setup Link", shortName: "installation", value: `https://www.youtube.com/watch?v=${yt_links.installation}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.installation}`},
      { toolName: "Google Manual mode", shortName: "mode", value: `https://www.youtube.com/watch?v=${yt_links.mode}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.mode}`},
      { toolName: "Live website Scraper", shortName: "live_scraping", value: `https://www.youtube.com/watch?v=${yt_links.live_scraping}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.live_scraping}`},
      { toolName: "Live Website Data", shortName: "live_data", value: `https://www.youtube.com/watch?v=${yt_links.live_data}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.live_data}`},
      { toolName: "Bing search scraper", shortName: "bing", value: `https://www.youtube.com/watch?v=${yt_links.bing}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.bing}`},
      { toolName: "google search scraper", shortName: "google", value: `https://www.youtube.com/watch?v=${yt_links.google}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.google}`},
      { toolName: "yahoo search scraper", shortName: "yahoo", value: `https://www.youtube.com/watch?v=${yt_links.yahoo}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.yahoo}`},
      { toolName: "duckduckgo search scraper", shortName: "duck", value: `https://www.youtube.com/watch?v=${yt_links.duck}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.duck}`},
      { toolName: "google map scraper", shortName: "map", value: `https://www.youtube.com/watch?v=${yt_links.map}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.map}`},
      { toolName: "indiamart scraper", shortName: "map", value: `https://www.youtube.com/watch?v=${yt_links.indiamart}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.indiamart}`},
      { toolName: "justdial scraper", shortName: "map", value: `https://www.youtube.com/watch?v=${yt_links.justdial}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.justdial}`},
      { toolName: "sulekha scraper", shortName: "map", value: `https://www.youtube.com/watch?v=${yt_links.sulekha}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.sulekha}`},
      { toolName: "tradeindia scraper", shortName: "map", value: `https://www.youtube.com/watch?v=${yt_links.tradeindia}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.tradeindia}`},
      { toolName: "exportersindia scraper", shortName: "map", value: `https://www.youtube.com/watch?v=${yt_links.exportersindia}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.exportersindia}`},
      { toolName: "email scraper", shortName: "map", value: `https://www.youtube.com/watch?v=${yt_links.email}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.email}`},
      { toolName: "phone number scraper", shortName: "map", value: `https://www.youtube.com/watch?v=${yt_links.phone}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.phone}`},
      { toolName: "facebook scraper", shortName: "facebook", value: `https://www.youtube.com/watch?v=${yt_links.facebook}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.facebook}`},
      { toolName: "youtube scraper", shortName: "youtube", value: `https://www.youtube.com/watch?v=${yt_links.youtube}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.youtube}`},
      { toolName: "website data scraper", shortName: "website_data", value: `https://www.youtube.com/watch?v=${yt_links.website_data}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.website_data}`},
      { toolName: "business directory scraper", shortName: "directory", value: `https://www.youtube.com/watch?v=${yt_links.directory}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.directory}`},
      { toolName: "document data scraper", shortName: "document", value: `https://www.youtube.com/watch?v=${yt_links.document}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.document}`},
      { toolName: "image data scraper", shortName: "image", value: `https://www.youtube.com/watch?v=${yt_links.image}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.image}`},
      { toolName: "whois domain lookup", shortName: "whois", value: `https://www.youtube.com/watch?v=${yt_links.whois}`, placeholder: `https://www.youtube.com/watch?v=${yt_links.whois}`}
    ])
  }, [yt_links])

  useEffect(()=>{
    setSocialMediaLinks(
      [
        { mediaName: "facebook", shortName: "facebook", value: dynamicSocialLinks.facebook, placeholder: ``},
        { mediaName: "instagram", shortName: "instagram", value: dynamicSocialLinks.instagram, placeholder: ``},
        { mediaName: "youtube", shortName: "youtube", value: dynamicSocialLinks.youtube, placeholder: ``},
        { mediaName: "twitter", shortName: "twitter", value: dynamicSocialLinks.twitter, placeholder: ``},
        { mediaName: "linkedin", shortName: "linkedin", value: dynamicSocialLinks.linkedin, placeholder: ``}
      ]
    )
  }, [dynamicSocialLinks])

  useEffect(()=>{
    setFormData({
      email: user.email, 
      phone: userProfileDetails.phone, 
      address: userProfileDetails.address, 
      productUrl,
      company: userProfileDetails.company_name, 
      company_year: userProfileDetails.company_year,
      country: userProfileDetails.country,
      city: userProfileDetails.city, 
      state: userProfileDetails.state, 
      pin: userProfileDetails.pin, 
      light: null, 
      dark: null
    })
  }, [productUrl, userProfileDetails])

  return (
    <div>
      <Seo title={"Profile Settings"} />
        {
            openSnack &&
            <Snackbar content={snackMessage} isOpen={openSnack}/>
        }
        <PageHeader currentpage="Profile" activepage="Dashboard" img="/assets/img/users/profile.png" mainpage="Profile" />
        <div className="grid grid-cols-12 sm:gap-x-6">
          <div className="col-span-12">
            <div className="box">
              <div className="box-body p-0">
                <div id="uploadlogo-1" role="tabpanel" aria-labelledby="uploadlogo-item-1">
                  <div className="box border-0 shadow-none mb-0">
                    <div className="box-header flex justify-between gap-2 items-center flex-wrap">
                      <h5 className="box-title leading-none flex"><i className="ri-export-line ltr:mr-2 rtl:ml-2"></i> Upload Logo</h5>
                      <span className="font-bold">Size {"(200 × 44)"}</span>
                    </div>
                    <div className="box-body">
                      <div>
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div className="space-y-2">
                              <label className="ti-form-label mb-0">
                                Dark Logo ({"Navbar"})
                              </label>
                              <div className="flex items-center gap-2">
                                <input type="file" name="dark" onChange={handleInputChange} ref={darkRef} placeholder="Dark Logo" accept=".png" multiple id="csvFile" className={`rounded-sm text-sm text-gray-500 dark:text-white/70 focus:outline-0 ltr:file:mr-4 rtl:file:ml-4 file:py-3 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white cursor-pointer focus-visible:outline-none`} />
                                {
                                  formData.dark &&
                                  <span className="text-xxs flex flex-wrap">
                                      <button className="text-red-400 hover:text-red-500 font-bold hover:italic cursor-pointer" onClick={()=>removeFile("dark", darkRef)}>
                                        <i className="ri-delete-bin-line"></i>
                                      </button>
                                  </span>
                                }
                              </div>
                          </div>
                          <div className="space-y-2">
                              <label className="ti-form-label mb-0">
                                Light Logo ({"Sidebar"})
                              </label>
                              <div className="flex items-center gap-2">
                                <input type="file" name="light" onChange={handleInputChange} ref={lightRef} placeholder="Light Logo" accept=".png" multiple id="csvFile" className={`rounded-sm text-sm text-gray-500 dark:text-white/70 focus:outline-0 ltr:file:mr-4 rtl:file:ml-4 file:py-3 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white cursor-pointer focus-visible:outline-none`} />
                                {
                                  formData.light &&
                                  <span className="text-xxs flex flex-wrap">
                                      <button className="text-red-400 hover:text-red-500 font-bold hover:italic cursor-pointer" onClick={()=>removeFile("light", lightRef)}>
                                        <i className="ri-delete-bin-line"></i>
                                      </button>
                                  </span>
                                }
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="box">
              <div className="box-body p-0">
                <div id="uploadlogo-1" role="tabpanel" aria-labelledby="uploadlogo-item-1">
                  <div className="box border-0 shadow-none mb-0">
                    <div className="box-header flex justify-between gap-2 items-center flex-wrap">
                      <h5 className="box-title leading-none flex"><i className="ri-youtube-line ltr:mr-2 rtl:ml-2"></i> YouTube Tutorial Links</h5>
                      <span className="flex items-center gap-1">
                        <button className="text-blue-500 hover:underline" onClick={()=>setHideYoutubeLinks(!hideYoutubeLinks)}>{hideYoutubeLinks ? 'Edit' : 'Hide'} Links</button>
                        <i className="ri-question-line text-lg cursor-pointer" title="Upload your own YouTube tutorial links for scraping tools."/>
                      </span>
                    </div>
                    {
                      !hideYoutubeLinks &&
                      <div className="box-body">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-danger italic">Note: Don’t have your own videos? Use our <strong>unbranded default YouTube</strong> videos by clicking "Set Default Links".</span>
                            <button className="ti-btn ti-btn-outline !border-indigo-500 bg-indigo-500 hover:bg-indigo-600 text-white hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10" onClick={handleDefaultLinks}>
                              Set Default Links
                            </button>
                          </div>
                          <div className="grid lg:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="ti-form-label mb-0 capitalize flex justify-between items-center gap-2">
                                YouTube Channel
                                <button className="text-blue-500 hover:underline" onClick={()=>watchPreviewVideo(youtubeChannel)} title="Visit Channel">Preview URL</button>
                              </label>
                              <input type="text" name={"YouTube Channel"} value={youtubeChannel} onChange={handleYoutubeLinkChange} className={`my-auto ti-form-input ${!youtubeChannel && "bg-gray-100"}`} placeholder={youtubeChannel} />
                            </div>
                            {
                              youtubeLinks.map(({toolName, value, placeholder}, ind)=>(
                                <div className="space-y-2" key={ind}>
                                  <label className="ti-form-label mb-0 capitalize flex justify-between items-center gap-2">
                                    {toolName}
                                    <button className="text-blue-500 hover:underline" onClick={()=>watchPreviewVideo(value)} title={`Watch ${toolName} video before saving`}>Preview URL</button>
                                  </label>
                                  <input type="text" name={toolName} value={value} onChange={handleYoutubeLinkChange} className={`my-auto ti-form-input ${!value && "bg-gray-100"}`} placeholder={placeholder} />
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="box">
              <div className="box-body p-0">
                <div id="uploadlogo-1" role="tabpanel" aria-labelledby="uploadlogo-item-1">
                  <div className="box border-0 shadow-none mb-0">
                    <div className="box-header flex justify-between gap-2 items-center flex-wrap">
                      <h5 className="box-title leading-none flex"><i className="ri-facebook-fill ltr:mr-2 rtl:ml-2"></i> Social Media Links</h5>
                      <span className="flex items-center gap-1">
                        <button className="text-blue-500 hover:underline" onClick={()=>setSocialLinks(!hideSocialLinks)}>{hideSocialLinks ? 'Edit' : 'Hide'} Links</button>
                        <i className="ri-question-line text-lg cursor-pointer" title="Upload Social Media Links."/>
                      </span>
                    </div>
                    {
                      !hideSocialLinks &&
                      <div className="box-body">
                        <div>
                          <div className="grid lg:grid-cols-2 gap-6">
                            {
                              socialMediaLinks.map(({mediaName, value, placeholder}, ind)=>(
                                <div className="space-y-2" key={ind}>
                                  <label className="ti-form-label mb-0 capitalize flex justify-between items-center gap-2">
                                    {mediaName} Profile
                                    <button className="text-blue-500 hover:underline" onClick={()=>watchPreviewVideo(value)} title={`Watch ${mediaName} video before saving`}>Preview URL</button>
                                  </label>
                                  <input type="text" name={mediaName} value={value} onChange={handleSocialLinkChange} className={`my-auto ti-form-input ${!value && "bg-gray-100"}`} placeholder={placeholder} />
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                            <input type="tel" className="my-auto capitalize ti-form-input disabled:bg-gray-100 disabled:cursor-not-allowed" ref={phoneRef} name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91123456789" />
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
                            <label className="ti-form-label mb-0">Company Name</label>
                            <input type="text" className="my-auto capitalize ti-form-input disabled:bg-gray-100 disabled:cursor-not-allowed" value={formData.company} name="company" onChange={handleInputChange}  placeholder="Ex. XYZ Pvt. Ltd." />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Company Registered</label>
                            <Select classNamePrefix='react-select' id='react-select-3-live-region' value={formData.company_year} options={years} placeholder='Select Year' onChange={handleYear} />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Address</label>
                            <textarea rows={1} type="text" name="address" value={formData.address} onChange={handleInputChange} className="my-auto capitalize ti-form-input disabled:bg-gray-100 disabled:cursor-not-allowed" placeholder="Ex. Street address, city, state ZIP"  />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0 capitalize flex justify-between items-center gap-2">
                              <span>
                                Product URL{" "}
                                <i className="ri-question-line cursor-pointer font-bold hover:font-normal" title="Provide a URL where the user can download the product file."/>
                              </span>
                              <button className="text-blue-500 hover:underline" onClick={()=>watchPreviewVideo(formData.productUrl)} title="Visit Product URL">Preview URL</button>
                            </label>
                            <input type="text" name="productUrl" value={formData.productUrl} onChange={handleInputChange} className="my-auto ti-form-input disabled:bg-gray-100 disabled:cursor-not-allowed" placeholder="https://drive.google.com/drive/u/1/folders/1seb7VCWi662S0XlvK2rrOcldQQ7R1Iu6"  />
                          </div>
                        </div>
                        {/* <div className="my-5">
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Address</label>
                            <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="my-auto capitalize ti-form-input disabled:bg-gray-100 disabled:cursor-not-allowed" placeholder="Ex. Street address, city, state ZIP"  />
                          </div>
                        </div> */}
                        <div className="my-5 grid lg:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">City</label>
                            <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="my-auto capitalize ti-form-input disabled:bg-gray-100 disabled:cursor-not-allowed" placeholder="Enter city"  />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Country</label>
                            <Select classNamePrefix='react-select' id='react-select-3-live-region' className="capitalize" value={formData.country} options={countries} placeholder='Choose Country' onChange={handleQueryChange} />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">State <span className="text-xs">{"(Optional)"}</span></label>
                            <input type="text" name="state" value={formData.state} onChange={handleInputChange} className="my-auto capitalize ti-form-input disabled:bg-gray-100 disabled:cursor-not-allowed" placeholder="Enter state"  />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Pincode <span className="text-xs">{"(Optional)"}</span></label>
                            <input type="number" name="pin" value={formData.pin} onChange={handleInputChange} className="my-auto capitalize ti-form-input disabled:bg-gray-100 disabled:cursor-not-allowed" placeholder="Enter pincode"  />
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
              <div className="box-footer text-end space-x-3 rtl:space-x-reverse flex gap-2 items-center justify-between flex-wrap">
                {
                  msg &&
                  <p className="font-bold italic">{msg}</p>
                }
                <div className="ml-auto">
                  <button onClick={handleSubmit} className={`ti-btn m-0 ${(isLoading) ? "bg-primary text-white cursor-not-allowed opacity-60" : "ti-btn-soft-primary"}`} disabled={isLoading}>
                    <i className="ri-save-2-line"></i> 
                    {
                      isLoading ? 
                      "Saving...": "Save"
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Profile;
