"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

const EnquiryFormModal = ({closePop}) => {
  const [ isSending, setIsSending ] = useState(false)
  const [ sendMsg, setSendMsg ] = useState("")
  const [isOpen, setIsOpen] = useState(true);
  const countryList = [
    { "country": "AFG", "code": "+93" },
    { "country": "IND", "code": "+91" },
    { "country": "ALB", "code": "+355" },
    { "country": "DZA", "code": "+213" },
    { "country": "AND", "code": "+376" },
    { "country": "AGO", "code": "+244" },
    { "country": "ARG", "code": "+54" },
    { "country": "ARM", "code": "+374" },
    { "country": "ABW", "code": "+297" },
    { "country": "AUS", "code": "+61" },
    { "country": "AUT", "code": "+43" },
    { "country": "AZE", "code": "+994" },
    { "country": "BHR", "code": "+973" },
    { "country": "BGD", "code": "+880" },
    { "country": "BLR", "code": "+375" },
    { "country": "BEL", "code": "+32" },
    { "country": "BLZ", "code": "+501" },
    { "country": "BEN", "code": "+229" },
    { "country": "BTN", "code": "+975" },
    { "country": "BOL", "code": "+591" },
    { "country": "BIH", "code": "+387" },
    { "country": "BWA", "code": "+267" },
    { "country": "BRA", "code": "+55" },
    { "country": "BRN", "code": "+673" },
    { "country": "BGR", "code": "+359" },
    { "country": "BFA", "code": "+226" },
    { "country": "BDI", "code": "+257" },
    { "country": "KHM", "code": "+855" },
    { "country": "CMR", "code": "+237" },
    { "country": "CAN", "code": "+1" },
    { "country": "CPV", "code": "+238" },
    { "country": "CAF", "code": "+236" },
    { "country": "TCD", "code": "+235" },
    { "country": "CHL", "code": "+56" },
    { "country": "CHN", "code": "+86" },
    { "country": "COL", "code": "+57" },
    { "country": "CRI", "code": "+506" },
    { "country": "CIV", "code": "+225" },
    { "country": "HRV", "code": "+385" },
    { "country": "CUB", "code": "+53" },
    { "country": "CYP", "code": "+357" },
    { "country": "CZE", "code": "+420" },
    { "country": "COD", "code": "+243" },
    { "country": "COG", "code": "+242" },
    { "country": "DNK", "code": "+45" },
    { "country": "DJI", "code": "+253" },
    { "country": "ECU", "code": "+593" },
    { "country": "EGY", "code": "+20" },
    { "country": "SLV", "code": "+503" },
    { "country": "GNQ", "code": "+240" },
    { "country": "ERI", "code": "+291" },
    { "country": "EST", "code": "+372" },
    { "country": "SWZ", "code": "+268" },
    { "country": "ETH", "code": "+251" },
    { "country": "FJI", "code": "+679" },
    { "country": "FIN", "code": "+358" },
    { "country": "FRA", "code": "+33" },
    { "country": "GAB", "code": "+241" },
    { "country": "GMB", "code": "+220" },
    { "country": "GEO", "code": "+995" },
    { "country": "DEU", "code": "+49" },
    { "country": "GHA", "code": "+233" },
    { "country": "GIB", "code": "+350" },
    { "country": "GRC", "code": "+30" },
    { "country": "GRL", "code": "+299" },
    { "country": "GTM", "code": "+502" },
    { "country": "GIN", "code": "+224" },
    { "country": "GNB", "code": "+245" },
    { "country": "GUY", "code": "+592" },
    { "country": "HTI", "code": "+509" },
    { "country": "HND", "code": "+504" },
    { "country": "HKG", "code": "+852" },
    { "country": "HUN", "code": "+36" },
    { "country": "ISL", "code": "+354" },
    { "country": "IDN", "code": "+62" },
    { "country": "IRN", "code": "+98" },
    { "country": "IRQ", "code": "+964" },
    { "country": "IRL", "code": "+353" },
    { "country": "ISR", "code": "+972" },
    { "country": "ITA", "code": "+39" },
    { "country": "JPN", "code": "+81" },
    { "country": "JOR", "code": "+962" },
    { "country": "KAZ", "code": "+7" },
    { "country": "KEN", "code": "+254" },
    { "country": "KIR", "code": "+686" },
    { "country": "KWT", "code": "+965" },
    { "country": "KGZ", "code": "+996" },
    { "country": "LAO", "code": "+856" },
    { "country": "LVA", "code": "+371" },
    { "country": "LBN", "code": "+961" },
    { "country": "LSO", "code": "+266" },
    { "country": "LBR", "code": "+231" },
    { "country": "LBY", "code": "+218" },
    { "country": "LIE", "code": "+423" },
    { "country": "LTU", "code": "+370" },
    { "country": "LUX", "code": "+352" },
    { "country": "MAC", "code": "+853" },
    { "country": "MDG", "code": "+261" },
    { "country": "MWI", "code": "+265" },
    { "country": "MYS", "code": "+60" },
    { "country": "MDV", "code": "+960" },
    { "country": "MLI", "code": "+223" },
    { "country": "MLT", "code": "+356" },
    { "country": "MHL", "code": "+692" },
    { "country": "MRT", "code": "+222" },
    { "country": "MUS", "code": "+230" },
    { "country": "MEX", "code": "+52" },
    { "country": "FSM", "code": "+691" },
    { "country": "MDA", "code": "+373" },
    { "country": "MCO", "code": "+377" },
    { "country": "MNG", "code": "+976" },
    { "country": "MNE", "code": "+382" },
    { "country": "MAR", "code": "+212" },
    { "country": "MOZ", "code": "+258" },
    { "country": "MMR", "code": "+95" },
    { "country": "NAM", "code": "+264" },
    { "country": "NRU", "code": "+674" },
    { "country": "NPL", "code": "+977" },
    { "country": "NLD", "code": "+31" },
    { "country": "NZL", "code": "+64" },
    { "country": "NIC", "code": "+505" },
    { "country": "NER", "code": "+227" },
    { "country": "NGA", "code": "+234" },
    { "country": "PRK", "code": "+850" },
    { "country": "NOR", "code": "+47" },
    { "country": "OMN", "code": "+968" },
    { "country": "PAK", "code": "+92" },
    { "country": "PLW", "code": "+680" },
    { "country": "PAN", "code": "+507" },
    { "country": "PNG", "code": "+675" },
    { "country": "PRY", "code": "+595" },
    { "country": "PER", "code": "+51" },
    { "country": "PHL", "code": "+63" },
    { "country": "POL", "code": "+48" },
    { "country": "PRT", "code": "+351" },
    { "country": "QAT", "code": "+974" },
    { "country": "ROU", "code": "+40" },
    { "country": "RUS", "code": "+7" },
    { "country": "RWA", "code": "+250" },
    { "country": "WSM", "code": "+685" },
    { "country": "SMR", "code": "+378" },
    { "country": "STP", "code": "+239" },
    { "country": "SAU", "code": "+966" },
    { "country": "SEN", "code": "+221" },
    { "country": "SRB", "code": "+381" },
    { "country": "SYC", "code": "+248" },
    { "country": "SLE", "code": "+232" },
    { "country": "SGP", "code": "+65" },
    { "country": "SVK", "code": "+421" },
    { "country": "SVN", "code": "+386" },
    { "country": "SLB", "code": "+677" },
    { "country": "SOM", "code": "+252" },
    { "country": "ZAF", "code": "+27" },
    { "country": "SSD", "code": "+211" },
    { "country": "ESP", "code": "+34" },
    { "country": "LKA", "code": "+94" },
    { "country": "SDN", "code": "+249" },
    { "country": "SUR", "code": "+597" },
    { "country": "SWE", "code": "+46" },
    { "country": "CHE", "code": "+41" },
    { "country": "SYR", "code": "+963" },
    { "country": "TJK", "code": "+992" },
    { "country": "TZA", "code": "+255" },
    { "country": "THA", "code": "+66" },
    { "country": "TLS", "code": "+670" },
    { "country": "TGO", "code": "+228" },
    { "country": "TON", "code": "+676" },
    { "country": "TUN", "code": "+216" },
    { "country": "TUR", "code": "+90" },
    { "country": "TKM", "code": "+993" },
    { "country": "TUV", "code": "+688" },
    { "country": "UGA", "code": "+256" },
    { "country": "UKR", "code": "+380" },
    { "country": "ARE", "code": "+971" },
    { "country": "GBR", "code": "+44" },
    { "country": "USA", "code": "+1" },
    { "country": "URY", "code": "+598" },
    { "country": "UZB", "code": "+998" },
    { "country": "VUT", "code": "+678" },
    { "country": "VAT", "code": "+379" },
    { "country": "VEN", "code": "+58" },
    { "country": "VNM", "code": "+84" },
    { "country": "WLF", "code": "+681" },
    { "country": "ESH", "code": "+212" },
    { "country": "YEM", "code": "+967" },
    { "country": "ZMB", "code": "+260" },
    { "country": "ZWE", "code": "+263" }
  ]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    message: "",
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

  useEffect(()=>{
    if(!isSending && sendMsg){
      setTimeout(()=>{
        setIsOpen(false);
        closePop();
        localStorage.setItem("enquiry_sent", true);
      }, 5000)
    }
  }, [isSending, sendMsg]);

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
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="w-24 border border-gray-200 rounded-l-lg text-xs px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
              >
                {
                  countryList.map((item, idx)=>(
                    <option title={item.country} key={idx} value={item.code}>{item.code}</option>
                  ))
                }
                {/* Add more as needed */}
              </select>

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
