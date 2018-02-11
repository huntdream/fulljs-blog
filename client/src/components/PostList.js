import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import img from '../assets/wings.jpg';

const linkStyle = {
  backgroundImage: `url(${img})`,
  display: 'block',
  width: '200px',
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
    this.props.fetchPosts('http://localhost:3000/poetries?page=1');
  }

  renderList(posts) {
    return posts.map(item => (
      <div key={item.id} className="post-item md-box-shadow">
        <div className="post-item--img">
          <Link to={`/${item.id}`} style={linkStyle} />
        </div>
        <div className="post-item--content">
          <h3 className="post-item--title">
            <Link to={`/${item.id}`}>{item.title}</Link>
          </h3>
          <div className="post-item--author">{item.name}</div>
        </div>
      </div>
    ));
  }

  render() {
    console.log(this.props.isFetching);
    if (this.props.isFetching) {
      return <p>Loading</p>;
    }

    return (
      <div className="page-lists">
        {this.renderList(this.props.items.poetries)}
      </div>
    );
  }
}

export default PostList;
