"use client"
import React from 'react'
import Link from 'next/link'
import { useUserContext } from '@/shared/userContext/userContext'

const PrimaryButton = () => {
  const {isAuthenticated} = useUserContext()
  return (
    <div className="flex justify-center space-x-4">
      {/* Get Started Button */}
      <Link href={"/"} className="lg:text-base text-xs font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4">
        Buy Now
      </Link>
      {/* Learn More Button */}
      <Link href={ isAuthenticated ? "/downloads" : "/signup"} className="lg:text-base text-xs font-medium bg-transparent border bg-white hover:bg-slate-200 hover:text-black text-black rounded-md py-2 px-4">
        Start a Free Trial
      </Link>
    </div>
  )
}

export default PrimaryButton