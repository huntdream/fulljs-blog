import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

  componentDidMount() {
    this.props.fetchPosts('http://localhost:3000/poetries?author=李白');
  }

  renderList(posts) {
    return posts.map(item => (
      <div key={item.id} className="post-item md-box-shadow">
        <div className="post-item__img">
          <Link to={`/${item.id}`} style={linkStyle} />
        </div>
        <div className="post-item__content">
          <div className="content__wrapper">
            <h3 className="post-item__title">
              <Link to={`/${item.id}`}>{item.title}</Link>
            </h3>
            <div className="post-item__author">{item.author}</div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    if (this.props.isFetching) {
      return <p>Loading</p>;
    }

    return (
      <div className="page-lists">{this.renderList(this.props.items)}</div>
    );
  }
}

export default PostList;
