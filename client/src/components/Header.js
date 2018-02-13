import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const activeNav = {
  borderBottom: '2px solid rgb(28, 148, 224)',
  color: '#1b95e0',
  height: '44px'
};

class Header extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="global-nav">
          <div className="global-nav-innner">
            <div className="nav-inner-left">
              <ul className="nav-list">
                <li className="nav-list__item">
                  <div className="toggle-menu">
                    <i
                      className="material-icons"
                      onClick={this.props.openDrawer}
                    >
                      menu
                    </i>
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
              <div className="search-btn">
                <i className="material-icons">search</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
