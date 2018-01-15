import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';

import Main from './Main';
import Sider from './Sider';
import Header from './Header';
import Article from './Article';

const Hello = ({ match }) => (
    <h1> Hello {match.path}</h1>
)

class App extends Component {
    render() {

        return (
            <Router>
                <React.Fragment>
                    <Header />
                    <div className="wrapper">
                        <Sider />
                        <main className="main">
                            <div className="content">
                                <Switch>
                                    <Route exact path="/" component={Main} />
                                    <Route path="/articles" component={Hello} />
                                    <Route path="/category" component={Hello} />
                                    <Route path="/tags" component={Hello} />
                                    <Route path="/:article" component={Article} />

                                </Switch>
                            </div>
                        </main>
                    </div>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
