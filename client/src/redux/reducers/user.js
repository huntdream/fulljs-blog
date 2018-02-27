let initialState = {
  isAuthenticated: false,
  isFetching: false,
  token: '',
  creds: '',
  message: ''
};

export function userAuthenticate(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        creds: action.creds
      };
    case 'RECEIVE_LOGIN':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        message: action.message,
        token: action.token
      };
    case 'ERROR_LOGIN':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        message: action.message
      };
    default:
      return state;
  }
}
