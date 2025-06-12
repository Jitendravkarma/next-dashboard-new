"use client"
import { googleSignIn, setAuthToken } from "@/shared/apis/api";
import { useUserContext } from "@/shared/userContext/userContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Snackbar from "../dashboard/SnackBar";

const GoogleSignIn = () => {
  const { handleSignIn, handleSignOut, openSnack, snackMessage, openSnackBar, handleSnackMessage, resellerContactInfo } = useUserContext()
  const navigate = useRouter();
  useEffect(() => {
    // Load the Google Identity Services script
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Define the callback function
    window.handleCredentialResponse = async (response) => {
      const idToken = response.credential;
      //   console.log("Google ID Token:", idToken);
      handleSignOut();
      if (idToken) {
        const token = { googletoken: idToken, ParentEmail: resellerContactInfo.email };
        try {
          const tokenResponse = await googleSignIn(token);
          if (tokenResponse) {
            setAuthToken(tokenResponse.access_token);
            handleSignIn(tokenResponse.user, tokenResponse.user.verified);
            navigate.push("/downloads");
          }
        } catch (error) {
          openSnackBar();
          handleSnackMessage("Something went wrong please try again after sometime!", "white", "text-danger")
        }
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {
        openSnack &&
        <Snackbar content={snackMessage} isOpen={openSnack}/>
      }
      <div className="mt-6 mb-3">
        <div
          id="g_id_onload"
          data-client_id="814721069109-v5vk5ahio8guutc53ha8vsjkh36raa7d.apps.googleusercontent.com"
          data-callback="handleCredentialResponse"
        ></div>
        <div className="g_id_signin w-full flex justify-center" data-type="standard"></div>
      </div>
      {/* divider */}
      <div
        className="py-5 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 ltr:before:mr-6 rtl:before:ml-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 ltr:after:ml-6 rtl:after:mr-6 dark:text-white/70 dark:before:border-white/10 dark:after:border-white/10">
        Or
      </div>
    </>
  );
};

export default GoogleSignIn;
