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
    fetch(`http://localhost:3000/${path}`, config)
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
