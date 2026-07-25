"use client"
import { useUserContext } from '@/shared/userContext/userContext';
import Link from 'next/link';
import React, { useState } from 'react'

const PriceCredits = () => {
    const { isUSDPrice, setIsUSDPrice, priceObj } = useUserContext();
    const [ switchCredit, setSwitchCredit ] = useState('monthly');
    
    const plans = [
        {
            name: "WhatsApp Verifier",
            des: "Verify weather number is WhatsApp user",
            monthly: {
                credits: 100,
                price: priceObj.monWhatsapp,
                buyLink: priceObj.monWhatsappBuy
            },
            yearly: {
                credits: 1500,
                price: priceObj.yearWhatsapp,
                buyLink: priceObj.yearWhatsappBuy
            },
        },
        {
            name: "Email Verifier",
            des: "Check which email address is fully valid",
            monthly: {
                credits: 300,
                price: priceObj.monEmailVeri,
                buyLink: priceObj.monEmailVeriBuy
            },
            yearly: {
                credits: 4500,
                price: priceObj.yearEmailVeri,
                buyLink: priceObj.yearEmailVeriBuy
            },
        },
        {
            name: "Email Sender",
            des: "Send emails in bulk",
            monthly: {
                credits: 800,
                price: priceObj.monEmailSend,
                buyLink: priceObj.monEmailSendBuy
            },
            yearly: {
                credits: 12000,
                price: priceObj.yearEmailSend,
                buyLink: priceObj.yearEmailSendBuy
            },
        },
        {
            name: "AI Message Generator",
            des: "Generate multiple AI message",
            monthly: {
                credits: 500,
                price: priceObj.monAI,
                buyLink: priceObj.monAIBuy
            },
            yearly: {
                credits: 7500,
                price: priceObj.yearAI,
                buyLink: priceObj.yearAIBuy
            },
        },
        {
            name: "GST Verifier",
            des: "Verify a GST number to get info",
            monthly: {
                credits: 1000,
                price: priceObj.monGst,
                buyLink: priceObj.monGSTBuy
            },
            yearly: {
                credits: 15000,
                price: priceObj.yearGst,
                buyLink: priceObj.yearGSTBuy
            },
        },
    ];

    const loadPrice = ()=>{
        setIsUSDPrice(!isUSDPrice);
    }

    return (
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Our Credits{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-gray-600">
              Choose the plan that best fits your business needs
            </p>
          </div>
          <div className="overflow-x-auto">
            <div className="mx-auto flex w-fit gap-1 items-center rounded-full bg-white p-3 shadow-sm mb-5">
              <button className={`rounded-full ${switchCredit === 'monthly' ? 'bg-indigo-500 text-white' : 'text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-sm'} px-6 py-2.5 text-sm font-semibold transition-all duration-300`} onClick={()=>setSwitchCredit('monthly')}>Monthly</button>
              <button className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${switchCredit === 'yearly' ? 'bg-indigo-500 text-white' : 'text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-sm'}`} onClick={()=>setSwitchCredit('yearly')}>Yearly</button>
            </div>
            <table className="w-full bg-white py-20 px-6 rounded-md">

              <thead>
                <tr className="text-left text-sm text-slate-600">

                  <th className="px-8 py-5 font-semibold">
                    Service
                  </th>

                  <th className="px-6 py-5 text-center font-semibold capitalize">
                    {switchCredit} Credits
                  </th>

                  <th className="px-6 py-5 text-center font-semibold capitalize">
                    {switchCredit} Price

                    <button className='ml-2 text-blue-500 text-xs py-1 px-2 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white' onClick={loadPrice}>
                        {isUSDPrice ? 'INR' : 'USD'}
                    </button>
                  </th>

                  <th className="px-8 py-5 text-center">
                    Action
                  </th>

                </tr>
              </thead>


              <tbody>

                {plans.map((plan, index) => (

                  <tr
                    key={plan.name}
                    className="group border-t border-slate-100 transition hover:bg-indigo-50/50"
                  >

                    {/* Service */}
                    <td className="px-8 py-6">

                      <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-md">

                          <span className="text-lg font-bold">
                            {index + 1}
                          </span>

                        </div>


                        <div>
                          <h3 className="font-bold text-slate-900">
                            {plan.name}
                          </h3>

                          <p className="mt-1 text-xs text-slate-500">
                            {plan.des}
                          </p>
                        </div>

                      </div>

                    </td>


                    {/* Monthly Credits */}
                    <td className="px-6 py-6 text-center">

                      <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-bold text-indigo-700">
                        {switchCredit === 'monthly' ? plan.monthly.credits : plan.yearly.credits}
                      </span>

                    </td>


                    {/* Monthly Price */}
                    <td className="px-6 py-6 text-center">

                      <span className="text-xl font-black text-slate-900">
                        {priceObj.priceTag}{switchCredit === 'monthly' ? plan.monthly.price : plan.yearly.price}
                      </span>

                      <span className="text-xs text-slate-500">
                        /mo
                      </span>
                    </td>

                    {/* Button */}
                    <td className="px-8 py-6 text-center">

                      <Link
                        href={switchCredit === 'monthly' ? plan.monthly.buyLink : plan.yearly.buyLink}
                        target='_blank'
                        className="rounded-xl border border-indigo-500 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 px-5 py-2.5 text-sm font-semibold text-indigo-500 hover:text-white shadow-md transition hover:scale-105 hover:shadow-lg
                        "
                      >
                        Buy Now
                      </Link>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>
          </div>
        </div>
    )
}

export default PriceCredits