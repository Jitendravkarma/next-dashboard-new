"use client"
import { useEffect, memo, useState } from 'react';
import countryList from './Country';
import { useUserContext } from '@/shared/userContext/userContext';
import Link from 'next/link';
import { Download } from './DownloadBtn';

const Logo = ()=>{
  return(
    <Link href="/">
      <img src={"/assets/img/brand-logos/toggle-logo.png"} className='mx-auto'/>
    </Link>
  )
}

const HowtoUse = ()=>{
  return(
      <div className='hidden md:block'>
          <p className="text-red-400 text-xs -mt-2 mb-5">
              <span className="font-semibold">Note:</span> Link your phone device to your PC to manage calls & text msg.
          </p>
          <div className="mt-4">
              <h3 className="text-sm text-gray-700 text-center italic">How to link device?</h3>
              <div className="flex justify-center gap-4 mt-4">
                  <Link 
                      href={"https://www.youtube.com/watch?v=8qe_olpV0KI"}
                      target='_blank'
                      className="px-3 py-2 text-sm text-center inline-flex items-center text-red-500 rounded-md hover:bg-red-600 hover:text-white gap-2 transition-all duration-300 ease-in-out" 
                      title="Watch video tutorial"
                  >
                      <i className="ri-youtube-fill"></i>
                      Watch video
                      <i className="ri-arrow-right-s-line"></i>
                  </Link>
                  <div className="border-r-2 border-red-200"/>
                  <Link 
                      href={"https://www.microsoft.com/en-in/windows/sync-across-your-devices?msockid=2236564d1dbd68f81f7b43791cae69e5"}
                      target='_blank'
                      className="px-3 py-2 text-sm text-center inline-flex items-center border border-transparent hover:border-gray-700 rounded-md gap-2 transition-all duration-300 ease-in-out" 
                      title="Read the official docs"
                  >
                      <i className="ri-file-text-line"></i>
                      Read Docs
                      <i className="ri-arrow-right-s-line"></i>
                  </Link>
              </div>
          </div>
      </div>
  )
}

const validatePhoneNum = (number, url, countryCode, message)=>{
  if(!countryCode){
      alert(`Please select country!`);
  }
  else {
      const filterCountry = countryList.find(cnt=>cnt.countryCode === countryCode);
      if(filterCountry.diffReg){
          const validatePhone = number.match(filterCountry.diffReg)
          if(validatePhone && validatePhone[1]){
              let a = document.createElement("a");
              a.href = `${url}${url === "sms:" ? "" : countryCode}${validatePhone[1]}${url === "sms:" ? "" : `?text=${encodeURIComponent(message)}`}`;
              document.body.appendChild(a);
              a.target="_blank"
              a.click();
              document.body.removeChild(a);
          }
          else {
              alert(`This is not a valid phone number for the ${filterCountry.cnt} country.`)
          }
      }
  }
}

const ContactBox = memo(({number, code=""}) => {
    const [countryCode, setCountryCode] = useState(code);
    const { contactNum, handleContactNumber } = useUserContext()
    const closeWhatsAppBox = ()=>{
        handleContactNumber("")
    }
    const checkCountryCode = ()=>{
        if(!countryCode){
            alert(`Please select country!`)
        }
    }
    // Close the popup when ESC key is pressed
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          handleContactNumber("");
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  
    const handleOutsideClick = (e) => {
      if (e.target.id === 'popup-container') {
        handleContactNumber("");
      }
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div
            id="popup-container"
            onClick={handleOutsideClick}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-md shadow-lg p-6 max-w-md w-full relative">
            <div className="relative px-4 py-10">
                <div className="max-w-lg mx-auto">
                    <div className="flex items-center space-x-3">
                        <div className="h-14 w-14 bg-blue-100 rounded-full flex flex-shrink-0 justify-center items-center  text-blue-500 text-2xl font-mono shadow-md hover:shadow-inner">
                          <i className="ri-phone-line"></i>
                        </div>
                        <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                            <h2 className="leading-relaxed text-blue-500">Contact Now!</h2>
                            <p className="text-sm text-gray-500 font-normal leading-relaxed">Make Direct Calls and Boost Your Business.</p>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-5 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="flex flex-col">
                                <label className="leading-loose text-sm">Call To:</label>
                                <span className='text-xs flex gap-0 item-center border rounded-md overflow-hidden'>
                                    <select name="country" id="country" value={countryCode} className='text-xs focus:border-none focus:outline-none px-2 w-32' onChange={(e)=>setCountryCode(e.target.value)}>
                                        <option value="">Select Country</option>
                                        {
                                            countryList.map(({cnt, shortCode, countryCode}, ind)=>(
                                                <option key={ind} value={countryCode} title={cnt}>{shortCode} (+{countryCode})</option>
                                            ))
                                        }
                                    </select>
                                    <input type="text" className="px-4 py-2 focus:ring-gray-500 focus:border-gray-900 w-full text-sm border-gray-300 focus:outline-none text-gray-600" 
                                    value={`${countryCode ? `+${countryCode}-` : "+??-"}${number}`} disabled={true}/>
                                </span>
                            </div>
                            <HowtoUse/>
                        </div>
                        <div className="pt-4 flex items-center space-x-4">
                            <button className="flex justify-center border border-transparent items-center gap-1 hover:gap-3 w-full hover:border hover:border-red-600 duration-200 text-gray-900 px-4 py-3 rounded-md focus:outline-none" onClick={closeWhatsAppBox}>
                              <i className="ri-close-line"></i> Cancel
                            </button>
                            {
                                !countryCode ? 
                                <button onClick={checkCountryCode} className="bg-gradient-to-r from-blue-300 to-blue-500 flex justify-center gap-1 hover:gap-3 duration-200 items-center w-full text-white px-4 py-3 rounded-md focus:outline-none cursor-pointer">
                                    Call <i className="ri-arrow-right-line"></i>
                                </button>
                                :
                                <Link href={`tel:+${countryCode}${contactNum}`} target='_blank' className="bg-gradient-to-r from-blue-300 to-blue-500 flex justify-center gap-1 hover:gap-3 duration-200 items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                                    Call <i className="ri-arrow-right-line"></i>
                                </Link>
                            }
                        </div>
                    </div>                            
                </div>
            </div>
          </div>
        </div>
      </div>
    );
})

