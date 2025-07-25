"use client"
import React from 'react'
import Link from "next/link";
import { useUserContext } from '@/shared/userContext/userContext'

const ContactUs = () => {
    const { resellerContactInfo, companyDetails } = useUserContext()
    const contactData = [
        {
            title: "Address", 
            description: companyDetails.company_address, 
            icon: "/assets/img/address.png"
        },
        {
            title: "Email", 
            description: 
            <span>
            We also available on <br />
            <Link
                target="_blank"
                href={`mailto:${resellerContactInfo.email}`}
                className="text-blue-500 underline"
            >
                {resellerContactInfo.email}
            </Link>
            </span>, 
            icon: "/assets/img/mail.png"
        },
        {
            title: "Phone", 
            description:
            <span>
            You can also call us on <br />
            <Link href={`tel:${resellerContactInfo.phone}`} className="text-blue-500 hover:underline">{resellerContactInfo.phone}</Link>
            </span>
            , 
            icon: "/assets/img/phoneIcon.png"
        }
    ]
  return (
    <section className="pb-20 sm:mt-[100px]">
        <div className="max-w-screen-xl mx-auto w-full grid-cols-3 gap-5 hidden lg:grid px-4">
            {
            contactData.map(({title, description, icon})=>(
                <div key={title} className="bg-white rounded-sm p-8 border shadow-md hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-300 mb-3 false">
                <div className="w-20 mx-auto">
                    <img src={icon} className="h-auto max-w-full mx-auto" width="100px" alt={title}/>
                </div>
                <p className="text-center font-normal mt-5 mb-3 text-xl">{title}</p>
                <p className="text-xss text-center font-light leading-normal">{description}</p>
                </div>
            ))
            }
        </div>
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-5 lg:hidden px-4">
        {
            contactData.map(({title, description, icon})=>(
            <div key={title} className="overflow-auto text-center text-gray-700 bg-white p-12 md:p-4 rounded-md shadow-md hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-200">
                <div className="w-10 mx-auto mt-2">
                <img src={icon}/>
                </div>
                <h4 className="text-lg mt-3 font-bold">{title}</h4>
                <p className="text-base">{description}</p>
            </div>
            ))
        }
        </div>
        <div className='pb-20 sm:mt-[100px] pt-20 bg-gray-100'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* grid Begin */}
                <div className="grid grid-cols-1 gap-4 w-screen">
                    <div>
                        <h3 className="text-xl font-bold mb-5">
                            Connect with Lead Global - We're Here to Help!
                        </h3>
                        
                        <p className="mb-2 text-xss leading-normal font-normal">
                            For any queries, questions, customization requests, or support needs, please feel free to contact us at{" "}
                            <Link
                                target="_blank"
                                href={`mailto:${resellerContactInfo.email}`}
                                className="text-blue-500 underline"
                            >
                                {resellerContactInfo.email}
                            </Link>{" "}<br></br>
                            We are dedicated to providing you with prompt and effective assistance, ensuring your complete satisfaction with our services.
                        </p>

                        <address className="mt-10">
                            Address: {companyDetails.company_address} <br />
                            Email: 
                            <Link
                                target="_blank"
                                href={`mailto:${resellerContactInfo.email}`}
                                className="text-blue-500 hover:underline"
                                >{' '}
                                {resellerContactInfo.email}
                            </Link> <br />
                            Tel: 
                            <Link href={`tel:${resellerContactInfo.phone}`} className="text-blue-500 hover:underline">
                                {resellerContactInfo.phone}
                            </Link>
                        </address>
                    </div>
                </div>
                {/* grid End */}
            </div>
        </div>
    </section>
  )
}

export default ContactUs