import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import Head from '../Head'
import Header from '../Header'

export default class AppRoot extends Component {
  render() {
    const { route } = this.props
    return (
      <div>
        <Head />
        <Header />
        {renderRoutes(route.routes)}
      </div>
    )
  }
}
