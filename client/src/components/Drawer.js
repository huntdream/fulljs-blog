import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import bg from '../assets/wings.jpg'
import avatar from '../assets/avatar.jpg'

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
}

class Drawer extends Component {
  constructor() {
    super()
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer(e) {
    if (e.target.classList.contains('drawer__mask')) {
      console.log(e.target)
      this.props.closeDrawer()
    }
  }

  render() {
    return (
      <aside className="drawer" onClick={this.toggleDrawer}>
        <div
          className={
            'drawer__mask ' + (this.props.isDrawerOpen && ' drawer__open')
          }
        />
        <div
          className="drawer__wrapper md-box-shadow"
          style={
            (this.props.isDrawerOpen && style.showDrawer) || style.closeDrawer
          }
        >
          <div className="drawer__bg" style={style.backgroundImage} />
          <div className="drawer__user">
            <div className="drawer__avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="drawer__username">
              <div className="user__name">Yu Mao</div>
            </div>
          </div>
          <div className="drawer__menu">
            <ul className="menu-list">
              <li className="list-item">
                <Link className="list-item__link" to="/category">
                  Category
                </Link>
              </li>
              <li className="list-item">
                <a className="list-item__link">Messages</a>
              </li>
              <li className="list-item">
                <a className="list-item__link">About</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    )
  }
}

export default Drawer
