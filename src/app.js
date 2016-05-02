import React from 'react'
import { render } from 'react-DOM'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import routes from './routes.js'
import store from './store/store.js'

render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('container'))
