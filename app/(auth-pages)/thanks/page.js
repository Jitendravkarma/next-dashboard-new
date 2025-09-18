import Link from 'next/link'
import React from 'react'

const ThanksPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <main
            id="content"
            className="w-full max-w-md mx-auto px-8 py-20 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 lg:shadow-none"
        >
            <div className="flex flex-col gap-6 justify-center items-center">
                <div className="relative">
                <i
                    className="ri-checkbox-circle-fill text-8xl text-indigo-400 animate-bounce drop-shadow-md"
                ></i>
                <div
                    className="absolute inset-0 bg-indigo-200 opacity-30 rounded-full animate-ping"
                ></div>
                </div>
                <h2
                className="text-4xl font-bold text-gray-700 drop-shadow-md animate-fade-in"
                >
                    Thank You!
                </h2>
                <p className="text-lg text-gray-600 text-center animate-slide-in">
                    Our representative will contact you shortly.
                </p>
                <Link
                    href={"/"}
                    className={`w-full py-3 px-5 inline-flex justify-center items-center gap-3 rounded-md border border-transparent font-semibold bg-indigo-300 text-white hover:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:ring-offset-2 focus:ring-offset-indigo-50 transition-all text-lg transform hover:-translate-y-1`}
                >
                    Back To Home
                </Link>
            </div>
        </main>
    </div>
  )
}

export default ThanksPage