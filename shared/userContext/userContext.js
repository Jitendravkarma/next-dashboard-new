import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Cookies from 'js-cookie';
import { getUserData } from "../apis/api";
const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);
export const UserProvider = ({ children }) => {

  const [isVerfified, setIsVerified] = useState(true); // Initialize with false
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Initialize with false
  const [isAdmin, setIsAdmin] = useState(false);
  const [verify, setVerify] = useState(false);
  const [snackMessage, setSnackMessage] = useState({message: "", bg: "", txt: ""});
  const [iconPing, setIconPing] = useState({url: false, email: false, phone: false, record: false});
  const [isActivated, setIsActivated] = useState(false); // Initialize with false
  const [openSnack, setOpenSnack] = useState(false); // Initialize with false
  const [ successPop, setSuccessPop ] = useState(false)
  const [user, setUser] = useState({ email: "", auth: false });
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

  // Load user data from local storage when cOthe app starts
  useEffect(() => {
    const isUserAuthenticated = Cookies.get('authToken');
    isUserAuthenticated ? setIsAuthenticated(true) : setIsAuthenticated(false);
    const isVerified = JSON.parse(
      localStorage.getItem("isverified")
    );
    isVerified ? setIsVerified(true) : setIsVerified(false);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsAdmin(storedUser.admin);
    };

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
  const handleSignIn = (userData, verified) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
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
    const totalDataScraped = website + email + phone;
    const recordsMap = {
        "total": totalDataScraped,
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
      value={{ user, limitErr, snackMessage, handleSnackMessage, successPop, openSuccessPop, closeSuccessPop, openSnack, openSnackBar, closeSnackBar, handleLimitErr, handleSignIn, validatePhoneNumber, validateSendEmail, handleSignOut, setActivated, isAdmin, isAuthenticated, isActivated, isVerfified, page, googleData, mapData, getPostGoogleData, getPostMapData, numberOfData, setNumberOfData, queryBox, setQueryBox, queryMapBox, setQueryMapBox, net, setNetwork, tempData, setTempData, freeData, setFreeData, cls, mapAllData, saveAllMapData, googleAllData, saveAllGoogleData, dashboardRecords, addEmails, fetchUserData, userData, contactNum, handleContactNumber, handleWhatsAppNumber, handleSmsNumber, whatsAppNum, smsNum, iconPing, hanleIconPing, verify, openVerifyEmail, closeVerifyEmail }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
