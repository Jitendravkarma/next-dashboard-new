import Footer from '@/shared/layout-components/public-comp/Footer'
import Navbar from '@/shared/layout-components/public-comp/Navbar'
import React from 'react'

const PublicLayout = ({children}) => {
  return (
    <>
      <html>
        <body>
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </html>
    </>
  )
}

export default PublicLayout