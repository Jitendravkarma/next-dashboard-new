"use client"
import { useUserContext } from '@/shared/userContext/userContext'
import React from 'react'
import countryList from './Country'

const ContactVia = ({contact}) => {
    const { phone, email, customNum=false } = contact
    const { validatePhoneNumber, validateSendEmail } = useUserContext();
    const convertAndReturnNum = (type) => {
        validatePhoneNumber(phone, customNum, countryList, type)
    };

    const sendEmail = ()=>{
        validateSendEmail(email)
    }

    return (
        <div className="flex flex-wrap gap-2">
            <button disabled={phone === "N/A"} onClick={()=>convertAndReturnNum("phone")} title={phone === "N/A" ? "No phone number":"Click for Call"}>
                <i className={`ri-phone-line text-lg ${phone === "N/A" ? "bg-indigo-100 cursor-no-drop hover:bg-indigo-200" : "hover:text-white  hover:bg-indigo-500 bg-primary/10"} text-blue-500 leading-none p-2 rounded-full bg-gray-100 dark:bg-bodybg`}></i>
            </button>
            
            <button disabled={phone === "N/A"} onClick={()=>convertAndReturnNum("whatsapp")} title={phone === "N/A" ? "No phone number":"Click for WhatsApp"}>
                <i className={`ri-whatsapp-line text-lg ${phone === "N/A" ? "bg-indigo-100 cursor-no-drop hover:bg-indigo-200" : "hover:text-white  hover:bg-indigo-500 bg-primary/10"} text-green-500 leading-none p-2 rounded-full bg-gray-100 dark:bg-bodybg`}></i>
            </button>
            
            <button disabled={phone === "N/A"} onClick={()=>convertAndReturnNum("sms")} title={phone === "N/A" ? "No phone number":"Click for Text Message"}>
                <i className={`ri-message-2-line text-lg ${phone === "N/A" ? "bg-indigo-100 cursor-no-drop hover:bg-indigo-200" : "hover:text-white  hover:bg-indigo-500 bg-primary/10"} text-gray-500 leading-none p-2 rounded-full bg-gray-100 dark:bg-bodybg`}></i>
            </button>
            
            <button disabled={email === "N/A"} onClick={()=>sendEmail("email")} title={email === "N/A" ? "No email id":"Click for Email"}>
                <i className={`ri-mail-line text-lg ${email === "N/A" ? "bg-indigo-100 cursor-no-drop hover:bg-indigo-200" : "hover:text-white  hover:bg-indigo-500 bg-primary/10"} text-red-500 leading-none p-2 rounded-full bg-gray-100 dark:bg-bodybg`}></i>
            </button>
        </div>
    )
}

export default ContactVia