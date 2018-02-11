import PostList from '../components/PostList';
import { connect } from 'react-redux';
import { itemFetchData } from '../redux/actions/index';

const mapStateToProps = ({ posts }) => {
  return {
    items: posts.items,
    isFetching: posts.isFetching,
    hasError: posts.hasError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: url => dispatch(itemFetchData(url))
  };
};

const ShowPost = connect(mapStateToProps, mapDispatchToProps)(PostList);
export default ShowPost;
