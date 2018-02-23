import { connect } from 'react-redux';
import { toggleDrawer } from '../redux/actions/';
import Drawer from '../components/Drawer';

const mapStateToProps = ({ isDrawerOpen }) => ({
  isDrawerOpen
});

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => dispatch(toggleDrawer())
});

const HiDrawer = connect(mapStateToProps, mapDispatchToProps)(Drawer);

export default HiDrawer;
