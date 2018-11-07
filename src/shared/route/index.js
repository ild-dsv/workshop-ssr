import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Head from '../components/Head'
import Header from '../components/Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Page404 from '../pages/Page404'

export default () => (
  <div>
    <Head />
    <Header />
    <Switch>
      <Route 
        exact
        path="/"
        component={Home}
      />
      <Route 
        path="/home"
        component={Home}
      />
      <Route 
        path="/about"
        component={About}
      />
      <Route 
        path="*"
        component={Page404}
      />
    </Switch>
  </div>
)