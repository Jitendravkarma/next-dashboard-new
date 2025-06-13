"use client"
import React, { useEffect } from 'react';

const Seo = ({ title }) => {

  useEffect(() => {
    document.title = `${title} - Lead Data`
  }, [])

  return (
    <>
    </>
  )
}

export default Seo
