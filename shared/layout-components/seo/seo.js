"use client"
import React, { useEffect } from 'react';

const Seo = ({ title }) => {

  useEffect(() => {
    document.title = `Web Crawler Spider - ${title}`
  }, [])

  return (
    <>
    </>
  )
}

export default Seo
