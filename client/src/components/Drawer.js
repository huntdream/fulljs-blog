import React, { Component } from 'react';
import bg from '../assets/wings.jpg';
import avatar from '../assets/avatar.jpg';

const style = {
  backgroundImage: {
    backgroundImage: `url(${bg})`
  },
  showDrawer: {
    transform: 'translateX(0)'
  },
  closeDrawer: {
    transform: 'translateX(-100%)'
  },
  hideMask: {
    opcity: 0,
    pointerEvent: 'none'
  }
};

class Drawer extends Component {
  constructor() {
    super();
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(e) {
    if (e.target.classList.contains('drawer--mask')) {
      this.props.closeDrawer();
    }
  }

  render() {
    return (
      <aside className="drawer" onClick={this.toggleDrawer}>
        <div
          className={
            'drawer--mask ' + (this.props.isDrawerOpen && ' drawer--open')
          }
        />
        <div
          className="drawer--wrapper md-box-shadow"
          style={
            (this.props.isDrawerOpen && style.showDrawer) || style.closeDrawer
          }
        >
          <div className="drawer--bg" style={style.backgroundImage} />
          <div className="drawer--content">
            <div className="drawer--avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="drawer--user">
              <div className="user--name">Yu Mao</div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default Drawer;
