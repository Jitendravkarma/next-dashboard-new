"use client"
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React from "react";

const Empty = () => {
  return (
    <div>
      <Seo title={"Empty Page"} />
      <PageHeader currentpage="Empty Page" activepage="Pages" mainpage="Empty Page" />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-body">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empty;
