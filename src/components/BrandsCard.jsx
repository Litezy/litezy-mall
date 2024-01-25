import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import jbl1 from '../assets/new/jbl.png'
import jbl2 from '../assets/new/jbl2.png'
import airpod from '../assets/new/airpod.png'
import clipper3 from '../assets/new/clipper3.png'
import clipper from '../assets/new/clipper.png'
import earphone from '../assets/new/earphone.png'
import ipad from '../assets/new/ipad.png'
import ipad2 from '../assets/new/ipad2.png'
import smarttv from '../assets/new/smarttv.png'
import smarttv2 from '../assets/new/smarttv2.png'
import watch from '../assets/new/watch.png'
import Gostar from '../utils/Gostar'
import Brands from './Brands'

const BrandsCard = () => {

     
    
    return (
        <div className='w-[95%] mx-auto h-screen '>
            <div className="flex items-center justify-between  gap-6 h-screen w-full mt-2">

                <div className="bg-[#fff9ef] h-screen w-[50%] ">
                    <div className="flex items-center justify-between px-5 mt-10">
                        <h1 className='text-[#0d1a50] poppins text-2xl font-bold'>New Brands</h1>
                        <div className="flex text-2xl">
                            <IoIosArrowBack className='text-[#0d1a50]' />
                            <IoIosArrowForward className='text-[#0d1a50]' />
                        </div>
                    </div>
                    <Brands image1={jbl1} name1={'JBL T450 Headphone'} strike1={`$40`} price1={`$30`}
                    image2={airpod}  strike2={`$63`} price2={`$55`} name2={`Apple Airpods Headphones`}/>
                    <Brands image1={jbl2} name1={`Headphones JBL Mobile`} strike1={`$21`} price1={`$13`}
                    image2={clipper3} name2={`Electric Razors & hair trimmer`} strike2={`$15`} price2={`$9`} className=""/>
                    <Brands image1={clipper} name1={`hair clipper comb`} strike1={`$20`} price1={`$15`}
                    image2={smarttv2} name2={'lED-Backlight LCD Tv'} strike2={`$350`} price2={`$300`}/>
                    <Brands image1={watch} name1={`Apple watch 2`} strike1={`$100`} price1={`$85`}
                    image2={ipad} name2={`Apple iPad`} strike2={`$450`} price2={`$400`}/>
                </div>
                <div className="bg-[#fff9ef] h-full w-[50%]">
                    <div className="flex items-center justify-between px-5 mt-10">
                        <h1 className='text-[#0d1a50] poppins text-2xl font-bold'>Popular Brands</h1>
                        <div className="flex text-2xl">
                            <IoIosArrowBack className='text-[#0d1a50]' />
                            <IoIosArrowForward className='text-[#0d1a50]' />
                        </div>
                    </div>
                    <Brands image1={clipper3} name1={`Electric Razors & hair trimmer`} strike1={`$15`} price1={`$9`}
                    image2={airpod}  strike2={`$63`} price2={`$55`} name2={`Apple Airpods Headphones`}/>
                    <Brands image1={earphone} name1={`Headphones JBL mobile`} strike1={`$20`} price1={`$13`}
                    image2={ipad2} name2={`Apple iPad`} strike2={`$450`} price2={`$400`}/>
                    <Brands image1={clipper} name1={`hair clipper comb`} strike1={`$20`} price1={`$15`}
                    image2={watch} name2={`Apple watch 2`} strike2={`$100`} price2={`$85`}/>
                    <Brands image1={smarttv} name1={`LCD-backlit Vestel...`} strike1={`$300`} price1={`$280`}
                    image2={jbl2} name2={`Headphones JBL Mobile`} strike2={`$21`} price2={`$13`}/>
                </div>
            </div>
        </div>
    )
}

export default BrandsCard