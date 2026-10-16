"use client";

import DownloadOperator from "@/shared/layout-components/public-comp/DownloadOperator";
import { useUserContext } from "@/shared/userContext/userContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Downloads() {
  const { push } = useRouter()
  const {isAuthenticated, user } = useUserContext()

  useEffect(() => {
    if(isAuthenticated && user?.email){
      if(user.email !== 'support@designcollection.in'){
        const fileUrl =
          "https://mail-us.in/lead_generation_tool.zip";
    
        const link = document.createElement("a");
        link.href = fileUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

    }
  }, [isAuthenticated, user]);
   
  if(!isAuthenticated){
      push('/signin')
  }
  return (
    <div className="text-gray-800 scroll-smooth">
      {/* Header */}
      <header className="text-black py-20 text-center bg-white">
        {
          (user && (user?.email === 'support@designcollection.in' || user?.email === 'allmysource@gmail.com')) &&
          <div className="flex justify-end items-center gap-3 mb-4 pr-20 mr-2">
              <Link target="_blank" href={`/reseller/dashboard`} className="bg-blue-500 hover:bg-blue-600 text-sm text-white font-medium py-3 px-4 rounded-md">
                <i className="ri-home-2-line"/>{" "}
                Reseller
              </Link>
              <Link target="_blank" href={`/admin/dashboard`} className="bg-blue-500 hover:bg-blue-600 text-sm text-white font-medium py-3 px-4 rounded-md">
                <i className="ri-home-2-line"/>{" "}
                Admin
              </Link>
          </div>
        }
        <h1 className="text-7xl font-bold">
          <p className="mb-6">👍</p>
          Thanks for downloading!
          <p className="mt-2">Just a few steps left</p>
          <p className="mt-6 text-lg font-normal" title="Download now">If the download has not started, you can <a href="https://mail-us.in/lead_generation_tool.zip" target="_blank" className="underline font-semibold text-blue-500 hover:underline">Download it manually</a></p>
        </h1>
      </header>
      <DownloadOperator/>
    </div>
  );
}