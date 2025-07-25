"use client"
import { smtp } from "@/shared/apis/api";
import Snackbar from "@/shared/layout-components/dashboard/SnackBar";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { useUserContext } from "@/shared/userContext/userContext";
import axios from "axios";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const Select = dynamic(() => import("react-select"), { ssr: false });

const Profile = () => {
  const { user, openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
  const [ isTesting, setIsTesting ] = useState(false)
  const [ isSaving, setIsSaving ] = useState(false)
  const [ testMsg, setTestMsg ] = useState("")
  const [ formData, setFormData] = useState({mail_title: "", domain_name: "", username: "", password: "", in_server: "", out_server: "", in_port: "", out_port: ""})
  const ports = {
    in_port: [
      {
        "label": "IMAP Port: 993",
        "value": "IMAP Port: 993",
      },
      {
        "label": "POP3 Port: 995",
        "value": "POP3 Port: 995",
      }
    ],
    out_port: [
      {
        "label": "SMTP Port: 465",
        "value": "SMTP Port: 465"
      },
      {
        "label": "SMTP Port: 587",
        "value": "SMTP Port: 587"
      }
    ]
  }

  const handleInputChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData(cur=>({...cur, [name]: value}))
  }

  const handleInPort = (obj)=>{
    setFormData(cur=>({...cur, in_port: obj}))
	}

  const handleOutPort = (obj)=>{
    setFormData(cur=>({...cur, out_port: obj}))
  }

  const handleTest = async ()=>{
    let validate = Object.keys(formData).filter(item=>!formData[item])
    if(validate.length){
      openSnackBar();
      handleSnackMessage("All fields are mandatory!", "danger", "text-white")
    }
    else {
      setIsTesting(true)
      setTestMsg("")
      let newFormObj = { ...formData };
      newFormObj.out_port = parseInt(newFormObj.out_port.value.match(/Port:\s*(\d+)/)[1])
      newFormObj.in_port = parseInt(newFormObj.in_port.value.match(/Port:\s*(\d+)/)[1])
      try {
        await axios.post('/api/smtp', {smtp: newFormObj})
        setTestMsg(<span><i className="ri-checkbox-fill text-success text-lg italic animate-pulse"></i> SMTP test successful. You can now save your settings.</span>)
      } catch (error) {
        setTestMsg("❌ SMTP test failed. Please check the details you entered and try again!")
      } finally {
        setIsTesting(false)
      }
    }
  }

  const handleSubmit  = async ()=>{
    setTestMsg("")
    let validate = Object.keys(formData).filter(item=>!formData[item])
    if(validate.length){
      openSnackBar();
      handleSnackMessage("All fields are mandatory!", "danger", "text-white")
    }
    else {
      try {
        setIsSaving(true)
        const resellerData = {
          redirect_domain: formData.domain_name,
          reseller_title: formData.mail_title,
          name: "My SMTP Service", 
          host: formData.out_server, 
          port: formData.out_port, 
          username: formData.username, 
          password: formData.password, 
          from_email: formData.username, 
          from_name: user.name, 
          is_active: true, 
          encryption: "tls"
        };
        
        resellerData.port = parseInt(resellerData.port.value.match(/Port:\s*(\d+)/)[1])
        const setupSMTP = await smtp(resellerData);
        // console.log(setupSMTP.data)
        setTestMsg(<span><i className="ri-checkbox-fill text-success text-lg italic animate-pulse"></i> SMTP saved successfully.</span>)
      } catch (error) {
        console.log(error)
      } finally {
        setIsSaving(false)
      }
    }
  }

  return (
    <div>
      <Seo title={"SMTP Setup"} />
        {
            openSnack &&
            <Snackbar content={snackMessage} isOpen={openSnack}/>
        }
        <PageHeader currentpage="SMTP" activepage="Reseller" img="/assets/img/users/profile.png" mainpage="SMTP" />
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12">
            <div className="box">
              <div className="box-body p-0">
                <div id="profile-settings-1" role="tabpanel" aria-labelledby="profile-settings-item-1">
                  <div className="box border-0 shadow-none mb-0">
                    <div className="box-header">
                      <h5 className="box-title leading-none flex">
                        <i className="ri-settings-3-line ltr:mr-2 rtl:ml-2"></i> 
                        Mail Client Manual Settings - Secure SSL/TLS Settings (Recommended)
                      </h5>
                    </div>
                    <div className="box-body">
                      <div>
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Domain Name</label>
                            <input type="text" className="my-auto ti-form-input" name="domain_name" onChange={handleInputChange} value={formData.domain_name} placeholder="Ex. abc.com" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Mail Heading</label>
                            <input type="text" className="my-auto ti-form-input" name="mail_title" onChange={handleInputChange} value={formData.mail_title} placeholder="Ex. Product/Company Name" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Username</label>
                            <input type="text" className="my-auto ti-form-input" name="username" onChange={handleInputChange} value={formData.username} placeholder="Ex. support@abcxyz.com" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Password</label>
                            <input type="password" className="my-auto ti-form-input" name="password" onChange={handleInputChange} value={formData.password} placeholder="•••••••••••••" />
                          </div>
                          <div className="space-y-2">
                            <label className="ti-form-label mb-0">Incoming Server</label>
                            <div className="flex gap-2 items-center flex-wrap xl:flex-nowrap">
                              <input type="text" className="my-auto ti-form-input" name="in_server" value={formData.in_server} onChange={handleInputChange} placeholder="Ex. imap.mail.me.com" />
                              <Select classNamePrefix='react-select' id='react-select-3-live-region' className="w-full xl:w-56 border border-gray-100 rounded" value={formData.in_port} options={ports.in_port} placeholder='Choose Port' onChange={handleInPort} />
                            </div>
                          </div>
                          <div className="space-y-2 relative">
                            <label className="ti-form-label mb-0">Outgoing Server</label>
                            <div className="flex gap-2 items-center flex-wrap xl:flex-nowrap">
                              <input type="text" className={`my-auto ti-form-input`} name="out_server" onChange={handleInputChange} placeholder="Ex. smtp.office365.com" value={formData.out_server} />
                              <Select classNamePrefix='react-select' id='react-select-3-live-region' className="w-full xl:w-56 border border-gray-100 rounded" value={formData.out_port} options={ports.out_port} placeholder='Choose Port' onChange={handleOutPort} />
                            </div>
                          </div>
                          {/*<div className="space-y-2 relative">
                            <label className="ti-form-label mb-0">SSL Incoming Port</label>
                            <Select classNamePrefix='react-select' id='react-select-3-live-region' className="border border-gray-100 rounded" value={formData.in_port} options={ports.in_port} placeholder='Choose Port' onChange={handleInPort} />
                          </div>
                          <div className="space-y-2 relative">
                            <label className="ti-form-label mb-0">SMTP Port</label>
                            <Select classNamePrefix='react-select' id='react-select-3-live-region' className="border border-gray-100 rounded" value={formData.out_port} options={ports.out_port} placeholder='Choose Port' onChange={handleOutPort} />
                          </div>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-footer text-end space-x-3 rtl:space-x-reverse flex gap-2 items-center justify-between flex-wrap">
                {
                  testMsg &&
                  <p className="font-bold italic">{testMsg}</p>
                }
                <div className="flex items-center justify-end gap-2 ml-auto">
                  {
                    isTesting &&
                    <div className="ti-spinner w-5 h-5 text-primary" role="status" aria-label="loading">
                      <span className="sr-only">Loading...</span>
                    </div>
                  }
                  <button onClick={handleTest} className={`ti-btn m-0 ${isTesting ? "bg-indigo-500 text-white" : "ti-btn-soft-primary"} disabled:opacity-60 disabled:cursor-not-allowed`}>
                    <i className="ri-mail-send-line"></i> {isTesting ? "Testing...": "Test"}
                  </button>
                  <button onClick={handleSubmit} className="ti-btn m-0 ti-btn-soft-primary disabled:opacity-60 disabled:cursor-not-allowed" disabled={!testMsg}><i className="ri-save-2-line"></i> {isSaving ? "Saving..." : "Save"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Profile;
