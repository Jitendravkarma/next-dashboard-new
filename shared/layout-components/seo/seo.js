"use client"
import React, { useEffect } from 'react';

const Seo = ({ title }) => {

  useEffect(() => {
    document.title = `${title} - aoul`
  }, [])

  return (
    <>
    </>
  )
}

export default Seo
