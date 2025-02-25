import Link from 'next/link'
import React from 'react'

const YouTubeBtn = ({url, title}) => {
  return (
    <Link href={`https://www.youtube.com/watch?v=${url}`} target="_blank" className="flex items-center gap-1 group" title={`Learn how to use ${title}`}>
        <i className="ri-youtube-fill text-red-500 text-lg"></i> <span className='group-hover:underline'>How to use?</span>
    </Link>
  )
}

export default YouTubeBtn