import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Cookies from 'js-cookie';
import { getUserData } from "../apis/api";
import axios from "axios";
const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);
export const UserProvider = ({ children }) => {

  const [isVerfified, setIsVerified] = useState(true); // Initialize with false
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initialize with false
  const [isAdmin, setIsAdmin] = useState(false);
  const [verify, setVerify] = useState(false);
  const [ successPop, setSuccessPop ] = useState(false)
  const [snackMessage, setSnackMessage] = useState({message: "", bg: "", txt: ""});
  const [iconPing, setIconPing] = useState({url: false, email: false, phone: false, record: false});
  const [isActivated, setIsActivated] = useState(false); // Initialize with false
  const [openSnack, setOpenSnack] = useState(false); // Initialize with false
  const [user, setUser] = useState({ email: "", auth: false });
  const [localUser, setLocalUser] = useState({
    name: "",
    email: "",
    token: "",
    country: ""
  });
  const [ HeroContent, setHeroContent ] = useState([
    {
      text: <span>Enhance Your Marketing With  <br />Company <span className='text-blue-500 italic'>Name</span></span>,
    },
    {
      text: <span>Boost Your Business With  <br />Company <span className='text-blue-500 italic'>Name</span></span>,
    },
    {
      text: <span>Increase Your Sales With  <br />Company <span className='text-blue-500 italic'>Name</span></span>,
    },
  ]);
  const [googleData, setGoogleData] = useState([]);
  const [mapData, setMapData] = useState([]);
  const [googleAllData, setGoogleAllData] = useState([]);
  const [mapAllData, setMapAllData] = useState([]);
  const [queryBox, setQueryBox] = useState([]);
  const [queryMapBox, setQueryMapBox] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [freeData, setFreeData] = useState({gData:[], mData:[]});
  const [network, setNetwork] = useState(false);
  const [net, setNet] = useState(network);
  const [whatsAppNum, setWhatsAppNum] = useState("")
  const [smsNum, setSmsNum] = useState("")
  const [page, setPage] = useState(10)
  const [limitErr, setLimitErr] = useState("")
  const [contactNum, setContactNum] = useState("")
  const [numberOfData, setNumberOfData] = useState({
    email: 0,
    url: 0,
    phone: 0,
    mapEmail:0,
    mapUrl:0,
    mapPhone:0
  });
  const cls = useMemo(()=>({btn:"px-3 mr-2 py-2 mt-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-600 rounded-sm hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed"}),[]);
  const [ records, setRecords] = useState("");

  const handleSnackMessage = (msg, bg, txt)=>{
    setSnackMessage({message: msg, bg, txt})
  }

  const openSuccessPop = ()=>{
    setSuccessPop(true)
  }

  const closeSuccessPop = ()=>{
    setSuccessPop(false)
  }

  const openSnackBar = ()=>{
    setOpenSnack(true)
  }

  const closeSnackBar = ()=>{
    setOpenSnack(false)
  }

  const handleLimitErr = (msg)=>{
    setLimitErr(msg)
  }
  const hanleIconPing = (recordName, status)=>{
    setIconPing({...iconPing, [recordName] : status})
  }

  const handleContactNumber = (num)=>{
    setContactNum(num)
  }

  const handleSmsNumber = (num)=>{
    setSmsNum(num)
  }

  const handleWhatsAppNumber = (num)=>{
    setWhatsAppNum(num)
  }

  const getPostGoogleData = (data)=>{
    setGoogleData(data);
  }
  const getPostMapData = (data)=>{
    setMapData(data);
  }

  const saveAllGoogleData = (data)=>{
    setGoogleAllData(data);
  }

  const saveAllMapData = (data)=>{
    setMapAllData(data);
  }

  const closeVerifyEmail = useCallback(()=>{
    setVerify(false)
  },[])

  const openVerifyEmail = useCallback(()=>{
    setVerify(true)
  },[])

  function waitForInternetConnection(retryInterval = 5000) {
      return new Promise(resolve => {
        const checkConnection = () => {
        if (navigator.onLine) {
          resolve();
        } else {
          console.log('🌐 Waiting for internet...');
          setTimeout(checkConnection, retryInterval);
        }
        };
        checkConnection();
      });
  }

  const Youtube = <i className="ri-youtube-line side-menu__icon"></i>;
  const Email = <i className="ri-mail-line side-menu__icon"></i>;
  const Phone = <i className="ri-phone-line side-menu__icon"></i>;
  const [ logo, setLogo ] = useState({light: "/uploads/light.png", dark: "/uploads/dark.png"})
  const [ resellerContact, setResellerContact ] = useState([
    {
      menutitle: "support",
    },
  
    { path: `tel:`, icon: Phone, title: "Call Us", type: "link", active: false, selected: false },
  
    { path: `mailto:`, icon: Email, title: "Email Us", type: "link", active: false, selected: false },	
  ])

  const [ userProfileDetails, setUserProfileDetails ] = useState({phone: "", email: "", address: "", city: "", state: "", pin: "", country: "", company_name: "", company_year: ""})

  const [ resellerContactInfo, setResellerContactInfo ] = useState({email: "", phone: ""})
  const [ companyDetails, setCompanyDetails ] = useState({company_name: "", company_year: ""})

  const [ isLoading, setIsLoading ] = useState(false)
  const [ yt_links, setYt_Links ] = useState({
    live_scraping: "XjvB_8ytM58",
    live_data: "ml-Jwi1ktlY",
    bing: "FzhB9wRwZlA",
    google: "t_ziUplJMjc",
    mode: "qkmjSmuPhc4",
    yahoo: "w15iPuDbtBo",
    duck: "dERJQhBtSd0",
    map: "IHf_YM-Voqk",
    facebook: "S9xClhXFAu0",
    youtube: "6S46UhmaSwg",
    website_data: "FvonHQhouGI",
    directory: "6GR_rHwR-r0",
    document: "1TrNt8Szv7Y",
    image: "uGlkLHHHXSw",
    whois: "4hmndvMq1rQ",
    installation: "jLI0zULD6cw"
  })
  const [ yt_channel, setYt_Channel ] = useState("https://www.youtube.com/@designcollection6499")
  const [ DOCS, setDOCS] = useState([
    {
      menutitle: "DOCS",
    },
  
    { path: yt_channel, icon: Youtube, title: "Watch on YouTube", type: "link", active: false, selected: false },
  ]);
  const [ years, setYears ] = useState([]);
  
  useEffect(()=>{
    const getProfile = async ()=>{
      try {
        setIsLoading(true)
        const getData = await axios.post('/api/get_profile')
        const data = getData.data;
        if(data){
          // setLogo({light: data.imageLight, dark: data.imageDark})
          const newData = [
            {
              menutitle: "support",
            },
          
            { path: `tel:${data.phone[0]}`, icon: Phone, title: "Call Us", type: "link", active: false, selected: false },
          
            { path: `mailto:${data.email[0]}`, icon: Email, title: "Email Us", type: "link", active: false, selected: false },	
          ]
          if(user.email === data.email[0] && user.reseller){
            setUserProfileDetails({ phone: data.phone[0], email: data.email[0], address: data.address, city: data.city, state: data.state, pin: data.pin, country: {label: data.country, value: data.country}, company_name: data.company, company_year: {label: data.company_year, value: data.company_year}})
          }
          const ytChannel = data.youtubeChannel.filter(chn=>chn).length
          setCompanyDetails({company_name: data.company, company_year: {label: data.company_year, value: data.company_year}})
          setResellerContactInfo({phone: data.phone[0], email: data.email[0]})
          setResellerContact(newData)
          setYt_Channel(ytChannel ? data.youtubeChannel[0] : "https://www.youtube.com/@ClipCloud-m3t")
          setDOCS([
            {
              menutitle: "DOCS",
            },
          
            { path: ytChannel ? data.youtubeChannel[0] : "https://www.youtube.com/@ClipCloud-m3t", icon: Youtube, title: "Watch on YouTube", type: "link", active: false, selected: false },
          ])
          const resellerYoutubeObj = JSON.parse(data.youtubeLinks);
          const newYoutubeObj = Object.keys(resellerYoutubeObj).reduce((acc, key) => {
            acc[key] = resellerYoutubeObj[key].replace("https://www.youtube.com/watch?v=", "");
            return acc;
          }, {});
          const resellerYoutubeLen = Object.keys(newYoutubeObj).map(item=>newYoutubeObj[item]).filter(url=>url).length
          setHeroContent([
            {
              text: <span className="capitalize">Enhance Your Marketing With  <br />{data.company}</span>,
            },
            {
              text: <span className="capitalize">Boost Your Business With  <br />{data.company}</span>,
            },
            {
              text: <span className="capitalize">Increase Your Sales With  <br />{data.company}</span>,
            },
          ])
          setYt_Links(
            resellerYoutubeLen ? newYoutubeObj :
            {
              live_scraping: "Ls-FfPTmuDU",
              live_data: "QNEtI_b3zOY",
              bing: "plZ8Jgbc5Fo",
              google: "UDVS9GvCQ9c",
              mode: "guM7r-UIN-Y",
              yahoo: "rA_Uj-p7OBw",
              duck: "IsTXALXQIL4",
              map: "-gkZGKExP-4",
              facebook: "iv9bJRcsP7Y",
              youtube: "ZatCD6KfYv0",
              website_data: "hBQezVYKatw",
              directory: "xnDlalSMNdk",
              document: "UCuamwNuO2M",
              image: "B13KxuDkY98",
              whois: "_w0iMP95G-A",
              installation: "tOLGsRr9V5Q"
            }
          )
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    if(user.reseller){
      let date = new Date()
      let totalYears = []
      for(let i = 2000; i <= date.getFullYear(); i++){
        totalYears.push({ label: i, value: i})
      }
      setYears(totalYears)
    }
    getProfile()
  }, [])

  // Load user data from local storage when cOthe app starts
  useEffect(() => {
    const isUserAuthenticated = Cookies.get('authToken');
    isUserAuthenticated ? setIsAuthenticated(true) : setIsAuthenticated(false);
    const isVerified = JSON.parse(
      localStorage.getItem("isverified")
    );
    isVerified ? setIsVerified(true) : setIsVerified(false);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const local_user = JSON.parse(localStorage.getItem("local_user"));
    if (storedUser) {
      setUser(storedUser);
      setIsAdmin(storedUser.admin);
    };
    if(local_user){
      setLocalUser(local_user)
    }

    const purchaseCode = Cookies.get('purchaseCode');
    if (purchaseCode) {
      setIsActivated(true)
    }
    else {
      setIsActivated(false)
    }
    function checkOn(){
      setNet(true);
      setNetwork(true)
    }
    function checkOff(){
      setNet(false);
      setNetwork(false)
    }
    const getRecords = JSON.parse(localStorage.getItem("totalRecords"))
    if(getRecords){
      setRecords(getRecords)
    }
    window.addEventListener("online", checkOn);
    window.addEventListener("offline", checkOff);
    return ()=>{
        window.removeEventListener("online", checkOn);
        window.removeEventListener("offline", checkOff);
    }
  }, []);

  // Update user state and local storage when the user logs in
  const handleSignIn = (userData, local_user, verified) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("local_user", JSON.stringify(local_user));
    setIsAuthenticated(true); // Set authentication to true when user signs in
    localStorage.setItem("isAuthenticated", JSON.stringify(true));
    if (verified) {
      setIsVerified(true)
      localStorage.setItem("isverified", JSON.stringify(true));
      if(userData.purchase_code){
        setActivated(true);
        Cookies.set("purchaseCode", userData.purchase_code);
      }
    }
    else {
      setIsVerified(false)
      localStorage.setItem("isverified", JSON.stringify(false));
    }
  };


  // Update user state and local storage when the user logs out
  const handleSignOut = () => {
    setFreeData({gData:[], mData:[]});
    setTempData([]);
    getPostGoogleData([]);
    getPostMapData([]);
    setQueryBox([]);
    setQueryMapBox([]);
    setNumberOfData({
      email: 0,
      url: 0,
      phone: 0,
      mapEmail:0,
      mapUrl:0,
      mapPhone:0
    });
    setUser({ email: "", auth: false });
    // setIsActivated(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("isverified");
    Cookies.remove("purchaseCode");
    Cookies.remove("authToken"); // removing token
    // setIsAuthenticated(false); // Set authentication to false when user signs out
    // localStorage.setItem("isAuthenticated", JSON.stringify(false));
    // setIsVerified(false)
    // localStorage.setItem("isverified", JSON.stringify(false));
  };

  const setActivated = () => {
    setIsActivated(true)
  }
  
  const dashboardRecords = (service, exceptService, usedService, website, email, phone)=>{
    const totalUsedService = usedService;
    const recordsMap = {
        "website": website,
        "email": email,
        "phone": phone,
        [service] : totalUsedService
    };
    const getRecords = JSON.parse(localStorage.getItem("totalRecords"))
    if(getRecords){
      const updatedRecords = getRecords.map(cur=>({...cur, text: (cur.title === exceptService ? cur.text : cur.text + recordsMap[cur.title])}))
      localStorage.setItem("totalRecords", JSON.stringify(updatedRecords));
    }
  }

  const addEmails = (countEmail)=>{
    const updatedRecords = records.map(cur=>{
        if(cur.title === "Emails Scraped") {
            return {...cur, records: cur.records + countEmail}
        }
        else if(cur.title === "Searched Records"){
            return {...cur, records: cur.records + countEmail}
        }
        else {
            return cur;
        }
    })
    localStorage.setItem("totalRecords", JSON.stringify(updatedRecords));
  }

  const [userData, setUserData] = useState({
    total_users: 0,
    verified_users: 0,
    unVerified_users: 0,
    subscribed_users: 0
  });
  
  const saveData = async (data, fileName="data")=>{
    try {
      await axios.post("/api/saved", { data, fileName })
    } catch (error) {
      console.log(`e`)
    }
  }

  const manipulateUserData = (user, ind)=>{
      const { name, email, verified, purchase_code, updated_at } = user;
      return ({ id: ind+1, name, email, status: verified, register_date: updated_at.slice(0, 10), subscribed: purchase_code ? true : false });
  }

  const filterAndReturnUser = (records, condition)=>{
    return records.filter(condition).map((user, ind)=> manipulateUserData(user, ind))
  }

  const fetchUserData = async ()=>{
    const {data : {data}} = await getUserData();
    data.records.sort((a, b)=> new Date(a.updated_at) - new Date(b.updated_at))
    setUserData({
      total_users: data.records.reverse().map((user, ind)=>{
        console.log(user)
        return manipulateUserData(user, ind);
      }), 
      verified_users: filterAndReturnUser(data.records, user=> user.verified),
      unVerified_users: filterAndReturnUser(data.records, user=> !user.verified),
      subscribed_users: filterAndReturnUser(data.records, user=> user.purchase_code)
    })
  }

  const validatePhoneNumber = (phone, customNum, countries, type)=>{
    if (phone && !customNum) {
      // console.log(`loop calling`)
      // Remove spaces, dashes, and the + sign at the start if present
      const newPhone = phone.replace(/^\+|[\s-]|^0+/g, ''); 
      
      const matchedNum = countries.map(cnt=> {
          let filteredNum = newPhone.match(cnt.diffReg);
          if(filteredNum?.length && filteredNum[1]){
              return filteredNum[1]
          }
      }).filter(num=>num)

      if(matchedNum.length){
          if(type === "whatsapp"){
              handleWhatsAppNumber(matchedNum[0])
          }
          else if(type === "sms"){
              handleSmsNumber(matchedNum[0])
          }
          else {
              handleContactNumber(matchedNum[0])
          }
      }
      else {
          alert(`Invalid phone number!`)
      }
    }
    else {
        // console.log(`direct render`)
        if(type === "whatsapp"){
            handleWhatsAppNumber(phone)
        }
        else if(type === "sms"){
            handleSmsNumber(phone)
        }
        else {
            handleContactNumber(phone)
        }
    }
  }

  const validateSendEmail = (email)=>{
    if(email.includes("@") || email.includes(".com")){
      let a = document.createElement('a')
      a.href = `mailto:${email}`
      a.target = "_blank"
      a.click();
    }
    else {
        alert(`Invalid email address!`)
    }
  }

  return (
    <UserContext.Provider
      value={{ HeroContent, user, localUser, logo, years, DOCS, yt_channel, yt_links, companyDetails, resellerContact, resellerContactInfo, userProfileDetails, isLoading, saveData, limitErr, snackMessage, waitForInternetConnection, handleSnackMessage, successPop, openSuccessPop, closeSuccessPop, openSnack, openSnackBar, closeSnackBar, handleLimitErr, handleSignIn, validatePhoneNumber, validateSendEmail, handleSignOut, setActivated, isAdmin, isAuthenticated, isActivated, isVerfified, page, googleData, mapData, getPostGoogleData, getPostMapData, numberOfData, setNumberOfData, queryBox, setQueryBox, queryMapBox, setQueryMapBox, net, setNetwork, tempData, setTempData, freeData, setFreeData, cls, mapAllData, saveAllMapData, googleAllData, saveAllGoogleData, dashboardRecords, addEmails, fetchUserData, userData, contactNum, handleContactNumber, handleWhatsAppNumber, handleSmsNumber, whatsAppNum, smsNum, iconPing, hanleIconPing, verify, openVerifyEmail, closeVerifyEmail }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
