import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import menuIcon from '../assets/menu.png';
import HiLogout from '../containers/HiLogout';

const activeNav = {
  borderBottom: '2px solid rgb(28, 148, 224)',
  color: '#1b95e0'
};

class Header extends Component {
  render() {
    let { isAuthenticated, location } = this.props;
    return (
      <div className="top-bar">
        <div className="global-nav">
          <div className="global-nav-innner">
            <div className="nav-inner-left">
              <ul className="nav-list">
                <li className="nav-list__item">
                  <div className="toggle-menu">
                    <IconButton
                      color="inherit"
                      aria-label="Menu"
                      onClick={this.props.openDrawer}
                    >
                      <img src={menuIcon} alt="menu" />
                    </IconButton>
                  </div>
                </li>
                <li className="nav-list__item">
                  <NavLink exact to="/" activeStyle={activeNav}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-list__item">
                  <NavLink to="/moments" activeStyle={activeNav}>
                    Moments
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav-inner-right">
              <div
                className="sign-in-up"
                style={{ display: location.pathname === '/signin' && 'none' }}
              >
                {isAuthenticated ? (
                  <React.Fragment>
                    <Button
                      variant="raised"
                      color="primary"
                      size="small"
                      component={props => <Link to="/newpost" {...props} />}
                    >
                      New
                    </Button>
                    <HiLogout />
                  </React.Fragment>
                ) : (
                  <Button
                    variant="raised"
                    color="primary"
                    size="small"
                    component={props => <Link to="/signin" {...props} />}
                  >
                    Sign in
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
