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
                data-ad-client="ca-pub-6421827460277995"
                data-ad-slot="4368045524"
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
        <div className='text-center py-10'>
            <ins className="adsbygoogle"
                data-ad-client="ca-pub-6421827460277995"
                data-ad-slot="2799812988"
                data-ad-format="auto" 
                data-full-width-responsive="true" 
                style={{ display: 'block' }}>
            </ins>
        </div>
    )
}

export { VerticalAds, HorizontalAds}