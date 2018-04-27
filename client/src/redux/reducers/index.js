import { combineReducers } from 'redux'
import { posts } from './posts'
import { isDrawerOpen } from './control'
import { auth } from './auth'

const reducers = combineReducers({
  posts,
  isDrawerOpen,
  auth
})

export default reducers
