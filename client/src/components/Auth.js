import React, { Component } from 'react';
import FormItem from './FormItem/FormItem';
import Button from 'material-ui/Button';

class Sign extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isSending: false
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

    this.props.login(data);
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
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
          <Button type="submit" variant="raised" color="primary">
            Sign In
          </Button>
        </form>
      </div>
    );
  }
}

export default Sign;
