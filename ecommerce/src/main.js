import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainHome from './MainHome/mainHome'
import SecondPadge from './SecondPadge/second'

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainHome}></Route>
      <Route exact path='/seond' component={SecondPadge}></Route>
    </Switch>
  )
}

export default Main
