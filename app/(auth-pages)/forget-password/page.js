import React from "react";
import Link from "next/link";
import ForgetForm from "@/shared/layout-components/public-comp/ForgetForm";
import { seo_forget_password } from "@/shared/data/seo-content/content";

export const metadata = seo_forget_password

const ForgetPassword = () => {
	return (
		<div className="grid grid-cols-12 gap-6 w-full h-screen">
			<div className="lg:col-span-6 col-span-12 hidden lg:block relative">
				<div className="cover relative w-full h-full z-[1] p-10">
					<div className="authentication-page !h-full justify-center w-full max-w-7xl mx-auto p-0">
						<img src={"../../../assets/img/authentication/forget.png"} alt="Banner Image" className="mx-auto h-[500px]" />
					</div>
				</div>
			</div>
			<div className="lg:col-span-6 col-span-12">
				<div className="authentication-page w-full">

					<main id="content" className="w-full max-w-md mx-auto p-6 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] lg:shadow-none">
						<div className="mt-5"/>
						{/* <Link href={"dashboards/sales/"} className="header-logo lg:hidden">
							<img src={"../../../assets/img/brand-logos/desktop-logo.png"} alt="logo" className="mx-auto block dark:hidden" />
							<img src={"../../../assets/img/brand-logos/desktop-dark.png"} alt="logo" className="mx-auto hidden dark:block" />
						</Link> */}
						<div className="p-4 sm:p-7">
							<div className="text-center">
								<h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
							</div>

							<ForgetForm/>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default ForgetPassword;
