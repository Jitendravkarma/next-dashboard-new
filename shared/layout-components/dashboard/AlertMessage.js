import React from 'react'

const AlertMessage = ({type, message}) => {
    let RenderAlert = ()=>{
        if(type === "error"){
            return (
                <div className={`bg-danger/10 border border-danger/10 alert text-danger`} role="alert">
                    <span className="font-bold">Error</span> alert! You should check in on some of those fields below.
                </div>
            )
        }
        if(type === "success"){
            <div className={`bg-success/10 border border-success/10 alert text-success`} role="alert">
                <span className="font-bold">Success</span> alert! You should check in on some of those fields below.
            </div>
        }
        if(type === "failure"){
            <div className={`bg-info/10 border border-info/10 alert text-info`} role="alert">
                <span className="font-bold">Info</span> alert! You should check in on some of those fields below.
            </div>
        }
    }
  return (
    <div>
        <RenderAlert/>
    </div>
  )
}

export default AlertMessage