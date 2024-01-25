import React from 'react'
import Brand from './utils/Brand'
import clipper from '../src/assets/new/clipper.png'
import ipadimg from '../src/assets/new/ipad.png'
import watchimg from '../src/assets/new/watch.png'
import tvimg from '../src/assets/new/smarttv.png'


const NewItems = () => {
    return (
        <div className='bg-[#fff9ef] h-[15rem] '>
            <div className="w-[90%] mx-auto pt-10 pb-2 text-[#0d1a50] uppercase text-2xl mt-10 font-bold poppins">Recent view items</div>
            <div className="flex w-[90%] mx-auto justify-center items-center gap-3">
                <Brand image={clipper} name={`hair clipper comb`} strike={`$20`} price={`$15`}/>
                <Brand image={ipadimg} name={`apple ipad`} strike={`$450`} price={`400`}/>
                <Brand image={watchimg} name={'apple watch 2'} strike={`$40`} price={'$30'}/>
                <Brand image={tvimg} name={`LED-backlit LCD Vessel...`} strike={`$300`} price={`$280`}/>
            </div>
        </div>
    )
}

export default NewItems