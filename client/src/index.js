import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import posts from './redux/reducers';

let store = createStore(
  posts,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
