"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const VerifyMsg = () => {
  const [counter, setCounter] = useState(5)
  const navigate = useRouter()

  useEffect(()=>{
    if(counter === 0){
      navigate.push("/signin")
    }
    const interval = setInterval(()=>{
      setCounter(counter-1)
    }, 1000)
    if(counter === 0){
      clearInterval(interval)
    }
    return ()=> clearInterval(interval)
  }, [counter])

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full">
              <i className="ri-verified-badge-fill text-green-500 text-5xl transform transition-all duration-500 ease-out scale-100 animate-bounce-in"></i>
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-gray-800">Verification Successful!</h1>
          <p className="mt-4 text-gray-600">
          Your email verification has been completed. Enjoy using our services now.
          </p>
          <div className="mt-6 space-y-4">
            <Link
              href={"/"}
              className="w-full block cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed focus:ring-offset-2"
            >
              Go to Home
            </Link>
            <Link
              href={"/signin"}
              className="w-full block px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md transition duration-300"
            >
              Login
            </Link>
            <p className="text-sm text-gray-600">Auto redirect in {counter} second.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyMsg;