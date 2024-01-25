import React, { useState } from 'react'
import { PiListBulletsLight } from "react-icons/pi";
import { HiOutlineComputerDesktop } from "react-icons/hi2"
import { IoCameraReverseOutline } from "react-icons/io5";
import { LuMonitor } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdPhoneIphone } from "react-icons/md";
import { PiHeadphones } from "react-icons/pi";
import { GiVirtualMarker } from "react-icons/gi";
import { BsUsbSymbol } from "react-icons/bs";
import { TbCircuitCapacitor } from "react-icons/tb";
import { RiCellphoneLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import SubHeaders from './SubHeaders';
import Supports from './Supports';


const Card = () => {
    const [chevron, setChevron] = useState(false)

    const handleClick = () => {
        setChevron(prev => !prev)
    }

    const heightInc = {
        height: chevron === true ? '33rem':'3rem',
        transition: chevron === true? 'height ease-in-out 1.6s':'height ease-in-out 0.8s'
    }
   
    return (
        <div className='w-full px-2'>
            <div className="md:w-[95%] w-[90%] md:mt-0  md:mx-10 flex items-start justify-start gap-6 overflow-x-hidden card-border mb-10">
                <div  className="w-[25%]   max-w-[21%] ">
                    <div onClick={handleClick} style={heightInc} className={`cursor-pointer   shop-category  overflow-hidden`}>
                        <h3 className='flex bg-[#fdbe55] text-white items-center justify-between h-12'><PiListBulletsLight className='text-4xl ' /> <span className='text-lg '>Shop Category</span> <span>{chevron ? <IoIosArrowDown className='text-3xl  pr-2' /> : <IoIosArrowForward className='text-3xl pr-2' />}</span> </h3>

                        <ul className={`category-list  px-2  `}>
                            <li className=''><span className='flex gap-4'><HiOutlineComputerDesktop className='text-2xl' /> <span className='text-sm'>Laptop & Computer</span></span> <span><IoIosArrowForward /></span></li>


                            <li><span className='flex gap-4'><IoCameraReverseOutline className='text-xl' /> <span className='text-sm'>Cameras</span> </span><span><IoIosArrowForward /></span></li>


                            <li><span className='flex gap-4'><IoGameControllerOutline className='text-xl' /> <span className='text-sm'>Gaming & Gadget</span></span> <span><IoIosArrowForward /></span></li>


                            <li><span className='flex gap-4'><LuMonitor className='text-xl' /> <span className='text-sm'>Tv & Audio</span> </span><span><IoIosArrowForward /></span></li>


                            <li><span className='flex gap-4'><MdPhoneIphone className='text-xl' /> <span className='text-sm'>Smart Phone & Tablet</span></span> <span><IoIosArrowForward /></span></li>
                            <li><span className='flex gap-4'><PiHeadphones className='text-xl' /> <span className='text-sm'>Headphones & Gadget</span></span> <span><IoIosArrowForward /></span></li>
                            <li><span className='flex gap-4'><GiVirtualMarker className='text-xl' /> <span className='text-sm'>Virtual Reality</span></span> <span><IoIosArrowForward /></span></li>


                            <li><span className='flex gap-4'><BsUsbSymbol className='text-xl' /> <span className='text-sm'>Accessories</span></span> <span><IoIosArrowForward /></span></li>


                            <li><span className='flex gap-4'><TbCircuitCapacitor className='text-xl' /> <span className='text-sm'>Auto Electronics</span></span> <span><IoIosArrowForward /></span></li>


                            <li><span className='flex gap-4'><RiCellphoneLine className='text-xl' /> <span className='text-sm'>Iphone & Cell Phone</span></span> <span><IoIosArrowForward /></span></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full overflow-hidden">
                    <div className="flex flex-col">
                        <ul className='flex items-center rounded-full justify-between w-4/6 px-2 text-start py-3 capitalize bg-[#fff9ef] gap-2  mb-4 text-[#0d1a50] font-bold text-md mt-2'>
                            <li className=' px-2 py-1 bg-white rounded-full cursor-pointer'>home</li>
                            <li><div className="flex items-center gap-2 px-4 py-1 bg-white rounded-full cursor-pointer">shop <span><IoIosArrowDown/></span></div></li>
                            <li><div className="flex items-center gap-2 px-4 py-1 bg-white rounded-full cursor-pointer">offer <span><IoIosArrowDown/></span></div></li>
                            <li className='px-4 py-1 bg-white rounded-full cursor-pointer'>news</li>
                            <li className='px-4 py-1 bg-white rounded-full cursor-pointer'>customer care</li>
                        </ul>
                        <SubHeaders/>
                    </div>
                    <Supports/>
                </div>

            </div>
        </div>
    )
}

export default Card