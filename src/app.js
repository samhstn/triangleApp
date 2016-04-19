import React from 'react'
import { render } from 'react-DOM'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'

import routes from './routes.js'
import reducers from './reducers/index.js'

const createStoreWithMiddleware = applyMiddleware()(createStore)

render((
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('container'))
