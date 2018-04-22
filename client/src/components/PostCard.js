import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/wings.jpg'
import LazyImage from './LazyImage'
import preLoad from '../assets/avatar.jpg'

const PostCard = ({ item }) => {
  return (
    <div className="post-item md-box-shadow">
      <Link to={`/${item.link}`} className="post-href">
        <LazyImage srcPreload={preLoad} srcLoaded={img} />
        <div className="post-item__content">
          <div className="content__wrapper">
            <h2 className="post-item__title">{item.title}</h2>
            <div className="post-item__info">
              <div className="post-item__author">{item.author}</div>
              <div className="post-item__date">
                {new Date(item.date).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard
