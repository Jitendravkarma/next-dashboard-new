"use client"
import React from 'react'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

const HeadElement = () => {
  const path = usePathname()
  console.log(path)
  return (
    <head>
        {
          path.includes("thanks") &&
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(e,t,n,s,u,a){
                  e.twq||(s=e.twq=function(){
                    s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
                  },
                  s.version='1.1',
                  s.queue=[],
                  u=t.createElement(n),
                  u.async=!0,
                  u.src='https://static.ads-twitter.com/uwt.js',
                  a=t.getElementsByTagName(n)[0],
                  a.parentNode.insertBefore(u,a))
                }(window, document, 'script');

                // Configure Twitter Pixel with your ID
                twq('config', 'pn69g');

                // Fire a Twitter event
                twq('event', 'tw-pn69g-pn69i', {
                  email_address: null, // optionally provide user email
                  phone_number: null   // optionally provide user phone number in E.164 format
                });
              `,
            }}
          />
        }
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WJQDPVMB');`,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,s,u,a){
                e.twq||(s=e.twq=function(){
                  s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
                },
                s.version='1.1',
                s.queue=[],
                u=t.createElement(n),
                u.async=!0,
                u.src='https://static.ads-twitter.com/uwt.js',
                a=t.getElementsByTagName(n)[0],
                a.parentNode.insertBefore(u,a))
              }(window, document, 'script');
              twq('config', 'pn69g');
            `,
          }}
        />
        <script
          id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/385185488e96c2387bba7596f/b72597b8ca4e9990309b9354f.js");`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '9701989946516278');
            fbq('track', 'PageView');`,
          }}
        />
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2QX6FBRXL5"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2QX6FBRXL5');
            `,
          }}
        /> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2QX6FBRXL5"
        />
        <script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2QX6FBRXL5');
            `,
          }}
        />
    </head>
  )
}

export default HeadElement