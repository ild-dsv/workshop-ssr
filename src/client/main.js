import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

function render(Component) {
  ReactDOM.hydrate(
    <Component />
  ,
    document.getElementById('react-root')
  )
}

render(App)
