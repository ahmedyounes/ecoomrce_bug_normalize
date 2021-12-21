import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainHome from './MainHome'
import SecondPadge from './SecondPadge'

const Main = () => {
  return (
    <Routes>
      <Route path='/seond' element={SecondPadge}></Route>
      <Route exact path='/' element={MainHome}></Route>
    </Routes>
  )
}

export default Main
