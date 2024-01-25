import React from 'react'

import Card from './components/Card'
import Card2 from './components/Card2'
import BrandsCard from './components/BrandsCard'
import PageLayout from './components/PageLayout'
import JustForYou from './components/JustForYou'
const Homepage = () => {
  return (
    <PageLayout>
    <Card />
    <div className="w-[94%] poppins mx-auto ">
      <div className="uppercase text-[#0d1a50] text-2xl -mt-2 font-bold">best seller product</div>
    </div>
    <Card2 />
    <BrandsCard />
    <JustForYou/>
  </PageLayout >
  )
}

export default Homepage