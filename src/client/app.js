import React from 'react';
import { hot } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from '../shared/route'

const App = () => (
  <BrowserRouter>
		{renderRoutes(routes)}
  </BrowserRouter>
);

export default hot(module)(App)
