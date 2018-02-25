import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import HiHeader from '../containers/HiHeader';
import Posts from '../containers/Posts';
import HiDrawer from '../containers/HiDrawer';
import NewPost from './NewPost.js';
import Login from '../containers/Login';

import { initAuth } from '../redux/actions/auth';

class App extends Component {
  componentWillMount() {
    const token = localStorage.getItem('token');
    this.props.initAuth(token);
  }
  render() {
    return (
      <Router>
        <div className="container">
          <HiHeader />
          <HiDrawer />
          <div className="page-container">
            <div className="page-outer">
              <div role="main" className="content-main">
                <Route exact path="/" component={Posts} />
                <Route
                  path="/moments"
                  render={() => (
                    <h1 align="center">
                      Current component is under construction
                    </h1>
                  )}
                />
                <Route path="/newpost" component={NewPost} />
                {/* <Route path="/signup" component={Signup} /> */}
                <Route path="/signin" component={Login} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initAuth: token => dispatch(initAuth(token))
});

export default connect(null, mapDispatchToProps)(App);
