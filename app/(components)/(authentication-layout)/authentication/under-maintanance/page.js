"use client"
import { DayCounter } from "@/shared/data/authentication/uder-maintanance-data";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment, useEffect, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Underconstruction = () => {

	useEffect(() => {
		document.body.classList.add("flex", "h-full", "!py-0", "bg-white", "dark:bg-bgdark");

		return () => {
			document.body.classList.remove("flex", "h-full", "!py-0", "bg-white", "dark:bg-bgdark");
		};
	}, []);

	return (
		<Fragment>
			<Seo title={"Under-Construction"} />
			<HelmetProvider>
				<Helmet>
					<body className="flex h-full !py-0 bg-white dark:bg-bgdark"></body>
				</Helmet>
				<div className="grid grid-cols-12 gap-6 w-full h-full">
					<div className="lg:col-span-5 col-span-12 hidden lg:block relative  bg-primary/20">
						<div className="relative w-full h-full z-[1]">
							<div className="authentication-page justify-center w-full max-w-7xl mx-auto p-6">
								<img src={"../../assets/img/authentication/4.png"} alt="logo" className="mx-auto xxl:h-[500px]" />
							</div >
						</div>
					</div>
					<div className="lg:col-span-7 col-span-12">
						<div className="authentication-page w-full">
							<main id="content" className="w-full sm:max-w-5xl p-6">
								<div className="mt-7">
									<div className="p-0 md:p-7">
										<div className="text-center">
											<h1 className="block text-2xl sm:text-5xl font-bold text-gray-800 dark:text-white">Under Maintanance</h1>
											<p className="mt-3 text-sm text-gray-600 dark:text-white/70">
												The Site You are looking For is Currently Under Maintanance And it will be back shortly , We will notify you when we are back..!

											</p>
										</div>

										<DayCounter />
									</div>
								</div>
							</main>
						</div>
					</div>
				</div>
			</HelmetProvider>
		</Fragment>
	);
};

export default Underconstruction;
