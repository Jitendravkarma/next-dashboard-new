"use client"
import React from 'react'
import Link from 'next/link'
import { useUserContext } from '@/shared/userContext/userContext'

const ContactNow = () => {
  const { resellerContactInfo } = useUserContext()
  return (
    <>
        <Link
          href={`tel:${resellerContactInfo.phone}`}
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
          href={`https://wa.me/${resellerContactInfo.phone}`}
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