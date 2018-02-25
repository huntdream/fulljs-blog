import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleDrawer } from '../redux/actions/control';
import Header from '../components/Header';

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(toggleDrawer())
});

const HiHeader = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);

export default HiHeader;
