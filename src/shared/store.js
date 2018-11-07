import { applyMiddleware, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers'

const configureStore = (isServer) => {
  if (isServer) {
    return createStore(rootReducer, {}, applyMiddleware(reduxThunk))
  }
  
  return createStore(rootReducer, window.__INITIAL_STATE__, composeWithDevTools(
    applyMiddleware(reduxThunk),
    // other store enhancers if any
  ))
}

export default configureStore
