import React, { memo } from 'react'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListData = memo(({name})=>{
  return(
    <li className="mb-2 flex items-center">
      <FontAwesomeIcon
        className="mr-2"
        color="#00EA90"
        icon={faCheckDouble}
      />
      {name}
    </li>
  )
});

const Information = () => {
  return (
    <section className="bg-white py-28">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="grid md:grid-cols-3 md:gap-7">
            {/* ... Column 1 Content ... */}
            {/* col-1 Begin */}
            <div className='col-span-2'>
              <p className="text-xl text-blue-600 font-normal mb-5">
              The Data Scrapper, you can transform your data extraction journey, completing tasks that used to take hours in just a matter of minutes.
              </p>
              <p className="mb-2 text-xss leading-normal font-normal text-gray-600">
              It is very easy to scrape data from web crawler spiders. You can tailor webscraping to your business needs using keywords that best describe the value of your business, <strong>such as employment consultants, chartered accountants, doctors, schools, software companies, restaurants, yoga classes, medical shops, or travel. agents </strong> and more
              </p>
              <p className="mb-2 text-xss leading-normal font-normal text-gray-600">
              You can gather a lot of public online data using these keywords. Some of the web scraping tools we have developed. These tools will help you in scraping data. After scraping, you can download a CSV file of your filtered data.
              </p>
              <p className="text-xl text-blue-600 font-normal my-5">
              Some of our Features are: 
              </p>
              <ul className="list-none text-gray-600 leading-normal text-xss mt-3">
              
                <ListData name="Type your Keyword and scrape your data as per your
                requirement."/>
                <ListData name="Most reliable (highest quality data, up to 80% genuine , No Duplicate , faster
                  data)"/>
                <ListData name="You can utilize the search filter that is available in the data table to tailor it to your needs."/>
                <ListData name="Data download in CSV file format."/>
                <ListData name="Boosting your business's marketing efforts"/>
                <ListData name="And many more.."/>
              </ul>
            </div>
            {/* col-1 End */}
            {/* ... Column 2 Content ... */}
            {/* col-2 Begin */}
            <div className="hidden md:block">
                <img
                  src={`/assets/img/web-scrap.svg`}
                  className="h-auto w-96 rounded-sm ml-auto"
                  alt="webscrap"
                />
            </div>
            {/* col-2 End */}
          </div>
        </div>
    </section>
  )
}

export default memo(Information)