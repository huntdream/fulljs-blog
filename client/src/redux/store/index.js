import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import reducers from '../reducers';

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

console.log(store.getState());

export default store;
