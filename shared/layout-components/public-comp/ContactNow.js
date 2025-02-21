import React from 'react'
import Link from 'next/link'

const ContactNow = () => {
  return (
    <>
        <Link
          href="tel:+917987887047"
          className="fixed z-10 bottom-[4.5rem] xl:bottom-20 left-4 border-4 border-white rounded-full shadow-md flex items-center overflow-hidden w-14 hover:scale-110 bg-white transition-all duration-150"
          target="_blank"
          title="Contact Now"
        >
          <img
            src={"/assets/img/phoneIcon.png"}
            alt="Contact Now"
            className="w-12 h-12"
            style={{padding:'1px'}}
          />
        </Link>
        <Link
          href="https://wa.me/917987887047"
          className="fixed z-10 bottom-2 xl:bottom-4 left-4 border-4 border-white rounded-full shadow-md flex items-center overflow-hidden w-14 hover:scale-110 bg-white transition-all duration-150"
          target="_blank"
          title="WhatsApp Now"
        >
          <img
            src={"/assets/img/whatsappIcon.png"}
            alt="WhatsApp Now"
            className="w-12 h-12"
          />
        </Link>
    </>
  )
}

export default ContactNow