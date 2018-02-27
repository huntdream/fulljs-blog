import { connect } from 'react-redux';
import { itemFetchData } from '../redux/actions/fetchPosts';
import Article from '../components/Article';

const mapStateToProps = ({ posts }) => ({
  post: posts[0]
});

const mapDispatchToProps = dispatch => ({
  fetchPost: path => dispatch(itemFetchData(path))
});

const HiArticle = connect(mapStateToProps, mapDispatchToProps)(Article);
export default HiArticle;
