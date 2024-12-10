"use client"
import React, { useEffect } from 'react';

const Seo = ({ title }) => {

  useEffect(() => {
    document.title = `Synto - ${title}`
  }, [])

  return (
    <>
    </>
  )
}

export default Seo