const SmsBox = memo(({number, code=""}) => {
  const [countryCode, setCountryCode] = useState(code);
  const { handleSmsNumber } = useUserContext()
  const closeWhatsAppBox = ()=>{
      handleSmsNumber("")
  }
  const checkCountryCode = (e)=>{
      e.preventDefault();
      validatePhoneNum(number, "sms:", countryCode)
  }
  // Close the popup when ESC key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleSmsNumber("");
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'popup-container') {
      handleSmsNumber("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
          id="popup-container"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-md shadow-lg p-6 max-w-md w-full relative">
          <div className="relative px-4 py-10">
              <div className="max-w-lg mx-auto">
                  <div className="flex items-center space-x-3">
                      <div className="h-14 w-14 bg-slate-400 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono shadow-md hover:shadow-inner">
                        <i className="ri-mail-line"></i>
                      </div>
                      <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                          <h2 className="leading-relaxed text-slate-400">Send SMS!</h2>
                          <p className="text-sm text-gray-500 font-normal leading-relaxed">Send instant messages and grow your bussiness.</p>
                      </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="py-5 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                          <div className="flex flex-col">
                              <label className="leading-loose text-sm">Send To:</label>
                              <span className='text-xs flex gap-0 item-center border rounded-md overflow-hidden'>
                                  <select name="country" id="country" value={countryCode} className='text-xs focus:border-none focus:outline-none px-2 w-32' onChange={(e)=>setCountryCode(e.target.value)}>
                                      <option value="">Select Country</option>
                                      {
                                          countryList.map(({cnt, shortCode, countryCode}, ind)=>(
                                              <option key={ind} value={countryCode} title={cnt}>{shortCode} (+{countryCode})</option>
                                          ))
                                      }
                                  </select>
                                  <input type="text" className="px-4 py-2 focus:ring-gray-500 focus:border-gray-900 w-full text-sm border-gray-300 focus:outline-none text-gray-600" 
                                  value={`${countryCode ? `+${countryCode}-` : "+??-"}${number}`} disabled={true}/>
                              </span>
                          </div>
                          <HowtoUse/>
                      </div>
                      <div className="pt-4 flex items-center space-x-4">
                          <button className="flex justify-center border border-transparent items-center gap-1 hover:gap-3 w-full hover:border hover:border-red-600 duration-200 text-gray-900 px-4 py-3 rounded-md focus:outline-none" onClick={closeWhatsAppBox}>
                            <i className="ri-close-line"></i> Cancel
                          </button>
                          <button onClick={checkCountryCode} target='_blank' className="bg-gradient-to-r from-slate-400 to-slate-400 flex justify-center gap-1 hover:gap-3 duration-200 items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                              Send <i className="ri-arrow-right-line"></i>
                          </button>
                      </div>
                  </div>                            
              </div>
          </div>
        </div>
      </div>
    </div>
  );
})

