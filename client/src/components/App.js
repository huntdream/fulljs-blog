import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css'
import HiHeader from '../containers/HiHeader'
import HiDrawer from '../containers/HiDrawer'
import DocumentTitle from './DocumentTitle'
import routes from '../routes'
import { initAuth } from '../redux/actions/auth'

class App extends Component {
  componentWillMount() {
    const token = localStorage.getItem('token')
    this.props.initAuth(token)
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
                <Switch>
                  {routes.map(
                    ({ path, exact, title, component: Component }) => (
                      <Route
                        path={path}
                        exact={exact}
                        render={props => (
                          <DocumentTitle key={path} title={title}>
                            <Component {...props} />
                          </DocumentTitle>
                        )}
                        key={path}
                      />
                    )
                  )}
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  initAuth: token => dispatch(initAuth(token))
})

export default connect(null, mapDispatchToProps)(App)
