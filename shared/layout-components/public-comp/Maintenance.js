"use client"
import React from "react";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";

const Maintenance = ({message=<span>We apologize for the inconvenience, but our service is currently undergoing scheduled maintenance. <br/>
                            <b>We regret the inconvenience caused.</b></span>}) => {
	return (
		<div>
			<Seo title={"Under Maintenance"} />
			<div className="">
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <div className="text-center px-6">
                        <h1 className="text-xl md:text-3xl font-bold mb-4">
                            <i className="ri-tools-fill text-5xl"></i> <br/>
                            Under Maintenance</h1>
                        <p className="text-lg md:text-xl mb-2">
                            {message}
                        </p>
                        <Link href={"/dashboard/home"} className="ti-btn ti-btn-outline !border-indigo-500 text-indigo-500 hover:text-white hover:bg-indigo-500 hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10">
                            Go Home
                        </Link>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default Maintenance;