const WhatsappBox = memo(({number, code=""}) => {
    const [whatsAppMsg, setWhatsAppMsg] = useState("");
    const [countryCode, setCountryCode] = useState(code);
    const { handleWhatsAppNumber } = useUserContext()
    const closeWhatsAppBox = ()=>{
        handleWhatsAppNumber("")
    }
    const checkCountryCode = (e)=>{
        e.preventDefault();
        validatePhoneNum(number, "https://wa.me/", countryCode, whatsAppMsg)
    }
  // Close the popup when ESC key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleWhatsAppNumber("");
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'popup-container') {
      handleWhatsAppNumber("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
          id="popup-container"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-md shadow-lg p-6 max-w-md w-full relative">
          <div className="relative px-4 py-10">
              <div className="max-w-lg mx-auto">
                  <div className="flex items-center space-x-3">
                      <div className="h-14 w-14 bg-green-100 rounded-full flex flex-shrink-0 justify-center items-center text-green-600 text-2xl font-mono shadow-md hover:shadow-inner">
                        <i className="ri-whatsapp-fill"></i>
                      </div>
                      <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                          <h2 className="leading-relaxed text-green-600">What'sApp Now!</h2>
                          <p className="text-sm text-gray-500 font-normal leading-relaxed">Send sms on whatsapp and grow your bussiness.</p>
                      </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                      <div className="py-5 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                          <div className="flex flex-col">
                              <label className="leading-loose text-sm">Send To:</label>
                              <span className='text-xs flex gap-0 item-center border rounded-md overflow-hidden'>
                                  <select name="country" id="country" value={countryCode} className='text-xs focus:border-none focus:outline-none px-2 w-32' onChange={(e)=>setCountryCode(e.target.value)}>
                                      <option value="">Select Country</option>
                                      {
                                          countryList.map(({cnt, shortCode, countryCode}, ind)=>(
                                              <option key={ind} value={countryCode} title={cnt}>{shortCode} (+{countryCode})</option>
                                          ))
                                      }
                                  </select>
                                  <input type="text" className="px-4 py-2 focus:ring-gray-500 focus:border-gray-900 w-full text-sm border-gray-300 focus:outline-none text-gray-600" 
                                  value={`${countryCode ? `+${countryCode}-` : "+??-"}${number}`} disabled={true}/>
                              </span>
                          </div>
                          
                          <div className="flex flex-col">
                              <label className="leading-loose text-sm">Your Message:</label>
                              <div className="relative focus-within:text-gray-600 text-gray-400">
                              <textarea type="text" value={whatsAppMsg} onChange={(e)=>setWhatsAppMsg(e.target.value)} className="px-2 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Type your message"/>
                              </div>
                              <p className='text-red-500 text-xs mt-1'>Please log in to <Link href={"https://web.whatsapp.com/"} target='_blank' className='font-bold underline hover:italic' title={`Click for What'sApp login`}>Web WhatsApp</Link> before sending messages.</p>
                          </div>
                      </div>
                      <div className="pt-4 flex items-center space-x-4">
                          <button className="flex justify-center border border-transparent items-center gap-1 hover:gap-3 w-full hover:border hover:border-red-600 duration-200 text-gray-900 px-4 py-3 rounded-md focus:outline-none" onClick={closeWhatsAppBox}>
                            <i className="ri-close-line"></i> Cancel
                          </button>
                          <button onClick={checkCountryCode} target='_blank' className="bg-gradient-to-r from-green-300 to-green-500 flex justify-center gap-1 hover:gap-3 duration-200 items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                              Send <i className="ri-arrow-right-line"></i>
                          </button>
                      </div>
                  </div>                            
              </div>
          </div>
        </div>
      </div>
    </div>
  );
})

