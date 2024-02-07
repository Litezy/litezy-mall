import React, { useState } from 'react'
import mouseimg from '../assets/new/mouse.png'
import cameraimg from '../assets/new/camera.png'
import jblimg from '../assets/new/jbl.png'
import tplinkimg from '../assets/new/tplink.png'
import huaweiimg from '../assets/new/ipad.png'
import appleimg from '../assets/new/appleseries3.png'
import JustForYouCard from './JustForYouCard'
import ViewmoreButton from './ViewmoreButton'
import NewItems from '../NewItems'

const JustForYou = () => {
    const [showmore, setshowmore] = useState(false)
    const Showbutton = () => {
        setshowmore(prev => !prev)
    }

    const height = {
        height: showmore === true ? '73rem' : 'fit',
        transition: showmore === true ? 'height ease-in-out 1.6s' : 'height ease-in-out 0.8s'
    }
    return (
        <div className='md:w-[95%] mx-auto'>
            <div className="text-[#0d1a50] uppercase text-xl md:text-2xl mt-10 font-bold poppins">Just for you</div>
            <div style={height} className="w-full grid md:block h-full ">
                <div className="md:flex items-center justify-between  mb-2 gap-3 md:w-full">
                    <JustForYouCard Name={'JBL t450 headphone'} category={`tv & audio`} image={jblimg} price={'$30'} strike={`$40`} />
                    <JustForYouCard Name={'Gaming computer mouse'} category={`Gaming & gadget`} image={mouseimg} price={'$30'} strike={`$40`} />
                    <JustForYouCard Name={'action camera 4k'} category={`cameras`} image={cameraimg} price={'$30'} strike={`$40`} />
                    <JustForYouCard Name={'Apple iPad'} category={`smartphone & tablet`} image={huaweiimg} price={'$30'} strike={`$40`} />
                    <JustForYouCard Name={'tp-Link wifi router'} category={`Accessories`} image={tplinkimg} price={'$30'} strike={`$40`} />
                    <JustForYouCard Name={'Apple watch series 3'} category={`Gaming & gadget`} image={appleimg} price={'$30'} strike={`$40`} />
                </div>
                <div className="md:flex items-center justify-between h-fit  mb-2 gap-3 md:w-full">
                    <JustForYouCard Name={'Gaming computer mouse'} category={`Gaming & gadget`} image={mouseimg} price={'$30'} strike={`$40`} />
                    <JustForYouCard Name={'action camera 4k'} category={`cameras`} image={cameraimg} price={'$30'} strike={`$40`} />
                    <JustForYouCard Name={'Apple iPad'} category={`smartphone & tablet`} image={huaweiimg} price={'$30'} strike={`$40`} />
                    <JustForYouCard Name={'JBL t450 headphone'} category={`tv & audio`} image={jblimg} price={'$30'} strike={`$40`} />
                    <JustForYouCard Name={'Apple watch series 3'} category={`Gaming & gadget`} image={appleimg} price={'$30'} strike={`$40`} />
                    <JustForYouCard Name={'tp-Link wifi router'} category={`Accessories`} image={tplinkimg} price={'$30'} strike={`$40`} />
                </div>

                {showmore && <>
                    <div className="md:flex items-center justify-between h-fit  mb-2 gap-3 md:w-full">
                        <JustForYouCard Name={'Gaming computer mouse'} category={`Gaming & gadget`} image={mouseimg} price={'$30'} strike={`$40`} />
                        <JustForYouCard Name={'action camera 4k'} category={`cameras`} image={cameraimg} price={'$30'} strike={`$40`} />
                        <JustForYouCard Name={'Apple iPad'} category={`smartphone & tablet`} image={huaweiimg} price={'$30'} strike={`$40`} />
                        <JustForYouCard Name={'JBL t450 headphone'} category={`tv & audio`} image={jblimg} price={'$30'} strike={`$40`} />
                        <JustForYouCard Name={'Apple watch series 3'} category={`Gaming & gadget`} image={appleimg} price={'$30'} strike={`$40`} />
                        <JustForYouCard Name={'tp-Link wifi router'} category={`Accessories`} image={tplinkimg} price={'$30'} strike={`$40`} />
                    </div>
                    <div className="md:flex items-center justify-between h-fit  mb-2 gap-3 md:w-full">
                        <JustForYouCard Name={'JBL t450 headphone'} category={`tv & audio`} image={jblimg} price={'$30'} strike={`$40`} />
                        <JustForYouCard Name={'Gaming computer mouse'} category={`Gaming & gadget`} image={mouseimg} price={'$30'} strike={`$40`} />
                        <JustForYouCard Name={'action camera 4k'} category={`cameras`} image={cameraimg} price={'$30'} strike={`$40`} />
                        <JustForYouCard Name={'Apple iPad'} category={`smartphone & tablet`} image={huaweiimg} price={'$30'} strike={`$40`} />
                        <JustForYouCard Name={'tp-Link wifi router'} category={`Accessories`} image={tplinkimg} price={'$30'} strike={`$40`} />
                        <JustForYouCard Name={'Apple watch series 3'} category={`Gaming & gadget`} image={appleimg} price={'$30'} strike={`$40`} />
                    </div>
                </>}
                <ViewmoreButton show={() => setshowmore(prev => !prev)} showmore={showmore} />
            </div>


        </div>
    )
}

export default JustForYou