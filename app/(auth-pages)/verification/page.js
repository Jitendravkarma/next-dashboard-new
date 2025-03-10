import React from "react";
import VerifyMsg from "@/shared/layout-components/public-comp/VerifyMsg";
import { seo_verify } from "@/shared/data/seo-content/content";

export const metadata = seo_verify;

const VerificationDone = () => {
  return (
    <>
      <VerifyMsg/>
    </>
  );
};

export default VerificationDone;