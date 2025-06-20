"use client"
import { useUserContext } from '@/shared/userContext/userContext'
import Link from 'next/link'
import React from 'react'

const DocYouTubeChannel = () => {
    const { yt_links } = useUserContext()
  return (
    <p className="text-base text-gray-600">
        <span className="text-xs sm:text-base">
        For a comprehensive, step-by-step installation guide, we also offer a detailed instructional video on YouTube. <br/>
        <Link href={`https://www.youtube.com/watch?v=${yt_links.installation}`} target="_blank" className="my-3 inline-block text-white bg-red-500 hover:bg-red-600 rounded-sm py-2 px-3">
            Watch Now <i className="ri-youtube-fill"/> 
        </Link>
        </span>
    </p>
  )
}

export default DocYouTubeChannel