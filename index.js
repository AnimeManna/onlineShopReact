import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/components/app.jsx'
import {
  BrowserRouter
} from 'react-router-dom'
import {
  Provider
} from 'react-redux'
import store from './src/store.js'

import './src/styles/index.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root'))
