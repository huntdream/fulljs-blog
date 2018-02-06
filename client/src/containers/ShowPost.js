import React from 'react';
import PostList from '../components/PostList';
import { connect } from 'react-redux';
import { itemFetchData } from '../redux/actions/index';

const mapStateToProps = state => {
  return {
    items: state.items,
    isFetching: state.isFetching,
    hasError: state.hasError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: url => dispatch(itemFetchData(url))
  };
};

const ShowPost = connect(mapStateToProps, mapDispatchToProps)(PostList);
export default ShowPost;
