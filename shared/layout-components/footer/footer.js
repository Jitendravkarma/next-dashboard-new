"use client"
import { useUserContext } from "@/shared/userContext/userContext";
import React, { Fragment } from "react";

const Footer = () => {
  const { companyDetails } = useUserContext()
  return (
    <Fragment>
      <footer className="mt-auto py-3 border-t dark:border-white/10 bg-white dark:bg-bgdark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">Copyright © <span id="year">{companyDetails?.company_year?.value || "2000"}</span> {companyDetails.company_name || <span className="italic hover:underline">Set Company Name</span>}. All rights reserved.</p>
        </div>
      </footer>

    </Fragment>
  );
};

export default Footer;
