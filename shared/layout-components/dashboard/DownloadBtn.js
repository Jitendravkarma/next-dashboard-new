"use client"
import React from 'react'
import { CSVLink } from 'react-csv';

const cls = {btn:"ti-btn ti-btn-outline !border-indigo-500 text-indigo-500 hover:text-white hover:bg-indigo-500 hover:!border-indigo-500 focus:ring-indigo-500 dark:focus:ring-offset-white/10"};

const button_name = "Download CSV"
const icon = <i className="ri-download-2-line"></i>

const DownloadDisabled = ({disabled}) => {
  return (
    <button
        type="button"
        className={cls.btn}
        disabled={disabled}
    >
        {button_name}
        {icon}
    </button>
  )
}

const Download = ({data, csvHeaders, fileName, customCls, button_name="Download CSV"})=>{
    return (
        <CSVLink
            data={data}
            headers={csvHeaders}
            className={customCls ? customCls : cls.btn}
            filename={fileName}
        >
            {button_name}
            {icon}
        </CSVLink>
    )
}

const DownloadFree = ({openDownloadBox, setOpenDownloadBox})=>{
    return (
        <button
            type="button"
            onClick={()=>setOpenDownloadBox(!openDownloadBox)}
            className={cls.btn}
            title="Download CSV file"
        >
            {button_name}
            {icon}
        </button>
    )
}

export { DownloadDisabled, Download, DownloadFree}