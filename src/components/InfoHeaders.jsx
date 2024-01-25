import React from 'react'
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhone, FaUserLarge } from "react-icons/fa6";
import { MdScreenshotMonitor } from "react-icons/md";


const InfoHeaders = () => {
    return (
        <div className='info hidden lg:flex'>
            <div className=" flex w-[80%] mx-auto h-8 ">
                <div className="w-[50%] flex items-center gap-8  ">
                    <p className='flex items-center gap-3 text-[12px]'><FaPhone className='text-lg cursor-pointer' /> <span className='cursor-pointer'> +234-812-555</span></p>
                    <p className='flex items-center gap-3 text-[12px]'><FaEnvelopeOpen className='text-lg cursor-pointer' /> <span className='cursor-pointer'>johndoe@gmail.com</span></p>
                </div>
                <div className="w-[50%] flex items-center justify-end  gap-8 ">
                    <p className='flex items-center gap-3 text-[12px]'><MdScreenshotMonitor className='text-lg cursor-pointer'/> <span className=' cursor-pointer'> Track Order</span></p>
                    <p className='flex items-center gap-3 text-[12px]'><FaUserLarge className='text-lg cursor-pointer'/> <span className='cursor-pointer'>Login/Register</span></p>
                </div>
            </div>
        </div>
    )
}

export default InfoHeaders