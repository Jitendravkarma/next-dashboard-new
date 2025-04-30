"use client"
import React, { useEffect } from 'react';

const Seo = ({ title }) => {

  useEffect(() => {
    document.title = `${title} - Scrape Genius`
  }, [])

  return (
    <>
    </>
  )
}

export default Seo
