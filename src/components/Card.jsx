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
import AllCategories from '../utils/AllCategories';


const Card = () => {
    const [chevron, setChevron] = useState(false)

    const handleClick = () => {
        setChevron(prev => !prev)
        console.log('clicked')
    }

    const heightInc = {
        height: chevron === true ? '33rem':'3rem',
        transition: chevron === true? 'height ease-in-out 1.6s':'height ease-in-out 0.8s'
    }
   
    return (
        <div className='w-full px-2 -mt-8 md:mt-0'>
            <div className="md:w-[95%] w-[90%] md:mt-0  md:mx-10 flex items-start justify-start gap-6 overflow-x-hidden card-border mb-10">
                <div  className="w-[25%]  hidden md:flex max-w-[21%] ">
                  <AllCategories handleClick={() => handleClick()} heightInc={heightInc} state={chevron}/>
                </div>
                <div className=" mx-auto md:w-full overflow-hidden">
                    <div className="flex flex-col w-full ">
                        <ul className='flex  items-center  w-full md:rounded-full justify-between md:w-4/6 px-2 text-center md:text-start py-3 capitalize md:bg-[#fff9ef] gap-2  mb-4 text-[#0d1a50] font-bold text-sm md:text-md mt-2 h-fit'>
                            <li className=' px-2 py-1 md:bg-white rounded-full cursor-pointer'>home</li>
                            <li><div className="md:flex md:items-center gap-2 md:px-4 md:py-1 md:bg-white rounded-full cursor-pointer">shop <span><IoIosArrowDown className='hidden md:flex'/></span></div></li>
                            <li><div className="md:flex md:items-center gap-2 md:px-4 md:py-1 md:bg-white rounded-full cursor-pointer">offer <span><IoIosArrowDown className='hidden md:flex'/></span></div></li>
                            <li className='md:px-4 md:py-1 md:bg-white rounded-full cursor-pointer'>news</li>
                            <li className='md:px-4 md:py-1 md:bg-white rounded-full cursor-pointer'>customer care</li>
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