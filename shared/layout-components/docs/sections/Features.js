import React from 'react'
import { Heading } from '../Heading'

const Features = () => {
    const features = [
        <span>Easy sign-in and sign-up</span>,
        <span>Generate leads from popular Business Directories such as <b>IndiaMart Lead Generation Tool</b>, <b>Justdial Lead Generation Tool</b>, <b>Sulekha Lead Generation Tool</b> and more.</span>,
        <span>Generate bulk contact leads from using our <b>Email lead generation tool</b> and<b> Phone number lead generation tool</b>.</span>,
        <span>Generate leads from our <b>Live website lead generation tool</b>.</span>,
        <span>Generate leads from <b>Search engines such as <b>Google.com</b>, <b>Bing.com</b>, <b>Yahoo</b> and more.</b></span>,
        <span>Generate leads from <b>'Maps.google.com'</b></span>,
        <span>Generate leads based on Keywords such as "Schools contact details in London."</span>,
        <span>Instant Phoe calls, Text SMS, WhatsApp Message and Email sending feature.</span>,
        <span>Generate leads from text content in images.</span>,
        <span>Lead generation data may be up to 80% accurate</span>,
        <span>Generate leads with email IDs, contact numbers, website URLs, and more</span>,
        <span>Receive filtered data</span>,
        <span>Download data in <b>CSV</b> file format</span>
      ]
  return (
    <div>
        <Heading title={"Features"}/>
        <ul className="list-disc text-base ml-5">
        {
            features.map((list, ind)=>(
            <li key={ind}>{list}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default Features