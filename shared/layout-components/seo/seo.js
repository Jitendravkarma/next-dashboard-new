"use client"
import React, { useEffect } from 'react';

const Seo = ({ title }) => {

  useEffect(() => {
    document.title = `${title} - Data Scrapper`
  }, [])

  return (
    <>
    </>
  )
}

export default Seo
