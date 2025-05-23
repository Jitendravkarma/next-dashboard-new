"use client"
import React from 'react'
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';
import HeadElement from '@/shared/layout-components/public-comp/HeadElement';

const layout = ({children}) => {
  const token = Cookies.get("authToken");
  if(token){
    redirect("/downloads")
  }
  return (
    <html>
      <HeadElement/>
      <body>
        {children}
      </body>
    </html>
  )
}

export default layout