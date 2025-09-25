"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { countryList } from "@/shared/data/static-content/allCountry";
const Select = dynamic(() => import("react-select"), { ssr: false });

const EnquiryFormModal = ({closePop}) => {
  const [ isSending, setIsSending ] = useState(false)
  const [ sendMsg, setSendMsg ] = useState("")
  const [isOpen, setIsOpen] = useState(true);
	const [countries, setCountries] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: {label: "+91 IND", value: "+91"},
    phone: "",
    message: "",
    country: "+91 IND"
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.name && formData.email){
      try {
        setIsSending(true)
        await axios.post('/api/send_enquiry', {enquiry_data: formData})
        setSendMsg("Enquiry send successfully!")
        window.open('/thanks', '_blank');
      } catch (error) {
        console.log(error)
        setSendMsg("Failed to send Enquiry!")
      } finally {
        setIsSending(false)
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    closePop();
  };

  const handleQueryChange = (obj)=>{
    console.log(obj)
		setFormData(cur=>({...cur, countryCode: obj, country: obj.label}))
	}

  useEffect(()=>{
    if(!isSending && sendMsg){
      setTimeout(()=>{
        setIsOpen(false);
        closePop();
        localStorage.setItem("enquiry_sent", true);
      }, 5000)
    }
  }, [isSending, sendMsg]);

  useEffect(()=>{
		const country = countryList.map(({countryCode, shortCode})=>{
			return {
				label: `+${countryCode} ${shortCode}`,
				value: `+${countryCode}`
			}
		})
		setCountries(country)
	}, [])

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      {/* Modal Box */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 relative overflow-hidden animate-slideUp">
        {/* Decorative Gradient Top Border */}
        <div className="absolute top-0 left-0 w-full h-2 bg-blue-500"></div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 hover:scale-110 transition-transform text-2xl font-bold"
        >
          &times;
        </button>

        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Heading */}
          <h2 className="text-3xl font-bold text-blue-500 text-center">
            Enquiry Now
          </h2>
          <p className="text-xs text-center mt-1 mb-6">Our representative will contact you shortly</p>

          {/* Name */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full capitalize border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <div className="flex">
              {/* Country Code Dropdown */}
              <Select classNamePrefix='react-select' id='react-select-3-live-region' className="capitalize w-36" value={formData.countryCode} options={countries} placeholder='Choose Country' onChange={handleQueryChange} />

              {/* Phone Number Input */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full border border-gray-200 rounded-r-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your requirements..."
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-blue-500 hover:bg-blue-600 text-sm text-white font-medium py-3 px-4 rounded-md"
          >
            {
              isSending ?
              "Sending enquiry...":
              "Submit Now"
            }
          </button>
          {
            sendMsg &&
            <p className={`mt-2 ${sendMsg.includes("Failed") ? "text-red-500" : "text-green-500"}`}>{sendMsg}</p>
          }
        </form>
      </div>
    </div>
  );
};

export default EnquiryFormModal;
