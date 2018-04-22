import React, { Component } from 'react'

class DocumentTitle extends Component {
  componentDidMount() {
    document.title = this.props.title
  }

  render() {
    return this.props.children
  }
}

export default DocumentTitle
