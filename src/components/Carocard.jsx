import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import iphone from '../assets/iphone14.png'
import PageLayout from './PageLayout'
import ipad from '../assets/new/ipad2.png'
import jbl from '../assets/new/jbl2.png'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosRadioButtonOn } from "react-icons/io";


const Carocard = () => {
  const [curr, setCurr] = useState(0)
  const slides = [
    {
      image: iphone,
      title: 'Iphone 14 pro max',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem qui accusamus id officiis dignissimos quis?',
      radio: <IoIosRadioButtonOn />
    },
    {
      image: ipad,
      title: 'Ipad apple',
      desc: 'orem ipsum, dolor sit amet consectetur adipisicing elit. Quidem qui accusamus id officiis dignissimos quis?',
      radio: <IoIosRadioButtonOn />
    },
    {
      image: jbl,
      title: 'JBL Headphone',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem qui accusamus id officiis dignissimos quis',
      radio: <IoIosRadioButtonOn />
    },
    {
      image: jbl,
      title: 'JBL Headphone',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem qui accusamus id officiis dignissimos quis',
      radio: <IoIosRadioButtonOn />
    },
    {
      image: jbl,
      title: 'JBL Headphone',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem qui accusamus id officiis dignissimos quis',
      radio: <IoIosRadioButtonOn className='text-2xl' />
    },
    
  ]
  
  const Next = () => {
    setCurr((prevCurr) => {
      const newCurr = prevCurr === slides.length - 1 ? 0 : prevCurr + 1;
      const newTranslateX = `translateX(-${newCurr * 20}%)`;
      document.getElementById("slide").style.transform = newTranslateX;
      return newCurr;
    });
  };

  const Prev = () => {
    setCurr((prevCurr) => {
      const newCurr = prevCurr === 0 ? slides.length - 1 : prevCurr - 1;
      const newTranslateX = `translateX(-${newCurr * 20}%)`;
      document.getElementById("slide").style.transform = newTranslateX;
      return newCurr;
    });
  };

  const ChangeCurrent = (index) => {
    setCurr(prev => {
      const newCurr = index
      const newTranslateX = `translateX(-${index * 10}%)`;
      document.getElementById("slide").style.transform = newTranslateX;
      return newCurr
    })
  }



    useEffect(() =>{
      const interval = setInterval(() => {
        Next()
      },5000)
      return ()=> clearInterval(interval)
    },[])
  return (
    <PageLayout >
      <div className="container w-[80%] mx-auto h-auto mb-20  relative">
        <div className="top-[50%] right-0 absolute"><IoIosArrowForward onClick={Next} className='absolute text-2xl cursor-pointer' /></div>
        <div className="top-[50%] -left-10 absolute"><IoIosArrowBack onClick={Prev} className='absolute text-2xl top-[50%] left-0 cursor-pointer' /></div>
        <div className="overflow-x-auto sliderdown w-full">
          <div id='slide' className="slider transition-transform ease-in-out w-fit flex items-center">
            {slides.map((item, i) => (
              <div key={i} className="w-[75vw]">
                <div className="flex items-center justify-center w-[100%] mx-auto border py-10" >
                  <img src={item.image} className='w-[40%] ' alt="" />
                  <div className="">
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row absolute bottom-0 left-0 w-full items-center gap-2 justify-center text-sm -mt-10 h-10">
          {slides.map((item, i) => (
            <IoIosRadioButtonOn key={i} className={` ${curr === i ? 'text-orange-400' : ' text-opacity-5'} cursor-pointer`}
              onClick={() => ChangeCurrent(i)} />
          ))}
        </div>
      </div>

    </PageLayout>
  )
}

export default Carocard
{/* <div id='slide' className="slider transition-transform ease-in-out duration-1000 w-fit overflow-hidden flex items-center justify-center  py-20">
            {slides.map((item, i) => (
              <div key={i} className="">
                <div className="flex items-center justify-center w-[100%] mx-auto border px-10 py-10" >
                  <img src={item.image} className='w-[50%] h-[30rem]' alt="" />
                  <div className="">
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
{/* <div className="flex items-center gap-2 justify-center text-sm -mt-10 h-10 bg-black/40">
            <IoIosRadioButtonOn className={` ${curr === 0 ? 'text-orange-400' : ''} cursor-pointer`}
              onClick={() => changeIcons(0)} />
            <IoIosRadioButtonOn className={` ${curr === 1 ? 'text-orange-400' : ''} cursor-pointer`}
            />
            <IoIosRadioButtonOn className={` ${curr === 2 ? 'text-orange-400' : ''} cursor-pointer`} />
            <IoIosRadioButtonOn className={`${curr === 3 ? 'text-orange-400' : ''} cursor-pointer`} 
            onClick={() => changeIcons(3)}/>
            <IoIosRadioButtonOn className={` ${curr === 4 ? 'text-orange-400' : ''} cursor-pointer`}
              onClick={() => changeIcons(4)} />

          </div> */}
{/* </div> */ }
