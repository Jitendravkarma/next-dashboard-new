"use client"
import { useUserContext } from '@/shared/userContext/userContext'
import Link from 'next/link'
import React from 'react'

const DocBottomSupport = () => {
    const { resellerContactInfo } = useUserContext()
  return (
    <div className="flex flex-col gap-6 items-center relative z-10">
        <div className="flex bg-blue-100 justify-center rounded-full text-4xl sm:text-6xl text-blue-600 w-14 h-14 sm:h-20 sm:w-20 items-center">😊</div>
        <h3 className="text-xl sm:text-4xl text-blue-700 font-semibold">Thank You for Choosing Us!</h3>
        <p className="text-gray-600 text-sm sm:text-lg leading-relaxed max-w-md mx-auto">
        We’re dedicated to supporting you—don’t hesitate to get in touch!
        </p>
        <Link 
        href={`mailto:${resellerContactInfo.email}`} 
        className="bg-blue-600 rounded-md text-sm sm:text-lg text-white duration-300 font-medium gap-2 hover:bg-blue-700 inline-flex items-center p-2 px-4 sm:px-6 sm:py-3 transition-colors"
        >
        <i className="text-base sm:text-xl ri-mail-fill"></i>
        Contact Us
        </Link>
    </div>
  )
}

export default DocBottomSupport