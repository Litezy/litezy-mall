import React from 'react'
import { BsUsbSymbol } from 'react-icons/bs'
import { GiVirtualMarker } from 'react-icons/gi'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { IoIosArrowForward } from 'react-icons/io'
import { IoCameraReverseOutline, IoGameControllerOutline } from 'react-icons/io5'
import { LuMonitor } from 'react-icons/lu'
import { MdPhoneIphone } from 'react-icons/md'
import { PiHeadphones } from 'react-icons/pi'
import { RiCellphoneLine } from 'react-icons/ri'
import { TbCircuitCapacitor } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const SubCategories = ({showSub}) => {
  return (
    <div className={` w-[80%] ml-1 absolute py-3 z-20 top-[15%] h-fit rounded-md font overflow-hidden bg-[#fdbe55] mt-1 md:hidden transition-all ease-in-out `}>
      <ul className={`${ showSub ? 'h-[10rem]':'h-0'} grid grid-cols-2 text-white gap-2 px-2 w-11/12 mx-auto h-full text-sm  subcategory`}>
        <Link to={`/`} className=''>Laptop & Computer</Link>
        <Link to={`/`}>Cameras</Link>
        <Link to={`/`}>Gaming & Gadget</Link>
        <Link to={`/`}>Tv & Audio </Link>
        <Link to={`/`}>Smart Phone & Tablet</Link>
        <Link to={`/`}>Headphones & Gadget</Link>
        <Link to={`/`}>Virtual Reality</Link>
        <Link to={`/`}>Accessories </Link>
        <Link to={`/`}>Auto Electronics </Link>
        <Link to={`/`}>Iphone & Cell Phone </Link>
      </ul>
    </div>
  )
}

export default SubCategories