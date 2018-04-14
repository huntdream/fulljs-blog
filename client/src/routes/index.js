import React from 'react'
import Posts from '../containers/Posts'
import HiArticle from '../containers/HiArticle'
import Loading from '../components/Loading'
import Category from '../components/Category'
import Loadable from 'react-loadable'

const Music = () => <div>Component for Netease Music</div>

const AsyncLogin = Loadable({
  loader: () => import('../containers/Login'),
  loading: Loading
})

const AsyncNewPost = Loadable({
  loader: () => import('../components/NewPost'),
  loading: Loading
})

const routes = [
  {
    path: '/',
    exact: true,
    component: Posts
  },
  {
    path: '/signin',
    exact: true,
    component: AsyncLogin
  },
  {
    path: '/signup',
    exact: true,
    component: AsyncLogin
  },
  {
    path: '/newpost',
    exact: true,
    component: AsyncNewPost
  },
  {
    path: '/category',
    exact: true,
    component: Category
  },
  {
    path: '/music',
    exact: true,
    component: Music
  },
  {
    path: '/:link',
    exact: true,
    component: HiArticle
  }
]

export default routes
