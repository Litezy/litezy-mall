import React, { useEffect, useRef } from 'react'
import InfoHeaders from './InfoHeaders'
import CartandSearch from './CartandSearch'
import Footer from './Footer'
import NewItems from '../NewItems'

const PageLayout = ({children}) => {
  
    return (
        <div className='w-full overflow-hidden'>
            <InfoHeaders />
            <CartandSearch  />
            <div className="mt-10 w-[95%]  mx-auto ">
                {children}
            </div>
            <NewItems/>
            <Footer />
        </div>
    )
}

export default PageLayout