import { combineReducers } from 'redux';
import { posts } from './posts';
import { isDrawerOpen } from './control';
import { userAuthenticate } from './user';

const reducers = combineReducers({
  posts,
  isDrawerOpen,
  auth: userAuthenticate
});

export default reducers;
