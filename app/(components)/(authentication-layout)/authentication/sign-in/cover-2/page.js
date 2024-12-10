"use client"
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";

const Cover2 = () => {

	useEffect(() => {
		document.body.classList.add("error-page", "flex", "h-full", "!py-0", "bg-white", "dark:bg-bgdark");

		return () => {
			document.body.classList.remove("error-page", "flex", "h-full", "!py-0", "bg-white", "dark:bg-bgdark");
		};
	}, []);

	return (
		<Fragment>
			<Seo title={"Signin-cover2"} />
			<div className="grid grid-cols-12 gap-6 w-full h-full">
				<div className="lg:col-span-6 col-span-12 hidden lg:block relative">
					<div className="cover relative w-full h-full z-[1] p-10">
						<Link href={"/dashboards/sales"} className="header- logo">
							<img src={"../../../assets/img/brand-logos/desktop-light.png"} alt="logo"
								className="ltr:ml-auto rtl:mr-auto block" />
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
										<h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
										<p className="mt-3 text-sm text-gray-600 dark:text-white/70">
											{`Don't`} have an account yet?
											<Link className="text-primary decoration-2 hover:underline font-medium" href={"/authentication/sign-up/cover-2"}> Sign up here</Link>
										</p>
									</div>
									<div className="mt-5">
										<button type="button"
											className="w-full py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10">
											<img src={"../../../assets/img/authentication/social/1.png"} className="w-4 h-4"
												alt="google-img" />
											Sign in with Google
										</button>

										<div
											className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 ltr:before:mr-6 rtl:before:ml-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 ltr:after:ml-6 rtl:after:mr-6 dark:text-white/70 dark:before:border-white/10 dark:after:border-white/10">
											Or</div>
										<div>
											<div className="grid gap-y-4">
												<div>
													<label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email
														address</label>
													<div className="relative">
														<input type="email" id="email" name="email"
															className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
															required />
													</div>
												</div>
												<div>
													<div className="flex justify-between items-center">
														<label htmlFor="password"
															className="block text-sm mb-2 dark:text-white">Password</label>
														<Link className="text-sm text-primary decoration-2 hover:underline font-medium"
															href={"/authentication/forgot-password/cover-2"}>Forgot password?</Link>
													</div>
													<div className="relative">
														<input type="password" id="password" name="password"
															className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
															required />
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex">
														<input id="remember-me" name="remember-me" type="checkbox"
															className="shrink-0 mt-0.5 border-gray-200 rounded text-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-white/10" />
													</div>
													<div className="ltr:ml-3 rtl:mr-3">
														<label htmlFor="remember-me" className="text-sm dark:text-white">Remember
															me</label>
													</div>
												</div>
												<Link href={"/dashboards/sales"}
													className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10">Sign
													in</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Cover2;
