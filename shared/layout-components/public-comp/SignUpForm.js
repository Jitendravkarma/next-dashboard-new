"use client"
import React, { useRef, useState } from "react";
import { signUp } from "@/shared/apis/api";
import { useUserContext } from "@/shared/userContext/userContext";
import Link from "next/link";
import Snackbar from "@/shared/layout-components/dashboard/SnackBar";
import GoogleSignIn from "../google-signin/googlesignin";

const SignUpForm = () => {
    const refElement = useRef()
	const { openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
	const [ onSuccess, setOnSuccess ] = useState(false)
	const [ loading, setLoading ] = useState(false)
	const [ formData, setFormData ] = useState({name:"", email: "", password: "", confirmPassword: "", rememberMe: false})
	const [ togglePass, setTogglePass ] = useState({ password: false, confirmPassword: false})

	const handleChange = (e)=>{
		const name = e.target.name
        const value = e.target.value
		if(name === "rememberMe"){
			setFormData({...formData, [name]: e.target.checked})
		}
		else {
			setFormData({...formData, [name]: value})
		}
	}

	const togglePassword = (name)=>{
		setTogglePass({...togglePass, [name]: !togglePass[name]})
	}

	const handleSubmit = async (e)=>{
		e.preventDefault()
		if(formData.name && formData.email && formData.password && formData.confirmPassword){
			if(formData.rememberMe){
				setLoading(true)
				try {
					await signUp(formData)
					setOnSuccess(true)
				} catch (error) {
					const err = error.response.data.errors.email;
					openSnackBar();
					if(err === "email is allready registered"){
						handleSnackMessage("email is already registered.", "white", "text-danger")
						refElement.current.focus()
					}
				} finally {
					setLoading(false)
				}
			}
			else {
				openSnackBar();
            	handleSnackMessage("Accept the privacy policy!", "white", "text-danger")
			}
		}
	}
  return (
    <div className="w-full h-screen flex justify-center items-center">
        {
            openSnack &&
            <Snackbar content={snackMessage} isOpen={openSnack}/>
        }
        {
            onSuccess ? 
            <main
                id="content"
                className="w-full max-w-md mx-auto px-8 py-20 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 lg:shadow-none"
            >
                <div className="flex flex-col gap-6 justify-center items-center">
                    <div className="relative">
                    <i
                        className="ri-checkbox-circle-fill text-8xl text-indigo-400 animate-bounce drop-shadow-md"
                    ></i>
                    <div
                        className="absolute inset-0 bg-indigo-200 opacity-30 rounded-full animate-ping"
                    ></div>
                    </div>
                    <h2
                    className="text-4xl font-bold text-gray-700 drop-shadow-md animate-fade-in"
                    >
                        Sign Up Successful!
                    </h2>
                    <p className="text-lg text-gray-600 text-center animate-slide-in">
                        Check your email for the confirmation mail. Check your <b>Inbox or Spam</b> folder.
                    </p>
                    <Link
                        href={"/signin"}
                        className={`w-full py-3 px-5 inline-flex justify-center items-center gap-3 rounded-md border border-transparent font-semibold bg-indigo-300 text-white hover:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:ring-offset-2 focus:ring-offset-indigo-50 transition-all text-lg transform hover:-translate-y-1`}
                    >
                        Sign In
                    </Link>
                </div>
            </main>

            :
            <main id="content" className="w-full max-w-md mx-auto p-6 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] lg:shadow-none">
                <div className="mt-5"/>
                <Link href={"/"} className="header-logo lg:hidden">
                    <img src={"../../../assets/img/brand-logos/desktop-logo.png"} alt="logo" className="mx-auto block dark:hidden" />
                    <img src={"../../../assets/img/brand-logos/desktop-dark.png"} alt="logo" className="mx-auto hidden dark:block" />
                </Link>
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
                    </div>

                    <div className="mt-5">
                        {/* google signin */}
                        <GoogleSignIn/>
                        {/* google signin */}

                        {/* login */}
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-y-4">
                                <div>
                                    <label className="block text-sm mb-2 dark:text-white">Full Name</label>
                                    <div className="relative">
                                        <input type="text" name="name" onChange={handleChange} placeholder="Enter your name" value={formData.name}
                                            className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                                            required />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm mb-2 dark:text-white">Email address</label>
                                    <div className="relative">
                                        <input type="email" ref={refElement} name="email" onChange={handleChange} placeholder="Enter your email" value={formData.email}
                                            className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                                            required />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                                    <div className="relative">
                                        <input type={togglePass.password ? "text" : "password"} id="password" name="password" onChange={handleChange} placeholder="Enter password" value={formData.password}
                                            className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                                            required />
                                        <button type="button" className="absolute top-0 right-0 py-2 px-2 rounded-e-md dark:focus:outline-none dark:focus:ring-0 dark:shadow-none dark:focus:ring-transparent" onClick={()=>togglePassword("password")}>
                                            {
                                                togglePass.password ? 
                                                <i className="ri-eye-line"></i>
                                                :
                                                <i className="ri-eye-off-line"></i>
                                            }
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block text-sm mb-2 dark:text-white">Confirm
                                        Password</label>
                                    <div className="relative">
                                        <input type={togglePass.confirmPassword ? "text" : "password"} id="confirm-password" name="confirmPassword" onChange={handleChange} placeholder="Enter confirm password" value={formData.confirmPassword}
                                            className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                                            required />
                                        <button type="button" className="absolute top-0 right-0 py-2 px-2 rounded-e-md dark:focus:outline-none dark:focus:ring-0 dark:shadow-none dark:focus:ring-transparent" onClick={()=>togglePassword("confirmPassword")}>
                                            {
                                                togglePass.confirmPassword ? 
                                                <i className="ri-eye-line"></i>
                                                :
                                                <i className="ri-eye-off-line"></i>
                                            }
                                        </button>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="flex">
                                        <input id="remember-me" name="rememberMe" type="checkbox" onChange={handleChange}
                                            className="shrink-0 mt-0.5 border-gray-200 rounded text-primary  focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-white/10" />{" "}
                                    </div>
                                    <div className="ltr:ml-3 rtl:mr-3">
                                        <label htmlFor="remember-me" className="text-sm dark:text-white">I accept the <Link
                                            className="text-primary decoration-2 hover:underline font-medium"
                                            href={"/legal-policy"}>Terms and Conditions</Link></label>
                                    </div>
                                </div>

                                <button type="submit"
                                    className={`py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10 ${loading ? "opacity-[0.6]" : ""}`}>
                                    { loading ? <span className="animate-pulse">Please wait...</span> : "Sign up"}
                                </button>

                                <p className="text-center text-sm text-gray-600 dark:text-white/70">
                                    Already have an account?
                                    <Link className="text-primary decoration-2 hover:underline font-medium ms-1 inline-flex" href={"/signin"}> Sign in here</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        }
    </div>
  )
}

export default SignUpForm