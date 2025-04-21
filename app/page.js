import React from 'react'
import Hero from '@/shared/layout-components/public-comp/Hero'
import Navbar from '@/shared/layout-components/public-comp/Navbar'
import Footer from '@/shared/layout-components/public-comp/Footer'
import { seo_home } from '@/shared/data/seo-content/content'
import ServicesSection from '@/shared/layout-components/public-comp/Services'
import FeatureSection from '@/shared/layout-components/public-comp/Features'
import BusinessGrowSection from '@/shared/layout-components/public-comp/BusinessGrow'
// import { HorizontalAds } from '@/shared/layout-components/public-comp/Ads'

export const metadata = seo_home

const Home = () => {
  return (
    <html>
		    <body>
          <Navbar/>
          <Hero />
          <ServicesSection/>
          <FeatureSection/>
          <BusinessGrowSection/>
          {/* <HorizontalAds/> */}
          <Footer/>
        </body>
    </html>
  )
}


export default Home