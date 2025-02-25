"use client"
import React, { useEffect } from 'react';

const Seo = ({ title }) => {

  useEffect(() => {
    document.title = `${title} - Web Crawler Spider`
  }, [])

  return (
    <>
    </>
  )
}

export default Seo
