import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollTo extends Component {
  componentDidUpdate(prevProps) {
    console.log(this.props.history.location.key);
    if (this.props.history.location !== prevProps.history.location) {
      this.props.location.key = prevProps.location.key;
      console.log('this is inside');
    }
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(ScrollTo);
