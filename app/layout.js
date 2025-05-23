
"use client"
import "./globals.scss";
import { Provider } from "react-redux";
import store from "@/shared/redux/store";
import PrelineScript from "./PrelineScript";
import { Initialload } from "@/shared/contextapi";
import { Fragment, useState } from "react";
import UserProvider from "@/shared/userContext/userContext";
import Script from "next/script";


const RootLayout = ({ children }) => {

  const [pageloading,setpageloading] = useState(false)

  return (
    <Fragment>
      <Provider store={store}>
        <Initialload.Provider value={{ pageloading, setpageloading }}>
          <UserProvider>
            {children}
            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6421827460277995"
              crossOrigin="anonymous"
              strategy="afterInteractive" // Loads after page is interactive
            />
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R0MF2YW0DP"/>
            <Script
              id="gtag-init" // Unique ID for this script
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-R0MF2YW0DP');
                `,
              }}
            />
          </UserProvider>
        </Initialload.Provider>
      </Provider>
      <PrelineScript />
    </Fragment>
  )
}
export default RootLayout
