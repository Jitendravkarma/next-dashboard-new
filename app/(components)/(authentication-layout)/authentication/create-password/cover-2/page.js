"use client"
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";

const Createpasswordcover2 = () => {

	useEffect(() => {
		document.body.classList.add("error-page", "flex", "h-full", "!py-0", "bg-white", "dark:bg-bgdark");

		return () => {
			document.body.classList.remove("error-page", "flex", "h-full", "!py-0", "bg-white", "dark:bg-bgdark");
		};
	}, []);

	return (
		<Fragment>
			<Seo title={"Createpassword-cover2"} />
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
							<Link href={"dashboards/sales/"} className="header-logo lg:hidden">
								<img src={"../../../assets/img/brand-logos/desktop-logo.png"} alt="logo" className="mx-auto block dark:hidden" />
								<img src={"../../../assets/img/brand-logos/desktop-dark.png"} alt="logo" className="mx-auto hidden dark:block" />
							</Link>
							<div className="mt-7">
								<div className="p-4 sm:p-7">
									<div className="text-center">
										<h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Create Password</h1>
										<p className="mt-3 text-sm text-gray-600 dark:text-white/70">
											Back To Home
											<Link className="text-primary decoration-2 hover:underline font-medium" href={"/dashboards/sales"}> Click Here..!</Link>
										</p>
									</div>

									<div className="mt-5">
										<form>
											<div className="grid gap-y-4">
												<div>
													<div className="flex justify-between items-center">
														<label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
													</div>
													<div className="relative">
														<input type="password" id="password" name="password"
															className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
															required />
													</div>
												</div>
												<div>
													<div className="flex justify-between items-center">
														<label htmlFor="password1" className="block text-sm mb-2 dark:text-white">Confirm Password</label>
													</div>
													<div className="relative">
														<input type="password" id="password1" name="password1"
															className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
															required />
													</div>
												</div>
												<div className="flex items-center">
													<div className="flex">
														<input id="remember-me" name="remember-me" type="checkbox"
															className="shrink-0 mt-0.5 border-gray-200 rounded text-primary pointer-events-none focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-white/10" />
													</div>
													<div className="ltr:ml-3 rtl:mr-3">
														<label htmlFor="remember-me" className="text-sm dark:text-white">Remember me</label>
													</div>
												</div>

												<button type="submit"
													className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10">Save Password</button>
											</div>
										</form>
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

export default Createpasswordcover2;
