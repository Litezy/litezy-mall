import React from 'react'
import Gostar from '../utils/Gostar'

const Brands = ({image1, image2,name1,name2,strike1,strike2,price1,price2  }) => {
    
  return (
    <div className="flex items-center gap-5 md:w-[90%]  md:mx-5 mx-2 mt-2 md:mt-4">
                        <div className="w-3/6 h-32 bg-white rounded-sm">
                                <div className="flex items-center gap-2 justify-center h-32" >
                                    <div className="w-[40%] ">
                                    <img src={image1} className='w-[8rem] -mt-3' alt="" />
                                    </div>
                                    <div className="w-[60%]">
                                        <h1 className=' capitalize text-sm font-bold poppins'>{name1}</h1>
                                       <Gostar/>
                                        <div className="flex items-start gap-3">
                                           <div className=""> <span className='dec text-md text-[#b8bbcc]'>{strike1}</span> <span className='ml-2 font-extrabold text-[#fe3e3e] text-xl'>{price1}</span></div>
                                        </div>
                                    </div>
                                </div>
                        
                        </div>
                        <div className="w-3/6 h-32 bg-white rounded-sm">
                                <div className="flex items-center gap-2 justify-center h-32" >
                                    <div className="w-[40%] "  >
                                    <img src={image2} className='w-full -mt-3' alt="" />
                                    </div>
                                    <div className="w-[60%]">
                                        <h1 className=' capitalize text-sm font-bold poppins'>{name2}</h1>
                                       <Gostar/>
                                        <div className="flex items-start ">
                                           <div className=""> <span className='dec text-md text-[#b8bbcc]'>{strike2}</span> <span className='ml-2 font-extrabold text-[#fe3e3e] text-xl'>{price2}</span></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
  )
}

export default Brands