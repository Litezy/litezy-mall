import React from 'react'
import iphoneimg from '../assets/iphone14.png'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import apple from '../assets/productimages/apple.png'
import xbox from '../assets/productimages/xbox.png'
import asus from '../assets/productimages/asus.png'
import sony from '../assets/productimages/sony.png'
import dell from '../assets/productimages/dell.png'
import intel from '../assets/productimages/intel.png'
import msi from '../assets/productimages/msi.png'
import realme from '../assets/productimages/realme.png'
import { GoStarFill } from "react-icons/go";
const Card2 = () => {


    const gaming = [
        {
            title: 'Gaming & Gadget',
            name: 'Apple Watch Series 3 iPhone',
            image: apple,
            strike: '$40',
            price: '$30',
            offer: 'Hurry Up offer ends in:'
        },
    ]
    const games = [
        {
            title: 'Gaming & Gadget',
            name: 'Headset Xbox 360 Headphones',
            image: xbox,
            strike: '$87',
            price: '$60',
            offer: 'Hurry Up offer ends in:'
        },
    ]
    const sponsors = [
        {
            img1: realme,
            img2: sony,
            img3: dell,
            img4: msi,
            img5: asus,
            img6: intel
        },
    ]
    return (
        <div className='w-full md:mb-20 mb-10 '>
            <div className="w-[94%]  font mx-auto md:flex items-start justify-between gap-10 mt-10">
                <div className="md:w-[20%] h-[30rem] mx-w-[25%]  bg-[#f3f2f7] rounded-md mb-10 md:mb-0">
                    <div className="w-[90%] mx-auto  mt-4 md:h-[28rem]">
                        <div className="flex items-start justify-center relative  h-48 ">
                            <img src={iphoneimg} className='w-32 ' alt="" />
                            <div className="absolute w-16 h-16 bottom-5 md:bottom-0 right-[26%] md:right-12 rounded-full bg-[#fe3e3e] text-center flex items-center justify-center text-white font-bold poppins">20% OFF</div>
                        </div>
                        <hr className='hr  mt-3' />
                        <div className="">
                            <div className="flex flex-col gap-3 mt-2 poppins">
                                <p className='text-[13px]'>Iphone & Cell phone</p>
                                <h1 className='text-[#0d1a50] font-extrabold text-2xl'>iPhone 14</h1>
                                <p className='text-sm'>Status: <span className='text-green-400'>Available Now</span></p>
                                <div className='w-full flex items-start text-xl gap-5 font-bold'>
                                    <p className='text-[#fe3e3e]'>$900</p> <span className='text-[#a4a8bd] dec'>$1088</span></div>
                                <p className='text-sm'>Available product: 64/85</p>
                            </div>
                            <div className="w-[90%] mx-auto mt-5">
                                <div className="w-full h-[9px] rounded-full bg-[#b8bbcc]">
                                    <div className="w-[45%] h-[9px] rounded-full bg-[#fdbe55]"></div>
                                </div>
                            </div>
                            <div className="flex items-center mt-3 poppins">
                                <IoIosArrowBack className='text-sm' /> <span>Previous</span> <div className="w-1 h-1 mx-2 rounded-full bg-[#c2c5d3]"></div> <span className='font-bold'>Next</span><IoIosArrowForward className='text-sm' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-[80%] w-full">
                    <div className="flex items-center  justify-between ">
                        <h1 className=' uppercase poppins font-bold text-2xl'>Deals of the day</h1>
                        <div className="flex text-2xl">
                            <IoIosArrowBack />
                            <IoIosArrowForward />
                        </div>
                    </div>
                    <div className="md:flex items-center justify-between gap-5 mt-6 ">
                        <div className="bg-[#fff9ef] border md:w-[50%] h-[21rem] rounded-md">
                            <div className="w-[90%] mx-auto flex  h-[18rem] ">
                                {gaming.map((item, index) => (
                                    <div className="flex w-full items-center mt-10 justify-center roboto font-medium gap-3" key={index}>
                                        <div className="w-[40%]"><img src={item.image} className='w-48' alt="" /></div>
                                        <div className="w-[60%] flex flex-col gap-5">
                                            <div className="text-sm">{item.title}</div>
                                            <div className="text-xl font font-extrabold text-[#0d1a50] ">{item.name}</div>
                                            <div className="flex items-start gap-2 ">
                                                <GoStarFill className='text-[#fdc931]' />
                                                <GoStarFill className='text-[#fdc931]' />
                                                <GoStarFill className='text-[#fdc931]' />
                                                <GoStarFill className='text-[#fdc931]' />
                                                <GoStarFill />
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="dec text-lg text-[#b8bbcc]">{item.strike}</div>
                                                <div className="font-extrabold text-[#fe3e3e] text-2xl">{item.price}</div>
                                            </div>
                                            <div className="text-md font lowercase">{item.offer}</div>
                                            <div className="flex items-start gap-2">
                                                <div className="w-14 h-14 text-center text-sm text-white font flex items-center justify-center rounded-md  bg-[#fdc931] flex-col">70 <span>Days</span></div>
                                                <div className="w-14 h-14 text-center text-white font flex items-center flex-col justify-center text-sm rounded-md bg-[#fdc931]">03 <span>Hrs</span></div>
                                                <div className="w-14 h-14 text-center text-white font flex items-center justify-center text-sm rounded-md bg-[#fdc931] flex-col">35 <span>Mins</span></div>
                                                <div className="w-14 h-14 text-center text-white font flex items-center justify-center text-sm flex-col rounded-md bg-[#fdc931]">5 <span>Scs</span></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#fff9ef] mt-10 md:mt-0 md:w-[50%] h-[21rem] rounded-md">
                            <div className="w-[90%] mx-auto flex  h-[18rem] ">
                                {games.map((item, index) => (
                                    <div className="flex w-full mt-10 items-center justify-center roboto font-medium gap-3" key={index}>
                                        <div className="w-[40%]"><img src={item.image} className='w-48 alt' alt="" /></div>
                                        <div className="w-[60%] flex flex-col gap-5">
                                            <div className="text-sm">{item.title}</div>
                                            <div className="text-xl font font-extrabold text-[#0d1a50] ">{item.name}</div>
                                            <div className="flex items-start gap-2 ">
                                                <GoStarFill className='text-[#fdc931]' />
                                                <GoStarFill className='text-[#fdc931]' />
                                                <GoStarFill className='text-[#fdc931]' />
                                                <GoStarFill className='text-[#fdc931]' />
                                                <GoStarFill />
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="dec text-lg text-[#b8bbcc]">{item.strike}</div>
                                                <div className="font-bold text-[#fe3e3e] text-2xl">{item.price}</div>
                                            </div>
                                            <div className="text-md font lowercase">{item.offer}</div>
                                            <div className="flex items-start gap-2">
                                                <div className="w-14 h-14 text-center text-sm text-white font flex items-center justify-center rounded-md bg-[#fdc931] flex-col">70 <span>Days</span></div>
                                                <div className="w-14 h-14 text-center text-white font flex items-center flex-col justify-center text-sm rounded-md bg-[#fdc931]">03 <span>Hrs</span></div>
                                                <div className="w-14 h-14 text-center text-sm text-white font flex items-center justify-center rounded-md flex-col bg-[#fdc931]">35 <span>Mins</span></div>
                                                <div className="w-14 h-14 text-center text-sm text-white font flex items-center justify-center flex-col rounded-md bg-[#fdc931]">5 <span>Scs</span></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="md:w-[95%] mx-auto mt-2  ">
                   {sponsors.map((item,index) =>(
                    <div className="flex items-center rounded-md gap-1 justify-between md:px-4 py-3 bg-[#d4c8b1]" key={index}>
                        <IoIosArrowBack className='md:text-3xl text-xl'/>
                            <img src={item.img1} className='md:w-20 w-10' alt="" />
                            <img src={item.img2} className='md:w-20 w-10' alt="" />
                            <img src={item.img3} className='md:w-20 w-10' alt="" />
                            <img src={item.img4} className='md:w-20 w-10' alt="" />
                            <img src={item.img5} className='md:w-20 w-10' alt="" />
                            <img src={item.img6} className='md:w-20 w-10' alt="" />
                        <IoIosArrowForward className='md:text-3xl text-xl'/>
                    </div>
                   ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2