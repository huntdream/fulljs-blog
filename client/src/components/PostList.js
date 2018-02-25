import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress } from 'material-ui/Progress';
import img from '../assets/wings.jpg';

const linkStyle = {
  backgroundImage: `url(${img})`,
  display: 'block',
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%'
};

class PostList extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts('posts');
  }

  renderList(posts) {
    return posts.map((item, idx) => (
      <div key={idx} className="post-item md-box-shadow">
        <div className="post-item__img">
          <Link to={`/${item.link}`} style={linkStyle} />
        </div>
        <div className="post-item__content">
          <div className="content__wrapper">
            <h3 className="post-item__title">
              <Link to={`/${item.link}`}>{item.title}</Link>
            </h3>
            <div className="post-item__author">{item.author}</div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    if (this.props.isFetching) {
      return (
        <div className="page-lists">
          <CircularProgress size={30} thickness={4} />
        </div>
      );
    }

    return (
      <div className="page-lists">{this.renderList(this.props.items)}</div>
    );
  }
}

export default PostList;
