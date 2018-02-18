import React, { Component } from 'react';
import './style.css';

class FormItem extends Component {
  constructor() {
    super();
    this.state = {
      isFocus: false
    };
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }

  _onFocus() {
    this.setState({
      isFocus: true
    });
  }

  _onBlur() {
    if (this._ref.value === '') {
      this.setState({
        isFocus: false
      });
    }
  }

  render() {
    return (
      <div className="form-item">
        <input
          type="text"
          className="md-input"
          ref={node => (this._ref = node)}
          name={this.props.refName}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          onChange={this.props.onChange}
          required
        />
        <div
          className="md-label"
          style={
            this.state.isFocus
              ? { transform: 'scale(0.75) translateY(-100%)' }
              : { transform: 'translateY(0)' }
          }
        >
          {this.props.label}
        </div>
        <span
          className="md-highlight"
          style={
            this.state.isFocus
              ? { transform: 'scale(1)' }
              : { transform: 'scale(0)' }
          }
        />
        <span className="md-bar" />
      </div>
    );
  }
}

export default FormItem;
