"use client"
import { faCircleQuestion, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useState } from 'react'
import Link from 'next/link';

const Icon = (
    <FontAwesomeIcon className="text-blue-600 mr-2" icon={faCircleQuestion} />
);

const SubItems = ({title, des})=>{
    return (
      <li className="my-4">
        <strong>{title}</strong> {des}
      </li>
    )
  }

const ContentItemList = ({title, content, subItems, btn}) => {
    const [ accordian, setAccordian ] = useState(true);
    return (
        <div className="mb-10">
          <h3 className="text-xl flex justify-between items-center font-medium text-gray-900">
            <span>
              {Icon}
              {title}
            </span>
            <FontAwesomeIcon className='cursor-pointer' title={accordian ? 'close' : 'open'} icon={accordian ? faMinus : faPlus} onClick={()=>setAccordian(!accordian)}/>
          </h3>
          <div className={`my-4 ${accordian ? 'block' : 'hidden'}`}>
            <p className="text-xss font-light leading-normal">
              {content}
            </p>
            <ul className="text-xss font-light leading-normal mt-4">     
              {
                subItems?.map((content, ind)=>(
                  <SubItems key={ind} {...content}/>
                ))
              }
            </ul>
            {
                btn &&
                <div className="text-center mt-10">
                    <Link href={'/signup'} target="_blank" className="bg-green-400 rounded-sm px-4 py-2 text-sm text-white mr-0 inline-block mb-2 lg:mt-0 uppercase">
                      Start a Free Trial
                    </Link>
                </div>
            }
          </div>
        </div>
    );
}

export default memo(ContentItemList)