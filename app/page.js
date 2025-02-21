import React from 'react'
import Hero from '@/shared/layout-components/public-comp/Hero'
import Information from '@/shared/layout-components/public-comp/Info'
import Workflow from '@/shared/layout-components/public-comp/Workflow'
import Services from '@/shared/layout-components/public-comp/Services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import Navbar from '@/shared/layout-components/public-comp/Navbar'
import Footer from '@/shared/layout-components/public-comp/Footer'
import { seo_home } from '@/shared/data/seo-content/content'

export const metadata = seo_home

const Home = () => {
  return (
    <>
		    <Navbar/>
        <Hero />

        {/* watch demo */}
        <section className="py-28 relative bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to">
            <div className="flex flex-wrap relative items-center justify-center mx-auto p-4">
            <img
                src={`/assets/img/video-shape.png`}
                className="h-auto max-w-full rounded-sm border-4 border-blue-800"
                alt="videoshape"
            />
            <FontAwesomeIcon
                color="#00ea90"
                id="video-btn"
                icon={faCirclePlay}
                className="absolute text-2xl sm:text-[80px] md:text-[100px] sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            />
            </div>
        </section>
        {/* watch demo */}

        {/*  Advanced and Simple Ways to Scrape Begin */}
        <Information/>

        {/* Data workflow */}
        <Workflow/>

        {/* Services */}
        <Services/>

        {/* footer */}
        <Footer/>
    </>
  )
}


export default Home