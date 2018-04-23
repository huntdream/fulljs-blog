import React from 'react'
import { hydrate } from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import store from './redux/store'

console.log(store.getState())

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
