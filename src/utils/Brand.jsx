import React from 'react'
import Gostar from './Gostar'

const Brand = ({ image,name,strike,price }) => {
    return (
        <div className="md:w-3/6 md:h-32 h-fit mt-5 md:mt-0 py-2 md:py-0 bg-white rounded-sm">
            <div className="flex items-center gap-2 justify-center h-32" >
                <div className="w-[30%] md:w-[40%] "  >
                    <img src={image} className='w-full  mt-3' alt="" />
                </div>
                <div className="w-[60%]">
                    <h1 className=' capitalize text-sm font-bold poppins'>{name}</h1>
                    <Gostar />
                    <div className="flex items-start ">
                        <div className=""> <span className='dec text-md text-[#b8bbcc]'>{strike}</span> <span className='ml-2 font-extrabold text-[#fe3e3e] text-xl'>{price}</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand