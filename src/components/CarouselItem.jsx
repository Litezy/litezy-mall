import React from 'react'
import virtualimg from '../assets/virtual2.png'
import iphone from '../assets/iphone14.png'


const CarouselItem = ({ image }) => {


   
    return (
        <div  className="flex w-full items-center  gap-10 font border-2">
            <div className="w-[70%] card-bg h-[26rem] rounded-sm flex items-center justify-center text-white">
                <div className="w-11/12 flex items-center justify-center gap-10 mt-10 ">
                    <div className="w-[70%]">
                        <h1 className='uppercase mb-3 text-4xl font-bold'>Upto <span className='text-[#ff3e3f] '>20%</span></h1>
                        <h2 className='text-4xl font-bold mb-3 '></h2>
                        <p className='mb-5 text-xl font-medium capitalize '></p>
                        <button className='px-5 py-4 bg-[#ff3e3f] text-white mt-6 text-[1.2rem] font-semibold rounded-lg'></button>
                    </div>
                    <div className=" self-end">
                        <img src={image} className='h-[23rem]' alt="" />
                    </div>
                </div>
            </div>
            <div className="h-[26rem] w-[30%] bg-[#fdc931] uppercase rounded-sm px-1">
                <h1 className="px-2 py-1 ml-6 font-bold bg-white w-3/6 text-center text-[#fdc931] mt-3 rounded-md text-3xl mb-3">Virtual</h1>
                <div className="px-2 py-1 ml-20 font-bold w-2/5 text-center text-white mt-2 rounded-md text-3xl ">REALITY</div>
                <div className="font-medium ml-5 text-white  text-lg -mt-2 ">New game</div>
                <div className="font-medium ml-5 text-white mt-1 text-lg">best <span className='px-1  bg-white rounded-sm text-[#fdc931] text-lg'>moment</span></div>
                <div className="mt-2">
                    <img src={virtualimg} className='imgAlt w-[100%]  object-cover ml-5' alt="" />
                </div>
                <button className=' px-2 py-1 bg-white text-[#fdc931] ml-5 capitalize font-semibold rounded-lg'>click now</button>
            </div>
        </div>
    )
}

export default CarouselItem