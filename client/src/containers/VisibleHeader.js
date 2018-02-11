import { connect } from 'react-redux';
import { toggleDrawer } from '../redux/actions/';
import Header from '../components/Header';

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(toggleDrawer())
});

const VisibleHeader = connect(null, mapDispatchToProps)(Header);

export default VisibleHeader;
