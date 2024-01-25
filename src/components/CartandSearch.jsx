import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaEnvelopeOpen, FaPhone, FaRotate, FaUserLarge } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { MdScreenshotMonitor } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CartandSearch = () => {
    const [bars, setBars] = useState(false)
   

    const Icon = bars === true? AiOutlineClose : FaBars
    const Change = () => { 
        setBars(prev =>  !prev )
    }
    


    // const transformBar = {
    //     transform: bars === true ? 'rotate(180deg)': 'rotate(0deg)',
    //     transition: bars === true ? 'all ease-in-out 1.3s': 'all ease-in-out 1.3s'
    // }
    return (
        <div>
            <div className={`flex items-center w-[100%] justify-between mx-auto pt-2 ${bars ? 'fixed z-20 bg-slate-400/50':''}`}>
                <div className="cart pl-8 md:px-10 w-[80%] md:w-fit flex items-center justify-between gap-3  ">
                    <FiShoppingCart className='text-4xl md:text-5xl font-bold text-yellow-400' />
                    <p className='md:font-bold font font-medium text-md md:text-4xl text-[#0d1a50] w-full'>Litezy Mall</p>
                </div>
                <div className="md:hidden text-3xl w-20 flex items-center justify-center">
                    <Icon id='bars'  onClick={Change} className="transition-all icon ease-in-out duration-100" />
                   
                </div>
                <div className="w-[40%] hidden lg:flex">

                    <div className="border-2 bg-[#fff9ef] px-2 w-full ap-3 outline-none h-16 rounded-full shadow-md flex items-center justify-between">
                        <p className='flex items-center rounded-full gap-2 px-4 py-3 bg-white  font-medium text-sm '>All Categories <RiArrowDropDownLine className='font-light text-2xl cursor-pointer' /></p>
                        <input className=' w-[50%] bg-transparent text-sm pl-4 h-10 outline-none' type="text" placeholder='Search Products...' />
                        <button className='bg-[#fdbe55] text-lg px-6 py-2 rounded-full text-white '>Search</button>
                    </div>
                </div>

                 <div className={`w-[100%] absolute  z-20 font top-10 px-auto bg-[#fdbe55] text-white right-0 border rounded-sm ${bars ? 'h-[16rem] ':'h-0 '} overflow-hidden md:hidden transition-all ease-in-out duration-1000 `}>
                    <ul className='flex items-left gap-2 flex-col w-[80%] mx-auto py-3'>
                        <Link className='flex items-left gap-2'>
                            <FaEnvelopeOpen className='' />
                            <span className='text-md'>Contact</span></Link>
                        <hr className='bg-white' />
                        <Link className='flex items-center gap-2'><FaUserLarge className='' /> <span>Login</span></Link>
                        <hr className='bg-white' />
                        <Link className='flex items-center gap-2'>  <MdScreenshotMonitor className='' /> <span>Track Order</span></Link>
                        <hr className='bg-white' />
                        <Link className='flex items-center gap-2 '><FaRotate className=' cursor-pointer' /> <span>Compare</span></Link>
                         <hr className='bg-white' />
                        <Link className='flex items-center gap-2 text-sm'><IoIosHeartEmpty className=' cursor-pointer' /> <span>Wish List(0)</span></Link>
                         <hr className='bg-white' />
                        <Link className='flex items-center gap-2 text-sm'><TiShoppingCart className=' cursor-pointer' /> <span>Cart ($8.00)</span></Link>
                         <hr className='bg-white' />
                    </ul>
                </div>
                <div className=" w-[30%] hidden md:flex">
                    <ul className='flex items-center w-[80%] mx-auto justify-between'>
                        <li className='flex items-center gap-2 '><FaRotate className=' cursor-pointer' /> <span>Compare</span></li>
                        <li className='flex items-center gap-2 text-sm'><IoIosHeartEmpty className=' cursor-pointer' /> <span>Wish List(0)</span></li>
                        <li className='flex items-center gap-2 text-sm'><TiShoppingCart className=' cursor-pointer' /> <span>Cart ($8.00)</span></li>
                    </ul>
                </div>
            </div>

            <div className="w-[90%] h-fit mx-auto mt-4 md:hidden">

                    <div className=" bg-[#fff9ef] px-2 w-full ap-3 outline-none h-fit rounded-full shadow-md flex items-center justify-between">
                        <p className='flex border justify-center items-center rounded-full gap-2 px-1 pl-1 bg-white  font-medium text-[10px] '>All Categories <RiArrowDropDownLine className='font-light text-3xl cursor-pointer' /></p>
                        <input className=' w-[50%] bg-transparent text-[12px] pl-4 h-10 outline-none' type="text" placeholder='Search Products...' />
                        <button className='bg-[#fdbe55] text-lg px-fit py-2 rounded-full text-white '>Search</button>
                    </div>
                </div>
        </div>
    )
}

export default CartandSearch