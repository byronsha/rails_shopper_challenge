import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './components/App'
import Signup from './components/Signup'
import Funnel from './components/Funnel'

const routes = (
  <Route path="/" component={App}>
    <Route path="/signup" component={Signup} />
    <Route path="/funnel" component={Funnel} />
  </Route>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
  )
})