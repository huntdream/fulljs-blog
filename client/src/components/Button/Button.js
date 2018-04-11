import React, { Component } from 'react'

class Button extends Component {
  constructor() {
    super()
    this.state = {
      left: 0,
      top: 0
    }
    this._onClick = this._onClick.bind(this)
  }

  _onClick(e) {
    e.preventDefault()
    let left = e.clientX - e.target.getBoundingClientRect().left - 12.5
    let top = e.clientY - e.target.getBoundingClientRect().top - 12.5
    console.table({
      x: e.clientX,
      y: e.clientY,
      left: e.target.getBoundingClientRect().left,
      top: e.target.getBoundingClientRect().top
    })
    console.log(left, top)
    this.setState({
      left,
      top
    })
    this.ripple.className = 'ripple ripple-active'
    setTimeout(() => (this.ripple.className = 'ripple'), 575)
  }

  render() {
    return (
      <button className="button" onClick={this._onClick}>
        <span>{this.props.label}</span>
        <span
          ref={node => (this.ripple = node)}
          className="ripple"
          style={{ left: this.state.left, top: this.state.top }}
        />
      </button>
    )
  }
}

export default Button
