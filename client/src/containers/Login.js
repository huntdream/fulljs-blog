import Sign from '../components/Auth';
import { connect } from 'react-redux';
import { login } from '../redux/actions/auth';

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  isFetching: auth.isFetching,
  token: auth.token,
  creds: auth.creds,
  message: auth.message
});

const mapDispatchToProps = dispatch => {
  return {
    login: (creds, path) => dispatch(login(creds, path))
  };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(Sign);

export default Login;
