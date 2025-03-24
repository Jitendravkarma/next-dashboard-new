"use client";
import React from "react";
import Snackbar from "../dashboard/SnackBar";
import { useUserContext } from "@/shared/userContext/userContext";

const CopyCommand = ({content, id}) => {
  const {openSnack, snackMessage, openSnackBar, handleSnackMessage } = useUserContext()
    const handleCopy = ()=>{
        const codeText = document.getElementById(id).innerText;
        navigator.clipboard.writeText(codeText).then(function() {
          openSnackBar()
          handleSnackMessage("Content copied successfully!", "success", "text-white")
        }).catch(function(err) {
          openSnackBar()
          handleSnackMessage("Failed to copy!", "white", "text-danger")
        });
    }
  return (
    <>
        {
          openSnack &&
          <Snackbar content={snackMessage} isOpen={openSnack}/>
        }
        <b><code id={id}>{content} {" "}</code></b>
        <button
          onClick={handleCopy}
          className="text-gray-800 group hover:text-blue-500"
          title="Copy this command.">
          <i className="text-lg ri-file-copy-line" />{" "}
        </button>
    </>
  );
};

export default CopyCommand;
