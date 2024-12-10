
"use client"
import LandingSwitcher from "@/shared/layout-components/switcher/landing-switcher";
import React, { Fragment, useEffect, useState } from "react";

const Landingpagelayout = ({ children }) => {


  const Landing = () => {
    document.querySelector("html")?.classList.add("h-full");
    document.querySelector("body")?.classList.add("landing-body");
  };

  useEffect(() => {
    Landing();
  }, []);

  return (
    <Fragment>
      <LandingSwitcher />
      {children}
    </Fragment>
  );
};

export default Landingpagelayout;
