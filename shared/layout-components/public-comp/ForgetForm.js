"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useUserContext } from "@/shared/userContext/userContext";
import { forgetPhaseFirst } from "@/shared/apis/api";
import Snackbar from '../dashboard/SnackBar';

const ForgetForm = () => {
    const refEle = useRef()
    const { openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
	const [ email, setEmail ] = useState("")
	const [ loading, setLoading ] = useState(false)
	const handleSubmit = async (e)=>{
		e.preventDefault()
		setLoading(true)
		if(email){
			const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
			if(validEmail.test(email)){
				try {
					const response = await forgetPhaseFirst({email});
					if (response) {
						openSnackBar()
						handleSnackMessage('Password reset link sent to your email. Check inbox/spam.', "white", "text-success")
						setLoading(false);
					}
				} catch (error) {
					openSnackBar();
					if(error.response?.data?.errors?.email === "email not valid")
						handleSnackMessage("Email is not registered yet!", "white", "text-danger")
					else 
						console.log(error)
				} finally {
					setLoading(false)
				}
			}
			else {
				openSnackBar()
				handleSnackMessage('Invalid email address!', "white", "text-danger")
			}
		}
		else {
			openSnackBar()
			handleSnackMessage('Please enter your email!', "white", "text-danger")
		}
	}
    useEffect(()=>{
        refEle.current.focus()
    }, [])
  return (
    <div className="mt-5">
        {
            openSnack &&
            <Snackbar isOpen={openSnack} content={snackMessage}/>
        }
        <form onSubmit={handleSubmit}>
            <div className="grid gap-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                    <div className="relative">
                        <input type="email" id="email" ref={refEle} name="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                            className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                            placeholder="Enter email"
                            required />
                    </div>
                </div>
                <button type="submit"
                    className={`py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10 ${loading ? "opacity-[0.6]" : ""}`}>
                    { loading ? <span className="animate-pulse">Please wait...</span> : "Send link"}
                </button>
                <p className="text-center text-sm text-gray-600 dark:text-white/70">
                    Remember your password?
                    <Link className="text-primary decoration-2 hover:underline font-medium ms-1 inline-flex"
                        href={"/signin"}>
                        Sign in here
                    </Link>
                </p>
            </div>
        </form>
    </div>
  )
}

export default ForgetForm