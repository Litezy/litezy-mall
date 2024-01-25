import React from 'react'

const ViewmoreButton = ({show, showmore}) => {
  return (
    <div className='w-[80%] mx-auto my-10 flex items-center justify-center text-white '>
      <button onClick={show} className='w-[30%] text-2xl rounded-md font py-3 bg-[#fdbe55] text-center '>{showmore ? 'View Less': 'View More'}</button>
    </div>
  )
}

export default ViewmoreButton