import React, { Component } from 'react';
import FormItem from './FormItem/FormItem';
import Button from 'material-ui/Button';
import Auth from '../modules/Auth';

class Sign extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  _onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(JSON.stringify(data));
    fetch(`http://localhost:3000/${this.props.path}`, {
      method: 'POST',
      // mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ message: res.message });
        if (res.success) {
          if (this.props.path === 'signin') {
            Auth.authenticateUser(res.token);
            // this.props.history.push('/');
          }
          // if (this.props.path === 'signup') {
          //   this.props.history.push('/signin');
          // }
        }
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <FormItem
            label="Username"
            refName="username"
            onChange={this._onChange}
            error={this.state.message}
          />
          <FormItem
            type="password"
            label="Password"
            refName="password"
            onChange={this._onChange}
          />
          <Button type="submit" variant="raised" color="primary">
            {this.props.label}
          </Button>
        </form>
      </div>
    );
  }
}

export default Sign;
