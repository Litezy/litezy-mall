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
            <div className="bg-[#0b1948] w-10/12 mx-auto rounded-md md:flex items-center h-40 justify-between text-white py-4 md:py-0 ">
                <div className="poppins md:px-10 px-3 flex items-center justify-start">
                    <p className='text-sm capitalize'>Join our email list & get Unlimited offer</p>
                    <h1 className=' uppercase font-bold md:text-4xl'>get free 20% discount</h1>
                </div>
                <div className="flex md:w-1/2 items-center justify-between px-3 mt-3 md:mt-0">
                    <input placeholder='Enter your email....' type="text" className='bg-[#fff9ef] outline-none text-[#0b1948] text-sm font-medium w-[70%] h-12 md:h-16 px-4 rounded-md ' />
                    <button className='font font-bold text-[12px] md:text-xl w-[25%] md:px-8 md:h-16 h-12 rounded-md bg-[#fdbe55] text-white'>Explore Now</button>
                </div>
            </div>
            <div className="md:mt-20 mt-10">
                <div className="bg-[#0b1948] w-full pt-6">
                    <div className="md:flex items-start justify-between  poppins w-[90%] mx-auto">
                        <div className="flex md:block items-start justify-start w-[100%] mx-auto mb-5 md:mb-0 ">
                            <ul className='capitalize text-white mt-5 w-[40%] flex flex-col gap-2 text-sm'>
                                <li className='font-bold md:text-lg'>Customer care</li>
                                <li>help center</li>
                                <li>how to buy</li>
                                <li>returns & refunds</li>
                                <li>contact us</li>
                                <li>terms & conditions</li>
                                <div className="">
                                    <div className="flex items-center justify-between mt-8 poppins w-[100%] mx-auto text-white">
                                        <div className="">
                                            <h1 className='md:text-xl'>Follow us:</h1>
                                            <div className="flex items-center justify-center gap-3 mt-3">
                                                <div className="px-1 py-1 bg-[#3c5a9a] rounded-full follow"> <FaFacebook className='text-white text-lg md:text-xl cursor-pointer' /></div>
                                                <div className="follow px-1 py-1 bg-white rounded-full"><FaXTwitter className='text-black text-lg md:text-xl cursor-pointer ' /></div>
                                                <div className="follow px-1 py-1 bg-[#fe0000] rounded-full flex item-center justify-center cursor-pointer"> <FaYoutube className='text-white text-lg md:text-xl' /></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </ul>
                      
                        <ul className='capitalize text-white mt-5 w-[35%] flex flex-col gap-2 text-sm'>
                            <li className='font-bold md:text-lg'>Soping</li>
                            <li>about sopin</li>
                            <li>digital payments</li>
                            <li>sopin blog</li>
                            <li>soping mart</li>
                            <li>privacy policy</li>
                        </ul>
                        <ul className='capitalize w-[35%] text-white mt-5 flex flex-col gap-2 text-sm'>
                            <li className='font-bold md:text-lg'>earn with soping</li>
                            <li>soping university</li>
                            <li>sell on soping</li>
                            <li>code of conduct</li>
                            <li>join the soping affiliating program</li>
                        </ul>
                        </div>
                        <div className="md:w-[40%]  ">
                            <div className="w-full flex gap-5 items-center md:justify-center md:px-2">
                                <div className="w-[40%]  ">
                                    <img src={qrimg} className='w-[100%] object-cover rounded-sm bg-white cursor-pointer' alt="qr-image" />
                                </div>
                                <div className="w-[35%] bg-white rounded-sm py-0 flex flex-col items-center justify-center  ">
                                    <img src={appleimg} className='w-full object-cover -mt-5 cursor-pointer' alt="" />
                                    <img src={googlrimg} className=' md:-mt-14 -mt-10 cursor-pointer' alt="" />
                                </div>

                            </div>
                            <div className="text-white md:w-[80%] mx-auto md:mt-16 mt-5 ">
                                <h1 className='text-xl'>Paymet Methods:</h1>
                                <div className="flex items-center justify-between">
                                    <img src={cashondeliveryimg} className='md:w-20 w-16' alt="" />
                                    <img src={visaimg} className='md:w-20 bg-white w-16' alt="" />
                                    <img src={mastercardimg} className='md:w-20 w-16' alt="" />
                                    <img src={paypal} className='md:w-20 bg-white w-16' alt="" />
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