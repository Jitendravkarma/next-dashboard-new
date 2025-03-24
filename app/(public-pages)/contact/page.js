import React from "react";
import Link from "next/link";
import PageHeader from "@/shared/layout-components/public-comp/PageHeader";
import { seo_contact } from "@/shared/data/seo-content/content";
import ContactForm from "@/shared/layout-components/public-comp/ContactForm";
import { HorizontalAds } from "@/shared/layout-components/public-comp/Ads";

export const metadata = seo_contact

const Contact = () => {
  
    const contactData = [
        {
            title: "Address", 
            description: "271 Avn, Scheme No 51, Sangam Nagar, Army Head Quarter, Indore- 452006, Madhya Pradesh.", 
            icon: "/assets/img/address.png"
        },
        {
            title: "Email", 
            description: 
            <span>
            We also available on <br />
            <Link
                target="_blank"
                href="mailto:support@webcrawlerspider.com"
                className="text-blue-500 underline"
            >
                support@webcrawlerspider.com
            </Link>
            </span>, 
            icon: "/assets/img/mail.png"
        },
        {
            title: "Phone", 
            description:
            <span>
            You can also call us on <br />
            <Link href={"tel:07314010110"} className="text-blue-500 hover:underline">0731-4010110</Link>
            </span>
            , 
            icon: "/assets/img/phoneIcon.png"
        }
    ]
  return (
    <div className="bg-white">
      <header className='py-14 lg:pt-28 lg:pb-20 bg-gray-100'>
        <div className='w-full text-center px-4 lg:px-16'>
          <h1 className='text-3xl lg:text-[64px] font-semibold mb-4 lg:mb-12 text-black-800 w-full'>Contact Us</h1>
          <h3 className='text-xl font-medium text-gray-600'>Need assistance? We're here for you!</h3>
        </div>
      </header>
      
      <div className="">
        <section className="pt-20 bg-white">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* grid Begin */}
            <div className="grid lg:grid-cols-2 gap-4 w-screen">
              <ContactForm/>
              <div>
                <img
                  src={"/assets/img/contact.svg"}
                  className="h-auto md:w-96 mx-auto lg:w-full my-3 p-3"
                  alt="inquirynow"
                />
              </div>
              {/* col-2 End */}
            </div>
            {/* grid End */}
          </div>
        </section>
        {/* Inquiry now Section End*/}
        <section className="pb-20 bg-gray-100 sm:mt-[150px] pt-20 lg:pt-[200px] relative">
            <div className="max-w-screen-xl w-full left-1/2 -translate-x-1/2 absolute md:-top-32 grid-cols-3 gap-5 hidden lg:grid px-4">
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
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* grid Begin */}

            <div className="grid grid-cols-1 gap-4 w-screen">
              <div>
                <h3 className="text-xl font-bold mb-5">
                Connect with Design Collection - We're Here to Help!
                </h3>
              
                <p className="mb-2 text-xss leading-normal font-normal">
                For any queries, questions, customization requests, or support needs, please feel free to contact us at{" "}
                  <Link
                    target="_blank"
                    href="mailto:support@webcrawlerspider.com"
                    className="text-blue-500 underline"
                  >
                    support@webcrawlerspider.com
                  </Link>{" "}<br></br>
                  We are dedicated to providing you with prompt and effective assistance, ensuring your complete satisfaction with our services.
                </p>

                <address className="mt-10">
                  Address: 271 Avn, Scheme No 51, Sangam Nagar, Army Head Quarter, Indore- 452006, Madhya Pradesh. <br />
                  Email: <Link
                    target="_blank"
                    href="mailto:support@webcrawlerspider.com"
                    className="text-blue-500 hover:underline"
                  >
                    support@webcrawlerspider.com
                  </Link> <br />
                  Tel: <Link href={"tel:07314010110"} className="text-blue-500 hover:underline">0731-4010110</Link>
                </address>

              </div>
            </div>
            {/* grid End */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
