import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress } from 'material-ui/Progress';
import PostCard from './PostCard';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts('/posts');
  }

  renderList(posts) {
    return posts.map((item, idx) => <PostCard item={item} key={idx} />);
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
