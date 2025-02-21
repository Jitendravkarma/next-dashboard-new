'use client'
import React from 'react'
import HubSpotForm from "react-hubspot-form";

const ContactForm = () => {
  return (
    <div>
        <div className="mb-8">
            <p className="text-2xl font-extrabold leading-tight">
            Inquiry Now
            </p>
        </div>
        <HubSpotForm
            portalId="22164858"
            formId="b44bf45c-cfd2-477f-8172-fb95473dbc03"
            loading={<div>Loading...</div>}
        />
    </div>
  )
}

export default ContactForm