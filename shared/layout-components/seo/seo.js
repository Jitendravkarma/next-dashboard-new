"use client"
import React, { useEffect } from 'react';

const Seo = ({ title }) => {

  useEffect(() => {
    document.title = `${title} - Scraper Tools`
  }, [])

  return (
    <>
    </>
  )
}

export default Seo
