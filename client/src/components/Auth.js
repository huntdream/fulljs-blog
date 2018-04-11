import React, { Component } from 'react'
import FormItem from './FormItem/FormItem'
import Button from 'material-ui/Button'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: '#2e3d49',
  background: '#fff',
  borderBottom: '1px solid #fff',
  cursor: 'default'
}

class Sign extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      isSending: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  _onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.login(data, this.props.match.path)
  }

  render() {
    let { path } = this.props.match
    let label = {
      '/signin': 'Sign In',
      '/signup': 'Sign Up'
    }
    return (
      <div className="form-container">
        <div className="sign-pane">
          <NavLink
            className="sign-pane__item"
            to="/signin"
            activeStyle={activeStyle}
          >
            Sign In
          </NavLink>
          <NavLink
            className="sign-pane__item"
            to="/signup"
            activeStyle={activeStyle}
          >
            Sign Up
          </NavLink>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <FormItem
              label="Username"
              refName="username"
              onChange={this._onChange}
              error={this.props.message}
            />
            <FormItem
              type="password"
              label="Password"
              refName="password"
              onChange={this._onChange}
            />
          </div>
          <Button type="submit" variant="raised" color="primary">
            {label[path]}
          </Button>
        </form>
      </div>
    )
  }
}

export default Sign
