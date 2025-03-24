'use client'
import React, { useState } from 'react'
import { login, setAuthToken } from "@/shared/apis/api";
import { useUserContext } from "@/shared/userContext/userContext";
import Link from 'next/link';
import Snackbar from '../dashboard/SnackBar';

const SignInForm = () => {
    const { handleSignIn, handleSignOut, openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
    const [ loading, setLoading ] = useState(false)
    const [ loginData, setLoginData ] = useState({email: "", password: ""})

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
                if(userData.verified){
                    setAuthToken(response.access_token);
                    handleSignIn(userData, userData.verified);
                    // navigate.push("/dashboard/home/")
                    // e.reset()
                    window.open('/downloads', '_blank');
                    setLoginData({email: "", password: ""})
                }
                else {
                    openSnackBar();
                    handleSnackMessage("Please verify your email before signing in. Check your inbox or spam folder.", "white", "text-danger")
                }
            } catch (error) {
                const errorType = error?.message === "Network Error" ? "Something went wrong. Please try again after some time." : error.response?.data?.errors?.email
                openSnackBar();
                handleSnackMessage(errorType, "white", "text-danger")
            } finally {
                setLoading(false)
            }
        }

        else {
            openSnackBar();
            handleSnackMessage("Email or Password is missing!", "white", "text-danger")
        }
    }
  return (
    <div>
        {
            openSnack &&
            <Snackbar content={snackMessage} isOpen={openSnack}/>
        }
        <form onSubmit={handleSubmit} className="grid gap-y-4">
            <div>
                <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email
                    address</label>
                <div className="relative">
                    <input type="email" id="email" value={loginData.email} onChange={handleChange} name="email" placeholder="Enter email"
                        className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                        required />
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <label htmlFor="password"
                        className="block text-sm mb-2 dark:text-white">Password</label>
                    <Link className="text-sm text-primary decoration-2 hover:underline font-medium"
                        href={"/forget-password"}>Forgot password?</Link>
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
                <Link className="text-primary decoration-2 hover:underline font-medium" href={"/signup"}> Sign up here</Link>
            </p>
        </form>
    </div>
  )
}

export default SignInForm