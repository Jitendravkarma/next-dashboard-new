"use client"
import React, { useEffect } from 'react';

const Seo = ({ title }) => {

  useEffect(() => {
    document.title = `${title} - So Lets Talk Data`
  }, [])

  return (
    <>
    </>
  )
}

export default Seo
