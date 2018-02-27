import { host } from '../../config/host';
// constants
const REQUEST_LOGIN = 'REQUEST_LOGIN';
const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
const ERROR_LOGIN = 'ERROR_LOGIN';

const requestLogin = creds => ({
  type: REQUEST_LOGIN,
  isFetching: true,
  isAuthenticated: false,
  creds
});

const receiveLogin = (token, username, message) => ({
  type: RECEIVE_LOGIN,
  isFetching: false,
  isAuthenticated: true,
  username,
  message,
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
    fetch(host + path, config)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.success) {
          localStorage.setItem('token', res.token);
          dispatch(receiveLogin(res.token, res.username, res.message));
        } else {
          dispatch(errorLogin(res.message));
          throw Error('err');
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
