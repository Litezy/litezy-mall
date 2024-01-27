import React from 'react'
import { BsUsbSymbol } from 'react-icons/bs'
import { GiVirtualMarker } from 'react-icons/gi'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { IoCameraReverseOutline, IoGameControllerOutline } from 'react-icons/io5'
import { LuMonitor } from 'react-icons/lu'
import { MdPhoneIphone } from 'react-icons/md'
import { PiHeadphones, PiListBulletsLight } from 'react-icons/pi'
import { RiCellphoneLine } from 'react-icons/ri'
import { TbCircuitCapacitor } from 'react-icons/tb'

const AllCategories = ({handleClick,heightInc,state }) => {
  return (
    <div onClick={handleClick} style={heightInc} className={`cursor-pointer   shop-category  overflow-hidden`}>
    <h3 className='flex bg-[#fdbe55] text-white items-center justify-between h-12'><PiListBulletsLight className='text-4xl ' /> <span className='text-lg '>Shop Category</span> <span>{state ? <IoIosArrowDown className='text-3xl  pr-2' /> : <IoIosArrowForward className='text-3xl pr-2' />}</span> </h3>

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
  )
}

export default AllCategories