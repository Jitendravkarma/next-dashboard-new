"use client"
import React, { useEffect, useState } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import { SalesValue } from "@/shared/data/charts/chartjsdata";
import UpgradePlan from "@/shared/layout-components/dashboard/UpgradePlan";
import { SessionOverview } from "@/shared/data/dashboard/analyticdata";

const Home = () => {
	
	const dashboard_data = {
		user_id: 5,
        name: "kripal",
        email: "kripal@gmail.com",
        phone: "+917985465465",
        country: "india",
        role: "reseller",
        access_code: "kri-465-ind-id5",
        purchase_date: "2025-03-01",
        plan_date: "2025-03-01",
        validity: "2026-03-01",
        expired: false,
		licence_codes: [
            {
                user_id: 2,
                name: "aman singh",
                email: "amansingh@example.com",
                phone: "+917876543210",
                country: "india",
                role: "user",
                access_code: "7ty6-93sf-102a-p9k1",
                purchase_date: "2025-01-02",
                plan_date: "2025-01-02",
                validity: "2025-04-02",
                expired: false
            },
            {
                user_id: 5,
                name: "neha gupta",
                email: "nehagupta@gmail.com",
                phone: "+917850612345",
                country: "india",
                role: "user",
                access_code: "8gh2-56dw-947b-u2v4",
                purchase_date: "2025-03-15",
                plan_date: "2025-03-15",
                validity: "",
                expired: false
            },
            {
                user_id: 6,
                name: "jitendra karma",
                email: "jeet@gmail.com",
                phone: "93875947344",
                country: "india",
                role: "user",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "2025-03-25",
                plan_date: "2025-03-25",
                validity: "2025-06-25",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "9dh1-42pl-201q-z3w5",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            },
            {
                user_id: null,
                name: "",
                email: "",
                phone: "",
                country: "",
                role: "",
                access_code: "1sq7-60jw-385m-f2h9",
                purchase_date: "",
                plan_date: "",
                validity: "",
                expired: false
            }
        ]
	}

	const users = <i className="ri-group-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const active = <i className="ri-user-follow-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const inactive = <i className="ri-user-unfollow-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const date = <i className="ri-calendar-check-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>
	const expiry_icon = <i className="ri-calendar-close-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-danger/10 text-danger leading-none"></i>
	const sales = <i className="ri-pass-valid-line text-xl avatar w-10 h-10 rounded-full p-2.5 bg-primary/10 text-primary leading-none"></i>

	const months = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov"]
	const validity = new Date()

	const [totalRecords, setTotalRecords] = useState([
		{ id: 1, class: "Total Customers", icon: users, title: "total", text: "0", color: "primary/10", color1: "success" },
		{ id: 2, class: "Active Customers", icon: active, title: "active", text: "0", color: "primary/10", color1: "success" },
		{ id: 3, class: "Inactive Customers", icon: inactive, title: "inactive", text: "0", color: "primary/10", color1: "success" },
		// { id: 3, class: "Licences", icon: sales, title: "sales", text: "0", color: "primary/10", color1: "success" },
		{ id: 4, class: "Plan Expiry", icon: date, title: "date", text: "2026", color: "primary/10", color1: "success" },
	]);

    const [ monthlyUser, setMonthlyUser ] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
	const [ reseller, setReseller ] = useState([]);
	const [ data, setData ] = useState([]);

	// useEffect(()=>{
	// 	let getReseller = dashboard_data;
	// 	let getCustomers = getReseller.licence_codes;
	// 	if(getCustomers){
	// 		const paid = getCustomers.filter(user=>user.email).length
	// 		const checkDate = (new Date(getReseller?.validity) < validity);
	// 		const totalCount = [
	// 			{title: "total", count: paid},
	// 			{title: "active", count: getCustomers.filter(dt=>(dt.validity && !dt.expired)).length},
	// 			{title: "inactive", count: getCustomers.filter(dt=>(dt.expired)).length},
	// 			{title: "date", count: checkDate ? "Expired" : dashboard_data.validity}
	// 		]
	// 		setData(getCustomers.slice(0, 6))
	// 		const newData = totalRecords.map(obj=>{
	// 			const find = totalCount.find(dt=>dt.title === obj.title)
	// 			if(find){
	// 				return {...obj, icon: (find.title === "date") ? checkDate ? expiry_icon : date : obj.icon, text: find.title === obj.title ? find.count : 0}
	// 			}
	// 			else {
	// 				return obj
	// 			}
	// 		})
	// 		setTotalRecords(newData)
	// 	}
	// 	else {
	// 		JSON.parse(localStorage.getItem("customers"));
	// 	}
	// },[data.length])

	// useEffect(()=>{
	// 	let getReseller = JSON.parse(localStorage.getItem("reseller"));;
	// 	if(getReseller){
	// 		setReseller(getReseller)
	// 	}
	// }, [])

    // useEffect(() => {
    //     // filter out monthly registered users
    //     const filterMonths = dashboard_data.licence_codes.map(user => {
    //         if (user.purchase_date) {
    //             // get the month (0-11) from the purchase date
    //             return new Date(user.purchase_date).getMonth();
    //         }
    //         return null; // return null if no purchase_date
    //     }).filter(date => date !== null); // filter out null values
    
    //     let months_data = Array(12).fill(0); // initialize all months with 0
    
    //     filterMonths.forEach(mon_dt => {
    //         months_data[mon_dt] = months_data[mon_dt] + 1;
    //     });
    
    //     setMonthlyUser(months_data);
    // }, [dashboard_data.licence_codes.length]);

	return (
		<div>
			<Seo title='Dashboard' />
			<PageHeader currentpage="Dashboard" img="/assets/iconfonts/dashboard-icon/dashboard.png" activepage="Reseller" mainpage="Dashboard" />
			<div className="grid grid-cols-12 gap-x-5">
				{totalRecords.map((idx) => (
					<div className="col-span-12 md:col-span-6 xl:col-span-3" key={Math.random()}>
						<div className="box">
							<div className="box-body">
								<div className="flex space-x-3 rtl:space-x-reverse">
									<div className="flex items-center justify-center ecommerce-icon px-0">
										<span>
											{idx.icon}
										</span>
									</div>
									<div className="flex flex-col justify-center">
										<div className="mb-2">{idx.class}</div>
										<div className="text-gray-500 dark:text-white/70 mb-1 text-xs">
											<span
												className="text-gray-800 font-semibold text-xl leading-none align-bottom dark:text-white">
												{idx.title !== "date" ? idx.text : idx.text?.toLocaleString('en-US')} {" "}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="grid grid-cols-12 gap-x-5">
				<UpgradePlan/>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Sold Licences</h5>
							</div>
						</div>
						<div className="box-body pb-0 px-0">
							<div className="sales-value relative border-b border-gray-200 dark:border-white/10 pb-5">
								<SalesValue data={{
									type: "doughnut",
									labels: ["Available Licence", "Used Licence"],
									datasets: [
										{
											data: [100, 0],
											backgroundColor: ["rgb(90, 102, 241)", "rgb(96, 165, 250)"],
											borderWidth: 0,
										},
									],
								}}/>
								<div
									className="chart-circle-value circle-style absolute border-2 border-dashed border-primary -top-5 inset-0 flex justify-center items-center w-[150px] h-[150px] leading-[70px] rounded-full text-5xl mx-auto my-auto">
									<div className="text-xl font-bold text-center">
										{100 - 0} <br/>
										<span>Licence Left</span>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-2 p-3">
								<div className="px-5 py-3 ltr:border-r rtl:border-l border-gray-200 dark:border-white/10">
									<div className="text-center">
										<p className="text-blue-500 dark:text-white text-2xl font-medium">{0}</p>
									</div>
									<div className="text-sm text-gray-500 dark:text-white/80 text-center font-medium">
										Your Licence
									</div>
								</div>
								<div className="px-5 py-3">
									<div className="text-center">
										<p className="text-primary dark:text-white text-2xl font-medium">
											100
										</p>
									</div>
									<div className="text-sm text-gray-500 dark:text-white/80 text-center font-medium">
										Licence Limit
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">User Overview</h5>
								{/* <div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										This year <i className="ti ti-chevron-down"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu hidden">
										<Link className="ti-dropdown-item" href="#!" scroll={false} >Today</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >This Week</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >This Month</Link>
										<Link className="ti-dropdown-item" href="#!" scroll={false} >This Year</Link>
									</div>
								</div> */}
							</div>
						</div>
						<div className="box-body">
							<SessionOverview data={{name: "Registered Customers", data:monthlyUser, color: "rgba(var(--color-primary))"}} />
						</div>
					</div>
				</div>
				<div className="col-span-12">
					<div className="box">
						<div className="box-header flex">
							<h5 className="box-title my-auto">Recent Customers</h5>
						</div>
						<div className="box-body p-0">
							{/* <div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col" className="!p-[0.65rem]"></th>
											<th scope="col" className="text-center !p-[0.65rem]">Customer Name</th>
											<th scope="col" className="text-center !p-[0.65rem]">Customer Email</th>
											<th scope="col" className="!p-[0.65rem]">Validity</th>
										</tr>
									</thead>
									<tbody>
										{dashboard_data.licence_codes.filter(user=>user.email).map((idx) => (
											<tr key={Math.random()}>
												<td className="!p-[0.65rem] truncate">
													<Link href={"/dashboard/user-analytics"} title={idx.name}>
														<i className="ri-user-follow-line text-xl avatar w-10 h-10 bg-primary/10 text-primary leading-none avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-bodybg"></i>
													</Link>
												</td>
												<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem] capitalize">
													{idx.name}
												</td>
												<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem]">
													{idx.email}
												</td>
												<td className="!p-[0.65rem] text-sm">
													{
														idx.validity ?
														<span className="font-semibold">
															{idx.validity} {" "}
															{
																idx.expired && 
																<span className={`badge leading-none bg-danger/10 text-danger rounded-sm animate-pulse`}>
																	Plan Expired
																</span>
															}
														</span>
														:
														<Link href={"/dashboard/user-analytics"} className="!m-0 hs-tooltip-toggle relative ti-btn  !px-2 !py-1 text-xs transition-none focus:outline-none ti-btn-soft-primary">
															Set Validity
														</Link>
													}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div> */}
                            <p className="my-5 text-center">No Customer Registered!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


export default Home;
