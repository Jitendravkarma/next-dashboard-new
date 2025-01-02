
"use client"
import "./globals.scss";
import { Provider } from "react-redux";
import store from "@/shared/redux/store";
import PrelineScript from "./PrelineScript";
import { Initialload } from "@/shared/contextapi";
import { Fragment, useState } from "react";
import UserProvider from "@/shared/userContext/userContext";


const RootLayout = ({ children }) => {

  const [pageloading,setpageloading] = useState(false)

  return (
    <Fragment>
      <Provider store={store}>
        <Initialload.Provider value={{ pageloading, setpageloading }}>
          <UserProvider>
            {children}
          </UserProvider>
        </Initialload.Provider>
      </Provider>
      <PrelineScript />
    </Fragment>
  )
}
export default RootLayout
