import { combineReducers } from 'redux';

let initialState = {
  posts: {
    items: [],
    isFetching: true,
    hasError: false
  },
  isDrawerOpen: false
};

//fetch posts
function posts(state = initialState.posts, action) {
  switch (action.type) {
    case 'ITEMS_HAVE_ERROR':
      return { ...state, hasError: action.hasError };
    case 'ITEMS_ARE_LOADING':
      return { ...state, isFetching: action.isFetching };
    case 'ITEMS_FETCH_SUCCESS':
      return { ...state, items: action.items };
    default:
      return state;
  }
}

//drawer control
function isDrawerOpen(state = initialState.isDrawerOpen, action) {
  switch (action.type) {
    case 'IS_DRAWER_OPEN':
      return !state;
    default:
      return state;
  }
}

const reducers = combineReducers({
  posts,
  isDrawerOpen
});

export default reducers;
