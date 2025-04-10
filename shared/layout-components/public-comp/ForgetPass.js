"use client"
import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter, validateConfiremPass, validatePassword } from '@/shared/data/static-content/helpers';
import { forgetPhaseLast } from '@/shared/apis/api';
// import Snackbar from '../../components/Snackbar';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Snackbar from '../dashboard/SnackBar';
import { useUserContext } from '@/shared/userContext/userContext';

const ForgotPass = () => {
  const { openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
  const navigate = useRouter();
  const [key, setKey] = useState(null);
  const [loader, setLoader] = useState(false);
  const [showHideCnfrmPassword, setShowHideCnfrmPassword] = useState(false)
  const [showHidePassword, setShowHidePassword] = useState(false);

  const [confirmationData, setConfirmationData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [confirmationErrors, setConfirmationErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const queryParams = new URLSearchParams(window.location.search);
        const queryKey = queryParams.get('key');
  
        if (queryKey) {
          setKey(queryKey);
        } else {
          navigate.push('/signin')
        }
    }
  }, [])

  const cnfrmHandleChange = (e) => {
    const { name, value } = e.target;
    if(value.length < 25){
    setConfirmationData({ ...confirmationData, [name]: value });
    }
  };

  const cnfrmHandleBlur = (e) => {
    const { name, value } = e.target;
    // console.log("name", name);
    if (name === "password") {
      const passwordError = validatePassword(value);
      setConfirmationErrors({ ...confirmationErrors, [name]: passwordError });
    }
    if (name === "confirmPassword") {
      const error = validateConfiremPass(confirmationData.password, value);
      setConfirmationErrors({ ...confirmationErrors, [name]: error });
    }
  };

  const convertToRequest = (object) => {
    delete object.confirmPassword;
    // Assign new key
    object["token"] = key;

    // Delete old key
    delete object["confirmPassword"];
    return object;
  }

  const cnfrmHandleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {
      password: validatePassword(confirmationData.password),
      confirmPassword: validateConfiremPass(
        confirmationData.password,
        confirmationData.confirmPassword
      ),
    };
    setConfirmationErrors(newErrors);
    if (
      !newErrors.password &&
      !newErrors.confirmPassword
    ) {
      try {
        setLoader(true);
        const latestObject = convertToRequest(confirmationData);
        const response = await forgetPhaseLast(confirmationData);

        if (response) {
          delete confirmationData.password
          // console.log("response", response)
          setTimeout(()=>{
            navigate.push("/signin");
          }, 5000)
          showSnackbar("Password changed successfully!", "white", "text-success")
        }
        setLoader(false);
      } catch (error) {
        // console.log("error", error);
        delete confirmationData.password
        const response = error?.response?.data?.errors;
        if (response) {
          const emailError = response.email;
          if (emailError) {
            const object = capitalizeFirstLetter(emailError);
            // console.log("object", object);
            setConfirmationErrors({ ...confirmationErrors, password: object });
            showSnackbar("Invalid or expired token!", "white", "text-danger")
          }
        }
        setLoader(false);
      }
    }
  };
  const showSnackbar = (message, bg="white", text="text-danger") => {
    openSnackBar();
    handleSnackMessage(message, bg, text)
  };
  return (
    <>
      {
        openSnack &&
        <Snackbar content={snackMessage} isOpen={openSnack}/>
      }

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <Link href="/">
            <img src={"../../../assets/img/brand-logos/desktop-logo.png"} alt="logo" className="max-w-full my-5 mx-auto mb-5" />
          </Link>

          <h2 className="text-xl uppercase text-center font-bold text-gray-900">
            Reset Your Password
          </h2>
          <form onSubmit={cnfrmHandleSubmit} className="mt-4" action="#">
            <div className="grid md:grid-cols-2 items-center md:gap-6">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    value={confirmationData.password}
                    onChange={cnfrmHandleChange}
                    onBlur={cnfrmHandleBlur}
                    type={!showHidePassword ? "password" : "text"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className={`${confirmationErrors.password ? "border-red-500" : "border-gray-300"
                      } mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  />
                  <div className="absolute top-2/4 -translate-y-1/2 right-0 pe-3">
                    {
                        !showHidePassword ? 
                        <i className="ri-eye-line cursor-pointer text-xxs" onClick={() => setShowHidePassword(!showHidePassword)}/>:
                        <i className="ri-eye-off-line cursor-pointer text-xxs" onClick={() => setShowHidePassword(!showHidePassword)}/>
                    }
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmpassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    value={confirmationData.confirmPassword || ""}
                    onChange={cnfrmHandleChange}
                    onBlur={cnfrmHandleBlur}
                    type={!showHideCnfrmPassword ? "password" : "text"}
                    name="confirmPassword"
                    id="confirmpassword"
                    placeholder="••••••••"
                    className={`${confirmationErrors.confirmPassword ? "border-red-500" : "border-gray-300"
                      } mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-smpe-6`}
                  />
                  <div className="absolute top-2/4 -translate-y-1/2 right-0 pe-3">

                  {
                      !showHideCnfrmPassword ? 
                      <i className="ri-eye-line cursor-pointer text-xxs" onClick={() => setShowHideCnfrmPassword(!showHideCnfrmPassword)}/>:
                      <i className="ri-eye-off-line cursor-pointer text-xxs" onClick={() => setShowHideCnfrmPassword(!showHideCnfrmPassword)}/>
                  }
                  </div>
                </div>
              </div>
            </div>

            {confirmationErrors.password && (
              <p className="text-xs text-red-400 mt-2">
                {confirmationErrors.password}
              </p>
            )}

            {confirmationErrors.confirmPassword && (
              <p className="text-xs text-red-400 mt-2">
                {confirmationErrors.confirmPassword}
              </p>
            )}

            <div className="text-center mt-2">
              <input
                type="submit"
                className="w-full cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed focus:ring-offset-2"
                value={loader? "Please wait..." : "Continue"}
                disabled={loader}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPass
