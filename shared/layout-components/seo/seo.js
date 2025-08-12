"use client"
import React, { useEffect } from 'react';

const Seo = ({ title }) => {

  useEffect(() => {
    document.title = `${title} - TradeTAP`
  }, [])

  return (
    <>
    </>
  )
}

export default Seo
