import React from 'react'

import Homepage from './Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Carocard from './components/Carocard'

const App = () => {
  return (
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/caro' element={<Carocard/>}/>
   </Routes>
  </BrowserRouter>

  )
}

export default App