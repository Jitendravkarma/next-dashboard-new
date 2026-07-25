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
            name: "Naveen Sharma",
            role: "Manager",
            gen: 'm',
            desc: "Manager of the Company",
            phone: "919171677633",
            email: false,
            whatsapp: true,
            social_links: [
                {social_icon: "facebook", social_link: "/contact"},
                // {social_icon: "twitter", social_link: "https://x.com/mukesh019"},
                // {social_icon: "linkedin", social_link: "https://www.linkedin.com/in/msgehlot/"},
            ],
            profile_img: "https://mcusercontent.com/5d140583052f4e46c9833ce88/images/e9fa4a1c-d67d-a55d-7505-058edc702546.png"
        },
        {
            name: "Mukesh Gehlot",
            role: "Sales Head",
            gen: 'm',
            desc: "Manager of the Company",
            phone: "917987887047",
            email: false,
            whatsapp: true,
            social_links: [
                {social_icon: "facebook", social_link: "https://www.facebook.com/mukesh.gehlot.mewada/"},
                {social_icon: "twitter", social_link: "https://x.com/mukesh019"},
                {social_icon: "linkedin", social_link: "https://www.linkedin.com/in/msgehlot/"},
            ],
            profile_img: "https://mcusercontent.com/5d140583052f4e46c9833ce88/images/78e2bd04-64b7-5545-0bb8-00442df970ea.png"
        },
        {
            name: "Animesh Nama",
            role: "Technical Head",
            gen: 'm',
            desc: "Technical Support",
            phone: "919171677633",
            email: 'support@designcollection.in',
            whatsapp: true,
            social_links: [
                {social_icon: "facebook", social_link: "/contact"}
            ],
            profile_img: "https://mcusercontent.com/5d140583052f4e46c9833ce88/images/17920786-befe-b79f-51ed-c545ea54702d.png"
        },
        {
            name: "Jitendra Karma",
            role: "Technical Support",
            gen: 'm',
            desc: "He is a Good Technical Support Team Member",
            phone: "917067946921",
            email: 'support@designcollection.in',
            whatsapp: true,
            social_links: [
                {social_icon: "facebook", social_link: "/contact"}
            ],
            profile_img: "https://mcusercontent.com/5d140583052f4e46c9833ce88/images/c7dda43c-a9d6-1e56-68e7-70f5947ef73e.png"
        },
        {
            name: "Poonam Adlak",
            role: "Sales Support",
            gen: 'f',
            desc: "She is a sales person very good communication",
            phone: "916267642478",
            email: false,
            whatsapp: true,
            social_links: [
                {social_icon: "facebook", social_link: "/contact"}
            ],
            profile_img: "https://mcusercontent.com/5d140583052f4e46c9833ce88/images/02edafed-34d3-f76d-376d-64603fda8b36.png"
        },
        {
            name: "Pooja Kshtriya",
            role: "Sales Support",
            gen: 'f',
            desc: "She is a sales person very good communication",
            phone: "918982563657",
            email: false,
            whatsapp: true,
            social_links: [
                {social_icon: "facebook", social_link: "/contact"}
            ],
            profile_img: "https://mcusercontent.com/5d140583052f4e46c9833ce88/images/437e07eb-956e-0f14-ea08-cda03b2f1f2d.png"
        },
        {
            name: "Kritika Sharma",
            role: "Sales Support",
            gen: 'f',
            desc: "She is a sales person very good communication",
            phone: "918383064269",
            email: false,
            whatsapp: true,
            social_links: [
                {social_icon: "facebook", social_link: "/contact"}
            ],
            profile_img: "https://mcusercontent.com/5d140583052f4e46c9833ce88/images/1d21ad7f-8bbd-2d8d-9aee-c35229a85128.png"
        },
        {
            name: "Priya Sourashtriya",
            role: "Sales Support",
            gen: 'f',
            desc: "She is a sales person very good communication",
            phone: "916267640091",
            email: false,
            whatsapp: true,
            social_links: [
                {social_icon: "facebook", social_link: "/contact"}
            ],
            profile_img: "https://mcusercontent.com/5d140583052f4e46c9833ce88/images/5a82e969-63a6-c057-8c3c-98494ad8cc71.png"
        },
        {
            name: "Tanisha Solanki",
            role: "Sales Support",
            gen: 'f',
            desc: "She is a sales person very good communication",
            phone: "919354652094",
            email: false,
            whatsapp: true,
            social_links: [
                {social_icon: "facebook", social_link: "/contact"}
            ],
            profile_img: "https://mcusercontent.com/5d140583052f4e46c9833ce88/images/d66801c4-0397-f2c6-9dd3-b38a7f3296a8.png"
        },
        {
            name: "Sahara Narvariya",
            role: "Sales Support",
            gen: 'f',
            desc: "She is a sales person very good communication",
            phone: "919343740544",
            email: false,
            whatsapp: true,
            social_links: [
                {social_icon: "facebook", social_link: "/contact"}
            ],
            profile_img: "https://mcusercontent.com/5d140583052f4e46c9833ce88/images/af50f24c-67d6-9126-8e79-63fd58b0e650.png"
        },
        {
            name: "Sneha Agrawal",
            role: "Sales Support",
            gen: 'f',
            desc: "She is a sales person very good communication",
            phone: "917389912139",
            email: false,
            whatsapp: true,
            social_links: [
                {social_icon: "facebook", social_link: "/contact"}
            ],
            profile_img: "https://mcusercontent.com/5d140583052f4e46c9833ce88/images/714c10ae-e0f3-07c3-d74e-22a8ee0a2d10.png"
        },
        {
            name: "Jaya Puware",
            role: "Sales Support",
            gen: 'f',
            desc: "She is a sales person very good communication",
            phone: "918349257428",
            email: false,
            whatsapp: true,
            social_links: [
                {social_icon: "facebook", social_link: "/contact"}
            ],
            profile_img: "https://mcusercontent.com/5d140583052f4e46c9833ce88/images/13487edd-cb56-c3af-29ba-d2d822fdec3c.png"
        },
        {
            name: "Shurti Parashar",
            role: "Sales Support",
            gen: 'f',
            desc: "She is a sales person very good communication",
            phone: "917898287428",
            email: false,
            whatsapp: true,
            social_links: [
                {social_icon: "facebook", social_link: "/contact"}
            ],
            profile_img: "https://mcusercontent.com/5d140583052f4e46c9833ce88/images/5bfb20cb-3faa-00e5-36a6-5040bc605094.png"
        },
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
            <div className='max-w-7xl mx-auto col-span-12 grid grid-cols-12 gap-6 text-center items-center justify-center'>
                {teamMembers.map(({ name, role, desc, gen, profile_img, phone, email, whatsapp, social_links }, ind) => (
                    <div
                        key={ind}
                        className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col items-center justify-center gap-4 py-6 px-4 rounded-xl border border-gray-200 shadow-sm bg-gradient-to-b from-white to-gray-50 hover:from-blue-50 hover:to-white hover:shadow-xl transition-all duration-300 transform '
                    >
                        <div className='w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 shadow-sm mb-3'>
                            <img
                            src={profile_img}
                            alt={name}
                            className='w-full h-full object-cover'
                            />
                        </div>

                        <h3 className='text-xl font-bold text-gray-800'>
                            {gen === 'f' ? 'Ms.' : 'Mr.'} {name}
                        </h3>
                        <h4 className='text-sm text-blue-600 font-semibold uppercase tracking-wide'>
                            {role}
                        </h4>
                        {/* <p className='text-gray-600 text-sm leading-relaxed px-2 flex gap-2 justify-center items-center'>
                            {
                                social_links.map(({social_icon, social_link}, ind)=>(
                                    <>
                                        {
                                            social_link &&
                                            <Link key={ind} target={social_link !== "/contact" ? "_blank" : "_self"} href={social_link} className='text-blue-500 bg-white px-2 py-1 border border-blue-500 rounded-sm hover:bg-blue-500 hover:text-white duration-150' title={social_link !== "/contact" ? `Visit ${social_icon} profile` : "Not available"}>
                                                <i className={`ri-${social_icon}-fill`}/>
                                            </Link>
                                        }
                                    </>
                                ))
                            }
                        </p> */}
                        <div className='flex flex-wrap justify-between items-center gap-3 mt-2'>
                            {
                                email ?
                                <a
                                    href={`mailto:${email}`}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='w-full xl:w-auto inline-block bg-transparent text-blue-500 font-semibold text-sm px-4 py-2 rounded-full shadow-md border-2 border-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out'
                                >
                                    <i className="ri-mail-fill"></i> Email Now
                                </a>
                                :
                                <>
                                    {
                                        whatsapp &&
                                        <a
                                            href={`https://wa.me/${phone}`}
                                            target='_blank'
                                            className='w-full xl:w-auto inline-block bg-transparent text-green-500 font-semibold text-sm px-4 py-2 rounded-full shadow-md border-2 border-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out'
                                        >
                                            <i className="ri-whatsapp-fill"></i> What'sApp
                                        </a>
                                    }
                                    <a
                                        href={`tel:${phone}`}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='w-full xl:w-auto inline-block bg-transparent text-blue-500 font-semibold text-sm px-4 py-2 rounded-full shadow-md border-2 border-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out'
                                    >
                                        <i className="ri-phone-fill"></i> Call Now
                                    </a>
                                </>
                            }
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