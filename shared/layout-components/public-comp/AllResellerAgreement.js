"use client"
import React from "react";
import { useUserContext } from "@/shared/userContext/userContext";
import LegalContent from "./LegalContent";
import { reseller_content } from "@/shared/data/legal/reseller";

const Line = ({ label }) => (
  <p className="text-xss font-light leading-normal flex items-end gap-2 mt-6">
    <span>{label}</span>
    <span className="flex-1 border-b border-gray-500 mb-1"></span>
  </p>
);

const AllResellerAgreement = () => {
  const { companyDetails } = useUserContext() || {};
  const company = companyDetails?.company_name || "Neuralnetics Technologies Pvt. Ltd.";

  return (
    <LegalContent content={reseller_content}>
      
    </LegalContent>
  );
};

export default AllResellerAgreement;
