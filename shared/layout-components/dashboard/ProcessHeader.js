import Link from 'next/link'
import React from 'react'

const ProcessHeader = ({heading, url, title}) => {
  return (
    <div className="box-header flex justify-between items-center">
        <h5 className="box-title capitalize">{heading}</h5>
        
        {/* Watch on youtube */}
        <Link href={`https://www.youtube.com/watch?v=${url}`} target="_blank" className="flex items-center gap-1 group" title={`Learn how to use ${title}`}>
            <i className="ri-youtube-fill text-red-500 text-lg"></i> <span className='group-hover:underline'>How to use?</span>
        </Link>
        {/* Watch on youtube */}
    </div>
  )
}

export default ProcessHeader