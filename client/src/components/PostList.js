import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts('http://localhost:3000/poetries?page=1');
  }

  renderList(posts) {
    console.log(typeof posts, 'hello');
    return posts.map(item => <div key={item.id}>{item.title}</div>);
  }

  render() {
    if (this.props.isFetching) {
      return <p>Loading</p>;
    }

    return <div>{this.renderList(this.props.items.poetries)}</div>;
  }
}

export default PostList;
