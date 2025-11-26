import React from 'react'
import Hero from '@/shared/layout-components/public-comp/Hero'
import Navbar from '@/shared/layout-components/public-comp/Navbar'
import Footer from '@/shared/layout-components/public-comp/Footer'
import { seo_home } from '@/shared/data/seo-content/content'
import ServicesSection from '@/shared/layout-components/public-comp/Services'
import FeatureSection from '@/shared/layout-components/public-comp/Features'
import FeatureVideo from '@/shared/layout-components/public-comp/FeaturesVideo'
import BusinessGrowSection from '@/shared/layout-components/public-comp/BusinessGrow'
import HeadElement from '@/shared/layout-components/public-comp/HeadElement'
import { HorizontalAds } from '@/shared/layout-components/public-comp/Ads'

export const metadata = seo_home

const Home = () => {
  return (
    <html>
        <HeadElement/>
		    <body>
          <Navbar/>
          <Hero />
          <ServicesSection/>
          <FeatureSection/>
          <BusinessGrowSection/>
          <FeatureVideo/>
          <HorizontalAds/>
          <Footer/>
          {/* Google Tag Manager (noscript */}
          <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WJQDPVMB"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
          {/* Google Tag Manager (noscript */}
        </body>
    </html>
  )
}


export default Home