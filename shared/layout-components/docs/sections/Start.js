import React from 'react'
import { Heading } from '../Heading'

const GetStart = () => {
  return (
    <div>
        <p className="tracking-wider uppercase"><code>Installation</code></p>
        <Heading title={"Getting Started"}/>
        <ul className="text-base">
            <li>Welcome and thanks for choosing our product {":)"}</li>
            <li>It is our great pleasure that you chose our scraping tools. We are so happy to have you as our customer! Your decision to trust us with your scrapping needs is something we don’t take lightly, and we are really excited to accompany you on this journey.</li>
            <li>Our team has worked hard to create a product that is not only powerful but also user-friendly, and we’re confident that it will help you achieve your goals with ease.</li>
        </ul>
       <div className="flex justify-center mt-8">
          <a
            href="https://mail-us.in/lead_generation_tool.zip"
            download
            className="inline-flex items-center gap-3 px-10 py-5 text-lg bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
          >
            <i className='ri-download-fill'/> Download Now
          </a>
        </div>
    </div>
  )
}

export default GetStart