"use client"
import React, { useEffect } from 'react';

const Seo = ({ title }) => {

  useEffect(() => {
    document.title = `${title} - LeadSeas`
  }, [])

  return (
    <>
    </>
  )
}

export default Seo
