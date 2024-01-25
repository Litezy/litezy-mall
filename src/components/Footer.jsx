import React from 'react'
import qrimg from '../assets/new/qr.png'
import googlrimg from '../assets/new/Google.png'
import appleimg from '../assets/new/appstore.png'
import visaimg from '../assets/new/visa.png'
import mastercardimg from '../assets/new/mastercard.png'
import paypal from '../assets/new/paypal.png'
import cashondeliveryimg from '../assets/new/cashondelivery.png'
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='mt-10 w-full'>
            <div className="bg-[#0b1948] w-10/12 mx-auto rounded-md flex items-center h-40 justify-between text-white ">
                <div className="poppins px-10">
                    <p className='text-sm capitalize'>Join our email list & get Unlimited offer</p>
                    <h1 className=' uppercase font-bold text-4xl'>get free 20% discount</h1>
                </div>
                <div className="flex w-1/2 items-center justify-between px-5">
                    <input placeholder='Enter your email....' type="text" className='bg-[#fff9ef] outline-none text-[#0b1948] font-medium w-[70%] h-16 px-4 rounded-md' />
                    <button className='font font-bold  px-8 h-16 rounded-md bg-[#fdbe55] text-white'>Explore Now</button>
                </div>
            </div>
            <div className="mt-20">
                <div className="bg-[#0b1948] w-full pt-6">
                    <div className="flex items-start justify-between  poppins w-[90%] mx-auto">
                        <ul className='capitalize text-white mt-5 flex flex-col gap-2 text-sm'>
                            <li className='font-bold text-lg'>Customer care</li>
                            <li>help center</li>
                            <li>how to buy</li>
                            <li>returns & refunds</li>
                            <li>contact us</li>
                            <li>terms & conditions</li>
                            <div className="">
                                <div className="flex items-center justify-between mt-8 poppins w-[100%] mx-auto text-white">
                                    <div className="">
                                        <h1 className='text-xl'>Follow us:</h1>
                                        <div className="flex items-center justify-center gap-3 mt-3">
                                           <div className="px-1 py-1 bg-[#3c5a9a] rounded-full follow"> <FaFacebook  className='text-white text-2xl cursor-pointer'/></div>
                                            <div className="follow px-1 py-1 bg-white rounded-full"><FaXTwitter className='text-black text-xl cursor-pointer '/></div>
                                           <div className="follow px-1 py-1 bg-[#fe0000] rounded-full flex item-center justify-center cursor-pointer"> <FaYoutube className='text-white text-xl'/></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </ul>
                        <ul className='capitalize text-white mt-5 flex flex-col gap-2 text-sm'>
                            <li className='font-bold text-lg'>Soping</li>
                            <li>about sopin</li>
                            <li>digital payments</li>
                            <li>sopin blog</li>
                            <li>soping mart</li>
                            <li>privacy policy</li>
                        </ul>
                        <ul className='capitalize text-white mt-5 flex flex-col gap-2 text-sm'>
                            <li className='font-bold text-lg'>earn with soping</li>
                            <li>soping university</li>
                            <li>sell on soping</li>
                            <li>code of conduct</li>
                            <li>join the soping affiliating program</li>
                        </ul>
                        <div className="w-[40%] ">
                            <div className="w-full flex gap-5 items-center justify-center px-2">
                                <div className="w-[40%]  ">
                                    <img src={qrimg} className='w-[100%] object-cover rounded-xl bg-white cursor-pointer' alt="qr-image" />
                                </div>
                                <div className="w-[35%] bg-white rounded-3xl py-0 flex flex-col items-center justify-center  ">
                                    <img src={appleimg} className='w-full object-cover -mt-5 cursor-pointer' alt="" />
                                    <img src={googlrimg} className=' -mt-14 cursor-pointer' alt="" />
                                </div>

                            </div>
                            <div className="text-white w-[80%] mx-auto mt-16  ">
                                <h1 className='text-xl'>Paymet Methods:</h1>
                                <div className="flex items-center justify-between">
                                    <img src={cashondeliveryimg} className='w-20 ' alt="" />
                                    <img src={visaimg} className='w-20 bg-white' alt="" />
                                    <img src={mastercardimg} className='w-20' alt="" />
                                    <img src={paypal} className='w-20 bg-white' alt="" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="text-[#0e1b50] text-sm ml-10 poppins my-2">Copywrite 2024 &copy; Litezy. All Rights Reserved</div>
        </div>
    )
}

export default Footer