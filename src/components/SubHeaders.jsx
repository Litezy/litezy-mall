import React, { useEffect, useState } from 'react'
import virtualimg from '../assets/virtual.png'
import virtualimg2 from '../assets/virtual2.png'
import virtualimg3 from '../assets/virtual3.png'
import virtualimg4 from '../assets/virtual4.png'
import iphoneimg from '../assets/iphone14.png'
import { Link } from 'react-router-dom'
import tplink from '../assets//new/tplink.png'
import smarttv from '../assets/new/smarttv2.png'
import watch from '../assets/new/ipad.png'
import { IoIosArrowBack, IoIosArrowForward, IoIosRadioButtonOn } from 'react-icons/io'
const SubHeaders = () => {
  const items = [
    {
      image: iphoneimg,
      title: 'iPhone 14 & 14 MAX',
      desc: 'Your new superpower',
      avail: 'Available Now',
      week: 'week',
      cent: '20%',
      virtual: virtualimg
    },
    {
      image: watch,
      title: 'Apple Watch Series 3 iPhone',
      desc: 'Strong and Efficient',
      avail: 'Available Now',
      week: 'month',
      cent: '10%',
      virtual: virtualimg2
    },
    {
      image: smarttv,
      title: 'LED-Backlight LCD Tv',
      desc: 'strong and reliable',
      avail: 'Available Now',
      week: 'week',
      cent: '15%',
      virtual: virtualimg3
    },
    {
      image: tplink,
      title: 'Tp-Link Wifi Router',
      desc: 'Your new superpower',
      avail: 'Available Now',
      week: 'week',
      cent: '25%',
      virtual: virtualimg4
    },
  ]

  const [curr, setCurr] = useState(0)
  const Next = () => {
    setCurr((prevCurr) => {
      const newCurr = prevCurr === items.length - 1 ? 0 : prevCurr + 1;
      const newTranslateX = `translateX(-${newCurr * 100}vw)`;
      document.getElementById("slide").style.transform = newTranslateX;
      return newCurr;
    });
  };

  const Prev = () => {
    setCurr((prevCurr) => {
      const newCurr = prevCurr === 0 ? items.length - 1 : prevCurr - 1;
      const newTranslateX = `translateX(-${newCurr * 100}vw)`;
      document.getElementById("slide").style.transform = newTranslateX;
      return newCurr;
    });
  };

  const ChangeCurrent = (index) => {
    setCurr(prev => {
      const newCurr = index
      const newTranslateX = `translateX(-${index * 70}vw)`;
      document.getElementById("slide").style.transform = newTranslateX;
      return newCurr
    })
  }

  // useEffect(() =>{
  //   const interval = setInterval(() => {
  //     Next()
  //   },5000)
  //   return ()=> clearInterval(interval)
  // },[])
  return (
    <div className="w-full md:h-[30rem] mb-4 relative overflow-hidden ">
      <div className="flex text-2xl w-fit ml-auto gap-10 mb-2 text-white bg-[#fdc931]">
        <IoIosArrowBack onClick={Prev} className=' cursor-pointer'/>
        <IoIosArrowForward onClick={Next} className=' cursor-pointer'/>
      </div>
      <div className=" w-full items-center flex relative container overflow-hidden h-52 md:h-full ">
        <div className="overflow-x-auto  w-full h-full  ">
          <div id='slide' className="slider  border-2 transition-transform ease-in-out h-full  flex items-center  ">
            {items.map((item, i) => (
              <div key={i} className="md:w-[70vw] w-full h-full  ">
                <div className="flex items-center justify-between md:gap-20 w-[100vw] md:w-[70vw]  h-full mx-auto" >
                  <div className="w-[100%] md:w-[65%] card-bg h-full rounded-sm flex items-center justify-center text-white">
                    <div className=" flex items-center justify-center gap-10 px-2  md:px-10 my-auto">
                      <div className="md:w-[60%] w-[60%] text-sm ">
                        <h1 className=' capitalize md:mb-3 md:text-2xl font-bold'>Upto <span className='text-[#ff3e3f] '>{item.cent}</span> Off <br /> this {item.week}</h1>
                        <h2 className='md:text-xl font-bold md:mb-3 '>{item.title}</h2>
                        <p className='md:mb-5 md:text-xl font-medium capitalize '>{item.desc}</p>
                        <button className='md:px-5 md:py-4 mt-5 mb-2 bg-[#ff3e3f] text-white md:mt-6 md:text-[1rem] font-semibold rounded-lg text-[.8rem] px-2 py-1'>{item.avail}</button>                    </div>
                      <div className="md:w-[40%]  h-fit mr-14 md:mr-0">
                        <img src={item.image} className='md:h-[23rem] md:w-[100%] h-[11rem]' alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block h-full -ml-20 w-[33%] bg-[#fdc931] uppercase rounded-sm px-1">
                    <h1 className="px-2 py-1 ml-6 font-bold bg-white w-4/6 text-center text-[#fdc931] mt-3 rounded-md text-3xl mb-3">Virtual</h1>
                    <div className="px-2 py-1 ml-20 font-bold w-2/5 text-center text-white mt-2 rounded-md text-3xl ">REALITY</div>
                    <div className="font-medium ml-5 text-white  text-lg -mt-2 ">New game</div>
                    <div className="font-medium ml-5 text-white mt-1 text-lg">best <span className='px-1  bg-white rounded-sm text-[#fdc931] text-lg'>moment</span></div>
                    <div className="mt-2">
                      <img src={item.virtual} className='imgAlt w-[100%]  object-cover mr-5' alt="" />
                    </div>
                    <button className=' px-2 py-1 bg-white text-[#fdc931] ml-5  mb-1 capitalize font-semibold rounded-sm'>click now</button>
                  </div>

                </div>
             </div>
            ))}
          </div>
          <div className="flex flex-row absolute  -bottom-3 left-0 w-full items-center gap-2 justify-center text-sm -mt-10 h-10">
            {items.map((item, i) => (
              <IoIosRadioButtonOn key={i} className={` ${curr === i ? 'text-orange-300' : ' text-white'} cursor-pointer md:-mt-16 -mt-2`}
                onClick={() => ChangeCurrent(i)} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default SubHeaders


// <div  className="flex w-[100%] items-center  gap-10 font border-2">
//             <div className="w-[70%] card-bg h-[26rem] rounded-sm flex items-center justify-center text-white">
//                 <div className="w-11/12 flex items-center justify-center gap-10 mt-10 ">
//                     <div className="w-[70%]">
//                         <h1 className='uppercase mb-3 text-4xl font-bold'>Upto <span className='text-[#ff3e3f] '></span> Off this week</h1>
//                         <h2 className='text-4xl font-bold mb-3 '>iPhone 14 & 14 MAX</h2>
//                         <p className='mb-5 text-xl font-medium capitalize '>Your new superpower</p>
//                         <button className='px-5 py-4 bg-[#ff3e3f] text-white mt-6 text-[1.2rem] font-semibold rounded-lg'>Available Now</button>
//                     </div>
//                     <div className="">
//                         <img src={iphoneimg} className='h-[23rem]' alt="" />
//                     </div>
//                 </div>
//             </div>
//             <div className="h-[26rem] w-[30%] bg-[#fdc931] uppercase rounded-sm px-1">
//                 <h1 className="px-2 py-1 ml-6 font-bold bg-white w-4/6 text-center text-[#fdc931] mt-3 rounded-md text-3xl mb-3">Virtual</h1>
//                 <div className="px-2 py-1 ml-20 font-bold w-2/5 text-center text-white mt-2 rounded-md text-3xl ">REALITY</div>
//                 <div className="font-medium ml-5 text-white  text-lg -mt-2 ">New game</div>
//                 <div className="font-medium ml-5 text-white mt-1 text-lg">best <span className='px-1  bg-white rounded-sm text-[#fdc931] text-lg'>moment</span></div>
//                 <div className="mt-2">
//                     <img src={virtualimg} className='imgAlt w-[100%]  object-cover ml-5' alt="" />
//                 </div>
//                 <button className=' px-2 py-1 bg-white text-[#fdc931] ml-5 capitalize font-semibold rounded-lg'>click now</button>
//             </div>
//         </div>