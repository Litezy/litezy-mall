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
        <div className='w-full px-2'>
            <div className="md:w-[95%] w-[90%] md:mt-0  md:mx-10 flex items-start justify-start gap-6 overflow-x-hidden card-border mb-10">
                <div  className="w-[25%]   max-w-[21%] ">
                  <AllCategories handleClick={() => handleClick()} heightInc={heightInc} state={chevron}/>
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