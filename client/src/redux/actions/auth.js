import { dev, prod } from '../../config/host';
// constants
const REQUEST_LOGIN = 'REQUEST_LOGIN';
const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
const ERROR_LOGIN = 'ERROR_LOGIN';
const AUTHENTICATE = 'AUTHENTICATE';

const requestLogin = creds => ({
  type: REQUEST_LOGIN,
  isFetching: true,
  isAuthenticated: false,
  creds
});

const authenticate = bool => ({
  type: AUTHENTICATE,
  isAuthenticated: bool
});

const receiveLogin = token => ({
  type: RECEIVE_LOGIN,
  isFetching: false,
  isAuthenticated: true,
  token
});

const errorLogin = message => ({
  type: ERROR_LOGIN,
  isFetching: false,
  isAuthenticated: false,
  message
});

export const login = (creds, path) => {
  let config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(creds)
  };

  return dispatch => {
    dispatch(requestLogin);
    fetch(prod + path, config)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          localStorage.setItem('token', res.token);
          dispatch(receiveLogin(res.token));
        } else {
          dispatch(errorLogin(res.message));
        }
      })
      .catch(err => console.log('ERROR:', err));
  };
};

export const initAuth = () => {
  let token = localStorage.getItem('token');
  return dispatch => {
    if (token) {
      dispatch(receiveLogin(token));
    }
  };
};
