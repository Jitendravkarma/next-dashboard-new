import React from "react";
import SignUpForm from "@/shared/layout-components/public-comp/SignUpForm";
import { seo_signup } from "@/shared/data/seo-content/content";

export const metadata = seo_signup

const SignUp = () => {
	return (
		<>
			<div className="grid grid-cols-12 gap-6 w-full h-screen">
				<div className="lg:col-span-6 col-span-12 hidden lg:block relative">
					<div className="cover relative w-full h-full z-[1] p-10">
						<div className="authentication-page !h-full justify-center w-full max-w-7xl mx-auto p-0">
							<img src={"../../../assets/img/authentication/signup.png"} alt="logo" className="mx-auto h-[500px]" />
						</div>
					</div>
				</div>
				<div className="lg:col-span-6 col-span-12">
					<SignUpForm/>
				</div>
			</div>
		</>
	);
};

export default SignUp;
