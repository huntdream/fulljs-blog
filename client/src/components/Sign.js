import React, { Component } from 'react';
import FormItem from './FormItem/FormItem';
import Button from 'material-ui/Button';

class SignUp extends Component {
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
    fetch(`http://localhost:3000/${this.props.path}`, {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ message: res.message });
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

export default SignUp;
