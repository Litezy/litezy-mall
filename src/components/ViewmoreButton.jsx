import React from 'react'

const ViewmoreButton = ({show, showmore}) => {
  return (
    <div className='hidden md:w-[80%] mx-auto my-10 md:flex items-center justify-center text-white '>
      <button onClick={show} className='md:w-[20%] text-2xl rounded-md font px-6  py-1 md:py-2 bg-[#fdbe55] text-center '>{showmore ? 'View Less': 'View More'}</button>
    </div>
  )
}

export default ViewmoreButton