"use client"
import Link from "next/link";
import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="mt-auto py-3 border-t dark:border-white/10 bg-white dark:bg-bgdark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">Copyright © <span id="year">2016</span> <Link target="_blank" href="https://designcollection.in" className="text-primary">Design Collection Pvt Ltd</Link>.</p>
        </div>
      </footer>

    </Fragment>
  );
};

export default Footer;