const EmailBox = memo(({closeModel, icon="ri-sparkling-line", message="Data Extraction Completed", numberOfData, additionalData=false}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModel("");
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'popup-container') {
      closeModel("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
          id="popup-container"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-md shadow-lg p-6 max-w-md w-full relative">
          <div className="modal-content py-4 text-left px-6">
              <div className="modal-header">
              <button
                  className="modal-close float-right"
                  onClick={closeModel}
              >
                  <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  >
                  <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                  </svg>
              </button>
              </div>
              {/* Modal Body */}
              <div className="modal-body pt-4">
                <div className="flex flex-col items-center justify-center pt:mt-0 ">
                  <div className="w-full max-w-xl p-6 sm:py-4 sm:px-8">
                    <h1 className="text-center">
                      <i className={`${icon} mt-4 mr-1 text-6xl text-blue-600`}/>
                    </h1>
                    <div className='mt-5'>
                        <h2 className='text-center text-2xl font-bold text-gray-900 mb-4'>
                            New Data Added!
                        </h2>
                        <div className='flex gap-6 justify-center items-center'>
                            <div className='text-lg py-2 px-4 text-center rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transform transition-all'>
                            {/* {numberOfData.email} {" "} Emails */}
                            0 Emails
                            </div>
                            <div className='text-lg py-2 px-4 text-center rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transform transition-all'>
                            {/* {numberOfData.phone} {" "} Phone */}
                            0 Phone
                            </div>
                        </div>
                        </div>
                        {additionalData && <h4 className='my-5 text-center text-lg'>🥳And also extracted some more data👍</h4>}

                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
})

const LimitReachedBox = memo(({message="You have reached the limits of the free plan. Please upgrade your plan to continue using this service.", setIsModal, isModal}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModel("");
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'popup-container') {
      closeModel("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
          id="popup-container"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-md shadow-lg p-6 max-w-xl w-full relative">
              <button
                  onClick={() => setIsModal(!isModal)}
                  type="button"
                  className="absolute top-4 right-2 text-gray-400 bg-transparent hover-bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white"
                  data-modal-hide="defaultModal"
              >
                  <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                  >
                      <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                  </svg>
                  <span className="sr-only">Close modal</span>
              </button>
              {/* Modal Body */}
              <div className="modal-body pt-4">
                  <div className="flex flex-col items-center justify-center px-6 py-4  pt:mt-0 ">
                      <div className="w-full max-w-xl p-6 sm:p-8">
                          <Logo/>
                          
                          <h2 className="text-xl mt-4 text-center font-bold text-gray-900">
                              "{message}"
                          </h2>

                          <div className="text-center mt-5">
                              <Link
                                  target="_blank"
                                  href="https://codecanyon.net/item/google-map-scraper-pro/25283251"
                                  className="shadow-md hover:shadow-lg px-5 py-2 text-md text-center inline-flex items-center text-white bg-secondary rounded-sm hover:bg-secondary"
                              >
                                  Upgrade Now
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
      </div>
    </div>
  );
})

const WhoisDownloadBox = memo(({closeModel}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModel("");
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'popup-container') {
      closeModel("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
          id="popup-container"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-md shadow-lg px-6 py-10 max-w-xl w-full relative">
              <button
                  type="button"
                  onClick={()=>closeModel("")}
                  className="absolute top-4 right-2 text-gray-400 bg-transparent hover-bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white"
                  data-modal-hide="defaultModal"
              >
                  <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                  >
                      <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                  </svg>
                  <span className="sr-only">Close modal</span>
              </button>
              {/* Modal Body */}
              <div className="modal-body pt-4">
                  <div className="flex flex-col items-center justify-center px-6 py-4  pt:mt-0 ">
                      <div className="w-full max-w-xl">
                          <Logo/>

                          <h2 className="text-xl mt-4 text-center font-bold text-gray-900">
                            Your download limit has been reached. Upgrade to a paid plan for unlimited downloads!
                          </h2>

                          <div className="text-center mt-5">
                              <Link
                                  target="_blank"
                                  href="https://codecanyon.net/item/google-map-scraper-pro/25283251"
                                  className="shadow-md hover:shadow-lg px-5 py-2 text-md text-center inline-flex items-center text-white bg-secondary rounded-sm hover:bg-secondary"
                              >
                                  Upgrade Now
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
      </div>
    </div>
  );
})

const DownloadBox = memo(({csvHeaders, data, fileName, closeModel}) => {
  const [ freeData, setFreeData ] = useState(data)
  useEffect(() => {
    const filterData = data.slice(0, 50);
    setFreeData(filterData)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'popup-container') {
      closeModel();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
          id="popup-container"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-md shadow-lg p-6 py-10 max-w-xl w-full relative">
          <button
              onClick={closeModel}
              type="button"
              className="absolute top-4 right-2 text-gray-400 bg-transparent hover-bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white"
              data-modal-hide="defaultModal"
          >
              <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
              >
                  <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
              </svg>
              <span className="sr-only">Close modal</span>
          </button>
          {/* Modal Body */}
          <div className="modal-body py-4">
              <div className="flex flex-col items-center justify-center">
                  <div className="w-full max-w-xl">
                      <Logo/>

                      <h2 className="text-xl mt-8 text-center font-bold text-gray-900">
                      Your free trial lets you download 50 records, <br /> Upgrade for more. {" "}
                      </h2>

                      <div className="flex gap-5 justify-center items-center mt-6">                                    
                          <Download button_name={"Download Free"} data={freeData} csvHeaders={csvHeaders} fileName={fileName} customCls={"shadow-md hover:shadow-lg px-5 py-3 text-md font-bold text-center gap-2 inline-flex items-center text-white bg-blue-600 rounded-sm hover:bg-blue-800"}/>

                          <Link
                              target="_blank"
                              href="https://codecanyon.net/item/google-map-scraper-pro/25283251"
                              className="shadow-md hover:shadow-lg px-5 py-3 text-md font-bold text-center inline-flex gap-2 items-center text-white bg-blue-600 rounded-sm hover:bg-blue-800"
                          >
                              Download Pro 
                              <i className="ri-sparkling-fill"></i>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
})

export { ContactBox, SmsBox, WhatsappBox, EmailBox, LimitReachedBox, WhoisDownloadBox, DownloadBox }