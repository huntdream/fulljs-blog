import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import ScrollTo from './ScrollTo';
import '../App.css';
import HiHeader from '../containers/HiHeader';
import Posts from '../containers/Posts';
import HiDrawer from '../containers/HiDrawer';
import HiArticle from '../containers/HiArticle';
import { initAuth } from '../redux/actions/auth';
import Loading from './Loading';
const AsyncLogin = Loadable({
  loader: () => import('../containers/Login'),
  loading: Loading
});

const AsyncNewPost = Loadable({
  loader: () => import('./NewPost'),
  loading: Loading
});

class App extends Component {
  componentWillMount() {
    const token = localStorage.getItem('token');
    this.props.initAuth(token);
  }

  render() {
    return (
      <Router>
        <ScrollTo>
          <div className="container">
            <HiHeader />
            <HiDrawer />
            <div className="page-container">
              <div className="page-outer">
                <div role="main" className="content-main">
                  <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route
                      path="/moments"
                      render={() => (
                        <h1 align="center">
                          Current component is under construction
                        </h1>
                      )}
                    />
                    <Route exact path="/newpost" component={AsyncNewPost} />
                    <Route exact path="/signup" component={AsyncLogin} />
                    <Route exact path="/signin" component={AsyncLogin} />
                    <Route path="/:link" component={HiArticle} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </ScrollTo>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initAuth: token => dispatch(initAuth(token))
});

export default connect(null, mapDispatchToProps)(App);
