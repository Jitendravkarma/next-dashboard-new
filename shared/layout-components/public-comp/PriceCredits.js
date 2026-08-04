"use client"
import { useUserContext } from '@/shared/userContext/userContext';
import Link from 'next/link';
import React, { useState } from 'react'
import { Tooltip } from './Button';

const PriceCredits = () => {
    const { isUSDPrice, setIsUSDPrice, priceObj } = useUserContext();
    const [ switchCredit, setSwitchCredit ] = useState('50');
    
    const plans = [
        {
            name: "WhatsApp Verifier",
            des: "Check if a phone number is registered on WhatsApp",
            '50': {
                credits: 50000,
                price: priceObj.firstWhatsapp,
                buyLink: priceObj.firstWhatsappBuy
            },
            '75': {
                credits: 75000,
                price: priceObj.secondWhatsapp,
                buyLink: priceObj.secondWhatsappBuy
            },
            '100': {
                credits: 100000,
                price: priceObj.thirdWhatsapp,
                buyLink: priceObj.thirdWhatsappBuy
            },
        },
        {
            name: "Email Verifier",
            des: "Check whether an email address is valid and deliverable",
            '50': {
                credits: 50000,
                price: priceObj.firstEmailVeri,
                buyLink: priceObj.firstEmailVeriBuy
            },
            '75': {
                credits: 75000,
                price: priceObj.secondEmailVeri,
                buyLink: priceObj.secondEmailVeriBuy
            },
            '100': {
                credits: 100000,
                price: priceObj.thirdEmailVeri,
                buyLink: priceObj.thirdEmailVeriBuy
            },
        },
        {
            name: "Email Sender",
            des: "Validate email addresses and send bulk email campaigns",
            '50': {
                credits: 50000,
                price: priceObj.firstEmailSend,
                buyLink: priceObj.firstEmailSendBuy
            },
            '75': {
                credits: 75000,
                price: priceObj.secondEmailSend,
                buyLink: priceObj.secondEmailSendBuy
            },
            '100': {
                credits: 100000,
                price: priceObj.thirdEmailSend,
                buyLink: priceObj.thirdEmailSendBuy
            },
        },
        {
            name: "GST Verifier",
            des: "Check a GST number and get its information including contact info",
            '50': {
                credits: 50000,
                price: priceObj.firstGST,
                buyLink: priceObj.firstGSTBuy
            },
            '75': {
                credits: 75000,
                price: priceObj.secondGST,
                buyLink: priceObj.secondGSTBuy
            },
            '100': {
                credits: 100000,
                price: priceObj.thirdGST,
                buyLink: priceObj.thirdGSTBuy
            },
        },
         {
            name: "AI Message Generator",
            des: "Generate multiple AI message and email content",
            '50': {
                credits: 50000,
                price: priceObj.firstAI,
                buyLink: priceObj.firstAIBuy
            },
            '75': {
                credits: 75000,
                price: priceObj.secondAI,
                buyLink: priceObj.secondAIBuy
            },
            '100': {
                credits: 100000,
                price: priceObj.thirdAI,
                buyLink: priceObj.thirdAIBuy
            },
        },
    ];

    const loadPrice = ()=>{
        setIsUSDPrice(!isUSDPrice);
    }

    return (
        <div className="">
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
          <div className="mx-auto flex w-fit gap-1 items-center rounded-full bg-white p-3 shadow-sm mb-5">
            <button className={`rounded-full ${switchCredit === '50' ? 'shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-indigo-500 text-white' : 'text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-sm'} px-6 py-2.5 text-sm font-semibold transition-all duration-300`} onClick={()=>setSwitchCredit('50')}>50k Credits</button>
            <button className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${switchCredit === '75' ? 'shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-indigo-500 text-white' : 'text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-sm'}`} onClick={()=>setSwitchCredit('75')}>75k Credits</button>
            <button className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${switchCredit === '100' ? 'shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-indigo-500 text-white' : 'text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-sm'}`} onClick={()=>setSwitchCredit('100')}>100k Credits</button>
          </div>
          <div className='overflow-x-auto'>
            <div className="w-[1200px] mx-auto md:w-auto overflow-x-auto">
              <table className="w-full bg-white py-20 px-6 rounded-md">

                <thead>
                  <tr className="text-left text-sm text-slate-600">

                    <th className="px-8 py-5 font-semibold">
                      Service
                    </th>

                    <th className="px-6 py-5 text-center font-semibold capitalize">
                      Monthly Credits
                    </th>

                    <th className="px-6 py-5 text-center font-semibold capitalize">
                      Monthly Price

                      {/* <button className='ml-2 text-blue-500 text-xs py-1 px-2 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white' onClick={loadPrice}>
                          {isUSDPrice ? 'INR' : 'USD'}
                      </button> */}
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
                          {
                            plan.name.toLowerCase() === 'ai message generator' ? 
                            <Tooltip
                              width="w-36"
                              position="bottom"
                              content={`${switchCredit === '50' ? '1' : switchCredit === '75' ? '3' : '5'} Million tokens per month`}
                            >
                              <span tabIndex={0}>{switchCredit === '50' ? '1M' : switchCredit === '75' ? '3M' : '5M'}</span>
                            </Tooltip>
                            :
                            <Tooltip
                              width="w-36"
                              position="bottom"
                              content={`${switchCredit === '50' ? '50,000' : switchCredit === '75' ? '75,000' : '100,000'} credits per month`}
                            >
                              <span tabIndex={0}>{switchCredit === '50' ? '50k' : switchCredit === '75' ? '75k' : '100k'}</span>
                            </Tooltip>
                          }
                        </span>

                      </td>


                      {/* Monthly Price */}
                      <td className="px-6 py-6 text-center">

                        <span className="text-xl font-black text-slate-900">
                          {priceObj.priceTag}{switchCredit === '50' ? plan['50'].price : switchCredit === '75' ? plan['75'].price : plan['100'].price}
                        </span>

                        <span className="text-xs text-slate-500">
                          /mo
                        </span>
                      </td>

                      {/* Button */}
                      <td className="px-8 py-6 text-center">

                        <Link
                          href={switchCredit === '50' ? plan['50'].buyLink : switchCredit === '75' ? plan['75'].buyLink : plan['100'].buyLink}
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
        </div>
    )
}

export default PriceCredits