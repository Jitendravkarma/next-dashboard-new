"use client"
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useEffect, useRef } from "react";

const Forgotpasswordbasic = () => {

	useEffect(() => {
		document.body.classList.add("authentication-page");

		return () => {
			document.body.classList.remove("authentication-page");
		};
	}, []);

	return (
		<Fragment>
			<Seo title={"Forgotpassword-basic"} />
			<main id="content" className="w-full max-w-md mx-auto p-6">
				<Link href={"/dashboards/sales"} className="header-logo">
					<img src={"../../../assets/img/brand-logos/desktop-logo.png"} alt="logo" className="mx-auto block dark:hidden" />
					<img src={"../../../assets/img/brand-logos/desktop-dark.png"} alt="logo" className="mx-auto hidden dark:block" />
				</Link>
				<div className="mt-7 bg-white rounded-sm shadow-sm dark:bg-bgdark">
					<div className="p-4 sm:p-7">
						<div className="text-center">
							<h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
							<p className="mt-3 text-sm text-gray-600 dark:text-white/70">
								Remember your password?
								<Link className="text-primary decoration-2 hover:underline font-medium"
									href={"/authentication/sign-in/basic"}>  Sign in
								</Link>
							</p>
						</div>

						<div className="mt-5">
							<form>
								<div className="grid gap-y-4">
									<div>
										<label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
										<div className="relative">
											<input type="email" id="email" name="email"
												className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
												required />
										</div>
									</div>

									<button type="submit"
										className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10">Send Reset
										Link</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</main>
		</Fragment>
	);
};

export default Forgotpasswordbasic;
