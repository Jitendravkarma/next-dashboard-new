
"use client"
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React, { Fragment, useEffect } from "react";
const Leafletmapss = dynamic(() => import("@/shared/data/maps/leafletmapdata"),
  {
    ssr: false
  });

const Leafletmap = () => {
  return (
    <Fragment>
      <Seo title={"Leaflet"} />
      <Leafletmapss />
    </Fragment>
  );
};

export default Leafletmap;
