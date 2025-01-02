"use client"
import React, { Fragment, useEffect, useState } from "react";
import { login, setAuthToken } from "@/shared/apis/api";
import GoogleSignIn from "@/shared/layout-components/google-signin/googlesignin";
import Link from "next/link";
import { useUserContext } from "@/shared/userContext/userContext";
import Snackbar from "@/shared/layout-components/dashboard/SnackBar";

const SignInPage = () => {
    const { handleSignIn, handleSignOut, openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
    const [ loading, setLoading ] = useState(false)
    const [ loginData, setLoginData ] = useState({email: "allmysource@gmail.com", password: "Dewas@123"})

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setLoginData({...loginData, [name]: value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()

        if(loginData.email && loginData.password){
            setLoading(true)
            handleSignOut()
            try {
                const response = await login(loginData);
                const userData = response.user;
                setAuthToken(response.access_token);
                handleSignIn(userData, userData.verified);
                // navigate.push("/dashboard/home/")
                window.open('/dashboard/home/', '_blank');
            } catch (error) {
                openSnackBar();
                handleSnackMessage(error.response?.data?.errors?.email, "white", "text-danger")
            } finally {
                setLoading(false)
            }
        }

        else {
            openSnackBar();
            handleSnackMessage("Email or Password is missing!", "white", "text-danger")
        }
    }

	useEffect(() => {
		document.body.classList.add("error-page", "flex", "h-full", "!py-0", "bg-white", "dark:bg-bgdark");

		return () => {
			document.body.classList.remove("error-page", "flex", "h-full", "!py-0", "bg-white", "dark:bg-bgdark");
		};
	}, []);

	return (
		<Fragment>
            <html>
                <head>
                    <title>Web Crawler Spider | Login Page</title>
                    <meta name="description" content="Web crawler spider login page enjoy our services"></meta>
                    <meta name="keywords" content="login page, web crawler spider, sign in page, signup page, scraper, extractor, google search, google map"></meta>
                </head>

                <body>
                    {
                        openSnack &&
                        <Snackbar content={snackMessage} isOpen={openSnack}/>
                    }
                    <div className="grid grid-cols-12 gap-6 w-full h-screen">
                        <div className="lg:col-span-6 col-span-12 hidden lg:block relative">
                            <div className="cover relative w-full h-full z-[1] p-10">
                                <div className="authentication-page !h-full justify-center w-full max-w-7xl mx-auto p-0">
                                    <img src={"../../../assets/img/authentication/signin.png"} alt="logo" className="mx-auto h-[500px]" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 col-span-12">
                            <div className="authentication-page w-full">
                                <main id="content" className="w-full max-w-md mx-auto p-6 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] lg:shadow-none">
                                    <div className="mt-5"/>
                                    <Link href={"/dashboards/sales"} className="header-logo lg:hidden">
                                        <img src={"../../../assets/img/brand-logos/desktop-logo.png"} alt="logo" className="mx-auto " />
                                        <img src={"../../../assets/img/brand-logos/desktop-dark.png"} alt="logo" className="mx-auto hidden dark:block" />
                                    </Link>

                                    <div className="p-4 sm:p-7">
                                        <div className="text-center">
                                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                                        </div>
                                        <div className="mt-5">
                                            {/* google signin */}
                                            <GoogleSignIn/>
                                            {/* google signin */}
                                            
                                            {/* login */}
                                            <div>
                                                <form onSubmit={handleSubmit} className="grid gap-y-4">
                                                    <div>
                                                        <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email
                                                            address</label>
                                                        <div className="relative">
                                                            <input type="email" id="email" value={loginData.email} onChange={handleChange} name="email" placeholder="example@example.com"
                                                                className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                                                                required />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between items-center">
                                                            <label htmlFor="password"
                                                                className="block text-sm mb-2 dark:text-white">Password</label>
                                                            <Link className="text-sm text-primary decoration-2 hover:underline font-medium"
                                                                href={"/forgot-password"}>Forgot password?</Link>
                                                        </div>
                                                        <div className="relative">
                                                            <input id="hs-toggle-password" type="password" name="password"
                                                                className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:ring-primary" onChange={handleChange}
                                                                placeholder="Enter password" value={loginData.password} />
                                                            <button type="button" data-hs-toggle-password='{
                                                                "target": "#hs-toggle-password"
                                                                }'
                                                                className="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-0 dark:shadow-none dark:focus:ring-transparent">
                                                                <svg className="flex-shrink-0 size-3.5 text-gray-400 dark:text-white" width="24"
                                                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path className="hs-password-active:hidden"
                                                                        d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                                                    <path className="hs-password-active:hidden"
                                                                        d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                                                    <path className="hs-password-active:hidden"
                                                                        d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                                                    <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22" />
                                                                    <path className="hidden hs-password-active:block"
                                                                        d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                                                    <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* <div className="flex items-center gap-2">
                                                        <div className="flex">
                                                            <input id="remember-me" name="remember-me" type="checkbox"
                                                                className="shrink-0 mt-0.5 border-gray-200 rounded text-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-white/10" />
                                                        </div>
                                                        <div className="ltr:ml-3 rtl:mr-3">
                                                            <label htmlFor="remember-me" className="text-sm dark:text-white">Remember
                                                                me</label>
                                                        </div>
                                                    </div> */}

                                                    <button type="submit"
                                                        className={`py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10 ${loading ? "opacity-[0.6]" : ""}`}>
                                                        { loading ? <span className="animate-pulse">Please wait...</span> : "Sign in"}
                                                    </button>

                                                    {/* <Link href={"/dashboards/sales"}
                                                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10">
                                                        Sign in
                                                    </Link> */}

                                                    <p className="text-sm text-center text-gray-600 dark:text-white/70">
                                                        {`Don't`} have an account yet?
                                                        <Link className="text-primary decoration-2 hover:underline font-medium" href={"/sign-up"}> Sign up here</Link>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
		</Fragment>
	);
};

export default SignInPage;
