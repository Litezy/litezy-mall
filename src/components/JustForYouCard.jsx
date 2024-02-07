import React from 'react'
import Gostar from '../utils/Gostar'

const JustForYou = ({ image, Name, category, strike, price }) => {
  return (

    <div className="bg-[#fff9ef] md:h-60 py-3 md:py-0 md:w-[17%] gap-2 md:gap-0 mt-5 md:mt-0  flex items-center justify-center md:block">
      <div className="flex items-center justify-center md:w-[80%] w-[40%] h-32 mx-auto">
        <img src={image} className="w-32 h-full mt-2" alt="" />

      </div>
      <div className="flex flex-col gap-1 md:gap-0 w-[65%] md:w-[85%] mx-auto">
        <p className='text-[.8rem] font-medium capitalize'>{category}</p>
        <h1 className='font-extrabold text-[#0d1a50] capitalize text-[.9rem]'>{Name}</h1>
        <div className=""> <span className='dec text-md text-[#b8bbcc]'>{strike}</span> <span className='ml-2 font-extrabold text-[#fe3e3e] text-xl'>{price}</span></div>
        <Gostar />
      </div>

    </div>
  )
}

export default JustForYou