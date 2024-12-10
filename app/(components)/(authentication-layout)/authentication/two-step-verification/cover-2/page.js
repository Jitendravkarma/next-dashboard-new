"use client"
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Twostepcover2 = () => {

	const [inputValues, setInputValues] = useState({
		one: "",
		two: "",
		three: "",
		four: "",
	});

	const handleChange = (currentId, nextId, value) => {
		setInputValues((prevValues) => ({
			...prevValues,
			[currentId]: value,
		}));
		const nextInput = document.getElementById(nextId);

		if (nextInput) {
			nextInput.focus();
		}
	};

	useEffect(() => {
		document.body.classList.add("error-page", "flex", "h-full", "!py-0", "bg-white", "dark:bg-bgdark");

		return () => {
			document.body.classList.remove("error-page", "flex", "h-full", "!py-0", "bg-white", "dark:bg-bgdark");
		};
	}, []);

	return (
		<Fragment>
			<Seo title={"Twostep-cover2"} />
			<HelmetProvider>
				<Helmet>
					<body className="error-page flex h-full !py-0 bg-white dark:bg-bgdark"></body>
				</Helmet>
				<div className="grid grid-cols-12 gap-6 w-full h-full">
					<div className="lg:col-span-6 col-span-12 hidden lg:block relative">
						<div className="cover relative w-full h-full z-[1] p-10">
							<Link href={"/dashboards/sales"} className="header- logo">
								<img src={"../../../assets/img/brand-logos/desktop-light.png"} alt="logo" className="ltr:ml-auto rtl:mr-auto block" />
							</Link>
							<div className="authentication-page !h-full justify-center w-full max-w-7xl mx-auto p-0">
								<img src={"../../../assets/img/authentication/2.png"} alt="logo" className="mx-auto h-[500px]" />
							</div>
						</div>
					</div>
					<div className="lg:col-span-6 col-span-12">
						<div className="authentication-page w-full">
							<main id="content" className="w-full max-w-md mx-auto p-6">
								<Link href={"/dashboards/sales"} className="header-logo lg:hidden">
									<img src={"../../../assets/img/brand-logos/desktop-logo.png"} alt="logo" className="mx-auto block dark:hidden" />
									<img src={"../../../assets/img/brand-logos/desktop-dark.png"} alt="logo" className="mx-auto hidden dark:block" />
								</Link>
								<div className="mt-7">
									<div className="p-4 sm:p-7">
										<div className="text-center">
											<h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Two Step Verification</h1>
											<p className="mt-3 text-sm text-gray-600 dark:text-white/70">
												Please enter the 4 digit code sent to ********25
											</p>
										</div>

										<div className="mt-5">
											<form>
												<div className="grid gap-y-4">
													<div className="grid grid-cols-4 gap-4 max-w-[15rem] mx-auto">
														<input type="text" className="text-center py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70" required id="one" maxLength={1} value={inputValues.one}
															onChange={(e) => handleChange("one", "two", e.target.value)} />
														<input type="text" className="text-center py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70" required id="two" maxLength={1} value={inputValues.two}
															onChange={(e) => handleChange("two", "three", e.target.value)} />
														<input type="text" className="text-center py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70" required id="three" maxLength={1} value={inputValues.three}
															onChange={(e) => handleChange("three", "four", e.target.value)} />
														<input type="text" className="text-center py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70" required id="four" maxLength={1} value={inputValues.four}
															onChange={(e) => handleChange("four", null, e.target.value)} />

													</div>
													<button type="submit"
														className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10">Confirm</button>

													<p className="text-center text-xs text-gray-600 dark:text-white/70">
														{`Didn't`} received any code ?
														<Link className="text-primary decoration-2 hover:underline font-medium ms-1 inline-flex" href={"/authentication/forgot-password/cover-2/"}>
															Resend
														</Link>
													</p>
												</div>
											</form>
										</div>
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

export default Twostepcover2;
