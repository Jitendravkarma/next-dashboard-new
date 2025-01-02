"use client"
import React from 'react'
import { CSVLink } from 'react-csv';

const cls = {btn:"px-3 mr-2 py-2 mt-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-600 rounded-sm hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed"};

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