import React from 'react'
import Link from 'next/link'

const PrimaryButton = () => {
  return (
    <div className="py-5 flex gap-3 flex-col sm:flex-row">
        <Link
            href="/pricing"
            className="bg-green-400 hover:bg-green-500 text-white py-3 px-5 text-lg rounded-sm text-center"
        >
            Buy Now
        </Link>
        <Link href="/signup"  target="_blank" className="text-green-400 hover:bg-green-400 hover:text-white border border-green-400 py-3 px-5 text-lg rounded-sm text-center">
            Start a Free Trial
        </Link>
    </div>
  )
}

export default PrimaryButton