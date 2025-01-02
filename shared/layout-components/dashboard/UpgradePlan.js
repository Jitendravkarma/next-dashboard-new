import React from 'react'
import { useUserContext } from '@/shared/userContext/userContext'

const UpgradePlan = () => {
    const { isActivated } = useUserContext()
  return (
    <>
        {
            !isActivated &&
            <div className="col-span-12 xxxl:col-span-3">
                <div className="box bg-gradient-to-r from-primary to-secondary">
                    <div className="box-body">
                        <div className="sm:flex ">
                            <div>
                                <h2 className="text-xl text-white font-semibold">Upgrade to Pro</h2>
                                <p className="text-sm text-white/80">For Premium benifits</p>
                            </div>
                            <button type="button" className="ti-btn ti-btn-light my-auto ltr:ml-auto rtl:mr-auto">Upgrade</button>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default UpgradePlan