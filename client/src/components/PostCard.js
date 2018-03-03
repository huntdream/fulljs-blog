import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/wings.jpg';

const linkStyle = {
  backgroundImage: `url(${img})`
};

const PostCard = ({ item }) => {
  return (
    <div className="post-item md-box-shadow">
      <div className="post-item__img">
        <Link to={`/${item.link}`} style={linkStyle} />
      </div>
      <div className="post-item__content">
        <div className="content__wrapper">
          <Link to={`/${item.link}`}>
            <h3 className="post-item__title">{item.title}</h3>
          </Link>
          <div className="post-item__author">{item.author}</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
