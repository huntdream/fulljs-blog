import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleDrawer } from '../redux/actions/';
import Header from '../components/Header';

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(toggleDrawer())
});

const VisibleHeader = withRouter(connect(null, mapDispatchToProps)(Header));

export default VisibleHeader;
