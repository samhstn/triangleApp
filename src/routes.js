import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Index from './index.js'
import Home from './components/home.js'
import Equilateral from './components/equilateral.js'
import Obtuse from './components/obtuseTriangle.js'
import RightAngle from './components/rightAngle.js'

export default (
  <Route path='/' component={Index}>
    <IndexRoute component={Home} />
    <Route path='/equilateral' component={Equilateral} />
    <Route path='/obtuse' component={Obtuse} />
    <Route path='/rightAngle' component={RightAngle} />
  </Route>
)
