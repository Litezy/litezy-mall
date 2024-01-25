import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { PiChatsLight } from "react-icons/pi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
const Supports = () => {
  


     const support = [
        {
            title: 'Free delivery',
            desc:'Free shipping on all order',
            image: <CiDeliveryTruck/>
        },
        {
            title: 'Online support 24/7',
            desc:'Support online 24 hours a day',
            image: <PiChatsLight/>
        },
        {
            title: 'Money return',
            desc:'back guarantor under 7 days',
            image: <FaRegMoneyBillAlt/>
        },
        {
            title: 'Special offer',
            desc:'On every order above $1000',
            image: <FaWallet/>
        },
     ]
  return (
    <div className='flex items-center justify-between mt-3 w-full'>
        {support.map((item,index) => (
            <div className="flex items-center justify-between gap-4" key={index} >
                <div className="px-2 py-2 rounded-full bg-[#ffeccc]">
                <div className="text-xl">
                {item.image}
                </div>
                </div>
                <div className="">
                   <div className="font-bold text-[#070f47] capitalize text-sm font"> {item.title}</div>
                   <div className="capitalize text-sm"> {item.desc}</div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Supports