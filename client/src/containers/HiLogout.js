import { connect } from 'react-redux';
import { logoutAction } from '../redux/actions/auth';
import Logout from '../components/Logout';

// const mapStateToProps = ({auth})=>({
//     isAuthenticated:auth.isAuthenticated,

// })

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction())
});

const HiLogout = connect(null, mapDispatchToProps)(Logout);
export default HiLogout;
