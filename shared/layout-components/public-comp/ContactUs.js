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

    const teamMembers = [
        {
            name: "Mukesh Gehlot",
            role: "Manager",
            desc: "Manager of the Company",
            phone: "917987887047",
            whatsapp: true,
            social_links: [
                {social_icon: "facebook", social_link: "https://www.facebook.com/mukesh.gehlot.mewada/"},
                {social_icon: "twitter", social_link: "https://x.com/mukesh019"},
                {social_icon: "linkedin", social_link: "https://www.linkedin.com/in/msgehlot/"},
            ],
            profile_img: "/assets/team/manager.jpeg"
        },
        {
            name: "Sagar Dandge",
            role: "Sales Support",
            desc: "He is a sales person very good communication",
            phone: "919171677633",
            whatsapp: false,
            social_links: [
                {social_icon: "facebook", social_link: "/contact"}
            ],
            profile_img: "/assets/team/support_one.jpeg"
        },
        {
            name: "Ravi Kewat",
            role: "Sales Support",
            desc: "He is a sales person very good communication",
            phone: "919644796581",
            whatsapp: false,
            social_links: [
                {social_icon: "facebook", social_link: "/contact"}
            ],
            profile_img: "/assets/team/support_two.jpeg"
        },
        {
            name: "Siddharth Singh Bais",
            role: "Technical Support",
            desc: "He is a Good Technical Support Team Member",
            phone: "917587575814",
            whatsapp: true,
            social_links: [
                {social_icon: "facebook", social_link: "/contact"}
            ],
            profile_img: "https://media.licdn.com/dms/image/v2/D4D03AQE1kBo7n271nA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688310237958?e=1763596800&v=beta&t=5cUDjWLT81FUvcRbduK1Hiv9mEln7dBWDkiny58Uut4"
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
        <div className='grid grid-cols-12 items-center justify-center my-10 px-4'>
            <div className='col-span-12 my-10'>
                <h1 className='text-2xl text-center font-bold'>Our Support Team</h1>
            </div>
            <div className='col-span-12 grid grid-cols-12 gap-6 text-center items-center justify-center'>
                {teamMembers.map(({ name, role, desc, profile_img, phone, whatsapp, social_links }, ind) => (
                    <div
                        key={ind}
                        className='col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center justify-center gap-4 py-6 px-4 rounded-2xl border border-gray-200 shadow-sm bg-gradient-to-b from-white to-gray-50 hover:from-blue-50 hover:to-white hover:shadow-xl transition-all duration-300 transform '
                    >
                        <div className='w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 shadow-sm mb-3'>
                            <img
                            src={profile_img}
                            alt={name}
                            className='w-full h-full object-cover'
                            />
                        </div>

                        <h3 className='text-xl font-bold text-gray-800'>
                            Mr. {name}
                        </h3>
                        <h4 className='text-sm text-blue-600 font-semibold uppercase tracking-wide'>
                            {role}
                        </h4>
                        <p className='text-gray-600 text-sm leading-relaxed px-2 flex gap-2 justify-center items-center'>
                            {
                                social_links.map(({social_icon, social_link}, ind)=>(
                                    <>
                                        {
                                            social_link &&
                                            <Link key={ind} target={social_link !== "/contact" ? "_blank" : "_self"} href={social_link} className='text-blue-500 bg-white px-2 py-1 border border-blue-500 rounded-sm hover:bg-blue-500 hover:text-white duration-150' title={social_link !== "/contact" ? `Visit ${social_icon} profile` : "Not available"}>
                                                <i class={`ri-${social_icon}-fill`}/>
                                            </Link>
                                        }
                                    </>
                                ))
                            }
                        </p>
                        <div className='flex items-center gap-3 justify-center'>
                            {
                                whatsapp &&
                                <a
                                    href={`https://wa.me/${phone}`}
                                    target='_blank'
                                    className='mt-3 inline-block bg-transparent text-green-500 font-semibold text-sm px-4 py-2 rounded-full shadow-md border-2 border-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out'
                                >
                                    <i class="ri-whatsapp-fill"></i> What'sApp
                                </a>
                            }
                            <a
                                href={`tel:${phone}`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='mt-3 inline-block bg-transparent text-blue-500 font-semibold text-sm px-4 py-2 rounded-full shadow-md border-2 border-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out'
                            >
                                <i class="ri-phone-fill"></i> Call Now
                            </a>
                        </div>
                        
                    </div>
                ))}
            </div>

        </div>
        <div className='pb-20 sm:mt-[100px] pt-20 bg-gray-100'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* grid Begin */}
                <div className="grid grid-cols-1 gap-4 w-screen">
                    <div>
                        <h3 className="text-xl font-bold mb-5">
                            Connect with Scrape Genius - We're Here to Help!
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