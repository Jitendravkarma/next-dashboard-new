"use client"
import React from 'react'
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';

const layout = ({children}) => {
  const token = Cookies.get("authToken");
  if(token){
    redirect("/downloads")
  }
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export default layout