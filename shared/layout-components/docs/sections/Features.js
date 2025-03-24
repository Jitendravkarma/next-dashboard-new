import React from 'react'
import { Heading } from '../Heading'

const Features = () => {
    const features = [
        <span>Easy sign-in and sign-up</span>,
        <span>Scrape data from our <b>Live website scraper</b>.</span>,
        <span>Scrape data from <b>Search engines such as <b>Google.com</b>, <b>Bing.com</b>, <b>Yahoo</b> and more.</b></span>,
        <span>Scrape data from <b>'Maps.google.com'</b></span>,
        <span>Scrape data based on Keywords such as "Schools contact details in London."</span>,
        <span>Instant Phoe calls, Text SMS, WhatsApp Message and Email sending feature.</span>,
        <span>Scrape text content from images.</span>,
        <span>Scraped data may be up to 80% accurate</span>,
        <span>Scrape email IDs, contact numbers, website URLs, and more</span>,
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