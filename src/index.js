import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

import App from './App'

const initialState = {
  sex: '',
  name: '',
  email: '',
  date: '',
  zodiacalSign: '',
  prediction: ''
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
