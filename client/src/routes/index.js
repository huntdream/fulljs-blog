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
    title: 'Home',
    component: Posts
  },
  {
    path: '/signin',
    exact: true,
    title: 'Sign In',
    component: AsyncLogin
  },
  {
    path: '/signup',
    exact: true,
    title: 'Sign Up',
    component: AsyncLogin
  },
  {
    path: '/newpost',
    exact: true,
    title: 'New Post',
    component: AsyncNewPost
  },
  {
    path: '/category',
    exact: true,
    title: 'Category',
    component: Category
  },
  {
    path: '/music',
    exact: true,
    title: 'Music',
    component: Music
  },
  {
    path: '/:link',
    exact: true,
    title: 'Article',
    component: HiArticle
  }
]

export default routes
