"use client"
import React, { useEffect } from 'react'

const VerticalAds = () => {
    useEffect(() => {
        // Ensure adsbygoogle is defined and push the ad
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('Adsbygoogle push error:', e);
        }
    }, []);
    return (
        <div className='text-center'>
            <ins className="adsbygoogle"
                data-ad-client="ca-pub-id"
                data-ad-slot="slotid"
                data-ad-format="auto"
                data-full-width-responsive="true"
                style={{ display: 'block' }}>
            </ins>
        </div>
    )
}

const HorizontalAds = () => {
    useEffect(() => {
        // Ensure adsbygoogle is defined and push the ad
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('Adsbygoogle push error:', e);
        }
    }, []);
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center py-10'>
                <ins className="adsbygoogle"
                    data-ad-client="ca-pub-id"
                    data-ad-slot="slowid"
                    data-ad-format="auto" 
                    data-full-width-responsive="true" 
                    style={{ display: 'block' }}>
                </ins>
            </div>
        </div>
    )
}

export { VerticalAds, HorizontalAds}