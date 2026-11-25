"use client"
import React from "react";
import { useUserContext } from "@/shared/userContext/userContext";
import LegalContent from "./LegalContent";
import { eula_content } from "@/shared/data/legal/eula";

// Only fill these when this EULA is shown for a reseller's customers
const RESELLER_NAME = null;
const PRODUCT_NAME = null;

const AllEula = () => {
  const { companyDetails } = useUserContext() || {};
  const company = companyDetails?.company_name || "Neuralnetics Technologies Pvt. Ltd.";

  return (
    <LegalContent content={eula_content} resellerName={RESELLER_NAME} productName={PRODUCT_NAME}>
      <h3 className="font-bold text-2xl mt-8 mb-3">Contact</h3>
      <p className="text-xss font-light leading-normal">
        Should you have any questions concerning this EULA, or if you desire to contact <b>{company}</b> for any reason,
        please contact us via mail on <a href="mailto:support@scrapegenius.com" className="text-blue-600 underline">support@scrapegenius.com</a>, or write to:
      </p>
      <p className="text-xss font-light leading-normal">
        <b>{company}</b>
        <br />
        271 Avantika Nagar, Scheme No. 51, Indore-452006 (M.P.), India
        {/* TODO (missing in source): Mobile, CIN / GST No., Authorised Representative name */}
      </p>
    </LegalContent>
  );
};

export default AllEula;
